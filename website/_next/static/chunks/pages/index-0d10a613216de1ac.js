(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8998:function(e,t,n){"use strict";n.d(t,{Jf:function(){return p},dw:function(){return x},kN:function(){return u}});var r=n(7294),a=n(2494),s=n(9632),i=n(8387),l=n(4520),o=(...e)=>e.filter(Boolean).join(" "),[c,d]=(0,i.k)({name:"StatStylesContext",errorMessage:"useStatStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Stat />\" "}),u=(0,s.Gp)(function(e,t){let n=(0,s.jC)("Stat",e),a={position:"relative",flex:"1 1 0%",...n.container},{className:i,children:d,...u}=(0,l.Lr)(e);return r.createElement(c,{value:n},r.createElement(s.m$.div,{ref:t,...u,className:o("chakra-stat",i),__css:a},r.createElement("dl",null,d)))});u.displayName="Stat",(e=>r.createElement(a.JO,{color:"red.400",...e},r.createElement("path",{fill:"currentColor",d:"M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"}))).displayName="StatDownArrow",(0,s.Gp)(function(e,t){return r.createElement(s.m$.div,{...e,ref:t,role:"group",className:o("chakra-stat__group",e.className),__css:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",alignItems:"flex-start"}})}).displayName="StatGroup",(0,s.Gp)(function(e,t){let n=d();return r.createElement(s.m$.dd,{ref:t,...e,className:o("chakra-stat__help-text",e.className),__css:n.helpText})}).displayName="StatHelpText";var x=(0,s.Gp)(function(e,t){let n=d();return r.createElement(s.m$.dt,{ref:t,...e,className:o("chakra-stat__label",e.className),__css:n.label})});x.displayName="StatLabel";var p=(0,s.Gp)(function(e,t){let n=d();return r.createElement(s.m$.dd,{ref:t,...e,className:o("chakra-stat__number",e.className),__css:{...n.number,fontFeatureSettings:"pnum",fontVariantNumeric:"proportional-nums"}})});p.displayName="StatNumber"},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5334)}])},1004:function(e,t,n){"use strict";var r=n(5893),a=n(8641),s=n(7741),i=n(3382);let l=e=>{let t="月",n=30*e.price/e.duration;e.duration<30&&(t="天",n=e.price/e.duration);let l="";l=n%1==0?n.toFixed(0):n.toFixed(1);let o="/checkout?pid="+e.id;return(0,r.jsxs)(a.xu,{minW:"300px",boxShadow:"xl",pt:"15px",pb:"70px",borderWidth:1,rounded:"2xl",_hover:{boxShadow:"2xl"},position:"relative",children:[(0,r.jsxs)(a.kC,{direction:"column",align:"center",gap:"30px",pt:5,children:[(0,r.jsx)(a.xv,{as:"b",fontSize:"24px",color:"green.500",children:e.title}),(0,r.jsxs)(a.xu,{w:"full",bg:"gray.100",textAlign:"center",children:[(0,r.jsx)(a.xv,{as:"span",fontWeight:"700",fontSize:"30px",mr:1,children:"\xa5"}),(0,r.jsx)(a.xv,{as:"span",fontWeight:"700",fontSize:"60px",children:l}),(0,r.jsxs)(a.xv,{as:"span",children:[" / ",t]})]}),(0,r.jsxs)(a.aV,{spacing:3,children:[(0,r.jsxs)(a.HC,{children:[(0,r.jsx)(a.DE,{as:i.nQ,color:"green.400"}),"不限客户端数量"]}),(0,r.jsxs)(a.HC,{children:[(0,r.jsx)(a.DE,{as:i.nQ,color:"green.400"}),"每月 ",e.value,"G 流量"]}),e.desc.map(e=>(0,r.jsxs)(a.HC,{children:[(0,r.jsx)(a.DE,{as:i.nQ,color:"green.400"}),e]},e))]}),(0,r.jsx)(a.LZ,{})]}),(0,r.jsx)(a.M5,{children:(0,r.jsx)(s.zx,{position:"absolute",bottom:"30px",as:a.rU,href:o,w:"70%",mx:10,bg:"green.400",color:"white",rounded:"xl",boxShadow:"0 5px 20px 0px rgb(72 187 120 / 43%)",_hover:{bg:"green.500"},_focus:{bg:"green.500"},children:"立即购买"})})]})};t.Z=l},2346:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(5893),a=n(8641),s=n(7294),i=n(9632),l=n(8229),o=n(4302);function c(e){let t=typeof e;return null!=e&&("object"===t||"function"===t)&&!Array.isArray(e)}var d=n(7741),u=n(3887),x=n(9583);let p=e=>{let{imgsrc:t,title:n,subtitle:p,descript:h}=e;return(0,r.jsxs)(a.Kq,{direction:{base:"column",md:"row"},children:[(0,r.jsx)(a.kC,{p:8,flex:1,align:"center",justify:"center",children:(0,r.jsxs)(a.Kq,{spacing:6,w:"full",maxW:"lg",children:[(0,r.jsxs)(a.X6,{as:"h1",fontSize:{base:"3xl",md:"4xl",lg:"5xl"},children:[(0,r.jsx)(a.xv,{as:"span",position:"relative",_after:{content:"''",width:"full",height:function(e,t){var n;let r=c(t)?t:{fallback:t??"base"},a=function(e){var t;let n=c(e)?e:{fallback:e??"base"},r=(0,i.Fg)(),a=r.__breakpoints.details.map(({minMaxQuery:e,breakpoint:t})=>({breakpoint:t,query:e.replace("@media screen and ","")})),o=a.map(e=>e.breakpoint===n.fallback),d=function(e,t={}){let{ssr:n=!0,fallback:r}=t,a=(0,l.O)(),i=Array.isArray(e)?e:[e],o=Array.isArray(r)?r:[r];o=o.filter(e=>null!=e);let[c,d]=(0,s.useState)(()=>i.map((e,t)=>({media:e,matches:n?!!o[t]:a.window.matchMedia(e).matches})));return(0,s.useEffect)(()=>{d(i.map(e=>({media:e,matches:a.window.matchMedia(e).matches})));let e=i.map(e=>a.window.matchMedia(e)),t=e=>{d(t=>t.slice().map(t=>t.media===e.media?{...t,matches:e.matches}:t))};return e.forEach(e=>{"function"==typeof e.addListener?e.addListener(t):e.addEventListener("change",t)}),()=>{e.forEach(e=>{"function"==typeof e.removeListener?e.removeListener(t):e.removeEventListener("change",t)})}},[a.window]),c.map(e=>e.matches)}(a.map(e=>e.query),{fallback:o,ssr:n.ssr}),u=d.findIndex(e=>!0==e);return(null==(t=a[u])?void 0:t.breakpoint)??n.fallback}(r),d=(0,i.Fg)();if(!a)return;let u=Array.from((null==(n=d.__breakpoints)?void 0:n.keys)||[]),x=Array.isArray(e)?Object.fromEntries(Object.entries((0,o.Yq)(e,u)).map(([e,t])=>[e,t])):e;return function(e,t,n=o.AV){let r=Object.keys(e).indexOf(t);if(-1!==r)return e[t];let a=n.indexOf(t);for(;a>=0;){let s=n[a];if(e.hasOwnProperty(s)){r=a;break}a-=1}if(-1!==r){let i=n[r];return e[i]}}(x,a,u)}({base:"20%",md:"30%"}),position:"absolute",bottom:1,left:0,bg:"blue.400",zIndex:-1},children:n}),(0,r.jsx)("br",{}),(0,r.jsx)(a.xv,{as:"span",children:p})]}),(0,r.jsx)(a.xv,{fontSize:{base:"md",lg:"lg"},color:"gray.500",children:h}),(0,r.jsxs)(a.Kq,{direction:{base:"column",md:"row"},spacing:4,children:[(0,r.jsx)(d.zx,{color:"white",bg:"green.400",maxW:"md",_hover:{bg:"green.500"},as:a.rU,href:"/freekey",children:"免费获取密钥"}),(0,r.jsx)(d.zx,{maxW:"md",leftIcon:(0,r.jsx)(x.Ww5,{}),colorScheme:"telegram",as:a.rU,href:"https://t.me/outline8_com",children:"联系我们"})]})]})}),(0,r.jsx)(a.kC,{flex:1,children:(0,r.jsx)(a.M5,{children:(0,r.jsx)(u.Ee,{borderRadius:"full",alt:"Login Image",objectFit:"cover",src:t})})})]})};var h=p},7951:function(e,t,n){"use strict";var r=n(5893),a=n(8641),s=n(1691);let i=e=>{let{title:t,id:n}=e;return(0,r.jsx)(s.Z,{mt:{base:20,md:40},mb:{base:10,md:20},px:{base:3,md:10},children:(0,r.jsx)(a.X6,{as:"h2",id:n,fontSize:"2xl",children:t})})};t.Z=i},5334:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(5893),a=n(7294),s=n(8641),i=n(2494),l=n(2346),o=n(8395);let c=e=>{let{heading:t,description:n,icon:a}=e;return(0,r.jsx)(s.xu,{maxW:{base:"full",md:"350px"},w:"full",borderWidth:"1px",borderRadius:"lg",overflow:"hidden",p:5,children:(0,r.jsxs)(s.Kq,{align:"start",spacing:2,children:[(0,r.jsx)(s.kC,{w:16,h:16,align:"center",justify:"center",color:"white",rounded:"full",bg:(0,o.ff)("gray.100","gray.700"),children:a}),(0,r.jsxs)(s.xu,{mt:2,children:[(0,r.jsx)(s.X6,{size:"md",children:t}),(0,r.jsx)(s.xv,{mt:1,fontSize:"sm",children:n})]})]})})};var d=n(1872),u=n(4466),x=n(8998),p=n(1664),h=n.n(p);let m=e=>{let{device:t,os:n,icon:a,href:i}=e;return(0,r.jsx)(h(),{href:i,legacyBehavior:!0,children:(0,r.jsx)("a",{children:(0,r.jsx)(x.kN,{p:5,border:"1px solid",rounded:"lg",minW:"300px",_hover:{boxShadow:"dark-lg",bg:"main1"},children:(0,r.jsxs)(s.kC,{justifyContent:"space-around",children:[(0,r.jsx)(s.xu,{my:"auto",alignContent:"center",children:a}),(0,r.jsxs)(s.xu,{pl:{base:2,md:4},children:[(0,r.jsx)(x.dw,{fontWeight:"medium",isTruncated:!0,children:t}),(0,r.jsx)(x.Jf,{fontSize:"2xl",fontWeight:"medium",children:n})]})]})})})})};var f=n(1004),j=n(7951),g=n(2962);let b=()=>{let[e,t]=a.useState(null),[n,o]=a.useState(""),x=async()=>{let e=await fetch("http://10.7.1.102:8000/api/goods/homelist"),n=await e.json();200===n.status?t(n.data.goods):o(n.msg)};return a.useEffect(()=>{x()},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.PB,{title:"首页",description:"Outline VPN 优势/套餐选择/客户端下载"}),(0,r.jsx)(l.Z,{imgsrc:"images/homePageHero.jpg",title:"Outline VPN",subtitle:"App Store 中国区直接下载",descript:"Outline 是谷歌公司出品的一款开源 VPN 软件，已通过 Radically Open Security 和 Cure53 的安全和隐私性审核。"}),(0,r.jsx)(j.Z,{title:"为什么选择我们"}),(0,r.jsxs)(s.kC,{flexWrap:"wrap",gap:6,justify:"center",px:5,children:[(0,r.jsx)(c,{heading:"全平台使用",icon:(0,r.jsx)(i.JO,{as:d.XCr,w:10,h:10}),description:"一个密钥畅行全部平台，iphone 手机、安卓手机、windows 台式机、MacOS 台式机、笔记本电脑、平板电脑、路由器、智能电视、游戏主机 ..."}),(0,r.jsx)(c,{heading:"无限设备接入",icon:(0,r.jsx)(i.JO,{as:d.a0J,w:10,h:10}),description:"不限使用设备数量，不限同时在线数量，不论您有多少台设备均可同时使用，不论您是在办公室、学校、酒店或是家里，均不受任何限制"}),(0,r.jsx)(c,{heading:"使用简单",icon:(0,r.jsx)(i.JO,{as:d.pl2,w:10,h:10}),description:"所有平台统一界面，无需繁琐操作与配置。安装 app，填入密钥，即可开始使用。苹果设备亦可直接在 App Store 中国区下载安装"}),(0,r.jsx)(c,{heading:"超强稳定性",icon:(0,r.jsx)(i.JO,{as:d.XUT,w:10,h:10}),description:"Outline 能在极为恶劣的网路环境下使用，包括 DNS、内容和 IP 被限制的情况下。用户反映，即使在其他热门 VPN 无法连接的情况下，Outline 也依然能正常运行。"}),(0,r.jsx)(c,{heading:"隐私保护",icon:(0,r.jsx)(i.JO,{as:d.SBy,w:10,h:10}),description:"Outline 在设计上充分考虑了对用户隐私的保护。它绝不会记录您的数据流量，也不会跟踪您的互联网使用情况。"}),(0,r.jsx)(c,{heading:"超快稳定的速度",icon:(0,r.jsx)(i.JO,{as:d.TKO,w:10,h:10}),description:"供您无限制的享受互联网资源，自由的访问网站，观看流视频，下载文件，视频聊天……"})]}),(0,r.jsx)(j.Z,{id:"plan",title:"选择您的套餐"}),(0,r.jsx)(s.kC,{gap:10,direction:{base:"column",md:"row"},justifyContent:"space-around",children:e&&e.map(e=>(0,a.createElement)(f.Z,{...e,key:e.name}))}),(0,r.jsx)(j.Z,{id:"download",title:"下载客户端"}),(0,r.jsx)(s.kC,{flexWrap:"wrap",gridGap:6,justify:"center",children:u.Z.map(e=>(0,r.jsx)(m,{os:e.os,device:e.device,icon:(0,r.jsx)(i.JO,{as:e.icon,boxSize:"3em"}),href:e.href},e.os))})]})};var w=b}},function(e){e.O(0,[994,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);