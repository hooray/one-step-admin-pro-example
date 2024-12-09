
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.hurui.me
 */
    
import{_ as ie}from"./index.vue_vue_type_script_setup_true_lang-ChZ28WVx.js";import{_ as de}from"./index.vue_vue_type_script_setup_true_lang-DjF5febJ.js";import{aF as $,e as A,f as S,D as J,G as O,E as H,r as d,W as Q,A as R,u as o,o as _,c as K,a as t,w as a,m as q,n as re,p as ue,h as k,y as D,b as i,s as W,q as me,d as w,aG as L,t as pe,aH as fe,_ as ge,B as G}from"./index-mFYeOg6f.js";import{_ as be}from"./index.vue_vue_type_script_setup_true_lang-Buj60MwG.js";import{u as ve}from"./usePagination-Bo0a2Msc.js";import{_ as ce}from"./_plugin-vue_export-helper-DlAUqK2U.js";const B={list:p=>$.get("standard_module/list",{params:p,baseURL:"/mock/"}),detail:p=>$.get("standard_module/detail",{params:{id:p},baseURL:"/mock/"}),create:p=>$.post("standard_module/create",p,{baseURL:"/mock/"}),edit:p=>$.post("standard_module/edit",p,{baseURL:"/mock/"}),delete:p=>$.post("standard_module/delete",{id:p},{baseURL:"/mock/"})},j=A({__name:"index",props:{id:{default:""}},setup(p,{expose:v}){const C=p,V=S(!1),c=J("formRef"),f=S({id:C.id,title:""}),l=S({title:[{required:!0,message:"请输入标题",trigger:"blur"}]});O(()=>{f.value.id!==""&&g()});function g(){V.value=!0,B.detail(f.value.id).then(b=>{V.value=!1,f.value.title=b.data.title})}return v({submit(){return new Promise(b=>{var n;(n=c.value)==null||n.validate(r=>{r&&(f.value.id===""?B.create(f.value).then(()=>{H.success({message:"模拟新增成功",center:!0}),b()}):B.edit(f.value).then(()=>{H.success({message:"模拟编辑成功",center:!0}),b()}))})})}}),(b,n)=>{const r=d("ElInput"),y=d("ElFormItem"),z=d("ElForm"),x=Q("loading");return R((_(),K("div",null,[t(z,{ref_key:"formRef",ref:c,model:o(f),rules:o(l),"label-width":"120px","label-suffix":"："},{default:a(()=>[t(y,{label:"标题",prop:"title"},{default:a(()=>[t(r,{modelValue:o(f).title,"onUpdate:modelValue":n[0]||(n[0]=s=>o(f).title=s),placeholder:"请输入标题"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])])),[[x,o(V)]])}}}),_e=A({__name:"index",props:q({mode:{},id:{}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:q(["success"],["update:modelValue"]),setup(p,{emit:v}){const C=p,V=v,c=re(p,"modelValue"),f=J("formRef"),l=ue(()=>C.id===""?"新增":"编辑");function g(){var n;(n=f.value)==null||n.submit().then(()=>{V("success"),b()})}function b(){c.value=!1}return(n,r)=>{const y=d("ElButton"),z=d("ElDialog"),x=d("ElDrawer");return _(),K("div",null,[C.mode==="dialog"?(_(),k(z,{key:0,modelValue:c.value,"onUpdate:modelValue":r[0]||(r[0]=s=>c.value=s),title:o(l),width:"600px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:a(()=>[t(y,{size:"large",onClick:b},{default:a(()=>r[2]||(r[2]=[i(" 取消 ")])),_:1}),t(y,{type:"primary",size:"large",onClick:g},{default:a(()=>r[3]||(r[3]=[i(" 确定 ")])),_:1})]),default:a(()=>[t(j,W({ref_key:"formRef",ref:f},n.$props),null,16)]),_:1},8,["modelValue","title"])):C.mode==="drawer"?(_(),k(x,{key:1,modelValue:c.value,"onUpdate:modelValue":r[1]||(r[1]=s=>c.value=s),title:o(l),size:"600px","close-on-click-modal":!1,"destroy-on-close":""},{footer:a(()=>[t(y,{size:"large",onClick:b},{default:a(()=>r[4]||(r[4]=[i(" 取消 ")])),_:1}),t(y,{type:"primary",size:"large",onClick:g},{default:a(()=>r[5]||(r[5]=[i(" 确定 ")])),_:1})]),default:a(()=>[t(j,W({ref_key:"formRef",ref:f},n.$props),null,16)]),_:1},8,["modelValue","title"])):D("",!0)])}}}),ye={style:{display:"flex","align-items":"center"}},Ee={style:{display:"flex","align-items":"center","margin-bottom":"0"}},Ce=A({__name:"index",setup(p){const{pagination:v,getParams:C,onSizeChange:V,onCurrentChange:c,onSortChange:f}=ve(),l=S({loading:!1,tableAutoHeight:!1,formMode:"dialog",formModeProps:{visible:!1,id:""},search:{title:"",title2:"",title3:"",title4:""},batch:{enable:!1,selectionDataList:[]},dataList:[]});O(()=>{g()});function g(){l.value.loading=!0;const s={...C(),...l.value.search.title&&{title:l.value.search.title}};B.list(s).then(e=>{l.value.loading=!1,l.value.dataList=e.data.list,v.value.total=e.data.total})}function b(s){V(s).then(()=>g())}function n(s=1){c(s).then(()=>g())}function r({prop:s,order:e}){f(s,e).then(()=>g())}function y(){l.value.formModeProps.id="",l.value.formModeProps.visible=!0}function z(s){l.value.formModeProps.id=s.id,l.value.formModeProps.visible=!0}function x(s){fe.confirm(`确认删除「${s.title}」吗？`,"确认信息").then(()=>{B.delete(s.id).then(()=>{g(),H.success({message:"模拟删除成功",center:!0})})}).catch(()=>{})}return(s,e)=>{const X=d("ElTag"),P=d("ElRadioButton"),N=d("ElRadioGroup"),Y=be,U=d("ElInput"),M=d("ElFormItem"),I=ge,E=d("ElButton"),Z=d("ElForm"),h=de,ee=d("ElDivider"),te=d("ElButtonGroup"),le=d("ElSpace"),F=d("ElTableColumn"),oe=d("ElTable"),ae=d("ElPagination"),ne=ie,se=Q("loading");return _(),K("div",{class:me({"absolute-container":o(l).tableAutoHeight})},[t(Y,{title:"标准模块"},{content:a(()=>[w("p",null,[e[18]||(e[18]=i("标准模块即包含 CRUD (增查改删) 操作的基础模块，开发者可通过 ")),t(X,null,{default:a(()=>e[17]||(e[17]=[i("pnpm run new")])),_:1}),e[19]||(e[19]=i(" 命令快速生成一个标准模块，并在此基础上完善业务模块所需要的功能。"))]),e[26]||(e[26]=w("p",null,"同时，标准模块还提供了两个优秀的特性：",-1)),w("p",ye,[e[22]||(e[22]=w("span",{style:{"margin-inline-end":"20px"}},"特性1：列表展示模式",-1)),t(N,{modelValue:o(l).tableAutoHeight,"onUpdate:modelValue":e[0]||(e[0]=u=>o(l).tableAutoHeight=u),size:"default"},{default:a(()=>[t(P,{label:!1},{default:a(()=>e[20]||(e[20]=[i(" 默认 ")])),_:1}),t(P,{label:!0},{default:a(()=>e[21]||(e[21]=[i(" 列表高度自适应 ")])),_:1})]),_:1},8,["modelValue"])]),w("p",Ee,[e[25]||(e[25]=w("span",{style:{"margin-inline-end":"20px"}},"特性2：表单展示模式",-1)),t(N,{modelValue:o(l).formMode,"onUpdate:modelValue":e[1]||(e[1]=u=>o(l).formMode=u),size:"default"},{default:a(()=>[t(P,{label:"dialog"},{default:a(()=>e[23]||(e[23]=[i(" 对话框 ")])),_:1}),t(P,{label:"drawer"},{default:a(()=>e[24]||(e[24]=[i(" 抽屉 ")])),_:1})]),_:1},8,["modelValue"])])]),_:1}),t(ne,null,{default:a(()=>[t(h,{"show-toggle":!1},{default:a(({fold:u,toggle:T})=>[t(Z,{model:o(l).search,size:"default","label-width":"100px","inline-message":"",inline:"",class:"search-form"},{default:a(()=>[t(M,{label:"标题"},{default:a(()=>[t(U,{modelValue:o(l).search.title,"onUpdate:modelValue":e[2]||(e[2]=m=>o(l).search.title=m),placeholder:"请输入标题，支持模糊查询",clearable:"",onKeydown:e[3]||(e[3]=L(m=>n(),["enter"])),onClear:e[4]||(e[4]=m=>n())},null,8,["modelValue"])]),_:1}),R(t(M,{label:"标题2"},{default:a(()=>[t(U,{modelValue:o(l).search.title2,"onUpdate:modelValue":e[5]||(e[5]=m=>o(l).search.title2=m),placeholder:"请输入标题，支持模糊查询",clearable:"",onKeydown:e[6]||(e[6]=L(m=>n(),["enter"])),onClear:e[7]||(e[7]=m=>n())},null,8,["modelValue"])]),_:2},1536),[[G,!u]]),R(t(M,{label:"标题3"},{default:a(()=>[t(U,{modelValue:o(l).search.title3,"onUpdate:modelValue":e[8]||(e[8]=m=>o(l).search.title3=m),placeholder:"请输入标题，支持模糊查询",clearable:"",onKeydown:e[9]||(e[9]=L(m=>n(),["enter"])),onClear:e[10]||(e[10]=m=>n())},null,8,["modelValue"])]),_:2},1536),[[G,!u]]),R(t(M,{label:"标题4"},{default:a(()=>[t(U,{modelValue:o(l).search.title4,"onUpdate:modelValue":e[11]||(e[11]=m=>o(l).search.title4=m),placeholder:"请输入标题，支持模糊查询",clearable:"",onKeydown:e[12]||(e[12]=L(m=>n(),["enter"])),onClear:e[13]||(e[13]=m=>n())},null,8,["modelValue"])]),_:2},1536),[[G,!u]]),t(M,null,{default:a(()=>[t(E,{type:"primary",onClick:e[14]||(e[14]=m=>n())},{icon:a(()=>[t(I,{name:"i-ep:search"})]),default:a(()=>[e[27]||(e[27]=i(" 筛选 "))]),_:1}),t(E,{link:"",onClick:T},{icon:a(()=>[t(I,{name:u?"i-ep:caret-bottom":"i-ep:caret-top"},null,8,["name"])]),default:a(()=>[i(" "+pe(u?"展开":"收起"),1)]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["model"])]),_:1}),t(ee,{"border-style":"dashed"}),t(le,{wrap:""},{default:a(()=>[t(E,{type:"primary",size:"default",onClick:y},{icon:a(()=>[t(I,{name:"i-ep:plus"})]),default:a(()=>[e[28]||(e[28]=i(" 新增 "))]),_:1}),o(l).batch.enable?(_(),k(E,{key:0,size:"default",disabled:!o(l).batch.selectionDataList.length},{default:a(()=>e[29]||(e[29]=[i(" 单个批量操作按钮 ")])),_:1},8,["disabled"])):D("",!0),o(l).batch.enable?(_(),k(te,{key:1},{default:a(()=>[t(E,{size:"default",disabled:!o(l).batch.selectionDataList.length},{default:a(()=>e[30]||(e[30]=[i(" 批量操作按钮组1 ")])),_:1},8,["disabled"]),t(E,{size:"default",disabled:!o(l).batch.selectionDataList.length},{default:a(()=>e[31]||(e[31]=[i(" 批量操作按钮组2 ")])),_:1},8,["disabled"])]),_:1})):D("",!0)]),_:1}),R((_(),k(oe,{class:"my-4",data:o(l).dataList,stripe:"","highlight-current-row":"",border:"",height:"100%",onSortChange:r,onSelectionChange:e[15]||(e[15]=u=>o(l).batch.selectionDataList=u)},{default:a(()=>[o(l).batch.enable?(_(),k(F,{key:0,type:"selection",align:"center",fixed:""})):D("",!0),t(F,{prop:"title",label:"标题"}),t(F,{label:"操作",width:"250",align:"center",fixed:"right"},{default:a(u=>[t(E,{type:"primary",size:"small",plain:"",onClick:T=>z(u.row)},{default:a(()=>e[32]||(e[32]=[i(" 编辑 ")])),_:2},1032,["onClick"]),t(E,{type:"danger",size:"small",plain:"",onClick:T=>x(u.row)},{default:a(()=>e[33]||(e[33]=[i(" 删除 ")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[se,o(l).loading]]),t(ae,{"current-page":o(v).page,total:o(v).total,"page-size":o(v).size,"page-sizes":o(v).sizes,layout:o(v).layout,"hide-on-single-page":!1,class:"pagination",background:"",onSizeChange:b,onCurrentChange:n},null,8,["current-page","total","page-size","page-sizes","layout"])]),_:1}),o(l).formMode==="dialog"||o(l).formMode==="drawer"?(_(),k(_e,{key:0,id:o(l).formModeProps.id,modelValue:o(l).formModeProps.visible,"onUpdate:modelValue":e[16]||(e[16]=u=>o(l).formModeProps.visible=u),mode:o(l).formMode,onSuccess:g},null,8,["id","modelValue","mode"])):D("",!0)],2)}}}),$e=ce(Ce,[["__scopeId","data-v-ae11affe"]]);export{$e as default};
