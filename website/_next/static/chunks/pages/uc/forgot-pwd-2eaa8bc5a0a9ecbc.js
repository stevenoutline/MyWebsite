(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[230],{8532:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/uc/forgot-pwd",function(){return n(4421)}])},0:function(e,t,n){"use strict";var r,s,i=n(5893),a=n(3382),o=n(8641);(r=s||(s={}))[r.success=0]="success",r[r.info=1]="info",r[r.warning=2]="warning",r[r.error=3]="error";let c=e=>{let{type:t="success",title:n,content:r,children:s}=e;return(0,i.jsxs)(o.xu,{textAlign:"center",py:10,px:6,children:[(()=>{switch(t){case"success":default:return(0,i.jsx)(a.rE,{boxSize:"50px",color:"green.500"});case"info":return(0,i.jsx)(a.sz,{boxSize:"50px",color:"blue.500"});case"warning":return(0,i.jsx)(a.ii,{boxSize:"50px",color:"orange.300"});case"error":return(0,i.jsx)(a.Tw,{boxSize:"20px",color:"white"})}})(),(0,i.jsx)(o.X6,{as:"h2",size:"xl",mt:6,mb:2,children:n}),r&&(0,i.jsx)(o.xv,{my:10,color:"gray.500",children:r}),s]})};t.Z=c},4421:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(5893),s=n(8641),i=n(8395),a=n(979),o=n(7741),c=n(7294),l=n(9842),u=n(2821),h=n(1664),x=n.n(h),d=n(3038);let f=e=>{let{type:t="info",children:n}=e,s=(0,i.ff)("navy.700","white");return(0,r.jsxs)(d.bZ,{color:s,status:t,borderRadius:"md",fontSize:"sm",fontWeight:"500",children:[(0,r.jsx)(d.zM,{}),n]})};var p=n(0),j=n(2962);let g=()=>{let[e,t]=(0,c.useState)(""),[n,h]=(0,c.useState)(""),[d,g]=(0,c.useState)(""),[w,m]=(0,c.useState)(""),[b,y]=(0,c.useState)(""),[S,v]=(0,c.useState)(!1),[z,_]=(0,c.useState)(0),C=(0,i.ff)("brand.500","white"),N=(0,i.ff)("navy.700","white"),O=async()=>{let t=await fetch("http://10.7.1.102:8000/api/user/forgotpwd",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e})}),n=await t.json();200===n.status?_(1):y(n.msg)},T=t=>{if(t.preventDefault(),0===e.length){y("请输入有效的邮箱地址");return}let n=async()=>{v(!0),await O(),v(!1)};n()},k=async()=>{let t=await fetch("http://10.7.1.102:8000/api/user/forgotpwd",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:n,code:w})}),r=await t.json();200!==r.status?y(r.msg):(y(""),_(2))},E=t=>{if(t.preventDefault(),0===e.length||n.length<6){y("请输入有效的邮箱和密码");return}if(6!=w.length){y("请输入有效的验证码");return}if(n!==d){y("两次密码不一致");return}let r=async()=>{v(!0),await k(),v(!1)};r()};return 2===z?(0,r.jsxs)(p.Z,{type:"success",title:"重置密码成功",children:[(0,r.jsx)(s.xv,{my:5,mt:10,children:"重置密码成功，请转到登陆页"}),(0,r.jsxs)(s.rU,{href:"/uc/login",color:C,children:["转到登陆页面"," "]})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j.PB,{title:"忘记密码",description:"Outline VPN 会员中心，忘记密码"}),(0,r.jsx)(s.xu,{children:(0,r.jsx)(s.kC,{justifyContent:"center",alignItems:"center",children:(0,r.jsxs)(s.Kq,{w:"350px",gap:3,children:[(0,r.jsx)(s.M5,{mb:3,children:(0,r.jsx)(s.X6,{as:"h1",size:"xl",color:N,mb:"10px",children:"忘记密码"})}),(()=>{if(b)return(0,r.jsx)(f,{type:"error",children:b});if(S)return(0,r.jsx)(f,{type:"loading",children:"正在提交，请稍等 ..."});switch(z){case 0:return(0,r.jsx)(f,{type:"info",children:"请填写您的注册邮箱地址，通过邮件找回密码"});case 1:return(0,r.jsxs)(f,{type:"success",children:["提交成功，请打开邮箱 ",e," 查看验证码"]})}})(),(0,r.jsxs)("form",{onSubmit:E,children:[(0,r.jsx)(l.Z,{onChange:e=>t(e.target.value)}),(0,r.jsxs)(s.Kq,{direction:"row",mb:5,children:[(0,r.jsx)(a.II,{isRequired:!0,fontSize:"sm",placeholder:"输入验证码",onChange:e=>m(e.target.value)}),(0,r.jsx)(o.zx,{size:"md",fontSize:"sm",fontWeight:"500",w:"150px",colorScheme:"teal",mb:"24px",isLoading:S,onClick:T,children:"获取验证码"})]}),(0,r.jsx)(u.Z,{lable:"新密码",onChange:e=>h(e.target.value),placeholder:"最少6个字符"}),(0,r.jsx)(u.Z,{onChange:e=>g(e.target.value),lable:"重复密码",placeholder:"最少6个字符"}),(0,r.jsx)(s.xu,{px:5,mb:5,children:(0,r.jsx)(x(),{href:"/uc/login",legacyBehavior:!0,children:(0,r.jsx)("a",{children:(0,r.jsx)(s.xv,{color:C,fontSize:"sm",w:"124px",fontWeight:"500",children:"返回登陆"})})})}),(0,r.jsx)(o.zx,{type:"submit",fontSize:"sm",variant:"brand",fontWeight:"500",w:"full",h:"50",mb:"24px",isLoading:S,children:"确定"})]})]})})})]})};var w=g}},function(e){e.O(0,[937,234,774,888,179],function(){return e(e.s=8532)}),_N_E=e.O()}]);