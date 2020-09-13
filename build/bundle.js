var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(n,...e){if(null==n)return t;const r=n.subscribe(...e);return r.unsubscribe?()=>r.unsubscribe():r}function u(n){return n&&o(n.destroy)?n.destroy:t}function c(t,n){t.appendChild(n)}function a(t,n,e){t.insertBefore(n,e||null)}function l(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function d(){return p(" ")}function h(){return p("")}function m(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function g(t){return function(n){return n.preventDefault(),t.call(this,n)}}function $(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function b(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function v(t,n){t.value=null==n?"":n}function y(t,n,e,r){t.style.setProperty(n,e,r?"important":"")}let x;function w(t){x=t}function k(){if(!x)throw new Error("Function called outside component initialization");return x}function E(t){k().$$.on_mount.push(t)}function _(){const t=k();return(n,e)=>{const r=t.$$.callbacks[n];if(r){const o=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);r.slice().forEach(n=>{n.call(t,o)})}}}function j(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(t=>t(n))}const C=[],L=[],A=[],M=[],O=Promise.resolve();let q=!1;function H(){q||(q=!0,O.then(S))}function T(){return H(),O}function I(t){A.push(t)}let N=!1;const D=new Set;function S(){if(!N){N=!0;do{for(let t=0;t<C.length;t+=1){const n=C[t];w(n),R(n.$$)}for(w(null),C.length=0;L.length;)L.pop()();for(let t=0;t<A.length;t+=1){const n=A[t];D.has(n)||(D.add(n),n())}A.length=0}while(C.length);for(;M.length;)M.pop()();q=!1,N=!1,D.clear()}}function R(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(I)}}const F=new Set;let P;function z(){P={r:0,c:[],p:P}}function B(){P.r||r(P.c),P=P.p}function J(t,n){t&&t.i&&(F.delete(t),t.i(n))}function U(t,n,e,r){if(t&&t.o){if(F.has(t))return;F.add(t),P.c.push(()=>{F.delete(t),r&&(e&&t.d(1),r())}),t.o(n)}}function W(t){t&&t.c()}function Z(t,e,s){const{fragment:i,on_mount:u,on_destroy:c,after_update:a}=t.$$;i&&i.m(e,s),I(()=>{const e=u.map(n).filter(o);c?c.push(...e):r(e),t.$$.on_mount=[]}),a.forEach(I)}function G(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function K(n,o,s,i,u,c,a=[-1]){const f=x;w(n);const p=o.props||{},d=n.$$={fragment:null,ctx:null,props:c,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:e(),dirty:a,skip_bound:!1};let h=!1;if(d.ctx=s?s(n,p,(t,e,...r)=>{const o=r.length?r[0]:e;return d.ctx&&u(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),h&&function(t,n){-1===t.$$.dirty[0]&&(C.push(t),H(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e}):[],d.update(),h=!0,r(d.before_update),d.fragment=!!i&&i(d.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);d.fragment&&d.fragment.l(t),t.forEach(l)}else d.fragment&&d.fragment.c();o.intro&&J(n.$$.fragment),Z(n,o.target,o.anchor),S()}w(f)}class Q{$destroy(){G(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const V=[];function X(t,n){return{subscribe:Y(t,n).subscribe}}function Y(n,e=t){let r;const o=[];function i(t){if(s(n,t)&&(n=t,r)){const t=!V.length;for(let t=0;t<o.length;t+=1){const e=o[t];e[1](),V.push(e,n)}if(t){for(let t=0;t<V.length;t+=2)V[t][0](V[t+1]);V.length=0}}}return{set:i,update:function(t){i(t(n))},subscribe:function(s,u=t){const c=[s,u];return o.push(c),1===o.length&&(r=e(i)||t),s(n),()=>{const t=o.indexOf(c);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}function tt(n,e,s){const u=!Array.isArray(n),c=u?[n]:n,a=e.length<2;return X(s,n=>{let s=!1;const l=[];let f=0,p=t;const d=()=>{if(f)return;p();const r=e(u?l[0]:l,n);a?n(r):p=o(r)?r:t},h=c.map((t,n)=>i(t,t=>{l[n]=t,f&=~(1<<n),s&&d()},()=>{f|=1<<n}));return s=!0,d(),function(){r(h),p()}})}function nt(t){let n,e,r;var o=t[0];return o&&(n=new o({}),n.$on("routeEvent",t[5])),{c(){n&&W(n.$$.fragment),e=h()},m(t,o){n&&Z(n,t,o),a(t,e,o),r=!0},p(t,r){if(o!==(o=t[0])){if(n){z();const t=n;U(t.$$.fragment,1,0,()=>{G(t,1)}),B()}o?(n=new o({}),n.$on("routeEvent",t[5]),W(n.$$.fragment),J(n.$$.fragment,1),Z(n,e.parentNode,e)):n=null}},i(t){r||(n&&J(n.$$.fragment,t),r=!0)},o(t){n&&U(n.$$.fragment,t),r=!1},d(t){t&&l(e),n&&G(n,t)}}}function et(t){let n,e,r;var o=t[0];function s(t){return{props:{params:t[1]}}}return o&&(n=new o(s(t)),n.$on("routeEvent",t[4])),{c(){n&&W(n.$$.fragment),e=h()},m(t,o){n&&Z(n,t,o),a(t,e,o),r=!0},p(t,r){const i={};if(2&r&&(i.params=t[1]),o!==(o=t[0])){if(n){z();const t=n;U(t.$$.fragment,1,0,()=>{G(t,1)}),B()}o?(n=new o(s(t)),n.$on("routeEvent",t[4]),W(n.$$.fragment),J(n.$$.fragment,1),Z(n,e.parentNode,e)):n=null}else o&&n.$set(i)},i(t){r||(n&&J(n.$$.fragment,t),r=!0)},o(t){n&&U(n.$$.fragment,t),r=!1},d(t){t&&l(e),n&&G(n,t)}}}function rt(t){let n,e,r,o;const s=[et,nt],i=[];function u(t,n){return t[1]?0:1}return n=u(t),e=i[n]=s[n](t),{c(){e.c(),r=h()},m(t,e){i[n].m(t,e),a(t,r,e),o=!0},p(t,[o]){let c=n;n=u(t),n===c?i[n].p(t,o):(z(),U(i[c],1,1,()=>{i[c]=null}),B(),e=i[n],e||(e=i[n]=s[n](t),e.c()),J(e,1),e.m(r.parentNode,r))},i(t){o||(J(e),o=!0)},o(t){U(e),o=!1},d(t){i[n].d(t),t&&l(r)}}}function ot(){const t=window.location.href.indexOf("#/");let n=t>-1?window.location.href.substr(t+1):"/";const e=n.indexOf("?");let r="";return e>-1&&(r=n.substr(e+1),n=n.substr(0,e)),{location:n,querystring:r}}const st=X(null,(function(t){t(ot());const n=()=>{t(ot())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}}));tt(st,t=>t.location),tt(st,t=>t.querystring);function it(t){if(!t||t.length<1||"/"!=t.charAt(0)&&0!==t.indexOf("#/"))throw Error("Invalid parameter location");return T().then(()=>{window.location.hash=("#"==t.charAt(0)?"":"#")+t})}function ut(t,n){if(!t||!t.tagName||"a"!=t.tagName.toLowerCase())throw Error('Action "link" can only be used with <a> tags');return ct(t,n||t.getAttribute("href")),{update(n){ct(t,n)}}}function ct(t,n){if(!n||n.length<1||"/"!=n.charAt(0))throw Error('Invalid value for "href" attribute');t.setAttribute("href","#"+n)}function at(n,e,r){let o,s=t;!function(t,n,e){t.$$.on_destroy.push(i(n,e))}(n,st,t=>r(6,o=t)),n.$$.on_destroy.push(()=>s());let{routes:u={}}=e,{prefix:c=""}=e;class a{constructor(t,n){if(!n||"function"!=typeof n&&("object"!=typeof n||!0!==n._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument');const{pattern:e,keys:r}=function(t,n){if(t instanceof RegExp)return{keys:!1,pattern:t};var e,r,o,s,i=[],u="",c=t.split("/");for(c[0]||c.shift();o=c.shift();)"*"===(e=o[0])?(i.push("wild"),u+="/(.*)"):":"===e?(r=o.indexOf("?",1),s=o.indexOf(".",1),i.push(o.substring(1,~r?r:~s?s:o.length)),u+=~r&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(u+=(~r?"?":"")+"\\"+o.substring(s))):u+="/"+o;return{keys:i,pattern:new RegExp("^"+u+(n?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof n&&!0===n._sveltesparouter?(this.component=n.route,this.conditions=n.conditions||[],this.userData=n.userData):(this.component=n,this.conditions=[],this.userData=void 0),this._pattern=e,this._keys=r}match(t){c&&t.startsWith(c)&&(t=t.substr(c.length)||"/");const n=this._pattern.exec(t);if(null===n)return null;if(!1===this._keys)return n;const e={};let r=0;for(;r<this._keys.length;)e[this._keys[r]]=n[++r]||null;return e}checkConditions(t){for(let n=0;n<this.conditions.length;n++)if(!this.conditions[n](t))return!1;return!0}}const l=[];u instanceof Map?u.forEach((t,n)=>{l.push(new a(n,t))}):Object.keys(u).forEach(t=>{l.push(new a(t,u[t]))});let f=null,p=null;const d=_(),h=(t,n)=>{T().then(()=>{d(t,n)})};return n.$$set=t=>{"routes"in t&&r(2,u=t.routes),"prefix"in t&&r(3,c=t.prefix)},n.$$.update=()=>{if(65&n.$$.dirty){r(0,f=null);let t=0;for(;!f&&t<l.length;){const n=l[t].match(o.location);if(n){const e={component:l[t].component,name:l[t].component.name,location:o.location,querystring:o.querystring,userData:l[t].userData};if(!l[t].checkConditions(e)){h("conditionsFailed",e);break}r(0,f=l[t].component),n&&"object"==typeof n&&Object.keys(n).length?r(1,p=n):r(1,p=null),h("routeLoaded",e)}t++}}},[f,p,u,c,function(t){j(n,t)},function(t){j(n,t)}]}class lt extends Q{constructor(t){super(),K(this,t,at,rt,s,{routes:2,prefix:3})}}function ft(t,n,e){const r=t.slice();return r[5]=n[e],r}function pt(t){let n,e,r,o,s,i,d=t[5].judul+"";return{c(){n=f("a"),e=p(d),$(n,"href",r="/"+t[5].slug),$(n,"class","list-group-item list-group-item-action")},m(t,r){a(t,n,r),c(n,e),s||(i=u(o=ut.call(null,n)),s=!0)},p(t,o){4&o&&d!==(d=t[5].judul+"")&&b(e,d),4&o&&r!==(r="/"+t[5].slug)&&$(n,"href",r)},d(t){t&&l(n),s=!1,i()}}}function dt(t){let n,e,r,o,s,i;return{c(){n=f("button"),n.textContent="☣",e=d(),r=f("a"),r.textContent="✎",$(n,"class","btn btn-danger"),$(r,"href","/tulis"),$(r,"class","btn btn-info")},m(t,c){a(t,n,c),a(t,e,c),a(t,r,c),s||(i=u(o=ut.call(null,r)),s=!0)},d(t){t&&l(n),t&&l(e),t&&l(r),s=!1,i()}}}function ht(t){let n,e,r,o;return{c(){n=f("a"),n.textContent="☘",$(n,"href","/login"),$(n,"class","btn btn-info")},m(t,s){a(t,n,s),r||(o=u(e=ut.call(null,n)),r=!0)},d(t){t&&l(n),r=!1,o()}}}function mt(n){let e,o,s,i,u,p,h,b,y,x=n[2],w=[];for(let t=0;t<x.length;t+=1)w[t]=pt(ft(n,x,t));function k(t,n){return 0==t[0]?ht:dt}let E=k(n),_=E(n);return{c(){e=f("form"),o=f("div"),s=f("input"),i=d(),u=f("div");for(let t=0;t<w.length;t+=1)w[t].c();p=d(),h=f("div"),_.c(),$(s,"type","search"),$(s,"class","form-control"),$(s,"placeholder","Cari apa?"),s.required=!0,$(s,"name",""),$(o,"class","form-group"),$(u,"class","list-group jarak-bawah"),$(h,"class","bawah")},m(t,r){a(t,e,r),c(e,o),c(o,s),v(s,n[1]),a(t,i,r),a(t,u,r);for(let t=0;t<w.length;t+=1)w[t].m(u,null);a(t,p,r),a(t,h,r),_.m(h,null),b||(y=[m(s,"input",n[4]),m(e,"submit",g(n[3]))],b=!0)},p(t,[n]){if(2&n&&v(s,t[1]),4&n){let e;for(x=t[2],e=0;e<x.length;e+=1){const r=ft(t,x,e);w[e]?w[e].p(r,n):(w[e]=pt(r),w[e].c(),w[e].m(u,null))}for(;e<w.length;e+=1)w[e].d(1);w.length=x.length}E!==(E=k(t))&&(_.d(1),_=E(t),_&&(_.c(),_.m(h,null)))},i:t,o:t,d(t){t&&l(e),t&&l(i),t&&l(u),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(w,t),t&&l(p),t&&l(h),_.d(),b=!1,r(y)}}}function gt(t,n,e){let r=!1,o="",s=[];E(()=>{localStorage.token&&e(0,r=!0),fetch(api+"/index.php/postingan/semua").then(t=>t.json()).then(t=>e(2,s=t))});return[r,o,s,()=>it("/cari/"+encodeURIComponent(o)),function(){o=this.value,e(1,o)}]}function $t(n){let e,o,s,i,u,p,h,b,y,x,w,k,E,_,j,C;return{c(){e=f("h3"),e.textContent="Login",o=d(),s=f("form"),i=f("div"),u=f("label"),u.textContent="Username",p=d(),h=f("input"),b=d(),y=f("div"),x=f("label"),x.textContent="Password",w=d(),k=f("input"),E=d(),_=f("div"),_.innerHTML='<input type="submit" name="" class="btn btn-success" value="✔"/>',$(u,"for","username"),$(h,"type","search"),$(h,"id","username"),$(h,"class","form-control"),h.required=!0,$(h,"name",""),$(i,"class","form-group"),$(x,"for","password"),$(k,"type","password"),$(k,"id","password"),$(k,"class","form-control"),k.required=!0,$(k,"name",""),$(y,"class","form-group"),$(_,"class","bawah")},m(t,r){a(t,e,r),a(t,o,r),a(t,s,r),c(s,i),c(i,u),c(i,p),c(i,h),n[4](h),v(h,n[0]),c(s,b),c(s,y),c(y,x),c(y,w),c(y,k),v(k,n[1]),c(s,E),c(s,_),j||(C=[m(h,"input",n[5]),m(k,"input",n[6]),m(s,"submit",g(n[3]))],j=!0)},p(t,[n]){1&n&&v(h,t[0]),2&n&&k.value!==t[1]&&v(k,t[1])},i:t,o:t,d(t){t&&l(e),t&&l(o),t&&l(s),n[4](null),j=!1,r(C)}}}function bt(t,n,e){let r,o="",s="";E(()=>r.focus());return[o,s,r,()=>{let t=new FormData;t.append("username",o),t.append("password",s),fetch(api+"/index.php/login/cek",{method:"post",body:t}).then(t=>t.json()).then(t=>{"salah"==t?(e(0,o=""),e(1,s="")):(localStorage.setItem("token",t),it("/"))})},function(t){L[t?"unshift":"push"](()=>{r=t,e(2,r)})},function(){o=this.value,e(0,o)},function(){s=this.value,e(1,s)}]}function vt(n){let e,r,o,s,i,u,p;return{c(){e=f("form"),r=f("div"),r.innerHTML='<input type="search" class="form-control" required="" placeholder="Judul" name=""/>',o=d(),s=f("div"),i=f("textarea"),u=d(),p=f("div"),p.innerHTML='<input type="submit" class="btn btn-success float-right" value="✔" name=""/>',$(r,"class","form-group"),y(i,"height",n[0]+"px"),$(i,"class","form-control"),$(i,"placeholder","Isi. Menggunakan Markdown"),$(s,"class","form-group"),$(p,"class","form-group")},m(t,n){a(t,e,n),c(e,r),c(e,o),c(e,s),c(s,i),c(e,u),c(e,p)},p:t,i:t,o:t,d(t){t&&l(e)}}}function yt(t){return[window.innerHeight-200]}function xt(n){let e,r,o,s;return{c(){e=f("a"),e.textContent="☘",$(e,"href","/login"),$(e,"class","btn btn-info")},m(t,n){a(t,e,n),o||(s=u(r=ut.call(null,e)),o=!0)},p:t,d(t){t&&l(e),o=!1,s()}}}function wt(t){let n,e,r,o,s,i,h,m;return{c(){n=f("button"),n.textContent="✗",e=d(),r=f("a"),o=p("✐"),$(n,"class","btn btn-danger"),$(r,"href",s="/"+t[0].slug+"/edit"),$(r,"class","btn btn-info")},m(t,s){a(t,n,s),a(t,e,s),a(t,r,s),c(r,o),h||(m=u(i=ut.call(null,r)),h=!0)},p(t,n){1&n&&s!==(s="/"+t[0].slug+"/edit")&&$(r,"href",s)},d(t){t&&l(n),t&&l(e),t&&l(r),h=!1,m()}}}function kt(n){let e,r,o,s,i,u,h=n[2].judul+"",m=n[2].isi+"";function g(t,n){return 1==t[1]?wt:xt}let v=g(n),y=v(n);return{c(){e=f("h1"),r=p(h),o=d(),s=f("div"),i=d(),u=f("div"),y.c(),$(s,"class","jarak-bawah"),$(u,"class","bawah")},m(t,n){a(t,e,n),c(e,r),a(t,o,n),a(t,s,n),s.innerHTML=m,a(t,i,n),a(t,u,n),y.m(u,null)},p(t,[n]){4&n&&h!==(h=t[2].judul+"")&&b(r,h),4&n&&m!==(m=t[2].isi+"")&&(s.innerHTML=m),v===(v=g(t))&&y?y.p(t,n):(y.d(1),y=v(t),y&&(y.c(),y.m(u,null)))},i:t,o:t,d(t){t&&l(e),t&&l(o),t&&l(s),t&&l(i),t&&l(u),y.d()}}}function Et(t,n,e){let{params:r={}}=n,o=!1,s={judul:"",isi:""};return E(()=>{localStorage.token&&e(1,o=!0),fetch(`${api}/index.php/postingan/detail/${r.slug}`).then(t=>t.json()).then(t=>e(2,s=t))}),t.$$set=t=>{"params"in t&&e(0,r=t.params)},[r,o,s]}function _t(n){let e,r,o,s,i,u,p;return{c(){e=f("form"),r=f("div"),r.innerHTML='<input type="search" class="form-control" required="" placeholder="Judul" name=""/>',o=d(),s=f("div"),i=f("textarea"),u=d(),p=f("div"),p.innerHTML='<input type="submit" class="btn btn-success float-right" value="✔" name=""/>',$(r,"class","form-group"),y(i,"height",n[0]+"px"),$(i,"class","form-control"),$(i,"placeholder","Isi. Menggunakan Markdown"),$(s,"class","form-group"),$(p,"class","form-group")},m(t,n){a(t,e,n),c(e,r),c(e,o),c(e,s),c(s,i),c(e,u),c(e,p)},p:t,i:t,o:t,d(t){t&&l(e)}}}function jt(t){return[window.innerHeight-200]}function Ct(n){let e;return{c(){e=f("p"),e.textContent="Halaman cari"},m(t,n){a(t,e,n)},p:t,i:t,o:t,d(t){t&&l(e)}}}let Lt={"/":class extends Q{constructor(t){super(),K(this,t,gt,mt,s,{})}},"/login":class extends Q{constructor(t){super(),K(this,t,bt,$t,s,{})}},"/tulis":class extends Q{constructor(t){super(),K(this,t,yt,vt,s,{})}},"/cari/:cari?":class extends Q{constructor(t){super(),K(this,t,null,Ct,s,{})}},"/:slug":class extends Q{constructor(t){super(),K(this,t,Et,kt,s,{params:0})}},"/:slug/edit":class extends Q{constructor(t){super(),K(this,t,jt,_t,s,{})}}};function At(n){let e,r,o,s,i,p,h,m,g,b,v,y;return g=new lt({props:{routes:Lt}}),g.$on("routeLoaded",n[0]),{c(){e=f("link"),r=f("script"),r.textContent="api = 'http://localhost/blogzen'",o=d(),s=f("div"),i=f("a"),i.textContent="Blog Zen",h=d(),m=f("div"),W(g.$$.fragment),$(e,"rel","stylesheet"),$(e,"type","text/css"),$(e,"href","bootstrap.min.css"),$(r,"type","text/javascript"),$(i,"href","/"),$(i,"class","navbar-brand"),$(s,"class","navbar fixed-top navbar-expand-lg navbar-light bg-light"),$(m,"class","container svelte-12xfa41")},m(t,n){c(document.head,e),c(document.head,r),a(t,o,n),a(t,s,n),c(s,i),a(t,h,n),a(t,m,n),Z(g,m,null),b=!0,v||(y=u(p=ut.call(null,i)),v=!0)},p:t,i(t){b||(J(g.$$.fragment,t),b=!0)},o(t){U(g.$$.fragment,t),b=!1},d(t){l(e),l(r),t&&l(o),t&&l(s),t&&l(h),t&&l(m),G(g),v=!1,y()}}}function Mt(t){return[()=>window.scrollTo(0,0)]}return new class extends Q{constructor(t){super(),K(this,t,Mt,At,s,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
