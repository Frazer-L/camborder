(this.webpackJsonpcamborder=this.webpackJsonpcamborder||[]).push([[0],{22:function(e,c,t){},225:function(e,c,t){"use strict";t.r(c);var n=t(4),o=t(0),r=t(21),a=t.n(r),s=t(59),i=t(6),l=t(64),j=(t(22),t(19)),b=t(90);var d=function(){return Object(n.jsxs)("nav",{class:"navbar navbar-expand-md navbar-light",style:{backgroundColor:"#ddd"},children:[Object(n.jsx)("div",{class:"navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2"}),Object(n.jsx)("div",{class:"mx-auto order-0",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("a",{class:"navbar-brand mx-auto",id:"navbarTitle",href:"/",style:{fontFamily:"Staatliches"},children:"camborder.com"})})}),Object(n.jsx)("div",{class:"navbar-collapse collapse w-100 order-3 dual-collapse2",children:Object(n.jsx)("ul",{class:"navbar-nav ml-auto",children:Object(n.jsx)("li",{class:"nav-item",children:Object(n.jsx)("a",{class:"nav-link",id:"navbarHowTo",href:"/#/howto",children:"How to use"})})})})]})},h=t(98),O=t(99);function u(e){return Object(n.jsx)("div",{children:Object(n.jsx)(O.a,{interactive:!0,placement:"bottom",content:Object(n.jsx)(h.a,{color:e.color,onChange:function(c){return e.onChange(c.hex)}}),children:Object(n.jsx)("button",{className:"ref-button",style:{backgroundColor:e.color},children:e.title})})})}var x=t(240);function p(e){return Object(n.jsx)("div",{children:Object(n.jsx)(x.a,{defaultValue:10,getAriaValueText:function(e){return"".concat(e,"s")},"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",onChangeCommitted:function(c,t){return e.onChange("".concat(t,"s"))},step:1,min:1,max:600})})}function g(e){return Object(n.jsx)("div",{className:"borderCSS",style:{width:e.width,height:e.height,backgroundImage:"linear-gradient(45deg, ".concat(e.color1,",\n          ").concat(e.color2,",\n          ").concat(e.color3,", \n          ").concat(e.color4,",\n          ").concat(e.color1,",\n          ").concat(e.color2,")"),backgroundSize:"800% 800%",animation:"gradient ".concat(e.time," linear infinite")}})}function m(){var e=window.location.href,c=Object(o.useState)("#ee7752"),t=Object(j.a)(c,2),r=t[0],a=t[1],s=Object(o.useState)("#e73c7e"),i=Object(j.a)(s,2),l=i[0],h=i[1],O=Object(o.useState)("#23a6d5"),x=Object(j.a)(O,2),m=x[0],v=x[1],f=Object(o.useState)("#23d5ab"),w=Object(j.a)(f,2),y=w[0],C=w[1],S=Object(o.useState)("10s"),k=Object(j.a)(S,2),N=k[0],L=k[1],R="".concat(e,"border/").concat(r.substring(1),"/").concat(l.substring(1),"/").concat(m.substring(1),"/").concat(y.substring(1),"/").concat(N),T=Object(o.useState)(!1),z=Object(j.a)(T,2),A=z[0],H=z[1];return Object(o.useEffect)((function(){H(!1)}),[R]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(d,{}),Object(n.jsxs)("div",{className:"centered",children:[Object(n.jsxs)("div",{className:"sliderDiv",children:[Object(n.jsx)("h6",{children:"Animation time (".concat(N,"):")}),Object(n.jsx)(p,{onChange:L})]}),Object(n.jsx)(u,{color:r,onChange:a,title:"COLOR 1"}),Object(n.jsx)(u,{color:l,onChange:h,title:"COLOR 2"}),Object(n.jsx)(u,{color:m,onChange:v,title:"COLOR 3"}),Object(n.jsx)(u,{color:y,onChange:C,title:"COLOR 4"})]}),Object(n.jsx)("p",{className:"grey preview",children:"preview:"}),Object(n.jsx)(g,{color1:r,color2:l,color3:m,color4:y,width:"400px",height:"300px",time:N}),Object(n.jsxs)("div",{className:"centered copytoclipboard",children:[Object(n.jsx)(b.CopyToClipboard,{text:R,onCopy:function(){return H(!0)},children:Object(n.jsx)("p",{children:R})}),A&&Object(n.jsx)("span",{className:"grey",children:"Copied to clipboard!"})]}),!A&&Object(n.jsx)("p",{className:"grey",children:" \u2191 click to copy to clipboard \u2191 "})]})}function v(){var e=Object(i.f)().c1,c=Object(i.f)().c2,t=Object(i.f)().c3,o=Object(i.f)().c4,r=Object(i.f)().time;return Object(n.jsx)(g,{color1:"#".concat(e),color2:"#".concat(c),color3:"#".concat(t),color4:"#".concat(o),width:"800px",height:"600px",time:r})}function f(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(d,{}),Object(n.jsxs)("div",{className:"howtopar",children:[Object(n.jsx)("p",{children:"1) Choose your desired colors and animation time."}),Object(n.jsxs)("p",{children:["2) Once you're happy with your settings ",Object(n.jsx)("strong",{children:"copy the link"})," generated below the preview."]}),Object(n.jsx)("p",{children:"3) In OBS add a new source > browser source. Use the link you copied as the URL for the browser source."}),Object(n.jsx)("p",{children:"Make sure to use the following settings:"}),Object(n.jsxs)("p",{style:{fontFamily:"Monospace"},children:["Width: 800px",Object(n.jsx)("br",{}),"Height: 600px",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"Custom CSS: ",Object(n.jsx)("br",{}),"body { background-color: rgba(0, 0, 0, 0); margin: 0px auto; overflow: hidden; }",Object(n.jsx)("br",{})]}),Object(n.jsxs)("p",{children:["Tip: ",Object(n.jsx)("strong",{children:"You can adjust the size, aspect-ratio and border width"})," by dragging to resize the border inside OBS. (Hold Alt to crop the edges to make the border width smaller!)"]})]})]})}function w(){return Object(o.useEffect)((function(){l.a.initialize("UA-186475779-1"),l.a.pageview("/")}),[]),Object(n.jsx)(s.a,{children:Object(n.jsxs)(i.c,{children:[Object(n.jsx)(i.a,{path:"/",exact:!0,children:Object(n.jsx)(m,{})}),Object(n.jsx)(i.a,{path:"/howto",exact:!0,children:Object(n.jsx)(f,{})}),Object(n.jsx)(i.a,{path:"/border/:c1/:c2/:c3/:c4/:time",children:Object(n.jsx)(v,{})})]})})}a.a.render(Object(n.jsx)(w,{}),document.getElementById("root"))}},[[225,1,2]]]);
//# sourceMappingURL=main.07b47d8f.chunk.js.map