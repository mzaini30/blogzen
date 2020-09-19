var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function i(t){t.forEach(e)}function r(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function p(){return u(" ")}function l(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function f(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let d;function g(t){d=t}function m(t){(function(){if(!d)throw new Error("Function called outside component initialization");return d})().$$.on_mount.push(t)}const v=[],w=[],y=[],b=[],_=Promise.resolve();let x=!1;function $(t){y.push(t)}let E=!1;const k=new Set;function R(){if(!E){E=!0;do{for(let t=0;t<v.length;t+=1){const e=v[t];g(e),C(e.$$)}for(g(null),v.length=0;w.length;)w.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];k.has(e)||(k.add(e),e())}y.length=0}while(v.length);for(;b.length;)b.pop()();x=!1,E=!1,k.clear()}}function C(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach($)}}const L=new Set;let U;function j(t,e){t&&t.i&&(L.delete(t),t.i(e))}function T(t,e,n,i){if(t&&t.o){if(L.has(t))return;L.add(t),U.c.push(()=>{L.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function O(t){t&&t.c()}function A(t,n,o){const{fragment:s,on_mount:a,on_destroy:c,after_update:h}=t.$$;s&&s.m(n,o),$(()=>{const n=a.map(e).filter(r);c?c.push(...n):i(n),t.$$.on_mount=[]}),h.forEach($)}function P(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function S(t,e){-1===t.$$.dirty[0]&&(v.push(t),x||(x=!0,_.then(R)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function H(e,r,o,s,a,h,u=[-1]){const p=d;g(e);const l=r.props||{},f=e.$$={fragment:null,ctx:null,props:h,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let m=!1;if(f.ctx=o?o(e,l,(t,n,...i)=>{const r=i.length?i[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),m&&S(e,t)),n}):[],f.update(),m=!0,i(f.before_update),f.fragment=!!s&&s(f.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);f.fragment&&f.fragment.l(t),t.forEach(c)}else f.fragment&&f.fragment.c();r.intro&&j(e.$$.fragment),A(e,r.target,r.anchor),R()}g(p)}class I{$destroy(){P(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var N,B,q=(function(t,e){t.exports=function(){var t=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},e=w,n=a,i=c,r=h,o=v,s=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function a(t){for(var e,n=[],i=0,r=0,o="";null!=(e=s.exec(t));){var a=e[0],c=e[1],h=e.index;if(o+=t.slice(r,h),r=h+a.length,c)o+=c[1];else{o&&(n.push(o),o="");var u=e[2],l=e[3],f=e[4],d=e[5],g=e[6],m=e[7],v="+"===g||"*"===g,w="?"===g||"*"===g,y=u||"/",b=f||d||(m?".*":"[^"+y+"]+?");n.push({name:l||i++,prefix:u||"",delimiter:y,optional:w,repeat:v,pattern:p(b)})}}return r<t.length&&(o+=t.substr(r)),o&&n.push(o),n}function c(t){return h(a(t))}function h(e){for(var n=new Array(e.length),i=0;i<e.length;i++)"object"==typeof e[i]&&(n[i]=new RegExp("^"+e[i].pattern+"$"));return function(i){for(var r="",o=i||{},s=0;s<e.length;s++){var a=e[s];if("string"!=typeof a){var c,h=o[a.name];if(null==h){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to be defined')}if(t(h)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but received "'+h+'"');if(0===h.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var u=0;u<h.length;u++){if(c=encodeURIComponent(h[u]),!n[s].test(c))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'", but received "'+c+'"');r+=(0===u?a.prefix:a.delimiter)+c}}else{if(c=encodeURIComponent(h),!n[s].test(c))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but received "'+c+'"');r+=a.prefix+c}}else r+=a}return r}}function u(t){return t.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function p(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function l(t,e){return t.keys=e,t}function f(t){return t.sensitive?"":"i"}function d(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var i=0;i<n.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return l(t,e)}function g(t,e,n){for(var i=[],r=0;r<t.length;r++)i.push(w(t[r],e,n).source);return l(new RegExp("(?:"+i.join("|")+")",f(n)),e)}function m(t,e,n){for(var i=a(t),r=v(i,n),o=0;o<i.length;o++)"string"!=typeof i[o]&&e.push(i[o]);return l(r,e)}function v(t,e){for(var n=(e=e||{}).strict,i=!1!==e.end,r="",o=t[t.length-1],s="string"==typeof o&&/\/$/.test(o),a=0;a<t.length;a++){var c=t[a];if("string"==typeof c)r+=u(c);else{var h=u(c.prefix),p=c.pattern;c.repeat&&(p+="(?:"+h+p+")*"),r+=p=c.optional?h?"(?:"+h+"("+p+"))?":"("+p+")?":h+"("+p+")"}}return n||(r=(s?r.slice(0,-2):r)+"(?:\\/(?=$))?"),r+=i?"$":n&&s?"":"(?=\\/|$)",new RegExp("^"+r,f(e))}function w(e,n,i){return t(n=n||[])?i||(i={}):(i=n,n=[]),e instanceof RegExp?d(e,n):t(e)?g(e,n,i):m(e,n,i)}e.parse=n,e.compile=i,e.tokensToFunction=r,e.tokensToRegExp=o;var y,b="undefined"!=typeof document,_="undefined"!=typeof window,x="undefined"!=typeof history,$="undefined"!=typeof process,E=b&&document.ontouchstart?"touchstart":"click",k=_&&!(!window.history.location&&!window.location);function R(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}function C(){var t=new R;function e(){return L.apply(t,arguments)}return e.callbacks=t.callbacks,e.exits=t.exits,e.base=t.base.bind(t),e.strict=t.strict.bind(t),e.start=t.start.bind(t),e.stop=t.stop.bind(t),e.show=t.show.bind(t),e.back=t.back.bind(t),e.redirect=t.redirect.bind(t),e.replace=t.replace.bind(t),e.dispatch=t.dispatch.bind(t),e.exit=t.exit.bind(t),e.configure=t.configure.bind(t),e.sameOrigin=t.sameOrigin.bind(t),e.clickHandler=t.clickHandler.bind(t),e.create=C,Object.defineProperty(e,"len",{get:function(){return t.len},set:function(e){t.len=e}}),Object.defineProperty(e,"current",{get:function(){return t.current},set:function(e){t.current=e}}),e.Context=T,e.Route=O,e}function L(t,e){if("function"==typeof t)return L.call(this,"*",t);if("function"==typeof e)for(var n=new O(t,null,this),i=1;i<arguments.length;++i)this.callbacks.push(n.middleware(arguments[i]));else"string"==typeof t?this["string"==typeof e?"redirect":"show"](t,e):this.start(t)}function U(t){if(!t.handled){var e=this,n=e._window;(e._hashbang?k&&this._getBase()+n.location.hash.replace("#!",""):k&&n.location.pathname+n.location.search)!==t.canonicalPath&&(e.stop(),t.handled=!1,k&&(n.location.href=t.canonicalPath))}}function j(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function T(t,e,n){var i=this.page=n||L,r=i._window,o=i._hashbang,s=i._getBase();"/"===t[0]&&0!==t.indexOf(s)&&(t=s+(o?"#!":"")+t);var a=t.indexOf("?");this.canonicalPath=t;var c=new RegExp("^"+j(s));if(this.path=t.replace(c,"")||"/",o&&(this.path=this.path.replace("#!","")||"/"),this.title=b&&r.document.title,this.state=e||{},this.state.path=t,this.querystring=~a?i._decodeURLEncodedURIComponent(t.slice(a+1)):"",this.pathname=i._decodeURLEncodedURIComponent(~a?t.slice(0,a):t),this.params={},this.hash="",!o){if(!~this.path.indexOf("#"))return;var h=this.path.split("#");this.path=this.pathname=h[0],this.hash=i._decodeURLEncodedURIComponent(h[1])||"",this.querystring=this.querystring.split("#")[0]}}function O(t,n,i){var r=this.page=i||A,o=n||{};o.strict=o.strict||r._strict,this.path="*"===t?"(.*)":t,this.method="GET",this.regexp=e(this.path,this.keys=[],o)}R.prototype.configure=function(t){var e=t||{};this._window=e.window||_&&window,this._decodeURLComponents=!1!==e.decodeURLComponents,this._popstate=!1!==e.popstate&&_,this._click=!1!==e.click&&b,this._hashbang=!!e.hashbang;var n=this._window;this._popstate?n.addEventListener("popstate",this._onpopstate,!1):_&&n.removeEventListener("popstate",this._onpopstate,!1),this._click?n.document.addEventListener(E,this.clickHandler,!1):b&&n.document.removeEventListener(E,this.clickHandler,!1),this._hashbang&&_&&!x?n.addEventListener("hashchange",this._onpopstate,!1):_&&n.removeEventListener("hashchange",this._onpopstate,!1)},R.prototype.base=function(t){if(0===arguments.length)return this._base;this._base=t},R.prototype._getBase=function(){var t=this._base;if(t)return t;var e=_&&this._window&&this._window.location;return _&&this._hashbang&&e&&"file:"===e.protocol&&(t=e.pathname),t},R.prototype.strict=function(t){if(0===arguments.length)return this._strict;this._strict=t},R.prototype.start=function(t){var e=t||{};if(this.configure(e),!1!==e.dispatch){var n;if(this._running=!0,k){var i=this._window.location;n=this._hashbang&&~i.hash.indexOf("#!")?i.hash.substr(2)+i.search:this._hashbang?i.search+i.hash:i.pathname+i.search+i.hash}this.replace(n,null,!0,e.dispatch)}},R.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var t=this._window;this._click&&t.document.removeEventListener(E,this.clickHandler,!1),_&&t.removeEventListener("popstate",this._onpopstate,!1),_&&t.removeEventListener("hashchange",this._onpopstate,!1)}},R.prototype.show=function(t,e,n,i){var r=new T(t,e,this),o=this.prevContext;return this.prevContext=r,this.current=r.path,!1!==n&&this.dispatch(r,o),!1!==r.handled&&!1!==i&&r.pushState(),r},R.prototype.back=function(t,e){var n=this;if(this.len>0){var i=this._window;x&&i.history.back(),this.len--}else t?setTimeout((function(){n.show(t,e)})):setTimeout((function(){n.show(n._getBase(),e)}))},R.prototype.redirect=function(t,e){var n=this;"string"==typeof t&&"string"==typeof e&&L.call(this,t,(function(t){setTimeout((function(){n.replace(e)}),0)})),"string"==typeof t&&void 0===e&&setTimeout((function(){n.replace(t)}),0)},R.prototype.replace=function(t,e,n,i){var r=new T(t,e,this),o=this.prevContext;return this.prevContext=r,this.current=r.path,r.init=n,r.save(),!1!==i&&this.dispatch(r,o),r},R.prototype.dispatch=function(t,e){var n=0,i=0,r=this;function o(){var t=r.exits[i++];if(!t)return s();t(e,o)}function s(){var e=r.callbacks[n++];if(t.path===r.current)return e?void e(t,s):U.call(r,t);t.handled=!1}e?o():s()},R.prototype.exit=function(t,e){if("function"==typeof t)return this.exit("*",t);for(var n=new O(t,null,this),i=1;i<arguments.length;++i)this.exits.push(n.middleware(arguments[i]))},R.prototype.clickHandler=function(t){if(1===this._which(t)&&!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){var e=t.target,n=t.path||(t.composedPath?t.composedPath():null);if(n)for(var i=0;i<n.length;i++)if(n[i].nodeName&&"A"===n[i].nodeName.toUpperCase()&&n[i].href){e=n[i];break}for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;if(e&&"A"===e.nodeName.toUpperCase()){var r="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name;if(!e.hasAttribute("download")&&"external"!==e.getAttribute("rel")){var o=e.getAttribute("href");if((this._hashbang||!this._samePath(e)||!e.hash&&"#"!==o)&&!(o&&o.indexOf("mailto:")>-1)&&!(r?e.target.baseVal:e.target)&&(r||this.sameOrigin(e.href))){var s=r?e.href.baseVal:e.pathname+e.search+(e.hash||"");s="/"!==s[0]?"/"+s:s,$&&s.match(/^\/[a-zA-Z]:\//)&&(s=s.replace(/^\/[a-zA-Z]:\//,"/"));var a=s,c=this._getBase();0===s.indexOf(c)&&(s=s.substr(c.length)),this._hashbang&&(s=s.replace("#!","")),(!c||a!==s||k&&"file:"===this._window.location.protocol)&&(t.preventDefault(),this.show(a))}}}}},R.prototype._onpopstate=(y=!1,_?(b&&"complete"===document.readyState?y=!0:window.addEventListener("load",(function(){setTimeout((function(){y=!0}),0)})),function(t){if(y){var e=this;if(t.state){var n=t.state.path;e.replace(n,t.state)}else if(k){var i=e._window.location;e.show(i.pathname+i.search+i.hash,void 0,void 0,!1)}}}):function(){}),R.prototype._which=function(t){return null==(t=t||_&&this._window.event).which?t.button:t.which},R.prototype._toURL=function(t){var e=this._window;if("function"==typeof URL&&k)return new URL(t,e.location.toString());if(b){var n=e.document.createElement("a");return n.href=t,n}},R.prototype.sameOrigin=function(t){if(!t||!k)return!1;var e=this._toURL(t),n=this._window.location;return n.protocol===e.protocol&&n.hostname===e.hostname&&(n.port===e.port||""===n.port&&(80==e.port||443==e.port))},R.prototype._samePath=function(t){if(!k)return!1;var e=this._window.location;return t.pathname===e.pathname&&t.search===e.search},R.prototype._decodeURLEncodedURIComponent=function(t){return"string"!=typeof t?t:this._decodeURLComponents?decodeURIComponent(t.replace(/\+/g," ")):t},T.prototype.pushState=function(){var t=this.page,e=t._window,n=t._hashbang;t.len++,x&&e.history.pushState(this.state,this.title,n&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},T.prototype.save=function(){var t=this.page;x&&t._window.history.replaceState(this.state,this.title,t._hashbang&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},O.prototype.middleware=function(t){var e=this;return function(n,i){if(e.match(n.path,n.params))return n.routePath=e.path,t(n,i);i()}},O.prototype.match=function(t,e){var n=this.keys,i=t.indexOf("?"),r=~i?t.slice(0,i):t,o=this.regexp.exec(decodeURIComponent(r));if(!o)return!1;delete e[0];for(var s=1,a=o.length;s<a;++s){var c=n[s-1],h=this.page._decodeURLEncodedURIComponent(o[s]);void 0===h&&hasOwnProperty.call(e,c.name)||(e[c.name]=h)}return!0};var A=C(),P=A,S=A;return P.default=S,P}()}(B={path:N,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&B.path)}},B.exports),B.exports);function Z(t,e,n){const i=t.slice();return i[1]=e[n],i}function z(t){let e,n,i,r,o,d,g,m,v,w,y,b=t[1].judul+"",_=t[1].isi+"";return{c(){e=h("div"),n=h("a"),i=h("div"),r=h("div"),o=h("h5"),d=u(b),g=p(),m=h("p"),v=u(_),y=p(),l(r,"class","card-body"),l(i,"class","card"),l(n,"href",w="/"+t[1].slug),l(n,"class","samarkan-link"),l(e,"class","col-6 col-sm-3")},m(t,c){a(t,e,c),s(e,n),s(n,i),s(i,r),s(r,o),s(o,d),s(r,g),s(r,m),s(m,v),s(e,y)},p(t,e){1&e&&b!==(b=t[1].judul+"")&&f(d,b),1&e&&_!==(_=t[1].isi+"")&&f(v,_),1&e&&w!==(w="/"+t[1].slug)&&l(n,"href",w)},d(t){t&&c(e)}}}function K(e){let n,i,r,o,u,f,d,g,m,v,w,y=e[0],b=[];for(let t=0;t<y.length;t+=1)b[t]=z(Z(e,y,t));let _="localhost:5000"==location.host&&function(t){let e;return{c(){e=h("a"),e.textContent="+",l(e,"href","/tulis"),l(e,"class","btn btn-success")},m(t,n){a(t,e,n)},d(t){t&&c(e)}}}();return{c(){n=h("div"),i=h("br"),r=p(),o=h("h1"),o.textContent="Blog Zen",u=p(),f=h("hr"),d=p(),g=h("div");for(let t=0;t<b.length;t+=1)b[t].c();m=p(),v=h("div"),_&&_.c(),w=p(),l(o,"class","text-center"),l(g,"class","row"),l(n,"class","container"),l(v,"class","bawah"),document.title="Blog Zen"},m(t,e){a(t,n,e),s(n,i),s(n,r),s(n,o),s(n,u),s(n,f),s(n,d),s(n,g);for(let t=0;t<b.length;t+=1)b[t].m(g,null);a(t,m,e),a(t,v,e),_&&_.m(v,null),a(t,w,e)},p(t,[e]){if(1&e){let n;for(y=t[0],n=0;n<y.length;n+=1){const i=Z(t,y,n);b[n]?b[n].p(i,e):(b[n]=z(i),b[n].c(),b[n].m(g,null))}for(;n<b.length;n+=1)b[n].d(1);b.length=y.length}},i:t,o:t,d(t){t&&c(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(b,t),t&&c(m),t&&c(v),_&&_.d(),t&&c(w)}}}function M(t,e,n){let i=[];return m(()=>{fetch("/db.json").then(t=>t.json()).then(t=>n(0,i=t.postingan.reverse()))}),[i]}class V extends I{constructor(t){super(),H(this,t,M,K,o,{})}}function D(e){let n,i,r,o,d,g,m,v,w,y,b,_=e[0].judul+"",x=e[0].isi+"";return document.title=b=e[0].judul,{c(){n=h("div"),i=h("br"),r=p(),o=h("h1"),d=u(_),g=p(),m=h("hr"),v=p(),w=h("div"),y=p(),l(n,"class","container")},m(t,e){a(t,n,e),s(n,i),s(n,r),s(n,o),s(o,d),s(n,g),s(n,m),s(n,v),s(n,w),w.innerHTML=x,a(t,y,e)},p(t,[e]){1&e&&_!==(_=t[0].judul+"")&&f(d,_),1&e&&x!==(x=t[0].isi+"")&&(w.innerHTML=x),1&e&&b!==(b=t[0].judul)&&(document.title=b)},i:t,o:t,d(t){t&&c(n),t&&c(y)}}}function F(t,e,n){let{params:i}=e,r={judul:"",isi:""};return m(()=>{fetch("/db.json").then(t=>t.json()).then(t=>{for(let e of t.postingan)e.slug==i.slug&&n(0,r=e)})}),t.$$set=t=>{"params"in t&&n(1,i=t.params)},[r,i]}class G extends I{constructor(t){super(),H(this,t,F,D,o,{params:1})}}function J(e){let n;return{c(){n=h("p"),n.textContent="Tulis"},m(t,e){a(t,n,e)},p:t,i:t,o:t,d(t){t&&c(n)}}}class Q extends I{constructor(t){super(),H(this,t,null,J,o,{})}}function W(t){let e,n,r;var o=t[0];function s(t){return{props:{params:t[1]}}}return o&&(e=new o(s(t))),{c(){e&&O(e.$$.fragment),n=u("")},m(t,i){e&&A(e,t,i),a(t,n,i),r=!0},p(t,[r]){const a={};if(2&r&&(a.params=t[1]),o!==(o=t[0])){if(e){U={r:0,c:[],p:U};const t=e;T(t.$$.fragment,1,0,()=>{P(t,1)}),U.r||i(U.c),U=U.p}o?(e=new o(s(t)),O(e.$$.fragment),j(e.$$.fragment,1),A(e,n.parentNode,n)):e=null}else o&&e.$set(a)},i(t){r||(e&&j(e.$$.fragment,t),r=!0)},o(t){e&&T(e.$$.fragment,t),r=!1},d(t){t&&c(n),e&&P(e,t)}}}function X(t,e,n){let i,r;return q("/",()=>n(0,i=V)),q("/tulis",()=>n(0,i=Q)),q("/:slug",(t,e)=>{n(1,r=t.params),e()},()=>n(0,i=G)),q.start(),[i,r]}return new class extends I{constructor(t){super(),H(this,t,X,W,o,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
