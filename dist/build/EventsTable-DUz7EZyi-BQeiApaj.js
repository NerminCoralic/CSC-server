import{j as e}from"./strapi-B1OJIt6i.js";import{a as s}from"./EditPage-qRfveoLn-CwLZZwke.js";import"./selectors-BZApelK9-CTw3Cpa4.js";import"./useWebhooks-PMmtSF2F-5d2yxctp.js";const t={"review-workflows":{"review-workflows":["review-workflows.updateEntryStage"]},releases:{releases:["releases.publish"]}},a=r=>{switch(r){case"review-workflows":return()=>[{id:"review-workflows.updateEntryStage",defaultMessage:"Stage Change"}];case"releases":return()=>[{id:"releases.publish",defaultMessage:"Publish"}]}},n=()=>e.jsxs(s.Root,{children:[e.jsx(s.Headers,{}),e.jsx(s.Body,{}),Object.keys(t).map(r=>e.jsxs(e.Fragment,{children:[e.jsx(s.Headers,{getHeaders:a(r)}),e.jsx(s.Body,{providedEvents:t[r]})]}))]});export{n as EventsTableEE};
