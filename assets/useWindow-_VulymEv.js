
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.hurui.me
 */
    
import{aI as l,k as f}from"./index-mFYeOg6f.js";function c(){const i=l();function n(e){i.allMinimize(),i.add(e),f.emit("scrollToWindow",typeof e=="string"?e:e.name)}function r(e){i.remove(e)}function a(e){i.toggleMaximize(e)}function s(e){let o=!1;return i.list.map(t=>(t.name===e&&(o=!!t.isMaximize),t)),o}function u(e){i.reload(e),setTimeout(()=>{i.reload(e)},0)}return{add:n,remove:r,toggleMaximize:a,isMaximize:s,reload:u}}export{c as u};
