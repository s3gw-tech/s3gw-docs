"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8307],{7111:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var s=i(4848),t=i(8453);const r={},o="Severity Labels",l={id:"0019-severity-labels",title:"Severity Labels",description:"Context and Problem Statement",source:"@site/../s3gw/docs/decisions/0019-severity-labels.md",sourceDirName:".",slug:"/0019-severity-labels",permalink:"/decisions/0019-severity-labels",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:19,frontMatter:{},sidebar:"decisions",previous:{title:"s3gw High Availability model",permalink:"/decisions/0018-s3gw-ha-model"}},c={},a=[{value:"Context and Problem Statement",id:"context-and-problem-statement",level:2},{value:"Solution",id:"solution",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Longhorn",id:"longhorn",level:3},{value:"openSUSE",id:"opensuse",level:3},{value:"Outcome",id:"outcome",level:3},{value:"Decision Outcome",id:"decision-outcome",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"severity-labels",children:"Severity Labels"}),"\n",(0,s.jsx)(n.h2,{id:"context-and-problem-statement",children:"Context and Problem Statement"}),"\n",(0,s.jsx)(n.p,{children:"In our current process, we are reviewing our backlog and issues in general during our Backlog Review\nmeeting which happened once every Release Cycle.\nThus when a new issue is created, we automatically add the label 'waiting/triage' so we can review\nit during our next Backlog Review. During the Backlog Review meeting, we collectively set a priority\nlabel (from 0-Highest to 3-Lowest) so we can prioritize our work for the next cycle.\nThis is not ideal as an issue can be leftover for weeks before it's discussed during the\nBacklog Review."}),"\n",(0,s.jsx)(n.h2,{id:"solution",children:"Solution"}),"\n",(0,s.jsx)(n.p,{children:"To make the review and planning process easier for the Tech Lead, the Engineering Manager and\nEngineers, we would like to introduce a new type of Labels: Severity.\nThe goal is to provide a way for the reporter of an Epic/Issue to provide an estimation of the\nimpact and help the team to plan an prioritize accordingly."}),"\n",(0,s.jsx)(n.p,{children:"Distinction between Severity and Priority:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The severity field describes the impact of a bug. And the reporter is free to set this up"}),"\n",(0,s.jsx)(n.li,{children:"The priority field describes the importance and order in which an issue should be fixed. Priority\ncannot be changed without discussing it with relevant stakeholders."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsx)(n.p,{children:"The severity labels:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Should be easy to understand and use"}),"\n",(0,s.jsx)(n.li,{children:"Will be taken into account when prioritizing our issues"}),"\n",(0,s.jsx)(n.li,{children:"Should be compatible with the Longhorn severity labels"}),"\n",(0,s.jsx)(n.li,{children:"Should be adaptable to other Rancher projects"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"considered-alternatives",children:"Considered Alternatives"}),"\n",(0,s.jsx)(n.p,{children:"The severity label describes the impact of an issue. And the reporter is free to set this up. All\nissues should have a severity label set from now on."}),"\n",(0,s.jsx)(n.h3,{id:"longhorn",children:"Longhorn"}),"\n",(0,s.jsxs)(n.p,{children:["This is the current severity labels used by ",(0,s.jsx)(n.a,{href:"https://github.com/longhorn/longhorn/labels",children:"Longhorn"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["severity/1","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Function broken (a critical incident with very high impact (ex: data corruption, failed upgrade)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["severity/2","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Function working but has a major issue w/o workaround (a major incident with significant impact)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["severity/3","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Function working but has a major issue w/ workaround"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["severity/4","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Function working but has a minor issue (a minor incident with low impact)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"opensuse",children:"openSUSE"}),"\n",(0,s.jsxs)(n.p,{children:["This is the current severity fields used for ",(0,s.jsx)(n.a,{href:"https://en.opensuse.org/openSUSE:Bug_definitions",children:"openSUSE bugs"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Blocker","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Prevents developers or testers from performing their jobs. Impacts the development process"}),"\n",(0,s.jsx)(n.li,{children:"(Documentation) Key documentation is missing for critical testing and review"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Critical","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Crash, loss of data, corruption of data, severe memory leak"}),"\n",(0,s.jsx)(n.li,{children:"(Documentation) prescribes or doesn't warn against actions that cause data loss or corruption"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Major","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Major loss of function, as specified in the product requirements for this release, or existing\nin the current product"}),"\n",(0,s.jsx)(n.li,{children:"(Documentation) missing, misleading, inaccurate, or contradictory information to the degree that\nby following the documentation successful completion of fundamental tasks is unlikely"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Normal","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Regular issue, some non-major loss of functionality under specific circumstances"}),"\n",(0,s.jsx)(n.li,{children:"(Documentation) missing, misleading, inaccurate, or contradictory information in the\ndocumentation, but successful task completion is probable"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Minor","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Issue that can be viewed as trivial (e.g. cosmetic, UI, easily documented)"}),"\n",(0,s.jsx)(n.li,{children:"(Documentation) contains stylistic or formatting issues, but functionality is not hindered"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"outcome",children:"Outcome"}),"\n",(0,s.jsx)(n.p,{children:"By using a name instead of a number, we wish to make the label very clear for the reporter and for\nthe team. Also this will help making the distinction between priority and severity (priority/0 and\nseverity/blocker for instance):"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["severity/blocker","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Prevents developers or testers from performing their jobs. Impacts the development process"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["severity/critical","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Crash, loss of data, corruption of data, severe memory leak, failed upgrade"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["severity/major","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Major loss of function, as specified in the requirements for this release, or existing in the\ncurrent product"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["severity/normal","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Regular issue, some non-major loss of functionality under specific circumstances"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["severity/trivial","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Issue that can be viewed as minor (e.g. cosmetic, UI, easily documented)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"decision-outcome",children:"Decision Outcome"}),"\n",(0,s.jsx)(n.p,{children:"0005-project-labels.md will have to be modified to include the new labels for severity."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var s=i(6540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);