(function(e){function t(t){for(var r,a,i=t[0],u=t[1],l=t[2],p=0,d=[];p<i.length;p++)a=i[p],s[a]&&d.push(s[a][0]),s[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);c&&c(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==s[u]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},s={1:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=u;o.push([3,0]),n()})({3:function(e,t,n){e.exports=n("Vtdi")},BoSY:function(e,t,n){},D43M:function(e,t,n){"use strict";var r=n("xHJG"),s=n.n(r);s.a},EDI0:function(e,t,n){},T0L3:function(e,t,n){"use strict";var r=n("BoSY"),s=n.n(r);s.a},Vtdi:function(e,t,n){"use strict";n.r(t);var r=n("Kw5r"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.isAuthenticated?n("Chat",{attrs:{server:e.server,token:e.token,username:e.username}}):n("Login",{on:{login:e.login}})],1)},o=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.server,expression:"server"}],attrs:{type:"url",placeholder:"server"},domProps:{value:e.server},on:{input:function(t){t.target.composing||(e.server=t.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("br"),n("input",{attrs:{type:"submit",value:"Login"}})])])},i=[],u={name:"Login",data(){return{server:"http://localhost:5000",path:"/login",username:null,password:null,token:null}},methods:{submit(){const e={EmailOrUsername:this.username,Password:this.password};fetch(this.server+this.path,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e),mode:"cors"}).then(e=>e.text()).then(e=>this.$emit("login",this.server,e,this.username))}}},l=u,c=(n("D43M"),n("KHd+")),p=Object(c["a"])(l,a,i,!1,null,"7c6bcd2a",null),d=p.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ul",e._l(e.messages,function(t){return n("li",{key:t.key},[n("span",{style:e.senderStyle(t.sender)},[e._v(e._s(t.sender))]),e._v(": "+e._s(t.text)+"\n        ")])})),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newMessage,expression:"newMessage"}],attrs:{type:"text"},domProps:{value:e.newMessage},on:{keypress:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.send(t):null},input:function(t){t.target.composing||(e.newMessage=t.target.value)}}})])},h=[],v={name:"Chat",props:["server","token","username"],data(){return{path:"/hubs/chat",messages:[],newMessage:null}},created(){this.connection=(new signalR.HubConnectionBuilder).withUrl(this.server+this.path,{transport:1,accessTokenFactory:()=>this.token,skipNegotiation:!0}).build()},mounted(){this.connection.start(),this.connection.on("Message",(e,t)=>{this.messages.push({sender:e,text:t})})},methods:{send(){this.connection.send("Send",this.newMessage),this.newMessage=null},senderStyle(e){return{color:e==this.username?"yellow":"navy"}}}},f=v,g=(n("T0L3"),Object(c["a"])(f,m,h,!1,null,"34474fa1",null)),w=g.exports,y={name:"app",components:{Login:d,Chat:w},data(){return{token:null}},methods:{login(e,t,n){this.server=e,this.token=t,this.username=n},logout(){this.token=null}},computed:{isAuthenticated(){return null!=this.token}}},b=y,x=(n("ZL7j"),Object(c["a"])(b,s,o,!1,null,null,null)),k=x.exports;r["a"].config.productionTip=!1,new r["a"]({render:e=>e(k)}).$mount("#app")},ZL7j:function(e,t,n){"use strict";var r=n("EDI0"),s=n.n(r);s.a},xHJG:function(e,t,n){}});
//# sourceMappingURL=app.5be3a1cb.js.map