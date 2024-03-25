import{r as a,j as t,R as c,L as d}from"./index-d5b07579.js";import{a as u}from"./axios-21b846bc.js";const f=()=>{const[e,n]=a.useState(""),i={}.VITE_API_SERVICESTATUS_URL||"",o=()=>{if(e==="operational")return"!text-green-500";if(e==="downtime")return"!text-yellow-500";if(e==="degraded")return"!text-red-500"},r=()=>{if(e==="operational")return"bg-green-500";if(e==="downtime")return"bg-yellow-500";if(e==="degraded")return"bg-red-500"};return a.useEffect(()=>{async function l(){try{const s=await u.get(i);n(s.data.heartbeatResponse.serviceStatus)}catch(s){console.error("Failed to get status from backend:",s)}}l()},[]),t.jsx(c.Fragment,{children:t.jsx(d,{to:"#",children:t.jsxs("div",{className:"status p-4 rounded-xl flex flex-row items-center",children:[t.jsxs("div",{className:"status-icon w-[2rem] h-[2rem] rounded-3xl relative mr-4",children:[t.jsx("div",{className:`status-icon-inner absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 ${r()} rounded-[inherit]`}),t.jsx("div",{className:`status-icon-wave  w-[inherit] h-[inherit] rounded-[inherit] ${r()}   animate-ping `})]}),t.jsxs("p",{className:`status-text ${o()} `,children:["Status: ",e]})]})})})};export{f as default};
