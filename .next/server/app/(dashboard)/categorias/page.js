(()=>{var e={};e.id=799,e.ids=[799],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},17710:(e,r,s)=>{"use strict";s.r(r),s.d(r,{GlobalError:()=>o.a,__next_app__:()=>h,pages:()=>d,routeModule:()=>x,tree:()=>c});var a=s(70260),t=s(28203),n=s(25155),o=s.n(n),i=s(67292),l={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);s.d(r,l);let c=["",{children:["(dashboard)",{children:["categorias",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,13364)),"/home/fernando/simu-dev/src/app/(dashboard)/categorias/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,44736)),"/home/fernando/simu-dev/src/app/(dashboard)/layout.tsx"],loading:[()=>Promise.resolve().then(s.bind(s,18067)),"/home/fernando/simu-dev/src/app/(dashboard)/loading.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,19937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(s.t.bind(s,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(s.t.bind(s,41485,23)),"next/dist/client/components/unauthorized-error"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,71354)),"/home/fernando/simu-dev/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,19937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(s.t.bind(s,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(s.t.bind(s,41485,23)),"next/dist/client/components/unauthorized-error"]}],d=["/home/fernando/simu-dev/src/app/(dashboard)/categorias/page.tsx"],h={require:s,loadChunk:()=>Promise.resolve()},x=new a.AppPageRouteModule({definition:{kind:t.RouteKind.APP_PAGE,page:"/(dashboard)/categorias/page",pathname:"/categorias",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},57406:(e,r,s)=>{Promise.resolve().then(s.bind(s,65758)),Promise.resolve().then(s.bind(s,61625)),Promise.resolve().then(s.bind(s,4222))},40102:(e,r,s)=>{Promise.resolve().then(s.bind(s,69606)),Promise.resolve().then(s.bind(s,4149)),Promise.resolve().then(s.bind(s,32274))},32274:(e,r,s)=>{"use strict";s.d(r,{SearchForm:()=>c});var a=s(45512),t=s(77722),n=s(16873),o=s(79334),i=s(58009),l=s(90743);function c({route:e}){let r=(0,o.useRouter)(),s=(0,o.useSearchParams)().get("search"),[c,d]=(0,i.useState)(s||""),[h]=(0,l.d7)(c,800);return(0,o.usePathname)(),(0,a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r.push(`/categorias?search=${h}`)},className:"relative w-full",children:[(0,a.jsx)(t.p,{value:c,onChange:e=>d(e.target.value),type:"search",className:"rounded-xl ",placeholder:"Procurar"}),(0,a.jsx)(n.A,{size:24,className:"text-zinc-500 absolute right-2 -translate-y-1/2 top-1/2"})]})}},69606:(e,r,s)=>{"use strict";s.d(r,{DialogSaveCategory:()=>j});var a=s(45512),t=s(39400),n=s(43264),o=s(77722),i=s(16131),l=s(58009),c=s(81914),d=s(6868),h=s(64186),x=s(30191),m=s(26248);let u=(0,m.createServerReference)("4029f904a19a6390d02124d70ac1e6b932133abe02",m.callServer,void 0,m.findSourceMapURL,"POST_CATEGORY");var p=s(22403),g=s(86235);let f=i.Ik({name:i.Yj().nonempty("Categoria \xe9 obrigat\xf3ria"),description:i.Yj()});function j({children:e}){let[r,s]=(0,l.useState)(!1),{handleSubmit:i,formState:m,register:j,reset:v}=(0,d.mN)({resolver:(0,c.u)(f)}),b=(0,h.jE)(),{mutateAsync:C,isPending:y}=(0,x.n)({mutationFn:u,onSuccess:()=>{p.Ay.success("Categoria salva com sucesso"),v(),b.invalidateQueries({queryKey:["get-categories"]}),s(!1)}});return(0,a.jsxs)(n.lG,{open:r,onOpenChange:s,children:[(0,a.jsx)(n.zM,{asChild:!0,children:e}),(0,a.jsx)(n.Cf,{children:(0,a.jsxs)("form",{onSubmit:i(function(e){C(e)}),children:[(0,a.jsx)(n.c7,{children:(0,a.jsx)(n.L3,{children:"Cadastrar nova categoria"})}),(0,a.jsxs)("div",{className:"my-4 flex flex-col gap-2",children:[(0,a.jsxs)("fieldset",{className:"flex flex-col gap-1",children:[(0,a.jsx)("span",{className:"font-bold text-zinc-800 text-sm",children:"Categoria"}),(0,a.jsx)(o.p,{...j("name"),placeholder:"Insira a categoria"}),m.errors.name&&(0,a.jsx)("span",{className:"text-red-500 text-sm",children:m.errors.name.message})]}),(0,a.jsxs)("fieldset",{className:"flex flex-col gap-1",children:[(0,a.jsx)("span",{className:"font-bold text-zinc-800 text-sm",children:"Descri\xe7\xe3o"}),(0,a.jsx)(o.p,{...j("description"),placeholder:"Insira a descri\xe7\xe3o da categoria"}),m.errors.description&&(0,a.jsx)("span",{className:"text-red-500 text-sm",children:m.errors.description.message})]})]}),(0,a.jsxs)(n.Es,{className:"flex  justify-end gap-2",children:[(0,a.jsx)(t.$,{variant:"outline",children:"Cancelar"}),(0,a.jsxs)(t.$,{className:"text-white bg-orange-600 hover:bg-orange-700 flex items-center",children:["Salvar ",y&&(0,a.jsx)(g.A,{className:"animate-spin"})]})]})]})})]})}},4149:(e,r,s)=>{"use strict";s.d(r,{TableCategory:()=>R});var a=s(45512),t=s(39400),n=s(94577),o=s(47630),i=s(94520),l=s(3736),c=s(49656),d=s(58009),h=s(66039),x=s(43264),m=s(64186),u=s(30191),p=s(86235),g=s(22403);function f({id:e,children:r}){let[s,n]=(0,d.useState)(!1),o=(0,m.jE)(),{mutateAsync:i,isPending:l}=(0,u.n)({mutationFn:h.R,onSuccess:()=>{g.Ay.success("Categoria eliminada com sucesso"),o.invalidateQueries({queryKey:["get-categories"]}),n(!1)}});async function c(){await i(e)}return(0,a.jsxs)(x.lG,{open:s,onOpenChange:n,children:[(0,a.jsx)(x.zM,{asChild:!0,children:r}),(0,a.jsxs)(x.Cf,{children:[(0,a.jsxs)(x.c7,{children:[(0,a.jsx)(x.L3,{children:"Tem a certeza absoluta?"}),(0,a.jsx)(x.rr,{children:"Tem a certeza que deseja eliminar este dado?"})]}),(0,a.jsxs)(x.Es,{className:"flex  justify-end gap-2",children:[(0,a.jsx)(t.$,{onClick:()=>n(!1),variant:"outline",children:"Cancelar"}),(0,a.jsxs)(t.$,{disabled:l,onClick:c,className:"bg-red-800 hover:bg-red-700 text-white",children:["Confirmar ",l&&(0,a.jsx)(p.A,{className:"animate-spin"})]})]})]})]})}var j=s(39362),v=s(77722),b=s(81914),C=s(6868),y=s(16131);let S=y.Ik({name:y.Yj().nonempty("Categoria \xe9 obrigat\xf3ria"),description:y.Yj()});function N({children:e,id:r,categoria:s}){let[n,o]=(0,d.useState)(!1),i=(0,m.jE)(),{mutateAsync:l,isPending:c}=(0,u.n)({mutationFn:j.h,onSuccess:e=>{console.log(e),g.Ay.success("Categoria editada com sucesso"),o(!1),i.invalidateQueries({queryKey:["get-categories"]})},onError:e=>{g.Ay.error("Erro ao editar a categoria")}});async function h(e){await l({id:r,data:e})}let{handleSubmit:f,formState:y,register:N,reset:P}=(0,C.mN)({resolver:(0,b.u)(S),defaultValues:{name:s.name,description:s.description}});return(0,a.jsxs)(x.lG,{open:n,onOpenChange:o,children:[(0,a.jsx)(x.zM,{asChild:!0,children:e}),(0,a.jsx)(x.Cf,{children:(0,a.jsxs)("form",{onSubmit:f(h),children:[(0,a.jsx)(x.c7,{children:(0,a.jsx)(x.L3,{children:"Editar categoria categoria"})}),(0,a.jsxs)("div",{className:"my-4 flex flex-col gap-2",children:[(0,a.jsxs)("fieldset",{className:"flex flex-col gap-1",children:[(0,a.jsx)("span",{className:"font-bold text-zinc-800 text-sm",children:"Categoria"}),(0,a.jsx)(v.p,{...N("name"),placeholder:"Insira a categoria"})]}),(0,a.jsxs)("fieldset",{className:"flex flex-col gap-1",children:[(0,a.jsx)("span",{className:"font-bold text-zinc-800 text-sm",children:"Descricao"}),(0,a.jsx)(v.p,{...N("description"),placeholder:"Insira a descri\xe7\xe3o da categoria"})]})]}),(0,a.jsxs)(x.Es,{className:"flex  justify-end gap-2",children:[(0,a.jsx)(t.$,{variant:"outline",children:"Cancelar"}),(0,a.jsxs)(t.$,{disabled:c,className:"text-white bg-orange-600 hover:bg-orange-700",children:["Salvar ",c&&(0,a.jsx)(p.A,{className:"animate-spin"})]})]})]})})]})}var P=s(21727),A=s(3271),E=s(89633),w=s(90821);function R({categories:e}){let[r,s]=(0,d.useState)(!1),[n]=(0,d.useState)(null);(0,m.jE)();let{data:l,isLoading:c,isError:h,error:x}=(0,E.I)({initialData:e,queryKey:["get-categories"],queryFn:w.g});return console.log(l),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(o.XI,{children:[(0,a.jsx)(o.r6,{children:"Lista de Categorias de seguros"}),(0,a.jsx)(o.A0,{children:(0,a.jsxs)(o.Hj,{children:[(0,a.jsx)(o.nd,{className:"w-[100px]",children:"#"}),(0,a.jsx)(o.nd,{children:"Categoria"}),(0,a.jsx)(o.nd,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsx)(o.BF,{children:l.map((e,r)=>(0,a.jsxs)(o.Hj,{children:[(0,a.jsx)(o.nA,{className:"font-medium",children:r+1}),(0,a.jsx)(o.nA,{children:e.name}),(0,a.jsx)(o.nA,{children:(0,a.jsxs)(P.m_,{children:[(0,a.jsx)(A.k$,{children:(0,a.jsx)("span",{className:"w-64 truncate cursor-pointer",children:e.description.length>50?e.description.slice(0,50)+"...":e.description})}),(0,a.jsx)(A.ZI,{className:"w-96",children:(0,a.jsx)("span",{className:"overflow-hidden text-ellipsis",children:e.description})})]})}),(0,a.jsx)(o.nA,{children:(0,a.jsx)(T,{category:e,id:e.id,children:(0,a.jsxs)(t.$,{className:"py-0 px-0 h-8 w-8",variant:"outline",children:[(0,a.jsx)(i.A,{})," "]})})})]},e.id))})]})})}function T({children:e,id:r,category:s}){return(0,a.jsxs)(n.Popover,{children:[(0,a.jsx)(n.PopoverTrigger,{asChild:!0,children:e}),(0,a.jsx)(n.PopoverContent,{className:"w-fit",children:(0,a.jsxs)("div",{className:"gap-4 flex flex-col items-start",children:[(0,a.jsx)(N,{id:r,categoria:s,children:(0,a.jsxs)(t.$,{variant:"outline",children:["Editar ",(0,a.jsx)(l.A,{className:""})]})}),(0,a.jsx)(f,{id:r,children:(0,a.jsxs)(t.$,{variant:"outline",children:["Apagar ",(0,a.jsx)(c.A,{className:"text-red-400"})]})})]})})]})}},58057:(e,r,s)=>{"use strict";s.d(r,{A:()=>a});let a=(0,s(83238).A)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]])},4222:(e,r,s)=>{"use strict";s.d(r,{SearchForm:()=>a});let a=(0,s(46760).registerClientReference)(function(){throw Error("Attempted to call SearchForm() from the server but SearchForm is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/fernando/simu-dev/src/app/(dashboard)/SearchForm.tsx","SearchForm")},65758:(e,r,s)=>{"use strict";s.d(r,{DialogSaveCategory:()=>a});let a=(0,s(46760).registerClientReference)(function(){throw Error("Attempted to call DialogSaveCategory() from the server but DialogSaveCategory is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/fernando/simu-dev/src/app/(dashboard)/categorias/DialogSaveCategory.tsx","DialogSaveCategory")},61625:(e,r,s)=>{"use strict";s.d(r,{TableCategory:()=>t});var a=s(46760);let t=(0,a.registerClientReference)(function(){throw Error("Attempted to call TableCategory() from the server but TableCategory is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/fernando/simu-dev/src/app/(dashboard)/categorias/TableCategory.tsx","TableCategory");(0,a.registerClientReference)(function(){throw Error("Attempted to call PopoverSettingButton() from the server but PopoverSettingButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/fernando/simu-dev/src/app/(dashboard)/categorias/TableCategory.tsx","PopoverSettingButton")},13364:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>h});var a=s(62740),t=s(88380),n=s(99818),o=s(58057),i=s(61625),l=s(65758),c=s(8214),d=s(4222);async function h({searchParams:e}){let{search:r}=await e;console.log(r);let s=await (0,c.gX)();return r&&console.log(s=s.filter(e=>e.name.toLowerCase().includes(r.toLowerCase()))),(0,a.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,a.jsxs)("div",{className:"flex items-end justify-between gap-2",children:[(0,a.jsxs)("div",{className:" flex flex-col items-start w-full justify-start max-w-lg r",children:[(0,a.jsx)("h1",{className:"text-zinc-800 font-extrabold text-lg",children:"Categorias"}),(0,a.jsx)(d.SearchForm,{route:"categorias"})]}),(0,a.jsx)(l.DialogSaveCategory,{children:(0,a.jsxs)(t.$,{className:"bg-[#e67d06] hover:bg-[#a74e0b]",children:[(0,a.jsx)("span",{className:"hidden md:flex items-start",children:"Cadastrar"})," ",(0,a.jsx)(o.A,{})]})})]}),(0,a.jsx)(n.Zp,{children:(0,a.jsx)(n.Wu,{children:(0,a.jsx)(i.TableCategory,{categories:s})})})]})}},90821:(e,r,s)=>{"use strict";s.d(r,{g:()=>t});var a=s(26248);let t=(0,a.createServerReference)("00d7905460b8a20f588d2a56cbf2c37d74d1056993",a.callServer,void 0,a.findSourceMapURL,"GET_CATEGORIES")},39362:(e,r,s)=>{"use strict";s.d(r,{h:()=>t});var a=s(26248);let t=(0,a.createServerReference)("40109e45d1a6e14a358f1a179ad3b1f91eb1df72eb",a.callServer,void 0,a.findSourceMapURL,"PUT_CATEGORY")},66039:(e,r,s)=>{"use strict";s.d(r,{R:()=>t});var a=s(26248);let t=(0,a.createServerReference)("405e4be4d9adfac20e989d5559ffc367f495672f53",a.callServer,void 0,a.findSourceMapURL,"DELETE_CATEGORY")}};var r=require("../../../webpack-runtime.js");r.C(e);var s=e=>r(r.s=e),a=r.X(0,[10,284,512,444,531,953,848,67,324,29,201,674],()=>s(17710));module.exports=a})();