var V=Object.defineProperty,y=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var f=(s,e,a)=>e in s?V(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a,i=(s,e)=>{for(var a in e||(e={}))P.call(e,a)&&f(s,a,e[a]);if(p)for(var a of p(e))E.call(e,a)&&f(s,a,e[a]);return s},g=(s,e)=>y(s,_(e));import{d as C,h as R,F as N,c as T,a as m,v as U,E as b,b as F}from"./validate.b85dd450.js";import{j as A}from"./index.0fb4ead6.js";import{Y as B,L,ae as S,g as k,r as q,o as I,c as M,a as o,f as n,I as r,w,E as Y}from"./vendor.a2a2daf1.js";const j={class:"relative h-screen bg-white dark:bg-zinc-800 text-center xl:bg-zinc-200"},G={class:"block px-3 mt-4 dark:bg-zinc-800 xl:bg-white xl:w-[388px] xl:dark:bg-zinc-900 xl:m-auto xl:mt-8 xl:py-4 xl:rounded-sm xl:shadow-lg"},K={__name:"index",setup(s){const e=B(),a=L(),x=S();C("validateConfirmPassword",T);const z=()=>{e.commit("app/changeRouterType","push"),a.push("/login")},l=k({username:"",password:"",confirmPassword:""}),c=k(!1);console.log(x);const v=async()=>{c.value=!0;try{const u={username:l.value.username,password:l.value.password};await e.dispatch("user/register",i(i({},u),x.query)),await e.dispatch("user/login",g(i({},u),{loginType:A}))}finally{c.value=!1}a.push("/")};return(u,t)=>{const h=q("m-button");return I(),M("div",j,[o(R),n("div",G,[t[5]||(t[5]=n("h3",{class:"mb-2 font-semibold text-base text-main dark:text-zinc-300 hidden xl:block"}," \u6CE8\u518C\u8D26\u53F7 ",-1)),o(r(N),{onSubmit:v},{default:w(()=>[o(r(m),{class:"dark:bg-zinc-800 dark:text-zinc-400 border-b-zinc-400 border-b-[1px] w-full outline-0 pb-1 px-1 text-base focus:border-b-main dark:focus:border-b-zinc-200 xl:dark:bg-zinc-900",name:"username",type:"text",placeholder:"\u7528\u6237\u540D",autocomplete:"on",rules:r(U),modelValue:l.value.username,"onUpdate:modelValue":t[0]||(t[0]=d=>l.value.username=d)},null,8,["rules","modelValue"]),o(r(b),{class:"text-sm text-red-600 block mt-0.5 text-left",name:"username"}),o(r(m),{class:"dark:bg-zinc-800 dark:text-zinc-400 border-b-zinc-400 border-b-[1px] w-full outline-0 pb-1 px-1 text-base focus:border-b-main dark:focus:border-b-zinc-200 xl:dark:bg-zinc-900",name:"password",type:"password",placeholder:"\u5BC6\u7801",autocomplete:"on",rules:r(F),modelValue:l.value.password,"onUpdate:modelValue":t[1]||(t[1]=d=>l.value.password=d)},null,8,["rules","modelValue"]),o(r(b),{class:"text-sm text-red-600 block mt-0.5 text-left",name:"password"}),o(r(m),{class:"dark:bg-zinc-800 dark:text-zinc-400 border-b-zinc-400 border-b-[1px] w-full outline-0 pb-1 px-1 text-base focus:border-b-main dark:focus:border-b-zinc-200 xl:dark:bg-zinc-900",name:"confirmPassword",type:"password",placeholder:"\u786E\u8BA4\u5BC6\u7801",autocomplete:"on",rules:"validateConfirmPassword:@password",modelValue:l.value.confirmPassword,"onUpdate:modelValue":t[2]||(t[2]=d=>l.value.confirmPassword=d)},null,8,["modelValue"]),o(r(b),{class:"text-sm text-red-600 block mt-0.5 text-left",name:"confirmPassword"}),n("div",{class:"pt-1 pb-3 leading-[0px] text-right"},[n("div",{class:"mb-2"},[n("a",{class:"inline-block p-1 text-zinc-400 text-right dark:text-zinc-600 hover:text-zinc-600 dark:hover:text-zinc-400 text-sm duration-400 cursor-pointer",target:"__black",onClick:z}," \u53BB\u767B\u5F55 ")]),t[3]||(t[3]=n("div",{class:"text-center"},[n("a",{class:"text-zinc-400 dark:text-zinc-600 hover:text-zinc-600 dark:hover:text-zinc-400 text-sm duration-400",href:"https://m.imooc.com/newfaq?id=89",target:"__black"}," \u6CE8\u518C\u5373\u540C\u610F\u300A\u6155\u8BFE\u7F51\u6CE8\u518C\u534F\u8BAE\u300B ")],-1))]),o(h,{class:"w-full dark:bg-zinc-900 xl:dark:bg-zinc-800",isActiveAnim:!1,loading:c.value},{default:w(()=>t[4]||(t[4]=[Y(" \u7ACB\u5373\u6CE8\u518C ")])),_:1},8,["loading"])]),_:1})])])}}};export{K as default};