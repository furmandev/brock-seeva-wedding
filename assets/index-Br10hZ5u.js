(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const Ve=(e,t)=>e===t,oe=Symbol("solid-proxy"),V={equals:Ve};let Ge=Oe;const j=1,G=2,we={owned:null,cleanups:null,context:null,owner:null};var p=null;let ee=null,He=null,w=null,x=null,B=null,J=0;function be(e,t){const n=w,r=p,o=e.length===0,s=t===void 0?r:t,l=o?we:{owned:null,cleanups:null,context:s?s.context:null,owner:s},i=o?e:()=>e(()=>R(()=>Y(l)));p=l,w=null;try{return k(i,!0)}finally{w=n,p=r}}function I(e,t){t=t?Object.assign({},V,t):V;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=o=>(typeof o=="function"&&(o=o(n.value)),Le(n,o));return[Pe.bind(n),r]}function q(e,t,n){const r=Re(e,t,!1,j);Q(r)}function S(e,t,n){n=n?Object.assign({},V,n):V;const r=Re(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,Q(r),Pe.bind(r)}function R(e){if(w===null)return e();const t=w;w=null;try{return e()}finally{w=t}}function ve(e,t,n){const r=Array.isArray(e);let o;return s=>{let l;if(r){l=Array(e.length);for(let a=0;a<e.length;a++)l[a]=e[a]()}else l=e();const i=R(()=>t(l,o,s));return o=l,i}}function Ae(e){return p===null||(p.cleanups===null?p.cleanups=[e]:p.cleanups.push(e)),e}function Se(){return p}function xe(e,t){const n=p,r=w;p=e,w=null;try{return k(t,!0)}catch(o){ue(o)}finally{p=n,w=r}}function Xe(e){const t=w,n=p;return Promise.resolve().then(()=>{w=t,p=n;let r;return k(e,!1),w=p=null,r?r.done:void 0})}function Ee(e,t){const n=Symbol("context");return{id:n,Provider:ze(n),defaultValue:e}}function Je(e){return p&&p.context&&p.context[e.id]!==void 0?p.context[e.id]:e.defaultValue}function ae(e){const t=S(e),n=S(()=>se(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}function Pe(){if(this.sources&&this.state)if(this.state===j)Q(this);else{const e=x;x=null,k(()=>H(this),!1),x=e}if(w){const e=this.observers?this.observers.length:0;w.sources?(w.sources.push(this),w.sourceSlots.push(e)):(w.sources=[this],w.sourceSlots=[e]),this.observers?(this.observers.push(w),this.observerSlots.push(w.sources.length-1)):(this.observers=[w],this.observerSlots=[w.sources.length-1])}return this.value}function Le(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&k(()=>{for(let o=0;o<e.observers.length;o+=1){const s=e.observers[o],l=ee&&ee.running;l&&ee.disposed.has(s),(l?!s.tState:!s.state)&&(s.pure?x.push(s):B.push(s),s.observers&&Te(s)),l||(s.state=j)}if(x.length>1e6)throw x=[],new Error},!1)),t}function Q(e){if(!e.fn)return;Y(e);const t=J;Qe(e,e.value,t)}function Qe(e,t,n){let r;const o=p,s=w;w=p=e;try{r=e.fn(t)}catch(l){return e.pure&&(e.state=j,e.owned&&e.owned.forEach(Y),e.owned=null),e.updatedAt=n+1,ue(l)}finally{w=s,p=o}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Le(e,r):e.value=r,e.updatedAt=n)}function Re(e,t,n,r=j,o){const s={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:p,context:p?p.context:null,pure:n};return p===null||p!==we&&(p.owned?p.owned.push(s):p.owned=[s]),s}function Ce(e){if(e.state===0)return;if(e.state===G)return H(e);if(e.suspense&&R(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<J);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===j)Q(e);else if(e.state===G){const r=x;x=null,k(()=>H(e,t[0]),!1),x=r}}function k(e,t){if(x)return e();let n=!1;t||(x=[]),B?n=!0:B=[],J++;try{const r=e();return Ye(n),r}catch(r){n||(B=null),x=null,ue(r)}}function Ye(e){if(x&&(Oe(x),x=null),e)return;const t=B;B=null,t.length&&k(()=>Ge(t),!1)}function Oe(e){for(let t=0;t<e.length;t++)Ce(e[t])}function H(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const o=r.state;o===j?r!==t&&(!r.updatedAt||r.updatedAt<J)&&Ce(r):o===G&&H(r,t)}}}function Te(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=G,n.pure?x.push(n):B.push(n),n.observers&&Te(n))}}function Y(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const s=o.pop(),l=n.observerSlots.pop();r<o.length&&(s.sourceSlots[l]=r,o[r]=s,n.observerSlots[r]=l)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)Y(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Ze(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function ue(e,t=p){throw Ze(e)}function se(e){if(typeof e=="function"&&!e.length)return se(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=se(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function ze(e,t){return function(r){let o;return q(()=>o=R(()=>(p.context={...p.context,[e]:r.value},ae(()=>r.children))),void 0),o}}let et=!1;function L(e,t){return R(()=>e(t||{}))}function W(){return!0}const tt={get(e,t,n){return t===oe?n:e.get(t)},has(e,t){return t===oe?!0:e.has(t)},set:W,deleteProperty:W,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:W,deleteProperty:W}},ownKeys(e){return e.keys()}};function te(e){return(e=typeof e=="function"?e():e)?e:{}}function nt(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function rt(...e){let t=!1;for(let l=0;l<e.length;l++){const i=e[l];t=t||!!i&&oe in i,e[l]=typeof i=="function"?(t=!0,S(i)):i}if(t)return new Proxy({get(l){for(let i=e.length-1;i>=0;i--){const a=te(e[i])[l];if(a!==void 0)return a}},has(l){for(let i=e.length-1;i>=0;i--)if(l in te(e[i]))return!0;return!1},keys(){const l=[];for(let i=0;i<e.length;i++)l.push(...Object.keys(te(e[i])));return[...new Set(l)]}},tt);const n={},r=Object.create(null);for(let l=e.length-1;l>=0;l--){const i=e[l];if(!i)continue;const a=Object.getOwnPropertyNames(i);for(let u=a.length-1;u>=0;u--){const c=a[u];if(c==="__proto__"||c==="constructor")continue;const d=Object.getOwnPropertyDescriptor(i,c);if(!r[c])r[c]=d.get?{enumerable:!0,configurable:!0,get:nt.bind(n[c]=[d.get.bind(i)])}:d.value!==void 0?d:void 0;else{const g=n[c];g&&(d.get?g.push(d.get.bind(i)):d.value!==void 0&&g.push(()=>d.value))}}}const o={},s=Object.keys(r);for(let l=s.length-1;l>=0;l--){const i=s[l],a=r[i];a&&a.get?Object.defineProperty(o,i,a):o[i]=a?a.value:void 0}return o}const ot=e=>`Stale read from <${e}>.`;function $e(e){const t=e.keyed,n=S(()=>e.when,void 0,{equals:(r,o)=>t?r===o:!r==!o});return S(()=>{const r=n();if(r){const o=e.children;return typeof o=="function"&&o.length>0?R(()=>o(t?r:()=>{if(!R(n))throw ot("Show");return e.when})):o}return e.fallback},void 0,void 0)}function st(e,t,n){let r=n.length,o=t.length,s=r,l=0,i=0,a=t[o-1].nextSibling,u=null;for(;l<o||i<s;){if(t[l]===n[i]){l++,i++;continue}for(;t[o-1]===n[s-1];)o--,s--;if(o===l){const c=s<r?i?n[i-1].nextSibling:n[s-i]:a;for(;i<s;)e.insertBefore(n[i++],c)}else if(s===i)for(;l<o;)(!u||!u.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[s-1]&&n[i]===t[o-1]){const c=t[--o].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--s],c),t[o]=n[s]}else{if(!u){u=new Map;let d=i;for(;d<s;)u.set(n[d],d++)}const c=u.get(t[l]);if(c!=null)if(i<c&&c<s){let d=l,g=1,v;for(;++d<o&&d<s&&!((v=u.get(t[d]))==null||v!==c+g);)g++;if(g>c-i){const E=t[l];for(;i<c;)e.insertBefore(n[i++],E)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}}const ge="_$DX_DELEGATE";function it(e,t,n,r={}){let o;return be(s=>{o=s,t===document?e():fe(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{o(),t.textContent=""}}function ce(e,t,n){let r;const o=()=>{const l=document.createElement("template");return l.innerHTML=e,l.content.firstChild},s=()=>(r||(r=o())).cloneNode(!0);return s.cloneNode=s,s}function lt(e,t=window.document){const n=t[ge]||(t[ge]=new Set);for(let r=0,o=e.length;r<o;r++){const s=e[r];n.has(s)||(n.add(s),t.addEventListener(s,at))}}function fe(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return X(e,t,r,n);q(o=>X(e,t(),o,n),r)}function at(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const r=n[t];if(r&&!n.disabled){const o=n[`${t}Data`];if(o!==void 0?r.call(n,o,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function X(e,t,n,r,o){for(;typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,s==="string"||s==="number")if(s==="number"&&(t=t.toString()),l){let i=n[0];i&&i.nodeType===3?i.data!==t&&(i.data=t):i=document.createTextNode(t),n=F(e,n,r,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||s==="boolean")n=F(e,n,r);else{if(s==="function")return q(()=>{let i=t();for(;typeof i=="function";)i=i();n=X(e,i,n,r)}),()=>n;if(Array.isArray(t)){const i=[],a=n&&Array.isArray(n);if(ie(i,t,n,o))return q(()=>n=X(e,i,n,r,!0)),()=>n;if(i.length===0){if(n=F(e,n,r),l)return n}else a?n.length===0?me(e,i,r):st(e,n,i):(n&&F(e),me(e,i));n=i}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=F(e,n,r,t);F(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ie(e,t,n,r){let o=!1;for(let s=0,l=t.length;s<l;s++){let i=t[s],a=n&&n[e.length],u;if(!(i==null||i===!0||i===!1))if((u=typeof i)=="object"&&i.nodeType)e.push(i);else if(Array.isArray(i))o=ie(e,i,a)||o;else if(u==="function")if(r){for(;typeof i=="function";)i=i();o=ie(e,Array.isArray(i)?i:[i],Array.isArray(a)?a:[a])||o}else e.push(i),o=!0;else{const c=String(i);a&&a.nodeType===3&&a.data===c?e.push(a):e.push(document.createTextNode(c))}}return o}function me(e,t,n=null){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function F(e,t,n,r){if(n===void 0)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let s=!1;for(let l=t.length-1;l>=0;l--){const i=t[l];if(o!==i){const a=i.parentNode===e;!s&&!l?a?e.replaceChild(o,i):e.insertBefore(o,n):a&&i.remove()}else s=!0}}else e.insertBefore(o,n);return[o]}const ut=!1;function _e(){let e=new Set;function t(o){return e.add(o),()=>e.delete(o)}let n=!1;function r(o,s){if(n)return!(n=!1);const l={to:o,options:s,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const i of e)i.listener({...l,from:i.location,retry:a=>{a&&(n=!0),i.navigate(o,{...s,resolve:!1})}});return!l.defaultPrevented}return{subscribe:t,confirm:r}}let le;function he(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),le=window.history.state._depth}he();function ct(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function ft(e,t){let n=!1;return()=>{const r=le;he();const o=r==null?null:le-r;if(n){n=!1;return}o&&t(o)?(n=!0,window.history.go(-o)):e()}}const ht=/^(?:[a-z0-9]+:)?\/\//i,dt=/^\/+|(\/)\/+$/g,Be="http://sr";function U(e,t=!1){const n=e.replace(dt,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function M(e,t,n){if(ht.test(t))return;const r=U(e),o=n&&U(n);let s="";return!o||t.startsWith("/")?s=r:o.toLowerCase().indexOf(r.toLowerCase())!==0?s=r+o:s=o,(s||"/")+U(t,!s)}function pt(e,t){return U(e).replace(/\/*(\*.*)?$/g,"")+U(t)}function je(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function gt(e,t,n){const[r,o]=e.split("/*",2),s=r.split("/").filter(Boolean),l=s.length;return i=>{const a=i.split("/").filter(Boolean),u=a.length-l;if(u<0||u>0&&o===void 0&&!t)return null;const c={path:l?"":"/",params:{}},d=g=>n===void 0?void 0:n[g];for(let g=0;g<l;g++){const v=s[g],E=a[g],f=v[0]===":",h=f?v.slice(1):v;if(f&&ne(E,d(h)))c.params[h]=E;else if(f||!ne(E,v))return null;c.path+=`/${E}`}if(o){const g=u?a.slice(-u).join("/"):"";if(ne(g,d(o)))c.params[o]=g;else return null}return c}}function ne(e,t){const n=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function mt(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((o,s)=>o+(s.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function ke(e){const t=new Map,n=Se();return new Proxy({},{get(r,o){return t.has(o)||xe(n,()=>t.set(o,S(()=>e()[o]))),t.get(o)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function De(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const o=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)o.push(n+=t[1]),r=r.slice(t[0].length);return De(r).reduce((s,l)=>[...s,...o.map(i=>i+l)],[])}const yt=100,wt=Ee(),Fe=Ee();function bt(e,t=""){const{component:n,load:r,children:o,info:s}=e,l=!o||Array.isArray(o)&&!o.length,i={key:e,component:n,load:r,info:s};return Ne(e.path).reduce((a,u)=>{for(const c of De(u)){const d=pt(t,c);let g=l?d:d.split("/*",1)[0];g=g.split("/").map(v=>v.startsWith(":")||v.startsWith("*")?v:encodeURIComponent(v)).join("/"),a.push({...i,originalPath:u,pattern:g,matcher:gt(g,!l,e.matchFilters)})}return a},[])}function vt(e,t=0){return{routes:e,score:mt(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let o=e.length-1;o>=0;o--){const s=e[o],l=s.matcher(n);if(!l)return null;r.unshift({...l,route:s})}return r}}}function Ne(e){return Array.isArray(e)?e:[e]}function Ie(e,t="",n=[],r=[]){const o=Ne(e);for(let s=0,l=o.length;s<l;s++){const i=o[s];if(i&&typeof i=="object"){i.hasOwnProperty("path")||(i.path="");const a=bt(i,t);for(const u of a){n.push(u);const c=Array.isArray(i.children)&&i.children.length===0;if(i.children&&!c)Ie(i.children,u.pattern,n,r);else{const d=vt([...n],r.length);r.push(d)}n.pop()}}}return n.length?r:r.sort((s,l)=>l.score-s.score)}function re(e,t){for(let n=0,r=e.length;n<r;n++){const o=e[n].matcher(t);if(o)return o}return[]}function At(e,t){const n=new URL(Be),r=S(a=>{const u=e();try{return new URL(u,n)}catch{return console.error(`Invalid path ${u}`),a}},n,{equals:(a,u)=>a.href===u.href}),o=S(()=>r().pathname),s=S(()=>r().search,!0),l=S(()=>r().hash),i=()=>"";return{get pathname(){return o()},get search(){return s()},get hash(){return l()},get state(){return t()},get key(){return i()},query:ke(ve(s,()=>je(r())))}}let O;function St(){return O}function xt(e,t,n,r={}){const{signal:[o,s],utils:l={}}=e,i=l.parsePath||(y=>y),a=l.renderPath||(y=>y),u=l.beforeLeave||_e(),c=M("",r.base||"");if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!o().value&&s({value:c,replace:!0,scroll:!1});const[d,g]=I(!1),v=async y=>{g(!0);try{await Xe(y)}finally{g(!1)}},[E,f]=I(o().value),[h,b]=I(o().state),m=At(E,h),T=[],C=I([]),_=S(()=>typeof r.transformUrl=="function"?re(t(),r.transformUrl(m.pathname)):re(t(),m.pathname)),K=ke(()=>{const y=_(),A={};for(let P=0;P<y.length;P++)Object.assign(A,y[P].params);return A}),de={pattern:c,path:()=>c,outlet:()=>null,resolvePath(y){return M(c,y)}};return q(()=>{const{value:y,state:A}=o();R(()=>{v(()=>{O="native",y!==E()&&f(y),b(A),C[1]([])}).then(()=>{O=void 0})})}),{base:de,location:m,params:K,isRouting:d,renderPath:a,parsePath:i,navigatorFactory:qe,matches:_,beforeLeave:u,preloadRoute:We,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:C};function Ue(y,A,P){R(()=>{if(typeof A=="number"){A&&(l.go?l.go(A):console.warn("Router integration does not support relative routing"));return}const{replace:Z,resolve:z,scroll:D,state:N}={replace:!1,resolve:!0,scroll:!0,...P},$=z?y.resolvePath(A):M("",A);if($===void 0)throw new Error(`Path '${A}' is not a routable path`);if(T.length>=yt)throw new Error("Too many redirects");const pe=E();if(($!==pe||N!==h())&&!ut){if(u.confirm($,P)){const Me=T.push({value:pe,replace:Z,scroll:D,state:h()});v(()=>{O="navigate",f($),b(N),C[1]([])}).then(()=>{T.length===Me&&(O=void 0,Ke({value:$,state:N}))})}}})}function qe(y){return y=y||Je(Fe)||de,(A,P)=>Ue(y,A,P)}function Ke(y){const A=T[0];A&&((y.value!==A.value||y.state!==A.state)&&s({...y,replace:A.replace,scroll:A.scroll}),T.length=0)}function We(y,A){const P=re(t(),y.pathname),Z=O;O="preload";for(let z in P){const{route:D,params:N}=P[z];D.component&&D.component.preload&&D.component.preload();const{load:$}=D;A&&$&&xe(n(),()=>$({params:N,location:{pathname:y.pathname,search:y.search,hash:y.hash,query:je(y),state:null,key:""},intent:"preload"}))}O=Z}}function Et(e,t,n,r){const{base:o,location:s,params:l}=e,{pattern:i,component:a,load:u}=r().route,c=S(()=>r().path);a&&a.preload&&a.preload();const d=u?u({params:l,location:s,intent:O||"initial"}):void 0;return{parent:t,pattern:i,path:c,outlet:()=>a?L(a,{params:l,location:s,data:d,get children(){return n()}}):n(),resolvePath(v){return M(o.path(),v,c())}}}const Pt=e=>t=>{const{base:n}=t,r=ae(()=>t.children),o=S(()=>Ie(r(),t.base||""));let s;const l=xt(e,o,()=>s,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(l),L(wt.Provider,{value:l,get children(){return L(Lt,{routerState:l,get root(){return t.root},get load(){return t.rootLoad},get children(){return[S(()=>(s=Se())&&null),L(Rt,{routerState:l,get branches(){return o()}})]}})}})};function Lt(e){const t=e.routerState.location,n=e.routerState.params,r=S(()=>e.load&&R(()=>{e.load({params:n,location:t,intent:St()||"initial"})}));return L($e,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:o=>L(o,{params:n,location:t,get data(){return r()},get children(){return e.children}})})}function Rt(e){const t=[];let n;const r=S(ve(e.routerState.matches,(o,s,l)=>{let i=s&&o.length===s.length;const a=[];for(let u=0,c=o.length;u<c;u++){const d=s&&s[u],g=o[u];l&&d&&g.route.key===d.route.key?a[u]=l[u]:(i=!1,t[u]&&t[u](),be(v=>{t[u]=v,a[u]=Et(e.routerState,a[u-1]||e.routerState.base,ye(()=>r()[u+1]),()=>e.routerState.matches()[u])}))}return t.splice(o.length).forEach(u=>u()),l&&i?l:(n=a[0],a)}));return ye(()=>r()&&n)()}const ye=e=>()=>L($e,{get when(){return e()},keyed:!0,children:t=>L(Fe.Provider,{value:t,get children(){return t.outlet()}})}),Ct=e=>{const t=ae(()=>e.children);return rt(e,{get children(){return t()}})};function Ot([e,t],n,r){return[e,r?o=>t(r(o)):t]}function Tt(e){if(e==="#")return null;try{return document.querySelector(e)}catch{return null}}function $t(e){let t=!1;const n=o=>typeof o=="string"?{value:o}:o,r=Ot(I(n(e.get()),{equals:(o,s)=>o.value===s.value&&o.state===s.state}),void 0,o=>(!t&&e.set(o),o));return e.init&&Ae(e.init((o=e.get())=>{t=!0,r[1](n(o)),t=!1})),Pt({signal:r,create:e.create,utils:e.utils})}function _t(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Bt(e,t){const n=Tt(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const jt=new Map;function kt(e=!0,t=!1,n="/_server",r){return o=>{const s=o.base.path(),l=o.navigatorFactory(o.base);let i={};function a(f){return f.namespaceURI==="http://www.w3.org/2000/svg"}function u(f){if(f.defaultPrevented||f.button!==0||f.metaKey||f.altKey||f.ctrlKey||f.shiftKey)return;const h=f.composedPath().find(K=>K instanceof Node&&K.nodeName.toUpperCase()==="A");if(!h||t&&!h.hasAttribute("link"))return;const b=a(h),m=b?h.href.baseVal:h.href;if((b?h.target.baseVal:h.target)||!m&&!h.hasAttribute("state"))return;const C=(h.getAttribute("rel")||"").split(/\s+/);if(h.hasAttribute("download")||C&&C.includes("external"))return;const _=b?new URL(m,document.baseURI):new URL(m);if(!(_.origin!==window.location.origin||s&&_.pathname&&!_.pathname.toLowerCase().startsWith(s.toLowerCase())))return[h,_]}function c(f){const h=u(f);if(!h)return;const[b,m]=h,T=o.parsePath(m.pathname+m.search+m.hash),C=b.getAttribute("state");f.preventDefault(),l(T,{resolve:!1,replace:b.hasAttribute("replace"),scroll:!b.hasAttribute("noscroll"),state:C&&JSON.parse(C)})}function d(f){const h=u(f);if(!h)return;const[b,m]=h;typeof r=="function"&&(m.pathname=r(m.pathname)),i[m.pathname]||o.preloadRoute(m,b.getAttribute("preload")!=="false")}function g(f){const h=u(f);if(!h)return;const[b,m]=h;typeof r=="function"&&(m.pathname=r(m.pathname)),!i[m.pathname]&&(i[m.pathname]=setTimeout(()=>{o.preloadRoute(m,b.getAttribute("preload")!=="false"),delete i[m.pathname]},200))}function v(f){const h=u(f);if(!h)return;const[,b]=h;typeof r=="function"&&(b.pathname=r(b.pathname)),i[b.pathname]&&(clearTimeout(i[b.pathname]),delete i[b.pathname])}function E(f){if(f.defaultPrevented)return;let h=f.submitter&&f.submitter.hasAttribute("formaction")?f.submitter.getAttribute("formaction"):f.target.getAttribute("action");if(!h)return;if(!h.startsWith("https://action/")){const m=new URL(h,Be);if(h=o.parsePath(m.pathname+m.search),!h.startsWith(n))return}if(f.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const b=jt.get(h);if(b){f.preventDefault();const m=new FormData(f.target);f.submitter&&f.submitter.name&&m.append(f.submitter.name,f.submitter.value),b.call({r:o,f:f.target},m)}}lt(["click","submit"]),document.addEventListener("click",c),e&&(document.addEventListener("mouseover",g),document.addEventListener("mouseout",v),document.addEventListener("focusin",d),document.addEventListener("touchstart",d)),document.addEventListener("submit",E),Ae(()=>{document.removeEventListener("click",c),e&&(document.removeEventListener("mouseover",g),document.removeEventListener("mouseout",v),document.removeEventListener("focusin",d),document.removeEventListener("touchstart",d)),document.removeEventListener("submit",E)})}}function Dt(e){const t=()=>{const r=window.location.pathname+window.location.search;return{value:e.transformUrl?e.transformUrl(r)+window.location.hash:r+window.location.hash,state:window.history.state}},n=_e();return $t({get:t,set({value:r,replace:o,scroll:s,state:l}){o?window.history.replaceState(ct(l),"",r):window.history.pushState(l,"",r),Bt(window.location.hash.slice(1),s),he()},init:r=>_t(window,"popstate",ft(r,o=>{if(o&&o<0)return!n.confirm(o);{const s=t();return!n.confirm(s.value,{state:s.state})}})),create:kt(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:r=>window.history.go(r),beforeLeave:n}})(e)}var Ft=ce('<main class="bg-slate-200 min-h-screen">');const Nt=({children:e})=>(()=>{var t=Ft();return fe(t,e),t})();var It=ce("<img src=https://picsum.photos/seed/bk/1920/1080 height=1920 width=1080>");const Ut=()=>It();var qt=ce(`<section class="flex flex-col gap-4"><h1 class="text-4xl font-bold text-center">Brock and Krahseeva 💖</h1><p class="text-lg text-center">We're getting married!</p><hr><div class="p-4 flex flex-col gap-4"><h2 class="text-2xl font-bold">Details</h2><p class=text-lg>Date: August!</p><p class=text-lg>Location: Somewhere!</p><p class=text-lg>Time: Sometime!</p><hr><h2 class="text-2xl font-bold">Images</h2><a class="text-lg text-blue-500 hover:underline"href=/images>click here to view and upload images!`);function Kt(){return(()=>{var e=qt(),t=e.firstChild;return fe(e,L(Ut,{}),t),e})()}const Wt=document.getElementById("root");it(()=>L(Dt,{root:Nt,get children(){return L(Ct,{path:"/",component:Kt})}}),Wt);