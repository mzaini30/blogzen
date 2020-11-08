
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
var app = (function () {
    'use strict';

    function noop() { }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }

    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function destroy_each(iterations, detaching) {
        for (let i = 0; i < iterations.length; i += 1) {
            if (iterations[i])
                iterations[i].d(detaching);
        }
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function empty() {
        return text('');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function prevent_default(fn) {
        return function (event) {
            event.preventDefault();
            // @ts-ignore
            return fn.call(this, event);
        };
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_input_value(input, value) {
        input.value = value == null ? '' : value;
    }
    function custom_event(type, detail) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, false, false, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }
    function get_current_component() {
        if (!current_component)
            throw new Error(`Function called outside component initialization`);
        return current_component;
    }
    function beforeUpdate(fn) {
        get_current_component().$$.before_update.push(fn);
    }
    function onMount(fn) {
        get_current_component().$$.on_mount.push(fn);
    }
    function afterUpdate(fn) {
        get_current_component().$$.after_update.push(fn);
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    let flushing = false;
    const seen_callbacks = new Set();
    function flush() {
        if (flushing)
            return;
        flushing = true;
        do {
            // first, call beforeUpdate functions
            // and update components
            for (let i = 0; i < dirty_components.length; i += 1) {
                const component = dirty_components[i];
                set_current_component(component);
                update(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        flushing = false;
        seen_callbacks.clear();
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    let outros;
    function group_outros() {
        outros = {
            r: 0,
            c: [],
            p: outros // parent group
        };
    }
    function check_outros() {
        if (!outros.r) {
            run_all(outros.c);
        }
        outros = outros.p;
    }
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }

    const globals = (typeof window !== 'undefined'
        ? window
        : typeof globalThis !== 'undefined'
            ? globalThis
            : global);
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            const new_on_destroy = on_mount.map(run).filter(is_function);
            if (on_destroy) {
                on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const prop_values = options.props || {};
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            before_update: [],
            after_update: [],
            context: new Map(parent_component ? parent_component.$$.context : []),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false
        };
        let ready = false;
        $$.ctx = instance
            ? instance(component, prop_values, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor);
            flush();
        }
        set_current_component(parent_component);
    }
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.29.0' }, detail)));
    }
    function append_dev(target, node) {
        dispatch_dev("SvelteDOMInsert", { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev("SvelteDOMInsert", { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev("SvelteDOMRemove", { node });
        detach(node);
    }
    function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
        const modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
        if (has_prevent_default)
            modifiers.push('preventDefault');
        if (has_stop_propagation)
            modifiers.push('stopPropagation');
        dispatch_dev("SvelteDOMAddEventListener", { node, event, handler, modifiers });
        const dispose = listen(node, event, handler, options);
        return () => {
            dispatch_dev("SvelteDOMRemoveEventListener", { node, event, handler, modifiers });
            dispose();
        };
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev("SvelteDOMRemoveAttribute", { node, attribute });
        else
            dispatch_dev("SvelteDOMSetAttribute", { node, attribute, value });
    }
    function set_data_dev(text, data) {
        data = '' + data;
        if (text.wholeText === data)
            return;
        dispatch_dev("SvelteDOMSetData", { node: text, data });
        text.data = data;
    }
    function validate_each_argument(arg) {
        if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
            let msg = '{#each} only iterates over array-like objects.';
            if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
                msg += ' You can use a spread to convert this iterable into an array.';
            }
            throw new Error(msg);
        }
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error(`'target' is a required option`);
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn(`Component was already destroyed`); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn, basedir, module) {
    	return module = {
    	  path: basedir,
    	  exports: {},
    	  require: function (path, base) {
          return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
        }
    	}, fn(module, module.exports), module.exports;
    }

    function commonjsRequire () {
    	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
    }

    var page = createCommonjsModule(function (module, exports) {
    (function (global, factory) {
    	 module.exports = factory() ;
    }(commonjsGlobal, (function () {
    var isarray = Array.isArray || function (arr) {
      return Object.prototype.toString.call(arr) == '[object Array]';
    };

    /**
     * Expose `pathToRegexp`.
     */
    var pathToRegexp_1 = pathToRegexp;
    var parse_1 = parse;
    var compile_1 = compile;
    var tokensToFunction_1 = tokensToFunction;
    var tokensToRegExp_1 = tokensToRegExp;

    /**
     * The main path matching regexp utility.
     *
     * @type {RegExp}
     */
    var PATH_REGEXP = new RegExp([
      // Match escaped characters that would otherwise appear in future matches.
      // This allows the user to escape special characters that won't transform.
      '(\\\\.)',
      // Match Express-style parameters and un-named parameters with a prefix
      // and optional suffixes. Matches appear as:
      //
      // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
      // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
      // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
      '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))'
    ].join('|'), 'g');

    /**
     * Parse a string for the raw tokens.
     *
     * @param  {String} str
     * @return {Array}
     */
    function parse (str) {
      var tokens = [];
      var key = 0;
      var index = 0;
      var path = '';
      var res;

      while ((res = PATH_REGEXP.exec(str)) != null) {
        var m = res[0];
        var escaped = res[1];
        var offset = res.index;
        path += str.slice(index, offset);
        index = offset + m.length;

        // Ignore already escaped sequences.
        if (escaped) {
          path += escaped[1];
          continue
        }

        // Push the current path onto the tokens.
        if (path) {
          tokens.push(path);
          path = '';
        }

        var prefix = res[2];
        var name = res[3];
        var capture = res[4];
        var group = res[5];
        var suffix = res[6];
        var asterisk = res[7];

        var repeat = suffix === '+' || suffix === '*';
        var optional = suffix === '?' || suffix === '*';
        var delimiter = prefix || '/';
        var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?');

        tokens.push({
          name: name || key++,
          prefix: prefix || '',
          delimiter: delimiter,
          optional: optional,
          repeat: repeat,
          pattern: escapeGroup(pattern)
        });
      }

      // Match any characters still remaining.
      if (index < str.length) {
        path += str.substr(index);
      }

      // If the path exists, push it onto the end.
      if (path) {
        tokens.push(path);
      }

      return tokens
    }

    /**
     * Compile a string to a template function for the path.
     *
     * @param  {String}   str
     * @return {Function}
     */
    function compile (str) {
      return tokensToFunction(parse(str))
    }

    /**
     * Expose a method for transforming tokens into the path function.
     */
    function tokensToFunction (tokens) {
      // Compile all the tokens into regexps.
      var matches = new Array(tokens.length);

      // Compile all the patterns before compilation.
      for (var i = 0; i < tokens.length; i++) {
        if (typeof tokens[i] === 'object') {
          matches[i] = new RegExp('^' + tokens[i].pattern + '$');
        }
      }

      return function (obj) {
        var path = '';
        var data = obj || {};

        for (var i = 0; i < tokens.length; i++) {
          var token = tokens[i];

          if (typeof token === 'string') {
            path += token;

            continue
          }

          var value = data[token.name];
          var segment;

          if (value == null) {
            if (token.optional) {
              continue
            } else {
              throw new TypeError('Expected "' + token.name + '" to be defined')
            }
          }

          if (isarray(value)) {
            if (!token.repeat) {
              throw new TypeError('Expected "' + token.name + '" to not repeat, but received "' + value + '"')
            }

            if (value.length === 0) {
              if (token.optional) {
                continue
              } else {
                throw new TypeError('Expected "' + token.name + '" to not be empty')
              }
            }

            for (var j = 0; j < value.length; j++) {
              segment = encodeURIComponent(value[j]);

              if (!matches[i].test(segment)) {
                throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
              }

              path += (j === 0 ? token.prefix : token.delimiter) + segment;
            }

            continue
          }

          segment = encodeURIComponent(value);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
          }

          path += token.prefix + segment;
        }

        return path
      }
    }

    /**
     * Escape a regular expression string.
     *
     * @param  {String} str
     * @return {String}
     */
    function escapeString (str) {
      return str.replace(/([.+*?=^!:${}()[\]|\/])/g, '\\$1')
    }

    /**
     * Escape the capturing group by escaping special characters and meaning.
     *
     * @param  {String} group
     * @return {String}
     */
    function escapeGroup (group) {
      return group.replace(/([=!:$\/()])/g, '\\$1')
    }

    /**
     * Attach the keys as a property of the regexp.
     *
     * @param  {RegExp} re
     * @param  {Array}  keys
     * @return {RegExp}
     */
    function attachKeys (re, keys) {
      re.keys = keys;
      return re
    }

    /**
     * Get the flags for a regexp from the options.
     *
     * @param  {Object} options
     * @return {String}
     */
    function flags (options) {
      return options.sensitive ? '' : 'i'
    }

    /**
     * Pull out keys from a regexp.
     *
     * @param  {RegExp} path
     * @param  {Array}  keys
     * @return {RegExp}
     */
    function regexpToRegexp (path, keys) {
      // Use a negative lookahead to match only capturing groups.
      var groups = path.source.match(/\((?!\?)/g);

      if (groups) {
        for (var i = 0; i < groups.length; i++) {
          keys.push({
            name: i,
            prefix: null,
            delimiter: null,
            optional: false,
            repeat: false,
            pattern: null
          });
        }
      }

      return attachKeys(path, keys)
    }

    /**
     * Transform an array into a regexp.
     *
     * @param  {Array}  path
     * @param  {Array}  keys
     * @param  {Object} options
     * @return {RegExp}
     */
    function arrayToRegexp (path, keys, options) {
      var parts = [];

      for (var i = 0; i < path.length; i++) {
        parts.push(pathToRegexp(path[i], keys, options).source);
      }

      var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

      return attachKeys(regexp, keys)
    }

    /**
     * Create a path regexp from string input.
     *
     * @param  {String} path
     * @param  {Array}  keys
     * @param  {Object} options
     * @return {RegExp}
     */
    function stringToRegexp (path, keys, options) {
      var tokens = parse(path);
      var re = tokensToRegExp(tokens, options);

      // Attach keys back to the regexp.
      for (var i = 0; i < tokens.length; i++) {
        if (typeof tokens[i] !== 'string') {
          keys.push(tokens[i]);
        }
      }

      return attachKeys(re, keys)
    }

    /**
     * Expose a function for taking tokens and returning a RegExp.
     *
     * @param  {Array}  tokens
     * @param  {Array}  keys
     * @param  {Object} options
     * @return {RegExp}
     */
    function tokensToRegExp (tokens, options) {
      options = options || {};

      var strict = options.strict;
      var end = options.end !== false;
      var route = '';
      var lastToken = tokens[tokens.length - 1];
      var endsWithSlash = typeof lastToken === 'string' && /\/$/.test(lastToken);

      // Iterate over the tokens and create our regexp string.
      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];

        if (typeof token === 'string') {
          route += escapeString(token);
        } else {
          var prefix = escapeString(token.prefix);
          var capture = token.pattern;

          if (token.repeat) {
            capture += '(?:' + prefix + capture + ')*';
          }

          if (token.optional) {
            if (prefix) {
              capture = '(?:' + prefix + '(' + capture + '))?';
            } else {
              capture = '(' + capture + ')?';
            }
          } else {
            capture = prefix + '(' + capture + ')';
          }

          route += capture;
        }
      }

      // In non-strict mode we allow a slash at the end of match. If the path to
      // match already ends with a slash, we remove it for consistency. The slash
      // is valid at the end of a path match, not in the middle. This is important
      // in non-ending mode, where "/test/" shouldn't match "/test//route".
      if (!strict) {
        route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?';
      }

      if (end) {
        route += '$';
      } else {
        // In non-ending mode, we need the capturing groups to match as much as
        // possible by using a positive lookahead to the end or next path segment.
        route += strict && endsWithSlash ? '' : '(?=\\/|$)';
      }

      return new RegExp('^' + route, flags(options))
    }

    /**
     * Normalize the given path string, returning a regular expression.
     *
     * An empty array can be passed in for the keys, which will hold the
     * placeholder key descriptions. For example, using `/user/:id`, `keys` will
     * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
     *
     * @param  {(String|RegExp|Array)} path
     * @param  {Array}                 [keys]
     * @param  {Object}                [options]
     * @return {RegExp}
     */
    function pathToRegexp (path, keys, options) {
      keys = keys || [];

      if (!isarray(keys)) {
        options = keys;
        keys = [];
      } else if (!options) {
        options = {};
      }

      if (path instanceof RegExp) {
        return regexpToRegexp(path, keys)
      }

      if (isarray(path)) {
        return arrayToRegexp(path, keys, options)
      }

      return stringToRegexp(path, keys, options)
    }

    pathToRegexp_1.parse = parse_1;
    pathToRegexp_1.compile = compile_1;
    pathToRegexp_1.tokensToFunction = tokensToFunction_1;
    pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

    /**
       * Module dependencies.
       */

      

      /**
       * Short-cuts for global-object checks
       */

      var hasDocument = ('undefined' !== typeof document);
      var hasWindow = ('undefined' !== typeof window);
      var hasHistory = ('undefined' !== typeof history);
      var hasProcess = typeof process !== 'undefined';

      /**
       * Detect click event
       */
      var clickEvent = hasDocument && document.ontouchstart ? 'touchstart' : 'click';

      /**
       * To work properly with the URL
       * history.location generated polyfill in https://github.com/devote/HTML5-History-API
       */

      var isLocation = hasWindow && !!(window.history.location || window.location);

      /**
       * The page instance
       * @api private
       */
      function Page() {
        // public things
        this.callbacks = [];
        this.exits = [];
        this.current = '';
        this.len = 0;

        // private things
        this._decodeURLComponents = true;
        this._base = '';
        this._strict = false;
        this._running = false;
        this._hashbang = false;

        // bound functions
        this.clickHandler = this.clickHandler.bind(this);
        this._onpopstate = this._onpopstate.bind(this);
      }

      /**
       * Configure the instance of page. This can be called multiple times.
       *
       * @param {Object} options
       * @api public
       */

      Page.prototype.configure = function(options) {
        var opts = options || {};

        this._window = opts.window || (hasWindow && window);
        this._decodeURLComponents = opts.decodeURLComponents !== false;
        this._popstate = opts.popstate !== false && hasWindow;
        this._click = opts.click !== false && hasDocument;
        this._hashbang = !!opts.hashbang;

        var _window = this._window;
        if(this._popstate) {
          _window.addEventListener('popstate', this._onpopstate, false);
        } else if(hasWindow) {
          _window.removeEventListener('popstate', this._onpopstate, false);
        }

        if (this._click) {
          _window.document.addEventListener(clickEvent, this.clickHandler, false);
        } else if(hasDocument) {
          _window.document.removeEventListener(clickEvent, this.clickHandler, false);
        }

        if(this._hashbang && hasWindow && !hasHistory) {
          _window.addEventListener('hashchange', this._onpopstate, false);
        } else if(hasWindow) {
          _window.removeEventListener('hashchange', this._onpopstate, false);
        }
      };

      /**
       * Get or set basepath to `path`.
       *
       * @param {string} path
       * @api public
       */

      Page.prototype.base = function(path) {
        if (0 === arguments.length) return this._base;
        this._base = path;
      };

      /**
       * Gets the `base`, which depends on whether we are using History or
       * hashbang routing.

       * @api private
       */
      Page.prototype._getBase = function() {
        var base = this._base;
        if(!!base) return base;
        var loc = hasWindow && this._window && this._window.location;

        if(hasWindow && this._hashbang && loc && loc.protocol === 'file:') {
          base = loc.pathname;
        }

        return base;
      };

      /**
       * Get or set strict path matching to `enable`
       *
       * @param {boolean} enable
       * @api public
       */

      Page.prototype.strict = function(enable) {
        if (0 === arguments.length) return this._strict;
        this._strict = enable;
      };


      /**
       * Bind with the given `options`.
       *
       * Options:
       *
       *    - `click` bind to click events [true]
       *    - `popstate` bind to popstate [true]
       *    - `dispatch` perform initial dispatch [true]
       *
       * @param {Object} options
       * @api public
       */

      Page.prototype.start = function(options) {
        var opts = options || {};
        this.configure(opts);

        if (false === opts.dispatch) return;
        this._running = true;

        var url;
        if(isLocation) {
          var window = this._window;
          var loc = window.location;

          if(this._hashbang && ~loc.hash.indexOf('#!')) {
            url = loc.hash.substr(2) + loc.search;
          } else if (this._hashbang) {
            url = loc.search + loc.hash;
          } else {
            url = loc.pathname + loc.search + loc.hash;
          }
        }

        this.replace(url, null, true, opts.dispatch);
      };

      /**
       * Unbind click and popstate event handlers.
       *
       * @api public
       */

      Page.prototype.stop = function() {
        if (!this._running) return;
        this.current = '';
        this.len = 0;
        this._running = false;

        var window = this._window;
        this._click && window.document.removeEventListener(clickEvent, this.clickHandler, false);
        hasWindow && window.removeEventListener('popstate', this._onpopstate, false);
        hasWindow && window.removeEventListener('hashchange', this._onpopstate, false);
      };

      /**
       * Show `path` with optional `state` object.
       *
       * @param {string} path
       * @param {Object=} state
       * @param {boolean=} dispatch
       * @param {boolean=} push
       * @return {!Context}
       * @api public
       */

      Page.prototype.show = function(path, state, dispatch, push) {
        var ctx = new Context(path, state, this),
          prev = this.prevContext;
        this.prevContext = ctx;
        this.current = ctx.path;
        if (false !== dispatch) this.dispatch(ctx, prev);
        if (false !== ctx.handled && false !== push) ctx.pushState();
        return ctx;
      };

      /**
       * Goes back in the history
       * Back should always let the current route push state and then go back.
       *
       * @param {string} path - fallback path to go back if no more history exists, if undefined defaults to page.base
       * @param {Object=} state
       * @api public
       */

      Page.prototype.back = function(path, state) {
        var page = this;
        if (this.len > 0) {
          var window = this._window;
          // this may need more testing to see if all browsers
          // wait for the next tick to go back in history
          hasHistory && window.history.back();
          this.len--;
        } else if (path) {
          setTimeout(function() {
            page.show(path, state);
          });
        } else {
          setTimeout(function() {
            page.show(page._getBase(), state);
          });
        }
      };

      /**
       * Register route to redirect from one path to other
       * or just redirect to another route
       *
       * @param {string} from - if param 'to' is undefined redirects to 'from'
       * @param {string=} to
       * @api public
       */
      Page.prototype.redirect = function(from, to) {
        var inst = this;

        // Define route from a path to another
        if ('string' === typeof from && 'string' === typeof to) {
          page.call(this, from, function(e) {
            setTimeout(function() {
              inst.replace(/** @type {!string} */ (to));
            }, 0);
          });
        }

        // Wait for the push state and replace it with another
        if ('string' === typeof from && 'undefined' === typeof to) {
          setTimeout(function() {
            inst.replace(from);
          }, 0);
        }
      };

      /**
       * Replace `path` with optional `state` object.
       *
       * @param {string} path
       * @param {Object=} state
       * @param {boolean=} init
       * @param {boolean=} dispatch
       * @return {!Context}
       * @api public
       */


      Page.prototype.replace = function(path, state, init, dispatch) {
        var ctx = new Context(path, state, this),
          prev = this.prevContext;
        this.prevContext = ctx;
        this.current = ctx.path;
        ctx.init = init;
        ctx.save(); // save before dispatching, which may redirect
        if (false !== dispatch) this.dispatch(ctx, prev);
        return ctx;
      };

      /**
       * Dispatch the given `ctx`.
       *
       * @param {Context} ctx
       * @api private
       */

      Page.prototype.dispatch = function(ctx, prev) {
        var i = 0, j = 0, page = this;

        function nextExit() {
          var fn = page.exits[j++];
          if (!fn) return nextEnter();
          fn(prev, nextExit);
        }

        function nextEnter() {
          var fn = page.callbacks[i++];

          if (ctx.path !== page.current) {
            ctx.handled = false;
            return;
          }
          if (!fn) return unhandled.call(page, ctx);
          fn(ctx, nextEnter);
        }

        if (prev) {
          nextExit();
        } else {
          nextEnter();
        }
      };

      /**
       * Register an exit route on `path` with
       * callback `fn()`, which will be called
       * on the previous context when a new
       * page is visited.
       */
      Page.prototype.exit = function(path, fn) {
        if (typeof path === 'function') {
          return this.exit('*', path);
        }

        var route = new Route(path, null, this);
        for (var i = 1; i < arguments.length; ++i) {
          this.exits.push(route.middleware(arguments[i]));
        }
      };

      /**
       * Handle "click" events.
       */

      /* jshint +W054 */
      Page.prototype.clickHandler = function(e) {
        if (1 !== this._which(e)) return;

        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
        if (e.defaultPrevented) return;

        // ensure link
        // use shadow dom when available if not, fall back to composedPath()
        // for browsers that only have shady
        var el = e.target;
        var eventPath = e.path || (e.composedPath ? e.composedPath() : null);

        if(eventPath) {
          for (var i = 0; i < eventPath.length; i++) {
            if (!eventPath[i].nodeName) continue;
            if (eventPath[i].nodeName.toUpperCase() !== 'A') continue;
            if (!eventPath[i].href) continue;

            el = eventPath[i];
            break;
          }
        }

        // continue ensure link
        // el.nodeName for svg links are 'a' instead of 'A'
        while (el && 'A' !== el.nodeName.toUpperCase()) el = el.parentNode;
        if (!el || 'A' !== el.nodeName.toUpperCase()) return;

        // check if link is inside an svg
        // in this case, both href and target are always inside an object
        var svg = (typeof el.href === 'object') && el.href.constructor.name === 'SVGAnimatedString';

        // Ignore if tag has
        // 1. "download" attribute
        // 2. rel="external" attribute
        if (el.hasAttribute('download') || el.getAttribute('rel') === 'external') return;

        // ensure non-hash for the same path
        var link = el.getAttribute('href');
        if(!this._hashbang && this._samePath(el) && (el.hash || '#' === link)) return;

        // Check for mailto: in the href
        if (link && link.indexOf('mailto:') > -1) return;

        // check target
        // svg target is an object and its desired value is in .baseVal property
        if (svg ? el.target.baseVal : el.target) return;

        // x-origin
        // note: svg links that are not relative don't call click events (and skip page.js)
        // consequently, all svg links tested inside page.js are relative and in the same origin
        if (!svg && !this.sameOrigin(el.href)) return;

        // rebuild path
        // There aren't .pathname and .search properties in svg links, so we use href
        // Also, svg href is an object and its desired value is in .baseVal property
        var path = svg ? el.href.baseVal : (el.pathname + el.search + (el.hash || ''));

        path = path[0] !== '/' ? '/' + path : path;

        // strip leading "/[drive letter]:" on NW.js on Windows
        if (hasProcess && path.match(/^\/[a-zA-Z]:\//)) {
          path = path.replace(/^\/[a-zA-Z]:\//, '/');
        }

        // same page
        var orig = path;
        var pageBase = this._getBase();

        if (path.indexOf(pageBase) === 0) {
          path = path.substr(pageBase.length);
        }

        if (this._hashbang) path = path.replace('#!', '');

        if (pageBase && orig === path && (!isLocation || this._window.location.protocol !== 'file:')) {
          return;
        }

        e.preventDefault();
        this.show(orig);
      };

      /**
       * Handle "populate" events.
       * @api private
       */

      Page.prototype._onpopstate = (function () {
        var loaded = false;
        if ( ! hasWindow ) {
          return function () {};
        }
        if (hasDocument && document.readyState === 'complete') {
          loaded = true;
        } else {
          window.addEventListener('load', function() {
            setTimeout(function() {
              loaded = true;
            }, 0);
          });
        }
        return function onpopstate(e) {
          if (!loaded) return;
          var page = this;
          if (e.state) {
            var path = e.state.path;
            page.replace(path, e.state);
          } else if (isLocation) {
            var loc = page._window.location;
            page.show(loc.pathname + loc.search + loc.hash, undefined, undefined, false);
          }
        };
      })();

      /**
       * Event button.
       */
      Page.prototype._which = function(e) {
        e = e || (hasWindow && this._window.event);
        return null == e.which ? e.button : e.which;
      };

      /**
       * Convert to a URL object
       * @api private
       */
      Page.prototype._toURL = function(href) {
        var window = this._window;
        if(typeof URL === 'function' && isLocation) {
          return new URL(href, window.location.toString());
        } else if (hasDocument) {
          var anc = window.document.createElement('a');
          anc.href = href;
          return anc;
        }
      };

      /**
       * Check if `href` is the same origin.
       * @param {string} href
       * @api public
       */
      Page.prototype.sameOrigin = function(href) {
        if(!href || !isLocation) return false;

        var url = this._toURL(href);
        var window = this._window;

        var loc = window.location;

        /*
           When the port is the default http port 80 for http, or 443 for
           https, internet explorer 11 returns an empty string for loc.port,
           so we need to compare loc.port with an empty string if url.port
           is the default port 80 or 443.
           Also the comparition with `port` is changed from `===` to `==` because
           `port` can be a string sometimes. This only applies to ie11.
        */
        return loc.protocol === url.protocol &&
          loc.hostname === url.hostname &&
          (loc.port === url.port || loc.port === '' && (url.port == 80 || url.port == 443)); // jshint ignore:line
      };

      /**
       * @api private
       */
      Page.prototype._samePath = function(url) {
        if(!isLocation) return false;
        var window = this._window;
        var loc = window.location;
        return url.pathname === loc.pathname &&
          url.search === loc.search;
      };

      /**
       * Remove URL encoding from the given `str`.
       * Accommodates whitespace in both x-www-form-urlencoded
       * and regular percent-encoded form.
       *
       * @param {string} val - URL component to decode
       * @api private
       */
      Page.prototype._decodeURLEncodedURIComponent = function(val) {
        if (typeof val !== 'string') { return val; }
        return this._decodeURLComponents ? decodeURIComponent(val.replace(/\+/g, ' ')) : val;
      };

      /**
       * Create a new `page` instance and function
       */
      function createPage() {
        var pageInstance = new Page();

        function pageFn(/* args */) {
          return page.apply(pageInstance, arguments);
        }

        // Copy all of the things over. In 2.0 maybe we use setPrototypeOf
        pageFn.callbacks = pageInstance.callbacks;
        pageFn.exits = pageInstance.exits;
        pageFn.base = pageInstance.base.bind(pageInstance);
        pageFn.strict = pageInstance.strict.bind(pageInstance);
        pageFn.start = pageInstance.start.bind(pageInstance);
        pageFn.stop = pageInstance.stop.bind(pageInstance);
        pageFn.show = pageInstance.show.bind(pageInstance);
        pageFn.back = pageInstance.back.bind(pageInstance);
        pageFn.redirect = pageInstance.redirect.bind(pageInstance);
        pageFn.replace = pageInstance.replace.bind(pageInstance);
        pageFn.dispatch = pageInstance.dispatch.bind(pageInstance);
        pageFn.exit = pageInstance.exit.bind(pageInstance);
        pageFn.configure = pageInstance.configure.bind(pageInstance);
        pageFn.sameOrigin = pageInstance.sameOrigin.bind(pageInstance);
        pageFn.clickHandler = pageInstance.clickHandler.bind(pageInstance);

        pageFn.create = createPage;

        Object.defineProperty(pageFn, 'len', {
          get: function(){
            return pageInstance.len;
          },
          set: function(val) {
            pageInstance.len = val;
          }
        });

        Object.defineProperty(pageFn, 'current', {
          get: function(){
            return pageInstance.current;
          },
          set: function(val) {
            pageInstance.current = val;
          }
        });

        // In 2.0 these can be named exports
        pageFn.Context = Context;
        pageFn.Route = Route;

        return pageFn;
      }

      /**
       * Register `path` with callback `fn()`,
       * or route `path`, or redirection,
       * or `page.start()`.
       *
       *   page(fn);
       *   page('*', fn);
       *   page('/user/:id', load, user);
       *   page('/user/' + user.id, { some: 'thing' });
       *   page('/user/' + user.id);
       *   page('/from', '/to')
       *   page();
       *
       * @param {string|!Function|!Object} path
       * @param {Function=} fn
       * @api public
       */

      function page(path, fn) {
        // <callback>
        if ('function' === typeof path) {
          return page.call(this, '*', path);
        }

        // route <path> to <callback ...>
        if ('function' === typeof fn) {
          var route = new Route(/** @type {string} */ (path), null, this);
          for (var i = 1; i < arguments.length; ++i) {
            this.callbacks.push(route.middleware(arguments[i]));
          }
          // show <path> with [state]
        } else if ('string' === typeof path) {
          this['string' === typeof fn ? 'redirect' : 'show'](path, fn);
          // start [options]
        } else {
          this.start(path);
        }
      }

      /**
       * Unhandled `ctx`. When it's not the initial
       * popstate then redirect. If you wish to handle
       * 404s on your own use `page('*', callback)`.
       *
       * @param {Context} ctx
       * @api private
       */
      function unhandled(ctx) {
        if (ctx.handled) return;
        var current;
        var page = this;
        var window = page._window;

        if (page._hashbang) {
          current = isLocation && this._getBase() + window.location.hash.replace('#!', '');
        } else {
          current = isLocation && window.location.pathname + window.location.search;
        }

        if (current === ctx.canonicalPath) return;
        page.stop();
        ctx.handled = false;
        isLocation && (window.location.href = ctx.canonicalPath);
      }

      /**
       * Escapes RegExp characters in the given string.
       *
       * @param {string} s
       * @api private
       */
      function escapeRegExp(s) {
        return s.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
      }

      /**
       * Initialize a new "request" `Context`
       * with the given `path` and optional initial `state`.
       *
       * @constructor
       * @param {string} path
       * @param {Object=} state
       * @api public
       */

      function Context(path, state, pageInstance) {
        var _page = this.page = pageInstance || page;
        var window = _page._window;
        var hashbang = _page._hashbang;

        var pageBase = _page._getBase();
        if ('/' === path[0] && 0 !== path.indexOf(pageBase)) path = pageBase + (hashbang ? '#!' : '') + path;
        var i = path.indexOf('?');

        this.canonicalPath = path;
        var re = new RegExp('^' + escapeRegExp(pageBase));
        this.path = path.replace(re, '') || '/';
        if (hashbang) this.path = this.path.replace('#!', '') || '/';

        this.title = (hasDocument && window.document.title);
        this.state = state || {};
        this.state.path = path;
        this.querystring = ~i ? _page._decodeURLEncodedURIComponent(path.slice(i + 1)) : '';
        this.pathname = _page._decodeURLEncodedURIComponent(~i ? path.slice(0, i) : path);
        this.params = {};

        // fragment
        this.hash = '';
        if (!hashbang) {
          if (!~this.path.indexOf('#')) return;
          var parts = this.path.split('#');
          this.path = this.pathname = parts[0];
          this.hash = _page._decodeURLEncodedURIComponent(parts[1]) || '';
          this.querystring = this.querystring.split('#')[0];
        }
      }

      /**
       * Push state.
       *
       * @api private
       */

      Context.prototype.pushState = function() {
        var page = this.page;
        var window = page._window;
        var hashbang = page._hashbang;

        page.len++;
        if (hasHistory) {
            window.history.pushState(this.state, this.title,
              hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
        }
      };

      /**
       * Save the context state.
       *
       * @api public
       */

      Context.prototype.save = function() {
        var page = this.page;
        if (hasHistory) {
            page._window.history.replaceState(this.state, this.title,
              page._hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
        }
      };

      /**
       * Initialize `Route` with the given HTTP `path`,
       * and an array of `callbacks` and `options`.
       *
       * Options:
       *
       *   - `sensitive`    enable case-sensitive routes
       *   - `strict`       enable strict matching for trailing slashes
       *
       * @constructor
       * @param {string} path
       * @param {Object=} options
       * @api private
       */

      function Route(path, options, page) {
        var _page = this.page = page || globalPage;
        var opts = options || {};
        opts.strict = opts.strict || _page._strict;
        this.path = (path === '*') ? '(.*)' : path;
        this.method = 'GET';
        this.regexp = pathToRegexp_1(this.path, this.keys = [], opts);
      }

      /**
       * Return route middleware with
       * the given callback `fn()`.
       *
       * @param {Function} fn
       * @return {Function}
       * @api public
       */

      Route.prototype.middleware = function(fn) {
        var self = this;
        return function(ctx, next) {
          if (self.match(ctx.path, ctx.params)) {
            ctx.routePath = self.path;
            return fn(ctx, next);
          }
          next();
        };
      };

      /**
       * Check if this route matches `path`, if so
       * populate `params`.
       *
       * @param {string} path
       * @param {Object} params
       * @return {boolean}
       * @api private
       */

      Route.prototype.match = function(path, params) {
        var keys = this.keys,
          qsIndex = path.indexOf('?'),
          pathname = ~qsIndex ? path.slice(0, qsIndex) : path,
          m = this.regexp.exec(decodeURIComponent(pathname));

        if (!m) return false;

        delete params[0];

        for (var i = 1, len = m.length; i < len; ++i) {
          var key = keys[i - 1];
          var val = this.page._decodeURLEncodedURIComponent(m[i]);
          if (val !== undefined || !(hasOwnProperty.call(params, key.name))) {
            params[key.name] = val;
          }
        }

        return true;
      };


      /**
       * Module exports.
       */

      var globalPage = createPage();
      var page_js = globalPage;
      var default_1 = globalPage;

    page_js.default = default_1;

    return page_js;

    })));
    });

    /* src/komponen/Atas.svelte generated by Svelte v3.29.0 */

    const file = "src/komponen/Atas.svelte";

    function create_fragment(ctx) {
    	let div;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			div = element("div");
    			div.textContent = "↑";
    			attr_dev(div, "class", "btn btn-light");
    			add_location(div, file, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);

    			if (!mounted) {
    				dispose = listen_dev(div, "click", /*atas*/ ctx[0], false, false, false);
    				mounted = true;
    			}
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Atas", slots, []);
    	const atas = () => window.scrollTo({ top: 1, left: 0, behavior: "smooth" });
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Atas> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ atas });
    	return [atas];
    }

    class Atas extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Atas",
    			options,
    			id: create_fragment.name
    		});
    	}
    }

    /* src/halaman/Beranda.svelte generated by Svelte v3.29.0 */
    const file$1 = "src/halaman/Beranda.svelte";

    function get_each_context(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[1] = list[i];
    	return child_ctx;
    }

    // (7:2) {#each data as x}
    function create_each_block(ctx) {
    	let div3;
    	let a;
    	let div2;
    	let div1;
    	let h5;
    	let t0_value = /*x*/ ctx[1].judul + "";
    	let t0;
    	let t1;
    	let div0;
    	let t2_value = /*x*/ ctx[1].deskripsi + "";
    	let t2;
    	let a_href_value;
    	let t3;

    	const block = {
    		c: function create() {
    			div3 = element("div");
    			a = element("a");
    			div2 = element("div");
    			div1 = element("div");
    			h5 = element("h5");
    			t0 = text(t0_value);
    			t1 = space();
    			div0 = element("div");
    			t2 = text(t2_value);
    			t3 = space();
    			add_location(h5, file$1, 11, 7, 408);
    			add_location(div0, file$1, 12, 7, 434);
    			attr_dev(div1, "class", "card-body");
    			add_location(div1, file$1, 10, 6, 377);
    			attr_dev(div2, "class", "card svelte-1p8zv57");
    			add_location(div2, file$1, 9, 5, 352);
    			attr_dev(a, "href", a_href_value = "/" + /*x*/ ctx[1].slug);
    			attr_dev(a, "class", "samarkan-link");
    			add_location(a, file$1, 8, 4, 304);
    			attr_dev(div3, "class", "col-sm-3");
    			add_location(div3, file$1, 7, 3, 277);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div3, anchor);
    			append_dev(div3, a);
    			append_dev(a, div2);
    			append_dev(div2, div1);
    			append_dev(div1, h5);
    			append_dev(h5, t0);
    			append_dev(div1, t1);
    			append_dev(div1, div0);
    			append_dev(div0, t2);
    			append_dev(div3, t3);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*data*/ 1 && t0_value !== (t0_value = /*x*/ ctx[1].judul + "")) set_data_dev(t0, t0_value);
    			if (dirty & /*data*/ 1 && t2_value !== (t2_value = /*x*/ ctx[1].deskripsi + "")) set_data_dev(t2, t2_value);

    			if (dirty & /*data*/ 1 && a_href_value !== (a_href_value = "/" + /*x*/ ctx[1].slug)) {
    				attr_dev(a, "href", a_href_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div3);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block.name,
    		type: "each",
    		source: "(7:2) {#each data as x}",
    		ctx
    	});

    	return block;
    }

    // (24:1) {#if location.host.includes("localhost")}
    function create_if_block(ctx) {
    	let a;

    	const block = {
    		c: function create() {
    			a = element("a");
    			a.textContent = "+";
    			attr_dev(a, "href", "/tulis");
    			attr_dev(a, "class", "btn btn-success");
    			add_location(a, file$1, 24, 1, 651);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(a);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block.name,
    		type: "if",
    		source: "(24:1) {#if location.host.includes(\\\"localhost\\\")}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$1(ctx) {
    	let div1;
    	let br;
    	let t0;
    	let h1;
    	let t2;
    	let p;
    	let em;
    	let small;
    	let t3;
    	let a0;
    	let t5;
    	let t6;
    	let hr;
    	let t7;
    	let div0;
    	let t8;
    	let div2;
    	let atas;
    	let t9;
    	let a1;
    	let t11;
    	let show_if = location.host.includes("localhost");
    	let t12;
    	let current;
    	let each_value = /*data*/ ctx[0];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    	}

    	atas = new Atas({ $$inline: true });
    	let if_block = show_if && create_if_block(ctx);

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			br = element("br");
    			t0 = space();
    			h1 = element("h1");
    			h1.textContent = "Blog Zen";
    			t2 = space();
    			p = element("p");
    			em = element("em");
    			small = element("small");
    			t3 = text("Don't be a programmer. Be a problem solver (");
    			a0 = element("a");
    			a0.textContent = "Joma";
    			t5 = text(")");
    			t6 = space();
    			hr = element("hr");
    			t7 = space();
    			div0 = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t8 = space();
    			div2 = element("div");
    			create_component(atas.$$.fragment);
    			t9 = space();
    			a1 = element("a");
    			a1.textContent = "⚲";
    			t11 = space();
    			if (if_block) if_block.c();
    			t12 = space();
    			add_location(br, file$1, 1, 1, 25);
    			attr_dev(h1, "class", "text-center");
    			add_location(h1, file$1, 2, 1, 31);
    			attr_dev(a0, "href", "https://www.youtube.com/watch?v=EiKK04Ht8QI");
    			add_location(a0, file$1, 3, 79, 148);
    			add_location(small, file$1, 3, 28, 97);
    			add_location(em, file$1, 3, 24, 93);
    			attr_dev(p, "class", "text-center");
    			add_location(p, file$1, 3, 1, 70);
    			add_location(hr, file$1, 4, 1, 230);
    			attr_dev(div0, "class", "row");
    			add_location(div0, file$1, 5, 1, 236);
    			attr_dev(div1, "class", "container");
    			add_location(div1, file$1, 0, 0, 0);
    			attr_dev(a1, "href", "/cari");
    			attr_dev(a1, "class", "btn btn-info");
    			add_location(a1, file$1, 22, 1, 558);
    			attr_dev(div2, "class", "bawah");
    			add_location(div2, file$1, 20, 0, 528);
    			document.title = "Blog Zen";
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, br);
    			append_dev(div1, t0);
    			append_dev(div1, h1);
    			append_dev(div1, t2);
    			append_dev(div1, p);
    			append_dev(p, em);
    			append_dev(em, small);
    			append_dev(small, t3);
    			append_dev(small, a0);
    			append_dev(small, t5);
    			append_dev(div1, t6);
    			append_dev(div1, hr);
    			append_dev(div1, t7);
    			append_dev(div1, div0);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div0, null);
    			}

    			insert_dev(target, t8, anchor);
    			insert_dev(target, div2, anchor);
    			mount_component(atas, div2, null);
    			append_dev(div2, t9);
    			append_dev(div2, a1);
    			append_dev(div2, t11);
    			if (if_block) if_block.m(div2, null);
    			insert_dev(target, t12, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*data*/ 1) {
    				each_value = /*data*/ ctx[0];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(div0, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value.length;
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(atas.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(atas.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(t8);
    			if (detaching) detach_dev(div2);
    			destroy_component(atas);
    			if (if_block) if_block.d();
    			if (detaching) detach_dev(t12);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Beranda", slots, []);
    	let data = [];

    	onMount(() => {
    		if (location.host.includes("localhost")) {
    			fetch("http://localhost:3000/postingan").then(x => x.json()).then(x => $$invalidate(0, data = x.reverse()));
    		} else {
    			fetch("/beranda.json").then(x => x.json()).then(q => $$invalidate(0, data = q.reverse()));
    		}
    	});

    	beforeUpdate(() => {
    		window.addEventListener("scroll", () => {
    			if (location.href.split("/").filter(x => x).length == 2 && window.pageYOffset != 0) {
    				localStorage.setItem("posisiBlogzen", window.pageYOffset);
    			}
    		});
    	});

    	afterUpdate(() => {
    		if (localStorage.posisiBlogzen) {
    			window.scrollTo({
    				top: localStorage.posisiBlogzen,
    				left: 0,
    				behavior: "smooth"
    			});
    		}
    	});

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Beranda> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		onMount,
    		beforeUpdate,
    		afterUpdate,
    		Atas,
    		data
    	});

    	$$self.$inject_state = $$props => {
    		if ("data" in $$props) $$invalidate(0, data = $$props.data);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [data];
    }

    class Beranda extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Beranda",
    			options,
    			id: create_fragment$1.name
    		});
    	}
    }

    /* src/halaman/Baca.svelte generated by Svelte v3.29.0 */

    const { document: document_1 } = globals;
    const file$2 = "src/halaman/Baca.svelte";

    function get_each_context$1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[8] = list[i];
    	return child_ctx;
    }

    // (17:2) {#each tulisan_lainnya as x}
    function create_each_block$1(ctx) {
    	let li;
    	let a;
    	let t_value = /*x*/ ctx[8].judul + "";
    	let t;
    	let a_href_value;

    	const block = {
    		c: function create() {
    			li = element("li");
    			a = element("a");
    			t = text(t_value);
    			attr_dev(a, "href", a_href_value = "/" + /*x*/ ctx[8].slug);
    			add_location(a, file$2, 17, 7, 441);
    			add_location(li, file$2, 17, 3, 437);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, li, anchor);
    			append_dev(li, a);
    			append_dev(a, t);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*tulisan_lainnya*/ 4 && t_value !== (t_value = /*x*/ ctx[8].judul + "")) set_data_dev(t, t_value);

    			if (dirty & /*tulisan_lainnya*/ 4 && a_href_value !== (a_href_value = "/" + /*x*/ ctx[8].slug)) {
    				attr_dev(a, "href", a_href_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(li);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$1.name,
    		type: "each",
    		source: "(17:2) {#each tulisan_lainnya as x}",
    		ctx
    	});

    	return block;
    }

    // (21:1) {#if !location.host.includes('localhost')}
    function create_if_block_1(ctx) {
    	let div;

    	const block = {
    		c: function create() {
    			div = element("div");
    			attr_dev(div, "id", "disqus_thread");
    			add_location(div, file$2, 21, 2, 543);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1.name,
    		type: "if",
    		source: "(21:1) {#if !location.host.includes('localhost')}",
    		ctx
    	});

    	return block;
    }

    // (29:1) {#if location.host.includes("localhost")}
    function create_if_block$1(ctx) {
    	let a;
    	let t0;
    	let a_href_value;
    	let t1;
    	let div;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			a = element("a");
    			t0 = text("✐");
    			t1 = space();
    			div = element("div");
    			div.textContent = "×";
    			attr_dev(a, "href", a_href_value = "/" + /*params*/ ctx[0].slug + "/edit");
    			attr_dev(a, "class", "btn btn-warning");
    			add_location(a, file$2, 29, 2, 759);
    			attr_dev(div, "class", "btn btn-danger");
    			add_location(div, file$2, 30, 2, 828);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);
    			append_dev(a, t0);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div, anchor);

    			if (!mounted) {
    				dispose = listen_dev(div, "click", /*hapus*/ ctx[4], false, false, false);
    				mounted = true;
    			}
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*params*/ 1 && a_href_value !== (a_href_value = "/" + /*params*/ ctx[0].slug + "/edit")) {
    				attr_dev(a, "href", a_href_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(a);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$1.name,
    		type: "if",
    		source: "(29:1) {#if location.host.includes(\\\"localhost\\\")}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$2(ctx) {
    	let div4;
    	let br0;
    	let t0;
    	let h1;
    	let t1_value = /*data*/ ctx[1].judul + "";
    	let t1;
    	let t2;
    	let hr;
    	let t3;
    	let div1;
    	let p;
    	let em;
    	let t4_value = /*data*/ ctx[1].deskripsi + "";
    	let t4;
    	let t5;
    	let div0;
    	let t6;
    	let div3;
    	let div2;
    	let t7;
    	let strong;
    	let t9;
    	let a0;
    	let t11;
    	let br1;
    	let t12;
    	let h2;
    	let t14;
    	let ol;
    	let t15;
    	let show_if_1 = !location.host.includes("localhost");
    	let t16;
    	let div5;
    	let atas;
    	let t17;
    	let a1;
    	let t19;
    	let a2;
    	let t21;
    	let show_if = location.host.includes("localhost");
    	let t22;
    	let title_value;
    	let current;
    	let each_value = /*tulisan_lainnya*/ ctx[2];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
    	}

    	let if_block0 = show_if_1 && create_if_block_1(ctx);
    	atas = new Atas({ $$inline: true });
    	let if_block1 = show_if && create_if_block$1(ctx);
    	document_1.title = title_value = /*data*/ ctx[1].judul;

    	const block = {
    		c: function create() {
    			div4 = element("div");
    			br0 = element("br");
    			t0 = space();
    			h1 = element("h1");
    			t1 = text(t1_value);
    			t2 = space();
    			hr = element("hr");
    			t3 = space();
    			div1 = element("div");
    			p = element("p");
    			em = element("em");
    			t4 = text(t4_value);
    			t5 = space();
    			div0 = element("div");
    			t6 = space();
    			div3 = element("div");
    			div2 = element("div");
    			t7 = text("Blog ini dikelola oleh ");
    			strong = element("strong");
    			strong.textContent = "Zen";
    			t9 = text(" yang merupakan lulusan S1 Psikologi. ");
    			a0 = element("a");
    			a0.textContent = "Lihat profil selengkapnya.";
    			t11 = space();
    			br1 = element("br");
    			t12 = space();
    			h2 = element("h2");
    			h2.textContent = "Tulisan lainnya";
    			t14 = space();
    			ol = element("ol");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t15 = space();
    			if (if_block0) if_block0.c();
    			t16 = space();
    			div5 = element("div");
    			create_component(atas.$$.fragment);
    			t17 = space();
    			a1 = element("a");
    			a1.textContent = "⚲";
    			t19 = space();
    			a2 = element("a");
    			a2.textContent = "☖";
    			t21 = space();
    			if (if_block1) if_block1.c();
    			t22 = space();
    			add_location(br0, file$2, 1, 1, 25);
    			add_location(h1, file$2, 2, 1, 31);
    			add_location(hr, file$2, 3, 1, 54);
    			add_location(em, file$2, 5, 8, 74);
    			add_location(p, file$2, 5, 5, 71);
    			attr_dev(div0, "class", "konten");
    			add_location(div0, file$2, 6, 5, 109);
    			add_location(div1, file$2, 4, 1, 60);
    			add_location(strong, file$2, 10, 29, 236);
    			attr_dev(a0, "href", "/about-me");
    			add_location(a0, file$2, 10, 87, 294);
    			attr_dev(div2, "class", "card-body");
    			add_location(div2, file$2, 9, 5, 183);
    			attr_dev(div3, "class", "card");
    			add_location(div3, file$2, 8, 1, 159);
    			add_location(br1, file$2, 13, 1, 366);
    			add_location(h2, file$2, 14, 1, 372);
    			add_location(ol, file$2, 15, 1, 398);
    			attr_dev(div4, "class", "container");
    			add_location(div4, file$2, 0, 0, 0);
    			attr_dev(a1, "href", "/cari");
    			attr_dev(a1, "class", "btn btn-dark");
    			add_location(a1, file$2, 26, 1, 618);
    			attr_dev(a2, "href", "/");
    			attr_dev(a2, "class", "btn btn-info");
    			add_location(a2, file$2, 27, 1, 668);
    			attr_dev(div5, "class", "bawah");
    			add_location(div5, file$2, 24, 0, 588);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div4, anchor);
    			append_dev(div4, br0);
    			append_dev(div4, t0);
    			append_dev(div4, h1);
    			append_dev(h1, t1);
    			append_dev(div4, t2);
    			append_dev(div4, hr);
    			append_dev(div4, t3);
    			append_dev(div4, div1);
    			append_dev(div1, p);
    			append_dev(p, em);
    			append_dev(em, t4);
    			append_dev(div1, t5);
    			append_dev(div1, div0);
    			div0.innerHTML = /*konten*/ ctx[3];
    			append_dev(div4, t6);
    			append_dev(div4, div3);
    			append_dev(div3, div2);
    			append_dev(div2, t7);
    			append_dev(div2, strong);
    			append_dev(div2, t9);
    			append_dev(div2, a0);
    			append_dev(div4, t11);
    			append_dev(div4, br1);
    			append_dev(div4, t12);
    			append_dev(div4, h2);
    			append_dev(div4, t14);
    			append_dev(div4, ol);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(ol, null);
    			}

    			append_dev(div4, t15);
    			if (if_block0) if_block0.m(div4, null);
    			insert_dev(target, t16, anchor);
    			insert_dev(target, div5, anchor);
    			mount_component(atas, div5, null);
    			append_dev(div5, t17);
    			append_dev(div5, a1);
    			append_dev(div5, t19);
    			append_dev(div5, a2);
    			append_dev(div5, t21);
    			if (if_block1) if_block1.m(div5, null);
    			insert_dev(target, t22, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if ((!current || dirty & /*data*/ 2) && t1_value !== (t1_value = /*data*/ ctx[1].judul + "")) set_data_dev(t1, t1_value);
    			if ((!current || dirty & /*data*/ 2) && t4_value !== (t4_value = /*data*/ ctx[1].deskripsi + "")) set_data_dev(t4, t4_value);
    			if (!current || dirty & /*konten*/ 8) div0.innerHTML = /*konten*/ ctx[3];
    			if (dirty & /*tulisan_lainnya*/ 4) {
    				each_value = /*tulisan_lainnya*/ ctx[2];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$1(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block$1(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(ol, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value.length;
    			}

    			if (show_if) if_block1.p(ctx, dirty);

    			if ((!current || dirty & /*data*/ 2) && title_value !== (title_value = /*data*/ ctx[1].judul)) {
    				document_1.title = title_value;
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(atas.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(atas.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div4);
    			destroy_each(each_blocks, detaching);
    			if (if_block0) if_block0.d();
    			if (detaching) detach_dev(t16);
    			if (detaching) detach_dev(div5);
    			destroy_component(atas);
    			if (if_block1) if_block1.d();
    			if (detaching) detach_dev(t22);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$2.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$2($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Baca", slots, []);
    	let { params } = $$props;
    	let data = { judul: "", deskripsi: "", isi: "" };
    	let tulisan_lainnya = [];
    	let konten = "";

    	const isinya = () => {
    		if (location.host.includes("localhost")) {
    			fetch(`http://localhost:3000/postingan?slug=${params.slug}`).then(x => x.json()).then(y => $$invalidate(1, data = y[0]));
    		} else {
    			fetch(`/${params.slug}.json`).then(x => x.json()).then(x => $$invalidate(1, data = x));
    		}
    	};

    	const tampil_tulisan_lainnya = () => {
    		if (location.host.includes("localhost")) {
    			fetch("http://localhost:3000/postingan").then(x => x.json()).then(x => $$invalidate(2, tulisan_lainnya = x.sort(() => Math.random() - 0.5).filter(x => x.judul != data.judul).slice(0, 5)));
    		} else {
    			fetch("/beranda.json").then(x => x.json()).then(x => $$invalidate(2, tulisan_lainnya = x.sort(() => Math.random() - 0.5).filter(x => x.judul != data.judul).slice(0, 5)));
    		}
    	};

    	const muat_disqus = () => {
    		if (!location.host.includes("localhost")) {

    			(function () {
    				// DON'T EDIT BELOW THIS LINE
    				var d = document, s = d.createElement("script");

    				s.src = "https://blogzen.disqus.com/embed.js";
    				s.setAttribute("data-timestamp", +new Date());
    				(d.head || d.body).appendChild(s);
    			})();
    		}
    	};

    	const hapus = () => {
    		let tanya = confirm("Hapus kah?");

    		if (tanya) {
    			fetch(`http://localhost:3000/postingan?slug=${params.slug}`).then(x => x.json()).then(x => {
    				fetch(`http://localhost:3000/postingan/${x[0].id}`, { method: "delete" }).then(() => page.replace("/"));
    			});
    		}
    	};

    	const writable_props = ["params"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Baca> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("params" in $$props) $$invalidate(0, params = $$props.params);
    	};

    	$$self.$capture_state = () => ({
    		router: page,
    		Atas,
    		params,
    		data,
    		tulisan_lainnya,
    		konten,
    		isinya,
    		tampil_tulisan_lainnya,
    		muat_disqus,
    		hapus
    	});

    	$$self.$inject_state = $$props => {
    		if ("params" in $$props) $$invalidate(0, params = $$props.params);
    		if ("data" in $$props) $$invalidate(1, data = $$props.data);
    		if ("tulisan_lainnya" in $$props) $$invalidate(2, tulisan_lainnya = $$props.tulisan_lainnya);
    		if ("konten" in $$props) $$invalidate(3, konten = $$props.konten);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*data*/ 2) {
    			 $$invalidate(3, konten = marked(data.isi));
    		}

    		if ($$self.$$.dirty & /*params*/ 1) {
    			 if (params.slug) {
    				isinya();
    				muat_disqus();
    				tampil_tulisan_lainnya();
    			}
    		}
    	};

    	return [params, data, tulisan_lainnya, konten, hapus];
    }

    class Baca extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$2, create_fragment$2, safe_not_equal, { params: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Baca",
    			options,
    			id: create_fragment$2.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*params*/ ctx[0] === undefined && !("params" in props)) {
    			console.warn("<Baca> was created without expected prop 'params'");
    		}
    	}

    	get params() {
    		throw new Error("<Baca>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set params(value) {
    		throw new Error("<Baca>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/halaman/Tulis.svelte generated by Svelte v3.29.0 */
    const file$3 = "src/halaman/Tulis.svelte";

    function create_fragment$3(ctx) {
    	let t0;
    	let form;
    	let table;
    	let tbody;
    	let tr0;
    	let td0;
    	let input0;
    	let t1;
    	let tr1;
    	let td1;
    	let input1;
    	let t2;
    	let tr2;
    	let td2;
    	let textarea;
    	let t3;
    	let div;
    	let input2;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			t0 = space();
    			form = element("form");
    			table = element("table");
    			tbody = element("tbody");
    			tr0 = element("tr");
    			td0 = element("td");
    			input0 = element("input");
    			t1 = space();
    			tr1 = element("tr");
    			td1 = element("td");
    			input1 = element("input");
    			t2 = space();
    			tr2 = element("tr");
    			td2 = element("td");
    			textarea = element("textarea");
    			t3 = space();
    			div = element("div");
    			input2 = element("input");
    			document.title = "Tulis";
    			attr_dev(input0, "placeholder", "Judul");
    			input0.required = true;
    			attr_dev(input0, "class", "form-control svelte-hne32w");
    			add_location(input0, file$3, 7, 11, 152);
    			attr_dev(td0, "class", "svelte-hne32w");
    			add_location(td0, file$3, 7, 7, 148);
    			add_location(tr0, file$3, 7, 3, 144);
    			attr_dev(input1, "placeholder", "Deskripsi");
    			attr_dev(input1, "class", "form-control svelte-hne32w");
    			input1.required = true;
    			add_location(input1, file$3, 8, 11, 271);
    			attr_dev(td1, "class", "svelte-hne32w");
    			add_location(td1, file$3, 8, 7, 267);
    			add_location(tr1, file$3, 8, 3, 263);
    			attr_dev(textarea, "placeholder", "Isi");
    			textarea.required = true;
    			attr_dev(textarea, "class", "form-control svelte-hne32w");
    			add_location(textarea, file$3, 9, 11, 377);
    			attr_dev(td2, "class", "svelte-hne32w");
    			add_location(td2, file$3, 9, 7, 373);
    			add_location(tr2, file$3, 9, 3, 369);
    			add_location(tbody, file$3, 6, 2, 133);
    			attr_dev(table, "class", "table table-bordered");
    			add_location(table, file$3, 5, 1, 94);
    			attr_dev(input2, "type", "submit");
    			input2.value = "✓";
    			attr_dev(input2, "class", "btn btn-success");
    			add_location(input2, file$3, 13, 2, 537);
    			attr_dev(div, "class", "bawah");
    			add_location(div, file$3, 12, 1, 515);
    			add_location(form, file$3, 4, 0, 52);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t0, anchor);
    			insert_dev(target, form, anchor);
    			append_dev(form, table);
    			append_dev(table, tbody);
    			append_dev(tbody, tr0);
    			append_dev(tr0, td0);
    			append_dev(td0, input0);
    			/*input0_binding*/ ctx[6](input0);
    			set_input_value(input0, /*judul*/ ctx[2]);
    			append_dev(tbody, t1);
    			append_dev(tbody, tr1);
    			append_dev(tr1, td1);
    			append_dev(td1, input1);
    			set_input_value(input1, /*deskripsi*/ ctx[3]);
    			append_dev(tbody, t2);
    			append_dev(tbody, tr2);
    			append_dev(tr2, td2);
    			append_dev(td2, textarea);
    			/*textarea_binding*/ ctx[9](textarea);
    			set_input_value(textarea, /*isi*/ ctx[4]);
    			append_dev(form, t3);
    			append_dev(form, div);
    			append_dev(div, input2);

    			if (!mounted) {
    				dispose = [
    					listen_dev(input0, "input", /*input0_input_handler*/ ctx[7]),
    					listen_dev(input1, "input", /*input1_input_handler*/ ctx[8]),
    					listen_dev(textarea, "input", /*textarea_input_handler*/ ctx[10]),
    					listen_dev(form, "submit", prevent_default(/*submit*/ ctx[5]), false, true, false)
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*judul*/ 4 && input0.value !== /*judul*/ ctx[2]) {
    				set_input_value(input0, /*judul*/ ctx[2]);
    			}

    			if (dirty & /*deskripsi*/ 8 && input1.value !== /*deskripsi*/ ctx[3]) {
    				set_input_value(input1, /*deskripsi*/ ctx[3]);
    			}

    			if (dirty & /*isi*/ 16) {
    				set_input_value(textarea, /*isi*/ ctx[4]);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(form);
    			/*input0_binding*/ ctx[6](null);
    			/*textarea_binding*/ ctx[9](null);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$3.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$3($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Tulis", slots, []);
    	let judulnya;
    	let isinya;
    	let judul;
    	let deskripsi;
    	let isi;

    	onMount(() => {
    		judulnya.focus();
    		const atur_tinggi = () => $$invalidate(1, isinya.style.height = `${window.innerHeight - 160}px`, isinya);
    		atur_tinggi();
    		window.addEventListener("resize", atur_tinggi);
    	});

    	const submit = () => {
    		fetch("http://localhost:3000/postingan", {
    			method: "post",
    			headers: { "Content-Type": "application/json" },
    			body: JSON.stringify({
    				slug: slugify(judul),
    				judul,
    				deskripsi,
    				isi
    			})
    		}).then(() => {
    			fetch("http://localhost:3000/postingan?_sort=id&_order=desc").then(x => x.json()).then(z => page.redirect(`/${z[0].slug}`));
    		});
    	};

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Tulis> was created with unknown prop '${key}'`);
    	});

    	function input0_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			judulnya = $$value;
    			$$invalidate(0, judulnya);
    		});
    	}

    	function input0_input_handler() {
    		judul = this.value;
    		$$invalidate(2, judul);
    	}

    	function input1_input_handler() {
    		deskripsi = this.value;
    		$$invalidate(3, deskripsi);
    	}

    	function textarea_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			isinya = $$value;
    			$$invalidate(1, isinya);
    		});
    	}

    	function textarea_input_handler() {
    		isi = this.value;
    		$$invalidate(4, isi);
    	}

    	$$self.$capture_state = () => ({
    		onMount,
    		router: page,
    		judulnya,
    		isinya,
    		judul,
    		deskripsi,
    		isi,
    		submit
    	});

    	$$self.$inject_state = $$props => {
    		if ("judulnya" in $$props) $$invalidate(0, judulnya = $$props.judulnya);
    		if ("isinya" in $$props) $$invalidate(1, isinya = $$props.isinya);
    		if ("judul" in $$props) $$invalidate(2, judul = $$props.judul);
    		if ("deskripsi" in $$props) $$invalidate(3, deskripsi = $$props.deskripsi);
    		if ("isi" in $$props) $$invalidate(4, isi = $$props.isi);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		judulnya,
    		isinya,
    		judul,
    		deskripsi,
    		isi,
    		submit,
    		input0_binding,
    		input0_input_handler,
    		input1_input_handler,
    		textarea_binding,
    		textarea_input_handler
    	];
    }

    class Tulis extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Tulis",
    			options,
    			id: create_fragment$3.name
    		});
    	}
    }

    /* src/halaman/Edit.svelte generated by Svelte v3.29.0 */
    const file$4 = "src/halaman/Edit.svelte";

    function create_fragment$4(ctx) {
    	let title_value;
    	let t0;
    	let form;
    	let table;
    	let tbody;
    	let tr0;
    	let td0;
    	let input0;
    	let t1;
    	let tr1;
    	let td1;
    	let input1;
    	let t2;
    	let tr2;
    	let td2;
    	let textarea;
    	let t3;
    	let div;
    	let input2;
    	let mounted;
    	let dispose;
    	document.title = title_value = "Edit " + /*judul*/ ctx[2];

    	const block = {
    		c: function create() {
    			t0 = space();
    			form = element("form");
    			table = element("table");
    			tbody = element("tbody");
    			tr0 = element("tr");
    			td0 = element("td");
    			input0 = element("input");
    			t1 = space();
    			tr1 = element("tr");
    			td1 = element("td");
    			input1 = element("input");
    			t2 = space();
    			tr2 = element("tr");
    			td2 = element("td");
    			textarea = element("textarea");
    			t3 = space();
    			div = element("div");
    			input2 = element("input");
    			attr_dev(input0, "placeholder", "Judul");
    			input0.required = true;
    			attr_dev(input0, "class", "form-control svelte-hne32w");
    			add_location(input0, file$4, 7, 11, 159);
    			attr_dev(td0, "class", "svelte-hne32w");
    			add_location(td0, file$4, 7, 7, 155);
    			add_location(tr0, file$4, 7, 3, 151);
    			attr_dev(input1, "placeholder", "Deskripsi");
    			attr_dev(input1, "class", "form-control svelte-hne32w");
    			input1.required = true;
    			add_location(input1, file$4, 8, 11, 278);
    			attr_dev(td1, "class", "svelte-hne32w");
    			add_location(td1, file$4, 8, 7, 274);
    			add_location(tr1, file$4, 8, 3, 270);
    			attr_dev(textarea, "placeholder", "Isi");
    			textarea.required = true;
    			attr_dev(textarea, "class", "form-control svelte-hne32w");
    			add_location(textarea, file$4, 9, 11, 384);
    			attr_dev(td2, "class", "svelte-hne32w");
    			add_location(td2, file$4, 9, 7, 380);
    			add_location(tr2, file$4, 9, 3, 376);
    			add_location(tbody, file$4, 6, 2, 140);
    			attr_dev(table, "class", "table table-bordered");
    			add_location(table, file$4, 5, 1, 101);
    			attr_dev(input2, "type", "submit");
    			input2.value = "✓";
    			attr_dev(input2, "class", "btn btn-success");
    			add_location(input2, file$4, 13, 2, 544);
    			attr_dev(div, "class", "bawah");
    			add_location(div, file$4, 12, 1, 522);
    			add_location(form, file$4, 4, 0, 59);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t0, anchor);
    			insert_dev(target, form, anchor);
    			append_dev(form, table);
    			append_dev(table, tbody);
    			append_dev(tbody, tr0);
    			append_dev(tr0, td0);
    			append_dev(td0, input0);
    			/*input0_binding*/ ctx[7](input0);
    			set_input_value(input0, /*judul*/ ctx[2]);
    			append_dev(tbody, t1);
    			append_dev(tbody, tr1);
    			append_dev(tr1, td1);
    			append_dev(td1, input1);
    			set_input_value(input1, /*deskripsi*/ ctx[3]);
    			append_dev(tbody, t2);
    			append_dev(tbody, tr2);
    			append_dev(tr2, td2);
    			append_dev(td2, textarea);
    			/*textarea_binding*/ ctx[10](textarea);
    			set_input_value(textarea, /*isi*/ ctx[4]);
    			append_dev(form, t3);
    			append_dev(form, div);
    			append_dev(div, input2);

    			if (!mounted) {
    				dispose = [
    					listen_dev(input0, "input", /*input0_input_handler*/ ctx[8]),
    					listen_dev(input1, "input", /*input1_input_handler*/ ctx[9]),
    					listen_dev(textarea, "input", /*textarea_input_handler*/ ctx[11]),
    					listen_dev(form, "submit", prevent_default(/*submit*/ ctx[5]), false, true, false)
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*judul*/ 4 && title_value !== (title_value = "Edit " + /*judul*/ ctx[2])) {
    				document.title = title_value;
    			}

    			if (dirty & /*judul*/ 4 && input0.value !== /*judul*/ ctx[2]) {
    				set_input_value(input0, /*judul*/ ctx[2]);
    			}

    			if (dirty & /*deskripsi*/ 8 && input1.value !== /*deskripsi*/ ctx[3]) {
    				set_input_value(input1, /*deskripsi*/ ctx[3]);
    			}

    			if (dirty & /*isi*/ 16) {
    				set_input_value(textarea, /*isi*/ ctx[4]);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(form);
    			/*input0_binding*/ ctx[7](null);
    			/*textarea_binding*/ ctx[10](null);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$4.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$4($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Edit", slots, []);
    	let { params } = $$props;
    	let judulnya;
    	let isinya;
    	let judul;
    	let deskripsi;
    	let isi;
    	let id;

    	onMount(() => {
    		judulnya.focus();

    		fetch(`http://localhost:3000/postingan?slug=${params.slug}`).then(x => x.json()).then(w => {
    			$$invalidate(2, judul = w[0].judul);
    			$$invalidate(3, deskripsi = w[0].deskripsi);
    			$$invalidate(4, isi = w[0].isi);
    			id = w[0].id;
    		});

    		const atur_tinggi = () => $$invalidate(1, isinya.style.height = `${window.innerHeight - 160}px`, isinya);
    		atur_tinggi();
    		window.addEventListener("resize", atur_tinggi);
    	});

    	const submit = () => {
    		fetch(`http://localhost:3000/postingan/${id}`, {
    			method: "put",
    			headers: { "Content-Type": "application/json" },
    			body: JSON.stringify({ judul, deskripsi, isi, slug: params.slug })
    		}).then(() => page.replace(`/${params.slug}`));
    	};

    	const writable_props = ["params"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Edit> was created with unknown prop '${key}'`);
    	});

    	function input0_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			judulnya = $$value;
    			$$invalidate(0, judulnya);
    		});
    	}

    	function input0_input_handler() {
    		judul = this.value;
    		$$invalidate(2, judul);
    	}

    	function input1_input_handler() {
    		deskripsi = this.value;
    		$$invalidate(3, deskripsi);
    	}

    	function textarea_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			isinya = $$value;
    			$$invalidate(1, isinya);
    		});
    	}

    	function textarea_input_handler() {
    		isi = this.value;
    		$$invalidate(4, isi);
    	}

    	$$self.$$set = $$props => {
    		if ("params" in $$props) $$invalidate(6, params = $$props.params);
    	};

    	$$self.$capture_state = () => ({
    		onMount,
    		router: page,
    		params,
    		judulnya,
    		isinya,
    		judul,
    		deskripsi,
    		isi,
    		id,
    		submit
    	});

    	$$self.$inject_state = $$props => {
    		if ("params" in $$props) $$invalidate(6, params = $$props.params);
    		if ("judulnya" in $$props) $$invalidate(0, judulnya = $$props.judulnya);
    		if ("isinya" in $$props) $$invalidate(1, isinya = $$props.isinya);
    		if ("judul" in $$props) $$invalidate(2, judul = $$props.judul);
    		if ("deskripsi" in $$props) $$invalidate(3, deskripsi = $$props.deskripsi);
    		if ("isi" in $$props) $$invalidate(4, isi = $$props.isi);
    		if ("id" in $$props) id = $$props.id;
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		judulnya,
    		isinya,
    		judul,
    		deskripsi,
    		isi,
    		submit,
    		params,
    		input0_binding,
    		input0_input_handler,
    		input1_input_handler,
    		textarea_binding,
    		textarea_input_handler
    	];
    }

    class Edit extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$4, create_fragment$4, safe_not_equal, { params: 6 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Edit",
    			options,
    			id: create_fragment$4.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*params*/ ctx[6] === undefined && !("params" in props)) {
    			console.warn("<Edit> was created without expected prop 'params'");
    		}
    	}

    	get params() {
    		throw new Error("<Edit>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set params(value) {
    		throw new Error("<Edit>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/halaman/Cari.svelte generated by Svelte v3.29.0 */
    const file$5 = "src/halaman/Cari.svelte";

    function get_each_context$2(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[9] = list[i];
    	return child_ctx;
    }

    // (9:2) {#each data as x}
    function create_each_block$2(ctx) {
    	let a;
    	let t_value = /*x*/ ctx[9].judul + "";
    	let t;
    	let a_href_value;

    	const block = {
    		c: function create() {
    			a = element("a");
    			t = text(t_value);
    			attr_dev(a, "href", a_href_value = "/" + /*x*/ ctx[9].slug);
    			attr_dev(a, "class", "list-group-item list-group-item-action");
    			add_location(a, file$5, 9, 3, 292);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);
    			append_dev(a, t);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*data*/ 8 && t_value !== (t_value = /*x*/ ctx[9].judul + "")) set_data_dev(t, t_value);

    			if (dirty & /*data*/ 8 && a_href_value !== (a_href_value = "/" + /*x*/ ctx[9].slug)) {
    				attr_dev(a, "href", a_href_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(a);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$2.name,
    		type: "each",
    		source: "(9:2) {#each data as x}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$5(ctx) {
    	let br;
    	let t0;
    	let div2;
    	let form;
    	let div0;
    	let input;
    	let t1;
    	let div1;
    	let t2;
    	let div3;
    	let a;
    	let t4;
    	let title_value;
    	let mounted;
    	let dispose;
    	let each_value = /*data*/ ctx[3];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
    	}

    	document.title = title_value = "Cari " + decodeURIComponent(/*params*/ ctx[0].cari);

    	const block = {
    		c: function create() {
    			br = element("br");
    			t0 = space();
    			div2 = element("div");
    			form = element("form");
    			div0 = element("div");
    			input = element("input");
    			t1 = space();
    			div1 = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t2 = space();
    			div3 = element("div");
    			a = element("a");
    			a.textContent = "☖";
    			t4 = space();
    			add_location(br, file$5, 0, 0, 0);
    			attr_dev(input, "type", "search");
    			attr_dev(input, "placeholder", "Cari apa?");
    			attr_dev(input, "class", "form-control");
    			input.required = true;
    			add_location(input, file$5, 4, 3, 105);
    			attr_dev(div0, "class", "form-group");
    			add_location(div0, file$5, 3, 2, 77);
    			add_location(form, file$5, 2, 1, 30);
    			attr_dev(div1, "class", "list-grup");
    			add_location(div1, file$5, 7, 1, 245);
    			attr_dev(div2, "class", "container");
    			add_location(div2, file$5, 1, 0, 5);
    			attr_dev(a, "href", "/");
    			attr_dev(a, "class", "btn btn-info");
    			add_location(a, file$5, 14, 1, 419);
    			attr_dev(div3, "class", "bawah");
    			add_location(div3, file$5, 13, 0, 398);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, br, anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, div2, anchor);
    			append_dev(div2, form);
    			append_dev(form, div0);
    			append_dev(div0, input);
    			/*input_binding*/ ctx[5](input);
    			set_input_value(input, /*yang_dicari*/ ctx[1]);
    			append_dev(div2, t1);
    			append_dev(div2, div1);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div1, null);
    			}

    			insert_dev(target, t2, anchor);
    			insert_dev(target, div3, anchor);
    			append_dev(div3, a);
    			insert_dev(target, t4, anchor);

    			if (!mounted) {
    				dispose = [
    					listen_dev(input, "input", /*input_input_handler*/ ctx[6]),
    					listen_dev(form, "submit", prevent_default(/*mulai_cari*/ ctx[4]), false, true, false)
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*yang_dicari*/ 2) {
    				set_input_value(input, /*yang_dicari*/ ctx[1]);
    			}

    			if (dirty & /*data*/ 8) {
    				each_value = /*data*/ ctx[3];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$2(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block$2(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(div1, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value.length;
    			}

    			if (dirty & /*decodeURIComponent, params*/ 1 && title_value !== (title_value = "Cari " + decodeURIComponent(/*params*/ ctx[0].cari))) {
    				document.title = title_value;
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(br);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(div2);
    			/*input_binding*/ ctx[5](null);
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(t2);
    			if (detaching) detach_dev(div3);
    			if (detaching) detach_dev(t4);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$5.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$5($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Cari", slots, []);
    	let { params = {} } = $$props;
    	let yang_dicari = "";
    	let el_cari;
    	let data = [];
    	const mulai_cari = () => page.replace(`/cari/${encodeURIComponent(yang_dicari)}`);

    	const tanpa_param = () => {
    		if (!params.cari) {
    			el_cari.focus();
    			$$invalidate(1, yang_dicari = "");
    			$$invalidate(3, data = []);
    		}
    	};

    	const ada_param = () => {
    		if (params.cari) {
    			$$invalidate(1, yang_dicari = decodeURIComponent(params.cari));

    			fetch("/db.json").then(u => u.json()).then(q => {
    				let hasilnya = [];

    				for (let x of q.postingan) {
    					if (x.judul.toLowerCase().includes(yang_dicari.toLowerCase()) || x.deskripsi.toLowerCase().includes(yang_dicari.toLowerCase()) || x.isi.toLowerCase().includes(yang_dicari.toLowerCase())) {
    						hasilnya.push(x);
    					}
    				}

    				$$invalidate(3, data = hasilnya.sort((a, b) => {
    					if (a["judul"] > b["judul"]) {
    						return 1;
    					} else if (a["judul"] < b["judul"]) {
    						return -1;
    					}

    					return 0;
    				}));

    				if (data.length == 0) {
    					$$invalidate(3, data = [
    						{
    							judul: `${decodeURIComponent(params.cari)} nggak ketemu`,
    							slug: "cari"
    						}
    					]);
    				}
    			});
    		}
    	};

    	const writable_props = ["params"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Cari> was created with unknown prop '${key}'`);
    	});

    	function input_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			el_cari = $$value;
    			$$invalidate(2, el_cari);
    		});
    	}

    	function input_input_handler() {
    		yang_dicari = this.value;
    		$$invalidate(1, yang_dicari);
    	}

    	$$self.$$set = $$props => {
    		if ("params" in $$props) $$invalidate(0, params = $$props.params);
    	};

    	$$self.$capture_state = () => ({
    		router: page,
    		params,
    		yang_dicari,
    		el_cari,
    		data,
    		mulai_cari,
    		tanpa_param,
    		ada_param
    	});

    	$$self.$inject_state = $$props => {
    		if ("params" in $$props) $$invalidate(0, params = $$props.params);
    		if ("yang_dicari" in $$props) $$invalidate(1, yang_dicari = $$props.yang_dicari);
    		if ("el_cari" in $$props) $$invalidate(2, el_cari = $$props.el_cari);
    		if ("data" in $$props) $$invalidate(3, data = $$props.data);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*params*/ 1) {
    			 if (params.cari) {
    				ada_param();
    			}
    		}

    		if ($$self.$$.dirty & /*params*/ 1) {
    			 if (!params.cari) {
    				tanpa_param();
    			}
    		}
    	};

    	return [
    		params,
    		yang_dicari,
    		el_cari,
    		data,
    		mulai_cari,
    		input_binding,
    		input_input_handler
    	];
    }

    class Cari extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$5, create_fragment$5, safe_not_equal, { params: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Cari",
    			options,
    			id: create_fragment$5.name
    		});
    	}

    	get params() {
    		throw new Error("<Cari>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set params(value) {
    		throw new Error("<Cari>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/halaman/CariKosongan.svelte generated by Svelte v3.29.0 */
    const file$6 = "src/halaman/CariKosongan.svelte";

    function create_fragment$6(ctx) {
    	let br;
    	let t0;
    	let div1;
    	let form;
    	let div0;
    	let input;
    	let t1;
    	let div2;
    	let a;
    	let t3;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			br = element("br");
    			t0 = space();
    			div1 = element("div");
    			form = element("form");
    			div0 = element("div");
    			input = element("input");
    			t1 = space();
    			div2 = element("div");
    			a = element("a");
    			a.textContent = "☖";
    			t3 = space();
    			add_location(br, file$6, 0, 0, 0);
    			attr_dev(input, "type", "search");
    			attr_dev(input, "placeholder", "Cari apa?");
    			attr_dev(input, "class", "form-control");
    			input.required = true;
    			add_location(input, file$6, 4, 3, 105);
    			attr_dev(div0, "class", "form-group");
    			add_location(div0, file$6, 3, 2, 77);
    			add_location(form, file$6, 2, 1, 30);
    			attr_dev(div1, "class", "container");
    			add_location(div1, file$6, 1, 0, 5);
    			attr_dev(a, "href", "/");
    			attr_dev(a, "class", "btn btn-info");
    			add_location(a, file$6, 9, 1, 272);
    			attr_dev(div2, "class", "bawah");
    			add_location(div2, file$6, 8, 0, 251);
    			document.title = "Cari";
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, br, anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, div1, anchor);
    			append_dev(div1, form);
    			append_dev(form, div0);
    			append_dev(div0, input);
    			/*input_binding*/ ctx[3](input);
    			set_input_value(input, /*yang_dicari*/ ctx[0]);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div2, anchor);
    			append_dev(div2, a);
    			insert_dev(target, t3, anchor);

    			if (!mounted) {
    				dispose = [
    					listen_dev(input, "input", /*input_input_handler*/ ctx[4]),
    					listen_dev(form, "submit", prevent_default(/*mulai_cari*/ ctx[2]), false, true, false)
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*yang_dicari*/ 1) {
    				set_input_value(input, /*yang_dicari*/ ctx[0]);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(br);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(div1);
    			/*input_binding*/ ctx[3](null);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div2);
    			if (detaching) detach_dev(t3);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$6.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$6($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("CariKosongan", slots, []);
    	let yang_dicari = "";
    	let el_cari;
    	let data = [];
    	const mulai_cari = () => page.replace(`/cari/${encodeURIComponent(yang_dicari)}`);

    	onMount(() => {
    		el_cari.focus();
    		$$invalidate(0, yang_dicari = "");
    		data = [];
    	});

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<CariKosongan> was created with unknown prop '${key}'`);
    	});

    	function input_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			el_cari = $$value;
    			$$invalidate(1, el_cari);
    		});
    	}

    	function input_input_handler() {
    		yang_dicari = this.value;
    		$$invalidate(0, yang_dicari);
    	}

    	$$self.$capture_state = () => ({
    		router: page,
    		onMount,
    		yang_dicari,
    		el_cari,
    		data,
    		mulai_cari
    	});

    	$$self.$inject_state = $$props => {
    		if ("yang_dicari" in $$props) $$invalidate(0, yang_dicari = $$props.yang_dicari);
    		if ("el_cari" in $$props) $$invalidate(1, el_cari = $$props.el_cari);
    		if ("data" in $$props) data = $$props.data;
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [yang_dicari, el_cari, mulai_cari, input_binding, input_input_handler];
    }

    class CariKosongan extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$6, create_fragment$6, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "CariKosongan",
    			options,
    			id: create_fragment$6.name
    		});
    	}
    }

    /* src/halaman/NotFound.svelte generated by Svelte v3.29.0 */
    const file$7 = "src/halaman/NotFound.svelte";

    function create_fragment$7(ctx) {
    	let p;
    	let t1;
    	let div;
    	let a;
    	let t3;

    	const block = {
    		c: function create() {
    			p = element("p");
    			p.textContent = "Nggak ada";
    			t1 = space();
    			div = element("div");
    			a = element("a");
    			a.textContent = "☖";
    			t3 = space();
    			attr_dev(p, "class", "text-center");
    			add_location(p, file$7, 0, 0, 0);
    			attr_dev(a, "class", "btn btn-info");
    			attr_dev(a, "href", "/");
    			add_location(a, file$7, 2, 1, 75);
    			attr_dev(div, "class", "bawah");
    			add_location(div, file$7, 1, 0, 54);
    			document.title = "Nggak ada";
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    			/*p_binding*/ ctx[1](p);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div, anchor);
    			append_dev(div, a);
    			insert_dev(target, t3, anchor);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    			/*p_binding*/ ctx[1](null);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div);
    			if (detaching) detach_dev(t3);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$7.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$7($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("NotFound", slots, []);
    	let teks;

    	onMount(() => {
    		const posisi = () => $$invalidate(0, teks.style.marginTop = `${(window.innerHeight - 50) / 2}px`, teks);
    		posisi();
    		window.addEventListener("resize", posisi);
    	});

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<NotFound> was created with unknown prop '${key}'`);
    	});

    	function p_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			teks = $$value;
    			$$invalidate(0, teks);
    		});
    	}

    	$$self.$capture_state = () => ({ onMount, teks });

    	$$self.$inject_state = $$props => {
    		if ("teks" in $$props) $$invalidate(0, teks = $$props.teks);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [teks, p_binding];
    }

    class NotFound extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$7, create_fragment$7, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "NotFound",
    			options,
    			id: create_fragment$7.name
    		});
    	}
    }

    /* src/App.svelte generated by Svelte v3.29.0 */

    function create_fragment$8(ctx) {
    	let switch_instance;
    	let switch_instance_anchor;
    	let current;
    	var switch_value = /*page*/ ctx[0];

    	function switch_props(ctx) {
    		return {
    			props: { params: /*params*/ ctx[1] },
    			$$inline: true
    		};
    	}

    	if (switch_value) {
    		switch_instance = new switch_value(switch_props(ctx));
    	}

    	const block = {
    		c: function create() {
    			if (switch_instance) create_component(switch_instance.$$.fragment);
    			switch_instance_anchor = empty();
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			if (switch_instance) {
    				mount_component(switch_instance, target, anchor);
    			}

    			insert_dev(target, switch_instance_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const switch_instance_changes = {};
    			if (dirty & /*params*/ 2) switch_instance_changes.params = /*params*/ ctx[1];

    			if (switch_value !== (switch_value = /*page*/ ctx[0])) {
    				if (switch_instance) {
    					group_outros();
    					const old_component = switch_instance;

    					transition_out(old_component.$$.fragment, 1, 0, () => {
    						destroy_component(old_component, 1);
    					});

    					check_outros();
    				}

    				if (switch_value) {
    					switch_instance = new switch_value(switch_props(ctx));
    					create_component(switch_instance.$$.fragment);
    					transition_in(switch_instance.$$.fragment, 1);
    					mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
    				} else {
    					switch_instance = null;
    				}
    			} else if (switch_value) {
    				switch_instance.$set(switch_instance_changes);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(switch_instance_anchor);
    			if (switch_instance) destroy_component(switch_instance, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$8.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$8($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("App", slots, []);
    	let page$1;
    	let params;
    	page("/", () => $$invalidate(0, page$1 = Beranda));
    	page("/tulis", () => $$invalidate(0, page$1 = Tulis));
    	page("/cari", () => $$invalidate(0, page$1 = CariKosongan));

    	page(
    		"/cari/:cari",
    		(x, next) => {
    			$$invalidate(1, params = x.params);
    			next();
    		},
    		() => $$invalidate(0, page$1 = Cari)
    	);

    	page(
    		"/:slug",
    		(x, next) => {
    			$$invalidate(1, params = x.params);
    			next();
    		},
    		() => $$invalidate(0, page$1 = Baca)
    	);

    	page(
    		"/:slug/edit",
    		(x, next) => {
    			$$invalidate(1, params = x.params);
    			next();
    		},
    		() => $$invalidate(0, page$1 = Edit)
    	);

    	page("/*", () => $$invalidate(0, page$1 = NotFound));
    	page.start();
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		router: page,
    		Beranda,
    		Baca,
    		Tulis,
    		Edit,
    		Cari,
    		CariKosongan,
    		NotFound,
    		page: page$1,
    		params
    	});

    	$$self.$inject_state = $$props => {
    		if ("page" in $$props) $$invalidate(0, page$1 = $$props.page);
    		if ("params" in $$props) $$invalidate(1, params = $$props.params);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*params*/ 2) {
    			 {
    				if (params) {
    					window.scrollTo(0, 0);
    				}
    			}
    		}
    	};

    	return [page$1, params];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$8, create_fragment$8, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment$8.name
    		});
    	}
    }

    const app = new App({
    	target: document.body
    });

    return app;

}());
//# sourceMappingURL=bundle.js.map
