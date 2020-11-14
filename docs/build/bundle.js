var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function r(t){t.parentNode.removeChild(t)}function u(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function a(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function g(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let $;function v(t){$=t}const m=[],b=[],w=[],x=[],y=Promise.resolve();let j=!1;function k(t){w.push(t)}let D=!1;const _=new Set;function C(){if(!D){D=!0;do{for(let t=0;t<m.length;t+=1){const e=m[t];v(e),I(e.$$)}for(v(null),m.length=0;b.length;)b.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];_.has(e)||(_.add(e),e())}w.length=0}while(m.length);for(;x.length;)x.pop()();j=!1,D=!1,_.clear()}}function I(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const O=new Set;function S(t,e){t&&t.i&&(O.delete(t),t.i(e))}function A(t,e,n,s){if(t&&t.o){if(O.has(t))return;O.add(t),undefined.c.push((()=>{O.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function E(t){t&&t.c()}function M(t,n,i){const{fragment:c,on_mount:l,on_destroy:r,after_update:u}=t.$$;c&&c.m(n,i),k((()=>{const n=l.map(e).filter(o);r?r.push(...n):s(n),t.$$.on_mount=[]})),u.forEach(k)}function N(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function z(t,e){-1===t.$$.dirty[0]&&(m.push(t),j||(j=!0,y.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function F(e,o,i,c,l,u,a=[-1]){const d=$;v(e);const f=o.props||{},g=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:a,skip_bound:!1};let h=!1;if(g.ctx=i?i(e,f,((t,n,...s)=>{const o=s.length?s[0]:n;return g.ctx&&l(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),h&&z(e,t)),n})):[],g.update(),h=!0,s(g.before_update),g.fragment=!!c&&c(g.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);g.fragment&&g.fragment.l(t),t.forEach(r)}else g.fragment&&g.fragment.c();o.intro&&S(e.$$.fragment),M(e,o.target,o.anchor),C()}v(d)}class T{$destroy(){N(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function B(t,e,n){const s=t.slice();return s[2]=e[n],s}function L(t){let e,n,s,o,i,u,g=t[2]+"";return{c(){e=a("span"),n=a("input"),o=f(),i=d(g),u=f(),h(n,"type","checkbox"),n.disabled=!0,n.checked=s=t[0].has(t[2]),h(e,"class","choice svelte-1z0eplg")},m(t,s){l(t,e,s),c(e,n),c(e,o),c(e,i),c(e,u)},p(t,e){1&e&&s!==(s=t[0].has(t[2]))&&(n.checked=s)},d(t){t&&r(e)}}}function q(e){let n,s,o,i,d=e[1],g=[];for(let t=0;t<d.length;t+=1)g[t]=L(B(e,d,t));return{c(){n=a("div"),s=a("b"),s.textContent="Valid choices:",o=f(),i=a("div");for(let t=0;t<g.length;t+=1)g[t].c();h(i,"class","matrix svelte-1z0eplg")},m(t,e){l(t,n,e),c(n,s),c(n,o),c(n,i);for(let t=0;t<g.length;t+=1)g[t].m(i,null)},p(t,[e]){if(3&e){let n;for(d=t[1],n=0;n<d.length;n+=1){const s=B(t,d,n);g[n]?g[n].p(s,e):(g[n]=L(s),g[n].c(),g[n].m(i,null))}for(;n<g.length;n+=1)g[n].d(1);g.length=d.length}},i:t,o:t,d(t){t&&r(n),u(g,t)}}}function G(t,e,n){let{choices:s}=e,o=[];for(let t=0;t<100;t++)o.push(t);return t.$$set=t=>{"choices"in t&&n(0,s=t.choices)},[s,o]}class H extends T{constructor(t){super(),F(this,t,G,q,i,{choices:0})}}function P(t,e,n){const s=t.slice();return s[10]=e[n],s}function R(t){let e,n,s,o,i,u,p,$,v=t[10]+"";function m(){return t[7](t[10])}return{c(){e=a("div"),n=a("input"),o=f(),i=d(v),u=f(),h(n,"type","checkbox"),n.checked=s=t[0].has(t[10]),h(e,"class","digit svelte-okt8mv")},m(t,s){l(t,e,s),c(e,n),c(e,o),c(e,i),c(e,u),p||($=g(n,"click",m),p=!0)},p(e,o){t=e,1&o&&s!==(s=t[0].has(t[10]))&&(n.checked=s)},d(t){t&&r(e),p=!1,$()}}}function V(e){let n,o,i,d,h,p,$,v,m,b,w=e[5],x=[];for(let t=0;t<w.length;t+=1)x[t]=R(P(e,w,t));return{c(){n=a("div");for(let t=0;t<x.length;t+=1)x[t].c();o=f(),i=a("div"),d=a("button"),d.textContent="Even",h=f(),p=a("button"),p.textContent="Odd",$=f(),v=a("button"),v.textContent="Clear"},m(t,s){l(t,n,s);for(let t=0;t<x.length;t+=1)x[t].m(n,null);l(t,o,s),l(t,i,s),c(i,d),c(i,h),c(i,p),c(i,$),c(i,v),m||(b=[g(d,"click",e[3]),g(p,"click",e[4]),g(v,"click",e[1])],m=!0)},p(t,[e]){if(37&e){let s;for(w=t[5],s=0;s<w.length;s+=1){const o=P(t,w,s);x[s]?x[s].p(o,e):(x[s]=R(o),x[s].c(),x[s].m(n,null))}for(;s<x.length;s+=1)x[s].d(1);x.length=w.length}},i:t,o:t,d(t){t&&r(n),u(x,t),t&&r(o),t&&r(i),m=!1,s(b)}}}function X(t,e,n){let{digits:s}=e,{updateDigits:o}=e;const i=new Set([0,2,4,6,8]),c=new Set([1,3,5,7,9]),l=t=>{const e=new Set(s);e.has(t)?e.delete(t):e.add(t),o(e)},r=[];for(let t=0;t<10;t++)r.push(t);return t.$$set=t=>{"digits"in t&&n(0,s=t.digits),"updateDigits"in t&&n(6,o=t.updateDigits)},[s,()=>o(new Set),l,()=>o(i),()=>o(c),r,o,t=>l(t)]}class J extends T{constructor(t){super(),F(this,t,X,V,i,{digits:0,updateDigits:6})}}const K=()=>{const t=new Set;for(let e=0;e<10;e++)t.add(e);const e=new Set;for(let t=0;t<10;t++)e.add(t);return{oneDigits:t,tenDigits:e,gte:0,lte:99,oneIs:null}},Q=(t,e,n)=>{const s="ones"===e?n:t.oneDigits,o="tens"===e?n:t.tenDigits;return Object.assign(Object.assign({},t),{oneDigits:s,tenDigits:o})};function U(e){let n,s,o,i,u,g,$,v,m,b;return{c(){n=a("div"),s=a("div"),o=a("span"),o.textContent="Median:",i=f(),u=d(e[0]),g=f(),$=a("div"),v=a("span"),v.textContent="# Guesses:",m=f(),b=d(e[1]),h(o,"class","label svelte-fuiau8"),h(v,"class","label svelte-fuiau8")},m(t,e){l(t,n,e),c(n,s),c(s,o),c(s,i),c(s,u),c(n,g),c(n,$),c($,v),c($,m),c($,b)},p(t,[e]){1&e&&p(u,t[0]),2&e&&p(b,t[1])},i:t,o:t,d(t){t&&r(n)}}}function W(t,e,n){let{choices:s}=e,o="N/A",i="N/A";return t.$$set=t=>{"choices"in t&&n(2,s=t.choices)},t.$$.update=()=>{if(4&t.$$.dirty){if(n(0,o="N/A"),s.size>0){const t=[...s];t.sort(((t,e)=>t-e)),n(0,o=t[Math.floor(t.length/2)].toString())}n(1,i="N/A"),1==s.size?n(1,i="1"):s.size>1&&n(1,i=Math.ceil(Math.log(s.size)/Math.log(2)).toString())}},[o,i,s]}class Y extends T{constructor(t){super(),F(this,t,W,U,i,{choices:2})}}function Z(t){let e,n,o,i,u,p,$,v,m,b,w,x,y,j,k,D,_,C,I,O,z,F,T,B,L,q,G,P,R,V,X,K,Q,U,W,Z,tt,et,nt,st,ot;return p=new Y({props:{choices:t[1]}}),b=new H({props:{choices:t[1]}}),K=new J({props:{digits:t[0].tenDigits,updateDigits:t[4]}}),Z=new J({props:{digits:t[0].oneDigits,updateDigits:t[3]}}),{c(){e=a("main"),n=a("h1"),n.textContent="FFXI Treasure Chest Helper",o=f(),i=a("div"),u=a("div"),E(p.$$.fragment),$=f(),v=a("div"),m=f(),E(b.$$.fragment),w=f(),x=a("div"),y=f(),j=a("div"),k=a("div"),k.textContent="Constraints",D=f(),_=a("div"),C=d("Between\n\t\t\t\t"),I=a("input"),z=d("\n\t\t\t\tand\n\t\t\t\t"),F=a("input"),B=f(),L=a("div"),q=d("One of the digits is\n\t\t\t\t"),G=a("input"),R=f(),V=a("div"),V.textContent="First digit",X=f(),E(K.$$.fragment),Q=f(),U=a("div"),U.textContent="Second digit",W=f(),E(Z.$$.fragment),tt=f(),et=a("button"),et.textContent="Reset",h(n,"class","svelte-1wdc8jh"),h(v,"class","v-pad svelte-1wdc8jh"),h(x,"class","h-pad svelte-1wdc8jh"),h(k,"class","constraints-label svelte-1wdc8jh"),h(I,"type","number"),I.value=O=t[0].gte,h(I,"class","svelte-1wdc8jh"),h(F,"type","number"),F.value=T=t[0].lte,h(F,"class","svelte-1wdc8jh"),h(_,"class","between svelte-1wdc8jh"),h(G,"type","number"),G.value=P=t[0].oneIs||"",h(G,"class","svelte-1wdc8jh"),h(L,"class","one-is svelte-1wdc8jh"),h(V,"class","label svelte-1wdc8jh"),h(U,"class","label svelte-1wdc8jh"),h(et,"class","reset-btn svelte-1wdc8jh"),h(i,"class","content svelte-1wdc8jh"),h(e,"class","svelte-1wdc8jh")},m(s,r){l(s,e,r),c(e,n),c(e,o),c(e,i),c(i,u),M(p,u,null),c(u,$),c(u,v),c(u,m),M(b,u,null),c(i,w),c(i,x),c(i,y),c(i,j),c(j,k),c(j,D),c(j,_),c(_,C),c(_,I),c(_,z),c(_,F),c(j,B),c(j,L),c(L,q),c(L,G),c(j,R),c(j,V),c(j,X),M(K,j,null),c(j,Q),c(j,U),c(j,W),M(Z,j,null),c(j,tt),c(j,et),nt=!0,st||(ot=[g(I,"keyup",t[5]),g(F,"keyup",t[6]),g(G,"keyup",t[7]),g(et,"click",t[2])],st=!0)},p(t,[e]){const n={};2&e&&(n.choices=t[1]),p.$set(n);const s={};2&e&&(s.choices=t[1]),b.$set(s),(!nt||1&e&&O!==(O=t[0].gte))&&(I.value=O),(!nt||1&e&&T!==(T=t[0].lte))&&(F.value=T),(!nt||1&e&&P!==(P=t[0].oneIs||""))&&(G.value=P);const o={};1&e&&(o.digits=t[0].tenDigits),K.$set(o);const i={};1&e&&(i.digits=t[0].oneDigits),Z.$set(i)},i(t){nt||(S(p.$$.fragment,t),S(b.$$.fragment,t),S(K.$$.fragment,t),S(Z.$$.fragment,t),nt=!0)},o(t){A(p.$$.fragment,t),A(b.$$.fragment,t),A(K.$$.fragment,t),A(Z.$$.fragment,t),nt=!1},d(t){t&&r(e),N(p),N(b),N(K),N(Z),st=!1,s(ot)}}}function tt(t,e,n){let s=K();let o;return t.$$.update=()=>{1&t.$$.dirty&&n(1,o=(t=>{const e=new Set;for(let n=0;n<100;n++){if(n<t.gte||n>t.lte)continue;const s=Math.floor(n/10),o=n%10;null!==t.oneIs&&console.log(t.oneIs,s,o),null!==t.oneIs&&s!=t.oneIs&&o!=t.oneIs||t.tenDigits.has(s)&&t.oneDigits.has(o)&&e.add(n)}return e})(s))},[s,o,()=>n(0,s=K()),t=>n(0,s=Q(s,"ones",t)),t=>n(0,s=Q(s,"tens",t)),t=>n(0,s=((t,e)=>Object.assign(Object.assign({},t),{gte:e}))(s,parseInt(t.target.value))),t=>n(0,s=((t,e)=>Object.assign(Object.assign({},t),{lte:e}))(s,parseInt(t.target.value))),t=>{const e=""!==t.target.value?parseInt(t.target.value):null;n(0,s=((t,e)=>Object.assign(Object.assign({},t),{oneIs:e}))(s,e))}]}return new class extends T{constructor(t){super(),F(this,t,tt,Z,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map