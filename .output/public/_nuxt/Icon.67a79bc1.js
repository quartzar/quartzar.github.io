import{v as I,Q as S,ap as k,N as A,D as C,O as c,F as N,aq as B,H as e,a0 as r,a1 as x,ar as p,a5 as w,as as D,at as q,au as F}from"./app.config.7f3654a3.js";import{d as H,e as $}from"./entry.1af8a3cd.js";import{I as b,l as E}from"./Icon.vue.c16fc3e6.js";function O(){const n=I();return n._appConfig||(n._appConfig=S(k)),n._appConfig}const Q=["width","height"],j=A({__name:"Icon",props:{name:{type:String,required:!0},size:{type:String,default:""}},async setup(n){var y;let i,v;const h=n,z=I(),a=O();(y=a==null?void 0:a.nuxtIcon)!=null&&y.aliases;const m=H("icons",()=>({})),d=C(!1),o=c(()=>{var t;return(((t=a==null?void 0:a.nuxtIcon)==null?void 0:t.aliases)||{})[h.name]||h.name}),_=c(()=>{var t;return(t=m.value)==null?void 0:t[o.value]}),l=c(()=>z.vueApp.component(o.value)),s=c(()=>{var f;const t=h.size||((f=a.nuxtIcon)==null?void 0:f.size)||"1em";return String(Number(t))===t?`${t}px`:t}),u=c(()=>{var t;return((t=a==null?void 0:a.nuxtIcon)==null?void 0:t.class)??"icon"});async function g(){var t;l.value||(t=m.value)!=null&&t[o.value]||(d.value=!0,m.value[o.value]=await E(o.value).catch(()=>{}),d.value=!1)}return N(()=>o.value,g),!l.value&&([i,v]=B(()=>g()),i=await i,v()),(t,f)=>e(d)?(r(),x("span",{key:0,class:p(e(u)),width:e(s),height:e(s)},null,10,Q)):e(_)?(r(),w(e(b),{key:1,icon:e(_),class:p(e(u)),width:e(s),height:e(s)},null,8,["icon","class","width","height"])):e(l)?(r(),w(D(e(l)),{key:2,class:p(e(u)),width:e(s),height:e(s)},null,8,["class","width","height"])):(r(),x("span",{key:3,class:p(e(u)),style:F({fontSize:e(s),lineHeight:e(s),width:e(s),height:e(s)})},q(n.name),7))}}),L=$(j,[["__scopeId","data-v-6e89ca90"]]);export{L as default};
