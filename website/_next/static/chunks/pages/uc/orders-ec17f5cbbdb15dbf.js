(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[221],{8981:function(e,r,n){"use strict";n.d(r,{Ol:function(){return d},Zb:function(){return l},eW:function(){return u}});var t=n(7294),s=n(9632),c=n(4520),i=(...e)=>e.filter(Boolean).join(" "),[a,o]=(0,s.eC)("Card"),l=(0,s.Gp)(function(e,r){let{className:n,children:o,direction:l="column",justify:u,align:d,...x}=(0,c.Lr)(e),h=(0,s.jC)("Card",e);return t.createElement(s.m$.div,{ref:r,className:i("chakra-card",n),__css:{display:"flex",flexDirection:l,justifyContent:u,alignItems:d,position:"relative",minWidth:0,wordWrap:"break-word",...h.container},...x},t.createElement(a,{value:h},o))}),u=(0,s.Gp)(function(e,r){let{className:n,...c}=e,a=o();return t.createElement(s.m$.div,{ref:r,className:i("chakra-card__body",n),__css:a.body,...c})});(0,s.Gp)(function(e,r){let{className:n,justify:c,...a}=e,l=o();return t.createElement(s.m$.div,{ref:r,className:i("chakra-card__footer",n),__css:{display:"flex",justifyContent:c,...l.footer},...a})});var d=(0,s.Gp)(function(e,r){let{className:n,...c}=e,a=o();return t.createElement(s.m$.div,{ref:r,className:i("chakra-card__header",n),__css:a.header,...c})})},4766:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/uc/orders",function(){return n(914)}])},0:function(e,r,n){"use strict";var t,s,c=n(5893),i=n(3382),a=n(8641);(t=s||(s={}))[t.success=0]="success",t[t.info=1]="info",t[t.warning=2]="warning",t[t.error=3]="error";let o=e=>{let{type:r="success",title:n,content:t,children:s}=e;return(0,c.jsxs)(a.xu,{textAlign:"center",py:10,px:6,children:[(()=>{switch(r){case"success":default:return(0,c.jsx)(i.rE,{boxSize:"50px",color:"green.500"});case"info":return(0,c.jsx)(i.sz,{boxSize:"50px",color:"blue.500"});case"warning":return(0,c.jsx)(i.ii,{boxSize:"50px",color:"orange.300"});case"error":return(0,c.jsx)(i.Tw,{boxSize:"20px",color:"white"})}})(),(0,c.jsx)(a.X6,{as:"h2",size:"xl",mt:6,mb:2,children:n}),t&&(0,c.jsx)(a.xv,{my:10,color:"gray.500",children:t}),s]})};r.Z=o},914:function(e,r,n){"use strict";n.r(r);var t=n(5893),s=n(8981),c=n(8641),i=n(0),a=n(2829),o=n(2962),l=n(7294);let u=e=>{let{oid:r,time:n,amount:i,status:a,goods:o}=e;return(0,t.jsx)(s.Zb,{p:5,fontSize:"14",borderRadius:"2xl",children:(0,t.jsxs)(c.kC,{direction:"row",columnGap:5,alignItems:"center",justifyContent:"space-around",children:[(0,t.jsx)(c.xu,{children:(0,t.jsxs)(c.xv,{children:["￥"," ",(0,t.jsx)(c.xv,{as:"span",fontSize:"lg",children:i})]})}),(0,t.jsx)(c.xu,{children:(0,t.jsx)(c.xv,{color:"已发货"===a?"teal":"已支付"===a?"blue":"未支付"===a?"red":"black",children:a})}),(0,t.jsxs)(c.Kq,{divider:(0,t.jsx)(c.cX,{}),direction:"column",children:[(0,t.jsxs)(c.xu,{children:[(0,t.jsx)(c.xv,{children:"订单编号："}),(0,t.jsx)(c.xv,{children:r})]}),(0,t.jsxs)(c.xu,{children:[(0,t.jsx)(c.xv,{children:"时间："}),(0,t.jsx)(c.xv,{children:new Date(1e3*n).toLocaleString()})]}),(0,t.jsx)(c.xu,{children:(0,t.jsxs)(c.xv,{children:["类型：",o]})})]})]})})},d=()=>{let[e,r]=(0,l.useState)(null),[n,s]=(0,l.useState)(""),[d,x]=(0,l.useState)(!1),[h,f]=(0,l.useState)(!1),j=l.useContext(a.V),p=async()=>{x(!0),f(!1);let e=await fetch("http://10.7.1.102:8000/api/user/orders",{headers:{Authorization:"Bearer ".concat(j.token)}}),n=await e.json();200===n.status?r(n.data.orders):s(n.msg),x(!1),f(!0)};return(0,l.useEffect)(()=>{j.token&&p()},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.PB,{title:"我的订单",description:"Outline VPN 会员中心，我的订单"}),(0,t.jsxs)(c.kC,{direction:"column",rowGap:5,children:[h&&(null==e?void 0:e.length)==0&&(0,t.jsx)(i.Z,{type:"info",title:"暂无订单",content:""}),e&&e.map(e=>(0,t.jsx)(u,{...e},e.oid))]})]})};d.Layout="uc",d.requireAuthed=!0,r.default=d}},function(e){e.O(0,[774,888,179],function(){return e(e.s=4766)}),_N_E=e.O()}]);