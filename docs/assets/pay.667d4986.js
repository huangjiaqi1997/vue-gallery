import{s as r}from"./index.0fb4ead6.js";const p=()=>r({url:"/user/vip/pay/list"}),i=(s,a,t,e)=>r({url:"/user/alipay",params:{subject:s,totalAmount:a,body:t,isMobile:e}}),l=s=>r({url:"/sys/pay/result",params:{out_trade_no:s}});export{p as a,l as b,i as g};
