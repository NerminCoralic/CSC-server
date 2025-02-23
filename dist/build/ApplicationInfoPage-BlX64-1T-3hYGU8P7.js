const __vite__fileDeps=["AdminSeatInfo-Bpyschk4-B_kaVO0t.js","strapi-B1OJIt6i.js","strapi-COJtagOC.css","selectors-BZApelK9-CTw3Cpa4.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{gL as V,gB as K,d as Q,U as v,bo as X,u as R,gM as Z,r as h,aF as J,ce as w,bx as q,t as Y,j as e,b as F,P,S as I,a0 as ee,F as b,T as u,Q as z,c as U,e as O,B as x,M as m,gN as te,gO as ae,I as _,be as ie,$ as se,gP as ne,er as L,X as oe,gn as le,gQ as re,gR as de,gS as ce,gT as ge,gU as ue,gV as pe,gW as me,gX as he,by as xe}from"./strapi-B1OJIt6i.js";import{s as fe}from"./selectors-BZApelK9-CTw3Cpa4.js";const{Axios:Ae,AxiosError:je,CanceledError:Ee,isCancel:Fe,CancelToken:Te,VERSION:Be,all:De,Cancel:ke,isAxiosError:Pe,spread:Ue,toFormData:Oe,AxiosHeaders:_e,HttpStatusCode:$e,formToJSON:Ne,getAdapter:Ve,mergeConfig:He}=V,y=750,E=100,H=["image/jpeg","image/png","image/svg+xml"],Se={id:"Settings.application.customization.modal.upload.error-format",defaultMessage:"Wrong format uploaded (accepted formats only: jpeg, jpg, png, svg)."},$={id:"Settings.application.customization.modal.upload.error-size",defaultMessage:"The file uploaded is too large (max dimension: {dimension}x{dimension}, max file size: {size}KB)"},W=async a=>{if(!H.includes(a.type))throw new A("File format",Se);const i=await new Promise(l=>{const r=new FileReader;r.onload=()=>{const d=new Image;d.onload=()=>{l({width:d.width,height:d.height})},d.src=r.result},r.readAsDataURL(a)});if(!(i.width<=y&&i.height<=y))throw new A("File sizing",$);const s={ext:a.name.split(".").pop(),size:a.size/1e3,name:a.name,url:URL.createObjectURL(a),rawFile:a,width:i.width,height:i.height};if(!(s.size<=E))throw new A("File sizing",$);return s};class A extends Error{displayMessage;constructor(t,i,g){super(t,g),this.displayMessage=i}}const[Ce,T]=K("LogoInput"),N=({canUpdate:a,customLogo:t,defaultLogo:i,hint:g,label:s,onChangeLogo:n})=>{const[l,r]=h.useState(),[d,f]=h.useState(),{formatMessage:c}=R(),M=()=>{r(void 0),f(void 0)};return e.jsx(m.Root,{open:!!d,onOpenChange:j=>{j===!1&&M()},children:e.jsxs(Ce,{setLocalImage:r,localImage:l,goToStep:f,onClose:M,children:[e.jsx(te,{label:s,selectedSlide:0,hint:g,previousLabel:"",nextLabel:"",onNext:()=>{},onPrevious:()=>{},secondaryLabel:t?.name||"logo.png",actions:e.jsxs(ae,{children:[e.jsx(m.Trigger,{children:e.jsx(_,{disabled:!a,onClick:()=>f("upload"),label:c({id:"Settings.application.customization.carousel.change-action",defaultMessage:"Change logo"}),children:e.jsx(ie,{})})}),t?.url&&e.jsx(_,{disabled:!a,onClick:()=>n(null),label:c({id:"Settings.application.customization.carousel.reset-action",defaultMessage:"Reset logo"}),children:e.jsx(se,{})})]}),children:e.jsx(ne,{label:c({id:"Settings.application.customization.carousel-slide.label",defaultMessage:"Logo slide"}),children:e.jsx(x,{maxHeight:"40%",maxWidth:"40%",tag:"img",src:t?.url||i,alt:c({id:"Settings.application.customization.carousel.title",defaultMessage:"Logo"})})})}),e.jsxs(m.Content,{children:[e.jsx(m.Header,{children:e.jsx(m.Title,{children:c(d==="upload"?{id:"Settings.application.customization.modal.upload",defaultMessage:"Upload logo"}:{id:"Settings.application.customization.modal.pending",defaultMessage:"Pending logo"})})}),d==="upload"?e.jsx(Me,{}):e.jsx(Re,{onChangeLogo:n})]})]})})},Me=()=>{const{formatMessage:a}=R();return e.jsxs(L.Root,{variant:"simple",defaultValue:"computer",children:[e.jsx(x,{paddingLeft:8,paddingRight:8,children:e.jsxs(L.List,{"aria-label":a({id:"Settings.application.customization.modal.tab.label",defaultMessage:"How do you want to upload your assets?"}),children:[e.jsx(L.Trigger,{value:"computer",children:a({id:"Settings.application.customization.modal.upload.from-computer",defaultMessage:"From computer"})}),e.jsx(L.Trigger,{value:"url",children:a({id:"Settings.application.customization.modal.upload.from-url",defaultMessage:"From url"})})]})}),e.jsx(L.Content,{value:"computer",children:e.jsx(Ie,{})}),e.jsx(L.Content,{value:"url",children:e.jsx(be,{})})]})},be=()=>{const{formatMessage:a}=R(),[t,i]=h.useState(""),[g,s]=h.useState(),{setLocalImage:n,goToStep:l,onClose:r}=T("URLForm"),d=c=>{i(c.target.value)},f=async c=>{c.preventDefault();const j=new FormData(c.target).get("logo-url");if(j)try{const p=await V.get(j.toString(),{responseType:"blob",timeout:8e3}),S=new File([p.data],p.config.url??"",{type:p.headers["content-type"]}),C=await W(S);n(C),l("pending")}catch(p){if(p instanceof je)s(a({id:"Settings.application.customization.modal.upload.error-network",defaultMessage:"Network error"}));else if(p instanceof A)s(a(p.displayMessage,{size:E,dimension:y}));else throw p}};return e.jsxs("form",{onSubmit:f,children:[e.jsx(x,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6,children:e.jsxs(v.Root,{error:g,name:"logo-url",children:[e.jsx(v.Label,{children:a({id:"Settings.application.customization.modal.upload.from-url.input-label",defaultMessage:"URL"})}),e.jsx(oe,{onChange:d,value:t}),e.jsx(v.Error,{})]})}),e.jsxs(m.Footer,{children:[e.jsx(I,{onClick:r,variant:"tertiary",children:a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),e.jsx(I,{type:"submit",children:a({id:"Settings.application.customization.modal.upload.next",defaultMessage:"Next"})})]})]})},Ie=()=>{const{formatMessage:a}=R(),[t,i]=h.useState(!1),[g,s]=h.useState(),n=h.useRef(null),l=h.useId(),{setLocalImage:r,goToStep:d,onClose:f}=T("ComputerForm"),c=()=>{i(!0)},M=()=>{i(!1)},j=S=>{S.preventDefault(),n.current.click()},p=async()=>{if(M(),!n.current.files)return;const[S]=n.current.files;try{const C=await W(S);r(C),d("pending")}catch(C){if(C instanceof A)s(a(C.displayMessage,{size:E,dimension:y})),n.current.focus();else throw C}};return e.jsxs(e.Fragment,{children:[e.jsx("form",{children:e.jsx(x,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6,children:e.jsx(v.Root,{name:l,error:g,children:e.jsxs(b,{direction:"column",alignItems:"stretch",gap:2,children:[e.jsxs(b,{paddingTop:9,paddingBottom:7,hasRadius:!0,justifyContent:"center",direction:"column",background:t?"primary100":"neutral100",borderColor:t?"primary500":g?"danger600":"neutral300",borderStyle:"dashed",borderWidth:"1px",position:"relative",onDragEnter:c,onDragLeave:M,children:[e.jsx(le,{fill:"primary600",width:"6rem",height:"6rem","aria-hidden":!0}),e.jsx(x,{paddingTop:3,paddingBottom:5,children:e.jsx(u,{variant:"delta",tag:"label",htmlFor:l,children:a({id:"Settings.application.customization.modal.upload.drag-drop",defaultMessage:"Drag and Drop here or"})})}),e.jsx(x,{position:"relative",children:e.jsx(ze,{accept:H.join(", "),type:"file",name:"files",tabIndex:-1,onChange:p,ref:n,id:l})}),e.jsx(I,{type:"button",onClick:j,children:a({id:"Settings.application.customization.modal.upload.cta.browse",defaultMessage:"Browse files"})}),e.jsx(x,{paddingTop:6,children:e.jsx(u,{variant:"pi",textColor:"neutral600",children:a({id:"Settings.application.customization.modal.upload.file-validation",defaultMessage:"Max dimension: {dimension}x{dimension}, Max size: {size}KB"},{size:E,dimension:y})})})]}),e.jsx(v.Error,{})]})})})}),e.jsx(m.Footer,{children:e.jsx(I,{onClick:f,variant:"tertiary",children:a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})})]})},ze=Q(v.Input)`
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`,Re=({onChangeLogo:a})=>{const{formatMessage:t}=R(),{localImage:i,setLocalImage:g,goToStep:s,onClose:n}=T("PendingLogoDialog"),l=()=>{g(void 0),s("upload")},r=()=>{i&&a(i),n()};return e.jsxs(e.Fragment,{children:[e.jsx(m.Body,{children:e.jsxs(x,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6,children:[e.jsxs(b,{justifyContent:"space-between",paddingBottom:6,children:[e.jsxs(b,{direction:"column",alignItems:"flex-start",children:[e.jsx(u,{variant:"pi",fontWeight:"bold",children:t({id:"Settings.application.customization.modal.pending.title",defaultMessage:"Logo ready to upload"})}),e.jsx(u,{variant:"pi",textColor:"neutral500",children:t({id:"Settings.application.customization.modal.pending.subtitle",defaultMessage:"Manage the chosen logo before uploading it"})})]}),e.jsx(I,{onClick:l,variant:"secondary",children:t({id:"Settings.application.customization.modal.pending.choose-another",defaultMessage:"Choose another logo"})})]}),e.jsx(x,{maxWidth:"18rem",children:i?.url?e.jsx(Le,{asset:i}):null})]})}),e.jsxs(m.Footer,{children:[e.jsx(m.Close,{children:e.jsx(I,{onClick:n,variant:"tertiary",children:t({id:"Settings.application.customization.modal.cancel",defaultMessage:"Cancel"})})}),e.jsx(I,{onClick:r,children:t({id:"Settings.application.customization.modal.pending.upload",defaultMessage:"Upload logo"})})]})]})},Le=({asset:a})=>{const{formatMessage:t}=R();return e.jsxs(re,{children:[e.jsx(de,{children:e.jsx(ce,{size:"S",src:a.url})}),e.jsxs(ge,{children:[e.jsxs(ue,{children:[e.jsx(pe,{children:a.name}),e.jsx(me,{children:`${a.ext?.toUpperCase()} - ${a.width}✕${a.height}`})]}),e.jsx(he,{children:t({id:"Settings.application.customization.modal.pending.card-badge",defaultMessage:"image"})})]})]})},ve=()=>null,We=()=>{const{trackUsage:a}=X(),{formatMessage:t}=R(),{logos:i,updateProjectSettings:g}=Z("ApplicationInfoPage"),[s,n]=h.useState({menu:i.menu,auth:i.auth}),{settings:l}=J(fe),r=w("ApplicationInfoPage",o=>o.communityEdition),d=w("ApplicationInfoPage",o=>o.latestStrapiReleaseTag),f=w("ApplicationInfoPage",o=>o.nodeVersion),c=w("ApplicationInfoPage",o=>o.shouldUpdateStrapi),M=w("ApplicationInfoPage",o=>o.strapiVersion),j=q(ve,async()=>(await xe(()=>import("./AdminSeatInfo-Bpyschk4-B_kaVO0t.js"),__vite__mapDeps([0,1,2,3]))).AdminSeatInfoEE),{allowedActions:{canRead:p,canUpdate:S}}=Y(l?l["project-settings"]:{}),C=o=>{o.preventDefault(),g({authLogo:s.auth.custom??null,menuLogo:s.menu.custom??null})},B=o=>D=>{D===null&&a("didClickResetLogo",{logo:o}),n(k=>({...k,[o]:{...k[o],custom:D}}))};if(h.useEffect(()=>{n({menu:i.menu,auth:i.auth})},[i]),!j)return null;const G=s.auth.custom===i.auth.custom&&s.menu.custom===i.menu.custom;return e.jsxs(F.Root,{children:[e.jsx(P.Title,{children:t({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:t({id:"Settings.application.header",defaultMessage:"Application"})})}),e.jsx(P.Main,{children:e.jsxs("form",{onSubmit:C,children:[e.jsx(F.Header,{title:t({id:"Settings.application.title",defaultMessage:"Overview"}),subtitle:t({id:"Settings.application.description",defaultMessage:"Administration panel’s global information"}),primaryAction:S&&e.jsx(I,{disabled:G,type:"submit",startIcon:e.jsx(ee,{}),children:t({id:"global.save",defaultMessage:"Save"})})}),e.jsx(F.Content,{children:e.jsxs(b,{direction:"column",alignItems:"stretch",gap:6,children:[e.jsxs(b,{direction:"column",alignItems:"stretch",gap:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingRight:7,paddingLeft:7,children:[e.jsx(u,{variant:"delta",tag:"h3",children:t({id:"global.details",defaultMessage:"Details"})}),e.jsxs(z.Root,{gap:5,tag:"dl",children:[e.jsxs(z.Item,{col:6,s:12,direction:"column",alignItems:"start",children:[e.jsx(u,{variant:"sigma",textColor:"neutral600",tag:"dt",children:t({id:"Settings.application.strapiVersion",defaultMessage:"strapi version"})}),e.jsxs(b,{gap:3,direction:"column",alignItems:"start",tag:"dd",children:[e.jsxs(u,{children:["v",M]}),c&&e.jsx(U,{href:`https://github.com/strapi/strapi/releases/tag/${d}`,endIcon:e.jsx(O,{}),children:t({id:"Settings.application.link-upgrade",defaultMessage:"Upgrade your admin panel"})})]})]}),e.jsxs(z.Item,{col:6,s:12,direction:"column",alignItems:"start",children:[e.jsx(u,{variant:"sigma",textColor:"neutral600",tag:"dt",children:t({id:"Settings.application.edition-title",defaultMessage:"current plan"})}),e.jsxs(b,{gap:3,direction:"column",alignItems:"start",tag:"dd",children:[e.jsx(u,{children:t({id:"Settings.application.ee-or-ce",defaultMessage:"{communityEdition, select, true {Community Edition} other {Enterprise Edition}}"},{communityEdition:r})}),e.jsx(U,{href:"https://strapi.io/pricing-self-hosted",endIcon:e.jsx(O,{}),children:t({id:"Settings.application.link-pricing",defaultMessage:"See all pricing plans"})})]})]}),e.jsxs(z.Item,{col:6,s:12,direction:"column",alignItems:"start",children:[e.jsx(u,{variant:"sigma",textColor:"neutral600",tag:"dt",children:t({id:"Settings.application.node-version",defaultMessage:"node version"})}),e.jsx(u,{tag:"dd",children:f})]}),e.jsx(j,{})]})]}),p&&e.jsxs(x,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingRight:7,paddingLeft:7,children:[e.jsx(u,{variant:"delta",tag:"h3",children:t({id:"Settings.application.customization",defaultMessage:"Customization"})}),e.jsx(u,{variant:"pi",textColor:"neutral600",children:t({id:"Settings.application.customization.size-details",defaultMessage:"Max dimension: {dimension}×{dimension}, Max file size: {size}KB"},{dimension:y,size:E})}),e.jsxs(z.Root,{paddingTop:4,gap:4,children:[e.jsx(z.Item,{col:6,s:12,direction:"column",alignItems:"stretch",children:e.jsx(N,{canUpdate:S,customLogo:s.menu.custom,defaultLogo:s.menu.default,hint:t({id:"Settings.application.customization.menu-logo.carousel-hint",defaultMessage:"Replace the logo in the main navigation"}),label:t({id:"Settings.application.customization.carousel.menu-logo.title",defaultMessage:"Menu logo"}),onChangeLogo:B("menu")})}),e.jsx(z.Item,{col:6,s:12,direction:"column",alignItems:"stretch",children:e.jsx(N,{canUpdate:S,customLogo:s.auth.custom,defaultLogo:s.auth.default,hint:t({id:"Settings.application.customization.auth-logo.carousel-hint",defaultMessage:"Replace the logo in the authentication pages"}),label:t({id:"Settings.application.customization.carousel.auth-logo.title",defaultMessage:"Auth logo"}),onChangeLogo:B("auth")})})]})]})]})})]})})]})};export{We as ApplicationInfoPage};
