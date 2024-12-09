
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.hurui.me
 */
    
import{e as u,H as f,f as g,o as a,c as o,x as n,y as l,d as m,u as s,a as b,q as h,z as v,_,b as y,t as k}from"./index-mFYeOg6f.js";const x={key:0,class:"title-container bg-[var(--g-main-bg)] px-5 py-4 transition-background-color"},C={class:"main-container p-5"},N=u({name:"PageMain",__name:"index",props:{title:{default:""},collaspe:{type:Boolean,default:!1},height:{default:""}},setup(r){const i=r,c=!!f().title,t=g(i.collaspe);function p(){t.value=!1}return(e,S)=>{const d=_;return a(),o("div",{class:h(["page-main relative flex flex-col bg-[var(--g-app-bg)] transition-background-color",{"of-hidden":s(t)}]),style:v({height:s(t)?e.height:""})},[c||e.title?(a(),o("div",x,[n(e.$slots,"title",{},()=>[y(k(e.title),1)])])):l("",!0),m("div",C,[n(e.$slots,"default")]),s(t)?(a(),o("div",{key:1,class:"collaspe absolute bottom-0 w-full cursor-pointer from-transparent to-[var(--g-app-bg)] bg-gradient-to-b pb-2 pt-10 text-center",onClick:p},[b(d,{name:"i-ep:arrow-down",class:"text-xl op-30 transition-opacity hover-op-100"})])):l("",!0)],6)}}});export{N as _};
