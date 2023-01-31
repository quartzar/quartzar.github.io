import{A as h,S as g,H as w,a2 as y,y as C,M as v,ab as D,ac as S,h as r}from"./app.config.e613ab8b.js";import{u as _}from"./composables.75f282ec.js";import H from"./ContentRenderer.226ecf0e.js";import{_ as b}from"./ContentQuery.2efdbd99.js";import"./ContentRendererMarkdown.158439ae.js";import"./_commonjsHelpers.0ee3bad0.js";import"./entry.355f96dd.js";import"./cookie.f74c7fec.js";import"./query.c3f7607a.js";import"./utils.5d0992c0.js";const a=(p,e=y())=>{const s=h(p),u=g();w(()=>h(p),(t=s)=>{if(!e.path||!t)return;const n=Object.assign({},(t==null?void 0:t.head)||{});n.meta=[...n.meta||[]],n.link=[...n.link||[]];const c=n.title||(t==null?void 0:t.title);c&&(n.title=c),u.public.content.host;const m=(n==null?void 0:n.description)||(t==null?void 0:t.description);m&&n.meta.filter(i=>i.name==="description").length===0&&n.meta.push({name:"description",content:m}),n!=null&&n.image||(t==null||t.image),C(()=>_(n))},{immediate:!0})},A=v({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:!0}},render(p){const e=D(),{tag:s,excerpt:u,path:f,query:t,head:n}=p,c={...t||{},path:f||(t==null?void 0:t.path)||S(y().path),find:"one"},m=(i,o)=>r("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:i,data:o},null,2));return r(b,c,{default:e!=null&&e.default?({data:i,refresh:o,isPartial:d})=>{var l;return n&&a(i),(l=e.default)==null?void 0:l.call(e,{doc:i,refresh:o,isPartial:d,excerpt:u,...this.$attrs})}:({data:i})=>(n&&a(i),r(H,{value:i,excerpt:u,tag:s,...this.$attrs},{empty:o=>e!=null&&e.empty?e.empty(o):m("default",i)})),empty:i=>{var o;return((o=e==null?void 0:e.empty)==null?void 0:o.call(e,i))||r("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":i=>{var o;return((o=e==null?void 0:e["not-found"])==null?void 0:o.call(e,i))||r("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}});export{A as default};