(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39189784"],{"0a49":function(e,t,r){var a=r("9b43"),o=r("626a"),s=r("4bf8"),i=r("9def"),n=r("cd1c");e.exports=function(e,t){var r=1==e,l=2==e,d=3==e,c=4==e,u=6==e,p=5==e||u,f=t||n;return function(t,n,m){for(var v,b,h=s(t),g=o(h),y=a(n,m,3),D=i(g.length),S=0,j=r?f(t,D):l?f(t,0):void 0;D>S;S++)if((p||S in g)&&(v=g[S],b=y(v,S,h),e))if(r)j[S]=b;else if(b)switch(e){case 3:return!0;case 5:return v;case 6:return S;case 2:j.push(v)}else if(c)return!1;return u?-1:d||c?c:j}}},1169:function(e,t,r){var a=r("2d95");e.exports=Array.isArray||function(e){return"Array"==a(e)}},"23ba":function(e,t,r){"use strict";r.d(t,"c",function(){return o}),r.d(t,"d",function(){return s}),r.d(t,"a",function(){return i}),r.d(t,"b",function(){return n}),r.d(t,"e",function(){return l});var a=r("b775");function o(){return Object(a["a"])({url:"/group/getList",method:"get",params:{}})}function s(){return Object(a["a"])({url:"/group/getOption",method:"get"})}function i(e){return Object(a["a"])({url:"/group/add",method:"post",data:e})}function n(e){return Object(a["a"])({url:"/group/edit",method:"post",data:e})}function l(e){return Object(a["a"])({url:"/group/remove",method:"post",data:{id:e}})}},"2b70":function(e,t,r){},7514:function(e,t,r){"use strict";var a=r("5ca1"),o=r("0a49")(5),s="find",i=!0;s in[]&&Array(1)[s](function(){i=!1}),a(a.P+a.F*i,"Array",{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")(s)},aa22:function(e,t,r){"use strict";r.d(t,"e",function(){return o}),r.d(t,"d",function(){return s}),r.d(t,"c",function(){return i}),r.d(t,"f",function(){return n}),r.d(t,"a",function(){return l}),r.d(t,"b",function(){return d}),r.d(t,"h",function(){return c}),r.d(t,"g",function(){return u});var a=r("b775");function o(){return Object(a["a"])({url:"/server/getList",method:"get",params:{}})}function s(e){return Object(a["a"])({url:"/server/getInstallPreview",method:"get",params:{serverId:e}})}function i(e){return Object(a["a"])({url:"/server/getInstallList",method:"get",params:{token:e}})}function n(){return Object(a["a"])({url:"/server/getOption",method:"get"})}function l(e){return Object(a["a"])({url:"/server/add",method:"post",data:e})}function d(e){return Object(a["a"])({url:"/server/edit",method:"post",data:e})}function c(e){return Object(a["a"])({url:"/server/remove",method:"post",data:{id:e}})}function u(e,t){return Object(a["a"])({url:"/server/install",method:"post",data:{serverId:e,templateId:t}})}},c0f9:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",{staticClass:"app-container"},[r("el-row",{staticClass:"app-bar",attrs:{type:"flex",justify:"end"}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.handleAdd}},[e._v("添加")])],1),e._v(" "),r("el-table",{staticStyle:{width:"100%"},attrs:{border:"",stripe:"","highlight-current-row":"",data:e.tableData}},[r("el-table-column",{attrs:{prop:"name",label:"项目名称"}}),e._v(" "),r("el-table-column",{attrs:{prop:"url",label:"项目地址"}}),e._v(" "),r("el-table-column",{attrs:{prop:"path",label:"部署路径"}}),e._v(" "),r("el-table-column",{attrs:{prop:"group",label:"分组",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e.findGroupName(t.row.groupId))+"\n      ")]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"environment",width:"160",label:"环境"}}),e._v(" "),r("el-table-column",{attrs:{prop:"branch",width:"160",label:"分支"}}),e._v(" "),r("el-table-column",{attrs:{prop:"operation",label:"操作",width:"350"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.handleEdit(t.row)}}},[e._v("编辑")]),e._v(" "),r("el-button",{attrs:{type:"success"},on:{click:function(r){return e.handleServer(t.row)}}},[e._v("服务器管理")]),e._v(" "),r("el-button",{attrs:{type:"warning"},on:{click:function(r){return e.handleUser(t.row)}}},[e._v("成员管理")]),e._v(" "),r("el-button",{attrs:{type:"danger"},on:{click:function(r){return e.handleRemove(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),r("el-dialog",{attrs:{title:"项目设置",visible:e.dialogVisible,width:"60%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{ref:"form",attrs:{rules:e.formRules,model:e.formData,"label-width":"120px"}},[r("el-row",[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"项目名称",prop:"name"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"项目地址",prop:"url"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.formData.url,callback:function(t){e.$set(e.formData,"url",t)},expression:"formData.url"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"部署路径",prop:"path"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.formData.path,callback:function(t){e.$set(e.formData,"path",t)},expression:"formData.path"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"环境",prop:"environment"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"选择环境"},model:{value:e.formData.environment,callback:function(t){e.$set(e.formData,"environment",t)},expression:"formData.environment"}},[r("el-option",{attrs:{label:"生产环境",value:"生产环境"}}),e._v(" "),r("el-option",{attrs:{label:"测试环境",value:"测试环境"}}),e._v(" "),r("el-option",{attrs:{label:"开发环境",value:"开发环境"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"分支",prop:"branch"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.formData.branch,callback:function(t){e.$set(e.formData,"branch",t)},expression:"formData.branch"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"rsync选项",prop:"rsyncOption"}},[r("el-input",{attrs:{autocomplete:"off",placeholder:"-rtv --exclude .git --delete-after"},model:{value:e.formData.rsyncOption,callback:function(t){e.$set(e.formData,"rsyncOption",t)},expression:"formData.rsyncOption"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"绑定分组",prop:"groupId"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"选择分组"},model:{value:e.formData.groupId,callback:function(t){e.$set(e.formData,"groupId",t)},expression:"formData.groupId"}},[r("el-option",{attrs:{label:"默认",value:0}}),e._v(" "),e._l(e.groupOption,function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.id}})})],2)],1),e._v(" "),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.formProps.showServers,expression:"formProps.showServers"}],attrs:{label:"绑定服务器",prop:"serverIds"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",placeholder:"选择服务器，可多选"},model:{value:e.formData.serverIds,callback:function(t){e.$set(e.formData,"serverIds",t)},expression:"formData.serverIds"}},e._l(e.serverOption,function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.id}})}),1)],1),e._v(" "),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.formProps.showUsers,expression:"formProps.showUsers"}],attrs:{label:"绑定组员",prop:"userIds"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",placeholder:"选择组员，可多选"},model:{value:e.formData.userIds,callback:function(t){e.$set(e.formData,"userIds",t)},expression:"formData.userIds"}},e._l(e.userOption,function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.id}})}),1)],1)],1),e._v(" "),r("el-col",{attrs:{span:16}},[r("el-form-item",{attrs:{label:"拉取后运行脚本",prop:"afterPullScrpit"}},[r("codemirror",{attrs:{options:e.cmOptions},model:{value:e.formData.afterPullScript,callback:function(t){e.$set(e.formData,"afterPullScript",t)},expression:"formData.afterPullScript"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"部署后运行脚本",prop:"afterDeployScrpit"}},[r("codemirror",{attrs:{options:e.cmOptions},model:{value:e.formData.afterDeployScript,callback:function(t){e.$set(e.formData,"afterDeployScript",t)},expression:"formData.afterDeployScript"}})],1)],1)],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{disabled:e.formProps.disabled,type:"primary"},on:{click:e.submit}},[e._v("确 定")])],1)],1),e._v(" "),r("el-dialog",{attrs:{title:"服务器管理",visible:e.dialogServerVisible},on:{"update:visible":function(t){e.dialogServerVisible=t}}},[r("el-row",{staticClass:"app-bar",attrs:{type:"flex",justify:"end"}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.handleAddServer}},[e._v("添加")])],1),e._v(" "),r("el-table",{staticStyle:{width:"100%"},attrs:{border:"",stripe:"","highlight-current-row":"",data:e.tableServerData}},[r("el-table-column",{attrs:{prop:"serverId",label:"服务器ID"}}),e._v(" "),r("el-table-column",{attrs:{prop:"serverName",label:"服务器名称"}}),e._v(" "),r("el-table-column",{attrs:{prop:"createTime",width:"160",label:"绑定时间"}}),e._v(" "),r("el-table-column",{attrs:{prop:"updateTime",width:"160",label:"更新时间"}}),e._v(" "),r("el-table-column",{attrs:{prop:"operation",label:"操作",width:"75"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"danger"},on:{click:function(r){return e.removeProjectServer(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogServerVisible=!1}}},[e._v("取 消")])],1)],1),e._v(" "),r("el-dialog",{attrs:{title:"成员管理",visible:e.dialogUserVisible},on:{"update:visible":function(t){e.dialogUserVisible=t}}},[r("el-row",{staticClass:"app-bar",attrs:{type:"flex",justify:"end"}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.handleAddUser}},[e._v("添加")])],1),e._v(" "),r("el-table",{staticStyle:{width:"100%"},attrs:{border:"",stripe:"","highlight-current-row":"",data:e.tableUserData}},[r("el-table-column",{attrs:{prop:"userId",label:"用户ID"}}),e._v(" "),r("el-table-column",{attrs:{prop:"userName",label:"用户名称"}}),e._v(" "),r("el-table-column",{attrs:{prop:"createTime",width:"160",label:"绑定时间"}}),e._v(" "),r("el-table-column",{attrs:{prop:"updateTime",width:"160",label:"更新时间"}}),e._v(" "),r("el-table-column",{attrs:{prop:"operation",label:"操作",width:"75"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"danger"},on:{click:function(r){return e.removeProjectUser(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogUserVisible=!1}}},[e._v("取 消")])],1)],1),e._v(" "),r("el-dialog",{attrs:{title:"添加服务器",visible:e.dialogAddServerVisible},on:{"update:visible":function(t){e.dialogAddServerVisible=t}}},[r("el-form",{ref:"addServerForm",attrs:{rules:e.addServerFormRules,model:e.addServerFormData}},[r("el-form-item",{attrs:{label:"绑定服务器","label-width":"120px",prop:"serverIds"}},[r("el-select",{attrs:{multiple:"",placeholder:"选择服务器，可多选"},model:{value:e.addServerFormData.serverIds,callback:function(t){e.$set(e.addServerFormData,"serverIds",t)},expression:"addServerFormData.serverIds"}},e._l(e.serverOption,function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.id}})}),1)],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogAddServerVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{disabled:e.addServerFormProps.disabled,type:"primary"},on:{click:e.addServer}},[e._v("确 定")])],1)],1),e._v(" "),r("el-dialog",{attrs:{title:"添加用户",visible:e.dialogAddUserVisible},on:{"update:visible":function(t){e.dialogAddUserVisible=t}}},[r("el-form",{ref:"addUserForm",attrs:{rules:e.addUserFormRules,model:e.addUserFormData}},[r("el-form-item",{attrs:{label:"绑定组员","label-width":"120px",prop:"userIds"}},[r("el-select",{attrs:{multiple:"",placeholder:"选择组员，可多选"},model:{value:e.addUserFormData.userIds,callback:function(t){e.$set(e.addUserFormData,"userIds",t)},expression:"addUserFormData.userIds"}},e._l(e.userOption,function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.id}})}),1)],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogAddUserVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{disabled:e.addUserFormProps.disabled,type:"primary"},on:{click:e.addUser}},[e._v("确 定")])],1)],1)],1)},o=[],s=(r("7f7f"),r("7514"),r("ac6a"),r("c24f")),i=r("aa22"),n=r("23ba"),l=r("b775");function d(){return Object(l["a"])({url:"/project/getList",method:"get",params:{}})}function c(e){return Object(l["a"])({url:"/project/getBindServerList",method:"get",params:{id:e}})}function u(e){return Object(l["a"])({url:"/project/getBindUserList",method:"get",params:{id:e}})}function p(e){return Object(l["a"])({url:"/project/create",method:"post",data:{id:e}})}function f(e){return Object(l["a"])({url:"/project/add",method:"post",data:e})}function m(e){return Object(l["a"])({url:"/project/edit",method:"post",data:e})}function v(e){return Object(l["a"])({url:"/project/remove",method:"post",data:{id:e}})}function b(e){return Object(l["a"])({url:"/project/addServer",method:"post",data:e})}function h(e){return Object(l["a"])({url:"/project/addUser",method:"post",data:e})}function g(e){return Object(l["a"])({url:"/project/removeProjectUser",method:"post",data:{projectUserId:e}})}function y(e){return Object(l["a"])({url:"/project/removeProjectServer",method:"post",data:{projectServerId:e}})}var D=r("ed08"),S=r("8f94"),j=(r("02f0"),r("7ba3"),r("a7be"),r("1fdb"),r("4498"),{components:{codemirror:S["codemirror"]},data:function(){return{cmOptions:{tabSize:4,mode:"text/x-sh",lineNumbers:!0,line:!0,scrollbarStyle:"overlay",theme:"darcula"},dialogVisible:!1,dialogServerVisible:!1,dialogUserVisible:!1,dialogAddServerVisible:!1,dialogAddUserVisible:!1,serverOption:[],userOption:[],groupOption:[],tableData:[],tableServerData:[],tableUserData:[],formProps:{disabled:!1,showServers:!0,showUsers:!0},tempFormData:{},formData:{id:0,groupId:0,name:"",url:"",path:"",afterPullScript:"",afterDeployScript:"",environment:"生产环境",branch:"master",rsyncOption:"-rtv --exclude .git --delete-after",serverIds:[],userIds:[]},formRules:{name:[{required:!0,message:"请输入项目名称",trigger:["blur"]}],url:[{required:!0,message:"请输入项目地址",trigger:["blur"]}],path:[{required:!0,message:"请输入部署路径",trigger:["blur"]}],environment:[{required:!0,message:"请选择环境",trigger:["blur"]}],branch:[{required:!0,message:"请输入分支名称",trigger:["blur"]}],serverIds:[{type:"array",message:"请选择服务器",trigger:"change"}],userIds:[{type:"array",message:"请选择组员",trigger:"change"}]},addServerFormProps:{disabled:!1},addServerFormData:{projectId:0,serverIds:[]},addServerFormRules:{serverIds:[{type:"array",required:!0,message:"请选择服务器",trigger:"change"}]},addUserFormProps:{disabled:!1},addUserFormData:{projectId:0,userIds:[]},addUserFormRules:{userIds:[{type:"array",required:!0,message:"请选择用户",trigger:"change"}]}}},created:function(){this.storeFormData(),this.get()},methods:{handleAdd:function(){this.restoreFormData(),this.formProps.showServers=this.formProps.showUsers=!0,this.dialogVisible=!0},handleEdit:function(e){this.formData=Object.assign({},e),this.formData.serverIds=[],this.formData.userIds=[],this.formProps.showServers=this.formProps.showUsers=!1,this.dialogVisible=!0},handleRemove:function(e){var t=this;this.$confirm("此操作将删除该项目, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){v(e.id).then(function(e){t.$message({message:e.message,type:"success",duration:5e3}),t.getProjectList()})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},handleServer:function(e){this.getBindServerList(e.id),this.addServerFormData.projectId=e.id,this.dialogServerVisible=!0},handleGroup:function(e){this.getBindServerList(e.id),this.addServerFormData.projectId=e.id,this.dialogServerVisible=!0},handleUser:function(e){this.getBindUserList(e.id),this.addUserFormData.projectId=e.id,this.dialogUserVisible=!0},handleAddServer:function(){this.dialogAddServerVisible=!0},handleAddUser:function(){this.dialogAddUserVisible=!0},submit:function(){var e=this;this.$refs.form.validate(function(t){if(!t)return!1;0===e.formData.id?e.add():e.edit()})},add:function(){var e=this;this.formProps.disabled=!0,f(this.formData).then(function(t){e.dialogVisible=!1,e.$message({message:t.message,type:"success",duration:5e3}),e.getProjectList()}).finally(function(){e.formProps.disabled=!1})},edit:function(){var e=this;this.formProps.disabled=!0,m(this.formData).then(function(t){e.dialogVisible=!1,e.$message({message:t.message,type:"success",duration:5e3}),e.getProjectList()}).finally(function(){e.formProps.disabled=!1})},create:function(e){var t=this;p(e).then(function(e){t.$message({message:e.message,type:"success",duration:5e3})})},addServer:function(){var e=this;this.$refs.addServerForm.validate(function(t){if(!t)return!1;e.addServerFormProps.disabled=!0,b(e.addServerFormData).then(function(t){e.dialogAddServerVisible=!1,e.$message({message:t.message,type:"success",duration:5e3}),e.getBindServerList(e.addServerFormData.projectId)}).finally(function(){e.addServerFormProps.disabled=!1})})},addUser:function(){var e=this;this.$refs.addUserForm.validate(function(t){if(!t)return!1;e.addUserFormProps.disabled=!0,h(e.addUserFormData).then(function(t){e.dialogAddUserVisible=!1,e.$message({message:t.message,type:"success",duration:5e3}),e.getBindUserList(e.addUserFormData.projectId)}).finally(function(){e.addUserFormProps.disabled=!1})})},removeProjectServer:function(e){var t=this;this.$confirm("此操作将永久删除该服务器的绑定关系, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){y(e.id).then(function(r){t.$message({message:r.message,type:"success",duration:5e3}),t.getBindServerList(e.projectId)})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},removeProjectUser:function(e){var t=this;this.$confirm("此操作将永久删除该用户的绑定关系, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){g(e.id).then(function(r){t.$message({message:r.message,type:"success",duration:5e3}),t.getBindUserList(e.projectId)})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},get:function(){var e=this;this.getProjectList(),Object(i["f"])().then(function(t){e.serverOption=t.data.serverList||[]}),Object(s["f"])().then(function(t){e.userOption=t.data.userList||[]}),Object(n["d"])().then(function(t){e.groupOption=t.data.groupList||[]})},getProjectList:function(){var e=this;d().then(function(t){var r=t.data.projectList;r.forEach(function(e){e.createTime=Object(D["b"])(e.createTime),e.updateTime=Object(D["b"])(e.updateTime)}),e.tableData=r}).catch(function(){})},getBindServerList:function(e){var t=this;c(e).then(function(e){t.tableServerData=e.data.projectServerMap||[],t.tableServerData.forEach(function(e){e.createTime=Object(D["b"])(e.createTime),e.updateTime=Object(D["b"])(e.updateTime)})})},getBindUserList:function(e){var t=this;u(e).then(function(e){t.tableUserData=e.data.projectUserMap||[],t.tableUserData.forEach(function(e){e.createTime=Object(D["b"])(e.createTime),e.updateTime=Object(D["b"])(e.updateTime)})})},findGroupName:function(e){var t=this.groupOption.find(function(t){return t.id===e});return t?t["name"]:"默认"},storeFormData:function(){this.tempFormData=JSON.parse(JSON.stringify(this.formData))},restoreFormData:function(){this.formData=JSON.parse(JSON.stringify(this.tempFormData))}}}),_=j,w=(r("da4d"),r("2877")),O=Object(w["a"])(_,a,o,!1,null,null,null);t["default"]=O.exports},cd1c:function(e,t,r){var a=r("e853");e.exports=function(e,t){return new(a(e))(t)}},da4d:function(e,t,r){"use strict";var a=r("2b70"),o=r.n(a);o.a},e853:function(e,t,r){var a=r("d3f4"),o=r("1169"),s=r("2b4c")("species");e.exports=function(e){var t;return o(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!o(t.prototype)||(t=void 0),a(t)&&(t=t[s],null===t&&(t=void 0))),void 0===t?Array:t}},ed08:function(e,t,r){"use strict";r.d(t,"b",function(){return o}),r.d(t,"a",function(){return s});r("ac6a"),r("c5f6"),r("28a5"),r("a481"),r("6b54");var a=r("7618");function o(e,t){if(0===arguments.length)return null;var r,o=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(a["a"])(e)?r=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),r=new Date(e));var s={y:r.getFullYear(),m:r.getMonth()+1,d:r.getDate(),h:r.getHours(),i:r.getMinutes(),s:r.getSeconds(),a:r.getDay()},i=o.replace(/{(y|m|d|h|i|s|a)+}/g,function(e,t){var r=s[t];return"a"===t?["日","一","二","三","四","五","六"][r]:(e.length>0&&r<10&&(r="0"+r),r||0)});return i}function s(e){if(0===e)return"0 B";var t=1e3,r=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],a=Math.floor(Math.log(e)/Math.log(t));return(e/Math.pow(t,a)).toPrecision(3)+" "+r[a]}}}]);