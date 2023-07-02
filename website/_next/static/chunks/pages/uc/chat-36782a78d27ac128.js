(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[662],{8981:function(e,t,n){"use strict";n.d(t,{Ol:function(){return c},Zb:function(){return d},eW:function(){return u}});var r=n(7294),a=n(9632),l=n(4520),i=(...e)=>e.filter(Boolean).join(" "),[o,s]=(0,a.eC)("Card"),d=(0,a.Gp)(function(e,t){let{className:n,children:s,direction:d="column",justify:u,align:c,...m}=(0,l.Lr)(e),p=(0,a.jC)("Card",e);return r.createElement(a.m$.div,{ref:t,className:i("chakra-card",n),__css:{display:"flex",flexDirection:d,justifyContent:u,alignItems:c,position:"relative",minWidth:0,wordWrap:"break-word",...p.container},...m},r.createElement(o,{value:p},s))}),u=(0,a.Gp)(function(e,t){let{className:n,...l}=e,o=s();return r.createElement(a.m$.div,{ref:t,className:i("chakra-card__body",n),__css:o.body,...l})});(0,a.Gp)(function(e,t){let{className:n,justify:l,...o}=e,d=s();return r.createElement(a.m$.div,{ref:t,className:i("chakra-card__footer",n),__css:{display:"flex",justifyContent:l,...d.footer},...o})});var c=(0,a.Gp)(function(e,t){let{className:n,...l}=e,o=s();return r.createElement(a.m$.div,{ref:t,className:i("chakra-card__header",n),__css:o.header,...l})})},3234:function(e,t,n){"use strict";n.d(t,{NI:function(){return _},Yp:function(){return y},lX:function(){return x}});var r=n(7294),a=n(8387),l=n(6734),i=n(9632),o=n(4520),s=n(2494),d=(...e)=>e.filter(Boolean).join(" "),u=e=>e?"":void 0,c=e=>!!e||void 0;function m(...e){return function(t){e.some(e=>(null==e||e(t),null==t?void 0:t.defaultPrevented))}}var[p,f]=(0,a.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[h,v]=(0,a.k)({strict:!1,name:"FormControlContext"}),_=(0,i.Gp)(function(e,t){let n=(0,i.jC)("Form",e),a=(0,o.Lr)(e),{getRootProps:s,htmlProps:c,...m}=function(e){let{id:t,isRequired:n,isInvalid:a,isDisabled:i,isReadOnly:o,...s}=e,d=(0,r.useId)(),c=t||`field-${d}`,m=`${c}-label`,p=`${c}-feedback`,f=`${c}-helptext`,[h,v]=(0,r.useState)(!1),[_,y]=(0,r.useState)(!1),[E,g]=(0,r.useState)(!1),x=(0,r.useCallback)((e={},t=null)=>({id:f,...e,ref:(0,l.lq)(t,e=>{e&&y(!0)})}),[f]),I=(0,r.useCallback)((e={},t=null)=>({...e,ref:t,"data-focus":u(E),"data-disabled":u(i),"data-invalid":u(a),"data-readonly":u(o),id:e.id??m,htmlFor:e.htmlFor??c}),[c,i,E,a,o,m]),b=(0,r.useCallback)((e={},t=null)=>({id:p,...e,ref:(0,l.lq)(t,e=>{e&&v(!0)}),"aria-live":"polite"}),[p]),k=(0,r.useCallback)((e={},t=null)=>({...e,...s,ref:t,role:"group"}),[s]),N=(0,r.useCallback)((e={},t=null)=>({...e,ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[]);return{isRequired:!!n,isInvalid:!!a,isReadOnly:!!o,isDisabled:!!i,isFocused:!!E,onFocus:()=>g(!0),onBlur:()=>g(!1),hasFeedbackText:h,setHasFeedbackText:v,hasHelpText:_,setHasHelpText:y,id:c,labelId:m,feedbackId:p,helpTextId:f,htmlProps:s,getHelpTextProps:x,getErrorMessageProps:b,getRootProps:k,getLabelProps:I,getRequiredIndicatorProps:N}}(a),f=d("chakra-form-control",e.className);return r.createElement(h,{value:m},r.createElement(p,{value:n},r.createElement(i.m$.div,{...s({},t),className:f,__css:n.container})))});function y(e){let{isDisabled:t,isInvalid:n,isReadOnly:r,isRequired:a,...l}=function(e){let t=v(),{id:n,disabled:r,readOnly:a,required:l,isRequired:i,isInvalid:o,isReadOnly:s,isDisabled:d,onFocus:u,onBlur:c,...p}=e,f=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==t?void 0:t.hasFeedbackText)&&(null==t?void 0:t.isInvalid)&&f.push(t.feedbackId),(null==t?void 0:t.hasHelpText)&&f.push(t.helpTextId),{...p,"aria-describedby":f.join(" ")||void 0,id:n??(null==t?void 0:t.id),isDisabled:r??d??(null==t?void 0:t.isDisabled),isReadOnly:a??s??(null==t?void 0:t.isReadOnly),isRequired:l??i??(null==t?void 0:t.isRequired),isInvalid:o??(null==t?void 0:t.isInvalid),onFocus:m(null==t?void 0:t.onFocus,u),onBlur:m(null==t?void 0:t.onBlur,c)}}(e);return{...l,disabled:t,readOnly:r,required:a,"aria-invalid":c(n),"aria-required":c(a),"aria-readonly":c(r)}}_.displayName="FormControl",(0,i.Gp)(function(e,t){let n=v(),a=f(),l=d("chakra-form__helper-text",e.className);return r.createElement(i.m$.div,{...null==n?void 0:n.getHelpTextProps(e,t),__css:a.helperText,className:l})}).displayName="FormHelperText";var[E,g]=(0,a.k)({name:"FormErrorStylesContext",errorMessage:"useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "});(0,i.Gp)((e,t)=>{let n=(0,i.jC)("FormError",e),a=(0,o.Lr)(e),l=v();return(null==l?void 0:l.isInvalid)?r.createElement(E,{value:n},r.createElement(i.m$.div,{...null==l?void 0:l.getErrorMessageProps(a,t),className:d("chakra-form__error-message",e.className),__css:{display:"flex",alignItems:"center",...n.text}})):null}).displayName="FormErrorMessage",(0,i.Gp)((e,t)=>{let n=g(),a=v();if(!(null==a?void 0:a.isInvalid))return null;let l=d("chakra-form__error-icon",e.className);return r.createElement(s.JO,{ref:t,"aria-hidden":!0,...e,__css:n.icon,className:l},r.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))}).displayName="FormErrorIcon";var x=(0,i.Gp)(function(e,t){let n=(0,i.mq)("FormLabel",e),a=(0,o.Lr)(e),{className:l,children:s,requiredIndicator:u=r.createElement(I,null),optionalIndicator:c=null,...m}=a,p=v(),f=(null==p?void 0:p.getLabelProps(m,t))??{ref:t,...m};return r.createElement(i.m$.label,{...f,className:d("chakra-form__label",a.className),__css:{display:"block",textAlign:"start",...n}},s,(null==p?void 0:p.isRequired)?u:c)});x.displayName="FormLabel";var I=(0,i.Gp)(function(e,t){let n=v(),a=f();if(!(null==n?void 0:n.isRequired))return null;let l=d("chakra-form__required-indicator",e.className);return r.createElement(i.m$.span,{...null==n?void 0:n.getRequiredIndicatorProps(e,t),__css:a.requiredIndicator,className:l})});I.displayName="RequiredIndicator"},979:function(e,t,n){"use strict";n.d(t,{BZ:function(){return f},II:function(){return c},xH:function(){return b}});var r=n(7294),a=n(3234),l=n(9632),i=n(4520),o=n(5336),s=n(8387),d=n(4031),u=n(6076),c=(0,l.Gp)(function(e,t){let{htmlSize:n,...s}=e,d=(0,l.jC)("Input",s),u=(0,i.Lr)(s),c=(0,a.Yp)(u),m=(0,o.cx)("chakra-input",e.className);return r.createElement(l.m$.input,{size:n,...c,__css:d.field,ref:t,className:m})});c.displayName="Input",c.id="Input";var[m,p]=(0,s.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),f=(0,l.Gp)(function(e,t){let n=(0,l.jC)("Input",e),{children:a,className:s,...c}=(0,i.Lr)(e),p=(0,o.cx)("chakra-input__group",s),f={},h=(0,d.W)(a),v=n.field;h.forEach(e=>{n&&(v&&"InputLeftElement"===e.type.id&&(f.paddingStart=v.height??v.h),v&&"InputRightElement"===e.type.id&&(f.paddingEnd=v.height??v.h),"InputRightAddon"===e.type.id&&(f.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(f.borderStartRadius=0))});let _=h.map(t=>{var n,a;let l=(0,u.oA)({size:(null==(n=t.props)?void 0:n.size)||e.size,variant:(null==(a=t.props)?void 0:a.variant)||e.variant});return"Input"!==t.type.id?(0,r.cloneElement)(t,l):(0,r.cloneElement)(t,Object.assign(l,f,t.props))});return r.createElement(l.m$.div,{className:p,ref:t,__css:{width:"100%",display:"flex",position:"relative"},...c},r.createElement(m,{value:n},_))});f.displayName="InputGroup";var h={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},v=(0,l.m$)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),_=(0,l.Gp)(function(e,t){let{placement:n="left",...a}=e,l=h[n]??{},i=p();return r.createElement(v,{ref:t,...a,__css:{...i.addon,...l}})});_.displayName="InputAddon";var y=(0,l.Gp)(function(e,t){return r.createElement(_,{ref:t,placement:"left",...e,className:(0,o.cx)("chakra-input__left-addon",e.className)})});y.displayName="InputLeftAddon",y.id="InputLeftAddon";var E=(0,l.Gp)(function(e,t){return r.createElement(_,{ref:t,placement:"right",...e,className:(0,o.cx)("chakra-input__right-addon",e.className)})});E.displayName="InputRightAddon",E.id="InputRightAddon";var g=(0,l.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),x=(0,l.Gp)(function(e,t){let{placement:n="left",...a}=e,l=p(),i=l.field,o={["left"===n?"insetStart":"insetEnd"]:"0",width:(null==i?void 0:i.height)??(null==i?void 0:i.h),height:(null==i?void 0:i.height)??(null==i?void 0:i.h),fontSize:null==i?void 0:i.fontSize,...l.element};return r.createElement(g,{ref:t,__css:o,...a})});x.id="InputElement",x.displayName="InputElement";var I=(0,l.Gp)(function(e,t){let{className:n,...a}=e,l=(0,o.cx)("chakra-input__left-element",n);return r.createElement(x,{ref:t,placement:"left",className:l,...a})});I.id="InputLeftElement",I.displayName="InputLeftElement";var b=(0,l.Gp)(function(e,t){let{className:n,...a}=e,l=(0,o.cx)("chakra-input__right-element",n);return r.createElement(x,{ref:t,placement:"right",className:l,...a})});b.id="InputRightElement",b.displayName="InputRightElement"},1395:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/uc/chat",function(){return n(5484)}])},5484:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=n(7294),l=n(8641),i=n(2494),o=n(8981),s=n(979),d=n(7741),u=n(5434),c=n(9583),m=n(2829),p=n(2962);let f=e=>{let{direction:t,type:n,content:a,timestamp:s,order:d}=e;return(0,r.jsxs)(l.kC,{order:d,direction:"ask"===t?"row-reverse":"row",columnGap:3,children:["answer"===t&&(0,r.jsx)(i.JO,{h:8,w:8,as:u.Vyx}),(0,r.jsx)(o.Zb,{p:3,mr:2,mb:2,maxW:"80%",children:(0,r.jsx)(l.xv,{children:a})})]})},h=()=>{let[e,t]=(0,a.useState)(null),[n,o]=(0,a.useState)(""),[u,h]=(0,a.useState)(!1),[v,_]=(0,a.useState)(""),[y,E]=(0,a.useState)(0),[g,x]=a.useState(0),I=a.useContext(m.V),b=a.useRef(null),k=async()=>{let e=I.getDeviceCode(),n=await fetch("http://10.7.1.102:8000/api/chat/list?device_code="+e,{headers:{Authorization:"Bearer ".concat(I.token)}}),r=await n.json();200!==r.status?_(r.msg):(t(r.data.msgs),r.data.device_code&&I.getDeviceCode()!=r.data.device_code&&I.setDeviceCode(r.data.device_code),x(r.data.timestamp))},N=async()=>{if(n.length<1)return;let e=I.getDeviceCode(),r=await fetch("http://10.7.1.102:8000/api/chat/ask",{method:"POST",headers:{Authorization:"Bearer ".concat(I.token),Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({type:"text",content:n,device_code:e})}),a=await r.json();if(200!==a.status)_(a.msg);else{let l={direction:"ask",type:"text",content:n,timestamp:a.data.timestamp};t(e=>e?[...e,l]:[l]),o(""),x(a.data.timestamp)}},C=()=>{let e=async()=>{h(!0),await N(),h(!1)};e()};return(0,a.useEffect)(()=>{if(I.token){let e=async()=>{h(!0),await k(),h(!1)};e()}},[I.token]),(0,a.useEffect)(()=>{let e=setInterval(async()=>{I.token&&g&&await k(),E(y+1)},5e3);return()=>clearInterval(e)},[y]),(0,a.useEffect)(()=>{b.current&&(b.current.scrollTop=b.current.scrollHeight-b.current.clientHeight)},[e]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p.PB,{title:"在线客服",description:"Outline VPN 会员中心，在线客服"}),(0,r.jsxs)(l.xu,{children:[(0,r.jsx)(l.kC,{ref:b,direction:"column-reverse",rowGap:2,h:"55vh",overflowY:"auto",children:e&&e.map((e,t)=>(0,r.jsx)(f,{order:-t,...e},e.timestamp))}),(0,r.jsx)(l.iz,{my:5}),(0,r.jsxs)(s.BZ,{px:5,mb:5,children:[(0,r.jsx)(s.II,{variant:"unstyled",placeholder:"请输入",onChange:e=>o(e.target.value),value:n}),(0,r.jsx)(s.xH,{children:(0,r.jsx)(d.hU,{variant:"unstyled","aria-label":"发送",icon:(0,r.jsx)(i.JO,{color:"telegram.500",h:6,w:6,as:c.AGi}),onClick:C,isLoading:u})})]})]})]})};h.Layout="uc",h.requireAuthed=!0,t.default=h}},function(e){e.O(0,[774,888,179],function(){return e(e.s=1395)}),_N_E=e.O()}]);