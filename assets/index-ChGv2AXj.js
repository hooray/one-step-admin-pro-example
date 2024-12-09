
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.hurui.me
 */
    
import{_ as R}from"./index.vue_vue_type_script_setup_true_lang-Bervnd7v.js";import{_ as B}from"./index.vue_vue_type_script_setup_true_lang-ChZ28WVx.js";import{_ as F}from"./index.vue_vue_type_script_setup_true_lang-Buj60MwG.js";import{e as G,f as I,o as S,c as j,a as e,w as t,r as u,b as i,d as v,u as o}from"./index-mFYeOg6f.js";const O=G({__name:"index",setup(N){const a=I({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""});return(T,l)=>{const x=F,r=u("ElInput"),n=u("ElFormItem"),s=u("ElOption"),f=u("ElSelect"),b=u("ElDatePicker"),p=u("ElCol"),y=u("ElTimePicker"),_=u("ElSwitch"),m=u("ElCheckbox"),E=u("ElCheckboxGroup"),V=u("ElRadio"),U=u("ElRadioGroup"),w=u("ElForm"),k=u("ElRow"),C=B,g=u("ElButton"),P=R;return S(),j("div",null,[e(P,null,{action:t(()=>[e(g,{type:"primary",size:"large"},{default:t(()=>l[28]||(l[28]=[i(" 立即创建 ")])),_:1}),e(g,{size:"large"},{default:t(()=>l[29]||(l[29]=[i(" 取消 ")])),_:1})]),default:t(()=>[e(x,{title:"固定底部操作栏",content:"避免因页面过长导致操作按钮需要滚动到页面底部才能操作，例如表单页",style:{margin:"0 0 20px"}},{content:t(()=>l[24]||(l[24]=[v("p",null,"ActionContainer",-1),v("p",{style:{"margin-bottom":"0"}}," 避免因页面过长导致操作按钮需要滚动到页面底部才能操作，例如表单页 ",-1)])),_:1}),e(C,null,{default:t(()=>[e(k,null,{default:t(()=>[e(p,{md:24,lg:12},{default:t(()=>[e(w,{ref_key:"form",ref:a,model:o(a),"label-width":"120px"},{default:t(()=>[e(n,{label:"活动名称"},{default:t(()=>[e(r,{modelValue:o(a).name,"onUpdate:modelValue":l[0]||(l[0]=d=>o(a).name=d)},null,8,["modelValue"])]),_:1}),e(n,{label:"活动区域"},{default:t(()=>[e(f,{modelValue:o(a).region,"onUpdate:modelValue":l[1]||(l[1]=d=>o(a).region=d),placeholder:"请选择活动区域"},{default:t(()=>[e(s,{label:"区域一",value:"shanghai"}),e(s,{label:"区域二",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"活动时间"},{default:t(()=>[e(p,{span:11},{default:t(()=>[e(b,{modelValue:o(a).date1,"onUpdate:modelValue":l[2]||(l[2]=d=>o(a).date1=d),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),e(p,{class:"line",span:2},{default:t(()=>l[25]||(l[25]=[i(" - ")])),_:1}),e(p,{span:11},{default:t(()=>[e(y,{modelValue:o(a).date2,"onUpdate:modelValue":l[3]||(l[3]=d=>o(a).date2=d),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{label:"即时配送"},{default:t(()=>[e(_,{modelValue:o(a).delivery,"onUpdate:modelValue":l[4]||(l[4]=d=>o(a).delivery=d)},null,8,["modelValue"])]),_:1}),e(n,{label:"活动性质"},{default:t(()=>[e(E,{modelValue:o(a).type,"onUpdate:modelValue":l[5]||(l[5]=d=>o(a).type=d)},{default:t(()=>[e(m,{label:"美食/餐厅线上活动",name:"type"}),e(m,{label:"地推活动",name:"type"}),e(m,{label:"线下主题活动",name:"type"}),e(m,{label:"单纯品牌曝光",name:"type"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"特殊资源"},{default:t(()=>[e(U,{modelValue:o(a).resource,"onUpdate:modelValue":l[6]||(l[6]=d=>o(a).resource=d)},{default:t(()=>[e(V,{label:"线上品牌商赞助"}),e(V,{label:"线下场地免费"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"活动形式"},{default:t(()=>[e(r,{modelValue:o(a).desc,"onUpdate:modelValue":l[7]||(l[7]=d=>o(a).desc=d),type:"textarea"},null,8,["modelValue"])]),_:1}),e(n,{label:"活动名称"},{default:t(()=>[e(r,{modelValue:o(a).name,"onUpdate:modelValue":l[8]||(l[8]=d=>o(a).name=d)},null,8,["modelValue"])]),_:1}),e(n,{label:"活动区域"},{default:t(()=>[e(f,{modelValue:o(a).region,"onUpdate:modelValue":l[9]||(l[9]=d=>o(a).region=d),placeholder:"请选择活动区域"},{default:t(()=>[e(s,{label:"区域一",value:"shanghai"}),e(s,{label:"区域二",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"活动时间"},{default:t(()=>[e(p,{span:11},{default:t(()=>[e(b,{modelValue:o(a).date1,"onUpdate:modelValue":l[10]||(l[10]=d=>o(a).date1=d),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),e(p,{class:"line",span:2},{default:t(()=>l[26]||(l[26]=[i(" - ")])),_:1}),e(p,{span:11},{default:t(()=>[e(y,{modelValue:o(a).date2,"onUpdate:modelValue":l[11]||(l[11]=d=>o(a).date2=d),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{label:"即时配送"},{default:t(()=>[e(_,{modelValue:o(a).delivery,"onUpdate:modelValue":l[12]||(l[12]=d=>o(a).delivery=d)},null,8,["modelValue"])]),_:1}),e(n,{label:"活动性质"},{default:t(()=>[e(E,{modelValue:o(a).type,"onUpdate:modelValue":l[13]||(l[13]=d=>o(a).type=d)},{default:t(()=>[e(m,{label:"美食/餐厅线上活动",name:"type"}),e(m,{label:"地推活动",name:"type"}),e(m,{label:"线下主题活动",name:"type"}),e(m,{label:"单纯品牌曝光",name:"type"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"特殊资源"},{default:t(()=>[e(U,{modelValue:o(a).resource,"onUpdate:modelValue":l[14]||(l[14]=d=>o(a).resource=d)},{default:t(()=>[e(V,{label:"线上品牌商赞助"}),e(V,{label:"线下场地免费"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"活动形式"},{default:t(()=>[e(r,{modelValue:o(a).desc,"onUpdate:modelValue":l[15]||(l[15]=d=>o(a).desc=d),type:"textarea"},null,8,["modelValue"])]),_:1}),e(n,{label:"活动名称"},{default:t(()=>[e(r,{modelValue:o(a).name,"onUpdate:modelValue":l[16]||(l[16]=d=>o(a).name=d)},null,8,["modelValue"])]),_:1}),e(n,{label:"活动区域"},{default:t(()=>[e(f,{modelValue:o(a).region,"onUpdate:modelValue":l[17]||(l[17]=d=>o(a).region=d),placeholder:"请选择活动区域"},{default:t(()=>[e(s,{label:"区域一",value:"shanghai"}),e(s,{label:"区域二",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"活动时间"},{default:t(()=>[e(p,{span:11},{default:t(()=>[e(b,{modelValue:o(a).date1,"onUpdate:modelValue":l[18]||(l[18]=d=>o(a).date1=d),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),e(p,{class:"line",span:2},{default:t(()=>l[27]||(l[27]=[i(" - ")])),_:1}),e(p,{span:11},{default:t(()=>[e(y,{modelValue:o(a).date2,"onUpdate:modelValue":l[19]||(l[19]=d=>o(a).date2=d),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{label:"即时配送"},{default:t(()=>[e(_,{modelValue:o(a).delivery,"onUpdate:modelValue":l[20]||(l[20]=d=>o(a).delivery=d)},null,8,["modelValue"])]),_:1}),e(n,{label:"活动性质"},{default:t(()=>[e(E,{modelValue:o(a).type,"onUpdate:modelValue":l[21]||(l[21]=d=>o(a).type=d)},{default:t(()=>[e(m,{label:"美食/餐厅线上活动",name:"type"}),e(m,{label:"地推活动",name:"type"}),e(m,{label:"线下主题活动",name:"type"}),e(m,{label:"单纯品牌曝光",name:"type"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"特殊资源"},{default:t(()=>[e(U,{modelValue:o(a).resource,"onUpdate:modelValue":l[22]||(l[22]=d=>o(a).resource=d)},{default:t(()=>[e(V,{label:"线上品牌商赞助"}),e(V,{label:"线下场地免费"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"活动形式"},{default:t(()=>[e(r,{modelValue:o(a).desc,"onUpdate:modelValue":l[23]||(l[23]=d=>o(a).desc=d),type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})]),_:1})]),_:1})])}}});export{O as default};
