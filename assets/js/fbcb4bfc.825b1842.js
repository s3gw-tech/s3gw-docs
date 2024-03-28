"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[163],{52:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=i(4848),t=i(8453);const o={},r="Context and Problem Statement",a={id:"0005-project-labels",title:"Context and Problem Statement",description:"The goal is to put into place standard labels across all SUSE Rancher projects,",source:"@site/../s3gw/docs/decisions/0005-project-labels.md",sourceDirName:".",slug:"/0005-project-labels",permalink:"/decisions/0005-project-labels",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"decisions",previous:{title:"Context and Problem Statement",permalink:"/decisions/0004-release-captain"},next:{title:"Git branches and tags",permalink:"/decisions/0006-git-branches-tags"}},l={},d=[{value:"Considered Options",id:"considered-options",level:2},{value:"Issue conventions",id:"issue-conventions",level:3},{value:"Titles",id:"titles",level:3},{value:"Labels",id:"labels",level:3},{value:"<code>area/*</code>",id:"area",level:3},{value:"<code>component/*</code>",id:"component",level:3},{value:"<code>kind/*</code>",id:"kind",level:3},{value:"<code>kind/bug</code>",id:"kindbug",level:4},{value:"<code>kind/enhancement</code>",id:"kindenhancement",level:4},{value:"<code>kind/epic</code>",id:"kindepic",level:4},{value:"<code>kind/story</code>",id:"kindstory",level:4},{value:"<code>kind/quality</code>",id:"kindquality",level:4},{value:"<code>priority/*</code>",id:"priority",level:3},{value:"<code>regression</code>",id:"regression",level:3},{value:"<code>release-note</code>",id:"release-note",level:3},{value:"<code>triage/*</code>",id:"triage",level:3},{value:"<code>triage/needs-more-information</code>",id:"triageneeds-more-information",level:3},{value:"<code>triage/next-candidate</code>",id:"triagenext-candidate",level:3},{value:"Decision Outcome",id:"decision-outcome",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"context-and-problem-statement",children:"Context and Problem Statement"}),"\n",(0,s.jsx)(n.p,{children:"The goal is to put into place standard labels across all SUSE Rancher projects,\nwhich allows people from multiple spheres of interest to have a single glance\ninto top-level work."}),"\n",(0,s.jsx)(n.p,{children:"Issues and labels are used for:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Tracking defects"}),"\n",(0,s.jsx)(n.li,{children:"Tracking feature requests"}),"\n",(0,s.jsx)(n.li,{children:"Planning releases"}),"\n",(0,s.jsx)(n.li,{children:"Managing workflows"}),"\n",(0,s.jsx)(n.li,{children:"Reporting stats"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The introduction of these changes should have minimum impact on our current\nworkflow since we are mainly renaming already existing labels. We use custom\nfields to define ",(0,s.jsx)(n.a,{href:"https://github.com/orgs/aquarist-labs/projects/5/views/14",children:"epics"})," & ",(0,s.jsx)(n.a,{href:"https://github.com/orgs/aquarist-labs/projects/5/views/1",children:"milestones"}),". We will carry on using them,\ntogether with the ",(0,s.jsx)(n.code,{children:"kind/epic"})," label, since they are a great way of organizing\nthe work."]}),"\n",(0,s.jsx)(n.h2,{id:"considered-options",children:"Considered Options"}),"\n",(0,s.jsxs)(n.p,{children:["Labels can be found here: ",(0,s.jsx)(n.a,{href:"https://github.com/aquarist-labs/s3gw/labels",children:"https://github.com/aquarist-labs/s3gw/labels"})]}),"\n",(0,s.jsx)(n.h3,{id:"issue-conventions",children:"Issue conventions"}),"\n",(0,s.jsx)(n.p,{children:"All issues should be actionable (within a reasonable timeframe). Usage questions\nand design brainstorming should happen in GitHub discussions."}),"\n",(0,s.jsx)(n.h3,{id:"titles",children:"Titles"}),"\n",(0,s.jsx)(n.p,{children:"Issue titles should be short (up to 70 characters), with the most important info\nat the front."}),"\n",(0,s.jsx)(n.h3,{id:"labels",children:"Labels"}),"\n",(0,s.jsx)(n.p,{children:"Label names are simple strings without spaces or special characters (including\nemojis) to make it easy to type them into GitHub queries."}),"\n",(0,s.jsxs)(n.p,{children:['Labels are grouped into orthogonal "categories", and ideally, an issue should\nhave no more than one label from each category, e.g. ',(0,s.jsx)(n.code,{children:"kind/bug"}),",\n",(0,s.jsx)(n.code,{children:"area/kubernetes"}),", ",(0,s.jsx)(n.code,{children:"component/ui"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"When an issue seems to require multiple labels from the same category, it is\noften a hint that it should be split into multiple issues."}),"\n",(0,s.jsx)(n.p,{children:"The following list aims to comprehensively document all our labels."}),"\n",(0,s.jsx)(n.h3,{id:"area",children:(0,s.jsx)(n.code,{children:"area/*"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"area"})," category species is the user's visible area that is affected by the\nissue. It helps to find a duplicate issue during reporting or the triage\nprocess."]}),"\n",(0,s.jsxs)(n.p,{children:["An example is ",(0,s.jsx)(n.code,{children:"area/kubernetes"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"component",children:(0,s.jsx)(n.code,{children:"component/*"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"component/*"})," category specifies the part of the implementation that will\nneed to be modified during the implementation."]}),"\n",(0,s.jsxs)(n.p,{children:["An example is ",(0,s.jsx)(n.code,{children:"component/ui"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"kind",children:(0,s.jsx)(n.code,{children:"kind/*"})}),"\n",(0,s.jsxs)(n.p,{children:['This is the "document kind". Each issue ',(0,s.jsx)(n.strong,{children:"must"})," have exactly one ",(0,s.jsx)(n.code,{children:"kind/*"}),"\nlabel. The labels ",(0,s.jsx)(n.code,{children:"kind/bug"})," and ",(0,s.jsx)(n.code,{children:"kind/enhancement"})," are being standardized\nacross SUSE Rancher projects."]}),"\n",(0,s.jsx)(n.h4,{id:"kindbug",children:(0,s.jsx)(n.code,{children:"kind/bug"})}),"\n",(0,s.jsxs)(n.p,{children:["This issue describes a defect in the software. Sometimes it requires a judgement\ncall, but in general, incomplete functionality, or different behavior from a\nsimilar project should be labelled as ",(0,s.jsx)(n.code,{children:"kind/enhancement"})," instead."]}),"\n",(0,s.jsx)(n.h4,{id:"kindenhancement",children:(0,s.jsx)(n.code,{children:"kind/enhancement"})}),"\n",(0,s.jsx)(n.p,{children:"This issue requests additional (or a change in) functionality. The request\ntypically comes from a user or the PO."}),"\n",(0,s.jsx)(n.h4,{id:"kindepic",children:(0,s.jsx)(n.code,{children:"kind/epic"})}),"\n",(0,s.jsxs)(n.p,{children:["An epic is an umbrella issue to implement a feature that can span over one or\nmany release cycles. It includes a work breakdown as a task list for individual\n",(0,s.jsx)(n.code,{children:"kind/story"})," issues."]}),"\n",(0,s.jsx)(n.p,{children:"The epic should include acceptance criteria and link to any documentation and QA\nwork required to finish the epic."}),"\n",(0,s.jsx)(n.p,{children:"Any unfinished tasks are not automatically rolled over into the next milestone\nat release time; they go back into the backlog and will have to be scheduled\nagain by the triage team."}),"\n",(0,s.jsx)(n.h4,{id:"kindstory",children:(0,s.jsx)(n.code,{children:"kind/story"})}),"\n",(0,s.jsxs)(n.p,{children:["A story is an individual work item to implement (part of) a feature. We do not\nuse ",(0,s.jsx)(n.code,{children:"kind/enhancement"})," for this to avoid diluting the reporting of open feature\nrequests."]}),"\n",(0,s.jsx)(n.h4,{id:"kindquality",children:(0,s.jsx)(n.code,{children:"kind/quality"})}),"\n",(0,s.jsx)(n.p,{children:"This issue is about refactoring, adding tests, improving CI. Any activity that\nimproves the quality of the project, but is neither a bug fix nor a user visible\nfeature."}),"\n",(0,s.jsx)(n.h3,{id:"priority",children:(0,s.jsx)(n.code,{children:"priority/*"})}),"\n",(0,s.jsxs)(n.p,{children:["Not every bug, feature or issue requires having a ",(0,s.jsx)(n.code,{children:"priority/"})," label. We won't\nprioritize every ticket since triage is a long process for those actively\nparticipating in it, but it's important to highlight what needs to sorted out\nurgently."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"priority/0 \u2013 Blocker: For bugs, this is an issue that requires immediate\nattention and is a release blocker."}),"\n",(0,s.jsx)(n.li,{children:"priority/1 \u2013 Critical/Urgent: For bugs, this is an issue that breaks existing\nfunctionality but doesn't affect the primary use of the app and should be\naddressed in the next release."}),"\n",(0,s.jsx)(n.li,{children:"priority/2 \u2013 High priority: For bugs, this is an issue that should be triaged\namongst other higher priority work."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"regression",children:(0,s.jsx)(n.code,{children:"regression"})}),"\n",(0,s.jsxs)(n.p,{children:["This label should only be applied to ",(0,s.jsx)(n.code,{children:"kind/bug"})," issues and signifies that some\nfunctionality that was working in a previous release is now broken."]}),"\n",(0,s.jsx)(n.h3,{id:"release-note",children:(0,s.jsx)(n.code,{children:"release-note"})}),"\n",(0,s.jsx)(n.p,{children:"This label is used to mark all issues within a milestone that should be\nexplicitly mentioned in the release notes."}),"\n",(0,s.jsx)(n.h3,{id:"triage",children:(0,s.jsx)(n.code,{children:"triage/*"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"triage/*"})," category is a bunch of values to indicate why the issue was\nclosed: ",(0,s.jsx)(n.code,{children:"triage/by-design"}),", ",(0,s.jsx)(n.code,{children:"triage/duplicate"}),", ",(0,s.jsx)(n.code,{children:"triage/invalid"}),",\n",(0,s.jsx)(n.code,{children:"triage/not-reproducible"}),", ",(0,s.jsx)(n.code,{children:"triage/unsupported"}),", and ",(0,s.jsx)(n.code,{children:"triage/wont-fix"}),". All\nthese should only be applied to closed issues."]}),"\n",(0,s.jsx)(n.h3,{id:"triageneeds-more-information",children:(0,s.jsx)(n.code,{children:"triage/needs-more-information"})}),"\n",(0,s.jsx)(n.p,{children:"We have requested (and are waiting for) additional information from the issue\ncreator. We will have to close the issue unless we receive the info."}),"\n",(0,s.jsx)(n.h3,{id:"triagenext-candidate",children:(0,s.jsx)(n.code,{children:"triage/next-candidate"})}),"\n",(0,s.jsx)(n.p,{children:"We've analyzed the issue all the relevant information is available. It will now\nbe prioritized and added to the release planning."}),"\n",(0,s.jsx)(n.h2,{id:"decision-outcome",children:"Decision Outcome"}),"\n",(0,s.jsx)(n.p,{children:"The proposed steps are approved and this document can be used as reference."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var s=i(6540);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);