const __vite__fileDeps=["MagicLinkEE-DCazf_P2-YDhgzq9k.js","strapi-B1OJIt6i.js","strapi-COJtagOC.css","SelectRoles-D1xPS-qt-BuUDpQ60.js","useAdminRoles-BVwapBge-BFqdxWw1.js","CreateActionEE-JUvyeAny-CdOpRnPj.js","isNil-BSjeDJLp.js","ListPage-YvkZI4Dz-BA-x0JiT.js","useLicenseLimitNotification-CAQIrlP4-C9p5KtFM.js","users-8N93LH7R-MOwOr-tf.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as g,u as z,j as e,S as R,bv as re,g as ne,k as B,i as b,aY as ie,q as K,aN as J,t as le,a3 as oe,n as W,ap as de,aT as ce,bw as ue,bx as M,by as E,bz as me,P,b as V,bf as ge,aP as I,aQ as i,T as A,F as k,I as $,a4 as pe,G as he,bi as fe,aR as N,bj as be,bk as xe,bA as je,bB as Me,M as x,J as Ee,K as Ae,Z as Se,B as T,Q as j,_ as Q,b1 as ye}from"./strapi-B1OJIt6i.js";import{g as Y}from"./users-8N93LH7R-MOwOr-tf.js";import{M as _e,S as Ce}from"./SelectRoles-D1xPS-qt-BuUDpQ60.js";import"./useAdminRoles-BVwapBge-BFqdxWw1.js";const Le=g.forwardRef((a,l)=>{const{formatMessage:p}=z();return e.jsx(R,{ref:l,startIcon:e.jsx(re,{}),size:"S",...a,children:p({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})})}),Ie=({onToggle:a})=>{const[l,p]=g.useState("create"),[F,w]=g.useState(""),{formatMessage:t}=z(),{toggleNotification:m}=W(),{_unstableFormatAPIError:D,_unstableFormatValidationErrors:S}=K(),c=M(Te,async()=>(await E(()=>import("./ModalForm-B9SUkQ1l-CamjQBT3.js"),[])).ROLE_LAYOUT,{combine(o,d){return[...o,...d]},defaultValue:[]}),v=M(G,async()=>(await E(()=>import("./ModalForm-B9SUkQ1l-CamjQBT3.js"),[])).FORM_INITIAL_VALUES,{combine(o,d){return{...o,...d}},defaultValue:G}),y=M(_e,async()=>(await E(()=>import("./MagicLinkEE-DCazf_P2-YDhgzq9k.js"),__vite__mapDeps([0,1,2,3,4]))).MagicLinkEE),[h]=Me(),_=t({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),U=async(o,{setErrors:d})=>{const r=await h({...o,roles:o.roles??[]});"data"in r?(r.data.registrationToken&&w(r.data.registrationToken),O()):(m({type:"danger",message:D(r.error)}),ye(r.error)&&r.error.name==="ValidationError"&&d(S(r.error)))},O=()=>{L?p(L):a()},{buttonSubmitLabel:C,isDisabled:f,next:L}=ke[l];return y?e.jsx(x.Root,{defaultOpen:!0,onOpenChange:a,children:e.jsxs(x.Content,{children:[e.jsx(x.Header,{children:e.jsx(Ee,{label:_,children:e.jsx(Ae,{isCurrent:!0,children:_})})}),e.jsx(Se,{method:l==="create"?"POST":"PUT",initialValues:v??{},onSubmit:U,validationSchema:Pe,children:({isSubmitting:o})=>e.jsxs(e.Fragment,{children:[e.jsx(x.Body,{children:e.jsxs(k,{direction:"column",alignItems:"stretch",gap:6,children:[l!=="create"&&e.jsx(y,{registrationToken:F}),e.jsxs(T,{children:[e.jsx(A,{variant:"beta",tag:"h2",children:t({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})}),e.jsx(T,{paddingTop:4,children:e.jsx(k,{direction:"column",alignItems:"stretch",gap:1,children:e.jsx(j.Root,{gap:5,children:Re.map(d=>d.map(({size:r,...n})=>e.jsx(j.Item,{col:r,direction:"column",alignItems:"stretch",children:e.jsx(Q,{...n,disabled:f,label:t(n.label),placeholder:t(n.placeholder)})},n.name)))})})})]}),e.jsxs(T,{children:[e.jsx(A,{variant:"beta",tag:"h2",children:t({id:"global.roles",defaultMessage:"User's role"})}),e.jsx(T,{paddingTop:4,children:e.jsxs(j.Root,{gap:5,children:[e.jsx(j.Item,{col:6,xs:12,direction:"column",alignItems:"stretch",children:e.jsx(Ce,{disabled:f})}),c.map(d=>d.map(({size:r,...n})=>e.jsx(j.Item,{col:r,direction:"column",alignItems:"stretch",children:e.jsx(Q,{...n,disabled:f,label:t(n.label),placeholder:n.placeholder?t(n.placeholder):void 0,hint:n.hint?t(n.hint):void 0})},n.name)))]})})]})]})}),e.jsxs(x.Footer,{children:[e.jsx(R,{variant:"tertiary",onClick:a,type:"button",children:t({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),l==="create"?e.jsx(R,{type:"submit",loading:o,children:t(C)}):e.jsx(R,{type:"button",loading:o,onClick:a,children:t(C)})]})]})})]})}):null},G={firstname:"",lastname:"",email:"",roles:[]},Te=[],Re=[[{label:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"string",size:6,required:!0},{label:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"string",size:6}],[{label:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:6,required:!0}]],Pe=ne().shape({firstname:B().trim().required({id:b.required.id,defaultMessage:"This field is required"}).nullable(),lastname:B(),email:B().email(b.email).required({id:b.required.id,defaultMessage:"This field is required"}).nullable(),roles:ie().min(1,{id:b.required.id,defaultMessage:"This field is required"}).required({id:b.required.id,defaultMessage:"This field is required"})}),ke={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}},Fe=()=>{const{_unstableFormatAPIError:a}=K(),[l,p]=g.useState(!1),F=J(s=>s.admin_app.permissions),{allowedActions:{canCreate:w,canDelete:t,canRead:m}}=le(F.settings?.users),D=oe(),{toggleNotification:S}=W(),{formatMessage:c}=z(),{search:v}=de(),[y,h]=g.useState(!1),[_,U]=g.useState([]),{data:O,isError:C,isLoading:f}=ce(ue.parse(v,{ignoreQueryPrefix:!0})),{pagination:L,users:o=[]}=O??{},d=M(Le,async()=>(await E(()=>import("./CreateActionEE-JUvyeAny-CdOpRnPj.js"),__vite__mapDeps([5,1,2,6]))).CreateActionEE),r=we.map(s=>({...s,label:c(s.label)})),n=c({id:"global.users",defaultMessage:"Users"}),H=()=>{p(s=>!s)},[Z]=me(),X=async s=>{try{const u=await Z({ids:s});"error"in u&&S({type:"danger",message:a(u.error)})}catch{S({type:"danger",message:c({id:"global.error",defaultMessage:"An error occurred"})})}},ee=s=>()=>{m&&D(s.toString())},se=s=>async()=>{U([s]),h(!0)},ae=async()=>{await X(_),h(!1)};return d?C?e.jsx(P.Error,{}):e.jsxs(P.Main,{"aria-busy":f,children:[e.jsx(P.Title,{children:c({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"Users"})}),e.jsx(V.Header,{primaryAction:w&&e.jsx(d,{onClick:H}),title:n,subtitle:c({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),e.jsx(V.Action,{startActions:e.jsxs(e.Fragment,{children:[e.jsx(ge,{label:c({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:n})}),e.jsxs(I.Root,{options:De,children:[e.jsx(I.Trigger,{}),e.jsx(I.Popover,{}),e.jsx(I.List,{})]})]})}),e.jsxs(V.Content,{children:[e.jsxs(i.Root,{rows:o,headers:r,children:[e.jsx(i.ActionBar,{}),e.jsxs(i.Content,{children:[e.jsxs(i.Head,{children:[t?e.jsx(i.HeaderCheckboxCell,{}):null,r.map(s=>e.jsx(i.HeaderCell,{...s},s.name))]}),e.jsx(i.Empty,{}),e.jsx(i.Loading,{}),e.jsx(i.Body,{children:o.map(s=>e.jsxs(i.Row,{onClick:ee(s.id),cursor:m?"pointer":"default",children:[t?e.jsx(i.CheckboxCell,{id:s.id}):null,r.map(({cellFormatter:u,name:q,...te})=>e.jsx(i.Cell,{children:typeof u=="function"?u(s,{name:q,...te}):e.jsx(A,{textColor:"neutral800",children:s[q]||"-"})},q)),m||t?e.jsx(i.Cell,{onClick:u=>u.stopPropagation(),children:e.jsxs(k,{justifyContent:"end",children:[m?e.jsx($,{tag:pe,to:s.id.toString(),label:c({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:Y(s)}),variant:"ghost",children:e.jsx(he,{})}):null,t?e.jsx($,{onClick:se(s.id),label:c({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:Y(s)}),variant:"ghost",children:e.jsx(fe,{})}):null]})}):null]},s.id))})]})]}),e.jsxs(N.Root,{...L,children:[e.jsx(N.PageSize,{}),e.jsx(N.Links,{})]})]}),l&&e.jsx(Ie,{onToggle:H}),e.jsx(be.Root,{open:y,onOpenChange:h,children:e.jsx(xe,{onConfirm:ae})})]}):null},we=[{name:"firstname",label:{id:"Settings.permissions.users.firstname",defaultMessage:"Firstname"},sortable:!0},{name:"lastname",label:{id:"Settings.permissions.users.lastname",defaultMessage:"Lastname"},sortable:!0},{name:"email",label:{id:"Settings.permissions.users.email",defaultMessage:"Email"},sortable:!0},{name:"roles",label:{id:"Settings.permissions.users.roles",defaultMessage:"Roles"},sortable:!1,cellFormatter({roles:a}){return e.jsx(A,{textColor:"neutral800",children:a.map(l=>l.name).join(`,
`)})}},{name:"username",label:{id:"Settings.permissions.users.username",defaultMessage:"Username"},sortable:!0},{name:"isActive",label:{id:"Settings.permissions.users.user-status",defaultMessage:"User status"},sortable:!1,cellFormatter({isActive:a}){return e.jsx(k,{children:e.jsx(je,{size:"S",borderWidth:0,background:"transparent",color:"neutral800",variant:a?"success":"danger",children:e.jsx(A,{children:a?"Active":"Inactive"})})})}}],De=[{name:"firstname",label:"Firstname",type:"string"},{name:"lastname",label:"Lastname",type:"string"},{name:"email",label:"Email",type:"email"},{name:"username",label:"Username",type:"string"},{name:"isActive",label:"Active user",type:"boolean"}],ve=()=>{const a=M(Fe,async()=>(await E(()=>import("./ListPage-YvkZI4Dz-BA-x0JiT.js"),__vite__mapDeps([7,1,2,8,6,9,3,4]))).UserListPageEE);return a?e.jsx(a,{}):null},Ve=()=>{const a=J(l=>l.admin_app.permissions.settings?.users.read);return e.jsx(P.Protect,{permissions:a,children:e.jsx(ve,{})})};export{ve as ListPage,Fe as ListPageCE,Ve as ProtectedListPage};
