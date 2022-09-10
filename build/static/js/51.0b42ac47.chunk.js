"use strict";(self.webpackChunkshoghl_app=self.webpackChunkshoghl_app||[]).push([[51],{37051:function(e,s,t){t.r(s),t.d(s,{default:function(){return G}});var a=t(29439),i=t(47313),n=t(56352),l=t(97890),o=t(74165),r=t(15861),d=t(93433),c=t(37762),u=t(4942),m=t(1413),p=(t(76666),t(27753)),v=t(87632),f=t(85281),x=t(61113),g=t(57829),h=t(46417);function T(e){return(0,h.jsxs)(g.Z,{sx:{position:"relative",display:"inline-flex"},children:[(0,h.jsx)(f.Z,(0,m.Z)({variant:"determinate"},e)),(0,h.jsx)(g.Z,{sx:{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,h.jsx)(x.Z,{variant:"caption",component:"div",color:"text.secondary",children:"".concat(Math.round(e.value),"%")})})]})}function L(e){var s=e.num,t=(0,i.useState)(0),n=(0,a.Z)(t,2),l=n[0],o=n[1];return(0,i.useEffect)((function(){o((function(e){return l>=100?0:l+0}))}),[l]),(0,h.jsx)(T,{value:s})}var j=t(63849),y=t(40578),b=t(31616),N=t(45478),Z=t(32214),_=t(1182),k=t(11430),B=t(29737),C=t(49140),w=t(78856),R=t(7554),A=function(e){var s,t,f,x,g=e.data,T=(0,n.v9)((function(e){return[e.coreData.category,e.profileUpdate,e.messages]})),A=(0,a.Z)(T,3),S=(A[0],A[1]),D=A[2],G=null===(s=D[0])||void 0===s?void 0:s.messages,E=(0,n.I0)(),O=(0,l.s0)(),I=new FormData,P=(0,i.useState)(),q=(0,a.Z)(P,2),F=q[0],M=q[1],U=(0,i.useState)(),V=(0,a.Z)(U,2),W=V[0],z=V[1],H=(0,i.useState)(),J=(0,a.Z)(H,2),K=J[0],Q=J[1],X=(0,i.useState)(),Y=(0,a.Z)(X,2),$=Y[0],ee=Y[1],se=(0,i.useMemo)((function(){return B.v.GET_RegisterData(["country","city","state"],W,K).then((function(e){M(e.data.data)}))}),[W,K]);(0,i.useEffect)((function(){return se}),[se]);var te=(0,i.useState)(""),ae=(0,a.Z)(te,2),ie=ae[0],ne=ae[1],le=(0,i.useState)({name:"",description:"",time:"",type_work:"",address:""}),oe=(0,a.Z)(le,2),re=oe[0],de=oe[1],ce=function(e){var s=null===e||void 0===e?void 0:e.target,t=s.name,a=s.value;de((function(e){return(0,m.Z)((0,m.Z)({},e),{},(0,u.Z)({},t,a))}))},ue=(0,i.useRef)(),me=(0,i.useState)({images:[],videos:[]}),pe=(0,a.Z)(me,2),ve=pe[0],fe=pe[1],xe=(0,i.useState)([]),ge=(0,a.Z)(xe,2),he=ge[0],Te=ge[1],Le=(0,i.useState)(!1),je=(0,a.Z)(Le,2),ye=je[0],be=je[1],Ne=function(){var e=(0,r.Z)((0,o.Z)().mark((function e(s){var t,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.preventDefault(),E((0,k._)({messages:"\u062c\u0627\u0631\u064a \u0625\u0631\u0633\u0640\u0640\u0640\u0627\u0644 \u0637\u0644\u0628\u0643",messageType:"warning",messageClick:!0})),be(!0),null===(t=ve.videos)||void 0===t||t.map((function(e,s){return I.append("videos[".concat(s,"]"),e)})),null===(a=ve.images)||void 0===a||a.forEach((function(e,s){return I.append("images[".concat(s,"]"),e)})),I.set("name",re.name),I.set("freelancer_id",null===g||void 0===g?void 0:g.id),I.set("description",null===ie||void 0===ie?void 0:ie.value),I.set("time",re.time),I.set("type_work",re.type_work),I.set("country_id",W),I.set("city_id",K),"offline"===re.type_work&&(I.set("address",re.address),I.set("state_id",$)),S.category.forEach((function(e,s){I.append("category[".concat(s,"]"),e)})),C.w._POST_RequestOffer(I).then((function(e){if(be(!1),E((0,k._)({messages:e.data.message,messageType:"success",messageClick:!0})),1===e.data.status){var s=setTimeout((function(){O("/orders/page=".concat(1))}),800);return function(){return clearTimeout(s)}}})).catch((function(e){be(!1),E((0,k._)([{messages:e.response.data.message,messageType:"error",messageClick:!0}]))}));case 15:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(Z.Z,{message:D.messages,type:null===D||void 0===D?void 0:D.messageType,clickMe:null===D||void 0===D?void 0:D.messageClick}),(0,h.jsxs)("form",{onSubmit:function(e){return Ne(e)},className:"LT-request-form-grid py-4 mt-4 px-4",children:[(0,h.jsx)("label",{className:"fLT-Bold-sA cLT-main-text ",htmlFor:"",children:"\u0627\u0644\u0645\u0634\u062a\u063a\u0644"}),(0,h.jsxs)("div",{className:"d-flex justify-content-between uLT-bd-f-platinum-sA uLT-f-radius-sB p-4",children:[(0,h.jsx)(N.Z,{myData:g,statusIcon:1===(null===g||void 0===g?void 0:g.status)?(0,h.jsx)("div",{className:"uLT-status-online"}):(0,h.jsx)("div",{className:"uLT-status-offline"})}),(0,h.jsxs)("div",{className:"d-flex justify-content-center align-items-start ",children:[(0,h.jsx)("div",{className:"ms-3",children:(0,h.jsx)(L,{num:parseInt(null!==g&&void 0!==g&&g.performance?null===g||void 0===g?void 0:g.performance:0)})}),(0,h.jsxs)("p",{className:"m-0 card-text cLT-support2-text fLT-Regular-sB",children:["(",null===g||void 0===g||null===(t=g.rate)||void 0===t?void 0:t.count,")"]}),(0,h.jsx)("p",{className:"m-0 card-text cLT-support2-text fLT-Regular-sB ",children:null===g||void 0===g||null===(f=g.rate)||void 0===f?void 0:f.rate}),(0,h.jsx)("i",{className:" iLT-Rate-star uLT-img-contain iLT-sB me-2"})]})]}),(0,h.jsx)(j.Z,{className:"mb-3 flex-column m-0",children:(0,h.jsx)("div",{className:"d-flex gap-3 ps-0 ps-md-3 pe-0 mx-0 flex-column flex-md-row",children:(0,h.jsxs)(y.Z.Group,{as:b.Z,sm:12,md:12,controlId:"formGridPassword",className:"position-relative px-0 d-grid gap-2",children:[(0,h.jsx)(y.Z.Label,{className:"form-label fLT-Bold-sA cLT-main-text m-0",children:" \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0637\u0644\u0628"}),(0,h.jsx)(y.Z.Control,{value:null===re||void 0===re?void 0:re.name,name:"name",onChange:ce,className:"uLT-bd-f-platinum-sA uLT-f-radius-sB",type:"text",placeholder:"\u0639\u0644\u064a \u0633\u0628\u064a\u0644 \u0627\u0644\u0645\u062b\u0627\u0644 , \u0628\u0628\u0646\u0627\u0621 \u0645\u0648\u0642\u0639 \u0639\u0644\u064a \u0634\u0628\u0643\u0629 \u0627\u0644\u0627\u0646\u062a\u0631\u0646\u062a"}),(null===G||void 0===G?void 0:G.name)&&(0,h.jsx)("p",{className:"position-absolute mb-0 fLT-Regular-sA cLT-danger-text pt-2 px-2",style:{top:"90px"},children:null===G||void 0===G?void 0:G.name})]})})}),(0,h.jsxs)("div",{className:"LT-details-request position-relative",children:[(0,h.jsx)(y.Z.Label,{className:"form-label fLT-Bold-sA cLT-main-text m-0",children:" \u0627\u0643\u062a\u0628 \u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0637\u0644\u0628"}),(0,h.jsx)(R.Z,{setDescription:ne}),(0,h.jsxs)("div",{className:"text-start w-100 cLT-smoke-text",children:[null===re||void 0===re||null===(x=re.description)||void 0===x?void 0:x.length," /  ",5e3]}),(null===G||void 0===G?void 0:G.description)&&(0,h.jsx)("p",{className:"position-absolute mb-0 fLT-Regular-sA cLT-danger-text  px-2",style:{bottom:"0px"},children:null===G||void 0===G?void 0:G.description})]}),(0,h.jsx)(j.Z,{className:"mb-3 flex-column m-0 pt-3",children:(0,h.jsxs)("div",{className:"d-flex gap-3 ps-0 ps-md-3 pe-0 mx-0 flex-column flex-md-row p-0",children:[(0,h.jsxs)(y.Z.Group,{as:b.Z,sm:12,md:6,controlId:"formGridTime",className:"position-relative px-0 d-grid gap-2",children:[(0,h.jsxs)(y.Z.Label,{className:"form-label fLT-Bold-sA cLT-main-text m-0",children:["\u0645\u062f\u0629 \u0627\u0644\u0634\u063a\u0644  ",(0,h.jsx)("span",{className:"fLT-Regular-sB cLT-smoke-text",children:"\u0627\u062e\u062a\u064a\u0627\u0631\u064a  "})]}),(0,h.jsx)(y.Z.Control,{value:null===re||void 0===re?void 0:re.time,name:"time",onChange:ce,className:"uLT-bd-f-platinum-sA uLT-f-radius-sB",type:"text",placeholder:"30 \u064a\u0648\u0645"}),(null===G||void 0===G?void 0:G.time)&&(0,h.jsx)("p",{className:"position-absolute mb-0 fLT-Regular-sA cLT-danger-text  px-2",style:{bottom:"-27px"},children:null===G||void 0===G?void 0:G.time})]}),(0,h.jsxs)(y.Z.Group,{as:b.Z,sm:12,md:6,controlId:"formGridTypeWork",className:"position-relative px-0 pt-3 pt-md-0 d-grid gap-2",children:[(0,h.jsx)(y.Z.Label,{className:"form-label fLT-Bold-sA cLT-main-text m-0",children:" \u0646\u0648\u0639 \u0627\u0644\u0634\u063a\u0644"}),(0,h.jsxs)("div",{className:"d-flex justify-content-around align-items-center uLT-bd-f-platinum-sA fLT-Regular-sB uLT-f-radius-sB cLT-main-text",onChange:ce,children:[(0,h.jsx)("div",{className:"fLT-Regular-sC  cLT-main-text text-center ",children:(0,h.jsxs)("label",{id:"showCompo",className:"uLT-click",children:[(0,h.jsx)("input",{type:"radio",name:"type_work",value:"online",datatype:"anuone",alt:"true"}),(0,h.jsx)("span",{children:" \u0639\u0646 \u0628\u0639\u062f"})]})}),(0,h.jsx)("div",{className:"",style:{width:"1px",height:"56px",backgroundColor:"#E9E9E9"}}),(0,h.jsx)("div",{className:"fLT-Regular-sC  text-center ",children:(0,h.jsxs)("label",{id:"showCompo",className:"uLT-click",children:[(0,h.jsx)("input",{type:"radio",name:"type_work",value:"offline",datatype:"anuone",alt:"true"}),(0,h.jsx)("span",{children:" \u0628\u0627\u0644\u062d\u0636\u0648\u0631 "})]})})]}),(null===G||void 0===G?void 0:G.type_work)&&(0,h.jsx)("p",{className:"position-absolute mb-0 fLT-Regular-sA cLT-danger-text  px-2",style:{bottom:"-27px"},children:null===G||void 0===G?void 0:G.type_work})]})]})}),(0,h.jsxs)(j.Z,{className:"d-flex align-items-center",children:[(0,h.jsx)("label",{className:"fLT-Regular-sB cLT-support2-text mb-2",children:"\u0645\u0648\u0642\u0639\u0643"}),(0,h.jsxs)(y.Z.Group,{as:b.Z,md:6,className:"mb-3 position-relative ",children:[(0,h.jsx)("div",{className:" uLT-bd-f-platinum-sA uLT-f-radius-sB cLT-main-text fLT-Regular-sB LT-edit-account-input",children:(0,h.jsx)(_.ZP,{placeholder:"\u0627\u0644\u0628\u0644\u062f",className:"uLT-f-radius-sB",options:null===F||void 0===F?void 0:F.country,onChange:function(e){z(e.id)},getOptionLabel:function(e){return null===e||void 0===e?void 0:e.name},getOptionValue:function(e){return null===e||void 0===e?void 0:e.id}})}),(null===G||void 0===G?void 0:G.country_id)&&(0,h.jsx)("p",{className:"position-absolute mb-0 fLT-Regular-sA cLT-danger-text  px-2",style:{bottom:"-27px"},children:null===G||void 0===G?void 0:G.country_id})]}),(0,h.jsxs)(y.Z.Group,{as:b.Z,md:6,className:"mb-3 position-relative",children:[(0,h.jsx)("div",{className:" uLT-bd-f-platinum-sA uLT-f-radius-sB cLT-main-text fLT-Regular-sB LT-edit-account-input",children:(0,h.jsx)(_.ZP,{placeholder:"\u0627\u0644\u0645\u062f\u064a\u0646\u0629",options:null===F||void 0===F?void 0:F.city,onChange:function(e){Q(e.id)},getOptionLabel:function(e){return null===e||void 0===e?void 0:e.name},getOptionValue:function(e){return null===e||void 0===e?void 0:e.id}})}),(null===G||void 0===G?void 0:G.city_id)&&(0,h.jsx)("p",{className:"position-absolute mb-0 fLT-Regular-sA cLT-danger-text  px-2",style:{bottom:"-27px"},children:null===G||void 0===G?void 0:G.city_id})]})]}),"offline"===re.type_work&&(0,h.jsxs)(j.Z,{children:[(0,h.jsxs)(y.Z.Group,{as:b.Z,md:6,className:"mb-3",children:[(0,h.jsx)(y.Z.Label,{className:"fLT-Regular-sB cLT-support2-text mb-2",children:" \u0627\u0644\u0645\u0646\u0637\u0642\u0629 "}),(0,h.jsx)("div",{className:" uLT-bd-f-platinum-sA uLT-f-radius-sB cLT-main-text fLT-Regular-sB LT-edit-account-input",children:(0,h.jsx)(_.ZP,{placeholder:"\u0627\u0644\u0645\u0646\u0637\u0642\u0629",options:null===F||void 0===F?void 0:F.state,onChange:function(e){ee(e.id)},getOptionLabel:function(e){return null===e||void 0===e?void 0:e.name},getOptionValue:function(e){return null===e||void 0===e?void 0:e.id}})})]}),(0,h.jsxs)(y.Z.Group,{as:b.Z,md:6,className:"mb-3 ",children:[(0,h.jsx)(y.Z.Label,{className:"fLT-Regular-sB cLT-support2-text mb-2",children:"\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0628\u0627\u0644\u062a\u0641\u0635\u064a\u0644"}),(0,h.jsx)(y.Z.Control,{onChange:ce,name:"address",className:"uLT-f-radius-sB uLT-bd-f-platinum-sA",type:"text",value:null===re||void 0===re?void 0:re.address,placeholder:"\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0628\u0627\u0644\u062a\u0641\u0635\u064a\u0644"})]})]}),(0,h.jsx)("div",{className:"LT-upload-request",children:(0,h.jsx)(p.Z,{inputRef:ue,isDrop:function(e){var s,t,a=e,i=(0,c.Z)(a);try{for(i.s();!(t=i.n()).done;){var n=t.value;n.type.match("video/")?ve.videos.push(n):n.type.match("image/")&&ve.images.push(n)}}catch(o){i.e(o)}finally{i.f()}if(void 0!==(null===(s=e[0].name.split(".")[1])||void 0===s?void 0:s.toLowerCase())){var l=Object.keys(e).map((function(s){var t;return{name:e[s].name,icon:null===(t=e[s].name.split(".")[1])||void 0===t?void 0:t.toUpperCase().trim()}}));Te((function(e){return[].concat((0,d.Z)(e),[l]).flat()}))}else alert("file type not supported")},targetClick:function(e){var s;ue.current.click(),I.append("images",null===(s=e.target)||void 0===s?void 0:s.files)},fileArr:he,handleDelete:function(e,s,t){var a=ve.images.filter((function(e){return e.name!==s})),i=ve.videos.filter((function(e){return e.name!==s}));fe({images:a,videos:i}),Te((function(e){return he.filter((function(e,s){return s!==t}))}))},uploadDescription:"\u0627\u0633\u062d\u0628 \u0648\u0627\u0641\u0644\u062a \u0623\u064a \u0627\u0644\u0635\u0648\u0631 \u0627\u0648 \u0645\u0633\u062a\u0646\u062f\u0627\u062a \u0642\u062f \u062a\u0643\u0648\u0646 \u0645\u0641\u064a\u062f\u0629 \u0641\u064a \u0634\u0631\u062d \u0645\u0648\u062c\u0632\u0643 \u0647\u0646\u0627 (\u0627\u0644\u062d\u062f \u0627\u0644\u0627\u0642\u0635\u064a \u0644\u062d\u062c\u0645 \u0627\u0644\u0645\u0644\u0641:25 \u0645\u0628\u062c\u0627 \u0628\u0627\u064a\u062a)"})}),(0,h.jsxs)("div",{className:"LT-skills-request~ d-grid gap-3 pb-4 h-100 position-relative",children:[(0,h.jsxs)("p",{className:"m-0 fLT-Bold-sA cLT-main-text",children:["\u0645\u0627 \u0647\u064a \u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a  ",(0,h.jsx)("span",{className:"cLT-support1-text",children:"\u0648 \u0627\u0644\u0645\u062c\u0627\u0644\u0627\u062a"})," \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629\u061f"]}),(0,h.jsx)(w.Z,{tags:null===g||void 0===g?void 0:g.category,tagDescription:"\n                        \u0627\u062f\u062e\u0644  \u0645\u0627 \u064a\u0635\u0644 \u0627\u0644\u064a 5 \u0645\u0647\u0627\u0631\u0627\u062a \u062a\u0635\u0641 \u0645\u0634\u0631\u0648\u0639\u0643 \u0639\u0644\u064a \u0627\u0641\u0636\u0644 \u0648\u062c\u0629\n                        \u0633\u064a\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0645\u0634\u062a\u063a\u0644\u064a\u0646 \u0647\u0630\u0647 \u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0644\u0644\u0639\u062b\u0648\u0627\u0631 \u0639\u0644\u064a \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u062a\u064a \u064a\u0647\u062a\u0645\u0648\u0646 \u0628\u0647\u0627 \u0648 \u064a\u062e\u062a\u0628\u0631\u0648\u0646\u0647\u0627 \u0627\u0643\u062b\u0631\n                        "}),(null===G||void 0===G?void 0:G.category)&&(0,h.jsx)("p",{className:"position-absolute mb-0 fLT-Regular-sA cLT-danger-text  px-2",style:{bottom:"10px"},children:null===G||void 0===G?void 0:G.category})]}),(0,h.jsx)("div",{className:"d-flex justify-content-end  align-items-left",children:(0,h.jsx)("div",{className:"shadow uLT-f-radius-sB",children:(0,h.jsx)(v.Z,{loading:ye,btnClasses:"cLT-secondary-bg py-2 px-4 uLT-f-radius-sB",textClasses:"px-4 cLT-white-text fLT-Regular-sC",innerText:" \u0625\u0631\u0633\u0627\u0644"})})})]})]})},S=t(39772),D=t(17975),G=function(){var e,s,t=(0,i.useState)(),n=(0,a.Z)(t,2),o=n[0],r=n[1],d=(0,l.UO)();(0,i.useEffect)((function(){o||D.D._GET_ProfileData(null===d||void 0===d?void 0:d.id).then((function(e){return r(e.data.data)})).catch((function(e){return e.response}))}),[null===d||void 0===d?void 0:d.id,o]);var c={id:null===o||void 0===o?void 0:o.id,category:null===o||void 0===o?void 0:o.category,avatar:null===o||void 0===o?void 0:o.avatar,name:null===o||void 0===o?void 0:o.fullname,jobName:null===o||void 0===o||null===(e=o.job_name_id)||void 0===e?void 0:e.name,myFlag:null===o||void 0===o||null===(s=o.nationality)||void 0===s?void 0:s.logo,status:null===o||void 0===o?void 0:o.available,rate:null===o||void 0===o?void 0:o.rate,performance:null===o||void 0===o?void 0:o.complete_profile};return(0,h.jsxs)("div",{className:"h-100 position-relative",children:[(0,h.jsx)("div",{className:"container-fluid py-5 px-4 cLT-main-bg",children:(0,h.jsx)(S.Z,{})}),(0,h.jsx)("div",{className:"container px-0 position-relative",style:{top:"-75px",left:"0px"},children:(0,h.jsx)(A,{data:c})})]})}}}]);