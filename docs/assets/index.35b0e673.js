import{H as y,r as k,o as n,c as a,a as o,w as c,I as u,A as l,T as f,t as s,f as v,B as b,E as m}from"./vendor.a2a2daf1.js";import{_ as C}from"./index.0fb4ead6.js";const g={key:0,class:"max-w-[80%] max-h-[80%] overflow-auto fixed top-[10%] left-[50%] translate-x-[-50%] z-50 px-2 py-1.5 rounded-sm border dark:border-zinc-600 cursor-pointer bg-white dark:bg-zinc-800 xl:min-w-[35%]"},h={key:0,class:"text-lg font-bold text-zinc-900 dark:text-zinc-200 mb-2"},z={class:"text-base text-zinc-900 dark:text-zinc-200 mb-2"},H={key:1,class:"flex justify-end"},V={__name:"index",props:{modelValue:{type:Boolean,required:!0},title:{type:String},cancelText:{type:String,default:"\u53D6\u6D88"},confirmText:{type:String,default:"\u786E\u5B9A"},cancelHandler:{type:Function},confirmHandler:{type:Function},close:{type:Function}},emits:["update:modelValue"],setup(e){const t=e,i=y(t),x=()=>{t.cancelHandler&&t.cancelHandler(),r()},_=()=>{t.confirmHandler&&t.confirmHandler(),r()},r=()=>{i.value=!1,t.close&&t.close()};return(p,w)=>{const d=k("m-button");return n(),a("div",null,[o(f,{name:"fade"},{default:c(()=>[u(i)?(n(),a("div",{key:0,onClick:r,class:"w-screen h-screen bg-zinc-900/80 z-40 fixed top-0 left-0"})):l("",!0)]),_:1}),o(f,{name:"up"},{default:c(()=>[u(i)?(n(),a("div",g,[e.title?(n(),a("div",h,s(e.title),1)):l("",!0),v("div",z,[b(p.$slots,"default",{},void 0,!0)]),e.cancelHandler||e.confirmHandler?(n(),a("div",H,[o(d,{type:"info",class:"mr-2",onClick:x},{default:c(()=>[m(s(e.cancelText),1)]),_:1}),o(d,{type:"primary",onClick:_},{default:c(()=>[m(s(e.confirmText),1)]),_:1})])):l("",!0)])):l("",!0)]),_:3})])}}};var S=C(V,[["__scopeId","data-v-a14a8176"]]);export{S as default};
