
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.hurui.me
 */
    
import{_ as b}from"./index.vue_vue_type_script_setup_true_lang-ChZ28WVx.js";import{_ as w}from"./index.vue_vue_type_script_setup_true_lang-Buj60MwG.js";import{e as W,N as v,p as x,o as C,c as R,a as e,w as o,r as n,u as r,i as V,b as s,A as d,B as _,T as Y}from"./index-mFYeOg6f.js";import{u as D}from"./watermark-DnuYr9Sf.js";const P=W({__name:"index",setup(H){const l=v(),u=D(),a=x({get(){return l.settings.app.enableWatermark},set(m){l.$patch(t=>{t.settings.app.enableWatermark=m})}});function f(){u.update({content:Y().format("YYYY-MM-DD HH:mm:ss")})}function c(){u.update()}return(m,t)=>{const k=w,p=n("ElRadioButton"),E=n("ElRadioGroup"),i=n("ElButton"),S=n("ElSpace"),g=b;return C(),R("div",null,[e(k,{title:"页面水印",content:"在某些场景下，不希望用户将系统里的信息随意截图并转发，这时可开启页面水印，以减少这种情况发生"}),e(g,{title:"可在 /src/store/modules/watermark.ts 文件里定制水印文案内容"},{default:o(()=>[e(S,null,{default:o(()=>[e(E,{modelValue:r(a),"onUpdate:modelValue":t[0]||(t[0]=B=>V(a)?a.value=B:null)},{default:o(()=>[e(p,{label:!0},{default:o(()=>t[1]||(t[1]=[s(" 开启 ")])),_:1}),e(p,{label:!1},{default:o(()=>t[2]||(t[2]=[s(" 关闭 ")])),_:1})]),_:1},8,["modelValue"]),d(e(i,{onClick:f},{default:o(()=>t[3]||(t[3]=[s(" 更新水印 ")])),_:1},512),[[_,r(a)]]),d(e(i,{onClick:c},{default:o(()=>t[4]||(t[4]=[s(" 重置水印 ")])),_:1},512),[[_,r(a)]])]),_:1})]),_:1})])}}});export{P as default};
