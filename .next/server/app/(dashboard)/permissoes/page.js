(()=>{var e={};e.id=235,e.ids=[235],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},29218:(e,s,r)=>{"use strict";r.r(s),r.d(s,{GlobalError:()=>a.a,__next_app__:()=>m,pages:()=>c,routeModule:()=>u,tree:()=>d});var n=r(70260),t=r(28203),i=r(25155),a=r.n(i),o=r(67292),l={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(s,l);let d=["",{children:["(dashboard)",{children:["permissoes",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5064)),"/home/fernando/simu-dev/src/app/(dashboard)/permissoes/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,44736)),"/home/fernando/simu-dev/src/app/(dashboard)/layout.tsx"],loading:[()=>Promise.resolve().then(r.bind(r,18067)),"/home/fernando/simu-dev/src/app/(dashboard)/loading.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,19937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,41485,23)),"next/dist/client/components/unauthorized-error"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,71354)),"/home/fernando/simu-dev/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,19937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,41485,23)),"next/dist/client/components/unauthorized-error"]}],c=["/home/fernando/simu-dev/src/app/(dashboard)/permissoes/page.tsx"],m={require:r,loadChunk:()=>Promise.resolve()},u=new n.AppPageRouteModule({definition:{kind:t.RouteKind.APP_PAGE,page:"/(dashboard)/permissoes/page",pathname:"/permissoes",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},34608:(e,s,r)=>{Promise.resolve().then(r.bind(r,83480)),Promise.resolve().then(r.bind(r,4222))},69456:(e,s,r)=>{Promise.resolve().then(r.bind(r,48339)),Promise.resolve().then(r.bind(r,32274))},32274:(e,s,r)=>{"use strict";r.d(s,{SearchForm:()=>d});var n=r(45512),t=r(77722),i=r(16873),a=r(79334),o=r(58009),l=r(90743);function d({route:e}){let s=(0,a.useRouter)(),r=(0,a.useSearchParams)().get("search"),[d,c]=(0,o.useState)(r||""),[m]=(0,l.d7)(d,800);return(0,a.usePathname)(),(0,n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s.push(`/categorias?search=${m}`)},className:"relative w-full",children:[(0,n.jsx)(t.p,{value:d,onChange:e=>c(e.target.value),type:"search",className:"rounded-xl ",placeholder:"Procurar"}),(0,n.jsx)(i.A,{size:24,className:"text-zinc-500 absolute right-2 -translate-y-1/2 top-1/2"})]})}},48339:(e,s,r)=>{"use strict";r.d(s,{TablePermission:()=>_});var n=r(45512),t=r(39400),i=r(94577),a=r(47630),o=r(94520),l=r(3736),d=r(49656),c=r(58009),m=r(61676),u=r(43264),p=r(64186),h=r(30191),x=r(86235),f=r(22403);function j({id:e,children:s}){let[r,i]=(0,c.useState)(!1),a=(0,p.jE)(),{mutateAsync:o,isPending:l}=(0,h.n)({mutationFn:m.e,onSuccess:()=>{f.Ay.success("Permiss\xe3o eliminada com sucesso."),a.invalidateQueries({queryKey:["permission"]}),i(!1)}});async function d(){await o(e)}return(0,n.jsxs)(u.lG,{open:r,onOpenChange:i,children:[(0,n.jsx)(u.zM,{asChild:!0,children:s}),(0,n.jsxs)(u.Cf,{children:[(0,n.jsxs)(u.c7,{children:[(0,n.jsx)(u.L3,{children:"Tem a certeza absoluta?"}),(0,n.jsx)(u.rr,{children:"Tem a certeza que deseja eliminar este dado?"})]}),(0,n.jsxs)(u.Es,{className:"flex  justify-end gap-2",children:[(0,n.jsx)(t.$,{onClick:()=>i(!1),variant:"outline",children:"Cancelar"}),(0,n.jsxs)(t.$,{disabled:l,onClick:d,className:"bg-red-800 hover:bg-red-700 text-white",children:["Confirmar ",l&&(0,n.jsx)(x.A,{className:"animate-spin"})]})]})]})]})}var v=r(78466),b=r(77722),g=r(81914),P=r(6868),y=r(16131);let S=y.Ik({name:y.Yj().nonempty("Permiss\xe3o \xe9 obrigat\xf3rio"),description:y.Yj()});function N({children:e,id:s,permissao:r}){let[i,a]=(0,c.useState)(!1),o=(0,p.jE)(),{mutateAsync:l,isPending:d}=(0,h.n)({mutationFn:v.y,onSuccess:e=>{console.log(e),f.Ay.success("Permiss\xe3o editada com sucesso"),a(!1),o.invalidateQueries({queryKey:["permission"]})},onError:e=>{f.Ay.error("Erro ao editar a permiss\xe3o")}});async function m(e){await l({id:s,data:e})}let{handleSubmit:j,formState:y,register:N,reset:C}=(0,P.mN)({resolver:(0,g.u)(S),defaultValues:{name:r.name,description:r.description}});return(0,n.jsxs)(u.lG,{open:i,onOpenChange:a,children:[(0,n.jsx)(u.zM,{asChild:!0,children:e}),(0,n.jsx)(u.Cf,{children:(0,n.jsxs)("form",{onSubmit:j(m),children:[(0,n.jsx)(u.c7,{children:(0,n.jsx)(u.L3,{children:"Editar Permiss\xe3o"})}),(0,n.jsxs)("div",{className:"my-4 flex flex-col gap-2",children:[(0,n.jsxs)("fieldset",{className:"flex flex-col gap-1",children:[(0,n.jsx)("span",{className:"font-bold text-zinc-800 text-sm",children:"Permiss\xe3o"}),(0,n.jsx)(b.p,{...N("name"),placeholder:"Insira a Permiss\xe3o"})]}),(0,n.jsxs)("fieldset",{className:"flex flex-col gap-1",children:[(0,n.jsx)("span",{className:"font-bold text-zinc-800 text-sm",children:"Descricao"}),(0,n.jsx)(b.p,{...N("description"),placeholder:"Insira a descri\xe7\xe3o da Permiss\xe3o"})]})]}),(0,n.jsxs)(u.Es,{className:"flex  justify-end gap-2",children:[(0,n.jsx)(t.$,{variant:"outline",children:"Cancelar"}),(0,n.jsxs)(t.$,{disabled:d,className:"text-white bg-orange-600 hover:bg-orange-700",children:["Salvar ",d&&(0,n.jsx)(x.A,{className:"animate-spin"})]})]})]})})]})}var C=r(21727),w=r(3271),A=r(89633),E=r(58935);function _({permissions:e}){let[s,r]=(0,c.useState)(!1),[i]=(0,c.useState)(null);(0,p.jE)();let{data:l,isLoading:d,isError:m,error:u}=(0,A.I)({initialData:e,queryKey:["permission"],queryFn:()=>(0,E.l)()});return console.log(l),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(a.XI,{children:[(0,n.jsx)(a.r6,{children:"Lista de Permisi\xf5es de usuarios"}),(0,n.jsx)(a.A0,{children:(0,n.jsxs)(a.Hj,{children:[(0,n.jsx)(a.nd,{className:"w-[100px]",children:"#"}),(0,n.jsx)(a.nd,{children:"Permiss\xe3o"}),(0,n.jsx)(a.nd,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsx)(a.BF,{children:l?.map((e,s)=>n.jsxs(a.Hj,{children:[n.jsx(a.nA,{className:"font-medium",children:s+1}),n.jsx(a.nA,{children:e.name}),n.jsx(a.nA,{children:n.jsxs(C.m_,{children:[n.jsx(w.k$,{children:n.jsx("span",{className:"w-64 truncate cursor-pointer",children:e.description.length>50?e.description.slice(0,50)+"...":e.description})}),n.jsx(w.ZI,{className:"w-96",children:n.jsx("span",{className:"overflow-hidden text-ellipsis",children:e.description})})]})}),n.jsx(a.nA,{children:n.jsx(I,{permissao:e,id:e.id,children:n.jsxs(t.$,{className:"py-0 px-0 h-8 w-8",variant:"outline",children:[n.jsx(o.A,{})," "]})})})]},e.id))})]})})}function I({children:e,id:s,permissao:r}){return(0,n.jsxs)(i.Popover,{children:[(0,n.jsx)(i.PopoverTrigger,{asChild:!0,children:e}),(0,n.jsx)(i.PopoverContent,{className:"w-fit",children:(0,n.jsxs)("div",{className:"gap-4 flex flex-col items-start",children:[(0,n.jsx)(N,{id:s,permissao:r,children:(0,n.jsxs)(t.$,{variant:"outline",children:["Editar ",(0,n.jsx)(l.A,{className:""})]})}),(0,n.jsx)(j,{id:s,children:(0,n.jsxs)(t.$,{variant:"outline",children:["Apagar ",(0,n.jsx)(d.A,{className:"text-red-400"})]})})]})})]})}},4222:(e,s,r)=>{"use strict";r.d(s,{SearchForm:()=>n});let n=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call SearchForm() from the server but SearchForm is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/fernando/simu-dev/src/app/(dashboard)/SearchForm.tsx","SearchForm")},83480:(e,s,r)=>{"use strict";r.d(s,{TablePermission:()=>t});var n=r(46760);let t=(0,n.registerClientReference)(function(){throw Error("Attempted to call TablePermission() from the server but TablePermission is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/fernando/simu-dev/src/app/(dashboard)/permissoes/TablePermission.tsx","TablePermission");(0,n.registerClientReference)(function(){throw Error("Attempted to call PopoverSettingButton() from the server but PopoverSettingButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/fernando/simu-dev/src/app/(dashboard)/permissoes/TablePermission.tsx","PopoverSettingButton")},5064:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>l});var n=r(62740),t=r(99818),i=r(83480),a=r(8214),o=r(4222);async function l({searchParams:e}){let{search:s}=await e;console.log(s);let r=await (0,a.lt)();return s&&console.log(r=r.filter(e=>e.name.toLowerCase().includes(s.toLowerCase()))),(0,n.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,n.jsx)("div",{className:"flex items-end justify-between gap-2",children:(0,n.jsxs)("div",{className:" flex flex-col items-start w-full justify-start max-w-lg r",children:[(0,n.jsx)("h1",{className:"text-zinc-800 font-extrabold text-lg",children:"Permiss\xf5es"}),(0,n.jsx)(o.SearchForm,{route:"permissoes"})]})}),(0,n.jsx)(t.Zp,{children:(0,n.jsx)(t.Wu,{children:(0,n.jsx)(i.TablePermission,{permissions:r})})})]})}},58935:(e,s,r)=>{"use strict";r.d(s,{l:()=>t});var n=r(26248);let t=(0,n.createServerReference)("00951afdad2ece9d796b72691695864030a496558a",n.callServer,void 0,n.findSourceMapURL,"GET_PERMISSION")},78466:(e,s,r)=>{"use strict";r.d(s,{y:()=>t});var n=r(26248);let t=(0,n.createServerReference)("407bcd1ee67aaba979357b5212316a21b9f6e2b2a6",n.callServer,void 0,n.findSourceMapURL,"PUT_PERMISSION")},61676:(e,s,r)=>{"use strict";r.d(s,{e:()=>t});var n=r(26248);let t=(0,n.createServerReference)("4090054eb4151b9e71f928320392e78a033b251cc9",n.callServer,void 0,n.findSourceMapURL,"DELETE_PERMISSION")}};var s=require("../../../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),n=s.X(0,[10,284,512,444,531,953,848,67,324,29,201,674],()=>r(29218));module.exports=n})();