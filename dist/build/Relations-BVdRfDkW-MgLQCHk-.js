import{hd as we,r as O,he as Te,hf as se,cp as Re,cy as Ce,u as ee,aO as ge,cx as ve,bS as ie,aV as te,co as le,az as xe,j as m,F as V,bK as Me,$ as Oe,ew as F,d as K,n as ze,hg as De,U as Y,aW as Le,aX as Ee,T as be,cB as Se,V as ce,a9 as Fe,B,I as de,eS as ke,b6 as Pe,a4 as $e,bV as je,cE as ye,c as Ae}from"./strapi-B1OJIt6i.js";import{u as Ne,I as We,D as Ve}from"./useDragAndDrop-DJ6jqvZN-CuR3u7gf.js";import{u as Ue,g as ae,a as He}from"./relations-BtmMFBpM-FDxF0F3v.js";import{g as qe}from"./getEmptyImage-CjqolaH3.js";var ue=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Be(n,t){return!!(n===t||ue(n)&&ue(t))}function Ke(n,t){if(n.length!==t.length)return!1;for(var o=0;o<n.length;o++)if(!Be(n[o],t[o]))return!1;return!0}function ne(n,t){t===void 0&&(t=Ke);var o,s=[],l,v=!1;function b(){for(var y=[],T=0;T<arguments.length;T++)y[T]=arguments[T];return v&&o===this&&t(y,s)||(l=n.apply(this,y),v=!0,o=this,s=y),l}return b}var Ge=typeof performance=="object"&&typeof performance.now=="function",he=Ge?function(){return performance.now()}:function(){return Date.now()};function fe(n){cancelAnimationFrame(n.id)}function Ye(n,t){var o=he();function s(){he()-o>=t?n.call(null):l.id=requestAnimationFrame(s)}var l={id:requestAnimationFrame(s)};return l}var oe=-1;function pe(n){if(n===void 0&&(n=!1),oe===-1||n){var t=document.createElement("div"),o=t.style;o.width="50px",o.height="50px",o.overflow="scroll",document.body.appendChild(t),oe=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return oe}var W=null;function me(n){if(n===void 0&&(n=!1),W===null||n){var t=document.createElement("div"),o=t.style;o.width="50px",o.height="50px",o.overflow="scroll",o.direction="rtl";var s=document.createElement("div"),l=s.style;return l.width="100px",l.height="100px",t.appendChild(s),document.body.appendChild(t),t.scrollLeft>0?W="positive-descending":(t.scrollLeft=1,t.scrollLeft===0?W="negative":W="positive-ascending"),document.body.removeChild(t),W}return W}var Qe=150,Xe=function(t,o){return t},X=null,J=null;typeof window<"u"&&typeof window.WeakSet<"u"&&(X=new WeakSet,J=new WeakSet);function Je(n){var t,o=n.getItemOffset,s=n.getEstimatedTotalSize,l=n.getItemSize,v=n.getOffsetForIndexAndAlignment,b=n.getStartIndexForOffset,y=n.getStopIndexForStartIndex,T=n.initInstanceProps,C=n.shouldResetStyleCacheOnItemSizeChange,x=n.validateProps;return t=function(M){we(D,M);function D(S){var e;return e=M.call(this,S)||this,e._instanceProps=T(e.props,se(e)),e._outerRef=void 0,e._resetIsScrollingTimeoutId=null,e.state={instance:se(e),isScrolling:!1,scrollDirection:"forward",scrollOffset:typeof e.props.initialScrollOffset=="number"?e.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},e._callOnItemsRendered=void 0,e._callOnItemsRendered=ne(function(i,a,c,h){return e.props.onItemsRendered({overscanStartIndex:i,overscanStopIndex:a,visibleStartIndex:c,visibleStopIndex:h})}),e._callOnScroll=void 0,e._callOnScroll=ne(function(i,a,c){return e.props.onScroll({scrollDirection:i,scrollOffset:a,scrollUpdateWasRequested:c})}),e._getItemStyle=void 0,e._getItemStyle=function(i){var a=e.props,c=a.direction,h=a.itemSize,f=a.layout,d=e._getItemStyleCache(C&&h,C&&f,C&&c),g;if(d.hasOwnProperty(i))g=d[i];else{var r=o(e.props,i,e._instanceProps),u=l(e.props,i,e._instanceProps),w=c==="horizontal"||f==="horizontal",R=c==="rtl",L=w?r:0;d[i]=g={position:"absolute",left:R?void 0:L,right:R?L:void 0,top:w?0:r,height:w?"100%":u,width:w?u:"100%"}}return g},e._getItemStyleCache=void 0,e._getItemStyleCache=ne(function(i,a,c){return{}}),e._onScrollHorizontal=function(i){var a=i.currentTarget,c=a.clientWidth,h=a.scrollLeft,f=a.scrollWidth;e.setState(function(d){if(d.scrollOffset===h)return null;var g=e.props.direction,r=h;if(g==="rtl")switch(me()){case"negative":r=-h;break;case"positive-descending":r=f-c-h;break}return r=Math.max(0,Math.min(r,f-c)),{isScrolling:!0,scrollDirection:d.scrollOffset<r?"forward":"backward",scrollOffset:r,scrollUpdateWasRequested:!1}},e._resetIsScrollingDebounced)},e._onScrollVertical=function(i){var a=i.currentTarget,c=a.clientHeight,h=a.scrollHeight,f=a.scrollTop;e.setState(function(d){if(d.scrollOffset===f)return null;var g=Math.max(0,Math.min(f,h-c));return{isScrolling:!0,scrollDirection:d.scrollOffset<g?"forward":"backward",scrollOffset:g,scrollUpdateWasRequested:!1}},e._resetIsScrollingDebounced)},e._outerRefSetter=function(i){var a=e.props.outerRef;e._outerRef=i,typeof a=="function"?a(i):a!=null&&typeof a=="object"&&a.hasOwnProperty("current")&&(a.current=i)},e._resetIsScrollingDebounced=function(){e._resetIsScrollingTimeoutId!==null&&fe(e._resetIsScrollingTimeoutId),e._resetIsScrollingTimeoutId=Ye(e._resetIsScrolling,Qe)},e._resetIsScrolling=function(){e._resetIsScrollingTimeoutId=null,e.setState({isScrolling:!1},function(){e._getItemStyleCache(-1,null)})},e}D.getDerivedStateFromProps=function(e,i){return Ze(e,i),x(e),null};var _=D.prototype;return _.scrollTo=function(e){e=Math.max(0,e),this.setState(function(i){return i.scrollOffset===e?null:{scrollDirection:i.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},_.scrollToItem=function(e,i){i===void 0&&(i="auto");var a=this.props,c=a.itemCount,h=a.layout,f=this.state.scrollOffset;e=Math.max(0,Math.min(e,c-1));var d=0;if(this._outerRef){var g=this._outerRef;h==="vertical"?d=g.scrollWidth>g.clientWidth?pe():0:d=g.scrollHeight>g.clientHeight?pe():0}this.scrollTo(v(this.props,e,i,f,this._instanceProps,d))},_.componentDidMount=function(){var e=this.props,i=e.direction,a=e.initialScrollOffset,c=e.layout;if(typeof a=="number"&&this._outerRef!=null){var h=this._outerRef;i==="horizontal"||c==="horizontal"?h.scrollLeft=a:h.scrollTop=a}this._callPropsCallbacks()},_.componentDidUpdate=function(){var e=this.props,i=e.direction,a=e.layout,c=this.state,h=c.scrollOffset,f=c.scrollUpdateWasRequested;if(f&&this._outerRef!=null){var d=this._outerRef;if(i==="horizontal"||a==="horizontal")if(i==="rtl")switch(me()){case"negative":d.scrollLeft=-h;break;case"positive-ascending":d.scrollLeft=h;break;default:var g=d.clientWidth,r=d.scrollWidth;d.scrollLeft=r-g-h;break}else d.scrollLeft=h;else d.scrollTop=h}this._callPropsCallbacks()},_.componentWillUnmount=function(){this._resetIsScrollingTimeoutId!==null&&fe(this._resetIsScrollingTimeoutId)},_.render=function(){var e=this.props,i=e.children,a=e.className,c=e.direction,h=e.height,f=e.innerRef,d=e.innerElementType,g=e.innerTagName,r=e.itemCount,u=e.itemData,w=e.itemKey,R=w===void 0?Xe:w,L=e.layout,P=e.outerElementType,$=e.outerTagName,I=e.style,z=e.useIsScrolling,j=e.width,p=this.state.isScrolling,E=c==="horizontal"||L==="horizontal",N=E?this._onScrollHorizontal:this._onScrollVertical,A=this._getRangeToRender(),k=A[0],U=A[1],G=[];if(r>0)for(var H=k;H<=U;H++)G.push(O.createElement(i,{data:u,key:R(H,u),index:H,isScrolling:z?p:void 0,style:this._getItemStyle(H)}));var re=s(this.props,this._instanceProps);return O.createElement(P||$||"div",{className:a,onScroll:N,ref:this._outerRefSetter,style:Te({position:"relative",height:h,width:j,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:c},I)},O.createElement(d||g||"div",{children:G,ref:f,style:{height:E?"100%":re,pointerEvents:p?"none":void 0,width:E?re:"100%"}}))},_._callPropsCallbacks=function(){if(typeof this.props.onItemsRendered=="function"){var e=this.props.itemCount;if(e>0){var i=this._getRangeToRender(),a=i[0],c=i[1],h=i[2],f=i[3];this._callOnItemsRendered(a,c,h,f)}}if(typeof this.props.onScroll=="function"){var d=this.state,g=d.scrollDirection,r=d.scrollOffset,u=d.scrollUpdateWasRequested;this._callOnScroll(g,r,u)}},_._getRangeToRender=function(){var e=this.props,i=e.itemCount,a=e.overscanCount,c=this.state,h=c.isScrolling,f=c.scrollDirection,d=c.scrollOffset;if(i===0)return[0,0,0,0];var g=b(this.props,d,this._instanceProps),r=y(this.props,g,d,this._instanceProps),u=!h||f==="backward"?Math.max(1,a):1,w=!h||f==="forward"?Math.max(1,a):1;return[Math.max(0,g-u),Math.max(0,Math.min(i-1,r+w)),g,r]},D}(O.PureComponent),t.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},t}var Ze=function(t,o){var s=t.children,l=t.direction,v=t.height,b=t.layout,y=t.innerTagName,T=t.outerTagName,C=t.width,x=o.instance;{(y!=null||T!=null)&&J&&!J.has(x)&&(J.add(x),console.warn("The innerTagName and outerTagName props have been deprecated. Please use the innerElementType and outerElementType props instead."));var M=l==="horizontal"||b==="horizontal";switch(l){case"horizontal":case"vertical":X&&!X.has(x)&&(X.add(x),console.warn('The direction prop should be either "ltr" (default) or "rtl". Please use the layout prop to specify "vertical" (default) or "horizontal" orientation.'));break;case"ltr":case"rtl":break;default:throw Error('An invalid "direction" prop has been specified. Value should be either "ltr" or "rtl". '+('"'+l+'" was specified.'))}switch(b){case"horizontal":case"vertical":break;default:throw Error('An invalid "layout" prop has been specified. Value should be either "horizontal" or "vertical". '+('"'+b+'" was specified.'))}if(s==null)throw Error('An invalid "children" prop has been specified. Value should be a React component. '+('"'+(s===null?"null":typeof s)+'" was specified.'));if(M&&typeof C!="number")throw Error('An invalid "width" prop has been specified. Horizontal lists must specify a number for width. '+('"'+(C===null?"null":typeof C)+'" was specified.'));if(!M&&typeof v!="number")throw Error('An invalid "height" prop has been specified. Vertical lists must specify a number for height. '+('"'+(v===null?"null":typeof v)+'" was specified.'))}},et=Je({getItemOffset:function(t,o){var s=t.itemSize;return o*s},getItemSize:function(t,o){var s=t.itemSize;return s},getEstimatedTotalSize:function(t){var o=t.itemCount,s=t.itemSize;return s*o},getOffsetForIndexAndAlignment:function(t,o,s,l,v,b){var y=t.direction,T=t.height,C=t.itemCount,x=t.itemSize,M=t.layout,D=t.width,_=y==="horizontal"||M==="horizontal",S=_?D:T,e=Math.max(0,C*x-S),i=Math.min(e,o*x),a=Math.max(0,o*x-S+x+b);switch(s==="smart"&&(l>=a-S&&l<=i+S?s="auto":s="center"),s){case"start":return i;case"end":return a;case"center":{var c=Math.round(a+(i-a)/2);return c<Math.ceil(S/2)?0:c>e+Math.floor(S/2)?e:c}case"auto":default:return l>=a&&l<=i?l:l<a?a:i}},getStartIndexForOffset:function(t,o){var s=t.itemCount,l=t.itemSize;return Math.max(0,Math.min(s-1,Math.floor(o/l)))},getStopIndexForStartIndex:function(t,o,s){var l=t.direction,v=t.height,b=t.itemCount,y=t.itemSize,T=t.layout,C=t.width,x=l==="horizontal"||T==="horizontal",M=o*y,D=x?C:v,_=Math.ceil((D+s-M)/y);return Math.max(0,Math.min(b-1,o+_-1))},initInstanceProps:function(t){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(t){var o=t.itemSize;if(typeof o!="number")throw Error('An invalid "itemSize" prop has been specified. Value should be a number. '+('"'+(o===null?"null":typeof o)+'" was specified.'))}});const[bt,tt]=Re("ComponentContext",{id:void 0,level:-1,uid:void 0,type:void 0});function Ie(n,t){const o=te(n),s=ie(t,b=>b.removeFieldRow),l=ie(t,b=>b.addFieldRow);return b=>{if(o.value&&o.value.connect){const y=o.value.connect.findIndex(T=>T.id===b.id);if(y>=0){s(`${n}.connect`,y);return}}l(`${n}.disconnect`,{id:b.id,apiData:{id:b.id,documentId:b.documentId,locale:b.locale}})}}const q=5,_e=["oneWay","oneToOne","manyToOne","oneToManyMorph","oneToOneMorph"],nt=O.forwardRef(({disabled:n,label:t,...o},s)=>{const[l,v]=O.useState(1),{document:b,model:y}=Ce(),T=b?.documentId,{formatMessage:C}=ee(),[{query:x}]=ge(),M=ve(x),_=o.attribute.relation.toLowerCase().includes("morph")||n,{componentId:S,componentUID:e}=tt("RelationsField",({uid:p,id:E})=>({componentId:E,componentUID:p})),i=ie("RelationsList",p=>p.isSubmitting);O.useEffect(()=>{v(1)},[i]);const a=S?S.toString():T,c=e??y,[h]=o.name.split(".").slice(-1),{data:f,isLoading:d,isFetching:g}=Ue({model:c,targetField:h,id:a,params:{...M,pageSize:q,page:l}},{refetchOnMountOrArgChange:!0,skip:!a,selectFromResult:p=>({...p,data:{...p.data,results:p.data?.results?p.data.results:[]}})}),r=()=>{v(p=>p+1)},u=te(o.name),w=d||g,R="pagination"in f&&f.pagination?f.pagination.total:0,L=(u.value?.connect??[]).filter(p=>f.results.findIndex(E=>E.id===p.id)===-1).length??0,P=u.value?.disconnect?.length??0,$=R+L-P,I=O.useMemo(()=>{const p={field:u.value,href:`../${le}/${o.attribute.targetModel}`,mainField:o.mainField};return[...xe(it(p),at(p),rt(p))([...f.results]),...u.value?.connect??[]].sort((A,k)=>A.__temp_key__<k.__temp_key__?-1:A.__temp_key__>k.__temp_key__?1:0)},[f.results,u.value,o.attribute.targetModel,o.mainField]),z=Ie(o.name,"RelationsField"),j=p=>{const[E]=I.slice(-1),N={id:p.id,apiData:{id:p.id,documentId:p.documentId,locale:p.locale},status:p.status,__temp_key__:ye(E?.__temp_key__??null,null,1)[0],[o.mainField?.name??"documentId"]:p[o.mainField?.name??"documentId"],label:ae(p,o.mainField),href:`../${le}/${o.attribute.targetModel}/${p.documentId}?${p.locale?`plugins[i18n][locale]=${p.locale}`:""}`};_e.includes(o.attribute.relation)?(u.value?.connect?.forEach(z),I.forEach(z),u.onChange(`${o.name}.connect`,[N])):u.onChange(`${o.name}.connect`,[...u.value?.connect??[],N])};return m.jsxs(V,{ref:s,direction:"column",gap:3,justifyContent:"space-between",alignItems:"stretch",wrap:"wrap",children:[m.jsxs(ot,{direction:"column",alignItems:"start",gap:2,width:"100%",children:[m.jsx(st,{disabled:_,id:e?S?`${S}`:"":T,label:`${t} ${$>0?`(${$})`:""}`,model:c,onChange:j,...o}),"pagination"in f&&f.pagination&&f.pagination.pageCount>f.pagination.page?m.jsx(Me,{disabled:w,onClick:r,loading:w,startIcon:m.jsx(Oe,{}),shrink:0,children:C({id:F("relation.loadMore"),defaultMessage:"Load More"})}):null]}),m.jsx(lt,{data:I,serverData:f.results,disabled:_,name:o.name,isLoading:w,relationType:o.attribute.relation})]})}),ot=K(V)`
  & > div {
    width: 100%;
  }
`,it=({field:n})=>t=>t.filter(o=>(n?.connect??[]).findIndex(l=>l.id===o.id)===-1),at=({field:n})=>t=>t.filter(o=>(n?.disconnect??[]).findIndex(l=>l.id===o.id)===-1),rt=({mainField:n,href:t})=>o=>o.map(s=>({...s,[n?.name??"documentId"]:s[n?.name??"documentId"],label:ae(s,n),href:`${t}/${s.documentId}?${s.locale?`plugins[i18n][locale]=${s.locale}`:""}`})),st=({hint:n,id:t,model:o,label:s,labelAction:l,name:v,mainField:b,placeholder:y,required:T,unique:C,"aria-label":x,onChange:M,...D})=>{const[_,S]=O.useState(""),[e,i]=O.useState({_q:"",page:1}),{toggleNotification:a}=ze(),[{query:c}]=ge(),{formatMessage:h}=ee(),f=De(v),d=te(v),[g,{data:r,isLoading:u}]=He();O.useEffect(()=>{const[I]=v.split(".").slice(-1);g({model:o,targetField:I,params:{...ve(c),id:t??"",pageSize:10,idsToInclude:d.value?.disconnect?.map(z=>z.id.toString())??[],idsToOmit:d.value?.connect?.map(z=>z.id.toString())??[],...e}})},[d.value?.connect,d.value?.disconnect,t,o,v,c,g,e]);const w=async I=>{i(z=>({...z,_q:I,page:1}))},R=r?.pagination?r.pagination.page<r.pagination.pageCount:!1,L=r?.results??[],P=I=>{if(!I)return;const z=L.find(j=>j.id.toString()===I);if(!z){console.error("You've tried to add a relation with an id that does not exist in the options you can see, this is likely a bug with Strapi. Please open an issue."),a({message:h({id:F("relation.error-adding-relation"),defaultMessage:"An error occurred while trying to add the relation."}),type:"danger"});return}M(z)},$=()=>{!r||!r.pagination||r.pagination.page<r.pagination.pageCount&&i(I=>({...I,page:I.page+1}))};return O.useLayoutEffect(()=>{S("")},[d.value]),m.jsxs(Y.Root,{error:d.error,hint:n,name:v,required:T,children:[m.jsx(Y.Label,{action:l,children:s}),m.jsx(Le,{ref:f,name:v,autocomplete:"list",placeholder:y||h({id:F("relation.add"),defaultMessage:"Add relation"}),hasMoreItems:R,loading:u,onOpenChange:()=>{w(_??"")},noOptionsMessage:()=>h({id:F("relation.notAvailable"),defaultMessage:"No relations available"}),loadingMessage:h({id:F("relation.isLoading"),defaultMessage:"Relations are loading"}),onLoadMore:$,textValue:_,onChange:P,onTextValueChange:I=>{S(I)},onInputChange:I=>{w(I.currentTarget.value)},...D,children:L.map(I=>{const z=ae(I,b);return m.jsx(Ee,{value:I.id.toString(),textValue:z,children:m.jsxs(V,{gap:2,justifyContent:"space-between",children:[m.jsx(be,{ellipsis:!0,children:z}),I.status?m.jsx(Se,{status:I.status}):null]})},I.id)})}),m.jsx(Y.Error,{}),m.jsx(Y.Hint,{})]})},Q=50,Z=4,lt=({data:n,serverData:t,disabled:o,name:s,isLoading:l,relationType:v})=>{const b=O.useId(),{formatMessage:y}=ee(),T=O.useRef(null),C=O.useRef(null),[x,M]=O.useState(),[D,_]=O.useState(""),S=te(s);O.useEffect(()=>{if(n.length<=q)return M(void 0);const r=w=>{const R=w.target,L=R.parentNode.scrollHeight,P=R.scrollHeight-R.scrollTop;return R.scrollTop===0?M("bottom"):M(P===L?"top":"top-bottom")},u=C?.current;return!l&&n.length>0&&u&&C.current.addEventListener("scroll",r),()=>{u&&u.removeEventListener("scroll",r)}},[l,n.length]);const e=r=>`${r+1} of ${n.length}`,i=(r,u)=>{const w=n[u];_(y({id:F("dnd.reorder"),defaultMessage:"{item}, moved. New position in list: {position}."},{item:w.label??w.documentId,position:e(r)}));const R=[...n],L=n[u],P=u>r?R[r-1]?.__temp_key__:R[r]?.__temp_key__,$=u>r?R[r]?.__temp_key__:R[r+1]?.__temp_key__,[I]=ye(P,$,1);R.splice(u,1),R.splice(r,0,{...L,__temp_key__:I});const z=R.reduce((j,p,E,N)=>{const A=t.find(U=>U.id===p.id),k=N[E+1];if(!A||A.__temp_key__!==p.__temp_key__){const U=k?{before:k.documentId,locale:k.locale,status:"publishedAt"in k&&k.publishedAt?"published":"draft"}:{end:!0},G={...p,apiData:{id:p.id,documentId:p.documentId,locale:p.locale,position:U}};return[...j,G]}return j},[]).toReversed();S.onChange(`${s}.connect`,z)},a=r=>{const u=n[r];_(y({id:F("dnd.grab-item"),defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:u.label??u.documentId,position:e(r)}))},c=r=>{const{href:u,label:w,...R}=n[r];_(y({id:F("dnd.drop-item"),defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:w??R.documentId,position:e(r)}))},h=r=>{const u=n[r];_(y({id:F("dnd.cancel-item"),defaultMessage:"{item}, dropped. Re-order cancelled."},{item:u.label??u.documentId}))},f=Ie(s,"RelationsList"),d=!_e.includes(v),g=n.length>q?Math.min(n.length,q)*(Q+Z)+Q/2:Math.min(n.length,q)*(Q+Z);return m.jsxs(ct,{$overflowDirection:x,children:[m.jsx(ce,{id:b,children:y({id:F("dnd.instructions"),defaultMessage:"Press spacebar to grab and re-order"})}),m.jsx(ce,{"aria-live":"assertive",children:D}),m.jsx(et,{height:g,ref:T,outerRef:C,itemCount:n.length,itemSize:Q+Z,itemData:{ariaDescribedBy:b,canDrag:d,disabled:o,handleCancel:h,handleDropItem:c,handleGrabItem:a,handleMoveItem:i,name:s,handleDisconnect:f,relations:n},itemKey:r=>n[r].id,innerElementType:"ol",children:dt})]})},ct=K(B)`
  position: relative;
  overflow: hidden;
  flex: 1;

  &:before,
  &:after {
    position: absolute;
    width: 100%;
    height: 4px;
    z-index: 1;
  }

  &:before {
    /* TODO: as for DS Table component we would need this to be handled by the DS theme */
    content: '';
    background: linear-gradient(rgba(3, 3, 5, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
    top: 0;
    opacity: ${({$overflowDirection:n})=>n==="top-bottom"||n==="top"?1:0};
    transition: opacity 0.2s ease-in-out;
  }

  &:after {
    /* TODO: as for DS Table component we would need this to be handled by the DS theme */
    content: '';
    background: linear-gradient(0deg, rgba(3, 3, 5, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
    bottom: 0;
    opacity: ${({$overflowDirection:n})=>n==="top-bottom"||n==="bottom"?1:0};
    transition: opacity 0.2s ease-in-out;
  }
`,dt=({data:n,index:t,style:o})=>{const{ariaDescribedBy:s,canDrag:l=!1,disabled:v=!1,handleCancel:b,handleDisconnect:y,handleDropItem:T,handleGrabItem:C,handleMoveItem:x,name:M,relations:D}=n,{formatMessage:_}=ee(),{href:S,id:e,label:i,status:a}=D[t],[{handlerId:c,isDragging:h,handleKeyDown:f},d,g,r,u]=Ne(l&&!v,{type:`${We.RELATION}_${M}`,index:t,item:{displayedValue:i,status:a,id:e,index:t},onMoveItem:x,onDropItem:T,onGrabItem:C,onCancel:b,dropSensitivity:Ve.REGULAR}),w=Fe(d,r);return O.useEffect(()=>{u(qe())},[u]),m.jsx(B,{style:o,tag:"li",ref:g,"aria-describedby":s,cursor:l?"all-scroll":"default",children:h?m.jsx(ft,{}):m.jsxs(V,{paddingTop:2,paddingBottom:2,paddingLeft:l?2:4,paddingRight:4,hasRadius:!0,borderColor:"neutral200",background:v?"neutral150":"neutral0",justifyContent:"space-between",ref:w,"data-handler-id":c,children:[m.jsxs(ut,{gap:1,children:[l?m.jsx(de,{tag:"div",role:"button",tabIndex:0,withTooltip:!1,label:_({id:F("components.RelationInput.icon-button-aria-label"),defaultMessage:"Drag"}),variant:"ghost",onKeyDown:f,disabled:v,children:m.jsx(ke,{})}):null,m.jsxs(V,{width:"100%",minWidth:0,justifyContent:"space-between",children:[m.jsx(B,{minWidth:0,paddingTop:1,paddingBottom:1,paddingRight:4,children:m.jsx(Pe,{description:i,children:S?m.jsx(ht,{tag:$e,to:S,isExternal:!1,children:i}):m.jsx(be,{textColor:v?"neutral600":"primary600",ellipsis:!0,children:i})})}),a?m.jsx(Se,{status:a}):null]})]}),m.jsx(B,{paddingLeft:4,children:m.jsx(de,{onClick:()=>y(D[t]),disabled:v,label:_({id:F("relation.disconnect"),defaultMessage:"Remove"}),variant:"ghost",size:"S",children:m.jsx(je,{})})})]})})},ut=K(V)`
  width: 100%;
  /* Used to prevent endAction to be pushed out of container */
  min-width: 0;

  & > div[role='button'] {
    cursor: all-scroll;
  }
`,St=K.button`
  svg path {
    fill: ${({theme:n,disabled:t})=>t?n.colors.neutral600:n.colors.neutral500};
  }

  &:hover svg path,
  &:focus svg path {
    fill: ${({theme:n,disabled:t})=>!t&&n.colors.neutral600};
  }
`,ht=K(Ae)`
  display: block;

  & > span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }
`,ft=()=>m.jsx(B,{paddingTop:2,paddingBottom:2,paddingLeft:4,paddingRight:4,hasRadius:!0,borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",background:"primary100",height:`calc(100% - ${Z}px)`}),yt=O.memo(nt);export{bt as C,St as D,ut as F,ht as L,yt as M,tt as u};
