"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7882],{9440:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(4848),t=r(8453);const o={},a="Notes",i={id:"ha/measurements/regular_localhost_zeroload_400_800Kdb/README",title:"Notes",description:"1. 400K measures done with the WAL file zeroed",source:"@site/../s3gw/docs/research/ha/measurements/regular_localhost_zeroload_400_800Kdb/README.md",sourceDirName:"ha/measurements/regular_localhost_zeroload_400_800Kdb",slug:"/ha/measurements/regular_localhost_zeroload_400_800Kdb/",permalink:"/research/ha/measurements/regular_localhost_zeroload_400_800Kdb/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"research",previous:{title:"High Availability with s3gw + Longhorn",permalink:"/research/ha/RATIONALE"},next:{title:"readme",permalink:"/research/"}},l={},p=[];function c(e){const s={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"notes",children:"Notes"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"400K measures done with the WAL file zeroed"}),"\n",(0,n.jsx)(s.li,{children:"800K measures done with the WAL file still to be processed (size 32G)"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"giuseppe \u279c ~/developer/s3gw-ha/wd (main \u2717) $ du -sh .\n35G\n\n-rw-r--r-- 1 giuseppe giuseppe 798M Sep 12 15:11 s3gw.db\n-rw-r--r-- 1 giuseppe giuseppe  64M Sep 12 15:11 s3gw.db-shm\n-rw-r--r-- 1 giuseppe giuseppe  32G Sep 12 15:11 s3gw.db-wal\n"})}),"\n",(0,n.jsx)(s.p,{children:"after 1 restart"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"giuseppe \u279c ~/developer/s3gw-ha/wd (main \u2717) $ du -sh .\n2.4G  .\n\n-rw-r--r-- 1 giuseppe giuseppe 798M Sep 12 15:12 s3gw.db\n-rw-r--r-- 1 giuseppe giuseppe  32K Sep 12 15:15 s3gw.db-shm\n-rw-r--r-- 1 giuseppe giuseppe    0 Sep 12 15:15 s3gw.db-wal\n"})})]})}function d(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,s,r)=>{r.d(s,{R:()=>a,x:()=>i});var n=r(6540);const t={},o=n.createContext(t);function a(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);