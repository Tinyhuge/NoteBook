(this.webpackJsonpnotebook=this.webpackJsonpnotebook||[]).push([[0],{129:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a.n(r),c=a(26),s=a.n(c),o=a(36),i=a(16),l=a(8),j=a.n(l),u=a(12),d=a(37),b=a(15),h=a(14),O=a(134),x=a(147),p=a(148),f=a(10),m=a(73),g=a.n(m).a.create({baseURL:"http://localhost:8090"}),v=a(17),y=a(18),w=a(20),N=a(19),S=a(130),C=a(131),k=a(132),A=a(133),W=a(74),q=a(0),E=function(e){Object(w.a)(a,e);var t=Object(N.a)(a);function a(e){var r;return Object(v.a)(this,a),(r=t.call(this,e)).login=function(){var e=Object(u.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=Object(i.a)({},r.state),e.next=4,g.post("/token",a).then((function(e){console.log(e.data),f.a.success("Login Successfull...",{position:"bottom-center"}),"authorization"===localStorage.getItem&&localStorage.removeItem("authorization"),localStorage.setItem("authorization",e.data.token),r.props.history.push("/")}),(function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.state={username:"",password:""},r}return Object(y.a)(a,[{key:"render",value:function(){var e=this;return Object(q.jsxs)("div",{children:[Object(q.jsx)("h2",{children:"Login to Your Account!"}),Object(q.jsxs)(S.a,{onSubmit:this.login,children:[Object(q.jsxs)(C.a,{children:[Object(q.jsx)(k.a,{for:"username",children:"Enter your email :"}),Object(q.jsx)(A.a,{id:"username",name:"username",type:"email",placeholder:"yourmail@email.com",required:!0,onChange:function(t){return e.setState({username:t.target.value})},value:this.state.username,style:{height:46}})]}),Object(q.jsx)("br",{}),Object(q.jsxs)(C.a,{children:[Object(q.jsx)(k.a,{for:"password",children:"Enter your password :"}),Object(q.jsx)(A.a,{id:"password",name:"password",type:"password",placeholder:"Enter your password...",required:!0,onChange:function(t){return e.setState({password:t.target.value})},value:this.state.password,style:{height:46}})]}),Object(q.jsx)("br",{}),Object(q.jsxs)(O.a,{className:"text-center",children:[Object(q.jsx)(W.a,{color:"success",children:"Login to Account"}),Object(q.jsx)(W.a,{color:"warning mx-3",children:"Log Out"})]})," ",Object(q.jsx)("br",{}),Object(q.jsxs)(O.a,{className:"text-center",children:[Object(q.jsx)(W.a,{outline:!0,color:"warning",children:"Login With Google"}),Object(q.jsx)(W.a,{color:"primary mx-3",children:"Login With FaceBook"})]}),Object(q.jsx)("br",{})]})]})}}]),a}(n.a.Component),D=a(135),P=a(136),M=a(137),U=a(138),z=function(e){var t=e.note,a=t.id,r=t.title,n=t.description,c=t.createdAt,s=t.lastModified,o=t.noteCategory;return Object(q.jsxs)(O.a,{children:[Object(q.jsx)("br",{}),Object(q.jsxs)(D.a,{body:!0,color:"light",children:[Object(q.jsx)("br",{}),Object(q.jsx)(P.a,{tag:"h2",children:r}),Object(q.jsx)("br",{}),Object(q.jsx)(M.a,{tag:"h6",children:n}),Object(q.jsx)("br",{}),Object(q.jsxs)(U.a,{children:["Created Date : ",c]}),Object(q.jsx)("br",{}),Object(q.jsxs)(U.a,{children:["Modified Date : ",s]}),Object(q.jsx)("br",{}),Object(q.jsxs)(b.b,{to:{pathname:"/view-note/".concat(o),state:{note:e.note}},children:[Object(q.jsx)(U.a,{color:"success",tag:"h4",children:o}),Object(q.jsx)("br",{})]}),Object(q.jsxs)(O.a,{className:"text-center",children:[Object(q.jsx)(b.b,{to:{pathname:"/note/".concat(a),state:{note:e.note}},children:Object(q.jsx)(W.a,{color:"primary",outline:!0,children:"Edit Note"})}),Object(q.jsx)(W.a,{onClick:function(){return e.deleteNoteFromServer(a)},color:"danger mx-3",children:"DeleteNote"})]}),Object(q.jsx)("br",{})]}),Object(q.jsx)("br",{})]})},I=function(e){var t=function(t){e.deleteNote(t)},a=e.notees.map((function(e){return Object(q.jsx)(z,{note:e,deleteNoteFromServer:t},e.id)}));return Object(q.jsxs)("div",{children:[Object(q.jsx)("br",{}),Object(q.jsx)("h4",{className:"text-center",children:"Saved Notes"}),Object(q.jsx)("div",{className:"text-center"}),Object(q.jsx)("div",{className:"text-center",children:a})]})},Y=function(e){Object(w.a)(a,e);var t=Object(N.a)(a);function a(e){var r;return Object(v.a)(this,a),(r=t.call(this,e)).fetchAccountDetails=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/user").then((function(e){f.a.success("Acount Details Fetched Successfully..."),console.log(e.data),r.setState({name:e.data.name,email:e.data.email,password:e.data.password,enabled:e.data.enabled,role:e.data.role,about:e.data.about})}),(function(e){console.log(e),f.a.error("Something Went Wrong While Fetching Account Details!!")}));case 2:case"end":return e.stop()}}),e)}))),r.state={name:"",email:"",password:"",enabled:!0,role:"",about:""},r}return Object(y.a)(a,[{key:"componentDidMount",value:function(){this.fetchAccountDetails()}},{key:"render",value:function(){return Object(q.jsxs)("div",{children:[Object(q.jsx)("br",{}),Object(q.jsxs)("h3",{children:["Welcome, ",this.state.name]}),Object(q.jsx)("br",{}),Object(q.jsxs)(O.a,{children:[Object(q.jsx)("br",{}),Object(q.jsxs)(D.a,{body:!0,color:"light",children:[Object(q.jsx)("br",{}),Object(q.jsxs)(P.a,{tag:"h2",children:["Name : ",this.state.name]}),Object(q.jsx)("br",{}),Object(q.jsxs)(M.a,{tag:"h4",children:["Email : ",this.state.email]}),Object(q.jsx)("br",{}),Object(q.jsxs)(U.a,{tag:"h6",children:["Password : ",this.state.password]}),Object(q.jsx)("br",{}),Object(q.jsxs)(U.a,{tag:"h5",children:["Account Enabled : ",this.state.enabled]}),Object(q.jsx)("br",{}),Object(q.jsxs)(U.a,{tag:"h5",children:["Role : ",this.state.role]}),Object(q.jsx)("br",{}),Object(q.jsxs)(U.a,{tag:"h5",children:["About : ",this.state.about]}),Object(q.jsx)("br",{}),Object(q.jsxs)(O.a,{className:"text-center",children:[Object(q.jsx)(b.b,{to:"edit-profile",children:Object(q.jsx)(W.a,{color:"primary",outline:!0,children:"Edit Profile"})}),Object(q.jsx)(b.b,{to:"/reset",children:Object(q.jsx)(W.a,{color:"danger mx-3",children:"Reset Password"})})]}),Object(q.jsx)("br",{})]}),Object(q.jsx)("br",{})]})]})}}]),a}(r.Component),L=function(e){Object(w.a)(a,e);var t=Object(N.a)(a);function a(e){var r;return Object(v.a)(this,a),(r=t.call(this,e)).updatePassword=function(){var e=Object(u.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r.state.password===r.state.password2){e.next=5;break}return console.log("Both Password Should Match!!"),f.a.error("Both Password Should Match!!"),e.abrupt("return");case 5:return a={password:r.state.password},console.log(a),e.next=9,g.put("/reset",a).then((function(e){console.log(e.data),f.a.success("Password Changed Successfully..."),"authorization"===localStorage.getItem&&localStorage.removeItem("authorization"),r.props.history.push("/login")}),(function(e){console.log(e),f.a.error("Something Went Wrong While Resetting Password!!")}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.settingHeader=function(){var e=localStorage.getItem("authorization");g.interceptors.request.use((function(t){return e&&(t.headers.authorization="Bearer "+e,console.log("Yeah..Interceptor gets triggered manually"),f.a.success("Auth Token Used..")),t}),(function(e){return Promise.reject(e)}))},r.fetchUserAccount=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.settingHeader(),e.next=3,g.post("/user").then((function(e){console.log(e.data),r.setState({name:e.data.name})}),(function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)}))),r.state={password:"",password2:"",name:""},r}return Object(y.a)(a,[{key:"componentDidMount",value:function(){this.fetchUserAccount()}},{key:"render",value:function(){var e=this;return Object(q.jsxs)("div",{children:[Object(q.jsx)("br",{}),Object(q.jsxs)("h3",{children:["Welcome, ",this.state.name]}),Object(q.jsx)("br",{}),Object(q.jsxs)(S.a,{onSubmit:this.updatePassword,children:[Object(q.jsxs)(C.a,{children:[Object(q.jsx)(k.a,{for:"password",children:"Enter New Password :"}),Object(q.jsx)(A.a,{type:"password",id:"password",name:"password",required:!0,onChange:function(t){return e.setState({password:t.target.value})},value:this.state.password,placeholder:"*****************",style:{height:56}})]}),Object(q.jsx)("br",{}),Object(q.jsxs)(C.a,{children:[Object(q.jsx)(k.a,{for:"password2",children:"Enter New Password :"}),Object(q.jsx)(A.a,{type:"text",id:"password2",name:"password2",required:!0,onChange:function(t){return e.setState({password2:t.target.value})},value:this.state.password2,placeholder:"Re-enter your password",style:{height:56}})]}),Object(q.jsx)("br",{}),Object(q.jsx)(O.a,{className:"text-left",children:Object(q.jsx)(W.a,{color:"success",children:"Reset Password"})}),Object(q.jsx)("br",{})]})]})}}]),a}(r.Component),B=function(e){Object(w.a)(a,e);var t=Object(N.a)(a);function a(e){var r;return Object(v.a)(this,a),(r=t.call(this,e)).settingHeader=function(){var e=localStorage.getItem("authorization");g.interceptors.request.use((function(t){return e&&(t.headers.authorization="Bearer "+e,console.log("Yeah..Interceptor gets triggered manually"),f.a.success("Auth Token Used..")),t}),(function(e){return Promise.reject(e)}))},r.updateProfile=function(){var e=Object(u.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=Object(i.a)({},r.state),e.next=4,g.put("/user",a).then((function(e){console.log(e.data),f.a.success("Note Updated Successfully..."),r.props.history.push("/")}),(function(e){console.log(e),f.a.error("Something Went Wrong While Updating Note!!!")}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.fetchUserAccount=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.settingHeader(),e.next=3,g.get("/user").then((function(e){console.log(e.data),r.setState({name:e.data.name,email:e.data.email,about:e.data.about})}),(function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)}))),r.state={name:"",email:"",password:"",enabled:!0,role:"",about:""},r}return Object(y.a)(a,[{key:"componentDidMount",value:function(){this.fetchUserAccount()}},{key:"render",value:function(){var e=this;return Object(q.jsxs)("div",{children:[Object(q.jsx)("br",{}),Object(q.jsxs)("h3",{children:["Welcome, ",this.state.name]}),Object(q.jsx)("br",{}),Object(q.jsxs)(S.a,{onSubmit:this.updateProfile,children:[Object(q.jsxs)(C.a,{children:[Object(q.jsx)(k.a,{for:"name",children:"My Name :"}),Object(q.jsx)(A.a,{id:"name",name:"name",type:"text",required:!0,onChange:function(t){return e.setState({title:t.target.value})},value:this.state.name,style:{textShadow:"-moz-initial"}})]})," ",Object(q.jsx)("br",{}),Object(q.jsxs)(C.a,{children:[Object(q.jsx)(k.a,{for:"email",children:"My Email :"}),Object(q.jsx)(A.a,{id:"email",name:"email",type:"email",required:!0,onChange:function(t){return e.setState({title:t.target.value})},value:this.state.email,style:{textShadow:"-moz-initial"}})]})," ",Object(q.jsx)("br",{}),Object(q.jsxs)(C.a,{children:[Object(q.jsx)(k.a,{for:"about",children:"About Myself :"}),Object(q.jsx)(A.a,{id:"about",name:"about",type:"textarea",required:!0,onChange:function(t){return e.setState({title:t.target.value})},value:this.state.about,style:{height:150}})]})," ",Object(q.jsx)("br",{}),Object(q.jsx)(O.a,{className:"text-center",children:Object(q.jsx)(W.a,{type:"submit",color:"success",children:"Update Profile"})})," ",Object(q.jsx)("br",{})]})]})}}]),a}(r.Component),H=function(e){Object(w.a)(a,e);var t=Object(N.a)(a);function a(e){var r;Object(v.a)(this,a),(r=t.call(this,e)).updateNote=function(){var e=Object(u.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=Object(i.a)({},r.state),e.next=4,g.put("/note",a).then((function(e){console.log(e.data),f.a.success("Note Updated Successfully..."),r.props.history.push("/")}),(function(e){console.log(e),f.a.error("Something Went Wrong While Updating Note!!!")}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var n=e.location.state.note,c=n.id,s=n.title,o=n.noteCategory,l=n.description,d=n.createdAt,b=n.lastModified;return r.state={id:c,title:s,description:l,createdAt:d,lastModified:b,noteCategory:o},r}return Object(y.a)(a,[{key:"render",value:function(){var e=this;return Object(q.jsxs)("div",{children:[Object(q.jsx)("br",{}),Object(q.jsx)("h3",{children:"Edit Your Note.."}),Object(q.jsx)("br",{}),Object(q.jsxs)(S.a,{onSubmit:this.updateNote,children:[Object(q.jsxs)(C.a,{children:[Object(q.jsx)(k.a,{for:"title",children:"Enter Note Heading :"}),Object(q.jsx)(A.a,{id:"title",name:"title",type:"text",placeholder:"Title of your awesome Note...",required:!0,onChange:function(t){return e.setState({title:t.target.value})},value:this.state.title,style:{textShadow:"-moz-initial"}})]})," ",Object(q.jsx)("br",{}),Object(q.jsxs)(C.a,{children:[Object(q.jsx)(k.a,{for:"description",children:"Describe Your Note :"}),Object(q.jsx)(A.a,{id:"description",name:"description",type:"textarea",placeholder:"your awesome Note...",required:!0,onChange:function(t){return e.setState({description:t.target.value})},value:this.state.description,style:{height:120}})]}),Object(q.jsx)("br",{}),Object(q.jsxs)(C.a,{children:[Object(q.jsx)(k.a,{for:"category",children:"Describe Your Note :"}),Object(q.jsx)(A.a,{id:"category",name:"category",type:"text",required:!0,placeholder:"Note Category...",onChange:function(t){return e.setState({noteCategory:t.target.value})},value:this.state.noteCategory,style:{height:46}})]}),Object(q.jsx)("br",{}),Object(q.jsx)(W.a,{type:"submit",color:"success",children:"Update Note"}),Object(q.jsx)("br",{}),Object(q.jsx)("br",{})]})]})}}]),a}(r.Component),R=function(e){Object(w.a)(a,e);var t=Object(N.a)(a);function a(e){var r;Object(v.a)(this,a),(r=t.call(this,e)).fetchNoteByCategory=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/category/".concat(r.state.noteCategory)).then((function(e){console.log(e.data),f.a.success("Note Updated Successfully..."),r.setState({notes:e.data}),console.log(r.state.notes)}),(function(e){console.log(e),f.a.error("Something Went Wrong While Updating Note!!!")}));case 2:case"end":return e.stop()}}),e)})));var n=e.location.state.note,c=(n.id,n.noteCategory);return r.state={noteCategory:c,notes:[""]},r}return Object(y.a)(a,[{key:"componentDidMount",value:function(){this.fetchNoteByCategory(),console.log(this.state.notes)}},{key:"render",value:function(){return Object(q.jsxs)("div",{children:[Object(q.jsx)("br",{}),Object(q.jsxs)("h3",{children:["Showing Notes Of ",this.state.noteCategory]}),Object(q.jsx)("br",{})]})}}]),a}(r.Component),F=function(e){Object(w.a)(a,e);var t=Object(N.a)(a);function a(e){var r;return Object(v.a)(this,a),(r=t.call(this,e)).createAccount=function(){var e=Object(u.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==r.state.name&&""!==r.state.email&&""!==r.state.password&&""!==r.state.about){e.next=5;break}return f.a.error("All Fields Are Required!!"),console.log("All Fields Are Required!!"),e.abrupt("return");case 5:return a=Object(i.a)({},r.state),e.next=8,g.post("/register",a).then((function(e){console.log(e.data),f.a.success("Account Created Successfully..."),r.props.history.push("/login")}),(function(e){console.log(e),f.a.error("Something Went Wrong While Creating Account!!!")}));case 8:r.setState({name:"",email:"",password:"",about:""});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.state={name:"",email:"",password:"",about:""},r}return Object(y.a)(a,[{key:"render",value:function(){var e=this;return Object(q.jsxs)("div",{children:[Object(q.jsx)("h2",{children:"Create Account to Save Your Notes.."}),Object(q.jsxs)(S.a,{onSubmit:this.createAccount,children:[Object(q.jsxs)(C.a,{children:[Object(q.jsx)(k.a,{for:"username",children:"Enter Full Name :"}),Object(q.jsx)(A.a,{type:"text",id:"username",name:"username",required:!0,onChange:function(t){return e.setState({name:t.target.value})},value:this.state.name,placeholder:"Enter your name...",style:{height:56}})]}),Object(q.jsx)("br",{}),Object(q.jsxs)(C.a,{children:[Object(q.jsx)(k.a,{for:"useremail",children:"Enter Email :"}),Object(q.jsx)(A.a,{type:"email",id:"useremail",name:"useremail",required:!0,onChange:function(t){return e.setState({email:t.target.value})},value:this.state.email,placeholder:"yourmail@email.com...",style:{height:56}})]}),Object(q.jsx)("br",{}),Object(q.jsxs)(C.a,{children:[Object(q.jsx)(k.a,{for:"password",children:"Enter Password :"}),Object(q.jsx)(A.a,{type:"text",id:"password",name:"password",required:!0,onChange:function(t){return e.setState({password:t.target.value})},value:this.state.password,placeholder:"Your password...",style:{height:56}})]}),Object(q.jsx)("br",{}),Object(q.jsxs)(C.a,{children:[Object(q.jsx)(k.a,{for:"username",children:"About YourSelf :"}),Object(q.jsx)(A.a,{type:"textarea",id:"about",name:"about",required:!0,onChange:function(t){return e.setState({about:t.target.value})},value:this.state.about,placeholder:"Tell us about yourself...",style:{height:100}})]}),Object(q.jsx)("br",{}),Object(q.jsx)(O.a,{className:"text-left",children:Object(q.jsx)(W.a,{color:"success",children:"Create Account"})}),Object(q.jsx)("br",{})]})]})}}]),a}(r.Component),T=a(139),J=a(140),G=a(141),V=a(142),K=a(143),Q=a(144),X=a(149),Z=a(150),$=a(151),_=a(145),ee=a(146),te=function(e){var t=Object(r.useState)(!1),a=Object(d.a)(t,2),n=a[0],c=a[1];return Object(q.jsx)("div",{children:Object(q.jsxs)(T.a,{style:{padding:8},color:"primary",dark:!0,expand:"md",children:[Object(q.jsx)(J.a,{href:"/",children:"NoteBook : Cloud NoteTaker App"}),Object(q.jsx)(G.a,{onClick:function(){return c(!n)}}),Object(q.jsx)(V.a,{isOpen:n,navbar:!0,children:Object(q.jsxs)(K.a,{className:"mr-auto",navbar:!0,children:[Object(q.jsx)(Q.a,{children:Object(q.jsx)(b.b,{className:"nav-link active",to:"/",children:"Home"})}),Object(q.jsx)(Q.a,{children:Object(q.jsx)(b.b,{className:"nav-link active",to:"/add",children:"Create Note"})}),Object(q.jsx)(Q.a,{children:Object(q.jsx)(b.b,{className:"nav-link active",to:"/",children:"Show Notes"})}),Object(q.jsx)(Q.a,{children:Object(q.jsx)(b.b,{className:"nav-link active",to:"/account",children:"My Account"})}),Object(q.jsx)(Q.a,{children:Object(q.jsx)(b.b,{className:"nav-link active",to:"/reset",children:"Reset Password"})}),Object(q.jsx)(Q.a,{children:Object(q.jsx)(b.b,{className:"nav-link active",to:"/edit-profile",children:"Edit Profile"})}),Object(q.jsx)(Q.a,{children:Object(q.jsx)(b.b,{className:"nav-link active",to:"/login",children:"Login"})}),Object(q.jsx)(Q.a,{children:Object(q.jsx)(b.b,{className:"nav-link active",to:"/signup",children:"Create Account"})}),Object(q.jsxs)(X.a,{nav:!0,inNavbar:!0,children:[Object(q.jsx)(Z.a,{nav:!0,caret:!0,children:"Shorty"}),Object(q.jsxs)($.a,{color:"primary",right:!0,children:[Object(q.jsx)(_.a,{children:Object(q.jsx)(ee.a,{href:"/",children:"Home"})}),Object(q.jsx)(_.a,{divider:!0}),Object(q.jsx)(_.a,{children:Object(q.jsx)(ee.a,{href:"/add",children:"Add Links"})}),Object(q.jsx)(_.a,{divider:!0}),Object(q.jsx)(_.a,{children:Object(q.jsx)(ee.a,{href:"/",children:"View Links"})}),Object(q.jsx)(_.a,{divider:!0}),Object(q.jsx)(_.a,{children:Object(q.jsx)(ee.a,{href:"/login",children:"Login"})}),Object(q.jsx)(_.a,{divider:!0}),Object(q.jsx)(_.a,{children:Object(q.jsx)(ee.a,{href:"/account",children:"Create Account"})}),Object(q.jsx)(_.a,{divider:!0}),Object(q.jsx)(_.a,{children:Object(q.jsx)(ee.a,{href:"/",children:"Log Out"})}),Object(q.jsx)(_.a,{divider:!0})]})]})]})})]})})},ae=a(33),re=function(e){Object(w.a)(a,e);var t=Object(N.a)(a);function a(e){var r;return Object(v.a)(this,a),(r=t.call(this,e)).createNote=function(){var e=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),r.props.createNoteHandler(r.state),console.log(r.state),r.setState({title:"",description:"",noteCategory:""}),r.props.history.push("/");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.state={title:"",description:"",noteCategory:""},r}return Object(y.a)(a,[{key:"handleMultipleArray",value:function(e,t){var a=e.target,r=a.name,n=a.description;this.setState((function(e){var c,s=Object(o.a)(e.noteCategory);return s[t]=Object(i.a)(Object(i.a)({},s[t]),{},(c={},Object(ae.a)(c,r,a.value),Object(ae.a)(c,n,a.value),c)),{noteCategory:s}}))}},{key:"render",value:function(){var e=this;return Object(q.jsxs)("div",{children:[Object(q.jsx)("br",{}),Object(q.jsx)("h3",{children:"Create Your Awesome Note..."}),Object(q.jsx)("br",{}),Object(q.jsxs)(S.a,{onSubmit:this.createNote,children:[Object(q.jsxs)(C.a,{children:[Object(q.jsx)(k.a,{for:"title",children:"Enter Note Heading :"}),Object(q.jsx)(A.a,{id:"title",name:"title",type:"text",placeholder:"Title of your awesome Note...",required:!0,onChange:function(t){return e.setState({title:t.target.value})},value:this.state.title,style:{height:46}})]})," ",Object(q.jsx)("br",{}),Object(q.jsxs)(C.a,{children:[Object(q.jsx)(k.a,{for:"description",children:"Describe Your Note :"}),Object(q.jsx)(A.a,{id:"description",name:"description",type:"textarea",placeholder:"your awesome Note...",required:!0,onChange:function(t){return e.setState({description:t.target.value})},value:this.state.description,style:{height:120}})]}),Object(q.jsx)("br",{}),Object(q.jsxs)(C.a,{children:[Object(q.jsx)(k.a,{for:"category",children:"Describe Your Note :"}),Object(q.jsx)(A.a,{id:"category",name:"category",type:"text",required:!0,placeholder:"Note Category...",onChange:function(t){return e.setState({noteCategory:t.target.value})},value:this.state.noteCategory,style:{height:46}})]}),Object(q.jsx)("br",{}),Object(q.jsx)(W.a,{type:"submit",color:"success",children:"Create Note"})]})]})}}]),a}(n.a.Component);var ne=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),a=t[0],n=t[1];Object(r.useEffect)((function(){document.title="NoteBook || Cloud Note Taker"}),[]);var c=function(){var e=localStorage.getItem("authorization");g.interceptors.request.use((function(t){return e&&(t.headers.authorization="Bearer "+e,console.log("Yeah..Interceptor gets triggered manually"),f.a.success("Auth Token Used..")),t}),(function(e){return Promise.reject(e)}))},s=function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(),e.next=3,g.get("/note");case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(u.a)(j.a.mark((function e(t){var r,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(),r=Object(i.a)({},t),e.next=4,g.post("/note",r);case 4:s=e.sent,n([].concat(Object(o.a)(a),[s.data]));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.delete("/note/".concat(t)).then((function(e){console.log("Note having Id of "+t+" deleted successfully from server...");var r=a.filter((function(e){return e.id!=t}));n(r)}),(function(e){}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){(function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:t=e.sent,console.log(t),t&&n(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(q.jsx)("div",{children:Object(q.jsxs)(b.a,{children:[Object(q.jsx)(te,{}),Object(q.jsx)(O.a,{children:Object(q.jsxs)(x.a,{children:[Object(q.jsx)(p.a,{md:3}),Object(q.jsx)(p.a,{md:6,children:Object(q.jsxs)(h.c,{children:[Object(q.jsx)(h.a,{path:"/add",render:function(e){return Object(q.jsx)(re,Object(i.a)(Object(i.a)({},e),{},{createNoteHandler:l}))}}),Object(q.jsx)(h.a,{path:"/",exact:!0,render:function(e){return Object(q.jsx)(I,Object(i.a)(Object(i.a)({},e),{},{notees:a,deleteNote:m}))}}),Object(q.jsx)(h.a,{path:"/login",component:E}),Object(q.jsx)(h.a,{path:"/signup",component:F}),Object(q.jsx)(h.a,{path:"/account",component:Y}),Object(q.jsx)(h.a,{path:"/reset",component:L}),Object(q.jsx)(h.a,{path:"/edit-profile",component:B}),Object(q.jsx)(h.a,{path:"/note/:id",component:H}),Object(q.jsx)(h.a,{path:"/view-note/:category",component:R})]})}),Object(q.jsx)(p.a,{md:3})]})})]})})};a(127),a(128);s.a.render(Object(q.jsx)(n.a.StrictMode,{children:Object(q.jsx)(ne,{})}),document.getElementById("root"))}},[[129,1,2]]]);
//# sourceMappingURL=main.6523a5cf.chunk.js.map