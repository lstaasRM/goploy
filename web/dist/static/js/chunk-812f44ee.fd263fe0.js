(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-812f44ee"],{"02f4":function(t,e,r){var n=r("4588"),a=r("be13");t.exports=function(t){return function(e,r){var o,i,c=String(a(e)),u=n(r),l=c.length;return u<0||u>=l?t?"":void 0:(o=c.charCodeAt(u),o<55296||o>56319||u+1===l||(i=c.charCodeAt(u+1))<56320||i>57343?t?c.charAt(u):o:t?c.slice(u,u+2):i-56320+(o-55296<<10)+65536)}}},"0390":function(t,e,r){"use strict";var n=r("02f4")(!0);t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},"0bfb":function(t,e,r){"use strict";var n=r("cb7c");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"11e9":function(t,e,r){var n=r("52a7"),a=r("4630"),o=r("6821"),i=r("6a99"),c=r("69a8"),u=r("c69a"),l=Object.getOwnPropertyDescriptor;e.f=r("9e1e")?l:function(t,e){if(t=o(t),e=i(e,!0),u)try{return l(t,e)}catch(r){}if(c(t,e))return a(!n.f.call(t,e),t[e])}},"214f":function(t,e,r){"use strict";r("b0c5");var n=r("2aba"),a=r("32e9"),o=r("79e5"),i=r("be13"),c=r("2b4c"),u=r("520a"),l=c("species"),s=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();t.exports=function(t,e,r){var p=c(t),d=!o(function(){var e={};return e[p]=function(){return 7},7!=""[t](e)}),g=d?!o(function(){var e=!1,r=/a/;return r.exec=function(){return e=!0,null},"split"===t&&(r.constructor={},r.constructor[l]=function(){return r}),r[p](""),!e}):void 0;if(!d||!g||"replace"===t&&!s||"split"===t&&!f){var m=/./[p],h=r(i,p,""[t],function(t,e,r,n,a){return e.exec===u?d&&!a?{done:!0,value:m.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),b=h[0],v=h[1];n(String.prototype,t,b),a(RegExp.prototype,p,2==e?function(t,e){return v.call(t,this,e)}:function(t){return v.call(t,this)})}}},"23ba":function(t,e,r){"use strict";r.d(e,"c",function(){return a}),r.d(e,"d",function(){return o}),r.d(e,"a",function(){return i}),r.d(e,"b",function(){return c}),r.d(e,"e",function(){return u});var n=r("b775");function a(){return Object(n["a"])({url:"/group/getList",method:"get",params:{}})}function o(){return Object(n["a"])({url:"/group/getOption",method:"get"})}function i(t){return Object(n["a"])({url:"/group/add",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/group/edit",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/group/remove",method:"delete",data:{id:t}})}},"28a5":function(t,e,r){"use strict";var n=r("aae3"),a=r("cb7c"),o=r("ebd6"),i=r("0390"),c=r("9def"),u=r("5f1b"),l=r("520a"),s=r("79e5"),f=Math.min,p=[].push,d="split",g="length",m="lastIndex",h=4294967295,b=!s(function(){RegExp(h,"y")});r("214f")("split",2,function(t,e,r,s){var v;return v="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[g]||2!="ab"[d](/(?:ab)*/)[g]||4!="."[d](/(.?)(.?)/)[g]||"."[d](/()()/)[g]>1||""[d](/.?/)[g]?function(t,e){var a=String(this);if(void 0===t&&0===e)return[];if(!n(t))return r.call(a,t,e);var o,i,c,u=[],s=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,d=void 0===e?h:e>>>0,b=new RegExp(t.source,s+"g");while(o=l.call(b,a)){if(i=b[m],i>f&&(u.push(a.slice(f,o.index)),o[g]>1&&o.index<a[g]&&p.apply(u,o.slice(1)),c=o[0][g],f=i,u[g]>=d))break;b[m]===o.index&&b[m]++}return f===a[g]?!c&&b.test("")||u.push(""):u.push(a.slice(f)),u[g]>d?u.slice(0,d):u}:"0"[d](void 0,0)[g]?function(t,e){return void 0===t&&0===e?[]:r.call(this,t,e)}:r,[function(r,n){var a=t(this),o=void 0==r?void 0:r[e];return void 0!==o?o.call(r,a,n):v.call(String(a),r,n)},function(t,e){var n=s(v,t,this,e,v!==r);if(n.done)return n.value;var l=a(t),p=String(this),d=o(l,RegExp),g=l.unicode,m=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(b?"y":"g"),y=new d(b?l:"^(?:"+l.source+")",m),x=void 0===e?h:e>>>0;if(0===x)return[];if(0===p.length)return null===u(y,p)?[p]:[];var w=0,D=0,_=[];while(D<p.length){y.lastIndex=b?D:0;var O,E=u(y,b?p:p.slice(D));if(null===E||(O=f(c(y.lastIndex+(b?0:D)),p.length))===w)D=i(p,D,g);else{if(_.push(p.slice(w,D)),_.length===x)return _;for(var S=1;S<=E.length-1;S++)if(_.push(E[S]),_.length===x)return _;D=w=O}}return _.push(p.slice(w)),_}]})},"2f21":function(t,e,r){"use strict";var n=r("79e5");t.exports=function(t,e){return!!t&&n(function(){e?t.call(null,function(){},1):t.call(null)})}},3846:function(t,e,r){r("9e1e")&&"g"!=/./g.flags&&r("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:r("0bfb")})},"3b65":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-row",{staticClass:"app-container"},[r("el-row",{staticClass:"app-bar",attrs:{type:"flex",justify:"end"}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.handleAdd}},[t._v("添加")])],1),t._v(" "),r("el-table",{staticStyle:{width:"100%"},attrs:{border:"",stripe:"","highlight-current-row":"",data:t.tableData}},[r("el-table-column",{attrs:{prop:"account",label:"账号"}}),t._v(" "),r("el-table-column",{attrs:{prop:"name",label:"名称"}}),t._v(" "),r("el-table-column",{attrs:{prop:"mobile",label:"手机号码","show-overflow-tooltip":""}}),t._v(" "),r("el-table-column",{attrs:{prop:"role",label:"角色"}}),t._v(" "),r("el-table-column",{attrs:{prop:"createTime",label:"创建时间",width:"160"}}),t._v(" "),r("el-table-column",{attrs:{prop:"updateTime",label:"更新时间",width:"160"}}),t._v(" "),r("el-table-column",{attrs:{prop:"operation",label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[1!==e.row.id&&e.row.id!==t.$store.getters.uid?r("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(r){return t.handleEdit(e.row)}}},[t._v("编辑")]):t._e(),t._v(" "),1!==e.row.id&&e.row.id!==t.$store.getters.uid?r("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(r){return t.handleRemove(e.row)}}},[t._v("删除")]):t._e()]}}])})],1),t._v(" "),r("el-row",{staticStyle:{"margin-top":"10px"},attrs:{type:"flex",justify:"end"}},[r("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.pagination.total>t.pagination.rows,expression:"pagination.total>pagination.rows"}],attrs:{total:t.pagination.total,"page-size":t.pagination.rows,background:"",layout:"prev, pager, next"},on:{"current-change":t.handleCurrentChange}})],1),t._v(" "),r("el-dialog",{attrs:{title:"成员设置",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[r("el-form",{ref:"form",attrs:{rules:t.formRules,model:t.formData,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"账号",prop:"account"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:t.formData.account,callback:function(e){t.$set(t.formData,"account",e)},expression:"formData.account"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{autocomplete:"off",placeholder:"请输入初始密码"},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"名称",prop:"name"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"手机号码",prop:"mobile"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:t.formData.mobile,callback:function(e){t.$set(t.formData,"mobile",e)},expression:"formData.mobile"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"角色",prop:"roleId"}},[r("el-select",{attrs:{placeholder:"选择角色"},model:{value:t.formData.role,callback:function(e){t.$set(t.formData,"role",e)},expression:"formData.role"}},t._l(t.roleOption,function(t,e){return r("el-option",{key:e,attrs:{label:t,value:t}})}),1)],1),t._v(" "),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"group-manager"===t.formData.role,expression:"formData.role==='group-manager'"}],attrs:{label:"管理分组",prop:"groupId"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",placeholder:"选择分组"},model:{value:t.formData.groupIds,callback:function(e){t.$set(t.formData,"groupIds",e)},expression:"formData.groupIds"}},t._l(t.groupOption,function(t,e){return r("el-option",{key:e,attrs:{label:t.name,value:t.id}})}),1)],1)],1),t._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),r("el-button",{attrs:{disabled:t.formProps.disabled,type:"primary"},on:{click:t.submit}},[t._v("确 定")])],1)],1)],1)},a=[],o=(r("55dd"),r("28a5"),r("ac6a"),r("61f7")),i=r("c24f"),c=r("b775");function u(t){return Object(c["a"])({url:"/role/getOption",method:"get",params:t})}var l=r("23ba"),s=r("ed08"),f={data:function(){var t=function(t,e,r){Object(o["c"])(e)?r():r(new Error("请输入正确的用户名"))},e=function(t,e,r){e?Object(o["b"])(e)?r():r(new Error("8到16个字符，至少包含字母、数字、特殊符号中的两种")):r()};return{dialogVisible:!1,roleOption:[],groupOption:[],tableData:[],tempFormData:{},pagination:{page:1,rows:11,total:0},formProps:{disabled:!1},formData:{id:0,account:"",password:"",name:"",mobile:"",role:"member",groupIds:[],manageGroupStr:""},formRules:{account:[{required:!0,message:"请输入账号",trigger:"blur",validator:t}],password:[{trigger:"blur",validator:e}],name:[{required:!0,message:"请输入名称",trigger:"blur"}],role:[{required:!0,message:"请选择角色",trigger:"change"}]}}},created:function(){this.storeFormData(),this.getRoleOption(),this.getGroupOption(),this.getUserList()},methods:{getUserList:function(){var t=this;Object(i["e"])(this.pagination).then(function(e){var r=e.data.userList||[];r.forEach(function(t){t.createTime=Object(s["b"])(t.createTime),t.updateTime=Object(s["b"])(t.updateTime)}),t.tableData=r,t.pagination=e.data.pagination})},getRoleOption:function(){var t=this;u().then(function(e){t.roleOption=e.data.roleList||[]})},getGroupOption:function(){var t=this;Object(l["d"])().then(function(e){t.groupOption=e.data.groupList||[]})},handleCurrentChange:function(t){this.pagination.page=t,this.getUserList()},handleAdd:function(){this.restoreFormData(),this.dialogVisible=!0},handleEdit:function(t){this.restoreFormData(),this.formData=Object.assign(this.formData,t),this.formData.groupIds=t.manageGroupStr.split(",").filter(function(t){return""!==t&&"all"!==t}).map(function(t){return parseInt(t)}),this.dialogVisible=!0},handleRemove:function(t){var e=this;this.$confirm("此操作将删除该组员, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i["h"])(t.id).then(function(t){e.$message({message:t.message,type:"success",duration:5e3}),e.getUserList()})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},handleGroupRadioChange:function(t){this.formProps.showGroupSelect=2===t},submit:function(){var t=this;this.$refs.form.validate(function(e){if(!e)return!1;"admin"===t.formData.role||"manager"===t.formData.role?t.formData.manageGroupStr="all":"group-manager"===t.formData.role?t.formData.manageGroupStr=t.formData.groupIds.sort(function(t,e){return t-e}).join(","):t.formData.manageGroupStr="",0===t.formData.id?t.add():t.edit()})},add:function(){var t=this;this.formProps.disabled=!0,Object(i["a"])(this.formData).then(function(e){t.$message({message:e.message,type:"success",duration:5e3}),t.getUserList(),t.dialogVisible=!1}).finally(function(){t.formProps.disabled=!1})},edit:function(){var t=this;this.formProps.disabled=!0,Object(i["c"])(this.formData).then(function(e){t.$message({message:e.message,type:"success",duration:5e3}),t.getUserList(),t.dialogVisible=!1}).finally(function(){t.formProps.disabled=!1})},storeFormData:function(){this.tempFormData=JSON.parse(JSON.stringify(this.formData))},restoreFormData:function(){this.formData=JSON.parse(JSON.stringify(this.tempFormData))}}},p=f,d=r("2877"),g=Object(d["a"])(p,n,a,!1,null,null,null);e["default"]=g.exports},"520a":function(t,e,r){"use strict";var n=r("0bfb"),a=RegExp.prototype.exec,o=String.prototype.replace,i=a,c="lastIndex",u=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t[c]||0!==e[c]}(),l=void 0!==/()??/.exec("")[1],s=u||l;s&&(i=function(t){var e,r,i,s,f=this;return l&&(r=new RegExp("^"+f.source+"$(?!\\s)",n.call(f))),u&&(e=f[c]),i=a.call(f,t),u&&i&&(f[c]=f.global?i.index+i[0].length:e),l&&i&&i.length>1&&o.call(i[0],r,function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(i[s]=void 0)}),i}),t.exports=i},"55dd":function(t,e,r){"use strict";var n=r("5ca1"),a=r("d8e8"),o=r("4bf8"),i=r("79e5"),c=[].sort,u=[1,2,3];n(n.P+n.F*(i(function(){u.sort(void 0)})||!i(function(){u.sort(null)})||!r("2f21")(c)),"Array",{sort:function(t){return void 0===t?c.call(o(this)):c.call(o(this),a(t))}})},"5d58":function(t,e,r){t.exports=r("d8d6")},"5dbc":function(t,e,r){var n=r("d3f4"),a=r("8b97").set;t.exports=function(t,e,r){var o,i=e.constructor;return i!==r&&"function"==typeof i&&(o=i.prototype)!==r.prototype&&n(o)&&a&&a(t,o),t}},"5f1b":function(t,e,r){"use strict";var n=r("23c6"),a=RegExp.prototype.exec;t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var o=r.call(t,e);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==n(t))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"67bb":function(t,e,r){t.exports=r("f921")},"6b54":function(t,e,r){"use strict";r("3846");var n=r("cb7c"),a=r("0bfb"),o=r("9e1e"),i="toString",c=/./[i],u=function(t){r("2aba")(RegExp.prototype,i,t,!0)};r("79e5")(function(){return"/a/b"!=c.call({source:"a",flags:"b"})})?u(function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?a.call(t):void 0)}):c.name!=i&&u(function(){return c.call(this)})},7618:function(t,e,r){"use strict";r.d(e,"a",function(){return u});var n=r("5d58"),a=r.n(n),o=r("67bb"),i=r.n(o);function c(t){return c="function"===typeof i.a&&"symbol"===typeof a.a?function(t){return typeof t}:function(t){return t&&"function"===typeof i.a&&t.constructor===i.a&&t!==i.a.prototype?"symbol":typeof t},c(t)}function u(t){return u="function"===typeof i.a&&"symbol"===c(a.a)?function(t){return c(t)}:function(t){return t&&"function"===typeof i.a&&t.constructor===i.a&&t!==i.a.prototype?"symbol":c(t)},u(t)}},"8b97":function(t,e,r){var n=r("d3f4"),a=r("cb7c"),o=function(t,e){if(a(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(a){e=!0}return function(t,r){return o(t,r),e?t.__proto__=r:n(t,r),t}}({},!1):void 0),check:o}},9093:function(t,e,r){var n=r("ce10"),a=r("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,a)}},a481:function(t,e,r){"use strict";var n=r("cb7c"),a=r("4bf8"),o=r("9def"),i=r("4588"),c=r("0390"),u=r("5f1b"),l=Math.max,s=Math.min,f=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};r("214f")("replace",2,function(t,e,r,m){return[function(n,a){var o=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,o,a):r.call(String(o),n,a)},function(t,e){var a=m(r,t,this,e);if(a.done)return a.value;var f=n(t),p=String(this),d="function"===typeof e;d||(e=String(e));var b=f.global;if(b){var v=f.unicode;f.lastIndex=0}var y=[];while(1){var x=u(f,p);if(null===x)break;if(y.push(x),!b)break;var w=String(x[0]);""===w&&(f.lastIndex=c(p,o(f.lastIndex),v))}for(var D="",_=0,O=0;O<y.length;O++){x=y[O];for(var E=String(x[0]),S=l(s(i(x.index),p.length),0),I=[],j=1;j<x.length;j++)I.push(g(x[j]));var k=x.groups;if(d){var N=[E].concat(I,S,p);void 0!==k&&N.push(k);var R=String(e.apply(void 0,N))}else R=h(E,p,S,I,k,e);S>=_&&(D+=p.slice(_,S)+R,_=S+E.length)}return D+p.slice(_)}];function h(t,e,n,o,i,c){var u=n+t.length,l=o.length,s=d;return void 0!==i&&(i=a(i),s=p),r.call(c,s,function(r,a){var c;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(u);case"<":c=i[a.slice(1,-1)];break;default:var s=+a;if(0===s)return r;if(s>l){var p=f(s/10);return 0===p?r:p<=l?void 0===o[p-1]?a.charAt(1):o[p-1]+a.charAt(1):r}c=o[s-1]}return void 0===c?"":c})}})},aa77:function(t,e,r){var n=r("5ca1"),a=r("be13"),o=r("79e5"),i=r("fdef"),c="["+i+"]",u="​",l=RegExp("^"+c+c+"*"),s=RegExp(c+c+"*$"),f=function(t,e,r){var a={},c=o(function(){return!!i[t]()||u[t]()!=u}),l=a[t]=c?e(p):i[t];r&&(a[r]=l),n(n.P+n.F*c,"String",a)},p=f.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(s,"")),t};t.exports=f},b0c5:function(t,e,r){"use strict";var n=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},c5f6:function(t,e,r){"use strict";var n=r("7726"),a=r("69a8"),o=r("2d95"),i=r("5dbc"),c=r("6a99"),u=r("79e5"),l=r("9093").f,s=r("11e9").f,f=r("86cc").f,p=r("aa77").trim,d="Number",g=n[d],m=g,h=g.prototype,b=o(r("2aeb")(h))==d,v="trim"in String.prototype,y=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=v?e.trim():p(e,3);var r,n,a,o=e.charCodeAt(0);if(43===o||45===o){if(r=e.charCodeAt(2),88===r||120===r)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+e}for(var i,u=e.slice(2),l=0,s=u.length;l<s;l++)if(i=u.charCodeAt(l),i<48||i>a)return NaN;return parseInt(u,n)}}return+e};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof g&&(b?u(function(){h.valueOf.call(r)}):o(r)!=d)?i(new m(y(e)),r,g):y(e)};for(var x,w=r("9e1e")?l(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),D=0;w.length>D;D++)a(m,x=w[D])&&!a(g,x)&&f(g,x,s(m,x));g.prototype=h,h.constructor=g,r("2aba")(n,d,g)}},ed08:function(t,e,r){"use strict";r.d(e,"b",function(){return a}),r.d(e,"a",function(){return o});r("ac6a"),r("c5f6"),r("28a5"),r("a481"),r("6b54");var n=r("7618");function a(t,e){if(0===arguments.length)return null;var r,a=e||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(n["a"])(t)?r=t:("string"===typeof t&&/^[0-9]+$/.test(t)&&(t=parseInt(t)),"number"===typeof t&&10===t.toString().length&&(t*=1e3),r=new Date(t));var o={y:r.getFullYear(),m:r.getMonth()+1,d:r.getDate(),h:r.getHours(),i:r.getMinutes(),s:r.getSeconds(),a:r.getDay()},i=a.replace(/{(y|m|d|h|i|s|a)+}/g,function(t,e){var r=o[e];return"a"===e?["日","一","二","三","四","五","六"][r]:(t.length>0&&r<10&&(r="0"+r),r||0)});return i}function o(t){if(0===t)return"0 B";var e=1024,r=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],n=Math.floor(Math.log(t)/Math.log(e));return(t/Math.pow(e,n)).toPrecision(3)+" "+r[n]}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);