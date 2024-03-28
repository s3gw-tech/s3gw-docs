"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6698],{1564:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var s=t(4848),i=t(8453);const r={},c="S3gw UI",o={id:"ui",title:"S3gw UI",description:"User interface for the s3gw.",source:"@site/../s3gw/docs/guide/ui.md",sourceDirName:".",slug:"/ui",permalink:"/ui",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Testing s3gw",permalink:"/testing"},next:{title:"roadmap",permalink:"/roadmap"}},l={},a=[{value:"Installation",id:"installation",level:2},{value:"Development server",id:"development-server",level:2},{value:"Connect to a K3s setup",id:"connect-to-a-k3s-setup",level:3},{value:"Beautify and linting code",id:"beautify-and-linting-code",level:2},{value:"Build",id:"build",level:2},{value:"Running unit tests",id:"running-unit-tests",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"s3gw-ui",children:"S3gw UI"}),"\n",(0,s.jsxs)(n.p,{children:["User interface for the ",(0,s.jsx)(n.code,{children:"s3gw"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"npm ci"})," to install the necessary node modules."]}),"\n",(0,s.jsx)(n.h2,{id:"development-server",children:"Development server"}),"\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"ng serve"})," for a dev server. Navigate to ",(0,s.jsx)(n.code,{children:"http://localhost:4200/"}),". The app\nautomatically reloads if there are any changes to the source files. Make sure the\n",(0,s.jsx)(n.code,{children:"proxy.conf.json"})," file exists and is configured to access your ",(0,s.jsx)(n.code,{children:"s3gw"}),"\ninstallation."]}),"\n",(0,s.jsx)(n.h3,{id:"connect-to-a-k3s-setup",children:"Connect to a K3s setup"}),"\n",(0,s.jsxs)(n.p,{children:["If you want to connect the user interface to a K3s setup, use the following\n",(0,s.jsx)(n.code,{children:"proxy.conf.json"})," file."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "/admin/user": {\n    "target": "https://s3gw.local",\n    "secure": false,\n    "changeOrigin": true\n  },\n  "/admin/metadata/user": {\n    "target": "https://s3gw.local",\n    "secure": false,\n    "changeOrigin": true\n  },\n  "/admin/bucket": {\n    "target": "https://s3gw.local",\n    "secure": false,\n    "changeOrigin": true\n  },\n  "http://localhost:4200": {\n    "target": "https://s3gw.local",\n    "secure": false,\n    "changeOrigin": true\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"beautify-and-linting-code",children:"Beautify and linting code"}),"\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"npm run fix"})," to beautify and lint the source code."]}),"\n",(0,s.jsx)(n.h2,{id:"build",children:"Build"}),"\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"ng build"})," to build the project. The build artifacts are stored in the\n",(0,s.jsx)(n.code,{children:"dist/"})," directory."]}),"\n",(0,s.jsx)(n.h2,{id:"running-unit-tests",children:"Running unit tests"}),"\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"ng test:ci"})," to execute the unit tests."]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var s=t(6540);const i={},r=s.createContext(i);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);