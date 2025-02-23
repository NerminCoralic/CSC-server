import{hd as Ge,hs as Ve,ht as G,hu as ee,hv as ze,hw as We,hx as D,m as Ye,r as f,hy as Je,gq as Ke,hk as Xe,hz as Ze,hA as es,hm as ss,g1 as oe,hB as ts,gs as rs,hC as ns,gC as is,d as U,u as k,j as e,Q as O,F as y,T as b,l as S,g as as,k as se,i as te,P as M,v as w,R as os,a as H,B as P,gg as T,g2 as Q,eI as V,aa as ce,fQ as re,c as cs,H as ls,n as B,a3 as le,bo as de,o as I,x as z,ba as ue,N as he,O as ge,b as E,S as pe,a0 as me,U as v,X as fe,ak as be,aJ as ds,w as xe,q as je,bt as us,Y as hs,aO as gs,t as ps,fa as ms,s as fs,L as bs,a4 as ye,be as xs,bf as js,y as ys,z as vs,A as ve,C as $,V as Re,bX as Rs,bj as Cs,bk as Ms,ab as ne,c_ as Os,D as Ss,E as N,G as ws,I as ks,bi as Es}from"./strapi-B1OJIt6i.js";import{P as x}from"./index-B0mNLVat.js";import{s as ie}from"./sortBy-wbfV7OW1.js";import{_ as Ps}from"./_arrayIncludesWith-BNzMLSv9.js";import{t as As,m as Ls}from"./tail-txXWW6hh.js";import"./_baseMap-BfYur-PA.js";import"./_baseEach-CFKXEg2R.js";var Ds=function(s){Ge(t,s);function t(n,a){var r;return r=s.call(this)||this,r.client=n,r.queries=[],r.result=[],r.observers=[],r.observersMap={},a&&r.setQueries(a),r}var i=t.prototype;return i.onSubscribe=function(){var a=this;this.listeners.length===1&&this.observers.forEach(function(r){r.subscribe(function(o){a.onUpdate(r,o)})})},i.onUnsubscribe=function(){this.listeners.length||this.destroy()},i.destroy=function(){this.listeners=[],this.observers.forEach(function(a){a.destroy()})},i.setQueries=function(a,r){this.queries=a,this.updateObservers(r)},i.getCurrentResult=function(){return this.result},i.getOptimisticResult=function(a){return this.findMatchingObservers(a).map(function(r){return r.observer.getOptimisticResult(r.defaultedQueryOptions)})},i.findMatchingObservers=function(a){var r=this,o=this.observers,l=a.map(function(h){return r.client.defaultQueryObserverOptions(h)}),d=l.flatMap(function(h){var j=o.find(function(R){return R.options.queryHash===h.queryHash});return j!=null?[{defaultedQueryOptions:h,observer:j}]:[]}),p=d.map(function(h){return h.defaultedQueryOptions.queryHash}),g=l.filter(function(h){return!p.includes(h.queryHash)}),u=o.filter(function(h){return!d.some(function(j){return j.observer===h})}),c=g.map(function(h,j){if(h.keepPreviousData){var R=u[j];if(R!==void 0)return{defaultedQueryOptions:h,observer:R}}return{defaultedQueryOptions:h,observer:r.getObserver(h)}}),m=function(j,R){return l.indexOf(j.defaultedQueryOptions)-l.indexOf(R.defaultedQueryOptions)};return d.concat(c).sort(m)},i.getObserver=function(a){var r=this.client.defaultQueryObserverOptions(a),o=this.observersMap[r.queryHash];return o??new Ve(this.client,r)},i.updateObservers=function(a){var r=this;G.batch(function(){var o=r.observers,l=r.findMatchingObservers(r.queries);l.forEach(function(c){return c.observer.setOptions(c.defaultedQueryOptions,a)});var d=l.map(function(c){return c.observer}),p=Object.fromEntries(d.map(function(c){return[c.options.queryHash,c]})),g=d.map(function(c){return c.getCurrentResult()}),u=d.some(function(c,m){return c!==o[m]});o.length===d.length&&!u||(r.observers=d,r.observersMap=p,r.result=g,r.hasListeners()&&(ee(o,d).forEach(function(c){c.destroy()}),ee(d,o).forEach(function(c){c.subscribe(function(m){r.onUpdate(c,m)})}),r.notify()))})},i.onUpdate=function(a,r){var o=this.observers.indexOf(a);o!==-1&&(this.result=ze(this.result,o,r),this.notify())},i.notify=function(){var a=this;G.batch(function(){a.listeners.forEach(function(r){r(a.result)})})},t}(We);function Ts(s){var t=D.useRef(!1),i=D.useState(0),n=i[1],a=Ye(),r=f.useMemo(function(){return s.map(function(p){var g=a.defaultQueryObserverOptions(p);return g.optimisticResults=!0,g})},[s,a]),o=D.useState(function(){return new Ds(a,r)}),l=o[0],d=l.getOptimisticResult(r);return D.useEffect(function(){t.current=!0;var p=l.subscribe(G.batchCalls(function(){t.current&&n(function(g){return g+1})}));return function(){t.current=!1,p()}},[l]),D.useEffect(function(){l.setQueries(r,{listeners:!1})},[r,l]),d}var Is=Je,_s=Ze,qs=Ps,$s=Ke,Ns=Xe,Qs=es,Us=200;function Bs(s,t,i,n){var a=-1,r=_s,o=!0,l=s.length,d=[],p=t.length;if(!l)return d;i&&(t=$s(t,Ns(i))),n?(r=qs,o=!1):t.length>=Us&&(r=Qs,o=!1,t=new Is(t));e:for(;++a<l;){var g=s[a],u=i==null?g:i(g);if(g=n||g!==0?g:0,o&&u===u){for(var c=p;c--;)if(t[c]===u)continue e;d.push(g)}else r(t,u,n)||d.push(g)}return d}var Fs=Bs,Hs=Fs,Gs=ss,Vs=ts,zs=Gs(function(s,t){return Vs(s)?Hs(s,t):[]}),Ws=zs;const Ys=oe(Ws);var Js=rs,Ks=ns;function Xs(s,t,i){return s&&s.length?(t=i||t===void 0?1:Ks(t),Js(s,0,t<0?0:t)):[]}var Zs=Xs;const et=oe(Zs),Ce=f.createContext({}),Me=({children:s,value:t})=>e.jsx(Ce.Provider,{value:t,children:s}),W=()=>f.useContext(Ce);Me.propTypes={children:x.node.isRequired,value:x.object.isRequired};function st(s){switch(s){case"application":return"Application";case"plugin::content-manager":return"Content manager";case"plugin::content-type-builder":return"Content types builder";case"plugin::documentation":return"Documentation";case"plugin::email":return"Email";case"plugin::i18n":return"i18n";case"plugin::upload":return"Upload";case"plugin::users-permissions":return"Users-permissions";default:return ls(s.replace("api::","").replace("plugin::",""))}}const tt=(s,t)=>{const i=Object.keys(t).sort().map(n=>({name:n,isOpen:!1}));return{...s,collapses:i}},ae=is`
  background: ${s=>s.theme.colors.primary100};

  #cog {
    opacity: 1;
  }
`,rt=U(P)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  #cog {
    opacity: 0;
    path {
      fill: ${s=>s.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${s=>s.isActive&&ae}
  &:hover {
    ${ae}
  }
`,nt=U.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:s})=>s.colors.neutral150};
`,Oe=({subCategory:s})=>{const{formatMessage:t}=k(),{onChange:i,onChangeSelectAll:n,onSelectedAction:a,selectedAction:r,modifiedData:o}=W(),l=f.useMemo(()=>Q(o,s.name,{}),[o,s]),d=f.useMemo(()=>Object.values(l).every(c=>c.enabled===!0),[l]),p=f.useMemo(()=>Object.values(l).some(c=>c.enabled===!0)&&!d,[l,d]),g=f.useCallback(({target:{name:c}})=>{n({target:{name:c,value:!d}})},[d,n]),u=f.useCallback(c=>r===c,[r]);return e.jsxs(P,{children:[e.jsxs(y,{justifyContent:"space-between",alignItems:"center",children:[e.jsx(P,{paddingRight:4,children:e.jsx(b,{variant:"sigma",textColor:"neutral600",children:s.label})}),e.jsx(nt,{}),e.jsx(P,{paddingLeft:4,children:e.jsx(ne,{name:s.name,checked:p?"indeterminate":d,onCheckedChange:c=>g({target:{name:s.name,value:c}}),children:t({id:"app.utils.select-all",defaultMessage:"Select all"})})})]}),e.jsx(y,{paddingTop:6,paddingBottom:6,children:e.jsx(O.Root,{gap:2,style:{flex:1},children:s.actions.map(c=>{const m=`${c.name}.enabled`;return e.jsx(O.Item,{col:6,direction:"column",alignItems:"stretch",children:e.jsxs(rt,{isActive:u(c.name),padding:2,hasRadius:!0,children:[e.jsx(ne,{checked:Q(o,m,!1),name:m,onCheckedChange:h=>i({target:{name:m,value:h}}),children:c.label}),e.jsxs("button",{type:"button",onClick:()=>a(c.name),style:{display:"inline-flex",alignItems:"center"},children:[e.jsx(Re,{tag:"span",children:t({id:"app.utils.show-bound-route",defaultMessage:"Show bound route for {route}"},{route:c.name})}),e.jsx(Os,{id:"cog",cursor:"pointer"})]})]})},c.name)})})})]})};Oe.propTypes={subCategory:x.object.isRequired};const Se=({name:s,permissions:t})=>{const i=f.useMemo(()=>ie(Object.values(t.controllers).reduce((n,a,r)=>{const o=`${s}.controllers.${Object.keys(t.controllers)[r]}`,l=ie(Object.keys(a).reduce((d,p)=>[...d,{...a[p],label:p,name:`${o}.${p}`}],[]),"label");return[...n,{actions:l,label:Object.keys(t.controllers)[r],name:o}]},[]),"label"),[s,t]);return e.jsx(P,{padding:6,children:i.map(n=>e.jsx(Oe,{subCategory:n},n.name))})};Se.propTypes={name:x.string.isRequired,permissions:x.object.isRequired};const it={collapses:[]},at=(s,t)=>ce(s,i=>{switch(t.type){case"TOGGLE_COLLAPSE":{i.collapses=s.collapses.map((n,a)=>a===t.index?{...n,isOpen:!n.isOpen}:{...n,isOpen:!1});break}default:return i}}),ot=()=>{const{modifiedData:s}=W(),{formatMessage:t}=k(),[{collapses:i}]=f.useReducer(at,it,n=>tt(n,s));return e.jsx(T.Root,{size:"M",children:e.jsx(y,{direction:"column",alignItems:"stretch",gap:1,children:i.map((n,a)=>e.jsxs(T.Item,{value:n.name,children:[e.jsx(T.Header,{variant:a%2===0?"secondary":void 0,children:e.jsx(T.Trigger,{caretPosition:"right",description:t({id:"users-permissions.Plugin.permissions.plugins.description",defaultMessage:"Define all allowed actions for the {name} plugin."},{name:n.name}),children:st(n.name)})}),e.jsx(T.Content,{children:e.jsx(Se,{permissions:s[n.name],name:n.name})})]},n.name))})})},ct=s=>{switch(s){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},lt=U(P)`
  margin: -1px;
  border-radius: ${({theme:s})=>s.spaces[1]} 0 0 ${({theme:s})=>s.spaces[1]};
`;function Y({route:s}){const{formatMessage:t}=k(),{method:i,handler:n,path:a}=s,r=a?As(a.split("/")):[],[o="",l=""]=n?n.split("."):[],d=ct(s.method);return e.jsxs(y,{direction:"column",alignItems:"stretch",gap:2,children:[e.jsxs(b,{variant:"delta",tag:"h3",children:[t({id:"users-permissions.BoundRoute.title",defaultMessage:"Bound route to"})," ",e.jsx("span",{children:o}),e.jsxs(b,{variant:"delta",textColor:"primary600",children:[".",l]})]}),e.jsxs(y,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0,children:[e.jsx(lt,{background:d.background,borderColor:d.border,padding:2,children:e.jsx(b,{fontWeight:"bold",textColor:d.text,children:i})}),e.jsx(P,{paddingLeft:2,paddingRight:2,children:Ls(r,p=>e.jsxs(b,{textColor:p.includes(":")?"neutral600":"neutral900",children:["/",p]},p))})]})]})}Y.defaultProps={route:{handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}};Y.propTypes={route:x.shape({handler:x.string,method:x.string,path:x.string})};const dt=()=>{const{formatMessage:s}=k(),{selectedAction:t,routes:i}=W(),n=Ys(t.split("."),"controllers"),a=Q(i,n[0]),r=n.slice(1).join("."),o=V(a)?[]:a.filter(l=>l.handler.endsWith(r));return e.jsx(O.Item,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"},direction:"column",alignItems:"stretch",children:t?e.jsx(y,{direction:"column",alignItems:"stretch",gap:2,children:o.map((l,d)=>e.jsx(Y,{route:l},d))}):e.jsxs(y,{direction:"column",alignItems:"stretch",gap:2,children:[e.jsx(b,{variant:"delta",tag:"h3",children:s({id:"users-permissions.Policies.header.title",defaultMessage:"Advanced settings"})}),e.jsx(b,{tag:"p",textColor:"neutral600",children:s({id:"users-permissions.Policies.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"})})]})})},ut=(s,t,i)=>({...s,initialData:t,modifiedData:t,routes:i}),ht={initialData:{},modifiedData:{},routes:{},selectedAction:"",policies:[]},gt=(s,t)=>ce(s,i=>{switch(t.type){case"ON_CHANGE":{const n=t.keys.length,a=t.keys[n-1]==="enabled";if(t.value&&a){const r=et(t.keys,n-1).join(".");i.selectedAction=r}re(i,["modifiedData",...t.keys],t.value);break}case"ON_CHANGE_SELECT_ALL":{const n=["modifiedData",...t.keys],a=Q(s,n,{}),r=Object.keys(a).reduce((o,l)=>(o[l]={...a[l],enabled:t.value},o),{});re(i,n,r);break}case"ON_RESET":{i.modifiedData=s.initialData;break}case"ON_SUBMIT_SUCCEEDED":{i.initialData=s.modifiedData;break}case"SELECT_ACTION":{const{actionToSelect:n}=t;i.selectedAction=n===s.selectedAction?"":n;break}default:return i}}),we=f.forwardRef(({permissions:s,routes:t},i)=>{const{formatMessage:n}=k(),[a,r]=f.useReducer(gt,ht,g=>ut(g,s,t));f.useImperativeHandle(i,()=>({getPermissions(){return{permissions:a.modifiedData}},resetForm(){r({type:"ON_RESET"})},setFormAfterSubmit(){r({type:"ON_SUBMIT_SUCCEEDED"})}}));const p={...a,onChange:({target:{name:g,value:u}})=>r({type:"ON_CHANGE",keys:g.split("."),value:u==="empty__string_value"?"":u}),onChangeSelectAll:({target:{name:g,value:u}})=>r({type:"ON_CHANGE_SELECT_ALL",keys:g.split("."),value:u}),onSelectedAction:g=>r({type:"SELECT_ACTION",actionToSelect:g})};return e.jsx(Me,{value:p,children:e.jsxs(O.Root,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0",children:[e.jsx(O.Item,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,direction:"column",alignItems:"stretch",children:e.jsxs(y,{direction:"column",alignItems:"stretch",gap:6,children:[e.jsxs(y,{direction:"column",alignItems:"stretch",gap:2,children:[e.jsx(b,{variant:"delta",tag:"h2",children:n({id:S("Plugins.header.title"),defaultMessage:"Permissions"})}),e.jsx(b,{tag:"p",textColor:"neutral600",children:n({id:S("Plugins.header.description"),defaultMessage:"Only actions bound by a route are listed below."})})]}),e.jsx(ot,{})]})}),e.jsx(dt,{})]})})});we.propTypes={permissions:x.object.isRequired,routes:x.object.isRequired};const ke=f.memo(we),Ee=as().shape({name:se().required(te.required.id),description:se().required(te.required.id)}),pt=s=>Object.keys(s).reduce((t,i)=>{const n=s[i].controllers,a=Object.keys(n).reduce((r,o)=>(V(n[o])||(r[o]=n[o]),r),{});return V(a)||(t[i]={controllers:a}),t},{}),Pe=()=>{const{toggleNotification:s}=B(),{get:t}=I(),{formatAPIError:i}=je(S),[{data:n,isLoading:a,error:r,refetch:o},{data:l,isLoading:d,error:p,refetch:g}]=Ts([{queryKey:["users-permissions","permissions"],async queryFn(){const{data:{permissions:m}}=await t("/users-permissions/permissions");return m}},{queryKey:["users-permissions","routes"],async queryFn(){const{data:{routes:m}}=await t("/users-permissions/routes");return m}}]),u=async()=>{await Promise.all([o(),g()])};f.useEffect(()=>{r&&s({type:"danger",message:i(r)})},[s,r,i]),f.useEffect(()=>{p&&s({type:"danger",message:i(p)})},[s,p,i]);const c=a||d;return{permissions:n?pt(n):{},routes:l??{},getData:u,isLoading:c}},mt=()=>{const{formatMessage:s}=k(),{toggleNotification:t}=B(),i=le(),{isLoading:n,permissions:a,routes:r}=Pe(),{trackUsage:o}=de(),l=f.useRef(),{post:d}=I(),p=z(u=>d("/users-permissions/roles",u),{onError(){t({type:"danger",message:s({id:"notification.error",defaultMessage:"An error occurred"})})},onSuccess(){o("didCreateRole"),t({type:"success",message:s({id:S("Settings.roles.created"),defaultMessage:"Role created"})}),i(-1)}}),g=async u=>{const c=l.current.getPermissions();await p.mutate({...u,...c,users:[]})};return e.jsxs(ue,{children:[e.jsx(M.Title,{children:s({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"Roles"})}),e.jsx(he,{enableReinitialize:!0,initialValues:{name:"",description:""},onSubmit:g,validationSchema:Ee,children:({handleSubmit:u,values:c,handleChange:m,errors:h})=>e.jsxs(ge,{noValidate:!0,onSubmit:u,children:[e.jsx(E.Header,{primaryAction:!n&&e.jsx(pe,{type:"submit",loading:p.isLoading,startIcon:e.jsx(me,{}),children:s({id:"global.save",defaultMessage:"Save"})}),title:s({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:s({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"})}),e.jsx(E.Content,{children:e.jsxs(y,{background:"neutral0",direction:"column",alignItems:"stretch",gap:7,hasRadius:!0,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,shadow:"filterShadow",children:[e.jsxs(y,{direction:"column",alignItems:"stretch",children:[e.jsx(b,{variant:"delta",tag:"h2",children:s({id:S("EditPage.form.roles"),defaultMessage:"Role details"})}),e.jsxs(O.Root,{gap:4,children:[e.jsx(O.Item,{col:6,direction:"column",alignItems:"stretch",children:e.jsxs(v.Root,{name:"name",error:h?.name?s({id:h.name,defaultMessage:"Name is required"}):!1,required:!0,children:[e.jsx(v.Label,{children:s({id:"global.name",defaultMessage:"Name"})}),e.jsx(fe,{value:c.name||"",onChange:m}),e.jsx(v.Error,{})]})}),e.jsx(O.Item,{col:6,direction:"column",alignItems:"stretch",children:e.jsxs(v.Root,{name:"description",error:h?.description?s({id:h.description,defaultMessage:"Description is required"}):!1,required:!0,children:[e.jsx(v.Label,{children:s({id:"global.description",defaultMessage:"Description"})}),e.jsx(be,{value:c.description||"",onChange:m}),e.jsx(v.Error,{})]})})]})]}),!n&&e.jsx(ke,{ref:l,permissions:a,routes:r})]})})]})})]})},ft=()=>e.jsx(M.Protect,{permissions:w.createRole,children:e.jsx(mt,{})}),bt=()=>{const{formatMessage:s}=k(),{toggleNotification:t}=B(),{params:{id:i}}=ds("/settings/users-permissions/roles/:id"),{get:n}=I(),{isLoading:a,routes:r}=Pe(),{data:o,isLoading:l,refetch:d}=xe(["users-permissions","role",i],async()=>{const{data:{role:h}}=await n(`/users-permissions/roles/${i}`);return h}),p=f.useRef(),{put:g}=I(),{formatAPIError:u}=je(),c=z(h=>g(`/users-permissions/roles/${i}`,h),{onError(h){t({type:"danger",message:u(h)})},async onSuccess(){t({type:"success",message:s({id:S("Settings.roles.created"),defaultMessage:"Role edited"})}),await d()}}),m=async h=>{const j=p.current.getPermissions();await c.mutate({...h,...j,users:[]})};return l?e.jsx(M.Loading,{}):e.jsxs(ue,{children:[e.jsx(M.Title,{children:s({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"Roles"})}),e.jsx(he,{enableReinitialize:!0,initialValues:{name:o.name,description:o.description},onSubmit:m,validationSchema:Ee,children:({handleSubmit:h,values:j,handleChange:R,errors:A})=>e.jsxs(ge,{noValidate:!0,onSubmit:h,children:[e.jsx(E.Header,{primaryAction:a?null:e.jsx(pe,{disabled:o.code==="strapi-super-admin",type:"submit",loading:c.isLoading,startIcon:e.jsx(me,{}),children:s({id:"global.save",defaultMessage:"Save"})}),title:o.name,subtitle:o.description,navigationAction:e.jsx(us,{fallback:".."})}),e.jsx(E.Content,{children:e.jsxs(y,{background:"neutral0",direction:"column",alignItems:"stretch",gap:7,hasRadius:!0,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,shadow:"filterShadow",children:[e.jsxs(y,{direction:"column",alignItems:"stretch",gap:4,children:[e.jsx(b,{variant:"delta",tag:"h2",children:s({id:S("EditPage.form.roles"),defaultMessage:"Role details"})}),e.jsxs(O.Root,{gap:4,children:[e.jsx(O.Item,{col:6,direction:"column",alignItems:"stretch",children:e.jsxs(v.Root,{name:"name",error:A?.name?s({id:A.name,defaultMessage:"Name is required"}):!1,required:!0,children:[e.jsx(v.Label,{children:s({id:"global.name",defaultMessage:"Name"})}),e.jsx(fe,{value:j.name||"",onChange:R}),e.jsx(v.Error,{})]})}),e.jsx(O.Item,{col:6,direction:"column",alignItems:"stretch",children:e.jsxs(v.Root,{name:"description",error:A?.description?s({id:A.description,defaultMessage:"Description is required"}):!1,required:!0,children:[e.jsx(v.Label,{children:s({id:"global.description",defaultMessage:"Description"})}),e.jsx(be,{value:j.description||"",onChange:R}),e.jsx(v.Error,{})]})})]})]}),!a&&e.jsx(ke,{ref:p,permissions:o.permissions,routes:r})]})})]})})]})},xt=()=>e.jsx(M.Protect,{permissions:w.updateRole,children:e.jsx(bt,{})}),jt=U(cs)`
  align-items: center;
  height: 3.2rem;
  width: 3.2rem;
  display: flex;
  justify-content: center;
  padding: ${({theme:s})=>`${s.spaces[2]}`};

  svg {
    height: 1.6rem;
    width: 1.6rem;

    path {
      fill: ${({theme:s})=>s.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:s})=>s.colors.neutral800};
      }
    }
  }
`,J=({sortedRoles:s,canDelete:t,canUpdate:i,setRoleToDelete:n,onDelete:a})=>{const{formatMessage:r}=k(),o=le(),[l,d]=a,p=u=>t&&!["public","authenticated"].includes(u.type),g=u=>{n(u),d(!l)};return e.jsx(Ss,{children:s?.map(u=>e.jsxs(ve,{cursor:"pointer",onClick:()=>o(u.id.toString()),children:[e.jsx(N,{width:"20%",children:e.jsx(b,{children:u.name})}),e.jsx(N,{width:"50%",children:e.jsx(b,{children:u.description})}),e.jsx(N,{width:"30%",children:e.jsx(b,{children:r({id:"Roles.RoleRow.user-count",defaultMessage:"{number, plural, =0 {# user} one {# user} other {# users}}"},{number:u.nb_users})})}),e.jsx(N,{children:e.jsxs(y,{justifyContent:"end",onClick:c=>c.stopPropagation(),children:[i?e.jsx(jt,{tag:ye,to:u.id.toString(),"aria-label":r({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:`${u.name}`}),children:e.jsx(ws,{})}):null,p(u)&&e.jsx(ks,{onClick:()=>g(u.id.toString()),variant:"ghost",label:r({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${u.name}`}),children:e.jsx(Es,{})})]})})]},u.name))})};J.defaultProps={canDelete:!1,canUpdate:!1};J.propTypes={onDelete:x.array.isRequired,setRoleToDelete:x.func.isRequired,sortedRoles:x.array.isRequired,canDelete:x.bool,canUpdate:x.bool};const yt=()=>{const{trackUsage:s}=de(),{formatMessage:t,locale:i}=k(),{toggleNotification:n}=B(),{notifyStatus:a}=hs(),[{query:r}]=gs(),o=r?._q||"",[l,d]=f.useState(!1),[p,g]=f.useState(),{del:u,get:c}=I(),{isLoading:m,allowedActions:{canRead:h,canDelete:j,canCreate:R,canUpdate:A}}=ps({create:w.createRole,read:w.readRoles,update:w.updateRole,delete:w.deleteRole}),{isLoading:Ae,data:{roles:K},isFetching:Le,refetch:De}=xe("get-roles",()=>qe(n,t,a),{initialData:{},enabled:h}),{contains:X}=ms(i,{sensitivity:"base"}),Z=fs(i,{sensitivity:"base"}),Te=Ae||Le||m,Ie=()=>{d(!l)},_e=async(C,L,F)=>{try{await u(`/users-permissions/roles/${C}`)}catch{F({type:"danger",message:L({id:"notification.error",defaultMessage:"An error occured"})})}},qe=async(C,L,F)=>{try{const{data:q}=await c("/users-permissions/roles");return F("The roles have loaded successfully"),q}catch(q){throw C({type:"danger",message:L({id:"notification.error",defaultMessage:"An error occurred"})}),new Error(q)}},$e={roles:{id:S("Roles.empty"),defaultMessage:"You don't have any roles yet."},search:{id:S("Roles.empty.search"),defaultMessage:"No roles match the search."}},Ne=t({id:"global.roles",defaultMessage:"Roles"}),Qe=z(C=>_e(C,t,n),{async onSuccess(){await De()}}),Ue=async()=>{await Qe.mutateAsync(p),d(!l)},_=(K||[]).filter(C=>X(C.name,o)||X(C.description,o)).sort((C,L)=>Z.compare(C.name,L.name)||Z.compare(C.description,L.description)),Be=o&&!_.length?"search":"roles",Fe=4,He=(K?.length||0)+1;return Te?e.jsx(M.Loading,{}):e.jsxs(E.Root,{children:[e.jsx(M.Title,{children:t({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:Ne})}),e.jsxs(M.Main,{children:[e.jsx(E.Header,{title:t({id:"global.roles",defaultMessage:"Roles"}),subtitle:t({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),primaryAction:R?e.jsx(bs,{to:"new",tag:ye,onClick:()=>s("willCreateRole"),startIcon:e.jsx(xs,{}),size:"S",children:t({id:S("List.button.roles"),defaultMessage:"Add new role"})}):null}),e.jsx(E.Action,{startActions:e.jsx(js,{label:t({id:"app.component.search.label",defaultMessage:"Search"})})}),e.jsxs(E.Content,{children:[!h&&e.jsx(M.NoPermissions,{}),h&&_&&_?.length?e.jsxs(ys,{colCount:Fe,rowCount:He,children:[e.jsx(vs,{children:e.jsxs(ve,{children:[e.jsx($,{children:e.jsx(b,{variant:"sigma",textColor:"neutral600",children:t({id:"global.name",defaultMessage:"Name"})})}),e.jsx($,{children:e.jsx(b,{variant:"sigma",textColor:"neutral600",children:t({id:"global.description",defaultMessage:"Description"})})}),e.jsx($,{children:e.jsx(b,{variant:"sigma",textColor:"neutral600",children:t({id:"global.users",defaultMessage:"Users"})})}),e.jsx($,{children:e.jsx(Re,{children:t({id:"global.actions",defaultMessage:"Actions"})})})]})}),e.jsx(J,{sortedRoles:_,canDelete:j,canUpdate:A,permissions:w,setRoleToDelete:g,onDelete:[l,d]})]}):e.jsx(Rs,{content:t($e[Be])})]}),e.jsx(Cs.Root,{open:l,onOpenChange:Ie,children:e.jsx(Ms,{onConfirm:Ue})})]})]})},vt=()=>e.jsx(M.Protect,{permissions:w.accessRoles,children:e.jsx(yt,{})}),Et=()=>e.jsx(M.Protect,{permissions:w.accessRoles,children:e.jsxs(os,{children:[e.jsx(H,{index:!0,element:e.jsx(vt,{})}),e.jsx(H,{path:"new",element:e.jsx(ft,{})}),e.jsx(H,{path:":id",element:e.jsx(xt,{})})]})});export{Et as default};
