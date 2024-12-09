
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.hurui.me
 */
    
import{aF as t}from"./index-mFYeOg6f.js";const m={list:e=>t.get("department/list",{params:e,baseURL:"/mock/"}),detail:e=>t.get("department/detail",{params:{id:e},baseURL:"/mock/"}),create:e=>t.post("department/create",e,{baseURL:"/mock/"}),edit:e=>t.post("department/edit",e,{baseURL:"/mock/"}),delete:e=>t.post("department/delete",{id:e},{baseURL:"/mock/"})};export{m as a};
