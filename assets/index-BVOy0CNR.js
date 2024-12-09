
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.hurui.me
 */
    
import{_ as $}from"./index.vue_vue_type_script_setup_true_lang-ChZ28WVx.js";import{_ as b}from"./index.vue_vue_type_script_setup_true_lang-Buj60MwG.js";import{e as g,f as r,K as k,o as w,c as B,a as o,w as t,r as d,b as _,u as s,i as f,E as I,_ as M}from"./index-mFYeOg6f.js";import{u as N}from"./index-D_1yZaZk.js";const R=g({__name:"index",setup(P){const l=r(""),u=r(""),{text:c,copy:v,copied:V}=N();k(V,a=>{a&&I.success(`复制成功：${c.value}`)});function E(a){window.open(a,"top")}return(a,e)=>{const x=M,p=d("ElButton"),C=b,i=d("ElInput"),m=$;return w(),B("div",null,[o(C,{title:"剪贴板"},{default:t(()=>[o(p,{onClick:e[0]||(e[0]=n=>E("https://github.com/soerenmartius/vue3-clipboard"))},{icon:t(()=>[o(x,{name:"i-ep:link"})]),default:t(()=>[e[4]||(e[4]=_(" vue3-clipboard 官网 "))]),_:1})]),_:1}),o(m,{title:"输入内容，并点击复制按钮"},{default:t(()=>[o(i,{modelValue:s(l),"onUpdate:modelValue":e[2]||(e[2]=n=>f(l)?l.value=n:null)},{append:t(()=>[o(p,{onClick:e[1]||(e[1]=n=>s(v)(s(l)))},{default:t(()=>e[5]||(e[5]=[_(" 复制 ")])),_:1})]),_:1},8,["modelValue"])]),_:1}),o(m,{title:"复制成功后可在这粘贴测试"},{default:t(()=>[o(i,{modelValue:s(u),"onUpdate:modelValue":e[3]||(e[3]=n=>f(u)?u.value=n:null)},null,8,["modelValue"])]),_:1})])}}});export{R as default};
