(this["webpackJsonpwebcam-border-generator"]=this["webpackJsonpwebcam-border-generator"]||[]).push([[0],{224:function(e,c,t){"use strict";t.r(c);var n=t(4),o=t(0),r=t(21),a=t.n(r),i=t(59),s=t(6),j=(t(27),t(19)),b=t(89);var l=function(){return Object(n.jsx)("header",{children:Object(n.jsx)("h1",{children:"OBS border generator"})})},d=t(97),O=t(98);function h(e){return Object(n.jsx)("div",{children:Object(n.jsx)(O.a,{interactive:!0,placement:"bottom",content:Object(n.jsx)(d.a,{color:e.color,onChange:function(c){return e.onChange(c.hex)}}),children:Object(n.jsx)("button",{className:"ref-button",style:{backgroundColor:e.color},children:e.title})})})}var u=t(239);function x(e){return Object(n.jsx)("div",{children:Object(n.jsx)(u.a,{defaultValue:10,getAriaValueText:function(e){return"".concat(e,"s")},"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",onChangeCommitted:function(c,t){return e.onChange("".concat(t,"s"))},step:1,min:1,max:600})})}function g(e){return Object(n.jsx)("div",{className:"borderCSS",style:{width:e.width,height:e.height,backgroundImage:"linear-gradient(45deg, ".concat(e.color1,",\n          ").concat(e.color2,",\n          ").concat(e.color3,", \n          ").concat(e.color4,",\n          ").concat(e.color1,",\n          ").concat(e.color2,")"),backgroundSize:"800% 800%",animation:"gradient ".concat(e.time," linear infinite")}})}function p(){var e=window.location.href,c=Object(o.useState)("#ee7752"),t=Object(j.a)(c,2),r=t[0],a=t[1],i=Object(o.useState)("#e73c7e"),s=Object(j.a)(i,2),d=s[0],O=s[1],u=Object(o.useState)("#23a6d5"),p=Object(j.a)(u,2),m=p[0],f=p[1],C=Object(o.useState)("#23d5ab"),v=Object(j.a)(C,2),w=v[0],y=v[1],S=Object(o.useState)("10s"),N=Object(j.a)(S,2),k=N[0],L=N[1],R="".concat(e,"border/").concat(r.substring(1),"/").concat(d.substring(1),"/").concat(m.substring(1),"/").concat(w.substring(1),"/").concat(k),A=Object(o.useState)(!1),B=Object(j.a)(A,2),D=B[0],E=B[1];return Object(o.useEffect)((function(){E(!1)}),[R]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(l,{}),Object(n.jsxs)("div",{className:"centered",children:[Object(n.jsxs)("div",{className:"sliderDiv",children:[Object(n.jsx)("h6",{children:"Animation time (seconds):"}),Object(n.jsx)(x,{onChange:L})]}),Object(n.jsx)(h,{color:r,onChange:a,title:"COLOR 1"}),Object(n.jsx)(h,{color:d,onChange:O,title:"COLOR 2"}),Object(n.jsx)(h,{color:m,onChange:f,title:"COLOR 3"}),Object(n.jsx)(h,{color:w,onChange:y,title:"COLOR 4"})]}),Object(n.jsx)("p",{className:"grey preview",children:"preview:"}),Object(n.jsx)(g,{color1:r,color2:d,color3:m,color4:w,width:"400px",height:"300px",time:k}),Object(n.jsxs)("div",{className:"centered copytoclipboard",children:[Object(n.jsx)(b.CopyToClipboard,{text:R,onCopy:function(){return E(!0)},children:Object(n.jsx)("p",{children:R})}),D&&Object(n.jsx)("span",{className:"grey",children:"Copied to clipboard!"})]}),!D&&Object(n.jsx)("p",{className:"grey",children:" \u2191 click to copy to clipboard \u2191 "})]})}function m(){var e=Object(s.f)().c1,c=Object(s.f)().c2,t=Object(s.f)().c3,o=Object(s.f)().c4,r=Object(s.f)().time;return Object(n.jsx)(g,{color1:"#".concat(e),color2:"#".concat(c),color3:"#".concat(t),color4:"#".concat(o),width:"800px",height:"600px",time:r})}function f(){return Object(n.jsx)(i.a,{children:Object(n.jsxs)(s.c,{children:[Object(n.jsx)(s.a,{path:"/",exact:!0,children:Object(n.jsx)(p,{})}),Object(n.jsx)(s.a,{path:"/border/:c1/:c2/:c3/:c4/:time",children:Object(n.jsx)(m,{})})]})})}a.a.render(Object(n.jsx)(f,{}),document.getElementById("root"))},27:function(e,c,t){}},[[224,1,2]]]);
//# sourceMappingURL=main.647697da.chunk.js.map