(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e8adb83"],{"0a49":function(t,e,a){var r=a("9b43"),o=a("626a"),n=a("4bf8"),i=a("9def"),l=a("cd1c");t.exports=function(t,e){var a=1==t,s=2==t,u=3==t,c=4==t,d=6==t,p=5==t||d,m=e||l;return function(e,l,f){for(var b,g,h=n(e),v=o(h),y=r(l,f,3),w=i(v.length),O=0,D=a?m(e,w):s?m(e,0):void 0;w>O;O++)if((p||O in v)&&(b=v[O],g=y(b,O,h),t))if(a)D[O]=g;else if(g)switch(t){case 3:return!0;case 5:return b;case 6:return O;case 2:D.push(b)}else if(c)return!1;return d?-1:u||c?c:D}}},1169:function(t,e,a){var r=a("2d95");t.exports=Array.isArray||function(t){return"Array"==r(t)}},"1ba6":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"app-container"},[a("el-row",{staticClass:"app-bar",attrs:{type:"flex",justify:"end"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.handleAdd}},[t._v("添加")])],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{border:"",stripe:"","highlight-current-row":"",data:t.tableData}},[a("el-table-column",{attrs:{prop:"name",label:"服务器"}}),t._v(" "),a("el-table-column",{attrs:{prop:"ip",label:"IP"}}),t._v(" "),a("el-table-column",{attrs:{prop:"port",label:"端口"}}),t._v(" "),a("el-table-column",{attrs:{prop:"owner",label:"sshKey所有者","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"group",label:"分组",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t.findGroupName(e.row.groupId))+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间",width:"160"}}),t._v(" "),a("el-table-column",{attrs:{prop:"updateTime",label:"更新时间",width:"160"}}),t._v(" "),a("el-table-column",{attrs:{prop:"operation",label:"操作",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(a){return t.handleEdit(e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{size:"small",type:"warning"},on:{click:function(a){return t.handleInstall(e.row)}}},[t._v("安装")]),t._v(" "),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){return t.handleRemove(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-dialog",{attrs:{title:"服务器设置",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-form",{ref:"form",attrs:{rules:t.formRules,model:t.formData,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"服务器名称",prop:"name"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"IP",prop:"ip"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.formData.ip,callback:function(e){t.$set(t.formData,"ip",e)},expression:"formData.ip"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"port",prop:"port"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.formData.port,callback:function(e){t.$set(t.formData,"port",t._n(e))},expression:"formData.port"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"sshKey所有者",prop:"owner"}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"root"},model:{value:t.formData.owner,callback:function(e){t.$set(t.formData,"owner",e)},expression:"formData.owner"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"绑定分组",prop:"groupId"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"选择分组"},model:{value:t.formData.groupId,callback:function(e){t.$set(t.formData,"groupId",e)},expression:"formData.groupId"}},[a("el-option",{attrs:{label:"默认",value:0}}),t._v(" "),t._l(t.groupOption,function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.id}})})],2)],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{disabled:t.formProps.disabled,type:"primary"},on:{click:t.submit}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"安装模板",visible:t.templateDialogVisible},on:{"update:visible":function(e){t.templateDialogVisible=e}}},[a("el-row",{staticClass:"template-dialog"},[a("el-form",{ref:"templateForm",attrs:{rules:t.templateFormRules,model:t.templateFormData,"label-width":"90px"}},[a("el-form-item",{attrs:{label:"选择模板",prop:"templateId"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"选择模板"},model:{value:t.templateFormData.templateId,callback:function(e){t.$set(t.templateFormData,"templateId",e)},expression:"templateFormData.templateId"}},t._l(t.templateOption,function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.id}})}),1)],1)],1),t._v(" "),a("el-row",[a("el-collapse",{attrs:{accordion:""},on:{change:t.handleTokenChange}},t._l(t.installPreviewList.slice().reverse(),function(e,r){return a("el-collapse-item",{key:r,attrs:{name:e.token}},[a("template",{slot:"title"},[a("span",{staticStyle:{"margin-right":"10px"}},[t._v("token: "+t._s(e.token))]),t._v(" "),1===e.installState?a("el-tag",{attrs:{type:"success",effect:"plain"}},[t._v("成功")]):a("el-tag",{attrs:{type:"danger",effect:"plain"}},[t._v("失败")])],1),t._v(" "),a("codemirror",{attrs:{value:t.installTrace,options:t.cmOptions}})],2)}),1)],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.templateDialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{disabled:t.templateFormProps.disabled,type:"primary"},on:{click:t.install}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"安装进度",visible:t.installDialogVisible},on:{"update:visible":function(e){t.installDialogVisible=e}}},[a("codemirror",{attrs:{value:t.installLog,options:t.cmOptions}})],1)],1)},o=[],n=(a("a481"),a("7514"),a("7f7f"),a("ac6a"),a("aa22")),i=a("23ba"),l=a("c621"),s=a("ed08"),u=a("8f94"),c=(a("02f0"),a("7ba3"),a("a7be"),a("1fdb"),a("4498"),a("f4ba"),{components:{codemirror:u["codemirror"]},data:function(){return{dialogVisible:!1,templateDialogVisible:!1,installDialogVisible:!1,tableData:[],groupOption:[],templateOption:[],installToken:"",installPreviewList:[],installTraceList:[],installLog:"",tempFormData:{},cmOptions:{tabSize:4,mode:"text/x-sh",lineNumbers:!1,line:!1,scrollbarStyle:"overlay",theme:"darcula",readOnly:!0,autoRefresh:!0},formProps:{disabled:!1},formData:{id:0,name:"",ip:"",port:22,owner:"",groupId:0},formRules:{name:[{required:!0,message:"请输入服务器名称",trigger:"blur"}],ip:[{required:!0,message:"请输入服务器ip",trigger:"blur"}],port:[{required:!0,message:"请输入服务器port",trigger:"blur"}],owner:[{required:!0,message:"请输入SSH-KEY的所有者",trigger:"blur"}]},templateFormProps:{disabled:!1},templateFormData:{templateId:"",serverName:"",serverId:0},templateFormRules:{templateId:[{required:!0,message:"请选择模板",trigger:"change"}]}}},computed:{installTrace:function(){var t=this,e="";return this.installTraceList.forEach(function(a){1===a.type?(e+="[goploy~]$ "+a.command+"\n",e+=a.detail+"\n"):2===a.type?(e+="[goploy~]$ "+a.ssh+"\n",e+=a.detail+"\n"):3===a.type&&(e+="["+t.templateFormData.serverName+"~]$ "+a.script+"\n",e+=a.detail+"\n")}),e}},created:function(){this.storeFormData(),this.getList(),this.getGroupOption(),this.getTemplateOption()},methods:{getList:function(){var t=this;Object(n["e"])().then(function(e){var a=e.data.serverList||[];a.forEach(function(t){t.createTime=Object(s["b"])(t.createTime),t.updateTime=Object(s["b"])(t.updateTime)}),t.tableData=a})},getGroupOption:function(){var t=this;Object(i["d"])().then(function(e){t.groupOption=e.data.groupList||[]})},getTemplateOption:function(){var t=this;Object(l["d"])().then(function(e){t.templateOption=e.data.templateList||[]})},handleAdd:function(){this.restoreFormData(),this.dialogVisible=!0},handleEdit:function(t){this.formData=Object.assign({},t),this.dialogVisible=!0},handleRemove:function(t){var e=this;this.$confirm("此操作将删除该服务器, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(n["h"])(t.id).then(function(t){e.$message({message:t.message,type:"success",duration:5e3}),e.getList()})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},handleInstall:function(t){var e=this;this.templateFormData.serverId=t.id,this.templateFormData.serverName=t.name,Object(n["d"])(t.id).then(function(t){e.installPreviewList=t.data.installTraceList||[]}),this.templateDialogVisible=!0},handleTokenChange:function(t){var e=this;""!==t&&Object(n["c"])(t).then(function(t){var a=t.data.installTraceList||[];e.installTraceList=a.map(function(t){return Object.assign(t,JSON.parse(t.ext)),t})})},submit:function(){var t=this;this.$refs.form.validate(function(e){if(!e)return!1;0===t.formData.id?t.add():t.edit()})},add:function(){var t=this;this.formProps.disabled=!0,Object(n["a"])(this.formData).then(function(e){t.getList(),t.$message({message:e.message,type:"success",duration:5e3})}).finally(function(){t.formProps.disabled=t.dialogVisible=!1})},edit:function(){var t=this;this.formProps.disabled=!0,Object(n["b"])(this.formData).then(function(e){t.getList(),t.$message({message:e.message,type:"success",duration:5e3})}).finally(function(){t.formProps.disabled=t.dialogVisible=!1})},install:function(){var t=this;this.$refs.templateForm.validate(function(e){if(!e)return!1;t.templateFormProps.disabled=!0,t.installDialogVisible=!0,t.templateFormProps.disabled=t.templateDialogVisible=!1,t.installLog="",t.connectWebSocket().then(function(e){Object(n["g"])(t.templateFormData.serverId,t.templateFormData.templateId).then(function(e){t.$message({message:e.message,duration:5e3})})})})},connectWebSocket:function(){var t=this;return this.webSocket&&this.webSocket.readyState<2?(console.log("reusing the socket connection [state = "+this.webSocket.readyState+"]: "+this.webSocket.url),Promise.resolve(this.webSocket)):new Promise(function(e,a){t.webSocket=new WebSocket("ws://"+window.location.host+"/ws/unicast"),t.webSocket.onopen=function(){console.log("socket connection is opened [state = "+t.webSocket.readyState+"]: "+t.webSocket.url),e(t.webSocket)},t.webSocket.onerror=function(t){console.error("socket connection error : ",t),a(t)},t.webSocket.onclose=function(e){t.webSocket=null,console.log("connection closed ("+e.code+")")},t.webSocket.onmessage=function(e){var a=JSON.parse(e.data);Object.assign(a,JSON.parse(a.ext));var r="";1===a.type?(r+="[goploy~]$ "+a.command+"\n",r+=a.detail+"\n"):2===a.type?(r+="[goploy~]$ "+a.ssh+"\n",r+=a.detail+"\n"):3===a.type&&(r+="["+t.templateFormData.serverName+"~]$ "+a.script+"\n",r+=a.detail+"\n"),t.installLog+=r}})},findGroupName:function(t){var e=this.groupOption.find(function(e){return e.id===t});return e?e["name"]:"默认"},formatDetail:function(t){return t?t.replace(/\n|(\r\n)/g,"<br>"):""},storeFormData:function(){this.tempFormData=JSON.parse(JSON.stringify(this.formData))},restoreFormData:function(){this.formData=JSON.parse(JSON.stringify(this.tempFormData))}}}),d=c,p=(a("4990"),a("2877")),m=Object(p["a"])(d,r,o,!1,null,"508a930e",null);e["default"]=m.exports},"23ba":function(t,e,a){"use strict";a.d(e,"c",function(){return o}),a.d(e,"d",function(){return n}),a.d(e,"a",function(){return i}),a.d(e,"b",function(){return l}),a.d(e,"e",function(){return s});var r=a("b775");function o(){return Object(r["a"])({url:"/group/getList",method:"get",params:{}})}function n(){return Object(r["a"])({url:"/group/getOption",method:"get"})}function i(t){return Object(r["a"])({url:"/group/add",method:"post",data:t})}function l(t){return Object(r["a"])({url:"/group/edit",method:"post",data:t})}function s(t){return Object(r["a"])({url:"/group/remove",method:"delete",data:{id:t}})}},4990:function(t,e,a){"use strict";var r=a("c223"),o=a.n(r);o.a},7514:function(t,e,a){"use strict";var r=a("5ca1"),o=a("0a49")(5),n="find",i=!0;n in[]&&Array(1)[n](function(){i=!1}),r(r.P+r.F*i,"Array",{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(n)},aa22:function(t,e,a){"use strict";a.d(e,"e",function(){return o}),a.d(e,"d",function(){return n}),a.d(e,"c",function(){return i}),a.d(e,"f",function(){return l}),a.d(e,"a",function(){return s}),a.d(e,"b",function(){return u}),a.d(e,"h",function(){return c}),a.d(e,"g",function(){return d});var r=a("b775");function o(){return Object(r["a"])({url:"/server/getList",method:"get",params:{}})}function n(t){return Object(r["a"])({url:"/server/getInstallPreview",method:"get",params:{serverId:t}})}function i(t){return Object(r["a"])({url:"/server/getInstallList",method:"get",params:{token:t}})}function l(){return Object(r["a"])({url:"/server/getOption",method:"get"})}function s(t){return Object(r["a"])({url:"/server/add",method:"post",data:t})}function u(t){return Object(r["a"])({url:"/server/edit",method:"post",data:t})}function c(t){return Object(r["a"])({url:"/server/remove",method:"delete",data:{id:t}})}function d(t,e){return Object(r["a"])({url:"/server/install",method:"post",data:{serverId:t,templateId:e}})}},c223:function(t,e,a){},c621:function(t,e,a){"use strict";a.d(e,"c",function(){return o}),a.d(e,"d",function(){return n}),a.d(e,"a",function(){return i}),a.d(e,"b",function(){return l}),a.d(e,"e",function(){return s}),a.d(e,"f",function(){return u});var r=a("b775");function o(){return Object(r["a"])({url:"/template/getList",method:"get",params:{}})}function n(){return Object(r["a"])({url:"/template/getOption",method:"get"})}function i(t){return Object(r["a"])({url:"/template/add",method:"post",data:t})}function l(t){return Object(r["a"])({url:"/template/edit",method:"post",data:t})}function s(t){return Object(r["a"])({url:"/template/remove",method:"delete",data:{id:t}})}function u(t,e){return Object(r["a"])({url:"/template/removePackage",method:"delete",data:{templateId:t,filename:e}})}},cd1c:function(t,e,a){var r=a("e853");t.exports=function(t,e){return new(r(t))(e)}},e853:function(t,e,a){var r=a("d3f4"),o=a("1169"),n=a("2b4c")("species");t.exports=function(t){var e;return o(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!o(e.prototype)||(e=void 0),r(e)&&(e=e[n],null===e&&(e=void 0))),void 0===e?Array:e}},ed08:function(t,e,a){"use strict";a.d(e,"b",function(){return o}),a.d(e,"a",function(){return n});a("ac6a"),a("c5f6"),a("28a5"),a("a481"),a("6b54");var r=a("7618");function o(t,e){if(0===arguments.length)return null;var a,o=e||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(r["a"])(t)?a=t:("string"===typeof t&&/^[0-9]+$/.test(t)&&(t=parseInt(t)),"number"===typeof t&&10===t.toString().length&&(t*=1e3),a=new Date(t));var n={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()},i=o.replace(/{(y|m|d|h|i|s|a)+}/g,function(t,e){var a=n[e];return"a"===e?["日","一","二","三","四","五","六"][a]:(t.length>0&&a<10&&(a="0"+a),a||0)});return i}function n(t){if(0===t)return"0 B";var e=1024,a=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],r=Math.floor(Math.log(t)/Math.log(e));return(t/Math.pow(e,r)).toPrecision(3)+" "+a[r]}},f4ba:function(t,e,a){(function(t){t(a("56b3"))})(function(t){"use strict";function e(e,r){function o(){e.display.wrapper.offsetHeight?(a(e,r),e.display.lastWrapHeight!=e.display.wrapper.clientHeight&&e.refresh()):r.timeout=setTimeout(o,r.delay)}r.timeout=setTimeout(o,r.delay),r.hurry=function(){clearTimeout(r.timeout),r.timeout=setTimeout(o,50)},t.on(window,"mouseup",r.hurry),t.on(window,"keyup",r.hurry)}function a(e,a){clearTimeout(a.timeout),t.off(window,"mouseup",a.hurry),t.off(window,"keyup",a.hurry)}t.defineOption("autoRefresh",!1,function(t,r){t.state.autoRefresh&&(a(t,t.state.autoRefresh),t.state.autoRefresh=null),r&&0==t.display.wrapper.offsetHeight&&e(t,t.state.autoRefresh={delay:r.delay||250})})})}}]);