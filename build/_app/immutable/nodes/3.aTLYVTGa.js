var ze=Object.defineProperty;var Te=a=>{throw TypeError(a)};var Je=(a,e,t)=>e in a?ze(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var q=(a,e,t)=>Je(a,typeof e!="symbol"?e+"":e,t),Fe=(a,e,t)=>e.has(a)||Te("Cannot "+t);var Re=(a,e,t)=>e.has(a)?Te("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(a):e.set(a,t);var we=(a,e,t)=>(Fe(a,e,"access private method"),t);import{m as Ee,s as K,r as $e,d as me,u as Xe}from"../chunks/index.TLqISWae.js";import{s as re,y as z,n as V,c as X,z as pe,o as Ce,A as He,d as x,r as Pe,f as Ye}from"../chunks/scheduler.CHVDA16w.js";import{S as ne,i as ie,e as v,s as B,t as Q,c as b,a as T,f as L,b as Z,d as _,n as c,g as N,h as d,j as oe,m as _e,o as ee,y as te,z as se,A as ae,p as ke,q as We,k as j,l as C,u as be,B as le,C as Ue,w as ye}from"../chunks/index.DIjhlOJV.js";import{N as Ke}from"../chunks/Navbar.C83tzqw1.js";import{g as Qe}from"../chunks/entry.CzsV3tKs.js";function he(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}function Ze(){let a,e;if(Ee.subscribe(t=>a=t),K.subscribe(t=>e=t),!a||!e)throw $e(307,"/")}const Ot=Object.freeze(Object.defineProperty({__proto__:null,load:Ze},Symbol.toStringTag,{value:"Module"}));function Me(a){let e;return{c(){e=v("i"),this.h()},l(t){e=b(t,"I",{class:!0}),T(e).forEach(_),this.h()},h(){c(e,"class","fa-solid fa-circle-user svelte-42ha35")},m(t,s){N(t,e,s)},d(t){t&&_(e)}}}function xe(a){let e,t;return{c(){e=v("img"),this.h()},l(s){e=b(s,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){c(e,"class","typeImg svelte-42ha35"),pe(e.src,t=a[0].body)||c(e,"src",t),c(e,"alt","Imagen subida Por un usuario")},m(s,l){N(s,e,l)},p(s,l){l&1&&!pe(e.src,t=s[0].body)&&c(e,"src",t)},d(s){s&&_(e)}}}function et(a){let e,t;return{c(){e=v("audio"),this.h()},l(s){e=b(s,"AUDIO",{src:!0}),T(e).forEach(_),this.h()},h(){pe(e.src,t=a[0].body)||c(e,"src",t),e.controls=!0},m(s,l){N(s,e,l)},p(s,l){l&1&&!pe(e.src,t=s[0].body)&&c(e,"src",t)},d(s){s&&_(e)}}}function tt(a){let e,t=a[0].body+"",s;return{c(){e=v("p"),s=Q(t),this.h()},l(l){e=b(l,"P",{class:!0});var r=T(e);s=Z(r,t),r.forEach(_),this.h()},h(){c(e,"class","montserrat-alternates-regular")},m(l,r){N(l,e,r),d(e,s)},p(l,r){r&1&&t!==(t=l[0].body+"")&&oe(s,t)},d(l){l&&_(e)}}}function st(a){let e,t,s,l,r=decodeURI(a[0].username)+"",n,E,h,I,p,m=a[0].type!==a[2].BOT&&Me();function R(i,y){if(i[0].type===i[2].ROOM||i[0].type===i[2].BOT)return tt;if(i[0].type===i[2].AUDIO)return et;if(i[0].type===i[2].IMAGE)return xe}let k=R(a),f=k&&k(a);return{c(){e=v("article"),t=v("div"),m&&m.c(),s=B(),l=v("h4"),n=Q(r),E=B(),h=v("div"),f&&f.c(),this.h()},l(i){e=b(i,"ARTICLE",{class:!0});var y=T(e);t=b(y,"DIV",{class:!0});var w=T(t);m&&m.l(w),s=L(w),l=b(w,"H4",{class:!0});var O=T(l);n=Z(O,r),O.forEach(_),w.forEach(_),E=L(y),h=b(y,"DIV",{class:!0});var S=T(h);f&&f.l(S),S.forEach(_),y.forEach(_),this.h()},h(){c(l,"class","montserrat-alternates-bold svelte-42ha35"),c(t,"class","username svelte-42ha35"),c(h,"class",I=z(`body ${a[0].type===a[2].BOT?"typeBot":a[0].type===a[2].AUDIO?"typeAudio":""}`)+" svelte-42ha35"),c(e,"class",p=z(a[1].username===decodeURI(a[0].username)?"me":"")+" svelte-42ha35")},m(i,y){N(i,e,y),d(e,t),m&&m.m(t,null),d(t,s),d(t,l),d(l,n),d(e,E),d(e,h),f&&f.m(h,null)},p(i,[y]){i[0].type!==i[2].BOT?m||(m=Me(),m.c(),m.m(t,s)):m&&(m.d(1),m=null),y&1&&r!==(r=decodeURI(i[0].username)+"")&&oe(n,r),k===(k=R(i))&&f?f.p(i,y):(f&&f.d(1),f=k&&k(i),f&&(f.c(),f.m(h,null))),y&1&&I!==(I=z(`body ${i[0].type===i[2].BOT?"typeBot":i[0].type===i[2].AUDIO?"typeAudio":""}`)+" svelte-42ha35")&&c(h,"class",I),y&3&&p!==(p=z(i[1].username===decodeURI(i[0].username)?"me":"")+" svelte-42ha35")&&c(e,"class",p)},i:V,o:V,d(i){i&&_(e),m&&m.d(),f&&f.d()}}}function at(a,e,t){let s;X(a,Ee,n=>t(1,s=n));var l=(n=>(n.ROOM="room",n.BOT="bot",n.AUDIO="audio",n.IMAGE="image",n.YT="yt",n))(l||{});let{data:r}=e;return a.$$set=n=>{"data"in n&&t(0,r=n.data)},[r,s,l]}class lt extends ne{constructor(e){super(),ie(this,e,at,st,re,{data:0})}}function rt(a){let e,t,s,l,r=decodeURI(a[1].username)+"",n,E,h;return{c(){e=v("article"),t=v("i"),s=B(),l=v("h4"),n=Q(r),E=B(),h=v("i"),this.h()},l(I){e=b(I,"ARTICLE",{"data-id":!0,class:!0});var p=T(e);t=b(p,"I",{class:!0}),T(t).forEach(_),s=L(p),l=b(p,"H4",{class:!0});var m=T(l);n=Z(m,r),m.forEach(_),E=L(p),h=b(p,"I",{class:!0}),T(h).forEach(_),p.forEach(_),this.h()},h(){c(t,"class","fa-solid fa-circle-user svelte-vv2xs7"),c(l,"class","montserrat-alternates-bold svelte-vv2xs7"),c(h,"class","fa-solid fa-circle-question svelte-vv2xs7"),c(e,"data-id",a[0]),c(e,"class","svelte-vv2xs7")},m(I,p){N(I,e,p),d(e,t),d(e,s),d(e,l),d(l,n),d(e,E),d(e,h)},p(I,[p]){p&2&&r!==(r=decodeURI(I[1].username)+"")&&oe(n,r),p&1&&c(e,"data-id",I[0])},i:V,o:V,d(I){I&&_(e)}}}function nt(a,e,t){let{id:s}=e,{data:l}=e;return a.$$set=r=>{"id"in r&&t(0,s=r.id),"data"in r&&t(1,l=r.data)},[s,l]}class it extends ne{constructor(e){super(),ie(this,e,nt,rt,re,{id:0,data:1})}}function ot(a){let e,t,s,l;return{c(){e=v("section"),t=v("article"),s=v("h4"),l=Q(a[0]),this.h()},l(r){e=b(r,"SECTION",{class:!0});var n=T(e);t=b(n,"ARTICLE",{class:!0});var E=T(t);s=b(E,"H4",{class:!0});var h=T(s);l=Z(h,a[0]),h.forEach(_),E.forEach(_),n.forEach(_),this.h()},h(){c(s,"class","montserrat-alternates-medium svelte-1b74fp1"),c(t,"class","svelte-1b74fp1"),c(e,"class","svelte-1b74fp1")},m(r,n){N(r,e,n),d(e,t),d(t,s),d(s,l)},p(r,[n]){n&1&&oe(l,r[0])},i:V,o:V,d(r){r&&_(e)}}}function ct(a,e,t){let s;X(a,me,n=>t(2,s=n));let{msg:l}=e,{time:r}=e;return Ce(()=>{document.onkeydown=()=>!1}),He(()=>{document.onkeydown=null}),setTimeout(()=>x(me,s=!1,s),r),a.$$set=n=>{"msg"in n&&t(0,l=n.msg),"time"in n&&t(1,r=n.time)},[l,r]}class ut extends ne{constructor(e){super(),ie(this,e,ct,ot,re,{msg:0,time:1})}}function Se(a){let e,t='<i class="fa-solid fa-stop svelte-10wdjp4"></i>',s,l;return{c(){e=v("button"),e.innerHTML=t,this.h()},l(r){e=b(r,"BUTTON",{class:!0,"data-svelte-h":!0}),_e(e)!=="svelte-1lqnh5p"&&(e.innerHTML=t),this.h()},h(){c(e,"class","svelte-10wdjp4")},m(r,n){N(r,e,n),s||(l=ee(e,"click",a[4]),s=!0)},p:V,d(r){r&&_(e),s=!1,l()}}}function ft(a){let e,t,s='<button class="montserrat-alternates-bold svelte-10wdjp4">T</button>',l,r,n,E,h,I='<i class="fa-solid fa-image svelte-10wdjp4"></i>',p,m,R,k,f,i,y,w,O=a[0]&&Se(a);return{c(){e=v("div"),t=v("div"),t.innerHTML=s,l=B(),r=v("div"),n=v("input"),E=B(),h=v("label"),h.innerHTML=I,p=B(),m=v("div"),R=v("button"),k=v("i"),i=B(),O&&O.c(),this.h()},l(S){e=b(S,"DIV",{class:!0});var A=T(e);t=b(A,"DIV",{class:!0,"data-svelte-h":!0}),_e(t)!=="svelte-j39qlt"&&(t.innerHTML=s),l=L(A),r=b(A,"DIV",{class:!0});var P=T(r);n=b(P,"INPUT",{type:!0,accept:!0,id:!0}),E=L(P),h=b(P,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),_e(h)!=="svelte-dbs90"&&(h.innerHTML=I),P.forEach(_),p=L(A),m=b(A,"DIV",{class:!0});var Y=T(m);R=b(Y,"BUTTON",{class:!0});var H=T(R);k=b(H,"I",{class:!0}),T(k).forEach(_),H.forEach(_),Y.forEach(_),i=L(A),O&&O.l(A),A.forEach(_),this.h()},h(){c(t,"class","txtStyle svelte-10wdjp4"),c(n,"type","file"),c(n,"accept","image/*"),n.hidden=!0,c(n,"id","upImg"),c(h,"for","upImg"),c(h,"class","svelte-10wdjp4"),c(r,"class","sendImg"),c(k,"class",f=z(`fa-solid fa-microphone ${a[1]}`)+" svelte-10wdjp4"),R.disabled=a[2].audioState,c(R,"class","svelte-10wdjp4"),c(m,"class","sendAudio"),c(e,"class","tools svelte-10wdjp4")},m(S,A){N(S,e,A),d(e,t),d(e,l),d(e,r),d(r,n),d(r,E),d(r,h),d(e,p),d(e,m),d(m,R),d(R,k),d(e,i),O&&O.m(e,null),y||(w=[ee(n,"change",a[5]),ee(R,"click",a[3])],y=!0)},p(S,[A]){A&2&&f!==(f=z(`fa-solid fa-microphone ${S[1]}`)+" svelte-10wdjp4")&&c(k,"class",f),S[0]?O?O.p(S,A):(O=Se(S),O.c(),O.m(e,null)):O&&(O.d(1),O=null)},i:V,o:V,d(S){S&&_(e),O&&O.d(),y=!1,Pe(w)}}}const Ae="https://frensgo.lat";function dt(a,e,t){var m,Ve;let s;X(a,K,k=>t(6,s=k));class l{constructor(){Re(this,m);q(this,"constraints");q(this,"chunks");q(this,"mediaRecorder");q(this,"audioURL");q(this,"audioState",!0);q(this,"state");q(this,"timeOut");navigator.mediaDevices&&(this.constraints={audio:!0},this.chunks=[],this.audioState=!1)}getDevices(){navigator.mediaDevices.getUserMedia(this.constraints).then(f=>{this.mediaRecorder=new MediaRecorder(f),this.mediaRecorder.ondataavailable=i=>{this.chunks.push(i.data)},this.mediaRecorder.onstop=async i=>{if(!this.state){this.chunks=[];return}const y=new Blob(this.chunks,{type:"audio/ogg;codecs=opus"});this.chunks=[];const w=await we(this,m,Ve).call(this,y);s.send(JSON.stringify({type:"AUDIO",msg:w}))}})}start(){return this.mediaRecorder&&(this.mediaRecorder.state==="inactive"||this.mediaRecorder.state==="paused")?(this.mediaRecorder.start(),this.timeOut=setTimeout(()=>{var f;return(f=this.mediaRecorder)==null?void 0:f.stop()},18e4),!0):!1}stop(f){return this.mediaRecorder&&this.mediaRecorder.state==="recording"?(clearTimeout(this.timeOut),this.state=f,this.mediaRecorder.stop(),!1):!0}}m=new WeakSet,Ve=async function(f){const i=new FormData;return i.append("audio",f),await(await fetch(`${Ae}/audio`,{method:"POST",body:i})).text()};const r=new l;r.getDevices();let n=!1,E="stop";function h(){n?(t(0,n=r.stop(!0)),t(1,E="stop")):(t(0,n=r.start()),t(1,E="rec"))}function I(){t(0,n=r.stop(!1)),t(1,E="stop")}async function p(k){const f=k.target.files[0];if(f.size>5e6){alert("La imágen es muy pesada");return}if(!/^image\/....?$/.test(f.type)){alert("Por favor elija una imágen válida");return}const i=new FormData;i.append("image",f);const w=await(await fetch(`${Ae}/upImg`,{method:"POST",body:i})).text();s.send(JSON.stringify({type:"IMG",msg:w}))}return[n,E,r,h,I,p]}class ht extends ne{constructor(e){super(),ie(this,e,dt,ft,re,{})}}function De(a,e,t){const s=a.slice();return s[13]=e[t][0],s[14]=e[t][1],s}function Be(a,e,t){const s=a.slice();return s[17]=e[t],s}function Le(a){let e,t;return e=new ut({props:{msg:"Aver si nos calmamos un poquito :)",time:5e3}}),{c(){te(e.$$.fragment)},l(s){se(e.$$.fragment,s)},m(s,l){ae(e,s,l),t=!0},i(s){t||(j(e.$$.fragment,s),t=!0)},o(s){C(e.$$.fragment,s),t=!1},d(s){le(e,s)}}}function je(a){let e,t;return e=new lt({props:{data:a[17]}}),{c(){te(e.$$.fragment)},l(s){se(e.$$.fragment,s)},m(s,l){ae(e,s,l),t=!0},p(s,l){const r={};l&8&&(r.data=s[17]),e.$set(r)},i(s){t||(j(e.$$.fragment,s),t=!0)},o(s){C(e.$$.fragment,s),t=!1},d(s){le(e,s)}}}function Ne(a){let e,t;return e=new it({props:{id:a[13],data:a[14]}}),{c(){te(e.$$.fragment)},l(s){se(e.$$.fragment,s)},m(s,l){ae(e,s,l),t=!0},p(s,l){const r={};l&4&&(r.id=s[13]),l&4&&(r.data=s[14]),e.$set(r)},i(s){t||(j(e.$$.fragment,s),t=!0)},o(s){C(e.$$.fragment,s),t=!1},d(s){le(e,s)}}}function mt(a){let e,t,s,l,r,n,E,h,I,p,m,R,k,f,i='<i class="fa-solid fa-paper-plane svelte-10t8t63"></i>',y,w,O,S,A=a[2].size+"",P,Y,H,ce,W,ge,Ie,D=a[4]&&Le();t=new Ke({});let J=he(a[3]),U=[];for(let o=0;o<J.length;o+=1)U[o]=je(Be(a,J,o));const Ge=o=>C(U[o],1,1,()=>{U[o]=null});I=new ht({});let F=he(a[2].entries()),M=[];for(let o=0;o<F.length;o+=1)M[o]=Ne(De(a,F,o));const qe=o=>C(M[o],1,1,()=>{M[o]=null});return{c(){D&&D.c(),e=B(),te(t.$$.fragment),s=B(),l=v("section"),r=v("article"),n=v("div");for(let o=0;o<U.length;o+=1)U[o].c();E=B(),h=v("div"),te(I.$$.fragment),p=B(),m=v("form"),R=v("input"),k=B(),f=v("button"),f.innerHTML=i,y=B(),w=v("article"),O=v("h3"),S=Q("Usuarios conectados: "),P=Q(A),Y=B(),H=v("div");for(let o=0;o<M.length;o+=1)M[o].c();this.h()},l(o){D&&D.l(o),e=L(o),se(t.$$.fragment,o),s=L(o),l=b(o,"SECTION",{class:!0});var g=T(l);r=b(g,"ARTICLE",{class:!0});var u=T(r);n=b(u,"DIV",{class:!0});var G=T(n);for(let $=0;$<U.length;$+=1)U[$].l(G);G.forEach(_),E=L(u),h=b(u,"DIV",{class:!0});var ue=T(h);se(I.$$.fragment,ue),p=L(ue),m=b(ue,"FORM",{class:!0});var fe=T(m);R=b(fe,"INPUT",{class:!0,type:!0,placeholder:!0,maxlength:!0,minlength:!0}),k=L(fe),f=b(fe,"BUTTON",{class:!0,"data-svelte-h":!0}),_e(f)!=="svelte-1m1u804"&&(f.innerHTML=i),fe.forEach(_),ue.forEach(_),u.forEach(_),y=L(g),w=b(g,"ARTICLE",{class:!0});var de=T(w);O=b(de,"H3",{class:!0});var ve=T(O);S=Z(ve,"Usuarios conectados: "),P=Z(ve,A),ve.forEach(_),Y=L(de),H=b(de,"DIV",{class:!0});var Oe=T(H);for(let $=0;$<M.length;$+=1)M[$].l(Oe);Oe.forEach(_),de.forEach(_),g.forEach(_),this.h()},h(){c(n,"class","chat svelte-10t8t63"),c(R,"class","montserrat-alternates-regular svelte-10t8t63"),c(R,"type","text"),c(R,"placeholder","Escribe tu mensaje..."),c(R,"maxlength","120"),c(R,"minlength","1"),c(f,"class","svelte-10t8t63"),c(m,"class","svelte-10t8t63"),c(h,"class","msg svelte-10t8t63"),c(r,"class","chatBX svelte-10t8t63"),c(O,"class","montserrat-alternates-bold svelte-10t8t63"),c(H,"class","userlist svelte-10t8t63"),c(w,"class",ce=z(`users ${a[5]?"showUserlist":""}`)+" svelte-10t8t63"),c(l,"class","svelte-10t8t63")},m(o,g){D&&D.m(o,g),N(o,e,g),ae(t,o,g),N(o,s,g),N(o,l,g),d(l,r),d(r,n);for(let u=0;u<U.length;u+=1)U[u]&&U[u].m(n,null);a[7](n),d(r,E),d(r,h),ae(I,h,null),d(h,p),d(h,m),d(m,R),ke(R,a[0]),d(m,k),d(m,f),d(l,y),d(l,w),d(w,O),d(O,S),d(O,P),d(w,Y),d(w,H);for(let u=0;u<M.length;u+=1)M[u]&&M[u].m(H,null);W=!0,ge||(Ie=[ee(R,"input",a[8]),ee(m,"submit",We(a[6]))],ge=!0)},p(o,[g]){if(o[4]?D?g&16&&j(D,1):(D=Le(),D.c(),j(D,1),D.m(e.parentNode,e)):D&&(ye(),C(D,1,1,()=>{D=null}),be()),g&8){J=he(o[3]);let u;for(u=0;u<J.length;u+=1){const G=Be(o,J,u);U[u]?(U[u].p(G,g),j(U[u],1)):(U[u]=je(G),U[u].c(),j(U[u],1),U[u].m(n,null))}for(ye(),u=J.length;u<U.length;u+=1)Ge(u);be()}if(g&1&&R.value!==o[0]&&ke(R,o[0]),(!W||g&4)&&A!==(A=o[2].size+"")&&oe(P,A),g&4){F=he(o[2].entries());let u;for(u=0;u<F.length;u+=1){const G=De(o,F,u);M[u]?(M[u].p(G,g),j(M[u],1)):(M[u]=Ne(G),M[u].c(),j(M[u],1),M[u].m(H,null))}for(ye(),u=F.length;u<M.length;u+=1)qe(u);be()}(!W||g&32&&ce!==(ce=z(`users ${o[5]?"showUserlist":""}`)+" svelte-10t8t63"))&&c(w,"class",ce)},i(o){if(!W){j(D),j(t.$$.fragment,o);for(let g=0;g<J.length;g+=1)j(U[g]);j(I.$$.fragment,o);for(let g=0;g<F.length;g+=1)j(M[g]);W=!0}},o(o){C(D),C(t.$$.fragment,o),U=U.filter(Boolean);for(let g=0;g<U.length;g+=1)C(U[g]);C(I.$$.fragment,o),M=M.filter(Boolean);for(let g=0;g<M.length;g+=1)C(M[g]);W=!1},d(o){o&&(_(e),_(s),_(l)),D&&D.d(o),le(t,o),Ue(U,o),a[7](null),le(I),Ue(M,o),ge=!1,Pe(Ie)}}}function pt(a){a.scroll({top:a.scrollHeight,behavior:"smooth"})}function _t(a,e,t){let s,l,r,n;X(a,K,i=>t(9,s=i)),X(a,me,i=>t(4,l=i)),X(a,Ee,i=>t(10,r=i)),X(a,Xe,i=>t(5,n=i));let E="",h=null,I=[],p=[{username:"frensgo :",body:`Bienvenido a la sala ${r.room}`,type:"bot"}];Ce(()=>{s.send(JSON.stringify({type:"GETUSERLIST"}))}),He(()=>{s.close(),x(K,s=null,s)});function m(i,y){switch(i){case"USERLIST":const w=new Map(y);t(2,I=w);break;case"NEW_USER":const O={username:"frensgo :",body:y,type:"bot"};p.push(O),t(3,p);break;case"BYE_USER":const S={username:"frensgo :",body:y,type:"bot"};p.push(S),t(3,p);break;case"ROOM_MSG":p.push({...y,type:"room"}),t(3,p),p.length>=30&&(p.shift(),t(3,p)),setTimeout(()=>pt(h),.1);break;case"CALM":x(me,l=!0,l);break;case"AUDIO":p.push({...y,type:"audio"}),t(3,p);break;case"IMG":p.push({...y,type:"image"}),t(3,p);break}}x(K,s.onmessage=i=>{const{type:y,msg:w}=JSON.parse(i.data);m(y,w)},s),x(K,s.onclose=()=>{Qe("/rooms")},s);function R(){!E||E.length===0||E.length>120||(s.send(JSON.stringify({type:"ROOM_MSG",msg:E.trim()})),t(0,E=""))}function k(i){Ye[i?"unshift":"push"](()=>{h=i,t(1,h)})}function f(){E=this.value,t(0,E)}return[E,h,I,p,l,n,R,k,f]}class Tt extends ne{constructor(e){super(),ie(this,e,_t,mt,re,{})}}export{Tt as component,Ot as universal};
