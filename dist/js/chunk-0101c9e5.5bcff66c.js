(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0101c9e5"],{"1f8b":function(s,t,e){s.exports=e.p+"img/login.d814adb7.png"},"6bac":function(s,t,e){},"8b48":function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"h-screen flex w-full bg-img vx-row no-gutter items-center justify-center",attrs:{id:"page-login"}},[a("div",{staticClass:"vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4"},[a("vx-card",[a("div",{staticClass:"full-page-bg-color",attrs:{slot:"no-body"},slot:"no-body"},[a("div",{staticClass:"vx-row no-gutter justify-center items-center"},[a("div",{staticClass:"vx-col hidden lg:block lg:w-1/2"},[a("img",{staticClass:"mx-auto",attrs:{src:e("1f8b"),alt:"login"}})]),a("div",{staticClass:"vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg"},[a("div",{staticClass:"p-8 login-tabs-container"},[a("div",{staticClass:"vx-card__title mb-4"},[a("h4",{staticClass:"mb-4"},[s._v("Login")]),a("p",[s._v("\n                  Welcome to the Certis DSP reporting  platform, please login to your account\n                ")])]),a("div",[a("vs-input",{staticClass:"w-full",attrs:{name:"username","icon-no-border":"",icon:"icon icon-user","icon-pack":"feather","label-placeholder":"Username"},model:{value:s.username,callback:function(t){s.username=t},expression:"username"}}),a("vs-input",{staticClass:"w-full mt-6",attrs:{type:"password",name:"password","icon-no-border":"",icon:"icon icon-lock","icon-pack":"feather","label-placeholder":"Password"},model:{value:s.password,callback:function(t){s.password=t},expression:"password"}}),a("vs-button",{staticClass:"float-right my-8",on:{click:s.login}},[s._v("Login")])],1)])])])])])],1)])},o=[],n={data:function(){return{username:"",password:"",checkbox_remember_me:!1}},methods:{login:function(){var s=this,t={username:this.username,password:this.password};this.$store.dispatch("login",t).then((function(t){s.$vs.notify({color:"success",title:"Success",text:t.data.message}),s.$router.push("/")})).catch((function(t){s.$vs.notify({color:"danger",title:"Can't login",text:t.data.messages.error}),console.error(t)}))}}},i=n,c=(e("f499"),e("2877")),l=Object(c["a"])(i,a,o,!1,null,null,null);t["default"]=l.exports},f499:function(s,t,e){"use strict";e("6bac")}}]);
//# sourceMappingURL=chunk-0101c9e5.5bcff66c.js.map