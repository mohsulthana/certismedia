(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8129d6b2"],{"1f8b":function(t,s,a){t.exports=a.p+"img/login.d814adb7.png"},"6bac":function(t,s,a){},"8b48":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"h-screen flex w-full bg-img vx-row no-gutter items-center justify-center",attrs:{id:"page-login"}},[e("div",{staticClass:"vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4"},[e("vx-card",[e("div",{staticClass:"full-page-bg-color",attrs:{slot:"no-body"},slot:"no-body"},[e("div",{staticClass:"vx-row no-gutter justify-center items-center"},[e("div",{staticClass:"vx-col hidden lg:block lg:w-1/2"},[e("img",{staticClass:"mx-auto",attrs:{src:a("1f8b"),alt:"login"}})]),e("div",{staticClass:"vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg"},[e("div",{staticClass:"p-8 login-tabs-container"},[e("div",{staticClass:"vx-card__title mb-4"},[e("h4",{staticClass:"mb-4"},[t._v("Login")]),e("p",[t._v("\n                  Welcome to the Certis DSP reporting platform, please login\n                  to your account\n                ")])]),e("div",[e("vs-input",{staticClass:"w-full",attrs:{name:"username","icon-no-border":"",icon:"icon icon-user","icon-pack":"feather","label-placeholder":"Username"},model:{value:t.username,callback:function(s){t.username=s},expression:"username"}}),e("vs-input",{staticClass:"w-full mt-6",attrs:{type:"password",name:"password","icon-no-border":"",icon:"icon icon-lock","icon-pack":"feather","label-placeholder":"Password"},model:{value:t.password,callback:function(s){t.password=s},expression:"password"}}),e("vs-button",{staticClass:"float-left my-8",attrs:{type:"border",to:"/register"}},[t._v("Register")]),e("vs-button",{staticClass:"float-right my-8",on:{click:t.login}},[t._v("Login")])],1)])])])])])],1)])},o=[],n={data:function(){return{username:"",password:"",checkbox_remember_me:!1}},methods:{login:function(){var t=this,s={username:this.username,password:this.password};this.$store.dispatch("login",s).then((function(s){0==s.data.status_dashboard||0==s.data.status_reporting?t.$vs.notify({color:"warning",title:"Your account is not ready,",text:"Your account is in synchronization. Please try again later."}):"warning"==s.data.state?t.$vs.notify({color:s.data.state,title:s.data.state.toUpperCase(),text:s.data.message}):(t.$vs.notify({color:s.data.state,title:s.data.state.toUpperCase(),text:s.data.message}),t.$router.push("/"))})).catch((function(s){console.log(s),t.$vs.notify({color:"danger",title:"Can't login",text:s.data.messages.error})}))}}},i=n,r=(a("f499"),a("2877")),l=Object(r["a"])(i,e,o,!1,null,null,null);s["default"]=l.exports},f499:function(t,s,a){"use strict";a("6bac")}}]);
//# sourceMappingURL=chunk-8129d6b2.bfb3bfc0.js.map