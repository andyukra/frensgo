import{m as E,r as D}from"../chunks/index._j6mvRYL.js";import{s as N,n as j,r as V,c as H,d as L}from"../chunks/scheduler.CHVDA16w.js";import{S as z,i as B,e as h,s as y,c as f,a as P,m as S,f as k,d as C,n as a,g as F,h as l,p as w,o as U,q as R}from"../chunks/index.DfV-3n15.js";import{g as $}from"../chunks/entry.bLwKZ5dV.js";function A(){let r;if(E.subscribe(s=>r=s),r)throw D(307,"/rooms")}const Z=Object.freeze(Object.defineProperty({__proto__:null,load:A},Symbol.toStringTag,{value:"Module"}));function G(r){let s,n,_='<h1 class="kenia-regular svelte-7xb03e">frens go</h1> <p class="montserrat-alternates-regular svelte-7xb03e">un chat para todxs</p>',o,e,t,g,i,d="chatear",T,m,p,q,v,M="Soy mayor de edad",I,O;return{c(){s=h("div"),n=h("div"),n.innerHTML=_,o=y(),e=h("form"),t=h("input"),g=y(),i=h("button"),i.textContent=d,T=y(),m=h("div"),p=h("input"),q=y(),v=h("p"),v.textContent=M,this.h()},l(u){s=f(u,"DIV",{class:!0});var c=P(s);n=f(c,"DIV",{class:!0,"data-svelte-h":!0}),S(n)!=="svelte-13q5o3c"&&(n.innerHTML=_),o=k(c),e=f(c,"FORM",{class:!0});var b=P(e);t=f(b,"INPUT",{class:!0,type:!0,placeholder:!0,maxlength:!0,minlength:!0,pattern:!0}),g=k(b),i=f(b,"BUTTON",{class:!0,"data-svelte-h":!0}),S(i)!=="svelte-1njdab6"&&(i.textContent=d),T=k(b),m=f(b,"DIV",{class:!0});var x=P(m);p=f(x,"INPUT",{type:!0,id:!0}),q=k(x),v=f(x,"P",{class:!0,"data-svelte-h":!0}),S(v)!=="svelte-14hrrau"&&(v.textContent=M),x.forEach(C),b.forEach(C),c.forEach(C),this.h()},h(){a(n,"class","header svelte-7xb03e"),a(t,"class","montserrat-alternates-bold svelte-7xb03e"),a(t,"type","text"),a(t,"placeholder","Escribe tu nick..."),a(t,"maxlength","25"),a(t,"minlength","3"),t.required=!0,a(t,"pattern","^(\\w|\\s|ñ)+$"),a(i,"class","montserrat-alternates-medium svelte-7xb03e"),a(p,"type","checkbox"),a(p,"id","check"),a(v,"class","montserrat-alternates-medium svelte-7xb03e"),a(m,"class","check svelte-7xb03e"),a(e,"class","svelte-7xb03e"),a(s,"class","container svelte-7xb03e")},m(u,c){F(u,s,c),l(s,n),l(s,o),l(s,e),l(e,t),w(t,r[0]),l(e,g),l(e,i),l(e,T),l(e,m),l(m,p),p.checked=r[1],l(m,q),l(m,v),I||(O=[U(t,"input",r[3]),U(p,"change",r[4]),U(e,"submit",R(r[2]))],I=!0)},p(u,[c]){c&1&&t.value!==u[0]&&w(t,u[0]),c&2&&(p.checked=u[1])},i:j,o:j,d(u){u&&C(s),I=!1,V(O)}}}let J=/^(\w|\s|ñ)+$/;function K(r,s,n){let _;H(r,E,d=>n(5,_=d));let o="",e=!1;async function t(){if(!o)return;const d=o.trim().replace(/\s\s+/," ");if(J.test(d)&&!(d.length>25)){if(!e){alert("confirma que eres mayor de edad");return}L(E,_={username:d,role:"guest",room:""},_),$("/rooms")}}function g(){o=this.value,n(0,o)}function i(){e=this.checked,n(1,e)}return[o,e,t,g,i]}class ee extends z{constructor(s){super(),B(this,s,K,G,N,{})}}export{ee as component,Z as universal};