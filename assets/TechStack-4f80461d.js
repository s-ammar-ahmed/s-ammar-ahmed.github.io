import{j as e,c as x,d,u as m,r as p,e as u,f as i,R as g,m as f,g as h,h as j,i as y,W as N}from"./index-d5b07579.js";import b from"./RadialGradient-cf8befd2.js";const c=({skillsData:n,theme:a})=>{const o=(t,s)=>t==="dark"&&(s.title.includes("Next")||s.title.includes("Express"))?s.icon[1]:s.title!=="Next.js"&&s.title!=="Express"?s.icon:s.icon[0],r=(t,s)=>t==="dark"&&(s.title.includes("Next")||s.title.includes("Express"))?s.color[1]:s.title!=="Next.js"&&s.title!=="Express"?s.color:s.color[0];return e.jsxs("article",{className:`h-auto rounded-2xl p-16 pt-32 grid grid-cols-3 gap-10 relative z-10 max-lg:w-full max-lg:grid-cols-2 max-lg:p-8  max-lg:pt-32 ${a==="dark"?"bg-[--blackblue] dark-mode-shadow":"bg-[--icewhite] dark-shadow"}`,children:[e.jsx("div",{className:"absolute top-10 left-1/2 transform -translate-x-1/2 px-4 py-2  rounded-t-xl ",children:e.jsxs("p",{className:"font-black text-4xl",children:[e.jsx("span",{className:"text-[--orange]",children:"<"}),n[0].skillsTitle,e.jsx("span",{className:"text-[--orange]",children:"/>"})]})}),n[0].skills.map((t,s)=>e.jsxs("div",{className:`skill-item cursor-pointer flex flex-col gap-6 rounded-2xl p-8 border-solid border-[0.25rem]  text-center max-lg:items-center    ${a==="dark"?"bg-[--darkblue]":"bg-[--icewhite]"}`,"data-tooltip-id":"my-tooltip","data-tooltip-content":t.title,style:{borderColor:r(a,t)},onMouseEnter:l=>{l.currentTarget.style.animation="pulse 2s infinite",l.currentTarget.style.transform="scale(1)",document.documentElement.style.setProperty("--box-shadow-color",`${r(a,t)}b3`)},onMouseLeave:l=>{l.currentTarget.style.animation="",l.currentTarget.style.transform="",document.documentElement.style.setProperty("--box-shadow-color","inherit")},children:[e.jsx("img",{src:o(a,t),alt:`${t.icon}-icon`,className:"h-[10rem]"}),e.jsx("h3",{className:"max-lg:text-[2rem] min-[1024px]:hidden",children:t.title})]},s))]})},w=()=>{const{ref:n}=x("Skills"),{theme:a}=d(),{language:o}=m(),r=p.useRef(null),{scrollYProgress:t}=u({target:r,offset:["0 1","1.33 1"]}),s=i(t,[0,1],[.8,1]),l=i(t,[0,1],[.6,1]);return e.jsxs(g.Fragment,{children:[e.jsxs("section",{className:"relative tech-stack max-lg:p-16 ",id:"skills",ref:n,children:[e.jsx(b,{scale:"scale-y-[3]",opacity:"opacity-30",position:"top-[55rem]"}),e.jsx("div",{className:"title-container flex flex-col justify-center items-center p-32 w-1/2   gap-6 min-[1921px]:px-[55rem] max-lg:p-0  max-lg:w-full max-lg:items-start max-lg:py-16 ",children:e.jsxs(f.div,{ref:r,style:{scale:s,opacity:l},children:[e.jsxs("p",{className:"font-black mb-6",children:[e.jsx("span",{className:"text-[--orange]",children:"<"}),"Skills",e.jsx("span",{className:"text-[--orange]",children:"/>"})]}),e.jsx("h2",{children:o==="DE"?"Meine Techstack und Skills":"My TechStack and Skills"})]})}),e.jsxs("div",{className:"flex gap-40 justify-center max-lg:flex-col",children:[e.jsx("div",{className:"w-1/3 max-lg:w-full",children:e.jsx(c,{skillsData:h,theme:a})}),e.jsxs("div",{className:"flex flex-col h-[inherit]  justify-around max-lg:gap-40",children:[e.jsx(c,{skillsData:j,theme:a}),e.jsx(c,{skillsData:y,theme:a})]})]})]}),e.jsx(N,{place:"top",id:"my-tooltip",style:{fontSize:"1.5rem",zIndex:10,backgroundColor:"var(--orange)"}})]})};export{w as default};
