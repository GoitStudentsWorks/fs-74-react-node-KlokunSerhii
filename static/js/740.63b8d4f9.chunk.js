"use strict";(self.webpackChunkbanda=self.webpackChunkbanda||[]).push([[740],{6740:function(e,a,r){r.r(a),r.d(a,{default:function(){return F}});var s=r(2791),t=r(4165),n=r(5861),i=r(6459),o=r(9439),c=r(1413),l=r(9434),d=r(1087),m=r(9273),h={form:"ParamsForm_form__JVMat",containerParams:"ParamsForm_containerParams__K82py",formContainer:"ParamsForm_formContainer__DoKMG",bg:"ParamsForm_bg__hCefL",primaryBg:"ParamsForm_primaryBg__mLZB6",secondBg:"ParamsForm_secondBg__TlqRB",thirdBg:"ParamsForm_thirdBg__jwtqR",title:"ParamsForm_title__uguI8",description:"ParamsForm_description__3J2Tk",bnt:"ParamsForm_bnt__73t-z",nextBtn:"ParamsForm_nextBtn__43v3a",marginBtn:"ParamsForm_marginBtn__RRfQs",backBtn:"ParamsForm_backBtn__oeghe",goToBtn:"ParamsForm_goToBtn__l1ONl",boxesWrapper:"ParamsForm_boxesWrapper__wYF2m",video:"ParamsForm_video__ZUqXd",videoQuantity:"ParamsForm_videoQuantity__EjObR",videoText:"ParamsForm_videoText__ft17M",videoInfo:"ParamsForm_videoInfo__fHMt1",second:"ParamsForm_second__Cym5t",secondQuantity:"ParamsForm_secondQuantity__b6Q-h",secondText:"ParamsForm_secondText__89zCU",secondInfo:"ParamsForm_secondInfo__cQ5Rt",iconPlay:"ParamsForm_iconPlay__xME-B",iconRun:"ParamsForm_iconRun__Kj-K7",cyrcleRun:"ParamsForm_cyrcleRun__ruyvz",iconWatch:"ParamsForm_iconWatch__+Sn3Q",ErrorIcon:"ParamsForm_ErrorIcon__-bJJB",errorMsg:"ParamsForm_errorMsg__na4I1",descriptionWrapper:"ParamsForm_descriptionWrapper__aKj60",formList:"ParamsForm_formList__l0CzV",formItemWrapper:"ParamsForm_formItemWrapper__5bjlD",formLabel:"ParamsForm_formLabel__dA6di",formHeightInput:"ParamsForm_formHeightInput__jPCBH",formCurrentWeightInput:"ParamsForm_formCurrentWeightInput__pGg8S",formDesiredWeightInput:"ParamsForm_formDesiredWeightInput__cceRV",formDatepickerInput:"ParamsForm_formDatepickerInput__qGh-W",secondStepWrapper:"ParamsForm_secondStepWrapper__WNNid",radioWrapper:"ParamsForm_radioWrapper__daCtI",secondStepActivities:"ParamsForm_secondStepActivities__qwNUy",secondStepDescription:"ParamsForm_secondStepDescription__CqsCE",secondStepLabel:"ParamsForm_secondStepLabel__mjw5t",activitiesLabel:"ParamsForm_activitiesLabel__hAln1",submitPageNav:"ParamsForm_submitPageNav__L+X6T",secondStepNav:"ParamsForm_secondStepNav__kqh2D",radio:"ParamsForm_radio__rwhJf",input:"ParamsForm_input__5RNIN"},u=r(5705),p=r(8007),x=r(9085),v=(r(5462),r(3853)),_=r(8820),g=r(6856),b={nav:"StepBar_nav__Bjdkw",list:"StepBar_list__P1OTz",link:"StepBar_link__cT1ST",active:"StepBar_active__XNFn2",visited:"StepBar_visited__yzOo-"},j=r(184);var N=function(e){var a=e.currentStep;return(0,j.jsx)("nav",{className:b.nav,children:(0,j.jsxs)("ul",{className:b.list,children:[(0,j.jsx)("li",{className:b.item,children:(0,j.jsx)(d.OL,{className:"".concat(0===a?b.active:b.visited," "),to:"/params"})}),(0,j.jsx)("li",{className:b.item,children:(0,j.jsx)(d.OL,{className:"".concat(1===a?b.active:0===a?b.link:b.visited," "),to:"/params"})}),(0,j.jsx)("li",{className:b.item,children:(0,j.jsx)(d.OL,{className:"".concat(2===a?b.active:b.link),to:"/params"})})]})})},f={height:(0,p.Rx)().min(150,"Height must be at least 150 cm!").required("Height input is rquired!").integer(),currentWeight:(0,p.Rx)().min(35,"Current Weight must be at least 35 kg!").required("Current Weight input is rquired!").integer(),desiredWeight:(0,p.Rx)().min(35,"Desired Weight must be at least 35 kg!").required("Desired Weight input is rquired!").integer(),birthdate:(0,p.hT)().test("age","You must be 18 or older",(function(e){var a=new Date;return a.setFullYear(a.getFullYear()-18),e<=a})),blood:(0,p.Z_)().oneOf(["1","2","3","4"]).required("Blood input is rquired!"),sex:(0,p.Z_)().oneOf(["male","female"]).required("Sex input is rquired!"),levelActivity:(0,p.Z_)().oneOf(["1","2","3","4","5"]).required("Level Activity input is rquired!")},y=(0,p.Ry)(f),P=(0,p.Ry)((0,c.Z)((0,c.Z)({},f),{},{blood:(0,p.Rx)().oneOf([1,2,3,4]).required(),levelActivity:(0,p.Rx)().oneOf([1,2,3,4]).required()})),W={height:"",currentWeight:"",desiredWeight:"",birthdate:"",blood:"1",sex:"male",levelActivity:"1"};var C=function(){var e,a=(0,s.useState)(0),r=(0,o.Z)(a,2),c=r[0],p=r[1],b=(0,s.useState)(!1),f=(0,o.Z)(b,2),C=f[0],F=f[1],S=(0,l.I0)(),k=(0,s.useState)(W),B=(0,o.Z)(k,2)[1],L=(0,u.TA)({initialValues:W,validationSchema:y,validateOnBlur:!0,onSubmit:function(e){var a=new FormData,r=P.cast(e),s=Object.assign({},((0,i.Z)(r),r));F(!C),a.append("bodyParams",JSON.stringify(s)),S((0,m.Nq)(a)).then((function(){B(e),W.values=e,S((0,m.Ec)()),F(!1)}),(function(){x.Am.error("Oops, something went wrong! Profile update failed..."),F(!1)}))}}),I=function(){return(e=e||(0,n.Z)((0,t.Z)().mark((function e(){var a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=L.values,e.next=3,y.isValid(a);case 3:if(!e.sent){e.next=9;break}return p(c+1),e.abrupt("return");case 9:if(!L.errors.height&&""!==L.values.height){e.next=13;break}return e.abrupt("return",x.Am.error("Your form should be done to get to the next step! "+"".concat(L.errors.height)));case 13:if(!L.errors.currentWeight&&""!==L.values.currentWeight){e.next=17;break}return e.abrupt("return",x.Am.error("Your form should be done to get to the next step! "+"".concat(L.errors.currentWeight)));case 17:if(!L.errors.desiredWeight&&""!==L.values.desiredWeight){e.next=21;break}return e.abrupt("return",x.Am.error("Your form should be done to get to the next step! "+"".concat(L.errors.desiredWeight)));case 21:if(!L.errors.birthdate&&""!==L.values.birthdate){e.next=25;break}return e.abrupt("return",x.Am.error("Your form should be done to get to the next step! "+"".concat(L.errors.birthdate)));case 25:if(!L.errors.blood){e.next=29;break}return e.abrupt("return",x.Am.error("Your form should be done to get to the next step! "+"".concat(L.errors.blood)));case 29:if(!L.errors.sex){e.next=33;break}return e.abrupt("return",x.Am.error("Your form should be done to get to the next step! "+"".concat(L.errors.sex)));case 33:if(!L.errors.levelActivity){e.next=37;break}return e.abrupt("return",x.Am.error("Your form should be done to get to the next step! "+"".concat(L.errors.levelActivity)));case 37:if(!L.errors.blood){e.next=41;break}return e.abrupt("return",x.Am.error("Your form should be done to get to the next step! "+"".concat(L.errors.blood)));case 41:if(!L.errors.sex){e.next=45;break}return e.abrupt("return",x.Am.error("Your form should be done to get to the next step! "+"".concat(L.errors.sex)));case 45:if(!L.errors.levelActivity){e.next=47;break}return e.abrupt("return",x.Am.error("Your form should be done to get to the next step! "+"".concat(L.errors.levelActivity)));case 47:x.Am.error("Please enter all required fields!");case 48:case"end":return e.stop()}}),e)})))).apply(this,arguments)},A=function(){p(c-1)};return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)("form",{className:h.form,onSubmit:L.handleSubmit,children:0===c?(0,j.jsxs)("div",{className:"".concat(h.bg," ").concat(h.primaryBg),children:[(0,j.jsxs)("div",{className:h.containerParams,children:[(0,j.jsxs)("div",{className:h.boxesWrapper,children:[(0,j.jsxs)("div",{className:h.video,children:[(0,j.jsx)(_.sT9,{className:h.iconPlay}),(0,j.jsxs)("div",{className:h.videoInfo,children:[(0,j.jsx)("p",{className:h.videoQuantity,children:"350+"}),(0,j.jsx)("p",{className:h.videoText,children:"Video tutorial"})]})]}),(0,j.jsxs)("div",{className:h.second,children:[(0,j.jsx)("span",{className:h.cyrcleRun,children:(0,j.jsx)(g.ukb,{size:6,className:h.iconRun})}),(0,j.jsxs)("div",{className:h.secondInfo,children:[(0,j.jsx)("p",{className:h.secondQuantity,children:"197"}),(0,j.jsx)("p",{className:h.secondText,children:"users"})]})]})]}),(0,j.jsxs)("div",{className:h.formContainer,children:[(0,j.jsxs)("div",{className:h.descriptionWrapper,children:[(0,j.jsx)("h2",{className:h.title,children:"Get closer to your goals!"}),(0,j.jsx)("p",{className:h.description,children:"To ensure a personalized user experience and the proper functioning of our platform,we ask you to provide the following information about your weight, height and other relevant data:"})]}),(0,j.jsxs)("ul",{className:h.formList,children:[(0,j.jsxs)("li",{className:h.formItemWrapper,children:[(0,j.jsx)("label",{htmlFor:"height",className:h.formLabel,children:"Height"}),(0,j.jsx)("input",{className:h.formHeightInput,type:"number",id:"height",name:"height",placeholder:"157",onChange:L.handleChange,value:L.values.height})]}),(0,j.jsx)("li",{className:h.formItemWrapper,children:(0,j.jsx)("input",{className:h.formCurrentWeightInput,type:"number",id:"currentWeight",name:"currentWeight",placeholder:"Current Weight",onChange:L.handleChange,value:L.values.currentWeight})}),(0,j.jsx)("li",{className:h.formItemWrapper,children:(0,j.jsx)("input",{className:h.formDesiredWeightInput,type:"number",id:"desiredWeight",name:"desiredWeight",placeholder:"Desired Weight",onChange:L.handleChange,value:L.values.desiredWeight})}),(0,j.jsx)("li",{className:h.formItemWrapper,children:(0,j.jsx)("input",{className:"".concat(h.formDatepickerInput," ").concat(h.input),type:"date",name:"birthdate",placeholder:"Birthdate",onChange:L.handleChange,value:L.values.birthdate})})]}),(0,j.jsxs)("button",{type:"button",className:"".concat(h.nextBtn,"  ").concat(h.btn),onClick:I,children:["Next",(0,j.jsx)(v.Rgz,{style:{width:"18px",height:"18px",marginLeft:"4px",color:"#e6533c"}})]})]})]}),(0,j.jsx)(N,{currentStep:c})]}):1===c?(0,j.jsxs)("div",{className:"".concat(h.bg," ").concat(h.secondBg),children:[(0,j.jsxs)("div",{className:h.containerParams,children:[(0,j.jsxs)("div",{className:h.boxesWrapper,children:[(0,j.jsxs)("div",{className:h.video,children:[(0,j.jsx)(_.sT9,{className:h.iconPlay}),(0,j.jsxs)("div",{className:h.videoInfo,children:[(0,j.jsx)("p",{className:h.videoQuantity,children:"350+"}),(0,j.jsx)("p",{className:h.videoText,children:"Video tutorial"})]})]}),(0,j.jsxs)("div",{className:h.second,children:[(0,j.jsx)("span",{className:h.cyrcleRun,children:(0,j.jsx)(v.Lhx,{size:6,className:h.iconWatch})}),(0,j.jsxs)("div",{className:h.secondInfo,children:[(0,j.jsx)("p",{className:h.secondQuantity,children:"24"}),(0,j.jsx)("p",{className:h.secondText,children:"hours"})]})]})]}),(0,j.jsxs)("div",{className:h.formContainer,children:[(0,j.jsx)("div",{className:h.descriptionWrapper,children:(0,j.jsx)("h2",{className:h.title,children:"Get closer to your goals!"})}),(0,j.jsxs)("div",{className:h.formContainer,children:[(0,j.jsxs)("div",{className:h.secondStepWrapper,children:[(0,j.jsxs)("div",{role:"group","aria-labelledby":"my-radio-group",className:h.radioWrapper,children:[(0,j.jsx)("p",{className:h.secondStepDescription,children:"Blood:"}),(0,j.jsxs)("label",{className:h.secondStepLabel,children:[(0,j.jsx)("input",{className:h.radio,type:"radio",name:"blood",value:"1",onChange:L.handleChange}),"1"]}),(0,j.jsxs)("label",{className:h.secondStepLabel,children:[(0,j.jsx)("input",{className:h.radio,type:"radio",name:"blood",value:"2",onChange:L.handleChange}),"2"]}),(0,j.jsxs)("label",{className:h.secondStepLabel,children:[(0,j.jsx)("input",{className:h.radio,type:"radio",name:"blood",value:"3",onChange:L.handleChange}),"3"]}),(0,j.jsxs)("label",{className:h.secondStepLabel,children:[(0,j.jsx)("input",{className:h.radio,type:"radio",name:"blood",value:"4",onChange:L.handleChange}),"4"]})]}),(0,j.jsxs)("div",{className:h.radioWrapper,children:[(0,j.jsx)("p",{className:h.secondStepDescription,children:"Sex:"}),(0,j.jsxs)("label",{className:h.secondStepLabel,children:[(0,j.jsx)("input",{className:h.radio,type:"radio",name:"sex",value:"male",onChange:L.handleChange}),"Male"]}),(0,j.jsxs)("label",{className:h.secondStepLabel,children:[(0,j.jsx)("input",{className:h.radio,type:"radio",name:"sex",value:"female",onChange:L.handleChange}),"Female"]})]})]}),(0,j.jsxs)("div",{className:h.secondStepActivities,children:[(0,j.jsx)("p",{className:h.secondStepDescription,children:"Level Activity:"}),(0,j.jsxs)("label",{className:"".concat(h.activitiesLabel," ").concat(h.secondStepLabel),children:[(0,j.jsx)("input",{className:h.radio,type:"radio",name:"levelActivity",value:"1",onChange:L.handleChange}),"Sedentary lifestyle (little or no physical activity)"]}),(0,j.jsxs)("label",{className:"".concat(h.activitiesLabel," ").concat(h.secondStepLabel),children:[(0,j.jsx)("input",{className:h.radio,type:"radio",name:"levelActivity",value:"2",onChange:L.handleChange}),"Light activity (light exercises/sports 1-3 days per week)"]}),(0,j.jsxs)("label",{className:"".concat(h.activitiesLabel," ").concat(h.secondStepLabel),children:[(0,j.jsx)("input",{className:h.radio,type:"radio",name:"levelActivity",value:"3",onChange:L.handleChange}),"Moderately active (moderate exercises/sports 3-5 days per week)"]}),(0,j.jsxs)("label",{className:"".concat(h.activitiesLabel," ").concat(h.secondStepLabel),children:[(0,j.jsx)("input",{className:h.radio,type:"radio",name:"levelActivity",value:"4",onChange:L.handleChange}),"Very active (intense exercises/sports 6-7 days per week)"]}),(0,j.jsxs)("label",{className:"".concat(h.activitiesLabel," ").concat(h.secondStepLabel),children:[(0,j.jsx)("input",{className:h.radio,type:"radio",name:"levelActivity",value:"5",onChange:L.handleChange}),"Extremely active (very strenuous exercises/sports and physical work)"]})]}),(0,j.jsxs)("div",{className:h.secondStepNav,children:[(0,j.jsxs)("button",{type:"button",className:"  ".concat(h.backBtn,"  ").concat(h.btn," "),onClick:A,children:[(0,j.jsx)(v.Ao2,{style:{width:"18px",height:"18px",marginRight:"4px",color:"#e6533c"}}),"Back"]}),(0,j.jsxs)("button",{type:"button",className:" ".concat(h.marginBtn," ").concat(h.nextBtn,"  ").concat(h.btn),onClick:I,children:["Next"," ",(0,j.jsx)(v.Rgz,{style:{width:"18px",height:"18px",marginLeft:"4px",color:"#e6533c"}})]})]})]})]})]}),(0,j.jsx)(N,{currentStep:c})]}):(0,j.jsxs)("div",{className:"".concat(h.bg," ").concat(h.thirdBg),children:[(0,j.jsxs)("div",{className:h.containerParams,children:[(0,j.jsxs)("div",{className:h.boxesWrapper,children:[(0,j.jsxs)("div",{className:h.video,children:[(0,j.jsx)(_.sT9,{className:h.iconPlay}),(0,j.jsxs)("div",{className:h.videoInfo,children:[(0,j.jsx)("p",{className:h.videoQuantity,children:"350+"}),(0,j.jsx)("p",{className:h.videoText,children:"Video tutorial"})]})]}),(0,j.jsxs)("div",{className:h.second,children:[(0,j.jsx)("span",{className:h.cyrcleRun,children:(0,j.jsx)(g.ukb,{size:8,className:h.iconRun})}),(0,j.jsxs)("div",{className:h.secondInfo,children:[(0,j.jsx)("p",{className:h.secondQuantity,children:"300"}),(0,j.jsx)("p",{className:h.secondText,children:"ex"})]})]})]}),(0,j.jsxs)("div",{className:h.formContainer,children:[(0,j.jsxs)("div",{className:h.descriptionWrapper,children:[(0,j.jsx)("h2",{className:h.title,children:"Dear user"}),(0,j.jsx)("p",{className:h.description,children:"Thank you for filling in all the required data. We greatly appreciate your cooperation and commitment to a healthy lifestyle. The collected information will allow us to provide you with a more individual and personalized approach."})]}),(0,j.jsxs)("div",{className:h.submitPageNav,children:[(0,j.jsx)("button",{type:"submit",className:h.goToBtn,children:(0,j.jsx)(d.OL,{to:"/diary",children:"Go"})}),(0,j.jsxs)("button",{type:"button",className:"".concat(h.backBtn,"  ").concat(h.btn),onClick:A,children:[(0,j.jsx)(v.Ao2,{style:{width:"18px",height:"18px",marginRight:"4px",color:"#e6533c"}}),"Back"]})]})]})]}),(0,j.jsx)(N,{currentStep:c})]})})})};var F=function(){return(0,j.jsx)("div",{children:(0,j.jsx)(C,{})})}}}]);
//# sourceMappingURL=740.63b8d4f9.chunk.js.map