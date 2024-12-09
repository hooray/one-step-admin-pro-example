
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.hurui.me
 */
    
import{e as i,m as a,n as u,o as n,c as l,x as m,d as g,a as f,y as p,q as b,_ as v}from"./index-mFYeOg6f.js";const _={key:0,class:"absolute bottom-0 left-0 w-full translate-y-1/2 text-center"},B=i({name:"SearchBar",__name:"index",props:a({showToggle:{type:Boolean,default:!0},background:{type:Boolean,default:!1}},{fold:{type:Boolean,default:!0},foldModifiers:{}}),emits:a(["toggle"],["update:fold"]),setup(s,{emit:r}){const d=r,e=u(s,"fold");function t(){e.value=!e.value,d("toggle",e.value)}return(o,h)=>{const c=v;return n(),l("div",{class:b(["relative",{"py-4":o.showToggle,"px-4 bg-[var(--g-bg)] transition":o.background}])},[m(o.$slots,"default",{fold:e.value,toggle:t}),o.showToggle?(n(),l("div",_,[g("button",{class:"h-5 inline-flex cursor-pointer select-none items-center border-size-0 rounded bg-[var(--g-main-bg)] px-2 text-xs font-medium outline-none",onClick:t},[f(c,{name:e.value?"i-ep:caret-bottom":"i-ep:caret-top"},null,8,["name"])])])):p("",!0)],2)}}});export{B as _};
