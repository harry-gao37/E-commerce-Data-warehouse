(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1022:function(e,n,a){"use strict";a.r(n);var t=a(1957),i=a(1491);for(var s in i)["default"].indexOf(s)<0&&function(e){a.d(n,e,(function(){return i[e]}))}(s);var d=a(18),r=Object(d.a)(i.default,t.a,t.b,!1,null,null,null);n.default=r.exports},1075:function(e,n,a){"use strict";a.r(n);var t=a(1076),i=a.n(t);for(var s in t)["default"].indexOf(s)<0&&function(e){a.d(n,e,(function(){return t[e]}))}(s);n.default=i.a},1076:function(e,n,a){"use strict";(function(e){n.__esModule=!0;var t=a(529),i=d(a(1088)),s=d(a(81));function d(e){return e&&e.__esModule?e:{default:e}}n.default={name:"secondary-menu",data:function(){return{menuList:(0,i.default)(this.type),index:0,id:this.$route.params.id,isTogHide:!1,isLeft:!0}},props:{type:String,className:String},watch:{isTogHide:function(n){var a=e(".main-layout-box");n?a.addClass("toggle"):a.removeClass("toggle")}},methods:{_toggleSubMenu:function(e){e.isOpen=!e.isOpen},_toggleMenu:function(){this.isTogHide=!this.isTogHide,this.isTogHide?(sessionStorage.setItem("isLeft",0),s.default.commit("projects/setSideBar",0)):(sessionStorage.setItem("isLeft",1),s.default.commit("projects/setSideBar",1))}},mounted:function(){},computed:Object.assign({},(0,t.mapState)("dag",["projectName"]))}}).call(this,a(46))},1082:function(e,n,a){},1086:function(e,n,a){"use strict";a.r(n);var t=a(1091),i=a(1075);for(var s in i)["default"].indexOf(s)<0&&function(e){a.d(n,e,(function(){return i[e]}))}(s);a(1090);var d=a(18),r=Object(d.a)(i.default,t.a,t.b,!1,null,null,null);n.default=r.exports},1088:function(e,n,a){"use strict";n.__esModule=!0;var t=d(a(64)),i=d(a(1089)),s=d(a(623));function d(e){return e&&e.__esModule?e:{default:e}}var r={projects:[{name:""+t.default.$t("Project Home"),id:0,path:"projects-index",isOpen:!0,disabled:!0,icon:"ans-icon-home-solid",children:[]},{name:""+t.default.$t("Process"),id:1,path:"",isOpen:!0,disabled:!0,icon:"ans-icon-gear",children:[{name:""+t.default.$t("Process definition"),path:"definition",id:0,disabled:!0},{name:""+t.default.$t("Process Instance"),path:"instance",id:1,disabled:!0},{name:""+t.default.$t("Task Instance"),path:"task-instance",id:2,disabled:!0},{name:""+t.default.$t("Task record"),path:"task-record",id:3,disabled:i.default.recordSwitch},{name:""+t.default.$t("History task record"),path:"history-task-record",id:4,disabled:i.default.recordSwitch}]}],security:[{name:""+t.default.$t("Tenant Manage"),id:0,path:"tenement-manage",isOpen:!0,disabled:!0,icon:"ans-icon-user-solid",children:[]},{name:""+t.default.$t("User Manage"),id:1,path:"users-manage",isOpen:!0,disabled:!0,icon:"ans-icon-user-circle-solid",children:[]},{name:""+t.default.$t("Warning group manage"),id:2,path:"warning-groups-manage",isOpen:!0,disabled:!0,icon:"ans-icon-danger-solid",children:[]},{name:""+t.default.$t("Worker group manage"),id:4,path:"worker-groups-manage",isOpen:!0,disabled:!0,icon:"ans-icon-diary",children:[]},{name:""+t.default.$t("Queue manage"),id:3,path:"queue-manage",isOpen:!0,disabled:!0,icon:"ans-icon-recycle",children:[]},{name:""+t.default.$t("Token manage"),id:2,path:"token-manage",isOpen:!0,icon:"ans-icon-document",children:[],disabled:!0}],resource:[{name:""+t.default.$t("File Manage"),id:0,path:"file",isOpen:!0,icon:"ans-icon-documents",children:[],disabled:!0},{name:""+t.default.$t("UDF manage"),id:1,path:"",isOpen:!0,icon:"ans-icon-document",disabled:!0,children:[{name:""+t.default.$t("Resource manage"),path:"resource-udf",id:0,disabled:!0},{name:""+t.default.$t("Function manage"),path:"resource-func",id:1,disabled:!0}]}],user:[{name:""+t.default.$t("User Information"),id:0,path:"account",isOpen:!0,icon:"ans-icon-user-solid",children:[],disabled:!0},{name:""+t.default.$t("Edit password"),id:1,path:"password",isOpen:!0,icon:"ans-icon-key",children:[],disabled:!0},{name:""+t.default.$t("Token manage"),id:2,path:"token",isOpen:!0,icon:"ans-icon-diary",children:[],disabled:s.default.getAuth()}],monitor:[{name:""+t.default.$t("Servers manage"),id:1,path:"",isOpen:!0,disabled:!0,icon:"ans-icon-menu",children:[{name:"Master",path:"servers-master",id:0,disabled:!0},{name:"Worker",path:"servers-worker",id:1,disabled:!0},{name:"Zookeeper",path:"servers-zookeeper",id:4,disabled:!0},{name:"DB",path:"servers-db",id:6,disabled:!0}]},{name:""+t.default.$t("Statistics manage"),id:0,path:"",isOpen:!0,disabled:!0,icon:"ans-icon-menu",children:[{name:"Statistics",path:"statistics",id:0,disabled:!0}]}]};n.default=function(e){return r[e]}},1089:function(e,n,a){"use strict";n.__esModule=!0,n.default={recordSwitch:!1}},1090:function(e,n,a){"use strict";a(1082)},1091:function(e,n,a){"use strict";a.d(n,"a",(function(){return t})),a.d(n,"b",(function(){return i}));var t=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"secondary-menu-model",class:e.className},[a("div",{staticClass:"toogle-box"},[e.isTogHide?e._e():a("a",{staticClass:"tog-close",attrs:{href:"javascript:"},on:{click:e._toggleMenu}}),e._v(" "),e.isTogHide?a("a",{staticClass:"tog-open",attrs:{href:"javascript:"},on:{click:e._toggleMenu}}):e._e()]),e._v(" "),e._l(e.menuList,(function(n,t){return a("div",{key:t,staticClass:"leven-1"},[n.disabled?a("div",[n.path?[a("router-link",{attrs:{to:{name:n.path}}},[a("div",{staticClass:"name",on:{click:function(a){return e._toggleSubMenu(n)}}},[a("a",{attrs:{href:"javascript:"}},[a("em",{staticClass:"fa icon",class:n.icon}),e._v(" "),a("span",[e._v(e._s(n.name)+e._s("projects-index"===n.path?" - "+e.projectName:""))]),e._v(" "),n.children.length?a("em",{staticClass:"fa angle",class:n.isOpen?"ans-icon-arrow-down":"ans-icon-arrow-right"}):e._e()])])])]:e._e(),e._v(" "),n.path?e._e():[a("div",{staticClass:"name",on:{click:function(a){return e._toggleSubMenu(n)}}},[a("a",{attrs:{href:"javascript:"}},[a("em",{staticClass:"fa icon",class:n.icon}),e._v(" "),a("span",[e._v(e._s(n.name))]),e._v(" "),n.children.length?a("em",{staticClass:"fa angle",class:n.isOpen?"ans-icon-arrow-down":"ans-icon-arrow-right"}):e._e()])])],e._v(" "),n.isOpen&&n.children.length?a("ul",[e._l(n.children,(function(n,t){return[n.disabled?a("router-link",{key:t,attrs:{to:{name:n.path},tag:"li","active-class":"active"}},[a("span",[e._v(e._s(n.name))])]):e._e()]}))],2):e._e()],2):e._e()])}))],2)},i=[]},1491:function(e,n,a){"use strict";a.r(n);var t=a(1492),i=a.n(t);for(var s in t)["default"].indexOf(s)<0&&function(e){a.d(n,e,(function(){return t[e]}))}(s);n.default=i.a},1492:function(e,n,a){"use strict";n.__esModule=!0;var t,i=a(1086),s=(t=i)&&t.__esModule?t:{default:t};n.default={name:"resource-index",components:{mSecondaryMenu:s.default},mounted:function(){this.$modal.destroy()}}},1957:function(e,n,a){"use strict";a.d(n,"a",(function(){return t})),a.d(n,"b",(function(){return i}));var t=function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"main-layout-box"},[n("m-secondary-menu",{attrs:{type:"resource"}}),this._v(" "),n("router-view")],1)},i=[]}}]);