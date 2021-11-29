var T=Object.defineProperty,A=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var N=(r,t,s)=>t in r?T(r,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[t]=s,x=(r,t)=>{for(var s in t||(t={}))L.call(t,s)&&N(r,s,t[s]);if(y)for(var s of y(t))$.call(t,s)&&N(r,s,t[s]);return r},S=(r,t)=>A(r,C(t));import{u as P,j as a,a as e,r as d,R as g,C as E,b as K,S as O,H as h,D as m,c as D,E as w,B as _,d as M,e as v,f as G}from"./vendor.55c1bdbc.js";const U=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerpolicy&&(l.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?l.credentials="include":n.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(n){if(n.ep)return;n.ep=!0;const l=s(n);fetch(n.href,l)}};U();const V=({data:r,columns:t})=>{const s=P();function o(n){console.log("trykket"),s(`/soknad/${n}`)}return a("table",{children:[e("thead",{children:e("tr",{children:t.map((n,l)=>e("th",{className:"first:pl-16 text-left pr-40 h-32",children:n.name},l))})}),e("tbody",{children:r.map((n,l)=>e("tr",{onClick:()=>o(n.dokumentInfoId),className:"cursor-pointer text-left h-32 odd:bg-gray-100 border-t-2 last:border-b-2 border-gray-200",children:t.map((c,u)=>e("td",{className:"first:pl-16 pr-40",children:n[c.key]},u))},l))})]})},H="border-opacity-100",p=({children:r,selected:t,onClick:s})=>e("button",{onClick:s,className:`p-16 font-bold hover:bg-gray-100 border-b-4 border-blue-400  ${t?H:"border-opacity-0"}`,role:"tab",children:r}),j=({children:r,onTabChange:t})=>{const[s,o]=d.exports.useState(0);return d.exports.useEffect(()=>{t==null||t(s)},[t,s]),e("div",{role:"tablist",children:g.Children.map(r,(n,l)=>g.cloneElement(n,{selected:s===l,onClick:()=>o(l)}))})},Q=({children:r,className:t=""})=>e("div",{className:`border rounded text-xs font-bold ${t}`,children:r});var i;(function(r){r[r.ForsteGang=0]="ForsteGang",r[r.Forlengelse=1]="Forlengelse",r[r.ForlengelseIT=2]="ForlengelseIT",r[r.Revurdering=3]="Revurdering",r[r.Klage=4]="Klage",r[r.Stikkprove=5]="Stikkprove",r[r.QA=6]="QA"})(i||(i={}));const F={[0]:{value:"F",className:"border-purple-200 bg-purple-100"},[1]:{value:"FL",className:"border-sky-400 bg-sky-200"},[2]:{value:"FI",className:"border-stone-400 bg-stone-200"},[3]:{value:"R",className:"border-yellow-400 bg-yellow-200"},[4]:{value:"K",className:"border-red-400 bg-red-200"},[5]:{value:"S",className:"border-red-400 bg-red-200"},[6]:{value:"QA",className:"border-yellow-400 bg-yellow-200"}},q=({behandling:r})=>e("div",{className:"flex",children:e(Q,{className:`w-20 flex justify-center ${F[r].className}`,children:F[r].value})}),I="https://tpts-tiltakspenger-mottak.dev.intern.nav.no",J=()=>fetch(`${I}/api/mocksoknad`).then(r=>r.json()),W=r=>fetch(`${I}/api/mocksoknad/${r}`).then(t=>t.json()),z=[i.ForsteGang,i.Forlengelse,i.ForlengelseIT,i.Revurdering,i.Klage,i.Stikkprove,i.QA],X=[{key:"startdato",name:"Opprettet"},{key:"type",name:"Type"},{key:"tiltaksType",name:"Behandlingstype"},{key:"fornavn",name:"S\xF8ker"},{key:"tiltaksarrangorNavn",name:"Tiltaksplass"},{key:"startdato",name:"Periode"},{key:"status",name:"Status"}],Y=()=>{const[r,t]=d.exports.useState(void 0);return d.exports.useEffect(()=>{J().then(s=>{const o=s.map((n,l)=>S(x({},n),{status:"Under behandling",type:e(q,{behandling:z[l]})}));t(o)})},[]),e("div",{children:a("div",{className:"flex flex-col items-start p-40",children:[e("div",{className:"self-stretch flex border-b-2 border-gray-200 mb-16",children:a(j,{children:[e(p,{children:"Ikke behandlet"}),e(p,{children:"Behandlet"})]})}),r===void 0?e("div",{className:"border border-sky-400 rounded-md p-2 animate-spin",children:"Laster data"}):e(V,{columns:X,data:r||[]})]})})},Z=({text:r})=>a("button",{onClick:()=>{navigator.clipboard.writeText(r)},className:"flex",children:[r,e(E,{className:"ml-3"})]}),k=()=>e("div",{children:"/"}),B=()=>a("div",{className:"flex p-16 space-x-16",children:[e("div",{className:"font-bold",children:"Sigurd Gr\xF8neng"}),e(k,{}),e(Z,{text:"121212 12121"}),e(k,{}),e("div",{children:"Boenhet: 0220 (Asker)"}),e(k,{})]});var ee="/assets/timeline.11d0f9a3.png";const re=()=>e("div",{className:"flex p-16 space-x-16",children:e("img",{className:"w-full",alt:"bilde av tidslinje",src:ee})}),f=({value:r})=>e("span",{className:`border px-2 rounded-md ${r?"border-sky-400 bg-sky-200":"bg-red-200 border-red-400"}`,children:r?"Ja":"Nei"}),te=({soknad:r})=>{const{KVP:t,institusjonsopphold:s,tiltaksType:o,pensjonEtterl\u00F8nn:n,tiltaksadresse:l,tiltakspostnummer:c,tiltaksdagerPerUke:u,tiltaksarrangorNavn:b}=r;return a("div",{className:"flex space-x-8",children:[a("div",{className:"space-y-4 border-2 border-gray-200 shadow-xl p-4 rounded-md",children:[e("h1",{className:"text-lg",children:"Soknad"}),a("div",{className:"flex",children:[e("span",{className:"font-bold mr-4",children:"Kvalifiseringsprogrammet:"}),e(f,{value:t})]}),a("div",{className:"flex justify-between",children:[e("span",{className:"font-bold mr-4",children:"Institusjonsopphold:"}),e(f,{value:s})]}),a("div",{className:"flex justify-between",children:[e("span",{className:"font-bold mr-4",children:"Tiltakstype:"}),e("span",{children:o})]}),a("div",{className:"flex justify-between",children:[e("span",{className:"font-bold mr-4",children:"Kvalifiseringsprogrammet:"}),e(f,{value:n})]}),a("div",{className:"flex justify-between",children:[e("span",{className:"font-bold mr-4",children:"Pensjon/etterl\xF8nn:"}),e(f,{value:n})]})]}),a("div",{className:"shadow-xl p-4 rounded-md border-gray-200 border-2 space-y-4",children:[e("h1",{children:"Tiltak"}),a("div",{className:"flex justify-between",children:[e("span",{className:"font-bold mr-4",children:"Navn:"}),e("span",{children:b})]}),a("div",{className:"flex justify-between",children:[e("span",{className:"font-bold mr-4",children:"Adresse:"}),e("span",{children:l+" "+c})]}),a("div",{className:"flex justify-between",children:[e("span",{className:"font-bold mr-4",children:"Dager i uken:"}),e("span",{children:u})]})]})]})},se=()=>{const{id:r}=K(),[t,s]=d.exports.useState(void 0);return d.exports.useEffect(()=>{!r||W(r).then(o=>s(o))},[]),a("div",{children:[e(B,{}),e(re,{}),a("div",{className:"flex flex-col items-start p-40",children:[e("div",{className:"self-stretch flex border-b-2 border-gray-200 mb-16",children:a(j,{children:[e(p,{children:"Utbetaling"}),e(p,{children:"Inngangsvilk\xE5r"})]})}),t?e(te,{soknad:t}):null]})]})},ne=({onSearch:r})=>{const[t,s]=d.exports.useState(""),o=()=>{t.length>0&&r(t.replace(/\s/g,"")).then(()=>s(""))};return e("div",{className:"flex mx-4 my-2",children:a("div",{className:"flex border border-gray-200 place-content-center rounded",children:[e("input",{className:"bg-black focus:outline-none text-white p-2",onChange:c=>{s(c.target.value)},onKeyPress:c=>{c.key==="Enter"&&t.length>0&&o()},value:t}),e("button",{onClick:o,children:e(O,{className:"m-1  text-gray-200"})})]})})},ae=r=>Promise.resolve(),le=()=>a(h,{children:[e(h.Title,{href:"/#home",children:"NAV tiltakspenger"}),e(ne,{onSearch:ae}),a(m,{children:[e(h.Button,{as:m.Toggle,style:{marginLeft:"auto"},children:e(D,{title:"Systemer og oppslagsverk"})}),e(m.Menu,{children:a(m.Menu.List,{children:[e(m.Menu.List.Item,{children:a("a",{className:"flex",href:"https://arbeid-og-inntekt.nais.adeo.no/api/v2/redirect/sok/a-inntekt",children:[e("span",{className:"mr-2",children:"A-inntekt"}),e(w,{})]})}),e(m.Menu.List.Item,{children:a("a",{className:"flex",href:"https://gosys.intern.nav.no/gosys",children:[e("span",{className:"mr-2",children:"Gosys"}),e(w,{})]})})]})})]}),e(h.User,{name:"Kong Harald"})]}),oe=()=>a("div",{children:[e("button",{onClick:()=>{fetch("/api/test").then(s=>{console.log(s)}).catch(s=>{console.log("ERROR"),console.log(s)})},className:"rounded p-4 bg-gray-100 border border-gray-200 mt-4",children:"Ping backend"}),e("button",{onClick:()=>{fetch("/api/application").then(s=>{console.log(s)}).catch(s=>{console.log("ERROR"),console.log(s)})},className:"rounded p-4 bg-gray-100 border border-gray-200 mt-4",children:"Ping backend auth"})]});function ce(){return e(_,{children:a("div",{className:"App",children:[e(le,{}),a(M,{children:[e(v,{path:"/",element:e(Y,{})}),e(v,{path:"/soknad/:id",element:e(se,{})}),e(v,{path:"/test",element:e(oe,{})})]})]})})}const ie="modulepreload",R={},de="/",me=function(t,s){return!s||s.length===0?t():Promise.all(s.map(o=>{if(o=`${de}${o}`,o in R)return;R[o]=!0;const n=o.endsWith(".css"),l=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${l}`))return;const c=document.createElement("link");if(c.rel=n?"stylesheet":ie,n||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),n)return new Promise((u,b)=>{c.addEventListener("load",u),c.addEventListener("error",b)})})).then(()=>t())},ue=r=>{r&&r instanceof Function&&me(()=>import("./web-vitals.d62816c8.js"),[]).then(({getCLS:t,getFID:s,getFCP:o,getLCP:n,getTTFB:l})=>{t(r),s(r),o(r),n(r),l(r)})};G.render(e(g.StrictMode,{children:e(ce,{})}),document.getElementById("root"));ue();
