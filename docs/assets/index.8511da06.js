import{k as a,l as r}from"./vendor.a2a2daf1.js";import l from"./index.4e52ff3c.js";const b=(o,n,c="\u53D6\u6D88",e="\u786E\u5B9A")=>new Promise((m,s)=>{o&&!n&&(n=o,o="");const d=a(l,{title:o,content:n,cancelText:c,confirmText:e,confirmHandler:()=>{m()},cancelHandler:()=>{s(new Error("\u53D6\u6D88\u6309\u94AE\u70B9\u51FB"))},close:()=>{r(null,document.body)}});r(d,document.body)});export{b as c};
