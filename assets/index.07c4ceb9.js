import{H as V,g as d,R as B,y as S,r as p,o as b,c as v,f as s,a as n,j as l,J as U,I as _,K as A,S as H,v as h,w as R,B as F,A as L,T as N}from"./vendor.6a4b3e84.js";import{_ as D}from"./index.bf3235d2.js";const K={key:0,class:"max-h-[368px] w-full text-base overflow-auto bg-white dark:bg-zinc-800 absolute z-20 left-0 top-[56px] p-2 rounded border border-zinc-200 dark:border-zinc-600 duration-200 hover:shadow-3xl scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-900 scrollbar-track-transparent"},O="update:modelValue",f="search",m="clear",g="input",x="focus",k="blur",P={__name:"index",props:{modelValue:{type:String,required:!0}},emits:[O,m,g,x,k,f],setup(w,{emit:y}){const z=w,o=y,e=V(z),T=()=>{e.value="",o(m,"")},c=()=>{o(f,e.value)},a=d(!1),C=()=>{a.value=!0,o(x)},E=()=>{o(k)},i=d(null);return B(i,()=>{a.value=!1}),S(e,r=>{o(g,r)}),(r,t)=>{const u=p("m-svg-icon"),I=p("m-button");return b(),v("div",{ref_key:"containerTarget",ref:i,class:"group relative p-0.5 rounded-xl border-white duration-500 hover:bg-red-100/40"},[s("div",null,[n(u,{class:"w-1.5 h-1.5 absolute translate-y-[-50%] top-[50%] left-2",name:"search",color:"#707070"}),l(s("input",{class:"block w-full h-[44px] pl-4 text-sm outline-0 bg-zinc-100 dark:bg-zinc-800 caret-zinc-400 rounded-xl text-zinc-900 dark:text-zinc-200 tracking-wide font-semibold border border-zinc-100 dark:border-zinc-700 duration-500 group-hover:bg-white dark:group-hover:bg-zinc-900 group-hover:border-zinc-200 dark:group-hover:border-zinc-700 focus:border-red-300",type:"text",placeholder:"\u641C\u7D22","onUpdate:modelValue":t[0]||(t[0]=M=>A(e)?e.value=M:null),onFocus:C,onBlur:E,onKeyup:H(c,["enter"])},null,544),[[U,_(e)]]),l(n(u,{name:"input-delete",class:"h-1.5 w-1.5 absolute translate-y-[-50%] top-[50%] right-9 duration-500 cursor-pointer",onClick:T},null,512),[[h,_(e)]]),t[1]||(t[1]=s("div",{class:"opacity-0 h-1.5 w-[1px] absolute translate-y-[-50%] top-[50%] right-[62px] duration-500 bg-zinc-200 group-hover:opacity-100"},null,-1)),n(I,{class:"absolute translate-y-[-50%] top-[50%] right-1 rounded-xl duration-500 opacity-0 group-hover:opacity-100",icon:"search",iconColor:"#ffffff",onClick:c})]),n(N,{name:"slide"},{default:R(()=>[r.$slots.dropdown?l((b(),v("div",K,[F(r.$slots,"dropdown",{},void 0,!0)],512)),[[h,a.value]]):L("",!0)]),_:3})],512)}}};var q=D(P,[["__scopeId","data-v-bf851242"]]);export{q as default};