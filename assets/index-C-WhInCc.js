
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.hurui.me
 */
    
import{_ as p}from"./index.vue_vue_type_script_setup_true_lang-ChZ28WVx.js";import{_ as u}from"./index.vue_vue_type_script_setup_true_lang-Buj60MwG.js";import{e as f,I as d,o as k,c as g,a as e,w as n,r as x,b as a,aE as C,_ as E}from"./index-mFYeOg6f.js";const B=f({__name:"index",setup(M){const i=d();function r(){i.getPermissions().then(t=>{C({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:t.map(o=>`<p>${o}</p>`).join("")})})}function m(t){window.open(t,"top")}return(t,o)=>{const c=E,s=x("ElButton"),_=u,l=p;return k(),g("div",null,[e(_,{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"},{default:n(()=>[e(s,{onClick:o[0]||(o[0]=$=>m("http://mockjs.com/"))},{icon:n(()=>[e(c,{name:"i-ep:link"})]),default:n(()=>[o[1]||(o[1]=a(" Mock.js 官网 "))]),_:1})]),_:1}),e(l,null,{default:n(()=>[e(s,{onClick:r},{default:n(()=>o[2]||(o[2]=[a(" 测试：获取用户权限 ")])),_:1})]),_:1})])}}});export{B as default};
