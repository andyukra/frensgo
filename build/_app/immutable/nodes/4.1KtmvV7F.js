import{m as B,s as I,r as K}from"../chunks/index.By6INGGY.js";import{s as W,n as H,c as L,d as R}from"../chunks/scheduler.B2IlTnna.js";import{S as F,i as G,e as O,t as T,s as E,c as q,a as z,b as j,d as S,f as y,n as D,g as J,h as u,o as Q,j as V,y as v,z as U,A as w,k as b,l as k,B as x}from"../chunks/index.CH0HSZbu.js";import{g as X}from"../chunks/entry.6RJsOAjH.js";import{N as Y}from"../chunks/Navbar.CHtTt6fQ.js";function Z(){let l;if(B.subscribe(t=>l=t),I.subscribe(t=>t),l)return{data:l};throw K(307,"/")}const le=Object.freeze(Object.defineProperty({__proto__:null,load:Z},Symbol.toStringTag,{value:"Module"}));function ee(l){let t,f,e,r,$,m,p,i,_,g,s;return{c(){t=O("article"),f=O("h2"),e=T(l[0]),r=E(),$=O("div"),m=O("p"),p=T(l[2]),i=T(" / "),_=T(l[1]),this.h()},l(o){t=q(o,"ARTICLE",{class:!0});var c=z(t);f=q(c,"H2",{class:!0});var h=z(f);e=j(h,l[0]),h.forEach(S),r=y(c),$=q(c,"DIV",{});var N=z($);m=q(N,"P",{class:!0});var d=z(m);p=j(d,l[2]),i=j(d," / "),_=j(d,l[1]),d.forEach(S),N.forEach(S),c.forEach(S),this.h()},h(){D(f,"class","montserrat-alternates-bold svelte-1oq6kkp"),D(m,"class","montserrat-alternates-bold svelte-1oq6kkp"),D(t,"class","svelte-1oq6kkp")},m(o,c){J(o,t,c),u(t,f),u(f,e),u(t,r),u(t,$),u($,m),u(m,p),u(m,i),u(m,_),g||(s=Q(t,"click",l[5]),g=!0)},p(o,[c]){c&1&&V(e,o[0]),c&4&&V(p,o[2]),c&2&&V(_,o[1])},i:H,o:H,d(o){o&&S(t),g=!1,s()}}}function te(l,t,f){let e,r;L(l,I,s=>f(6,e=s)),L(l,B,s=>f(7,r=s));let{name:$}=t,{maxUsers:m}=t,{connectedUsers:p}=t,{value:i}=t;function _(s){r&&(R(B,r={...r,room:s},r),R(I,e=new WebSocket(`wss://www.frensgo.lat/ws/${r.room}/${r.username}`),e),R(I,e.onmessage=o=>{const{type:c}=JSON.parse(o.data);c&&c==="CONNECTED"&&X("/chat")},e))}const g=()=>_(i);return l.$$set=s=>{"name"in s&&f(0,$=s.name),"maxUsers"in s&&f(1,m=s.maxUsers),"connectedUsers"in s&&f(2,p=s.connectedUsers),"value"in s&&f(3,i=s.value)},[$,m,p,i,_,g]}class A extends F{constructor(t){super(),G(this,t,te,ee,W,{name:0,maxUsers:1,connectedUsers:2,value:3})}}function ne(l){let t,f,e,r,$,m,p,i,_,g,s,o,c,h,N,d,M,C,P;return t=new Y({}),r=new A({props:{name:"Amigos 1",value:"amigos1",maxUsers:100,connectedUsers:0}}),m=new A({props:{name:"Amigos 2",value:"amigos2",maxUsers:100,connectedUsers:0}}),i=new A({props:{name:"Amor 1",value:"amor1",maxUsers:100,connectedUsers:0}}),g=new A({props:{name:"Amor 2",value:"amor2",maxUsers:100,connectedUsers:0}}),o=new A({props:{name:"Argentina",value:"argentina",maxUsers:100,connectedUsers:0}}),h=new A({props:{name:"México",value:"mexico",maxUsers:100,connectedUsers:0}}),d=new A({props:{name:"Perú",value:"peru",maxUsers:100,connectedUsers:0}}),C=new A({props:{name:"Venezuela",value:"venezuela",maxUsers:100,connectedUsers:0}}),{c(){v(t.$$.fragment),f=E(),e=O("section"),v(r.$$.fragment),$=E(),v(m.$$.fragment),p=E(),v(i.$$.fragment),_=E(),v(g.$$.fragment),s=E(),v(o.$$.fragment),c=E(),v(h.$$.fragment),N=E(),v(d.$$.fragment),M=E(),v(C.$$.fragment),this.h()},l(n){U(t.$$.fragment,n),f=y(n),e=q(n,"SECTION",{class:!0});var a=z(e);U(r.$$.fragment,a),$=y(a),U(m.$$.fragment,a),p=y(a),U(i.$$.fragment,a),_=y(a),U(g.$$.fragment,a),s=y(a),U(o.$$.fragment,a),c=y(a),U(h.$$.fragment,a),N=y(a),U(d.$$.fragment,a),M=y(a),U(C.$$.fragment,a),a.forEach(S),this.h()},h(){D(e,"class","svelte-13easa0")},m(n,a){w(t,n,a),J(n,f,a),J(n,e,a),w(r,e,null),u(e,$),w(m,e,null),u(e,p),w(i,e,null),u(e,_),w(g,e,null),u(e,s),w(o,e,null),u(e,c),w(h,e,null),u(e,N),w(d,e,null),u(e,M),w(C,e,null),P=!0},p:H,i(n){P||(b(t.$$.fragment,n),b(r.$$.fragment,n),b(m.$$.fragment,n),b(i.$$.fragment,n),b(g.$$.fragment,n),b(o.$$.fragment,n),b(h.$$.fragment,n),b(d.$$.fragment,n),b(C.$$.fragment,n),P=!0)},o(n){k(t.$$.fragment,n),k(r.$$.fragment,n),k(m.$$.fragment,n),k(i.$$.fragment,n),k(g.$$.fragment,n),k(o.$$.fragment,n),k(h.$$.fragment,n),k(d.$$.fragment,n),k(C.$$.fragment,n),P=!1},d(n){n&&(S(f),S(e)),x(t,n),x(r),x(m),x(i),x(g),x(o),x(h),x(d),x(C)}}}class fe extends F{constructor(t){super(),G(this,t,null,ne,W,{})}}export{fe as component,le as universal};