(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[986],{3481:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/uc/register",function(){return n(905)}])},905:function(e,t,n){"use strict";n.r(t);var s=n(5893),a=n(8641),i=n(8395),r=n(3038),l=n(979),o=n(7741),c=n(7294),u=n(1163),h=n(9842),d=n(2821),p=n(1664),x=n.n(p),f=n(2962),j=n(2829);let g=()=>{let[e,t]=(0,c.useState)(""),[n,p]=(0,c.useState)(""),[g,m]=(0,c.useState)(""),[w,b]=(0,c.useState)(""),[S,y]=(0,c.useState)(""),[v,C]=(0,c.useState)(""),[_,z]=(0,c.useState)(!1),N=(0,i.ff)("navy.700","white"),O=(0,i.ff)("brand.500","white"),k=(0,u.useRouter)(),P=(0,c.useContext)(j.V),T=async()=>{let t=P.getChannelCode(),s=await fetch("http://10.7.1.102:8000/api/user/create",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:n,code:w,channel_code:t})}),a=await s.json();200===a.status?k.push("./reg-result?email=".concat(e)):y(a.msg)},E=async()=>{let t=await fetch("http://10.7.1.102:8000/api/user/sendvcode",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e})}),n=await t.json();200===n.status?C("已发送邮箱验证码至 "+e):y(n.msg)},Z=t=>{if(t.preventDefault(),0===e.length){y("请输入有效的邮箱和密码");return}let n=async()=>{z(!0),await E(),z(!1)};n()},R=t=>{if(t.preventDefault(),0===e.length||n.length<6){y("请输入有效的邮箱和密码");return}if(6!=w.length){y("请输入有效的验证码");return}if(n!==g){y("两次密码不一致");return}let s=async()=>{z(!0),await T(),z(!1)};s()};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(f.PB,{title:"会员注册",description:"Outline VPN 会员注册"}),(0,s.jsx)(a.xu,{my:10,children:(0,s.jsx)(a.kC,{justifyContent:"center",alignItems:"center",children:(0,s.jsxs)(a.Kq,{w:"350px",gap:3,children:[(0,s.jsx)(a.M5,{mb:3,children:(0,s.jsx)(a.X6,{as:"h1",size:"xl",color:N,children:"会员注册"})}),S&&(0,s.jsxs)(r.bZ,{status:"error",variant:"subtle",borderRadius:"md",mt:3,children:[(0,s.jsx)(r.zM,{}),S]}),v&&(0,s.jsxs)(r.bZ,{status:"info",variant:"subtle",borderRadius:"md",mt:3,children:[(0,s.jsx)(r.zM,{}),v]}),(0,s.jsxs)("form",{onSubmit:R,children:[(0,s.jsx)(h.Z,{onChange:e=>t(e.target.value)}),(0,s.jsx)(d.Z,{onChange:e=>p(e.target.value),placeholder:"最少6个字符"}),(0,s.jsx)(d.Z,{onChange:e=>m(e.target.value),lable:"重复密码",placeholder:"最少6个字符"}),(0,s.jsxs)(a.Kq,{direction:"row",children:[(0,s.jsx)(l.II,{isRequired:!0,fontSize:"sm",placeholder:"输入验证码",onChange:e=>b(e.target.value)}),(0,s.jsx)(o.zx,{size:"md",fontSize:"sm",fontWeight:"500",w:"150px",colorScheme:"teal",mb:"24px",isLoading:_,onClick:Z,children:"获取验证码"})]}),(0,s.jsx)(a.xu,{px:5,my:5,children:(0,s.jsx)(x(),{href:"./login",legacyBehavior:!0,children:(0,s.jsx)("a",{children:(0,s.jsx)(a.xv,{color:O,fontSize:"sm",w:"124px",fontWeight:"500",children:"已有账户登陆"})})})}),(0,s.jsx)(o.zx,{type:"submit",fontSize:"sm",variant:"brand",fontWeight:"500",w:"full",h:"50",mb:"24px",isLoading:_,children:"注册"})]})]})})})]})};t.default=g}},function(e){e.O(0,[937,234,774,888,179],function(){return e(e.s=3481)}),_N_E=e.O()}]);