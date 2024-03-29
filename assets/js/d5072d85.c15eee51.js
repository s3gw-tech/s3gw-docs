"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5122],{9870:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=s(4848),t=s(8453);const r={},a="Release Methodology for the s3gw project",o={id:"0015-release-methodology",title:"Release Methodology for the s3gw project",description:"Context and Problem Statement",source:"@site/../s3gw/docs/decisions/0015-release-methodology.md",sourceDirName:".",slug:"/0015-release-methodology",permalink:"/decisions/0015-release-methodology",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{},sidebar:"decisions",previous:{title:"s3gw-ui backend API",permalink:"/decisions/0014-ui-backend-api"},next:{title:"Release Steps for the s3gw project",permalink:"/decisions/0016-release-steps"}},c={},l=[{value:"Context and Problem Statement",id:"context-and-problem-statement",level:2},{value:"Definitions",id:"definitions",level:2},{value:"Architecture of a Release",id:"architecture-of-a-release",level:2},{value:"Versioning",id:"versioning",level:3},{value:"Branching",id:"branching",level:3},{value:"Release Candidate",id:"release-candidate",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"release-methodology-for-the-s3gw-project",children:"Release Methodology for the s3gw project"}),"\n",(0,i.jsx)(n.h2,{id:"context-and-problem-statement",children:"Context and Problem Statement"}),"\n",(0,i.jsxs)(n.p,{children:["Releasing is an essential process for the ",(0,i.jsx)(n.code,{children:"s3gw"})," project. Given the project is\ncomposed by various sub-projects, that need to be prepared, tested, and\neventually released, the Release Process is not trivial."]}),"\n",(0,i.jsxs)(n.p,{children:["This document defines and agrees on the Release Methodology for the ",(0,i.jsx)(n.code,{children:"s3gw"}),"\nproject, and results from splitting the ",(0,i.jsx)(n.a,{href:"/decisions/0007-release-process",children:"Release Process ADR"})," in\nthree documents: methodology (this document), ",(0,i.jsx)(n.a,{href:"/decisions/0016-release-steps",children:"Release Steps"}),", and\n",(0,i.jsx)(n.a,{href:"/decisions/0017-release-testing",children:"Release Testing"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["This document supersedes the ",(0,i.jsx)(n.a,{href:"/decisions/0007-release-process",children:"Release Process ADR"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"definitions",children:"Definitions"}),"\n",(0,i.jsx)(n.p,{children:"Throughout this document we will often refer to certain things or terms. Below\nwe define what they mean."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Version: the state of a given project, at a specific point in time."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Release Candidate: the tentative set of deliverables from the various ",(0,i.jsx)(n.code,{children:"s3gw"}),"\nsub-projects' repositories at a certain version. It may become the final Release."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Release: the set of deliverables from the various ",(0,i.jsx)(n.code,{children:"s3gw"})," sub-projects'\nrepositories at a certain version, published, and accompanied by a\nRelease Statement."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Release Statement: a document associated with a given Release, detailing the\nversion being released, and a Changelog."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Changelog: a list of significant changes that merit being communicated to\nstakeholders in a human-consumable format."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Release Pipeline: the set of automated workflows triggered on a specific\nmoment, resulting in a set of containers or artifacts to be released."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Release Branch: the state of a given project's development branch at a given\npoint in time, as a separate named branch in said project's git repository."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Backport: the act of applying a patch to a Release Branch originated in a\nmore recent Release Branch or the development branch."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Quay: the current container registry of choice, found at ",(0,i.jsx)(n.a,{href:"https://quay.io",children:"https://quay.io"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"architecture-of-a-release",children:"Architecture of a Release"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"s3gw"})," project is composed by multiple sub-projects:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/aquarist-labs/s3gw-ui/",children:(0,i.jsx)(n.code,{children:"s3gw-ui"})}),": The User Interface for ",(0,i.jsx)(n.code,{children:"s3gw"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/aquarist-labs/s3gw-charts/",children:(0,i.jsx)(n.code,{children:"s3gw-charts"})}),": Containing the Helm Chart to deploy ",(0,i.jsx)(n.code,{children:"s3gw"})," in a Kubernetes\ncontext."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/aquarist-labs/s3gw/",children:(0,i.jsx)(n.code,{children:"s3gw"})}),": Where most of our tooling and infrastructure scripts live."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/aquarist-labs/ceph/",children:(0,i.jsx)(n.code,{children:"ceph"})}),": Where the core backend of ",(0,i.jsx)(n.code,{children:"s3gw"})," lives."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/aquarist-labs/s3gw-cosi-driver",children:(0,i.jsx)(n.code,{children:"cosi-driver"})}),": The COSI driver for Kubernetes."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Releasing ",(0,i.jsx)(n.code,{children:"s3gw"})," is essentially a coordinated process with all the sub-projects,\nwhich need to be prepared at different stages."]}),"\n",(0,i.jsxs)(n.p,{children:["For instance, while the ",(0,i.jsx)(n.code,{children:"s3gw-ui"}),", and ",(0,i.jsx)(n.code,{children:"ceph"})," sub-projects can be\nprepared independently, the ",(0,i.jsx)(n.code,{children:"s3gw-charts"})," sub-project requires all pieces to be\nin place before the final Release is performed. This stems from the Helm Chart\nwe provide depending on the various containers being published to Quay;\notherwise, the chart being released would point to unavailable containers."]}),"\n",(0,i.jsx)(n.h3,{id:"versioning",children:"Versioning"}),"\n",(0,i.jsxs)(n.p,{children:["Each release follows ",(0,i.jsx)(n.a,{href:"https://semver.org/",children:"Semantic Versioning"}),", with versions being in the format\n",(0,i.jsx)(n.code,{children:"vX.Y.Z"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["When dealing with the individual sub-projects' repositories, we use\n",(0,i.jsx)(n.code,{children:"s3gw-vX.Y"})," for release branches and ",(0,i.jsx)(n.code,{children:"s3gw-vX.Y.Z"})," for version tags.\nThe ",(0,i.jsx)(n.code,{children:"s3gw-"})," prefix in the sub-projects is needed to avoid naming conflicts with\nexisting tags in the ",(0,i.jsx)(n.code,{children:"ceph"})," repository.\nIt is particularly important to understand the difference between a release\nbranch and a version tag."]}),"\n",(0,i.jsxs)(n.p,{children:["A release branch represents the tree upon which the release ",(0,i.jsx)(n.code,{children:"vX.Y"})," is based on,\nand once created becomes immutable except for bug fixes (by backporting from the\nmain development branch). The version tags specify the point at which a given\nrelease branch is released. A release branch may have multiple version tags\nthroughout the duration of its support lifecycle, as bug fixes are backported to\nthat particular release."]}),"\n",(0,i.jsx)(n.h3,{id:"branching",children:"Branching"}),"\n",(0,i.jsx)(n.p,{children:"A release represents a point in time of each sub-project's repositories. To keep\ntrack of the state of a sub-project's state at that point in time, we rely on\nbranches. This allows us to bound the scope of a specific release, and makes\nmaintaining a release easier, especially when we need to release one or more\npatch versions on top of the initial release version."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"     main    s3gw-vX.Y branch\n        |    |\n        G    o <tag: s3gw-vX.Y.1>\n        |    |\n        F    F'\n        |    |\n        E    o <tag: s3gw-vX.Y.0>\n        |    |\n        D    E'\n        | .--' s3gw-vX.Y initial branch\n        |/\n        C\n        |\n        B\n        |\n        A\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The diagram above represents the branching out of version ",(0,i.jsx)(n.code,{children:"vX.Y"})," from the main\nbranch for a given sub-project's repository. As one can see, version ",(0,i.jsx)(n.code,{children:"X.Y.0"})," is\nreleased based on the initial branched off history, containing patches ",(0,i.jsx)(n.code,{children:"A"}),", ",(0,i.jsx)(n.code,{children:"B"}),",\nand ",(0,i.jsx)(n.code,{children:"C"}),", plus a backport of patch ",(0,i.jsx)(n.code,{children:"E"}),". Later on, version ",(0,i.jsx)(n.code,{children:"X.Y.1"})," is released\ncontaining an additional backport for patch ",(0,i.jsx)(n.code,{children:"F"}),". Both these backports are\nassumed to be bug fixes. We thus maintain a stable source of truth for version\n",(0,i.jsx)(n.code,{children:"X.Y"}),", while being able to release versions of said branch at different points\nin time."]}),"\n",(0,i.jsx)(n.h3,{id:"release-candidate",children:"Release Candidate"}),"\n",(0,i.jsxs)(n.p,{children:["Once we branch out the main branch to a release branch ",(0,i.jsx)(n.code,{children:"s3gw-vX.Y"}),", we have a\ngiven state with which we are comfortable but that still needs to be validated\nprior to being released. This validation includes several automated and manual\ntests, which are described in ",(0,i.jsx)(n.a,{href:"/decisions/0017-release-testing",children:"Release Testing"}),", but will require release\ncontainers and artifacts to be built. These will be automatically built by our\ninfrastructure, but require nonetheless a tag to be associated with it."]}),"\n",(0,i.jsxs)(n.p,{children:["Given we can't simply create a version tag for something that hasn't been\nvalidated, we will rely on release candidates instead. Much like a version tag,\na release candidate specifies that a given point in time of a particular release\nbranch is considered close enough to being released, and takes the form of a tag\nin the format ",(0,i.jsx)(n.code,{children:"s3gw-vX.Y.Z-rcN"}),", with ",(0,i.jsx)(n.code,{children:"N"})," being the number of the release\ncandidate for version ",(0,i.jsx)(n.code,{children:"X.Y.Z"}),", in ascending fashion. As an example, take the\ndiagram below."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"     main    s3gw-vX.Y branch\n        |    |\n        G    o <tag: s3gw-vX.Y.1-rc1> <tag: s3gw-vX.Y.1>\n        |    |\n        F    F'\n        |    |\n        E    o <tag: s3gw-vX.Y.0-rc2> <tag: s3gw-vX.Y.0>\n        |    |\n        |    E'\n        D    |\n        |    o <tag: s3gw-vX.Y.0-rc1>\n        |  /\n        |/\n        C\n        |\n        B\n        |\n        A\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In this example we can see that, upon branching off from main, we create a\n",(0,i.jsx)(n.code,{children:"s3gw-vX.Y.0-rc1"})," tag, which will trigger our infrastructure automation and\nbuild the various artifacts needed for a release. In this case we must have\nidentified a problem, because we had to apply a backport ",(0,i.jsx)(n.code,{children:"E'"})," to the release\nbranch. This would have led us to create a new release candidate\n",(0,i.jsx)(n.code,{children:"s3gw-vX.Y.0-rc2"}),", which upon validation was deemed correct and released as\n",(0,i.jsx)(n.code,{children:"s3gw-vX.Y.0"}),". Later on we must have found that a new bug fix was required, had\npatch ",(0,i.jsx)(n.code,{children:"F'"})," backported, and a new release candidate for version ",(0,i.jsx)(n.code,{children:"X.Y.1"})," was\ncreated, ",(0,i.jsx)(n.code,{children:"s3gw-vX.Y.1-rc1"}),". Once this release candidate was properly validated,\nversion ",(0,i.jsx)(n.code,{children:"vX.Y.1"})," was released."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var i=s(6540);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);