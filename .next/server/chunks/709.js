"use strict";exports.id=709,exports.ids=[709],exports.modules={24849:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(41680).A)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},98755:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(41680).A)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},28638:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(41680).A)("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]])},29374:(e,t,r)=>{r.d(t,{q:()=>n});function n(e,[t,r]){return Math.min(r,Math.max(t,e))}},93349:(e,t,r)=>{r.d(t,{N:()=>f});var n=r(58009),l=r(6004);function o(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function i(...e){return t=>{let r=!1,n=e.map(e=>{let n=o(e,t);return r||"function"!=typeof n||(r=!0),n});if(r)return()=>{for(let t=0;t<n.length;t++){let r=n[t];"function"==typeof r?r():o(e[t],null)}}}}function a(...e){return n.useCallback(i(...e),e)}var s=r(45512),u=n.forwardRef((e,t)=>{let{children:r,...l}=e,o=n.Children.toArray(r),i=o.find(p);if(i){let e=i.props.children,r=o.map(t=>t!==i?t:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,s.jsx)(c,{...l,ref:t,children:n.isValidElement(e)?n.cloneElement(e,void 0,r):null})}return(0,s.jsx)(c,{...l,ref:t,children:r})});u.displayName="Slot";var c=n.forwardRef((e,t)=>{let{children:r,...l}=e;if(n.isValidElement(r)){let e=function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(r);return n.cloneElement(r,{...function(e,t){let r={...t};for(let n in t){let l=e[n],o=t[n];/^on[A-Z]/.test(n)?l&&o?r[n]=(...e)=>{o(...e),l(...e)}:l&&(r[n]=l):"style"===n?r[n]={...l,...o}:"className"===n&&(r[n]=[l,o].filter(Boolean).join(" "))}return{...e,...r}}(l,r.props),ref:t?i(t,e):e})}return n.Children.count(r)>1?n.Children.only(null):null});c.displayName="SlotClone";var d=({children:e})=>(0,s.jsx)(s.Fragment,{children:e});function p(e){return n.isValidElement(e)&&e.type===d}function f(e){let t=e+"CollectionProvider",[r,o]=(0,l.A)(t),[i,c]=r(t,{collectionRef:{current:null},itemMap:new Map}),d=e=>{let{scope:t,children:r}=e,l=n.useRef(null),o=n.useRef(new Map).current;return(0,s.jsx)(i,{scope:t,itemMap:o,collectionRef:l,children:r})};d.displayName=t;let p=e+"CollectionSlot",f=n.forwardRef((e,t)=>{let{scope:r,children:n}=e,l=a(t,c(p,r).collectionRef);return(0,s.jsx)(u,{ref:l,children:n})});f.displayName=p;let h=e+"CollectionItemSlot",m="data-radix-collection-item",v=n.forwardRef((e,t)=>{let{scope:r,children:l,...o}=e,i=n.useRef(null),d=a(t,i),p=c(h,r);return n.useEffect(()=>(p.itemMap.set(i,{ref:i,...o}),()=>void p.itemMap.delete(i))),(0,s.jsx)(u,{[m]:"",ref:d,children:l})});return v.displayName=h,[{Provider:d,Slot:f,ItemSlot:v},function(t){let r=c(e+"CollectionConsumer",t);return n.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${m}]`));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},o]}},59018:(e,t,r)=>{r.d(t,{jH:()=>o});var n=r(58009);r(45512);var l=n.createContext(void 0);function o(e){let t=n.useContext(l);return e||t||"ltr"}},50472:(e,t,r)=>{r.d(t,{UC:()=>eH,YJ:()=>eW,In:()=>eV,q7:()=>eF,VF:()=>eU,p4:()=>eK,JU:()=>e_,ZL:()=>eB,bL:()=>eD,wn:()=>ez,PP:()=>eq,wv:()=>eZ,l9:()=>eA,WT:()=>eL,LM:()=>eO});var n=r(58009),l=r(55740),o=r(29374),i=r(31412),a=r(93349);function s(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function u(...e){return t=>{let r=!1,n=e.map(e=>{let n=s(e,t);return r||"function"!=typeof n||(r=!0),n});if(r)return()=>{for(let t=0;t<n.length;t++){let r=n[t];"function"==typeof r?r():s(e[t],null)}}}}function c(...e){return n.useCallback(u(...e),e)}var d=r(6004),p=r(59018),f=r(80410),h=r(19632),m=r(69305),v=r(30096),g=r(70399),w=r(60226),y=r(45512),x=n.forwardRef((e,t)=>{let{children:r,...l}=e,o=n.Children.toArray(r),i=o.find(b);if(i){let e=i.props.children,r=o.map(t=>t!==i?t:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,y.jsx)(C,{...l,ref:t,children:n.isValidElement(e)?n.cloneElement(e,void 0,r):null})}return(0,y.jsx)(C,{...l,ref:t,children:r})});x.displayName="Slot";var C=n.forwardRef((e,t)=>{let{children:r,...l}=e;if(n.isValidElement(r)){let e=function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(r);return n.cloneElement(r,{...function(e,t){let r={...t};for(let n in t){let l=e[n],o=t[n];/^on[A-Z]/.test(n)?l&&o?r[n]=(...e)=>{o(...e),l(...e)}:l&&(r[n]=l):"style"===n?r[n]={...l,...o}:"className"===n&&(r[n]=[l,o].filter(Boolean).join(" "))}return{...e,...r}}(l,r.props),ref:t?u(t,e):e})}return n.Children.count(r)>1?n.Children.only(null):null});C.displayName="SlotClone";var S=({children:e})=>(0,y.jsx)(y.Fragment,{children:e});function b(e){return n.isValidElement(e)&&e.type===S}var j=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=n.forwardRef((e,r)=>{let{asChild:n,...l}=e,o=n?x:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,y.jsx)(o,{...l,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),R=r(92828),N=r(13024),E=r(49397),k=r(39260),P=r(72421),T=r(8523),I=[" ","Enter","ArrowUp","ArrowDown"],M=[" ","Enter"],D="Select",[A,L,V]=(0,a.N)(D),[B,H]=(0,d.A)(D,[V,g.Bk]),O=(0,g.Bk)(),[W,_]=B(D),[F,K]=B(D),U=e=>{let{__scopeSelect:t,children:r,open:l,defaultOpen:o,onOpenChange:i,value:a,defaultValue:s,onValueChange:u,dir:c,name:d,autoComplete:f,disabled:h,required:m,form:w}=e,x=O(t),[C,S]=n.useState(null),[b,j]=n.useState(null),[R,E]=n.useState(!1),k=(0,p.jH)(c),[P=!1,T]=(0,N.i)({prop:l,defaultProp:o,onChange:i}),[I,M]=(0,N.i)({prop:a,defaultProp:s,onChange:u}),D=n.useRef(null),L=!C||w||!!C.closest("form"),[V,B]=n.useState(new Set),H=Array.from(V).map(e=>e.props.value).join(";");return(0,y.jsx)(g.bL,{...x,children:(0,y.jsxs)(W,{required:m,scope:t,trigger:C,onTriggerChange:S,valueNode:b,onValueNodeChange:j,valueNodeHasChildren:R,onValueNodeHasChildrenChange:E,contentId:(0,v.B)(),value:I,onValueChange:M,open:P,onOpenChange:T,dir:k,triggerPointerDownPosRef:D,disabled:h,children:[(0,y.jsx)(A.Provider,{scope:t,children:(0,y.jsx)(F,{scope:e.__scopeSelect,onNativeOptionAdd:n.useCallback(e=>{B(t=>new Set(t).add(e))},[]),onNativeOptionRemove:n.useCallback(e=>{B(t=>{let r=new Set(t);return r.delete(e),r})},[]),children:r})}),L?(0,y.jsxs)(eT,{"aria-hidden":!0,required:m,tabIndex:-1,name:d,autoComplete:f,value:I,onChange:e=>M(e.target.value),disabled:h,form:w,children:[void 0===I?(0,y.jsx)("option",{value:""}):null,Array.from(V)]},H):null]})})};U.displayName=D;var q="SelectTrigger",z=n.forwardRef((e,t)=>{let{__scopeSelect:r,disabled:l=!1,...o}=e,a=O(r),s=_(q,r),u=s.disabled||l,d=c(t,s.onTriggerChange),p=L(r),f=n.useRef("touch"),[h,m,v]=eI(e=>{let t=p().filter(e=>!e.disabled),r=t.find(e=>e.value===s.value),n=eM(t,e,r);void 0!==n&&s.onValueChange(n.value)}),w=e=>{u||(s.onOpenChange(!0),v()),e&&(s.triggerPointerDownPosRef.current={x:Math.round(e.pageX),y:Math.round(e.pageY)})};return(0,y.jsx)(g.Mz,{asChild:!0,...a,children:(0,y.jsx)(j.button,{type:"button",role:"combobox","aria-controls":s.contentId,"aria-expanded":s.open,"aria-required":s.required,"aria-autocomplete":"none",dir:s.dir,"data-state":s.open?"open":"closed",disabled:u,"data-disabled":u?"":void 0,"data-placeholder":eP(s.value)?"":void 0,...o,ref:d,onClick:(0,i.m)(o.onClick,e=>{e.currentTarget.focus(),"mouse"!==f.current&&w(e)}),onPointerDown:(0,i.m)(o.onPointerDown,e=>{f.current=e.pointerType;let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),0===e.button&&!1===e.ctrlKey&&"mouse"===e.pointerType&&(w(e),e.preventDefault())}),onKeyDown:(0,i.m)(o.onKeyDown,e=>{let t=""!==h.current;e.ctrlKey||e.altKey||e.metaKey||1!==e.key.length||m(e.key),(!t||" "!==e.key)&&I.includes(e.key)&&(w(),e.preventDefault())})})})});z.displayName=q;var Z="SelectValue",Y=n.forwardRef((e,t)=>{let{__scopeSelect:r,className:n,style:l,children:o,placeholder:i="",...a}=e,s=_(Z,r),{onValueNodeHasChildrenChange:u}=s,d=void 0!==o,p=c(t,s.onValueNodeChange);return(0,E.N)(()=>{u(d)},[u,d]),(0,y.jsx)(j.span,{...a,ref:p,style:{pointerEvents:"none"},children:eP(s.value)?(0,y.jsx)(y.Fragment,{children:i}):o})});Y.displayName=Z;var J=n.forwardRef((e,t)=>{let{__scopeSelect:r,children:n,...l}=e;return(0,y.jsx)(j.span,{"aria-hidden":!0,...l,ref:t,children:n||"▼"})});J.displayName="SelectIcon";var X=e=>(0,y.jsx)(w.Z,{asChild:!0,...e});X.displayName="SelectPortal";var $="SelectContent",G=n.forwardRef((e,t)=>{let r=_($,e.__scopeSelect),[o,i]=n.useState();return((0,E.N)(()=>{i(new DocumentFragment)},[]),r.open)?(0,y.jsx)(et,{...e,ref:t}):o?l.createPortal((0,y.jsx)(Q,{scope:e.__scopeSelect,children:(0,y.jsx)(A.Slot,{scope:e.__scopeSelect,children:(0,y.jsx)("div",{children:e.children})})}),o):null});G.displayName=$;var[Q,ee]=B($),et=n.forwardRef((e,t)=>{let{__scopeSelect:r,position:l="item-aligned",onCloseAutoFocus:o,onEscapeKeyDown:a,onPointerDownOutside:s,side:u,sideOffset:d,align:p,alignOffset:v,arrowPadding:g,collisionBoundary:w,collisionPadding:C,sticky:S,hideWhenDetached:b,avoidCollisions:j,...R}=e,N=_($,r),[E,k]=n.useState(null),[I,M]=n.useState(null),D=c(t,e=>k(e)),[A,V]=n.useState(null),[B,H]=n.useState(null),O=L(r),[W,F]=n.useState(!1),K=n.useRef(!1);n.useEffect(()=>{if(E)return(0,P.Eq)(E)},[E]),(0,h.Oh)();let U=n.useCallback(e=>{let[t,...r]=O().map(e=>e.ref.current),[n]=r.slice(-1),l=document.activeElement;for(let r of e)if(r===l||(r?.scrollIntoView({block:"nearest"}),r===t&&I&&(I.scrollTop=0),r===n&&I&&(I.scrollTop=I.scrollHeight),r?.focus(),document.activeElement!==l))return},[O,I]),q=n.useCallback(()=>U([A,E]),[U,A,E]);n.useEffect(()=>{W&&q()},[W,q]);let{onOpenChange:z,triggerPointerDownPosRef:Z}=N;n.useEffect(()=>{if(E){let e={x:0,y:0},t=t=>{e={x:Math.abs(Math.round(t.pageX)-(Z.current?.x??0)),y:Math.abs(Math.round(t.pageY)-(Z.current?.y??0))}},r=r=>{e.x<=10&&e.y<=10?r.preventDefault():E.contains(r.target)||z(!1),document.removeEventListener("pointermove",t),Z.current=null};return null!==Z.current&&(document.addEventListener("pointermove",t),document.addEventListener("pointerup",r,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",r,{capture:!0})}}},[E,z,Z]),n.useEffect(()=>{let e=()=>z(!1);return window.addEventListener("blur",e),window.addEventListener("resize",e),()=>{window.removeEventListener("blur",e),window.removeEventListener("resize",e)}},[z]);let[Y,J]=eI(e=>{let t=O().filter(e=>!e.disabled),r=t.find(e=>e.ref.current===document.activeElement),n=eM(t,e,r);n&&setTimeout(()=>n.ref.current.focus())}),X=n.useCallback((e,t,r)=>{let n=!K.current&&!r;(void 0!==N.value&&N.value===t||n)&&(V(e),n&&(K.current=!0))},[N.value]),G=n.useCallback(()=>E?.focus(),[E]),ee=n.useCallback((e,t,r)=>{let n=!K.current&&!r;(void 0!==N.value&&N.value===t||n)&&H(e)},[N.value]),et="popper"===l?en:er,el=et===en?{side:u,sideOffset:d,align:p,alignOffset:v,arrowPadding:g,collisionBoundary:w,collisionPadding:C,sticky:S,hideWhenDetached:b,avoidCollisions:j}:{};return(0,y.jsx)(Q,{scope:r,content:E,viewport:I,onViewportChange:M,itemRefCallback:X,selectedItem:A,onItemLeave:G,itemTextRefCallback:ee,focusSelectedItem:q,selectedItemText:B,position:l,isPositioned:W,searchRef:Y,children:(0,y.jsx)(T.A,{as:x,allowPinchZoom:!0,children:(0,y.jsx)(m.n,{asChild:!0,trapped:N.open,onMountAutoFocus:e=>{e.preventDefault()},onUnmountAutoFocus:(0,i.m)(o,e=>{N.trigger?.focus({preventScroll:!0}),e.preventDefault()}),children:(0,y.jsx)(f.qW,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:a,onPointerDownOutside:s,onFocusOutside:e=>e.preventDefault(),onDismiss:()=>N.onOpenChange(!1),children:(0,y.jsx)(et,{role:"listbox",id:N.contentId,"data-state":N.open?"open":"closed",dir:N.dir,onContextMenu:e=>e.preventDefault(),...R,...el,onPlaced:()=>F(!0),ref:D,style:{display:"flex",flexDirection:"column",outline:"none",...R.style},onKeyDown:(0,i.m)(R.onKeyDown,e=>{let t=e.ctrlKey||e.altKey||e.metaKey;if("Tab"===e.key&&e.preventDefault(),t||1!==e.key.length||J(e.key),["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=O().filter(e=>!e.disabled).map(e=>e.ref.current);if(["ArrowUp","End"].includes(e.key)&&(t=t.slice().reverse()),["ArrowUp","ArrowDown"].includes(e.key)){let r=e.target,n=t.indexOf(r);t=t.slice(n+1)}setTimeout(()=>U(t)),e.preventDefault()}})})})})})})});et.displayName="SelectContentImpl";var er=n.forwardRef((e,t)=>{let{__scopeSelect:r,onPlaced:l,...i}=e,a=_($,r),s=ee($,r),[u,d]=n.useState(null),[p,f]=n.useState(null),h=c(t,e=>f(e)),m=L(r),v=n.useRef(!1),g=n.useRef(!0),{viewport:w,selectedItem:x,selectedItemText:C,focusSelectedItem:S}=s,b=n.useCallback(()=>{if(a.trigger&&a.valueNode&&u&&p&&w&&x&&C){let e=a.trigger.getBoundingClientRect(),t=p.getBoundingClientRect(),r=a.valueNode.getBoundingClientRect(),n=C.getBoundingClientRect();if("rtl"!==a.dir){let l=n.left-t.left,i=r.left-l,a=e.left-i,s=e.width+a,c=Math.max(s,t.width),d=window.innerWidth-10,p=(0,o.q)(i,[10,Math.max(10,d-c)]);u.style.minWidth=s+"px",u.style.left=p+"px"}else{let l=t.right-n.right,i=window.innerWidth-r.right-l,a=window.innerWidth-e.right-i,s=e.width+a,c=Math.max(s,t.width),d=window.innerWidth-10,p=(0,o.q)(i,[10,Math.max(10,d-c)]);u.style.minWidth=s+"px",u.style.right=p+"px"}let i=m(),s=window.innerHeight-20,c=w.scrollHeight,d=window.getComputedStyle(p),f=parseInt(d.borderTopWidth,10),h=parseInt(d.paddingTop,10),g=parseInt(d.borderBottomWidth,10),y=f+h+c+parseInt(d.paddingBottom,10)+g,S=Math.min(5*x.offsetHeight,y),b=window.getComputedStyle(w),j=parseInt(b.paddingTop,10),R=parseInt(b.paddingBottom,10),N=e.top+e.height/2-10,E=x.offsetHeight/2,k=f+h+(x.offsetTop+E);if(k<=N){let e=i.length>0&&x===i[i.length-1].ref.current;u.style.bottom="0px";let t=Math.max(s-N,E+(e?R:0)+(p.clientHeight-w.offsetTop-w.offsetHeight)+g);u.style.height=k+t+"px"}else{let e=i.length>0&&x===i[0].ref.current;u.style.top="0px";let t=Math.max(N,f+w.offsetTop+(e?j:0)+E);u.style.height=t+(y-k)+"px",w.scrollTop=k-N+w.offsetTop}u.style.margin="10px 0",u.style.minHeight=S+"px",u.style.maxHeight=s+"px",l?.(),requestAnimationFrame(()=>v.current=!0)}},[m,a.trigger,a.valueNode,u,p,w,x,C,a.dir,l]);(0,E.N)(()=>b(),[b]);let[R,N]=n.useState();(0,E.N)(()=>{p&&N(window.getComputedStyle(p).zIndex)},[p]);let k=n.useCallback(e=>{e&&!0===g.current&&(b(),S?.(),g.current=!1)},[b,S]);return(0,y.jsx)(el,{scope:r,contentWrapper:u,shouldExpandOnScrollRef:v,onScrollButtonChange:k,children:(0,y.jsx)("div",{ref:d,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:R},children:(0,y.jsx)(j.div,{...i,ref:h,style:{boxSizing:"border-box",maxHeight:"100%",...i.style}})})})});er.displayName="SelectItemAlignedPosition";var en=n.forwardRef((e,t)=>{let{__scopeSelect:r,align:n="start",collisionPadding:l=10,...o}=e,i=O(r);return(0,y.jsx)(g.UC,{...i,...o,ref:t,align:n,collisionPadding:l,style:{boxSizing:"border-box",...o.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});en.displayName="SelectPopperPosition";var[el,eo]=B($,{}),ei="SelectViewport",ea=n.forwardRef((e,t)=>{let{__scopeSelect:r,nonce:l,...o}=e,a=ee(ei,r),s=eo(ei,r),u=c(t,a.onViewportChange),d=n.useRef(0);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:l}),(0,y.jsx)(A.Slot,{scope:r,children:(0,y.jsx)(j.div,{"data-radix-select-viewport":"",role:"presentation",...o,ref:u,style:{position:"relative",flex:1,overflow:"hidden auto",...o.style},onScroll:(0,i.m)(o.onScroll,e=>{let t=e.currentTarget,{contentWrapper:r,shouldExpandOnScrollRef:n}=s;if(n?.current&&r){let e=Math.abs(d.current-t.scrollTop);if(e>0){let n=window.innerHeight-20,l=Math.max(parseFloat(r.style.minHeight),parseFloat(r.style.height));if(l<n){let o=l+e,i=Math.min(n,o),a=o-i;r.style.height=i+"px","0px"===r.style.bottom&&(t.scrollTop=a>0?a:0,r.style.justifyContent="flex-end")}}}d.current=t.scrollTop})})})]})});ea.displayName=ei;var es="SelectGroup",[eu,ec]=B(es),ed=n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e,l=(0,v.B)();return(0,y.jsx)(eu,{scope:r,id:l,children:(0,y.jsx)(j.div,{role:"group","aria-labelledby":l,...n,ref:t})})});ed.displayName=es;var ep="SelectLabel",ef=n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e,l=ec(ep,r);return(0,y.jsx)(j.div,{id:l.id,...n,ref:t})});ef.displayName=ep;var eh="SelectItem",[em,ev]=B(eh),eg=n.forwardRef((e,t)=>{let{__scopeSelect:r,value:l,disabled:o=!1,textValue:a,...s}=e,u=_(eh,r),d=ee(eh,r),p=u.value===l,[f,h]=n.useState(a??""),[m,g]=n.useState(!1),w=c(t,e=>d.itemRefCallback?.(e,l,o)),x=(0,v.B)(),C=n.useRef("touch"),S=()=>{o||(u.onValueChange(l),u.onOpenChange(!1))};if(""===l)throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return(0,y.jsx)(em,{scope:r,value:l,disabled:o,textId:x,isSelected:p,onItemTextChange:n.useCallback(e=>{h(t=>t||(e?.textContent??"").trim())},[]),children:(0,y.jsx)(A.ItemSlot,{scope:r,value:l,disabled:o,textValue:f,children:(0,y.jsx)(j.div,{role:"option","aria-labelledby":x,"data-highlighted":m?"":void 0,"aria-selected":p&&m,"data-state":p?"checked":"unchecked","aria-disabled":o||void 0,"data-disabled":o?"":void 0,tabIndex:o?void 0:-1,...s,ref:w,onFocus:(0,i.m)(s.onFocus,()=>g(!0)),onBlur:(0,i.m)(s.onBlur,()=>g(!1)),onClick:(0,i.m)(s.onClick,()=>{"mouse"!==C.current&&S()}),onPointerUp:(0,i.m)(s.onPointerUp,()=>{"mouse"===C.current&&S()}),onPointerDown:(0,i.m)(s.onPointerDown,e=>{C.current=e.pointerType}),onPointerMove:(0,i.m)(s.onPointerMove,e=>{C.current=e.pointerType,o?d.onItemLeave?.():"mouse"===C.current&&e.currentTarget.focus({preventScroll:!0})}),onPointerLeave:(0,i.m)(s.onPointerLeave,e=>{e.currentTarget===document.activeElement&&d.onItemLeave?.()}),onKeyDown:(0,i.m)(s.onKeyDown,e=>{d.searchRef?.current!==""&&" "===e.key||(M.includes(e.key)&&S()," "===e.key&&e.preventDefault())})})})})});eg.displayName=eh;var ew="SelectItemText",ey=n.forwardRef((e,t)=>{let{__scopeSelect:r,className:o,style:i,...a}=e,s=_(ew,r),u=ee(ew,r),d=ev(ew,r),p=K(ew,r),[f,h]=n.useState(null),m=c(t,e=>h(e),d.onItemTextChange,e=>u.itemTextRefCallback?.(e,d.value,d.disabled)),v=f?.textContent,g=n.useMemo(()=>(0,y.jsx)("option",{value:d.value,disabled:d.disabled,children:v},d.value),[d.disabled,d.value,v]),{onNativeOptionAdd:w,onNativeOptionRemove:x}=p;return(0,E.N)(()=>(w(g),()=>x(g)),[w,x,g]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(j.span,{id:d.textId,...a,ref:m}),d.isSelected&&s.valueNode&&!s.valueNodeHasChildren?l.createPortal(a.children,s.valueNode):null]})});ey.displayName=ew;var ex="SelectItemIndicator",eC=n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e;return ev(ex,r).isSelected?(0,y.jsx)(j.span,{"aria-hidden":!0,...n,ref:t}):null});eC.displayName=ex;var eS="SelectScrollUpButton",eb=n.forwardRef((e,t)=>{let r=ee(eS,e.__scopeSelect),l=eo(eS,e.__scopeSelect),[o,i]=n.useState(!1),a=c(t,l.onScrollButtonChange);return(0,E.N)(()=>{if(r.viewport&&r.isPositioned){let e=function(){i(t.scrollTop>0)},t=r.viewport;return e(),t.addEventListener("scroll",e),()=>t.removeEventListener("scroll",e)}},[r.viewport,r.isPositioned]),o?(0,y.jsx)(eN,{...e,ref:a,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=r;e&&t&&(e.scrollTop=e.scrollTop-t.offsetHeight)}}):null});eb.displayName=eS;var ej="SelectScrollDownButton",eR=n.forwardRef((e,t)=>{let r=ee(ej,e.__scopeSelect),l=eo(ej,e.__scopeSelect),[o,i]=n.useState(!1),a=c(t,l.onScrollButtonChange);return(0,E.N)(()=>{if(r.viewport&&r.isPositioned){let e=function(){let e=t.scrollHeight-t.clientHeight;i(Math.ceil(t.scrollTop)<e)},t=r.viewport;return e(),t.addEventListener("scroll",e),()=>t.removeEventListener("scroll",e)}},[r.viewport,r.isPositioned]),o?(0,y.jsx)(eN,{...e,ref:a,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=r;e&&t&&(e.scrollTop=e.scrollTop+t.offsetHeight)}}):null});eR.displayName=ej;var eN=n.forwardRef((e,t)=>{let{__scopeSelect:r,onAutoScroll:l,...o}=e,a=ee("SelectScrollButton",r),s=n.useRef(null),u=L(r),c=n.useCallback(()=>{null!==s.current&&(window.clearInterval(s.current),s.current=null)},[]);return n.useEffect(()=>()=>c(),[c]),(0,E.N)(()=>{let e=u().find(e=>e.ref.current===document.activeElement);e?.ref.current?.scrollIntoView({block:"nearest"})},[u]),(0,y.jsx)(j.div,{"aria-hidden":!0,...o,ref:t,style:{flexShrink:0,...o.style},onPointerDown:(0,i.m)(o.onPointerDown,()=>{null===s.current&&(s.current=window.setInterval(l,50))}),onPointerMove:(0,i.m)(o.onPointerMove,()=>{a.onItemLeave?.(),null===s.current&&(s.current=window.setInterval(l,50))}),onPointerLeave:(0,i.m)(o.onPointerLeave,()=>{c()})})}),eE=n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e;return(0,y.jsx)(j.div,{"aria-hidden":!0,...n,ref:t})});eE.displayName="SelectSeparator";var ek="SelectArrow";function eP(e){return""===e||void 0===e}n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e,l=O(r),o=_(ek,r),i=ee(ek,r);return o.open&&"popper"===i.position?(0,y.jsx)(g.i3,{...l,...n,ref:t}):null}).displayName=ek;var eT=n.forwardRef((e,t)=>{let{value:r,...l}=e,o=n.useRef(null),i=c(t,o),a=function(e){let t=n.useRef({value:e,previous:e});return n.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}(r);return n.useEffect(()=>{let e=o.current,t=Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype,"value").set;if(a!==r&&t){let n=new Event("change",{bubbles:!0});t.call(e,r),e.dispatchEvent(n)}},[a,r]),(0,y.jsx)(k.s,{asChild:!0,children:(0,y.jsx)("select",{...l,ref:i,defaultValue:r})})});function eI(e){let t=(0,R.c)(e),r=n.useRef(""),l=n.useRef(0),o=n.useCallback(e=>{let n=r.current+e;t(n),function e(t){r.current=t,window.clearTimeout(l.current),""!==t&&(l.current=window.setTimeout(()=>e(""),1e3))}(n)},[t]),i=n.useCallback(()=>{r.current="",window.clearTimeout(l.current)},[]);return n.useEffect(()=>()=>window.clearTimeout(l.current),[]),[r,o,i]}function eM(e,t,r){var n;let l=t.length>1&&Array.from(t).every(e=>e===t[0])?t[0]:t,o=(n=Math.max(r?e.indexOf(r):-1,0),e.map((t,r)=>e[(n+r)%e.length]));1===l.length&&(o=o.filter(e=>e!==r));let i=o.find(e=>e.textValue.toLowerCase().startsWith(l.toLowerCase()));return i!==r?i:void 0}eT.displayName="BubbleSelect";var eD=U,eA=z,eL=Y,eV=J,eB=X,eH=G,eO=ea,eW=ed,e_=ef,eF=eg,eK=ey,eU=eC,eq=eb,ez=eR,eZ=eE}};