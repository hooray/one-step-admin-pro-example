
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.hurui.me
 */
    
import{_ as r}from"./index.vue_vue_type_script_setup_true_lang-ChZ28WVx.js";import{_ as d}from"./HButton.vue_vue_type_script_setup_true_lang-BW-qOQFl.js";import{e as g,o as $,c as k,a as o,w as e,b as m,_ as C}from"./index-mFYeOg6f.js";import{_ as x}from"./index.vue_vue_type_script_setup_true_lang-Buj60MwG.js";import{u as P}from"./notification-lxuTCVAt.js";const H=g({__name:"index",setup(B){const s=P();function c(){s.$patch(t=>{t.message+=1})}function l(){s.$patch(t=>{t.message-=t.message>0?1:0})}function _(){s.$patch(t=>{t.todo+=1})}function f(){s.$patch(t=>{t.todo-=t.todo>0?1:0})}return(t,n)=>{const p=x,i=C,a=d,u=r;return $(),k("div",null,[o(p,{title:"通知中心",content:"本页面仅模拟右上角通知数变化，具体业务逻辑请到 /src/store/modules/notification.ts 文件中编写"}),o(u,{title:"消息"},{default:e(()=>[o(a,{onClick:c},{default:e(()=>[o(i,{name:"i-ep:plus"}),n[0]||(n[0]=m(" 1 "))]),_:1}),o(a,{"ml-2":"",onClick:l},{default:e(()=>[o(i,{name:"i-ep:minus"}),n[1]||(n[1]=m(" 1 "))]),_:1})]),_:1}),o(u,{title:"待办"},{default:e(()=>[o(a,{onClick:_},{default:e(()=>[o(i,{name:"i-ep:plus"}),n[2]||(n[2]=m(" 1 "))]),_:1}),o(a,{"ml-2":"",onClick:f},{default:e(()=>[o(i,{name:"i-ep:minus"}),n[3]||(n[3]=m(" 1 "))]),_:1})]),_:1})])}}});export{H as default};
