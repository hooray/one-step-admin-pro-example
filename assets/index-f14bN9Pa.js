
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.hurui.me
 */
    
import{_ as R}from"./index.vue_vue_type_script_setup_true_lang-Bervnd7v.js";import{e as T,f as D,p as A,o as m,c as f,a as e,w as l,r as d,b as r,u as n,h as y,t as V,F as G,_ as N}from"./index-mFYeOg6f.js";import{_ as S}from"./index.vue_vue_type_script_setup_true_lang-ChZ28WVx.js";import{_ as H}from"./index.vue_vue_type_script_setup_true_lang-Cvjk0nJl.js";import{_ as j}from"./index.vue_vue_type_script_setup_true_lang-Buj60MwG.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";const J={key:1},K={key:1},L={key:1},O=T({__name:"index",setup(Q){const t=D({name:"",sex:1,birthday:"",idcard:"",area:[],address:"",familyMember:[{isEdit:!1,name:"张三",mobile:"13111111111",relationship:"父亲"},{isEdit:!1,name:"李四",mobile:"13122222222",relationship:"母亲"}]}),k=A(()=>t.value.familyMember.every(b=>!b.isEdit));function C(){t.value.familyMember.push({isEdit:!0,name:"",mobile:"",relationship:""})}function x(b){t.value.familyMember.splice(b,1)}return(b,a)=>{const v=j,s=d("ElInput"),u=d("ElFormItem"),p=d("ElCol"),U=d("ElDatePicker"),c=d("ElRadioButton"),g=d("ElRadioGroup"),F=H,M=d("ElRow"),w=S,E=d("ElTableColumn"),_=d("ElButton"),$=d("ElPopconfirm"),B=d("ElTable"),P=N,z=d("ElForm"),I=R;return m(),f("div",null,[e(I,null,{action:l(()=>[e(_,{type:"primary"},{default:l(()=>a[12]||(a[12]=[r(" 提交 ")])),_:1})]),default:l(()=>[e(v,{title:"高级表单",content:"当一次性提交大量数据时，可使用高级表单。"}),e(z,{"label-position":"top","label-width":"80px"},{default:l(()=>[e(w,{title:"员工信息"},{default:l(()=>[e(M,{gutter:20},{default:l(()=>[e(p,{md:8},{default:l(()=>[e(u,{label:"姓名"},{default:l(()=>[e(s,{modelValue:n(t).name,"onUpdate:modelValue":a[0]||(a[0]=o=>n(t).name=o),placeholder:"请输入真实姓名"},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{md:8},{default:l(()=>[e(u,{label:"生日"},{default:l(()=>[e(U,{modelValue:n(t).birthday,"onUpdate:modelValue":a[1]||(a[1]=o=>n(t).birthday=o),type:"date",placeholder:"请选择你的出生日期"},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{md:8},{default:l(()=>[e(u,{label:"性别"},{default:l(()=>[e(g,{modelValue:n(t).sex,"onUpdate:modelValue":a[2]||(a[2]=o=>n(t).sex=o)},{default:l(()=>[e(c,{label:"1"},{default:l(()=>a[6]||(a[6]=[r(" 男 ")])),_:1}),e(c,{label:"0"},{default:l(()=>a[7]||(a[7]=[r(" 女 ")])),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(p,{md:8},{default:l(()=>[e(u,{label:"身份证号"},{default:l(()=>[e(s,{modelValue:n(t).idcard,"onUpdate:modelValue":a[3]||(a[3]=o=>n(t).idcard=o),placeholder:"请输入18位身份证号"},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{md:8},{default:l(()=>[e(u,{label:"籍贯"},{default:l(()=>[e(F,{modelValue:n(t).area,"onUpdate:modelValue":a[4]||(a[4]=o=>n(t).area=o)},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{md:8},{default:l(()=>[e(u,{label:"家庭住址"},{default:l(()=>[e(s,{modelValue:n(t).address,"onUpdate:modelValue":a[5]||(a[5]=o=>n(t).address=o),placeholder:"请输入家庭住址"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(w,{title:"家庭成员"},{default:l(()=>[e(B,{data:n(t).familyMember,style:{width:"100%"}},{default:l(()=>[e(E,{label:"姓名"},{default:l(o=>[o.row.isEdit?(m(),y(s,{key:0,modelValue:o.row.name,"onUpdate:modelValue":i=>o.row.name=i,size:"small"},null,8,["modelValue","onUpdate:modelValue"])):(m(),f("span",J,V(o.row.name),1))]),_:1}),e(E,{label:"手机号"},{default:l(o=>[o.row.isEdit?(m(),y(s,{key:0,modelValue:o.row.mobile,"onUpdate:modelValue":i=>o.row.mobile=i,size:"small"},null,8,["modelValue","onUpdate:modelValue"])):(m(),f("span",K,V(o.row.mobile),1))]),_:1}),e(E,{label:"关系"},{default:l(o=>[o.row.isEdit?(m(),y(s,{key:0,modelValue:o.row.relationship,"onUpdate:modelValue":i=>o.row.relationship=i,size:"small"},null,8,["modelValue","onUpdate:modelValue"])):(m(),f("span",L,V(o.row.relationship),1))]),_:1}),e(E,{label:"操作",width:"200",align:"center"},{default:l(o=>[o.row.isEdit?(m(),y(_,{key:0,type:"primary",plain:"",size:"small",onClick:i=>o.row.isEdit=!1},{default:l(()=>a[8]||(a[8]=[r(" 保存 ")])),_:2},1032,["onClick"])):(m(),f(G,{key:1},[e(_,{type:"primary",plain:"",size:"small",onClick:i=>o.row.isEdit=!0},{default:l(()=>a[9]||(a[9]=[r(" 编辑 ")])),_:2},1032,["onClick"]),e($,{title:"是否要删除此行？",style:{"margin-left":"10px"},onConfirm:i=>x(o.$index)},{reference:l(()=>[e(_,{type:"danger",plain:"",size:"small"},{default:l(()=>a[10]||(a[10]=[r(" 删除 ")])),_:1})]),_:2},1032,["onConfirm"])],64))]),_:1})]),_:1},8,["data"]),e(_,{disabled:!n(k),style:{width:"100%","margin-top":"20px"},onClick:C},{icon:l(()=>[e(P,{name:"i-ep:plus"})]),default:l(()=>[a[11]||(a[11]=r(" 新增成员 "))]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})])}}}),le=q(O,[["__scopeId","data-v-73db37ad"]]);export{le as default};
