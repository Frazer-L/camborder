(this.webpackJsonpcamborder=this.webpackJsonpcamborder||[]).push([[0],{22:function(e,t,c){},225:function(e,t,c){"use strict";c.r(t);var n=c(3),r=c(0),o=c(21),a=c.n(o),s=c(59),i=c(6),l=c(64),j=(c(22),c(19)),d=c(90);var b=function(){return Object(n.jsxs)("nav",{class:"navbar navbar-expand-md navbar-light",style:{backgroundColor:"#ddd"},children:[Object(n.jsx)("div",{class:"navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2"}),Object(n.jsx)("div",{class:"mx-auto order-0",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("a",{class:"navbar-brand mx-auto",id:"navbarTitle",href:"/",style:{fontFamily:"Staatliches"},children:"camborder.com"})})}),Object(n.jsx)("div",{class:"navbar-collapse collapse w-100 order-3 dual-collapse2",children:Object(n.jsx)("ul",{class:"navbar-nav ml-auto",children:Object(n.jsx)("li",{class:"nav-item",children:Object(n.jsx)("a",{class:"nav-link",id:"navbarHowTo",href:"/#/howto",children:"How to use"})})})})]})},h=c(98),O=c(99);function x(e){return Object(n.jsx)("div",{className:"colorpickerDiv",children:Object(n.jsx)(O.a,{interactive:!0,placement:"bottom",content:Object(n.jsx)(h.a,{color:e.color,onChange:function(t){return e.onChange(t.hex)}}),children:Object(n.jsx)("button",{className:"ref-button",style:{backgroundColor:e.color},children:e.title})})})}var u=c(240);function p(e){return Object(n.jsx)("div",{children:Object(n.jsx)(u.a,{defaultValue:10,getAriaValueText:function(e){return"".concat(e,"s")},"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",onChangeCommitted:function(t,c){return e.onChange("".concat(c,"s"))},step:1,min:1,max:600})})}function g(e){return Object(n.jsx)("div",{className:"borderCSS",style:{width:e.width,height:e.height,backgroundImage:"linear-gradient(45deg, ".concat(e.color1,",\n          ").concat(e.color2,",\n          ").concat(e.color3,", \n          ").concat(e.color4,",\n          ").concat(e.color1,",\n          ").concat(e.color2,")"),backgroundSize:"800% 800%",animation:"gradient ".concat(e.time," linear infinite")}})}function m(){var e=window.location.href,t=Object(r.useState)("#ee7752"),c=Object(j.a)(t,2),o=c[0],a=c[1],s=Object(r.useState)("#e73c7e"),i=Object(j.a)(s,2),l=i[0],h=i[1],O=Object(r.useState)("#23a6d5"),u=Object(j.a)(O,2),m=u[0],v=u[1],f=Object(r.useState)("#23d5ab"),w=Object(j.a)(f,2),y=w[0],C=w[1],k=Object(r.useState)("10s"),S=Object(j.a)(k,2),N=S[0],z=S[1],L="".concat(e,"border/").concat(o.substring(1),"/").concat(l.substring(1),"/").concat(m.substring(1),"/").concat(y.substring(1),"/").concat(N),T=Object(r.useState)(!1),A=Object(j.a)(T,2),H=A[0],R=A[1];return Object(r.useEffect)((function(){R(!1)}),[L]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(b,{}),Object(n.jsxs)("div",{className:"centered",children:[Object(n.jsxs)("div",{className:"sliderDiv",children:[Object(n.jsx)("h6",{children:"Animation time (".concat(N,"):")}),Object(n.jsx)(p,{onChange:z})]}),Object(n.jsx)(x,{color:o,onChange:a,title:"COLOR 1"}),Object(n.jsx)(x,{color:l,onChange:h,title:"COLOR 2"}),Object(n.jsx)(x,{color:m,onChange:v,title:"COLOR 3"}),Object(n.jsx)(x,{color:y,onChange:C,title:"COLOR 4"})]}),Object(n.jsx)("p",{className:"grey preview",children:"preview:"}),Object(n.jsx)(g,{color1:o,color2:l,color3:m,color4:y,width:"400px",height:"300px",time:N}),Object(n.jsxs)("p",{className:"grey note",children:[Object(n.jsx)("strong",{children:"Tip:"})," You can adjust the ",Object(n.jsx)("strong",{children:"size"}),", ",Object(n.jsx)("strong",{children:"aspect-ratio"})," and ",Object(n.jsx)("strong",{children:"line thickness"})," by dragging to resize the border inside OBS."]}),Object(n.jsx)("p",{className:"grey note",children:"(Hold Alt while dragging to crop the edges to make the border width smaller!)"}),Object(n.jsxs)("div",{className:"centered copytoclipboard",children:[Object(n.jsx)(d.CopyToClipboard,{text:L,onCopy:function(){return R(!0)},children:Object(n.jsx)("p",{children:L})}),H&&Object(n.jsx)("span",{className:"grey",children:"Copied to clipboard!"})]}),!H&&Object(n.jsx)("p",{className:"grey",children:" \u2191 click to copy to clipboard \u2191 "})]})}function v(){var e=Object(i.f)().c1,t=Object(i.f)().c2,c=Object(i.f)().c3,r=Object(i.f)().c4,o=Object(i.f)().time;return Object(n.jsx)(g,{color1:"#".concat(e),color2:"#".concat(t),color3:"#".concat(c),color4:"#".concat(r),width:"800px",height:"600px",time:o})}function f(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(b,{}),Object(n.jsxs)("div",{className:"howtopar",children:[Object(n.jsx)("p",{children:"1) Choose your desired colors and animation time."}),Object(n.jsxs)("p",{children:["2) Once you're happy with your settings ",Object(n.jsx)("strong",{children:"copy the link"})," generated below the preview."]}),Object(n.jsx)("p",{children:"3) In OBS add a new source > browser source. Use the link you copied as the URL for the browser source."}),Object(n.jsx)("p",{children:"Make sure to use the following settings:"}),Object(n.jsxs)("p",{style:{fontFamily:"Monospace"},children:["Width: 800px",Object(n.jsx)("br",{}),"Height: 600px",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"Custom CSS: ",Object(n.jsx)("br",{}),"body { background-color: rgba(0, 0, 0, 0); margin: 0px auto; overflow: hidden; }",Object(n.jsx)("br",{})]}),Object(n.jsxs)("p",{children:["Tip: ",Object(n.jsx)("strong",{children:"You can adjust the size, aspect-ratio and border width"})," by dragging to resize the border inside OBS. (Hold Alt while dragging to crop the edges to make the border width smaller!)"]})]})]})}function w(){return Object(r.useEffect)((function(){l.a.initialize("UA-186475779-1"),l.a.pageview(window.location.pathname)}),[]),Object(n.jsx)(s.a,{children:Object(n.jsxs)(i.c,{children:[Object(n.jsx)(i.a,{path:"/",exact:!0,children:Object(n.jsx)(m,{})}),Object(n.jsx)(i.a,{path:"/howto",exact:!0,children:Object(n.jsx)(f,{})}),Object(n.jsx)(i.a,{path:"/border/:c1/:c2/:c3/:c4/:time",children:Object(n.jsx)(v,{})})]})})}a.a.render(Object(n.jsx)(w,{}),document.getElementById("root"))}},[[225,1,2]]]);
//# sourceMappingURL=main.2b6c13ba.chunk.js.map