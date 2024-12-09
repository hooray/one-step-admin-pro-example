
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.hurui.me
 */
    
import{_}from"./index.vue_vue_type_script_setup_true_lang-ChZ28WVx.js";import{e as l,X as p,o as d,c as f,a as e,w as t,r as b,d as g,t as B,u as x,b as i,_ as C}from"./index-mFYeOg6f.js";import{_ as N}from"./index.vue_vue_type_script_setup_true_lang-Buj60MwG.js";const V=l({__name:"index",setup(k){const n=p();function m(){n.setNumber(n.number+1)}function r(){n.setNumber(n.number-1)}return(v,o)=>{const u=N,a=C,s=b("ElButton"),c=_;return d(),f("div",null,[e(u,{title:"数字标记",content:"搭配 Pinia 可实现动态设置。请控制数字展示长度，避免导航标记覆盖导航标题，为 0 时则隐藏"}),e(c,null,{default:t(()=>[g("div",null,"当前 badge 值："+B(x(n).number),1),e(s,{onClick:m},{icon:t(()=>[e(a,{name:"i-ep:plus"})]),default:t(()=>[o[0]||(o[0]=i(" 1 "))]),_:1}),e(s,{onClick:r},{icon:t(()=>[e(a,{name:"i-ep:minus"})]),default:t(()=>[o[1]||(o[1]=i(" 1 "))]),_:1})]),_:1})])}}});export{V as default};
