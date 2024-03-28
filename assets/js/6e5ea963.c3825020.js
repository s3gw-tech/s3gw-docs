"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4553],{6045:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=n(4848),d=n(8453);const r={slug:"/",status:"accepted",tags:["area/docs"],updated:new Date("2023-10-13T00:00:00.000Z")},a="Project Idea Document (PID)",i={id:"PID-0-reserved",title:"Project Idea Document (PID)",description:"Context and Problem Statement",source:"@site/../s3gw/docs/ideas/PID-0-reserved.md",sourceDirName:".",slug:"/",permalink:"/ideas/",draft:!1,unlisted:!1,tags:[{label:"area/docs",permalink:"/ideas/tags/area-docs"}],version:"current",frontMatter:{slug:"/",status:"accepted",tags:["area/docs"],updated:"2023-10-13T00:00:00.000Z"},sidebar:"ideas"},o={},l=[{value:"Context and Problem Statement",id:"context-and-problem-statement",level:2},{value:"Format",id:"format",level:2},{value:"PID Structure",id:"pid-structure",level:3},{value:"Metadata",id:"metadata",level:3}];function c(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"project-idea-document-pid",children:"Project Idea Document (PID)"}),"\n",(0,s.jsx)(t.h2,{id:"context-and-problem-statement",children:"Context and Problem Statement"}),"\n",(0,s.jsx)(t.p,{children:"We want to record ideas for features, enhancements, and reasonably sane brain\ndumps."}),"\n",(0,s.jsx)(t.p,{children:"Project Idea Documents (henceforth, PID) are therefore records, much like the\nADRs we use for decisions, but fall on a different category: these are not\ndecisions made by anyone, just a description of something to be considered for\nthe future."}),"\n",(0,s.jsx)(t.h2,{id:"format",children:"Format"}),"\n",(0,s.jsx)(t.p,{children:"PIDs should observe the following qualities:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Easy to read and review"}),"\n",(0,s.jsx)(t.li,{children:"Include enough information to be understood by others, and its merit assessed"}),"\n",(0,s.jsx)(t.li,{children:"Reference all relevant GitHub project issues, if they exist"}),"\n",(0,s.jsx)(t.li,{children:"Be a single file"}),"\n",(0,s.jsxs)(t.li,{children:["File name should follow the ",(0,s.jsx)(t.code,{children:"PID-yyyymmdd-title.md"})," format"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"PID-0 is the only PID record that is allowed to break the file name convention."}),"\n",(0,s.jsxs)(t.p,{children:["All PIDs should be kept under ",(0,s.jsx)(t.code,{children:"/docs/ideas/"})," in the ",(0,s.jsx)(t.code,{children:"s3gw-tech/s3gw"}),"\nrepository."]}),"\n",(0,s.jsx)(t.h3,{id:"pid-structure",children:"PID Structure"}),"\n",(0,s.jsx)(t.p,{children:"We do not enforce a strict document structure, but it should be easily\nunderstood."}),"\n",(0,s.jsx)(t.p,{children:"However, the following rules always apply:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The PID title should always reflect the idea being proposed"}),"\n",(0,s.jsx)(t.li,{children:"Metadata is required at the beginning of the record"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["We recommend always starting the document with a ",(0,s.jsx)(t.code,{children:"Context and Problem Statement"}),"\nsection, and finishing with a ",(0,s.jsx)(t.code,{children:"References"})," section if applicable."]}),"\n",(0,s.jsx)(t.h3,{id:"metadata",children:"Metadata"}),"\n",(0,s.jsx)(t.p,{children:"All PIDs should include at least the following metadata at the beginning of its\nrecord:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"---\nstatus: <proposed | accepted | rejected | superseded>\nsuperseded-by: PID-yyyymmdd-foo.md\ntags: <area/foo>\nupdated: <yyyy-mm-dd>\n---\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"status"})," fields translate as the following:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"proposed: The idea has been proposed to the project, and, being part of the\nrepository after being merged, its proposal status has been granted"}),"\n",(0,s.jsx)(t.li,{children:"accepted: The idea has been accepted as a work item at some point in time"}),"\n",(0,s.jsx)(t.li,{children:"rejected: The idea has been rejected at some point in time"}),"\n",(0,s.jsx)(t.li,{children:"superseded: A new, better idea came up, superseding this one"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"tags"})," field should reflect ",(0,s.jsx)(t.strong,{children:"at least"})," the ",(0,s.jsx)(t.code,{children:"area/"})," to which an idea\napplies. Other tags may be provided, as long as they make sense."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"updated"})," field should reflect the last date a given PID was updated."]})]})}function h(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var s=n(6540);const d={},r=s.createContext(d);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);