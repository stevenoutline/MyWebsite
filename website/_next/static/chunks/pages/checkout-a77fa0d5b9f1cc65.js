(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[222],{1937:function(e,t,n){"use strict";n.d(t,{Hk:function(){return C},KF:function(){return N},Qd:function(){return w},UQ:function(){return A},XE:function(){return I}});var r=n(7294),a=n(9632),l=n(9430),i=n(8387),o=n(2494),s=n(8053),d=n(6734),c=n(1197),u=n(4520),m=(...e)=>e.filter(Boolean).join(" "),p=e=>{let{condition:t,message:n}=e};function h(...e){return function(t){e.some(e=>(null==e||e(t),null==t?void 0:t.defaultPrevented))}}var[f,v]=(0,i.k)({name:"AccordionStylesContext",hookName:"useAccordionStyles",providerName:"<Accordion />"}),[x,b]=(0,i.k)({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItem />"}),[y,_,g,E]=(0,l.n)(),N=(0,a.Gp)(function(e,t){let{getButtonProps:n}=b(),l=n(e,t),i=v(),o={display:"flex",alignItems:"center",width:"100%",outline:0,...i.button};return r.createElement(a.m$.button,{...l,className:m("chakra-accordion__button",e.className),__css:o})});N.displayName="AccordionButton";var[j,k]=(0,i.k)({name:"AccordionContext",hookName:"useAccordionContext",providerName:"Accordion"});function I(e){let{isOpen:t,isDisabled:n}=b(),{reduceMotion:a}=k(),l=m("chakra-accordion__icon",e.className),i=v(),s={opacity:n?.4:1,transform:t?"rotate(-180deg)":void 0,transition:a?void 0:"transform 0.2s",transformOrigin:"center",...i.icon};return r.createElement(o.JO,{viewBox:"0 0 24 24","aria-hidden":!0,className:l,__css:s,...e},r.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}))}I.displayName="AccordionIcon";var w=(0,a.Gp)(function(e,t){let{children:n,className:l}=e,{htmlProps:i,...o}=function(e){var t;let{isDisabled:n,isFocusable:a,id:l,...i}=e,{getAccordionItemProps:o,setFocusedIndex:s}=k(),c=(0,r.useRef)(null),u=(0,r.useId)(),m=l??u,f=`accordion-button-${m}`,v=`accordion-panel-${m}`;p({condition:!!(e.isFocusable&&!e.isDisabled),message:`Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `});let{register:x,index:b,descendants:y}=E({disabled:n&&!a}),{isOpen:_,onChange:g}=o(-1===b?null:b);p({condition:(t={isOpen:_,isDisabled:n}).isOpen&&!!t.isDisabled,message:"Cannot open a disabled accordion item"});let N=()=>{null==g||g(!0)},j=()=>{null==g||g(!1)},I=(0,r.useCallback)(()=>{null==g||g(!_),s(b)},[b,s,_,g]),w=(0,r.useCallback)(e=>{let t={ArrowDown:()=>{let e=y.nextEnabled(b);null==e||e.node.focus()},ArrowUp:()=>{let e=y.prevEnabled(b);null==e||e.node.focus()},Home:()=>{let e=y.firstEnabled();null==e||e.node.focus()},End:()=>{let e=y.lastEnabled();null==e||e.node.focus()}}[e.key];t&&(e.preventDefault(),t(e))},[y,b]),C=(0,r.useCallback)(()=>{s(b)},[s,b]),A=(0,r.useCallback)(function(e={},t=null){return{...e,type:"button",ref:(0,d.lq)(x,c,t),id:f,disabled:!!n,"aria-expanded":!!_,"aria-controls":v,onClick:h(e.onClick,I),onFocus:h(e.onFocus,C),onKeyDown:h(e.onKeyDown,w)}},[f,n,_,I,C,w,v,x]),S=(0,r.useCallback)(function(e={},t=null){return{...e,ref:t,role:"region",id:v,"aria-labelledby":f,hidden:!_}},[f,_,v]);return{isOpen:_,isDisabled:n,isFocusable:a,onOpen:N,onClose:j,getButtonProps:A,getPanelProps:S,htmlProps:i}}(e),s=v(),c={...s.container,overflowAnchor:"none"},u=(0,r.useMemo)(()=>o,[o]);return r.createElement(x,{value:u},r.createElement(a.m$.div,{ref:t,...i,className:m("chakra-accordion__item",l),__css:c},"function"==typeof n?n({isExpanded:!!o.isOpen,isDisabled:!!o.isDisabled}):n))});w.displayName="AccordionItem";var C=(0,a.Gp)(function(e,t){let{className:n,motionProps:l,...i}=e,{reduceMotion:o}=k(),{getPanelProps:s,isOpen:d}=b(),u=s(i,t),p=m("chakra-accordion__panel",n),h=v();o||delete u.hidden;let f=r.createElement(a.m$.div,{...u,__css:h.panel,className:p});return o?f:r.createElement(c.UO,{in:d,...l},f)});C.displayName="AccordionPanel";var A=(0,a.Gp)(function({children:e,reduceMotion:t,...n},l){let i=(0,a.jC)("Accordion",n),o=(0,u.Lr)(n),{htmlProps:d,descendants:c,...h}=function(e){let{onChange:t,defaultIndex:n,index:a,allowMultiple:l,allowToggle:i,...o}=e;(function(e){let t=e.index||e.defaultIndex,n=null!=t&&!Array.isArray(t)&&e.allowMultiple;p({condition:!!n,message:`If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof t},`})})(e),p({condition:!!(e.allowMultiple&&e.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"});let d=g(),[c,u]=(0,r.useState)(-1);(0,r.useEffect)(()=>()=>{u(-1)},[]);let[m,h]=(0,s.T)({value:a,defaultValue:()=>l?n??[]:n??-1,onChange:t}),f=e=>{let t=!1;null!==e&&(t=Array.isArray(m)?m.includes(e):m===e);let n=t=>{if(null!==e){if(l&&Array.isArray(m)){let n=t?m.concat(e):m.filter(t=>t!==e);h(n)}else t?h(e):i&&h(-1)}};return{isOpen:t,onChange:n}};return{index:m,setIndex:h,htmlProps:o,getAccordionItemProps:f,focusedIndex:c,setFocusedIndex:u,descendants:d}}(o),v=(0,r.useMemo)(()=>({...h,reduceMotion:!!t}),[h,t]);return r.createElement(y,{value:c},r.createElement(j,{value:v},r.createElement(f,{value:i},r.createElement(a.m$.div,{ref:l,...d,className:m("chakra-accordion",n.className),__css:i.root},e))))});A.displayName="Accordion"},3234:function(e,t,n){"use strict";n.d(t,{NI:function(){return x},Yp:function(){return b},lX:function(){return g}});var r=n(7294),a=n(8387),l=n(6734),i=n(9632),o=n(4520),s=n(2494),d=(...e)=>e.filter(Boolean).join(" "),c=e=>e?"":void 0,u=e=>!!e||void 0;function m(...e){return function(t){e.some(e=>(null==e||e(t),null==t?void 0:t.defaultPrevented))}}var[p,h]=(0,a.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[f,v]=(0,a.k)({strict:!1,name:"FormControlContext"}),x=(0,i.Gp)(function(e,t){let n=(0,i.jC)("Form",e),a=(0,o.Lr)(e),{getRootProps:s,htmlProps:u,...m}=function(e){let{id:t,isRequired:n,isInvalid:a,isDisabled:i,isReadOnly:o,...s}=e,d=(0,r.useId)(),u=t||`field-${d}`,m=`${u}-label`,p=`${u}-feedback`,h=`${u}-helptext`,[f,v]=(0,r.useState)(!1),[x,b]=(0,r.useState)(!1),[y,_]=(0,r.useState)(!1),g=(0,r.useCallback)((e={},t=null)=>({id:h,...e,ref:(0,l.lq)(t,e=>{e&&b(!0)})}),[h]),E=(0,r.useCallback)((e={},t=null)=>({...e,ref:t,"data-focus":c(y),"data-disabled":c(i),"data-invalid":c(a),"data-readonly":c(o),id:e.id??m,htmlFor:e.htmlFor??u}),[u,i,y,a,o,m]),N=(0,r.useCallback)((e={},t=null)=>({id:p,...e,ref:(0,l.lq)(t,e=>{e&&v(!0)}),"aria-live":"polite"}),[p]),j=(0,r.useCallback)((e={},t=null)=>({...e,...s,ref:t,role:"group"}),[s]),k=(0,r.useCallback)((e={},t=null)=>({...e,ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[]);return{isRequired:!!n,isInvalid:!!a,isReadOnly:!!o,isDisabled:!!i,isFocused:!!y,onFocus:()=>_(!0),onBlur:()=>_(!1),hasFeedbackText:f,setHasFeedbackText:v,hasHelpText:x,setHasHelpText:b,id:u,labelId:m,feedbackId:p,helpTextId:h,htmlProps:s,getHelpTextProps:g,getErrorMessageProps:N,getRootProps:j,getLabelProps:E,getRequiredIndicatorProps:k}}(a),h=d("chakra-form-control",e.className);return r.createElement(f,{value:m},r.createElement(p,{value:n},r.createElement(i.m$.div,{...s({},t),className:h,__css:n.container})))});function b(e){let{isDisabled:t,isInvalid:n,isReadOnly:r,isRequired:a,...l}=function(e){let t=v(),{id:n,disabled:r,readOnly:a,required:l,isRequired:i,isInvalid:o,isReadOnly:s,isDisabled:d,onFocus:c,onBlur:u,...p}=e,h=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==t?void 0:t.hasFeedbackText)&&(null==t?void 0:t.isInvalid)&&h.push(t.feedbackId),(null==t?void 0:t.hasHelpText)&&h.push(t.helpTextId),{...p,"aria-describedby":h.join(" ")||void 0,id:n??(null==t?void 0:t.id),isDisabled:r??d??(null==t?void 0:t.isDisabled),isReadOnly:a??s??(null==t?void 0:t.isReadOnly),isRequired:l??i??(null==t?void 0:t.isRequired),isInvalid:o??(null==t?void 0:t.isInvalid),onFocus:m(null==t?void 0:t.onFocus,c),onBlur:m(null==t?void 0:t.onBlur,u)}}(e);return{...l,disabled:t,readOnly:r,required:a,"aria-invalid":u(n),"aria-required":u(a),"aria-readonly":u(r)}}x.displayName="FormControl",(0,i.Gp)(function(e,t){let n=v(),a=h(),l=d("chakra-form__helper-text",e.className);return r.createElement(i.m$.div,{...null==n?void 0:n.getHelpTextProps(e,t),__css:a.helperText,className:l})}).displayName="FormHelperText";var[y,_]=(0,a.k)({name:"FormErrorStylesContext",errorMessage:"useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "});(0,i.Gp)((e,t)=>{let n=(0,i.jC)("FormError",e),a=(0,o.Lr)(e),l=v();return(null==l?void 0:l.isInvalid)?r.createElement(y,{value:n},r.createElement(i.m$.div,{...null==l?void 0:l.getErrorMessageProps(a,t),className:d("chakra-form__error-message",e.className),__css:{display:"flex",alignItems:"center",...n.text}})):null}).displayName="FormErrorMessage",(0,i.Gp)((e,t)=>{let n=_(),a=v();if(!(null==a?void 0:a.isInvalid))return null;let l=d("chakra-form__error-icon",e.className);return r.createElement(s.JO,{ref:t,"aria-hidden":!0,...e,__css:n.icon,className:l},r.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))}).displayName="FormErrorIcon";var g=(0,i.Gp)(function(e,t){let n=(0,i.mq)("FormLabel",e),a=(0,o.Lr)(e),{className:l,children:s,requiredIndicator:c=r.createElement(E,null),optionalIndicator:u=null,...m}=a,p=v(),h=(null==p?void 0:p.getLabelProps(m,t))??{ref:t,...m};return r.createElement(i.m$.label,{...h,className:d("chakra-form__label",a.className),__css:{display:"block",textAlign:"start",...n}},s,(null==p?void 0:p.isRequired)?c:u)});g.displayName="FormLabel";var E=(0,i.Gp)(function(e,t){let n=v(),a=h();if(!(null==n?void 0:n.isRequired))return null;let l=d("chakra-form__required-indicator",e.className);return r.createElement(i.m$.span,{...null==n?void 0:n.getRequiredIndicatorProps(e,t),__css:a.requiredIndicator,className:l})});E.displayName="RequiredIndicator"},979:function(e,t,n){"use strict";n.d(t,{BZ:function(){return h},II:function(){return u},xH:function(){return N}});var r=n(7294),a=n(3234),l=n(9632),i=n(4520),o=n(5336),s=n(8387),d=n(4031),c=n(6076),u=(0,l.Gp)(function(e,t){let{htmlSize:n,...s}=e,d=(0,l.jC)("Input",s),c=(0,i.Lr)(s),u=(0,a.Yp)(c),m=(0,o.cx)("chakra-input",e.className);return r.createElement(l.m$.input,{size:n,...u,__css:d.field,ref:t,className:m})});u.displayName="Input",u.id="Input";var[m,p]=(0,s.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),h=(0,l.Gp)(function(e,t){let n=(0,l.jC)("Input",e),{children:a,className:s,...u}=(0,i.Lr)(e),p=(0,o.cx)("chakra-input__group",s),h={},f=(0,d.W)(a),v=n.field;f.forEach(e=>{n&&(v&&"InputLeftElement"===e.type.id&&(h.paddingStart=v.height??v.h),v&&"InputRightElement"===e.type.id&&(h.paddingEnd=v.height??v.h),"InputRightAddon"===e.type.id&&(h.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(h.borderStartRadius=0))});let x=f.map(t=>{var n,a;let l=(0,c.oA)({size:(null==(n=t.props)?void 0:n.size)||e.size,variant:(null==(a=t.props)?void 0:a.variant)||e.variant});return"Input"!==t.type.id?(0,r.cloneElement)(t,l):(0,r.cloneElement)(t,Object.assign(l,h,t.props))});return r.createElement(l.m$.div,{className:p,ref:t,__css:{width:"100%",display:"flex",position:"relative"},...u},r.createElement(m,{value:n},x))});h.displayName="InputGroup";var f={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},v=(0,l.m$)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),x=(0,l.Gp)(function(e,t){let{placement:n="left",...a}=e,l=f[n]??{},i=p();return r.createElement(v,{ref:t,...a,__css:{...i.addon,...l}})});x.displayName="InputAddon";var b=(0,l.Gp)(function(e,t){return r.createElement(x,{ref:t,placement:"left",...e,className:(0,o.cx)("chakra-input__left-addon",e.className)})});b.displayName="InputLeftAddon",b.id="InputLeftAddon";var y=(0,l.Gp)(function(e,t){return r.createElement(x,{ref:t,placement:"right",...e,className:(0,o.cx)("chakra-input__right-addon",e.className)})});y.displayName="InputRightAddon",y.id="InputRightAddon";var _=(0,l.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),g=(0,l.Gp)(function(e,t){let{placement:n="left",...a}=e,l=p(),i=l.field,o={["left"===n?"insetStart":"insetEnd"]:"0",width:(null==i?void 0:i.height)??(null==i?void 0:i.h),height:(null==i?void 0:i.height)??(null==i?void 0:i.h),fontSize:null==i?void 0:i.fontSize,...l.element};return r.createElement(_,{ref:t,__css:o,...a})});g.id="InputElement",g.displayName="InputElement";var E=(0,l.Gp)(function(e,t){let{className:n,...a}=e,l=(0,o.cx)("chakra-input__left-element",n);return r.createElement(g,{ref:t,placement:"left",className:l,...a})});E.id="InputLeftElement",E.displayName="InputLeftElement";var N=(0,l.Gp)(function(e,t){let{className:n,...a}=e,l=(0,o.cx)("chakra-input__right-element",n);return r.createElement(g,{ref:t,placement:"right",className:l,...a})});N.id="InputRightElement",N.displayName="InputRightElement"},7250:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/checkout",function(){return n(4437)}])},4437:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return G}});var r=n(5893),a=n(1163),l=n(7294),i=n(8641),o=n(1937),s=n(979),d=n(9632),c=n(4520),u=n(8387),m=(...e)=>e.filter(Boolean).join(" "),[p,h]=(0,u.k)({name:"TableStylesContext",errorMessage:"useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Table />\" "}),f=(0,d.Gp)((e,t)=>{let n=(0,d.jC)("Table",e),{className:r,layout:a,...i}=(0,c.Lr)(e);return l.createElement(p,{value:n},l.createElement(d.m$.table,{ref:t,__css:{tableLayout:a,...n.table},className:m("chakra-table",r),...i}))});f.displayName="Table";var v=(0,d.Gp)((e,t)=>{let{overflow:n,overflowX:r,className:a,...i}=e;return l.createElement(d.m$.div,{ref:t,className:m("chakra-table__container",a),...i,__css:{display:"block",whiteSpace:"nowrap",WebkitOverflowScrolling:"touch",overflowX:n??r??"auto",overflowY:"hidden",maxWidth:"100%"}})});(0,d.Gp)((e,t)=>{let{placement:n="bottom",...r}=e,a=h();return l.createElement(d.m$.caption,{...r,ref:t,__css:{...a.caption,captionSide:n}})}).displayName="TableCaption";var x=(0,d.Gp)((e,t)=>{let n=h();return l.createElement(d.m$.thead,{...e,ref:t,__css:n.thead})}),b=(0,d.Gp)((e,t)=>{let n=h();return l.createElement(d.m$.tbody,{...e,ref:t,__css:n.tbody})});(0,d.Gp)((e,t)=>{let n=h();return l.createElement(d.m$.tfoot,{...e,ref:t,__css:n.tfoot})});var y=(0,d.Gp)(({isNumeric:e,...t},n)=>{let r=h();return l.createElement(d.m$.th,{...t,ref:n,__css:r.th,"data-is-numeric":e})}),_=(0,d.Gp)((e,t)=>{let n=h();return l.createElement(d.m$.tr,{...e,ref:t,__css:n.tr})});(0,d.Gp)(({isNumeric:e,...t},n)=>{let r=h();return l.createElement(d.m$.td,{...t,ref:n,__css:r.td,"data-is-numeric":e})});var g=n(3887),E=n(3038),N=n(7741),j=n(2829),k=n(1691);let I=e=>{let{title:t,id:n}=e;return(0,r.jsx)(k.Z,{mt:{base:5,md:10},mb:{base:10,md:20},px:{base:10,md:200},children:(0,r.jsx)(i.X6,{as:"h1",id:n,fontSize:"2xl",children:t})})};var w=n(2962),C=n(3382);let A=e=>{let{setCode:t}=e,[n,a]=l.useState(""),d=async e=>{let t=await fetch("http://10.7.1.102:8000/api/order/reccode?code="+e),n=await t.json();200===n.status?a("ok"):a("error")},c=e=>{t(e),4==e.length?d(e):a("")};return(0,r.jsxs)(i.xu,{children:[(0,r.jsx)(i.xu,{w:"full",h:"3px",bg:"blue.500",mt:5}),(0,r.jsx)(o.UQ,{allowToggle:!0,children:(0,r.jsxs)(o.Qd,{children:[(0,r.jsx)(o.KF,{bg:"gray.100",children:(0,r.jsxs)(i.xu,{textAlign:"left",children:[(0,r.jsx)(i.xv,{as:"span",children:"有推荐码？"}),(0,r.jsx)(i.xv,{as:"span",color:"navHove",children:"点这里输入您的推荐码"})]})}),(0,r.jsx)(o.Hk,{children:(0,r.jsx)(i.Kq,{direction:"row",spacing:5,children:(0,r.jsxs)(s.BZ,{children:[(0,r.jsx)(s.II,{placeholder:"这里填入推荐码",onChange:e=>c(e.target.value)}),(0,r.jsx)(s.xH,{children:"ok"==n?(0,r.jsx)(C.nQ,{color:"green.500"}):"error"==n?(0,r.jsx)(C.Tw,{color:"red.500"}):(0,r.jsx)(r.Fragment,{})})]})})})]})})]})},S=()=>{let[e,t]=(0,l.useState)(null),[n,o]=(0,l.useState)(""),[s,d]=(0,l.useState)(!1),[c,u]=(0,l.useState)(""),m=(0,a.useRouter)(),{pid:p}=m.query,h=(0,l.useContext)(j.V),k=async()=>{let e=await fetch("http://10.7.1.102:8000/api/goods/search?id="+p),n=await e.json();200===n.status?t(n.data):o(n.msg)},C=async()=>{let e=await fetch("http://10.7.1.102:8000/api/order/create",{method:"POST",headers:{Authorization:"Bearer ".concat(h.token),Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({goodsId:p,email:h.name,rec_code:c})}),t=await e.json();200===t.status?m.push("/pay?oid="+t.data.oid):o(t.msg)};(0,l.useEffect)(()=>{p&&k()},[p]);let S=()=>{let e=async()=>{d(!0),await C(),d(!1)};e()};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w.PB,{title:"订单确认",description:"查看 Outline VPN 密钥订单信息，并确认订单"}),(0,r.jsx)(I,{title:"订单详情"}),(0,r.jsx)(i.M5,{children:(0,r.jsxs)(i.Kq,{gap:5,borderWidth:1,p:8,w:{base:"96%",md:"800px"},children:[(0,r.jsxs)(i.xv,{children:[(0,r.jsx)(i.xv,{fontWeight:600,as:"span",children:"您的账号："}),h.name]}),(0,r.jsx)(i.xv,{fontWeight:600,children:"订单产品："}),(0,r.jsx)(v,{children:(0,r.jsxs)(f,{size:"lg",children:[(0,r.jsx)(x,{children:(0,r.jsxs)(_,{children:[(0,r.jsx)(y,{children:"产品"}),(0,r.jsx)(y,{children:"小计"})]})}),(0,r.jsxs)(b,{children:[(0,r.jsxs)(_,{children:[(0,r.jsx)(y,{children:e&&e.title}),(0,r.jsxs)(y,{children:["\xa5",e&&e.price]})]}),(0,r.jsxs)(_,{children:[(0,r.jsx)(y,{children:"合计"}),(0,r.jsxs)(y,{children:["\xa5",e&&e.price]})]})]})]})}),(0,r.jsx)(i.xu,{children:(0,r.jsx)(g.Ee,{src:"/images/alipay.png",alt:"alipay"})}),(0,r.jsx)(A,{setCode:e=>u(e)}),n&&(0,r.jsxs)(E.bZ,{status:"error",variant:"subtle",borderRadius:"md",children:[(0,r.jsx)(E.zM,{}),n]}),(0,r.jsx)(N.zx,{onClick:S,w:"full",colorScheme:"teal",isLoading:s,children:"下单"})]})})]})};S.requireAuthed=!0;var G=S}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7250)}),_N_E=e.O()}]);