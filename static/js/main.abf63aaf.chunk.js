(this["webpackJsonpdencoder-ui"]=this["webpackJsonpdencoder-ui"]||[]).push([[0],{32:function(e,t,c){},33:function(e,t,c){},37:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(5),a=c(0),s=c.n(a),r=c(13),o=c.n(r),i=(c(32),c(7)),l=(c(33),c(34),Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_BASE_PRODUCTION:"https://dencoder.herokuapp.com",REACT_APP_API_BASE_DEVELOPMENT:"http://localhost:8080"}).REACT_APP_API_BASE||function(){return"https://dencoder.herokuapp.com"}()),j=c(18),d=c.n(j),u=(c(37),c(49)),b=c(48),h=c(19),O=c(24),m=c(9),x=c(25),p=c(26),f=c(20),g=function(e){var t=e.uri,c=e.maxLength,s=e.submitButtonLabel,r=e.setShouldDecodeMessage,o=Object(a.useState)(""),l=Object(i.a)(o,2),j=l[0],d=l[1],g=Object(a.useState)(""),S=Object(i.a)(g,2),C=S[0],E=S[1],v=Object(a.useState)(""),_=Object(i.a)(v,2),T=_[0],P=_[1],A=Object(a.useState)(!1),D=Object(i.a)(A,2),L=D[0],N=D[1];return Object(n.jsx)(u.a,{onSubmit:function(e){e.preventDefault(),j&&C&&(N(!0),fetch(t,{method:"post",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({secret:j,message:C})}).then((function(e){return e.text()})).then((function(e){P(e),N(!1)})).catch(console.error))},children:Object(n.jsxs)(f.a,{fluid:!0,className:"pt-3 pb-3",children:[Object(n.jsxs)(b.a,{children:[Object(n.jsx)(h.a,{sm:12,md:6,children:Object(n.jsxs)(u.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(n.jsx)(u.a.Label,{className:"w-100",children:Object(n.jsx)("h2",{children:"Initial message"})}),Object(n.jsx)(u.a.Control,{as:"textarea",rows:16,value:C,onChange:function(e){return E(e.target.value)},maxLength:c})]})}),Object(n.jsx)(h.a,{sm:12,md:6,children:Object(n.jsxs)(u.a.Group,{controlId:"exampleForm.ControlTextarea2",children:[Object(n.jsx)(u.a.Label,{className:"w-100",children:Object(n.jsx)("h2",{children:"Result message"})}),Object(n.jsx)(u.a.Control,{as:"textarea",rows:16,value:T,onClick:function(e){e.target.select(),document.execCommand("copy")},readOnly:!0})]})})]}),Object(n.jsxs)(b.a,{children:[Object(n.jsx)(h.a,{sm:12,md:6,className:"mb-3",children:Object(n.jsx)(u.a.Control,{required:!0,size:"lg",value:j,onChange:function(e){return d(e.target.value)},placeholder:"Enter a secret phrase"})}),Object(n.jsx)(h.a,{sm:12,md:6,children:Object(n.jsxs)(m.a,{as:x.a,className:"w-100",children:[Object(n.jsx)(O.a,{className:"w-75",size:"lg",type:"submit",disabled:L,variant:"info",children:L?"Loading...":s}),Object(n.jsx)(m.a.Toggle,{style:{maxWidth:"3rem"},split:!0,variant:"info"}),Object(n.jsxs)(m.a.Menu,{children:[Object(n.jsxs)(m.a.Item,{onClick:function(){return r(!1)},children:[Object(n.jsx)(p.a,{})," Encode message"]}),Object(n.jsxs)(m.a.Item,{onClick:function(){return r(!0)},children:[Object(n.jsx)(p.b,{})," Decode message"]})]})]})})]})]})})};g.defaultProps={maxLength:1e3,submitButtonLabel:"Submit",setShouldDecodeMessage:function(){}};var S=g,C=function(e){var t=e.apiBase,c=Object(a.useState)(!1),s=Object(i.a)(c,2),r=s[0],o=s[1];return Object(n.jsx)("div",{className:"DencodeFormWrapper",children:Object(n.jsx)(S,{title:"Encode message",uri:t+(r?"/api/decode":"/api/encode"),setShouldDecodeMessage:o,submitButtonLabel:r?"Decode message":"Encode message"})})},E=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){fetch(l).then((function(e){return s(e.ok)})).catch((function(){return s(!1)}))}),[]),Object(n.jsx)("div",{className:"App",children:Object(n.jsx)("header",{className:"App-header",children:c?Object(n.jsx)(C,{apiBase:l}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(d.a,{type:"line-scale-pulse-out",active:!0}),Object(n.jsx)("h4",{children:"Initializing the application..."})]})})})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,50)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(E,{})}),document.getElementById("root")),v()}},[[40,1,2]]]);
//# sourceMappingURL=main.abf63aaf.chunk.js.map