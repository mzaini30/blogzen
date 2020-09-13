var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}function u(n){return n&&r(n.destroy)?n.destroy:t}function c(t,n){t.appendChild(n)}function a(t,n,e){t.insertBefore(n,e||null)}function l(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function d(){return p(" ")}function h(){return p("")}function m(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function g(t){return function(n){return n.preventDefault(),t.call(this,n)}}function $(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function b(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function v(t,n){t.value=null==n?"":n}let w;function y(t){w=t}function x(){if(!w)throw new Error("Function called outside component initialization");return w}function k(t){x().$$.on_mount.push(t)}function E(){const t=x();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);o.slice().forEach(n=>{n.call(t,r)})}}}function j(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(t=>t(n))}const _=[],C=[],L=[],A=[],M=Promise.resolve();let O=!1;function q(){O||(O=!0,M.then(N))}function D(){return q(),M}function H(t){L.push(t)}let I=!1;const S=new Set;function N(){if(!I){I=!0;do{for(let t=0;t<_.length;t+=1){const n=_[t];y(n),T(n.$$)}for(y(null),_.length=0;C.length;)C.pop()();for(let t=0;t<L.length;t+=1){const n=L[t];S.has(n)||(S.add(n),n())}L.length=0}while(_.length);for(;A.length;)A.pop()();O=!1,I=!1,S.clear()}}function T(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(H)}}const z=new Set;let F;function R(){F={r:0,c:[],p:F}}function B(){F.r||o(F.c),F=F.p}function J(t,n){t&&t.i&&(z.delete(t),t.i(n))}function P(t,n,e,o){if(t&&t.o){if(z.has(t))return;z.add(t),F.c.push(()=>{z.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}function U(t){t&&t.c()}function W(t,e,s){const{fragment:i,on_mount:u,on_destroy:c,after_update:a}=t.$$;i&&i.m(e,s),H(()=>{const e=u.map(n).filter(r);c?c.push(...e):o(e),t.$$.on_mount=[]}),a.forEach(H)}function Z(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function G(n,r,s,i,u,c,a=[-1]){const f=w;y(n);const p=r.props||{},d=n.$$={fragment:null,ctx:null,props:c,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:e(),dirty:a,skip_bound:!1};let h=!1;if(d.ctx=s?s(n,p,(t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&u(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),h&&function(t,n){-1===t.$$.dirty[0]&&(_.push(t),q(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e}):[],d.update(),h=!0,o(d.before_update),d.fragment=!!i&&i(d.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);d.fragment&&d.fragment.l(t),t.forEach(l)}else d.fragment&&d.fragment.c();r.intro&&J(n.$$.fragment),W(n,r.target,r.anchor),N()}y(f)}class K{$destroy(){Z(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Q=[];function V(t,n){return{subscribe:X(t,n).subscribe}}function X(n,e=t){let o;const r=[];function i(t){if(s(n,t)&&(n=t,o)){const t=!Q.length;for(let t=0;t<r.length;t+=1){const e=r[t];e[1](),Q.push(e,n)}if(t){for(let t=0;t<Q.length;t+=2)Q[t][0](Q[t+1]);Q.length=0}}}return{set:i,update:function(t){i(t(n))},subscribe:function(s,u=t){const c=[s,u];return r.push(c),1===r.length&&(o=e(i)||t),s(n),()=>{const t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function Y(n,e,s){const u=!Array.isArray(n),c=u?[n]:n,a=e.length<2;return V(s,n=>{let s=!1;const l=[];let f=0,p=t;const d=()=>{if(f)return;p();const o=e(u?l[0]:l,n);a?n(o):p=r(o)?o:t},h=c.map((t,n)=>i(t,t=>{l[n]=t,f&=~(1<<n),s&&d()},()=>{f|=1<<n}));return s=!0,d(),function(){o(h),p()}})}function tt(t){let n,e,o;var r=t[0];return r&&(n=new r({}),n.$on("routeEvent",t[5])),{c(){n&&U(n.$$.fragment),e=h()},m(t,r){n&&W(n,t,r),a(t,e,r),o=!0},p(t,o){if(r!==(r=t[0])){if(n){R();const t=n;P(t.$$.fragment,1,0,()=>{Z(t,1)}),B()}r?(n=new r({}),n.$on("routeEvent",t[5]),U(n.$$.fragment),J(n.$$.fragment,1),W(n,e.parentNode,e)):n=null}},i(t){o||(n&&J(n.$$.fragment,t),o=!0)},o(t){n&&P(n.$$.fragment,t),o=!1},d(t){t&&l(e),n&&Z(n,t)}}}function nt(t){let n,e,o;var r=t[0];function s(t){return{props:{params:t[1]}}}return r&&(n=new r(s(t)),n.$on("routeEvent",t[4])),{c(){n&&U(n.$$.fragment),e=h()},m(t,r){n&&W(n,t,r),a(t,e,r),o=!0},p(t,o){const i={};if(2&o&&(i.params=t[1]),r!==(r=t[0])){if(n){R();const t=n;P(t.$$.fragment,1,0,()=>{Z(t,1)}),B()}r?(n=new r(s(t)),n.$on("routeEvent",t[4]),U(n.$$.fragment),J(n.$$.fragment,1),W(n,e.parentNode,e)):n=null}else r&&n.$set(i)},i(t){o||(n&&J(n.$$.fragment,t),o=!0)},o(t){n&&P(n.$$.fragment,t),o=!1},d(t){t&&l(e),n&&Z(n,t)}}}function et(t){let n,e,o,r;const s=[nt,tt],i=[];function u(t,n){return t[1]?0:1}return n=u(t),e=i[n]=s[n](t),{c(){e.c(),o=h()},m(t,e){i[n].m(t,e),a(t,o,e),r=!0},p(t,[r]){let c=n;n=u(t),n===c?i[n].p(t,r):(R(),P(i[c],1,1,()=>{i[c]=null}),B(),e=i[n],e||(e=i[n]=s[n](t),e.c()),J(e,1),e.m(o.parentNode,o))},i(t){r||(J(e),r=!0)},o(t){P(e),r=!1},d(t){i[n].d(t),t&&l(o)}}}function ot(){const t=window.location.href.indexOf("#/");let n=t>-1?window.location.href.substr(t+1):"/";const e=n.indexOf("?");let o="";return e>-1&&(o=n.substr(e+1),n=n.substr(0,e)),{location:n,querystring:o}}const rt=V(null,(function(t){t(ot());const n=()=>{t(ot())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}}));Y(rt,t=>t.location),Y(rt,t=>t.querystring);function st(t){if(!t||t.length<1||"/"!=t.charAt(0)&&0!==t.indexOf("#/"))throw Error("Invalid parameter location");return D().then(()=>{window.location.hash=("#"==t.charAt(0)?"":"#")+t})}function it(t,n){if(!t||!t.tagName||"a"!=t.tagName.toLowerCase())throw Error('Action "link" can only be used with <a> tags');return ut(t,n||t.getAttribute("href")),{update(n){ut(t,n)}}}function ut(t,n){if(!n||n.length<1||"/"!=n.charAt(0))throw Error('Invalid value for "href" attribute');t.setAttribute("href","#"+n)}function ct(n,e,o){let r,s=t;!function(t,n,e){t.$$.on_destroy.push(i(n,e))}(n,rt,t=>o(6,r=t)),n.$$.on_destroy.push(()=>s());let{routes:u={}}=e,{prefix:c=""}=e;class a{constructor(t,n){if(!n||"function"!=typeof n&&("object"!=typeof n||!0!==n._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument');const{pattern:e,keys:o}=function(t,n){if(t instanceof RegExp)return{keys:!1,pattern:t};var e,o,r,s,i=[],u="",c=t.split("/");for(c[0]||c.shift();r=c.shift();)"*"===(e=r[0])?(i.push("wild"),u+="/(.*)"):":"===e?(o=r.indexOf("?",1),s=r.indexOf(".",1),i.push(r.substring(1,~o?o:~s?s:r.length)),u+=~o&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(u+=(~o?"?":"")+"\\"+r.substring(s))):u+="/"+r;return{keys:i,pattern:new RegExp("^"+u+(n?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof n&&!0===n._sveltesparouter?(this.component=n.route,this.conditions=n.conditions||[],this.userData=n.userData):(this.component=n,this.conditions=[],this.userData=void 0),this._pattern=e,this._keys=o}match(t){c&&t.startsWith(c)&&(t=t.substr(c.length)||"/");const n=this._pattern.exec(t);if(null===n)return null;if(!1===this._keys)return n;const e={};let o=0;for(;o<this._keys.length;)e[this._keys[o]]=n[++o]||null;return e}checkConditions(t){for(let n=0;n<this.conditions.length;n++)if(!this.conditions[n](t))return!1;return!0}}const l=[];u instanceof Map?u.forEach((t,n)=>{l.push(new a(n,t))}):Object.keys(u).forEach(t=>{l.push(new a(t,u[t]))});let f=null,p=null;const d=E(),h=(t,n)=>{D().then(()=>{d(t,n)})};return n.$$set=t=>{"routes"in t&&o(2,u=t.routes),"prefix"in t&&o(3,c=t.prefix)},n.$$.update=()=>{if(65&n.$$.dirty){o(0,f=null);let t=0;for(;!f&&t<l.length;){const n=l[t].match(r.location);if(n){const e={component:l[t].component,name:l[t].component.name,location:r.location,querystring:r.querystring,userData:l[t].userData};if(!l[t].checkConditions(e)){h("conditionsFailed",e);break}o(0,f=l[t].component),n&&"object"==typeof n&&Object.keys(n).length?o(1,p=n):o(1,p=null),h("routeLoaded",e)}t++}}},[f,p,u,c,function(t){j(n,t)},function(t){j(n,t)}]}class at extends K{constructor(t){super(),G(this,t,ct,et,s,{routes:2,prefix:3})}}function lt(t,n,e){const o=t.slice();return o[6]=n[e],o}function ft(t){let n,e,o,r,s,i,d=t[6].judul+"";return{c(){n=f("a"),e=p(d),$(n,"href",o="/"+t[6].slug),$(n,"class","list-group-item list-group-item-action")},m(t,o){a(t,n,o),c(n,e),s||(i=u(r=it.call(null,n)),s=!0)},p(t,r){4&r&&d!==(d=t[6].judul+"")&&b(e,d),4&r&&o!==(o="/"+t[6].slug)&&$(n,"href",o)},d(t){t&&l(n),s=!1,i()}}}function pt(n){let e,r,s,i,c,p;return{c(){e=f("button"),e.textContent="☣",r=d(),s=f("a"),s.textContent="✎",$(e,"class","btn btn-danger"),$(s,"href","/tulis"),$(s,"class","btn btn-info")},m(t,o){a(t,e,o),a(t,r,o),a(t,s,o),c||(p=[m(e,"click",n[3]),u(i=it.call(null,s))],c=!0)},p:t,d(t){t&&l(e),t&&l(r),t&&l(s),c=!1,o(p)}}}function dt(n){let e,o,r,s;return{c(){e=f("a"),e.textContent="☘",$(e,"href","/login"),$(e,"class","btn btn-info")},m(t,n){a(t,e,n),r||(s=u(o=it.call(null,e)),r=!0)},p:t,d(t){t&&l(e),r=!1,s()}}}function ht(n){let e,r,s,i,u,p,h,b,w,y=n[2],x=[];for(let t=0;t<y.length;t+=1)x[t]=ft(lt(n,y,t));function k(t,n){return 0==t[0]?dt:pt}let E=k(n),j=E(n);return{c(){e=f("form"),r=f("div"),s=f("input"),i=d(),u=f("div");for(let t=0;t<x.length;t+=1)x[t].c();p=d(),h=f("div"),j.c(),$(s,"type","search"),$(s,"class","form-control"),$(s,"placeholder","Cari apa?"),s.required=!0,$(s,"name",""),$(r,"class","form-group"),$(u,"class","list-group jarak-bawah"),$(h,"class","bawah")},m(t,o){a(t,e,o),c(e,r),c(r,s),v(s,n[1]),a(t,i,o),a(t,u,o);for(let t=0;t<x.length;t+=1)x[t].m(u,null);a(t,p,o),a(t,h,o),j.m(h,null),b||(w=[m(s,"input",n[5]),m(e,"submit",g(n[4]))],b=!0)},p(t,[n]){if(2&n&&v(s,t[1]),4&n){let e;for(y=t[2],e=0;e<y.length;e+=1){const o=lt(t,y,e);x[e]?x[e].p(o,n):(x[e]=ft(o),x[e].c(),x[e].m(u,null))}for(;e<x.length;e+=1)x[e].d(1);x.length=y.length}E===(E=k(t))&&j?j.p(t,n):(j.d(1),j=E(t),j&&(j.c(),j.m(h,null)))},i:t,o:t,d(t){t&&l(e),t&&l(i),t&&l(u),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(x,t),t&&l(p),t&&l(h),j.d(),b=!1,o(w)}}}function mt(t,n,e){let o=!1,r="",s=[];k(()=>{localStorage.token&&e(0,o=!0),fetch(api+"/index.php/postingan/semua").then(t=>t.json()).then(t=>e(2,s=t))});return[o,r,s,()=>{localStorage.removeItem("token"),e(0,o=!1)},()=>st("/cari/"+encodeURIComponent(r)),function(){r=this.value,e(1,r)}]}function gt(n){let e,r,s,i,u,p,h,b,w,y,x,k,E,j,_,C;return{c(){e=f("h3"),e.textContent="Login",r=d(),s=f("form"),i=f("div"),u=f("label"),u.textContent="Username",p=d(),h=f("input"),b=d(),w=f("div"),y=f("label"),y.textContent="Password",x=d(),k=f("input"),E=d(),j=f("div"),j.innerHTML='<input type="submit" name="" class="btn btn-success" value="✔"/>',$(u,"for","username"),$(h,"type","search"),$(h,"id","username"),$(h,"class","form-control"),h.required=!0,$(h,"name",""),$(i,"class","form-group"),$(y,"for","password"),$(k,"type","password"),$(k,"id","password"),$(k,"class","form-control"),k.required=!0,$(k,"name",""),$(w,"class","form-group"),$(j,"class","bawah")},m(t,o){a(t,e,o),a(t,r,o),a(t,s,o),c(s,i),c(i,u),c(i,p),c(i,h),n[4](h),v(h,n[0]),c(s,b),c(s,w),c(w,y),c(w,x),c(w,k),v(k,n[1]),c(s,E),c(s,j),_||(C=[m(h,"input",n[5]),m(k,"input",n[6]),m(s,"submit",g(n[3]))],_=!0)},p(t,[n]){1&n&&v(h,t[0]),2&n&&k.value!==t[1]&&v(k,t[1])},i:t,o:t,d(t){t&&l(e),t&&l(r),t&&l(s),n[4](null),_=!1,o(C)}}}function $t(t,n,e){let o,r="",s="";k(()=>o.focus());return[r,s,o,()=>{let t=new FormData;t.append("username",r),t.append("password",s),fetch(api+"/index.php/login/cek",{method:"post",body:t}).then(t=>t.json()).then(t=>{"salah"==t?(e(0,r=""),e(1,s=""),o.focus()):(localStorage.setItem("token",t),st("/"))})},function(t){C[t?"unshift":"push"](()=>{o=t,e(2,o)})},function(){r=this.value,e(0,r)},function(){s=this.value,e(1,s)}]}function bt(n){let e,r,s,i,u,p,h,b,w,y;return{c(){e=f("form"),r=f("div"),s=f("input"),i=d(),u=f("div"),p=f("textarea"),h=d(),b=f("div"),b.innerHTML='<input type="submit" class="btn btn-success float-right" value="✔" name=""/>',$(s,"type","search"),$(s,"class","form-control"),s.required=!0,$(s,"placeholder","Judul"),$(s,"name",""),$(r,"class","form-group"),$(p,"class","form-control"),$(p,"placeholder","Isi. Menggunakan Markdown"),$(u,"class","form-group"),$(b,"class","form-group")},m(t,o){a(t,e,o),c(e,r),c(r,s),n[5](s),v(s,n[2]),c(e,i),c(e,u),c(u,p),n[7](p),v(p,n[3]),c(e,h),c(e,b),w||(y=[m(s,"input",n[6]),m(p,"input",n[8]),m(e,"submit",g(n[4]))],w=!0)},p(t,[n]){4&n&&v(s,t[2]),8&n&&v(p,t[3])},i:t,o:t,d(t){t&&l(e),n[5](null),n[7](null),w=!1,o(y)}}}function vt(t,n,e){let o,r,s="",i="";return k(()=>{o.focus();const t=()=>e(1,r.style.height=window.innerHeight-200+"px",r);window.addEventListener("resize",t),t()}),[o,r,s,i,()=>{let t=new FormData;t.append("judul",s),t.append("isi",i),fetch(`${api}/index.php/admin/${localStorage.token}/tulis`,{method:"post",body:t}).then(t=>t.json()).then(t=>st("/"+t))},function(t){C[t?"unshift":"push"](()=>{o=t,e(0,o)})},function(){s=this.value,e(2,s)},function(t){C[t?"unshift":"push"](()=>{r=t,e(1,r)})},function(){i=this.value,e(3,i)}]}function wt(n){let e,o,r,s;return{c(){e=f("a"),e.textContent="☘",$(e,"href","/login"),$(e,"class","btn btn-info")},m(t,n){a(t,e,n),r||(s=u(o=it.call(null,e)),r=!0)},p:t,d(t){t&&l(e),r=!1,s()}}}function yt(t){let n,e,r,s,i,h,g,b;return{c(){n=f("button"),n.textContent="✗",e=d(),r=f("a"),s=p("✐"),$(n,"class","btn btn-danger"),$(r,"href",i="/"+t[0].slug+"/edit"),$(r,"class","btn btn-info")},m(o,i){a(o,n,i),a(o,e,i),a(o,r,i),c(r,s),g||(b=[m(n,"click",t[3]),u(h=it.call(null,r))],g=!0)},p(t,n){1&n&&i!==(i="/"+t[0].slug+"/edit")&&$(r,"href",i)},d(t){t&&l(n),t&&l(e),t&&l(r),g=!1,o(b)}}}function xt(n){let e,o,r,s,i,u,h=n[2].judul+"",m=n[2].isi+"";function g(t,n){return 1==t[1]?yt:wt}let v=g(n),w=v(n);return{c(){e=f("h1"),o=p(h),r=d(),s=f("div"),i=d(),u=f("div"),w.c(),$(s,"class","jarak-bawah"),$(u,"class","bawah")},m(t,n){a(t,e,n),c(e,o),a(t,r,n),a(t,s,n),s.innerHTML=m,a(t,i,n),a(t,u,n),w.m(u,null)},p(t,[n]){4&n&&h!==(h=t[2].judul+"")&&b(o,h),4&n&&m!==(m=t[2].isi+"")&&(s.innerHTML=m),v===(v=g(t))&&w?w.p(t,n):(w.d(1),w=v(t),w&&(w.c(),w.m(u,null)))},i:t,o:t,d(t){t&&l(e),t&&l(r),t&&l(s),t&&l(i),t&&l(u),w.d()}}}function kt(t,n,e){let{params:o={}}=n,r=!1,s={judul:"",isi:""};k(()=>{localStorage.token&&e(1,r=!0),fetch(`${api}/index.php/postingan/detail/${o.slug}`).then(t=>t.json()).then(t=>e(2,s=t))});return t.$$set=t=>{"params"in t&&e(0,o=t.params)},[o,r,s,()=>{confirm("Hapus kah?")&&fetch(`${api}/index.php/admin/${localStorage.token}/hapus/${o.slug}`).then(st("/"))}]}function Et(n){let e,r,s,i,u,p,h,b,w,y;return{c(){e=f("form"),r=f("div"),s=f("input"),i=d(),u=f("div"),p=f("textarea"),h=d(),b=f("div"),b.innerHTML='<input type="submit" class="btn btn-success float-right" value="✔" name=""/>',$(s,"type","search"),$(s,"class","form-control"),s.required=!0,$(s,"placeholder","Judul"),$(s,"name",""),$(r,"class","form-group"),$(p,"class","form-control"),$(p,"placeholder","Isi. Menggunakan Markdown"),$(u,"class","form-group"),$(b,"class","form-group")},m(t,o){a(t,e,o),c(e,r),c(r,s),n[5](s),v(s,n[2].judul),c(e,i),c(e,u),c(u,p),n[7](p),v(p,n[2].markdown),c(e,h),c(e,b),w||(y=[m(s,"input",n[6]),m(p,"input",n[8]),m(e,"submit",g(n[3]))],w=!0)},p(t,[n]){4&n&&v(s,t[2].judul),4&n&&v(p,t[2].markdown)},i:t,o:t,d(t){t&&l(e),n[5](null),n[7](null),w=!1,o(y)}}}function jt(t,n,e){let o,r,s={judul:"",markdown:""},{params:i={}}=n;k(()=>{o.focus(),fetch(`${api}/index.php/postingan/detail/${i.slug}`).then(t=>t.json()).then(t=>e(2,s=t));const t=()=>e(1,r.style.height=window.innerHeight-200+"px",r);window.addEventListener("resize",t),t()});return t.$$set=t=>{"params"in t&&e(4,i=t.params)},[o,r,s,()=>{let t=new FormData;t.append("judul",s.judul),t.append("isi",s.markdown),fetch(`${api}/index.php/admin/${localStorage.token}/update/${i.slug}`,{method:"post",body:t}).then(st("/"+i.slug))},i,function(t){C[t?"unshift":"push"](()=>{o=t,e(0,o)})},function(){s.judul=this.value,e(2,s)},function(t){C[t?"unshift":"push"](()=>{r=t,e(1,r)})},function(){s.markdown=this.value,e(2,s)}]}function _t(n){let e;return{c(){e=f("p"),e.textContent="Halaman cari"},m(t,n){a(t,e,n)},p:t,i:t,o:t,d(t){t&&l(e)}}}let Ct={"/":class extends K{constructor(t){super(),G(this,t,mt,ht,s,{})}},"/login":class extends K{constructor(t){super(),G(this,t,$t,gt,s,{})}},"/tulis":class extends K{constructor(t){super(),G(this,t,vt,bt,s,{})}},"/cari/:cari?":class extends K{constructor(t){super(),G(this,t,null,_t,s,{})}},"/:slug":class extends K{constructor(t){super(),G(this,t,kt,xt,s,{params:0})}},"/:slug/edit":class extends K{constructor(t){super(),G(this,t,jt,Et,s,{params:4})}}};function Lt(n){let e,o,r,s,i,p,h,m,g,b,v,w;return g=new at({props:{routes:Ct}}),g.$on("routeLoaded",n[0]),{c(){e=f("link"),o=f("script"),o.textContent="api = 'https://mzaini30.nasihosting.com/blogzen'",r=d(),s=f("div"),i=f("a"),i.textContent="Blog Zen",h=d(),m=f("div"),U(g.$$.fragment),$(e,"rel","stylesheet"),$(e,"type","text/css"),$(e,"href","bootstrap.min.css"),$(o,"type","text/javascript"),$(i,"href","/"),$(i,"class","navbar-brand"),$(s,"class","navbar fixed-top navbar-expand-lg navbar-light bg-light"),$(m,"class","container svelte-12xfa41")},m(t,n){c(document.head,e),c(document.head,o),a(t,r,n),a(t,s,n),c(s,i),a(t,h,n),a(t,m,n),W(g,m,null),b=!0,v||(w=u(p=it.call(null,i)),v=!0)},p:t,i(t){b||(J(g.$$.fragment,t),b=!0)},o(t){P(g.$$.fragment,t),b=!1},d(t){l(e),l(o),t&&l(r),t&&l(s),t&&l(h),t&&l(m),Z(g),v=!1,w()}}}function At(t){return[()=>window.scrollTo(0,0)]}return new class extends K{constructor(t){super(),G(this,t,At,Lt,s,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
