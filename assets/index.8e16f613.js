import{D as v,g as C,h as b,o as r,c as i,a,w as c,A as d,T as f,f as l,t as o,E as u}from"./vendor.a2a2daf1.js";import m from"./index.0c8b58c4.js";import{_ as g}from"./index.f2ce59e3.js";const h={key:0,class:"w-[80%] fixed top-1/3 left-[50%] translate-x-[-50%] z-50 px-2 py-1.5 rounded-sm border dark:border-zinc-600 cursor-pointer bg-white dark:bg-zinc-800 xl:w-[35%]"},z={class:"text-lg font-bold text-zinc-900 dark:text-zinc-200 mb-2"},T={class:"text-base text-zinc-900 dark:text-zinc-200 mb-2"},w={class:"flex justify-end"},p="0.5s",H={__name:"index",props:{title:{type:String},content:{type:String,required:!0},cancelText:{type:String,default:"\u53D6\u6D88"},confirmText:{type:String,default:"\u786E\u5B9A"},cancelHandler:{type:Function},confirmHandler:{type:Function},close:{type:Function}},setup(t){v(k=>({"7a8d7a0f":p}));const e=t,n=C(!1),x=()=>{n.value=!0};b(()=>{x()});const s=()=>{n.value=!1,setTimeout(()=>{e.close&&e.close()},parseInt(p.replace("0.","").replace("s",""))*100)},_=()=>{e.cancelHandler&&e.cancelHandler(),s()},y=()=>{e.confirmHandler&&e.confirmHandler(),s()};return(k,V)=>(r(),i("div",null,[a(f,{name:"fade"},{default:c(()=>[n.value?(r(),i("div",{key:0,onClick:s,class:"w-screen h-screen bg-zinc-900/80 z-40 fixed top-0 left-0"})):d("",!0)]),_:1}),a(f,{name:"up"},{default:c(()=>[n.value?(r(),i("div",h,[l("div",z,o(t.title),1),l("div",T,o(t.content),1),l("div",w,[a(m,{type:"info",class:"mr-2",onClick:_},{default:c(()=>[u(o(t.cancelText),1)]),_:1}),a(m,{type:"primary",onClick:y},{default:c(()=>[u(o(t.confirmText),1)]),_:1})])])):d("",!0)]),_:1})]))}};var F=g(H,[["__scopeId","data-v-3e74362e"]]);export{F as default};
