"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5571],{1757:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var n=s(4848),o=s(8453);const r={},i="Troubleshooting the s3gw",c={id:"troubleshoot-s3gw",title:"Troubleshooting the s3gw",description:"When using self-signed certificates, you may encounter CORS issues",source:"@site/../s3gw/docs/guide/troubleshoot-s3gw.md",sourceDirName:".",slug:"/troubleshoot-s3gw",permalink:"/troubleshoot-s3gw",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"metrics",permalink:"/metrics"},next:{title:"S3GW Repositories",permalink:"/s3gw-repos"}},a={},u=[];function h(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"troubleshooting-the-s3gw",children:"Troubleshooting the s3gw"}),"\n",(0,n.jsxs)(t.p,{children:["When using self-signed certificates, you may encounter CORS issues\naccessing the UI. This can be worked around by first accessing the S3 endpoint\nitself ",(0,n.jsx)(t.code,{children:"https://hostname"})," with the browser and accepting that certificate,\nbefore accessing the UI via ",(0,n.jsx)(t.code,{children:"https://ui.hostname"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"cat certificate.pem | base64 -w 0\n"})})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>c});var n=s(6540);const o={},r=n.createContext(o);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);