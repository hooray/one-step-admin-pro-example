
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.hurui.me
 */
    
import{_ as c}from"./HButton.vue_vue_type_script_setup_true_lang-BW-qOQFl.js";import{e as u,f as i,aO as d,G as f,o as x,c as _,a as o,d as n,w as m,aL as p,_ as v,b as w,t as g,u as B}from"./index-mFYeOg6f.js";const N={class:"absolute left-[50%] top-[50%] flex flex-col items-center justify-between lg:flex-row -translate-x-50% -translate-y-50% lg:gap-12"},b={class:"flex flex-col gap-4"},V=u({__name:"404",setup(k){const s=p(),e=i({inter:Number.NaN,countdown:5});d(()=>{e.value.inter&&window.clearInterval(e.value.inter)}),f(()=>{e.value.inter=window.setInterval(()=>{e.value.countdown--,e.value.countdown===0&&(e.value.inter&&window.clearInterval(e.value.inter),a())},1e3)});function a(){s.push("/")}return(I,t)=>{const l=v,r=c;return x(),_("div",N,[o(l,{name:"404",class:"text-[300px] lg:text-[400px]"}),n("div",b,[t[0]||(t[0]=n("h1",{class:"m-0 text-6xl font-sans"}," 404 ",-1)),t[1]||(t[1]=n("div",{class:"desc mx-0 text-xl text-stone-5"}," 抱歉，你访问的页面不存在 ",-1)),n("div",null,[o(r,{onClick:a},{default:m(()=>[w(g(B(e).countdown)+" 秒后，返回首页 ",1)]),_:1})])])])}}});export{V as default};
