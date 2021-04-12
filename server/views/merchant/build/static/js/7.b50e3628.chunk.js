(this.webpackJsonpeapay=this.webpackJsonpeapay||[]).push([[7],{178:function(e,t,n){"use strict";var a=n(166),r=n(55),c=n(177),o=(n(179),n(30)),i=n(19),s=n(3);t.a=function(){return Object(s.jsx)(a.a,{className:"auth-side h-100",children:Object(s.jsxs)(c.Slide,{left:!0,children:[Object(s.jsx)(o.b,{className:"auth-side",to:i.b,children:Object(s.jsx)("img",{src:r.b,alt:"logo"})}),Object(s.jsxs)("div",{className:"content-side d-flex flex-column align-items-center justify-content-center h-100",children:[Object(s.jsx)("img",{src:r.a,alt:"phone purchase",className:"w-50"}),Object(s.jsx)("h2",{className:"text-center py-3",children:"Merchant"}),Object(s.jsx)("p",{className:"text-center",children:"Help you and your customer experience seamless payment transactions; get payment in more ways, easy delivery and tax audit"})]})]})})}},179:function(e,t,n){},180:function(e,t,n){"use strict";var a=n(333),r=n(340);t.a=function(e,t){var n=Object(a.a)();return"up"===e?Object(r.a)(n.breakpoints.up(t)):Object(r.a)(n.breakpoints.down(t))}},181:function(e,t,n){"use strict";var a=n(3);t.a=function(e){var t=e.label,n=e.variant,r=e.rounded,c=e.className,o="primary"===n||"secondary"===n?"btn-primary-eapay":"outline-primary"===n?"btn-primary-outline-eapay":"outline-secondary"===n?"btn-secondary-outline-eapay":"",i=r?"btn-rounded-eapay ":"";return Object(a.jsx)("button",{className:"btn ".concat(o," ").concat(i," ").concat(c),children:t})}},182:function(e,t,n){"use strict";var a=n(20),r=n(196),c=Object(r.a)({floatingLabelWrap:{display:"flex",flexDirection:"column",position:"relative",transformOrigin:"top left",transition:"all 0.5s ease-out","&:focus-within label":{transform:"translate(0, 7px) scale(0.75)"}},input:{width:"100%",height:60,padding:"14px 15px 0 20px",outline:0,borderRadius:5,background:"rgba(196, 196, 196, 0.18)",fontSize:20,fontWeight:300,fontFamily:"'Roboto', sans-serif",border:0,color:"#818181",'input[type="date"]':{paddingRight:12}},label:{fontSize:14,padding:"0 12px",fontWeight:500,fontFamily:"'Roboto', sans-serif",color:"rgba(129, 129, 129, 0.6)",pointerEvents:"none",position:"absolute",transform:"translate(0, 19px) scale(1)"},active:{transform:"translate(0, 7px) scale(0.75)"}}),o=n(3);t.a=function(e){var t=e.type,n=e.placeholder,r=e.label,i=e.name,s=e.input,u=e.className,l=e.inputClassName,d=e.inputContainerClassName,b=e.meta,p=c();return Object(o.jsxs)("div",{className:d,children:[Object(o.jsxs)("div",{className:"".concat(p.floatingLabelWrap,"  ").concat(u),children:[Object(o.jsx)("input",Object(a.a)(Object(a.a)({},s),{},{type:t,name:i,className:"".concat(p.input,"  ").concat(l),id:i,placeholder:n})),Object(o.jsx)("label",{htmlFor:i,className:"".concat(p.label," ").concat(b.visited&&s.value?p.active:""),children:r})]}),(null===b||void 0===b?void 0:b.touched)&&(null===b||void 0===b?void 0:b.error)]})}},187:function(e,t,n){"use strict";n(188);var a=n(186),r=n.n(a),c=n(3);t.a=function(e){var t=e.content,n=e.status,a=e.onCancel,o=e.notify;return Object(c.jsx)(r.a,{top:!0,when:o,children:Object(c.jsxs)("div",{className:"".concat("success"===n?"bg-success":"bg-danger"),id:"topbar",children:[Object(c.jsx)("p",{className:"m-0",children:t}),Object(c.jsx)("label",{onClick:a,className:"m-0",id:"hideTop",children:"X"})]})})}},188:function(e,t,n){},191:function(e,t,n){"use strict";var a=n(174),r=n.n(a),c=n(175),o=n(184),i=n.n(o),s=n(20),u=n(208),l=n.n(u),d=n(209),b=n.n(d),p=i.a.create();b()(p,{retries:2,retryDelay:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=1e3*Math.pow(2,e),n=1e3*Math.random();return t+n},retryCondition:b.a.isRetryableError});var j=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c,o,i,u,d,b,j;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,a=t.method,c=t.params,o=t.data,i=t.headers,u=t.token,d=u||localStorage.getItem(""),b={method:a,params:c,data:o,headers:Object(s.a)({"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Authorization:"Bearer ".concat(d)},i)},"GET"!==a&&"DELETE"!==a||(b=l()(b,["data"])),e.next=6,p(Object(s.a)({url:n},b));case 6:return j=e.sent,e.abrupt("return",j);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=n(31);t.a={createUserAccount:function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n(Object(f.a)(!0));case 3:return t.next=5,j({url:"/api/merchant/register",method:"post",data:e});case 5:if(c=t.sent,!(null===(a=c.data)||void 0===a?void 0:a.success)){t.next=14;break}return t.next=9,n(Object(f.a)(!1));case 9:return t.next=11,n(Object(f.c)(c.data));case 11:return t.abrupt("return",c.data);case 14:return t.next=16,n(Object(f.a)(!1));case 16:return t.next=18,n(Object(f.b)(null===c||void 0===c?void 0:c.data));case 18:t.next=34;break;case 20:return t.prev=20,t.t0=t.catch(0),t.next=24,n(Object(f.a)(!1));case 24:if(!(null===t.t0||void 0===t.t0?void 0:t.t0.response)){t.next=29;break}return t.next=27,n(Object(f.b)("Network error - check your connection"));case 27:t.next=33;break;case 29:if(!(null===t.t0||void 0===t.t0?void 0:t.t0.request)){t.next=33;break}return console.log("we"),t.next=33,n(Object(f.b)("Network error - check your connection"));case 33:throw t.t0;case 34:case"end":return t.stop()}}),t,null,[[0,20]])})));return function(e){return t.apply(this,arguments)}}()},loginUserAccount:function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a,c,o,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n(Object(f.a)(!0));case 3:return t.next=5,j({url:"/api/merchant/login",method:"post",data:e});case 5:if(c=t.sent,!(null===(a=c.data)||void 0===a?void 0:a.success)){t.next=14;break}return t.next=9,n(Object(f.a)(!1));case 9:return t.next=11,n(Object(f.c)(c.data));case 11:return t.abrupt("return",c.data);case 14:return t.next=16,n(Object(f.a)(!1));case 16:return t.next=18,n(Object(f.b)(null===c||void 0===c?void 0:c.data));case 18:t.next=33;break;case 20:return t.prev=20,t.t0=t.catch(0),t.next=24,n(Object(f.a)(!1));case 24:if(!(null===t.t0||void 0===t.t0?void 0:t.t0.response)){t.next=29;break}return t.next=27,n(Object(f.b)(null===t.t0||void 0===t.t0||null===(o=t.t0.response)||void 0===o||null===(i=o.data)||void 0===i?void 0:i.payload));case 27:t.next=32;break;case 29:if(!(null===t.t0||void 0===t.t0?void 0:t.t0.request)){t.next=32;break}return t.next=32,n(Object(f.b)("Network error - check your connection"));case 32:throw t.t0;case 33:case"end":return t.stop()}}),t,null,[[0,20]])})));return function(e){return t.apply(this,arguments)}}()},verifyUserAccount:function(e,t){return function(){var n=Object(c.a)(r.a.mark((function n(a){var c,o;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(e,t),n.prev=1,n.next=4,a(Object(f.a)(!0));case 4:return n.next=6,j({url:"/api/merchant/verify",data:e,method:"post",params:t});case 6:n.sent,n.next=22;break;case 9:return n.prev=9,n.t0=n.catch(1),n.next=13,a(Object(f.a)(!1));case 13:if(!(null===n.t0||void 0===n.t0?void 0:n.t0.response)){n.next=18;break}return n.next=16,a(Object(f.b)(null===n.t0||void 0===n.t0||null===(c=n.t0.response)||void 0===c||null===(o=c.data)||void 0===o?void 0:o.payload));case 16:n.next=21;break;case 18:if(!(null===n.t0||void 0===n.t0?void 0:n.t0.request)){n.next=21;break}return n.next=21,a(Object(f.b)("Network error - check your connection"));case 21:throw n.t0;case 22:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()}}},338:function(e,t,n){"use strict";n.r(t);var a=n(174),r=n.n(a),c=n(20),o=n(175),i=n(192),s=n(193),u=n(198),l=n(197),d=n(0),b=n(329),p=n(330),j=n(166),f=n(55),h=n(335),v=n(334),x=n(178),m=n(182),O=n(177),y=n(180),g=n(181),k=n(187),N=n(58),w=n(3),C=Object(v.a)({form:"verify"})((function(e){var t=e.handleSubmit,n=e.loading,a=e.notify,r=e.onNotificationCancel,c=Object(y.a)("down","md");return Object(w.jsxs)("div",{className:"login-top-container",children:[Object(w.jsx)(k.a,{content:a,onCancel:r,notify:a}),n?Object(w.jsx)(N.a,{}):Object(w.jsxs)(b.a,{className:"h-100",children:[c?null:Object(w.jsx)(p.a,{md:4,children:Object(w.jsx)(x.a,{})}),Object(w.jsx)(p.a,{md:12,lg:8,children:Object(w.jsx)(j.a,{className:"d-flex flex-column justify-content-center h-100 ",children:Object(w.jsx)(O.Slide,{right:!0,children:Object(w.jsx)("form",{onSubmit:t,children:Object(w.jsxs)("div",{className:"container-div ".concat(c?"w-100 text-center":"w-75"," mx-auto"),children:[c?Object(w.jsx)("img",{src:f.b,alt:"logo",className:"mb-4"}):null,Object(w.jsx)("h5",{className:"mb-4 ".concat(c?"text-center":""),children:"A verification code is sent to either your email address or phone number"}),Object(w.jsx)(h.a,{name:"code",type:"number",label:"Verification",minLength:6,maxLength:6,component:m.a}),Object(w.jsxs)(b.a,{className:"mt-3 align-items-center",children:[Object(w.jsx)(p.a,{md:5,children:Object(w.jsx)(g.a,{variant:"primary",className:"w-100",label:"Verify"})}),Object(w.jsx)(p.a,{className:"mt-lg-0 mt-4"})]})]})})})})})]})]})})),S=n(191),A=n(56),R=n(4),E=n(19),L=n(31),D=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleSubmit=function(){var e=Object(o.a)(r.a.mark((function e(t){var n,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.props.user,o=Object(c.a)(Object(c.a)({},t),{},{phone:"+".concat(null===n||void 0===n?void 0:n.phone)}),e.next=4,a.props.onVerification(o,{id:null===n||void 0===n?void 0:n._id,verify:null===n||void 0===n?void 0:n.newDevice});case 4:e.sent&&a.props.history.push(E.a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this.handleSubmit,t=this.props,n=t.isloading,a=t.isNotification,r=t.onClose;return Object(w.jsx)(C,{onSubmit:e,loading:n,notify:a,onNotificationCancel:r})}}]),n}(d.Component),T=Object(R.f)(D);t.default=Object(A.b)((function(e){return{isloading:e.otherReducer.isloading,isNotification:e.otherReducer.notify,user:e.otherReducer.user}}),(function(e){return{onVerification:function(t,n){return e(S.a.verifyUserAccount(t,n))},onClose:function(){return e(Object(L.b)(""))}}}))(T)}}]);
//# sourceMappingURL=7.b50e3628.chunk.js.map