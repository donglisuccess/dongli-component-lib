import{d as _,r as i,a as c,o as h,c as k,b as t,w as e,f as s,e as d,E as n}from"./index-DXe0rjKz.js";const x=d("div",{style:{"font-size":"12px",color:"#999"}}," jpg/png files with a size less than 500KB. ",-1),w=_({__name:"modalForm",setup(C){const r=i(!1),b=()=>{r.value=!0},v=a=>{a.resetFields(),r.value=!1},m=a=>{a.validate()(l=>{if(l){let u=a.getFormValue();console.log(u),n.success("验证通过!")}else n.error("验证未通过")})},y=i([{type:"input",label:"用户名：",prop:"userName",value:"",placeholder:"请输入用户名",rules:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:8,message:"长度在 3 到 8 个字符",trigger:"blur"}],attrs:{clearable:!0}},{type:"input",label:"密码：",value:"",prop:"password",placeholder:"请输入密码",rules:[{required:!0,message:"请输入密码",trigger:"blur"}],attrs:{clearable:!0}},{type:"select",label:"职位：",prop:"position",value:"",placeholder:"请选择职位",children:[{type:"option",label:"总经理",value:"1"},{type:"option",label:"经理",value:"2"},{type:"option",label:"组长",value:"3"},{type:"option",label:"职员",value:"4"}],rules:[{required:!0,message:"请选择职位",trigger:"blur"}],style:{width:"30%"}},{type:"checkbox-group",label:"爱好：",prop:"hobby",value:[],children:[{type:"checkbox",label:"足球",value:"1"},{type:"checkbox",label:"篮球",value:"2"},{type:"checkbox",label:"排球",value:"3"},{type:"checkbox",label:"羽毛球",value:"4"}],rules:[{required:!0,message:"请选择爱好",trigger:"blur"}]},{type:"radio-group",label:"性别：",prop:"sex",value:"",rules:[{required:!0,message:"请选择性别",trigger:"blur"}],children:[{type:"radio",label:"男",value:"male"},{type:"radio",label:"女",value:"female"},{type:"radio",label:"保密",value:"secret"}]},{type:"upload",label:"上传文件：",prop:"pic",uploadAttrs:{action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",multiple:!0,limit:3}},{type:"editor",value:"",label:"描述",prop:"desc",placeholder:"请输入描述",rules:[{required:!0,message:"请填写描述",trigger:"blur"}]}]),g=()=>{console.log("beforeUpload")};return(a,p)=>{const l=c("el-button"),u=c("my-modal-form");return h(),k("div",null,[t(l,{type:"primary",onClick:b},{default:e(()=>[s("打开弹出框")]),_:1}),t(u,{visible:r.value,"onUpdate:visible":p[0]||(p[0]=o=>r.value=o),title:"表单",options:y.value,beforeUpload:g,scrollShow:!0},{uploadArea:e(()=>[t(l,{type:"primary"},{default:e(()=>[s("Click to upload")]),_:1})]),uploadTips:e(()=>[x]),footer:e(({form:o})=>[d("div",null,[t(l,{onClick:f=>v(o)},{default:e(()=>[s("取消")]),_:2},1032,["onClick"]),t(l,{type:"primary",onClick:f=>m(o)},{default:e(()=>[s("确定")]),_:2},1032,["onClick"])])]),_:1},8,["visible","options"])])}}});export{w as default};