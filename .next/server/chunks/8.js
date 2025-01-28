"use strict";exports.id=8,exports.ids=[8],exports.modules={99905:(e,r,n)=>{n.d(r,{A:()=>t});let t=(0,n(41680).A)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},63689:(e,r,n)=>{n.d(r,{A:()=>t});let t=(0,n(41680).A)("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]])},1e4:(e,r,n)=>{n.d(r,{UC:()=>ex,Y9:()=>eh,q7:()=>ev,bL:()=>em,l9:()=>eg});var t=n(58009),o=n(6004),a=n(93349);function l(e,r){if("function"==typeof e)return e(r);null!=e&&(e.current=r)}function i(...e){return r=>{let n=!1,t=e.map(e=>{let t=l(e,r);return n||"function"!=typeof t||(n=!0),t});if(n)return()=>{for(let r=0;r<t.length;r++){let n=t[r];"function"==typeof n?n():l(e[r],null)}}}}var u=n(31412),s=n(13024);n(55740);var c=n(45512),d=t.forwardRef((e,r)=>{let{children:n,...o}=e,a=t.Children.toArray(n),l=a.find(m);if(l){let e=l.props.children,n=a.map(r=>r!==l?r:t.Children.count(e)>1?t.Children.only(null):t.isValidElement(e)?e.props.children:null);return(0,c.jsx)(f,{...o,ref:r,children:t.isValidElement(e)?t.cloneElement(e,void 0,n):null})}return(0,c.jsx)(f,{...o,ref:r,children:n})});d.displayName="Slot";var f=t.forwardRef((e,r)=>{let{children:n,...o}=e;if(t.isValidElement(n)){let e=function(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=r&&"isReactWarning"in r&&r.isReactWarning;return n?e.ref:(n=(r=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(n);return t.cloneElement(n,{...function(e,r){let n={...r};for(let t in r){let o=e[t],a=r[t];/^on[A-Z]/.test(t)?o&&a?n[t]=(...e)=>{a(...e),o(...e)}:o&&(n[t]=o):"style"===t?n[t]={...o,...a}:"className"===t&&(n[t]=[o,a].filter(Boolean).join(" "))}return{...e,...n}}(o,n.props),ref:r?i(r,e):e})}return t.Children.count(n)>1?t.Children.only(null):null});f.displayName="SlotClone";var p=({children:e})=>(0,c.jsx)(c.Fragment,{children:e});function m(e){return t.isValidElement(e)&&e.type===p}var v=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let n=t.forwardRef((e,n)=>{let{asChild:t,...o}=e,a=t?d:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,c.jsx)(a,{...o,ref:n})});return n.displayName=`Primitive.${r}`,{...e,[r]:n}},{}),h=n(49397);function g(e,r){if("function"==typeof e)return e(r);null!=e&&(e.current=r)}function x(...e){return r=>{let n=!1,t=e.map(e=>{let t=g(e,r);return n||"function"!=typeof t||(n=!0),t});if(n)return()=>{for(let r=0;r<t.length;r++){let n=t[r];"function"==typeof n?n():g(e[r],null)}}}}var y=t.forwardRef((e,r)=>{let{children:n,...o}=e,a=t.Children.toArray(n),l=a.find(b);if(l){let e=l.props.children,n=a.map(r=>r!==l?r:t.Children.count(e)>1?t.Children.only(null):t.isValidElement(e)?e.props.children:null);return(0,c.jsx)(w,{...o,ref:r,children:t.isValidElement(e)?t.cloneElement(e,void 0,n):null})}return(0,c.jsx)(w,{...o,ref:r,children:n})});y.displayName="Slot";var w=t.forwardRef((e,r)=>{let{children:n,...o}=e;if(t.isValidElement(n)){let e=function(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=r&&"isReactWarning"in r&&r.isReactWarning;return n?e.ref:(n=(r=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(n);return t.cloneElement(n,{...function(e,r){let n={...r};for(let t in r){let o=e[t],a=r[t];/^on[A-Z]/.test(t)?o&&a?n[t]=(...e)=>{a(...e),o(...e)}:o&&(n[t]=o):"style"===t?n[t]={...o,...a}:"className"===t&&(n[t]=[o,a].filter(Boolean).join(" "))}return{...e,...n}}(o,n.props),ref:r?x(r,e):e})}return t.Children.count(n)>1?t.Children.only(null):null});w.displayName="SlotClone";var C=({children:e})=>(0,c.jsx)(c.Fragment,{children:e});function b(e){return t.isValidElement(e)&&e.type===C}var j=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let n=t.forwardRef((e,n)=>{let{asChild:t,...o}=e,a=t?y:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,c.jsx)(a,{...o,ref:n})});return n.displayName=`Primitive.${r}`,{...e,[r]:n}},{}),R=n(29399),M=n(30096),P="Collapsible",[E,N]=(0,o.A)(P),[k,A]=E(P),D=t.forwardRef((e,r)=>{let{__scopeCollapsible:n,open:o,defaultOpen:a,disabled:l,onOpenChange:i,...u}=e,[d=!1,f]=(0,s.i)({prop:o,defaultProp:a,onChange:i});return(0,c.jsx)(k,{scope:n,disabled:l,contentId:(0,M.B)(),open:d,onOpenToggle:t.useCallback(()=>f(e=>!e),[f]),children:(0,c.jsx)(j.div,{"data-state":F(d),"data-disabled":l?"":void 0,...u,ref:r})})});D.displayName=P;var _="CollapsibleTrigger",I=t.forwardRef((e,r)=>{let{__scopeCollapsible:n,...t}=e,o=A(_,n);return(0,c.jsx)(j.button,{type:"button","aria-controls":o.contentId,"aria-expanded":o.open||!1,"data-state":F(o.open),"data-disabled":o.disabled?"":void 0,disabled:o.disabled,...t,ref:r,onClick:(0,u.m)(e.onClick,o.onOpenToggle)})});I.displayName=_;var O="CollapsibleContent",S=t.forwardRef((e,r)=>{let{forceMount:n,...t}=e,o=A(O,e.__scopeCollapsible);return(0,c.jsx)(R.C,{present:n||o.open,children:({present:e})=>(0,c.jsx)(T,{...t,ref:r,present:e})})});S.displayName=O;var T=t.forwardRef((e,r)=>{let{__scopeCollapsible:n,present:o,children:a,...l}=e,i=A(O,n),[u,s]=t.useState(o),d=t.useRef(null),f=function(...e){return t.useCallback(x(...e),e)}(r,d),p=t.useRef(0),m=p.current,v=t.useRef(0),g=v.current,y=i.open||u,w=t.useRef(y),C=t.useRef(void 0);return t.useEffect(()=>{let e=requestAnimationFrame(()=>w.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,h.N)(()=>{let e=d.current;if(e){C.current=C.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let r=e.getBoundingClientRect();p.current=r.height,v.current=r.width,w.current||(e.style.transitionDuration=C.current.transitionDuration,e.style.animationName=C.current.animationName),s(o)}},[i.open,o]),(0,c.jsx)(j.div,{"data-state":F(i.open),"data-disabled":i.disabled?"":void 0,id:i.contentId,hidden:!y,...l,ref:f,style:{"--radix-collapsible-content-height":m?`${m}px`:void 0,"--radix-collapsible-content-width":g?`${g}px`:void 0,...e.style},children:y&&a})});function F(e){return e?"open":"closed"}var L=n(59018),V="Accordion",K=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[W,B,U]=(0,a.N)(V),[G,H]=(0,o.A)(V,[U,N]),Z=N(),$=t.forwardRef((e,r)=>{let{type:n,...t}=e;return(0,c.jsx)(W.Provider,{scope:e.__scopeAccordion,children:"multiple"===n?(0,c.jsx)(Q,{...t,ref:r}):(0,c.jsx)(J,{...t,ref:r})})});$.displayName=V;var[q,z]=G(V),[X,Y]=G(V,{collapsible:!1}),J=t.forwardRef((e,r)=>{let{value:n,defaultValue:o,onValueChange:a=()=>{},collapsible:l=!1,...i}=e,[u,d]=(0,s.i)({prop:n,defaultProp:o,onChange:a});return(0,c.jsx)(q,{scope:e.__scopeAccordion,value:u?[u]:[],onItemOpen:d,onItemClose:t.useCallback(()=>l&&d(""),[l,d]),children:(0,c.jsx)(X,{scope:e.__scopeAccordion,collapsible:l,children:(0,c.jsx)(en,{...i,ref:r})})})}),Q=t.forwardRef((e,r)=>{let{value:n,defaultValue:o,onValueChange:a=()=>{},...l}=e,[i=[],u]=(0,s.i)({prop:n,defaultProp:o,onChange:a}),d=t.useCallback(e=>u((r=[])=>[...r,e]),[u]),f=t.useCallback(e=>u((r=[])=>r.filter(r=>r!==e)),[u]);return(0,c.jsx)(q,{scope:e.__scopeAccordion,value:i,onItemOpen:d,onItemClose:f,children:(0,c.jsx)(X,{scope:e.__scopeAccordion,collapsible:!0,children:(0,c.jsx)(en,{...l,ref:r})})})}),[ee,er]=G(V),en=t.forwardRef((e,r)=>{let{__scopeAccordion:n,disabled:o,dir:a,orientation:l="vertical",...s}=e,d=function(...e){return t.useCallback(i(...e),e)}(t.useRef(null),r),f=B(n),p="ltr"===(0,L.jH)(a),m=(0,u.m)(e.onKeyDown,e=>{if(!K.includes(e.key))return;let r=e.target,n=f().filter(e=>!e.ref.current?.disabled),t=n.findIndex(e=>e.ref.current===r),o=n.length;if(-1===t)return;e.preventDefault();let a=t,i=o-1,u=()=>{(a=t+1)>i&&(a=0)},s=()=>{(a=t-1)<0&&(a=i)};switch(e.key){case"Home":a=0;break;case"End":a=i;break;case"ArrowRight":"horizontal"===l&&(p?u():s());break;case"ArrowDown":"vertical"===l&&u();break;case"ArrowLeft":"horizontal"===l&&(p?s():u());break;case"ArrowUp":"vertical"===l&&s()}let c=a%o;n[c].ref.current?.focus()});return(0,c.jsx)(ee,{scope:n,disabled:o,direction:a,orientation:l,children:(0,c.jsx)(W.Slot,{scope:n,children:(0,c.jsx)(v.div,{...s,"data-orientation":l,ref:d,onKeyDown:o?void 0:m})})})}),et="AccordionItem",[eo,ea]=G(et),el=t.forwardRef((e,r)=>{let{__scopeAccordion:n,value:t,...o}=e,a=er(et,n),l=z(et,n),i=Z(n),u=(0,M.B)(),s=t&&l.value.includes(t)||!1,d=a.disabled||e.disabled;return(0,c.jsx)(eo,{scope:n,open:s,disabled:d,triggerId:u,children:(0,c.jsx)(D,{"data-orientation":a.orientation,"data-state":ep(s),...i,...o,ref:r,disabled:d,open:s,onOpenChange:e=>{e?l.onItemOpen(t):l.onItemClose(t)}})})});el.displayName=et;var ei="AccordionHeader",eu=t.forwardRef((e,r)=>{let{__scopeAccordion:n,...t}=e,o=er(V,n),a=ea(ei,n);return(0,c.jsx)(v.h3,{"data-orientation":o.orientation,"data-state":ep(a.open),"data-disabled":a.disabled?"":void 0,...t,ref:r})});eu.displayName=ei;var es="AccordionTrigger",ec=t.forwardRef((e,r)=>{let{__scopeAccordion:n,...t}=e,o=er(V,n),a=ea(es,n),l=Y(es,n),i=Z(n);return(0,c.jsx)(W.ItemSlot,{scope:n,children:(0,c.jsx)(I,{"aria-disabled":a.open&&!l.collapsible||void 0,"data-orientation":o.orientation,id:a.triggerId,...i,...t,ref:r})})});ec.displayName=es;var ed="AccordionContent",ef=t.forwardRef((e,r)=>{let{__scopeAccordion:n,...t}=e,o=er(V,n),a=ea(ed,n),l=Z(n);return(0,c.jsx)(S,{role:"region","aria-labelledby":a.triggerId,"data-orientation":o.orientation,...l,...t,ref:r,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});function ep(e){return e?"open":"closed"}ef.displayName=ed;var em=$,ev=el,eh=eu,eg=ec,ex=ef},85121:(e,r,n)=>{n.d(r,{H_:()=>r_,UC:()=>rN,YJ:()=>rk,q7:()=>rD,VF:()=>rS,JU:()=>rA,ZL:()=>rE,z6:()=>rI,hN:()=>rO,bL:()=>rM,wv:()=>rT,Pb:()=>rF,G5:()=>rV,ZP:()=>rL,l9:()=>rP});var t=n(58009),o=n(31412),a=n(6004),l=n(55740);function i(e,r){if("function"==typeof e)return e(r);null!=e&&(e.current=r)}var u=n(45512),s=t.forwardRef((e,r)=>{let{children:n,...o}=e,a=t.Children.toArray(n),l=a.find(f);if(l){let e=l.props.children,n=a.map(r=>r!==l?r:t.Children.count(e)>1?t.Children.only(null):t.isValidElement(e)?e.props.children:null);return(0,u.jsx)(c,{...o,ref:r,children:t.isValidElement(e)?t.cloneElement(e,void 0,n):null})}return(0,u.jsx)(c,{...o,ref:r,children:n})});s.displayName="Slot";var c=t.forwardRef((e,r)=>{let{children:n,...o}=e;if(t.isValidElement(n)){let e=function(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=r&&"isReactWarning"in r&&r.isReactWarning;return n?e.ref:(n=(r=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(n);return t.cloneElement(n,{...function(e,r){let n={...r};for(let t in r){let o=e[t],a=r[t];/^on[A-Z]/.test(t)?o&&a?n[t]=(...e)=>{a(...e),o(...e)}:o&&(n[t]=o):"style"===t?n[t]={...o,...a}:"className"===t&&(n[t]=[o,a].filter(Boolean).join(" "))}return{...e,...n}}(o,n.props),ref:r?function(...e){return r=>{let n=!1,t=e.map(e=>{let t=i(e,r);return n||"function"!=typeof t||(n=!0),t});if(n)return()=>{for(let r=0;r<t.length;r++){let n=t[r];"function"==typeof n?n():i(e[r],null)}}}}(r,e):e})}return t.Children.count(n)>1?t.Children.only(null):null});c.displayName="SlotClone";var d=({children:e})=>(0,u.jsx)(u.Fragment,{children:e});function f(e){return t.isValidElement(e)&&e.type===d}var p=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let n=t.forwardRef((e,n)=>{let{asChild:t,...o}=e,a=t?s:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,u.jsx)(a,{...o,ref:n})});return n.displayName=`Primitive.${r}`,{...e,[r]:n}},{}),m=n(93349);function v(e,r){if("function"==typeof e)return e(r);null!=e&&(e.current=r)}function h(...e){return r=>{let n=!1,t=e.map(e=>{let t=v(e,r);return n||"function"!=typeof t||(n=!0),t});if(n)return()=>{for(let r=0;r<t.length;r++){let n=t[r];"function"==typeof n?n():v(e[r],null)}}}}function g(...e){return t.useCallback(h(...e),e)}var x=n(59018),y=n(80410),w=n(19632),C=n(69305),b=n(30096),j=n(70399),R=n(60226),M=n(29399),P=t.forwardRef((e,r)=>{let{children:n,...o}=e,a=t.Children.toArray(n),l=a.find(k);if(l){let e=l.props.children,n=a.map(r=>r!==l?r:t.Children.count(e)>1?t.Children.only(null):t.isValidElement(e)?e.props.children:null);return(0,u.jsx)(E,{...o,ref:r,children:t.isValidElement(e)?t.cloneElement(e,void 0,n):null})}return(0,u.jsx)(E,{...o,ref:r,children:n})});P.displayName="Slot";var E=t.forwardRef((e,r)=>{let{children:n,...o}=e;if(t.isValidElement(n)){let e=function(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=r&&"isReactWarning"in r&&r.isReactWarning;return n?e.ref:(n=(r=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(n);return t.cloneElement(n,{...function(e,r){let n={...r};for(let t in r){let o=e[t],a=r[t];/^on[A-Z]/.test(t)?o&&a?n[t]=(...e)=>{a(...e),o(...e)}:o&&(n[t]=o):"style"===t?n[t]={...o,...a}:"className"===t&&(n[t]=[o,a].filter(Boolean).join(" "))}return{...e,...n}}(o,n.props),ref:r?h(r,e):e})}return t.Children.count(n)>1?t.Children.only(null):null});E.displayName="SlotClone";var N=({children:e})=>(0,u.jsx)(u.Fragment,{children:e});function k(e){return t.isValidElement(e)&&e.type===N}var A=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let n=t.forwardRef((e,n)=>{let{asChild:t,...o}=e,a=t?P:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,u.jsx)(a,{...o,ref:n})});return n.displayName=`Primitive.${r}`,{...e,[r]:n}},{});function D(e,r){if("function"==typeof e)return e(r);null!=e&&(e.current=r)}function _(...e){return r=>{let n=!1,t=e.map(e=>{let t=D(e,r);return n||"function"!=typeof t||(n=!0),t});if(n)return()=>{for(let r=0;r<t.length;r++){let n=t[r];"function"==typeof n?n():D(e[r],null)}}}}var I=t.forwardRef((e,r)=>{let{children:n,...o}=e,a=t.Children.toArray(n),l=a.find(T);if(l){let e=l.props.children,n=a.map(r=>r!==l?r:t.Children.count(e)>1?t.Children.only(null):t.isValidElement(e)?e.props.children:null);return(0,u.jsx)(O,{...o,ref:r,children:t.isValidElement(e)?t.cloneElement(e,void 0,n):null})}return(0,u.jsx)(O,{...o,ref:r,children:n})});I.displayName="Slot";var O=t.forwardRef((e,r)=>{let{children:n,...o}=e;if(t.isValidElement(n)){let e=function(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=r&&"isReactWarning"in r&&r.isReactWarning;return n?e.ref:(n=(r=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(n);return t.cloneElement(n,{...function(e,r){let n={...r};for(let t in r){let o=e[t],a=r[t];/^on[A-Z]/.test(t)?o&&a?n[t]=(...e)=>{a(...e),o(...e)}:o&&(n[t]=o):"style"===t?n[t]={...o,...a}:"className"===t&&(n[t]=[o,a].filter(Boolean).join(" "))}return{...e,...n}}(o,n.props),ref:r?_(r,e):e})}return t.Children.count(n)>1?t.Children.only(null):null});O.displayName="SlotClone";var S=({children:e})=>(0,u.jsx)(u.Fragment,{children:e});function T(e){return t.isValidElement(e)&&e.type===S}var F=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let n=t.forwardRef((e,n)=>{let{asChild:t,...o}=e,a=t?I:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,u.jsx)(a,{...o,ref:n})});return n.displayName=`Primitive.${r}`,{...e,[r]:n}},{}),L=n(92828),V=n(13024),K="rovingFocusGroup.onEntryFocus",W={bubbles:!1,cancelable:!0},B="RovingFocusGroup",[U,G,H]=(0,m.N)(B),[Z,$]=(0,a.A)(B,[H]),[q,z]=Z(B),X=t.forwardRef((e,r)=>(0,u.jsx)(U.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,u.jsx)(U.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,u.jsx)(Y,{...e,ref:r})})}));X.displayName=B;var Y=t.forwardRef((e,r)=>{let{__scopeRovingFocusGroup:n,orientation:a,loop:l=!1,dir:i,currentTabStopId:s,defaultCurrentTabStopId:c,onCurrentTabStopIdChange:d,onEntryFocus:f,preventScrollOnEntryFocus:p=!1,...m}=e,v=t.useRef(null),h=function(...e){return t.useCallback(_(...e),e)}(r,v),g=(0,x.jH)(i),[y=null,w]=(0,V.i)({prop:s,defaultProp:c,onChange:d}),[C,b]=t.useState(!1),j=(0,L.c)(f),R=G(n),M=t.useRef(!1),[P,E]=t.useState(0);return t.useEffect(()=>{let e=v.current;if(e)return e.addEventListener(K,j),()=>e.removeEventListener(K,j)},[j]),(0,u.jsx)(q,{scope:n,orientation:a,dir:g,loop:l,currentTabStopId:y,onItemFocus:t.useCallback(e=>w(e),[w]),onItemShiftTab:t.useCallback(()=>b(!0),[]),onFocusableItemAdd:t.useCallback(()=>E(e=>e+1),[]),onFocusableItemRemove:t.useCallback(()=>E(e=>e-1),[]),children:(0,u.jsx)(F.div,{tabIndex:C||0===P?-1:0,"data-orientation":a,...m,ref:h,style:{outline:"none",...e.style},onMouseDown:(0,o.m)(e.onMouseDown,()=>{M.current=!0}),onFocus:(0,o.m)(e.onFocus,e=>{let r=!M.current;if(e.target===e.currentTarget&&r&&!C){let r=new CustomEvent(K,W);if(e.currentTarget.dispatchEvent(r),!r.defaultPrevented){let e=R().filter(e=>e.focusable);er([e.find(e=>e.active),e.find(e=>e.id===y),...e].filter(Boolean).map(e=>e.ref.current),p)}}M.current=!1}),onBlur:(0,o.m)(e.onBlur,()=>b(!1))})})}),J="RovingFocusGroupItem",Q=t.forwardRef((e,r)=>{let{__scopeRovingFocusGroup:n,focusable:a=!0,active:l=!1,tabStopId:i,...s}=e,c=(0,b.B)(),d=i||c,f=z(J,n),p=f.currentTabStopId===d,m=G(n),{onFocusableItemAdd:v,onFocusableItemRemove:h}=f;return t.useEffect(()=>{if(a)return v(),()=>h()},[a,v,h]),(0,u.jsx)(U.ItemSlot,{scope:n,id:d,focusable:a,active:l,children:(0,u.jsx)(F.span,{tabIndex:p?0:-1,"data-orientation":f.orientation,...s,ref:r,onMouseDown:(0,o.m)(e.onMouseDown,e=>{a?f.onItemFocus(d):e.preventDefault()}),onFocus:(0,o.m)(e.onFocus,()=>f.onItemFocus(d)),onKeyDown:(0,o.m)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){f.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let r=function(e,r,n){var t;let o=(t=e.key,"rtl"!==n?t:"ArrowLeft"===t?"ArrowRight":"ArrowRight"===t?"ArrowLeft":t);if(!("vertical"===r&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===r&&["ArrowUp","ArrowDown"].includes(o)))return ee[o]}(e,f.orientation,f.dir);if(void 0!==r){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let n=m().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===r)n.reverse();else if("prev"===r||"next"===r){"prev"===r&&n.reverse();let t=n.indexOf(e.currentTarget);n=f.loop?function(e,r){return e.map((n,t)=>e[(r+t)%e.length])}(n,t+1):n.slice(t+1)}setTimeout(()=>er(n))}})})})});Q.displayName=J;var ee={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function er(e,r=!1){let n=document.activeElement;for(let t of e)if(t===n||(t.focus({preventScroll:r}),document.activeElement!==n))return}var en=n(72421),et=n(8523),eo=["Enter"," "],ea=["ArrowUp","PageDown","End"],el=["ArrowDown","PageUp","Home",...ea],ei={ltr:[...eo,"ArrowRight"],rtl:[...eo,"ArrowLeft"]},eu={ltr:["ArrowLeft"],rtl:["ArrowRight"]},es="Menu",[ec,ed,ef]=(0,m.N)(es),[ep,em]=(0,a.A)(es,[ef,j.Bk,$]),ev=(0,j.Bk)(),eh=$(),[eg,ex]=ep(es),[ey,ew]=ep(es),eC=e=>{let{__scopeMenu:r,open:n=!1,children:o,dir:a,onOpenChange:l,modal:i=!0}=e,s=ev(r),[c,d]=t.useState(null),f=t.useRef(!1),p=(0,L.c)(l),m=(0,x.jH)(a);return t.useEffect(()=>{let e=()=>{f.current=!0,document.addEventListener("pointerdown",r,{capture:!0,once:!0}),document.addEventListener("pointermove",r,{capture:!0,once:!0})},r=()=>f.current=!1;return document.addEventListener("keydown",e,{capture:!0}),()=>{document.removeEventListener("keydown",e,{capture:!0}),document.removeEventListener("pointerdown",r,{capture:!0}),document.removeEventListener("pointermove",r,{capture:!0})}},[]),(0,u.jsx)(j.bL,{...s,children:(0,u.jsx)(eg,{scope:r,open:n,onOpenChange:p,content:c,onContentChange:d,children:(0,u.jsx)(ey,{scope:r,onClose:t.useCallback(()=>p(!1),[p]),isUsingKeyboardRef:f,dir:m,modal:i,children:o})})})};eC.displayName=es;var eb=t.forwardRef((e,r)=>{let{__scopeMenu:n,...t}=e,o=ev(n);return(0,u.jsx)(j.Mz,{...o,...t,ref:r})});eb.displayName="MenuAnchor";var ej="MenuPortal",[eR,eM]=ep(ej,{forceMount:void 0}),eP=e=>{let{__scopeMenu:r,forceMount:n,children:t,container:o}=e,a=ex(ej,r);return(0,u.jsx)(eR,{scope:r,forceMount:n,children:(0,u.jsx)(M.C,{present:n||a.open,children:(0,u.jsx)(R.Z,{asChild:!0,container:o,children:t})})})};eP.displayName=ej;var eE="MenuContent",[eN,ek]=ep(eE),eA=t.forwardRef((e,r)=>{let n=eM(eE,e.__scopeMenu),{forceMount:t=n.forceMount,...o}=e,a=ex(eE,e.__scopeMenu),l=ew(eE,e.__scopeMenu);return(0,u.jsx)(ec.Provider,{scope:e.__scopeMenu,children:(0,u.jsx)(M.C,{present:t||a.open,children:(0,u.jsx)(ec.Slot,{scope:e.__scopeMenu,children:l.modal?(0,u.jsx)(eD,{...o,ref:r}):(0,u.jsx)(e_,{...o,ref:r})})})})}),eD=t.forwardRef((e,r)=>{let n=ex(eE,e.__scopeMenu),a=t.useRef(null),l=g(r,a);return t.useEffect(()=>{let e=a.current;if(e)return(0,en.Eq)(e)},[]),(0,u.jsx)(eI,{...e,ref:l,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:(0,o.m)(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)})}),e_=t.forwardRef((e,r)=>{let n=ex(eE,e.__scopeMenu);return(0,u.jsx)(eI,{...e,ref:r,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)})}),eI=t.forwardRef((e,r)=>{let{__scopeMenu:n,loop:a=!1,trapFocus:l,onOpenAutoFocus:i,onCloseAutoFocus:s,disableOutsidePointerEvents:c,onEntryFocus:d,onEscapeKeyDown:f,onPointerDownOutside:p,onFocusOutside:m,onInteractOutside:v,onDismiss:h,disableOutsideScroll:x,...b}=e,R=ex(eE,n),M=ew(eE,n),E=ev(n),N=eh(n),k=ed(n),[A,D]=t.useState(null),_=t.useRef(null),I=g(r,_,R.onContentChange),O=t.useRef(0),S=t.useRef(""),T=t.useRef(0),F=t.useRef(null),L=t.useRef("right"),V=t.useRef(0),K=x?et.A:t.Fragment,W=x?{as:P,allowPinchZoom:!0}:void 0,B=e=>{let r=S.current+e,n=k().filter(e=>!e.disabled),t=document.activeElement,o=n.find(e=>e.ref.current===t)?.textValue,a=function(e,r,n){var t;let o=r.length>1&&Array.from(r).every(e=>e===r[0])?r[0]:r,a=(t=Math.max(n?e.indexOf(n):-1,0),e.map((r,n)=>e[(t+n)%e.length]));1===o.length&&(a=a.filter(e=>e!==n));let l=a.find(e=>e.toLowerCase().startsWith(o.toLowerCase()));return l!==n?l:void 0}(n.map(e=>e.textValue),r,o),l=n.find(e=>e.textValue===a)?.ref.current;(function e(r){S.current=r,window.clearTimeout(O.current),""!==r&&(O.current=window.setTimeout(()=>e(""),1e3))})(r),l&&setTimeout(()=>l.focus())};t.useEffect(()=>()=>window.clearTimeout(O.current),[]),(0,w.Oh)();let U=t.useCallback(e=>L.current===F.current?.side&&function(e,r){return!!r&&function(e,r){let{x:n,y:t}=e,o=!1;for(let e=0,a=r.length-1;e<r.length;a=e++){let l=r[e].x,i=r[e].y,u=r[a].x,s=r[a].y;i>t!=s>t&&n<(u-l)*(t-i)/(s-i)+l&&(o=!o)}return o}({x:e.clientX,y:e.clientY},r)}(e,F.current?.area),[]);return(0,u.jsx)(eN,{scope:n,searchRef:S,onItemEnter:t.useCallback(e=>{U(e)&&e.preventDefault()},[U]),onItemLeave:t.useCallback(e=>{U(e)||(_.current?.focus(),D(null))},[U]),onTriggerLeave:t.useCallback(e=>{U(e)&&e.preventDefault()},[U]),pointerGraceTimerRef:T,onPointerGraceIntentChange:t.useCallback(e=>{F.current=e},[]),children:(0,u.jsx)(K,{...W,children:(0,u.jsx)(C.n,{asChild:!0,trapped:l,onMountAutoFocus:(0,o.m)(i,e=>{e.preventDefault(),_.current?.focus({preventScroll:!0})}),onUnmountAutoFocus:s,children:(0,u.jsx)(y.qW,{asChild:!0,disableOutsidePointerEvents:c,onEscapeKeyDown:f,onPointerDownOutside:p,onFocusOutside:m,onInteractOutside:v,onDismiss:h,children:(0,u.jsx)(X,{asChild:!0,...N,dir:M.dir,orientation:"vertical",loop:a,currentTabStopId:A,onCurrentTabStopIdChange:D,onEntryFocus:(0,o.m)(d,e=>{M.isUsingKeyboardRef.current||e.preventDefault()}),preventScrollOnEntryFocus:!0,children:(0,u.jsx)(j.UC,{role:"menu","aria-orientation":"vertical","data-state":e6(R.open),"data-radix-menu-content":"",dir:M.dir,...E,...b,ref:I,style:{outline:"none",...b.style},onKeyDown:(0,o.m)(b.onKeyDown,e=>{let r=e.target.closest("[data-radix-menu-content]")===e.currentTarget,n=e.ctrlKey||e.altKey||e.metaKey,t=1===e.key.length;r&&("Tab"===e.key&&e.preventDefault(),!n&&t&&B(e.key));let o=_.current;if(e.target!==o||!el.includes(e.key))return;e.preventDefault();let a=k().filter(e=>!e.disabled).map(e=>e.ref.current);ea.includes(e.key)&&a.reverse(),function(e){let r=document.activeElement;for(let n of e)if(n===r||(n.focus(),document.activeElement!==r))return}(a)}),onBlur:(0,o.m)(e.onBlur,e=>{e.currentTarget.contains(e.target)||(window.clearTimeout(O.current),S.current="")}),onPointerMove:(0,o.m)(e.onPointerMove,re(e=>{let r=e.target,n=V.current!==e.clientX;if(e.currentTarget.contains(r)&&n){let r=e.clientX>V.current?"right":"left";L.current=r,V.current=e.clientX}}))})})})})})})});eA.displayName=eE;var eO=t.forwardRef((e,r)=>{let{__scopeMenu:n,...t}=e;return(0,u.jsx)(A.div,{role:"group",...t,ref:r})});eO.displayName="MenuGroup";var eS=t.forwardRef((e,r)=>{let{__scopeMenu:n,...t}=e;return(0,u.jsx)(A.div,{...t,ref:r})});eS.displayName="MenuLabel";var eT="MenuItem",eF="menu.itemSelect",eL=t.forwardRef((e,r)=>{let{disabled:n=!1,onSelect:a,...i}=e,s=t.useRef(null),c=ew(eT,e.__scopeMenu),d=ek(eT,e.__scopeMenu),f=g(r,s),p=t.useRef(!1);return(0,u.jsx)(eV,{...i,ref:f,disabled:n,onClick:(0,o.m)(e.onClick,()=>{let e=s.current;if(!n&&e){let r=new CustomEvent(eF,{bubbles:!0,cancelable:!0});e.addEventListener(eF,e=>a?.(e),{once:!0}),function(e,r){e&&l.flushSync(()=>e.dispatchEvent(r))}(e,r),r.defaultPrevented?p.current=!1:c.onClose()}}),onPointerDown:r=>{e.onPointerDown?.(r),p.current=!0},onPointerUp:(0,o.m)(e.onPointerUp,e=>{p.current||e.currentTarget?.click()}),onKeyDown:(0,o.m)(e.onKeyDown,e=>{let r=""!==d.searchRef.current;!n&&(!r||" "!==e.key)&&eo.includes(e.key)&&(e.currentTarget.click(),e.preventDefault())})})});eL.displayName=eT;var eV=t.forwardRef((e,r)=>{let{__scopeMenu:n,disabled:a=!1,textValue:l,...i}=e,s=ek(eT,n),c=eh(n),d=t.useRef(null),f=g(r,d),[p,m]=t.useState(!1),[v,h]=t.useState("");return t.useEffect(()=>{let e=d.current;e&&h((e.textContent??"").trim())},[i.children]),(0,u.jsx)(ec.ItemSlot,{scope:n,disabled:a,textValue:l??v,children:(0,u.jsx)(Q,{asChild:!0,...c,focusable:!a,children:(0,u.jsx)(A.div,{role:"menuitem","data-highlighted":p?"":void 0,"aria-disabled":a||void 0,"data-disabled":a?"":void 0,...i,ref:f,onPointerMove:(0,o.m)(e.onPointerMove,re(e=>{a?s.onItemLeave(e):(s.onItemEnter(e),e.defaultPrevented||e.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:(0,o.m)(e.onPointerLeave,re(e=>s.onItemLeave(e))),onFocus:(0,o.m)(e.onFocus,()=>m(!0)),onBlur:(0,o.m)(e.onBlur,()=>m(!1))})})})}),eK=t.forwardRef((e,r)=>{let{checked:n=!1,onCheckedChange:t,...a}=e;return(0,u.jsx)(eq,{scope:e.__scopeMenu,checked:n,children:(0,u.jsx)(eL,{role:"menuitemcheckbox","aria-checked":e8(n)?"mixed":n,...a,ref:r,"data-state":e7(n),onSelect:(0,o.m)(a.onSelect,()=>t?.(!!e8(n)||!n),{checkForDefaultPrevented:!1})})})});eK.displayName="MenuCheckboxItem";var eW="MenuRadioGroup",[eB,eU]=ep(eW,{value:void 0,onValueChange:()=>{}}),eG=t.forwardRef((e,r)=>{let{value:n,onValueChange:t,...o}=e,a=(0,L.c)(t);return(0,u.jsx)(eB,{scope:e.__scopeMenu,value:n,onValueChange:a,children:(0,u.jsx)(eO,{...o,ref:r})})});eG.displayName=eW;var eH="MenuRadioItem",eZ=t.forwardRef((e,r)=>{let{value:n,...t}=e,a=eU(eH,e.__scopeMenu),l=n===a.value;return(0,u.jsx)(eq,{scope:e.__scopeMenu,checked:l,children:(0,u.jsx)(eL,{role:"menuitemradio","aria-checked":l,...t,ref:r,"data-state":e7(l),onSelect:(0,o.m)(t.onSelect,()=>a.onValueChange?.(n),{checkForDefaultPrevented:!1})})})});eZ.displayName=eH;var e$="MenuItemIndicator",[eq,ez]=ep(e$,{checked:!1}),eX=t.forwardRef((e,r)=>{let{__scopeMenu:n,forceMount:t,...o}=e,a=ez(e$,n);return(0,u.jsx)(M.C,{present:t||e8(a.checked)||!0===a.checked,children:(0,u.jsx)(A.span,{...o,ref:r,"data-state":e7(a.checked)})})});eX.displayName=e$;var eY=t.forwardRef((e,r)=>{let{__scopeMenu:n,...t}=e;return(0,u.jsx)(A.div,{role:"separator","aria-orientation":"horizontal",...t,ref:r})});eY.displayName="MenuSeparator";var eJ=t.forwardRef((e,r)=>{let{__scopeMenu:n,...t}=e,o=ev(n);return(0,u.jsx)(j.i3,{...o,...t,ref:r})});eJ.displayName="MenuArrow";var eQ="MenuSub",[e0,e1]=ep(eQ),e9=e=>{let{__scopeMenu:r,children:n,open:o=!1,onOpenChange:a}=e,l=ex(eQ,r),i=ev(r),[s,c]=t.useState(null),[d,f]=t.useState(null),p=(0,L.c)(a);return t.useEffect(()=>(!1===l.open&&p(!1),()=>p(!1)),[l.open,p]),(0,u.jsx)(j.bL,{...i,children:(0,u.jsx)(eg,{scope:r,open:o,onOpenChange:p,content:d,onContentChange:f,children:(0,u.jsx)(e0,{scope:r,contentId:(0,b.B)(),triggerId:(0,b.B)(),trigger:s,onTriggerChange:c,children:n})})})};e9.displayName=eQ;var e3="MenuSubTrigger",e2=t.forwardRef((e,r)=>{let n=ex(e3,e.__scopeMenu),a=ew(e3,e.__scopeMenu),l=e1(e3,e.__scopeMenu),i=ek(e3,e.__scopeMenu),s=t.useRef(null),{pointerGraceTimerRef:c,onPointerGraceIntentChange:d}=i,f={__scopeMenu:e.__scopeMenu},p=t.useCallback(()=>{s.current&&window.clearTimeout(s.current),s.current=null},[]);return t.useEffect(()=>p,[p]),t.useEffect(()=>{let e=c.current;return()=>{window.clearTimeout(e),d(null)}},[c,d]),(0,u.jsx)(eb,{asChild:!0,...f,children:(0,u.jsx)(eV,{id:l.triggerId,"aria-haspopup":"menu","aria-expanded":n.open,"aria-controls":l.contentId,"data-state":e6(n.open),...e,ref:h(r,l.onTriggerChange),onClick:r=>{e.onClick?.(r),e.disabled||r.defaultPrevented||(r.currentTarget.focus(),n.open||n.onOpenChange(!0))},onPointerMove:(0,o.m)(e.onPointerMove,re(r=>{i.onItemEnter(r),r.defaultPrevented||e.disabled||n.open||s.current||(i.onPointerGraceIntentChange(null),s.current=window.setTimeout(()=>{n.onOpenChange(!0),p()},100))})),onPointerLeave:(0,o.m)(e.onPointerLeave,re(e=>{p();let r=n.content?.getBoundingClientRect();if(r){let t=n.content?.dataset.side,o="right"===t,a=r[o?"left":"right"],l=r[o?"right":"left"];i.onPointerGraceIntentChange({area:[{x:e.clientX+(o?-5:5),y:e.clientY},{x:a,y:r.top},{x:l,y:r.top},{x:l,y:r.bottom},{x:a,y:r.bottom}],side:t}),window.clearTimeout(c.current),c.current=window.setTimeout(()=>i.onPointerGraceIntentChange(null),300)}else{if(i.onTriggerLeave(e),e.defaultPrevented)return;i.onPointerGraceIntentChange(null)}})),onKeyDown:(0,o.m)(e.onKeyDown,r=>{let t=""!==i.searchRef.current;!e.disabled&&(!t||" "!==r.key)&&ei[a.dir].includes(r.key)&&(n.onOpenChange(!0),n.content?.focus(),r.preventDefault())})})})});e2.displayName=e3;var e5="MenuSubContent",e4=t.forwardRef((e,r)=>{let n=eM(eE,e.__scopeMenu),{forceMount:a=n.forceMount,...l}=e,i=ex(eE,e.__scopeMenu),s=ew(eE,e.__scopeMenu),c=e1(e5,e.__scopeMenu),d=t.useRef(null),f=g(r,d);return(0,u.jsx)(ec.Provider,{scope:e.__scopeMenu,children:(0,u.jsx)(M.C,{present:a||i.open,children:(0,u.jsx)(ec.Slot,{scope:e.__scopeMenu,children:(0,u.jsx)(eI,{id:c.contentId,"aria-labelledby":c.triggerId,...l,ref:f,align:"start",side:"rtl"===s.dir?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:e=>{s.isUsingKeyboardRef.current&&d.current?.focus(),e.preventDefault()},onCloseAutoFocus:e=>e.preventDefault(),onFocusOutside:(0,o.m)(e.onFocusOutside,e=>{e.target!==c.trigger&&i.onOpenChange(!1)}),onEscapeKeyDown:(0,o.m)(e.onEscapeKeyDown,e=>{s.onClose(),e.preventDefault()}),onKeyDown:(0,o.m)(e.onKeyDown,e=>{let r=e.currentTarget.contains(e.target),n=eu[s.dir].includes(e.key);r&&n&&(i.onOpenChange(!1),c.trigger?.focus(),e.preventDefault())})})})})})});function e6(e){return e?"open":"closed"}function e8(e){return"indeterminate"===e}function e7(e){return e8(e)?"indeterminate":e?"checked":"unchecked"}function re(e){return r=>"mouse"===r.pointerType?e(r):void 0}e4.displayName=e5;var rr="ContextMenu",[rn,rt]=(0,a.A)(rr,[em]),ro=em(),[ra,rl]=rn(rr),ri=e=>{let{__scopeContextMenu:r,children:n,onOpenChange:o,dir:a,modal:l=!0}=e,[i,s]=t.useState(!1),c=ro(r),d=(0,L.c)(o),f=t.useCallback(e=>{s(e),d(e)},[d]);return(0,u.jsx)(ra,{scope:r,open:i,onOpenChange:f,modal:l,children:(0,u.jsx)(eC,{...c,dir:a,open:i,onOpenChange:f,modal:l,children:n})})};ri.displayName=rr;var ru="ContextMenuTrigger",rs=t.forwardRef((e,r)=>{let{__scopeContextMenu:n,disabled:a=!1,...l}=e,i=rl(ru,n),s=ro(n),c=t.useRef({x:0,y:0}),d=t.useRef({getBoundingClientRect:()=>DOMRect.fromRect({width:0,height:0,...c.current})}),f=t.useRef(0),m=t.useCallback(()=>window.clearTimeout(f.current),[]),v=e=>{c.current={x:e.clientX,y:e.clientY},i.onOpenChange(!0)};return t.useEffect(()=>m,[m]),t.useEffect(()=>void(a&&m()),[a,m]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(eb,{...s,virtualRef:d}),(0,u.jsx)(p.span,{"data-state":i.open?"open":"closed","data-disabled":a?"":void 0,...l,ref:r,style:{WebkitTouchCallout:"none",...e.style},onContextMenu:a?e.onContextMenu:(0,o.m)(e.onContextMenu,e=>{m(),v(e),e.preventDefault()}),onPointerDown:a?e.onPointerDown:(0,o.m)(e.onPointerDown,rR(e=>{m(),f.current=window.setTimeout(()=>v(e),700)})),onPointerMove:a?e.onPointerMove:(0,o.m)(e.onPointerMove,rR(m)),onPointerCancel:a?e.onPointerCancel:(0,o.m)(e.onPointerCancel,rR(m)),onPointerUp:a?e.onPointerUp:(0,o.m)(e.onPointerUp,rR(m))})]})});rs.displayName=ru;var rc=e=>{let{__scopeContextMenu:r,...n}=e,t=ro(r);return(0,u.jsx)(eP,{...t,...n})};rc.displayName="ContextMenuPortal";var rd="ContextMenuContent",rf=t.forwardRef((e,r)=>{let{__scopeContextMenu:n,...o}=e,a=rl(rd,n),l=ro(n),i=t.useRef(!1);return(0,u.jsx)(eA,{...l,...o,ref:r,side:"right",sideOffset:2,align:"start",onCloseAutoFocus:r=>{e.onCloseAutoFocus?.(r),!r.defaultPrevented&&i.current&&r.preventDefault(),i.current=!1},onInteractOutside:r=>{e.onInteractOutside?.(r),r.defaultPrevented||a.modal||(i.current=!0)},style:{...e.style,"--radix-context-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-context-menu-content-available-width":"var(--radix-popper-available-width)","--radix-context-menu-content-available-height":"var(--radix-popper-available-height)","--radix-context-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-context-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});rf.displayName=rd;var rp=t.forwardRef((e,r)=>{let{__scopeContextMenu:n,...t}=e,o=ro(n);return(0,u.jsx)(eO,{...o,...t,ref:r})});rp.displayName="ContextMenuGroup";var rm=t.forwardRef((e,r)=>{let{__scopeContextMenu:n,...t}=e,o=ro(n);return(0,u.jsx)(eS,{...o,...t,ref:r})});rm.displayName="ContextMenuLabel";var rv=t.forwardRef((e,r)=>{let{__scopeContextMenu:n,...t}=e,o=ro(n);return(0,u.jsx)(eL,{...o,...t,ref:r})});rv.displayName="ContextMenuItem";var rh=t.forwardRef((e,r)=>{let{__scopeContextMenu:n,...t}=e,o=ro(n);return(0,u.jsx)(eK,{...o,...t,ref:r})});rh.displayName="ContextMenuCheckboxItem";var rg=t.forwardRef((e,r)=>{let{__scopeContextMenu:n,...t}=e,o=ro(n);return(0,u.jsx)(eG,{...o,...t,ref:r})});rg.displayName="ContextMenuRadioGroup";var rx=t.forwardRef((e,r)=>{let{__scopeContextMenu:n,...t}=e,o=ro(n);return(0,u.jsx)(eZ,{...o,...t,ref:r})});rx.displayName="ContextMenuRadioItem";var ry=t.forwardRef((e,r)=>{let{__scopeContextMenu:n,...t}=e,o=ro(n);return(0,u.jsx)(eX,{...o,...t,ref:r})});ry.displayName="ContextMenuItemIndicator";var rw=t.forwardRef((e,r)=>{let{__scopeContextMenu:n,...t}=e,o=ro(n);return(0,u.jsx)(eY,{...o,...t,ref:r})});rw.displayName="ContextMenuSeparator",t.forwardRef((e,r)=>{let{__scopeContextMenu:n,...t}=e,o=ro(n);return(0,u.jsx)(eJ,{...o,...t,ref:r})}).displayName="ContextMenuArrow";var rC=e=>{let{__scopeContextMenu:r,children:n,onOpenChange:t,open:o,defaultOpen:a}=e,l=ro(r),[i,s]=(0,V.i)({prop:o,defaultProp:a,onChange:t});return(0,u.jsx)(e9,{...l,open:i,onOpenChange:s,children:n})};rC.displayName="ContextMenuSub";var rb=t.forwardRef((e,r)=>{let{__scopeContextMenu:n,...t}=e,o=ro(n);return(0,u.jsx)(e2,{...o,...t,ref:r})});rb.displayName="ContextMenuSubTrigger";var rj=t.forwardRef((e,r)=>{let{__scopeContextMenu:n,...t}=e,o=ro(n);return(0,u.jsx)(e4,{...o,...t,ref:r,style:{...e.style,"--radix-context-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-context-menu-content-available-width":"var(--radix-popper-available-width)","--radix-context-menu-content-available-height":"var(--radix-popper-available-height)","--radix-context-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-context-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});function rR(e){return r=>"mouse"!==r.pointerType?e(r):void 0}rj.displayName="ContextMenuSubContent";var rM=ri,rP=rs,rE=rc,rN=rf,rk=rp,rA=rm,rD=rv,r_=rh,rI=rg,rO=rx,rS=ry,rT=rw,rF=rC,rL=rb,rV=rj}};