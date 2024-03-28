"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7460],{5730:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=n(4848),t=n(8453);const i={},o="SFS Error Handling",c={id:"0012-sfs-error-handling",title:"SFS Error Handling",description:"Context and Problem Statement",source:"@site/../s3gw/docs/decisions/0012-sfs-error-handling.md",sourceDirName:".",slug:"/0012-sfs-error-handling",permalink:"/decisions/0012-sfs-error-handling",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{},sidebar:"decisions",previous:{title:"SFS Timestamps",permalink:"/decisions/0011-sfs-timestamps"},next:{title:"s3gw-ui backend",permalink:"/decisions/0013-ui-backend"}},d={},l=[{value:"Context and Problem Statement",id:"context-and-problem-statement",level:2},{value:"Error Sources",id:"error-sources",level:3},{value:"Layers",id:"layers",level:3},{value:"Decision",id:"decision",level:2},{value:"RGW OPs Layer",id:"rgw-ops-layer",level:3},{value:"SFS: SQLite Layer",id:"sfs-sqlite-layer",level:3},{value:"SFS: SAL Implementation Layer",id:"sfs-sal-implementation-layer",level:3}];function a(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"sfs-error-handling",children:"SFS Error Handling"}),"\n",(0,s.jsx)(r.h2,{id:"context-and-problem-statement",children:"Context and Problem Statement"}),"\n",(0,s.jsx)(r.h3,{id:"error-sources",children:"Error Sources"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Filesystem"}),".\n",(0,s.jsx)(r.code,{children:"ENOSPC"}),", ",(0,s.jsx)(r.code,{children:"EIO"}),", corruption, permissions, write / read / close / open errors."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"SQLite"}),".\nSee ",(0,s.jsx)(r.a,{href:"https://www.sqlite.org/rescode.html",children:"SQLite Docs: Result and Error Codes"})," for details.\nsqlite_orm makes primary result codes available via ",(0,s.jsx)(r.code,{children:"std::system_error"})]}),"\n",(0,s.jsxs)(r.p,{children:["Critical: ",(0,s.jsx)(r.code,{children:"SQLITE_INTERNAL"}),", ",(0,s.jsx)(r.code,{children:"SQLITE_PERM"}),", ",(0,s.jsx)(r.code,{children:"SQLITE_NOMEM"}),", ",(0,s.jsx)(r.code,{children:"SQLITE_READONLY"}),", ",(0,s.jsx)(r.code,{children:"SQLITE_IOERR"}),", ",(0,s.jsx)(r.code,{children:"SQLITE_CORRUPT"}),", ",(0,s.jsx)(r.code,{children:"SQLITE_NOTFOUND"}),", ",(0,s.jsx)(r.code,{children:"SQLITE_FULL"}),", ",(0,s.jsx)(r.code,{children:"SQLITE_CANTOPEN"}),", ",(0,s.jsx)(r.code,{children:"SQLITE_TOOBIG"}),", ",(0,s.jsx)(r.code,{children:"SQLITE_MISMATCH"}),", ",(0,s.jsx)(r.code,{children:"SQLITE_MISUSE"}),", ",(0,s.jsx)(r.code,{children:"SQLITE_NOLFS"}),", ",(0,s.jsx)(r.code,{children:"SQLITE_AUTH"}),", ",(0,s.jsx)(r.code,{children:"SQLITE_RANGE"}),", ",(0,s.jsx)(r.code,{children:"SQLITE_NOTADB"})]}),"\n",(0,s.jsxs)(r.p,{children:["Not critical (transaction aborts, deadlocks, busy database, constrain violation, etc.): ",(0,s.jsx)(r.code,{children:"SQLITE_ABORT"}),", ",(0,s.jsx)(r.code,{children:"SQLITE_BUSY"}),", ",(0,s.jsx)(r.code,{children:"SQLITE_LOCKED"}),", ",(0,s.jsx)(r.code,{children:"SQLITE_INTERRUPT"}),", ",(0,s.jsx)(r.code,{children:"SQLITE_PROTOCOL"}),", ",(0,s.jsx)(r.code,{children:"SQLITE_SCHEMA"}),", ",(0,s.jsx)(r.code,{children:"SQLITE_CONSTRAINT"})]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Failed transaction retries"}),".\nWe retried a transaction that threw ",(0,s.jsx)(r.code,{children:"SQLITE_BUSY"})," to often"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Requests to non-existing data"}),".\nBucket, object, version, user does not exists."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Out of scope"}),".\nRate limiting, Broken requests (parse failures, etc.)"]}),"\n",(0,s.jsx)(r.h3,{id:"layers",children:"Layers"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"RGW OPs (this document)"}),".\nTranslates RGW error codes to S3/HTTP compatible responses.\nWe have a generic exception handler that translates exceptions into 500 / Internal Server Error."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"SAL"}),".\nSee ",(0,s.jsx)(r.code,{children:"rgw_sal.h"}),".\nErrors returned via negative return codes. See ",(0,s.jsx)(r.code,{children:"rgw_common.{cc,h}"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"SFS: SAL Implementation (this document)"}),".\nWhere we use SFS SQLite to implement SAL logic.\nExamples: Atomic Writer"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"SFS: SQLite (this document)"}),".\nMethods and functions that do SQLite queries, transactions.\nExamples: ",(0,s.jsx)(r.code,{children:"SQLiteVersionedObjects::get_versioned_objects"}),", ",(0,s.jsx)(r.code,{children:"Object::metadata_finish"})]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Filesystem"}),".\nTypically ",(0,s.jsx)(r.code,{children:"errno"})," style errors. With STL sometimes exceptions."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"sqlite_orm"}),".\nThrows ",(0,s.jsx)(r.code,{children:"std::system_error"})," with SQLite error code."]}),"\n",(0,s.jsx)(r.h2,{id:"decision",children:"Decision"}),"\n",(0,s.jsx)(r.h3,{id:"rgw-ops-layer",children:"RGW OPs Layer"}),"\n",(0,s.jsx)(r.p,{children:"In addition to the regular RGW error handling, we have an exception\nhandler in place."}),"\n",(0,s.jsx)(r.p,{children:"Transforms critical errors into shutdowns / crashes. Critical errors\nmay originate from sqlite_orm or filesystem operations."}),"\n",(0,s.jsx)(r.p,{children:"Transforms non-critical errors into 500 / Internal Server Error."}),"\n",(0,s.jsx)(r.p,{children:"Non-critical errors should not bubble up to this handler and are considered a bug."}),"\n",(0,s.jsx)(r.h3,{id:"sfs-sqlite-layer",children:"SFS: SQLite Layer"}),"\n",(0,s.jsx)(r.p,{children:"Must not throw non-critical errors. Critical errors are OK to bubble up."}),"\n",(0,s.jsx)(r.p,{children:"Options to return errors:"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"boolean returns"}),", where ",(0,s.jsx)(r.code,{children:"true"})," means ",(0,s.jsx)(r.em,{children:"did the thing"})," and ",(0,s.jsx)(r.code,{children:"false"})," ",(0,s.jsx)(r.em,{children:"did not do the thing"}),".\nUseful, when the exact cause isn't important to the layer above."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"negative integer style returns"}),", where the integer ",(0,s.jsx)(r.em,{children:"should"})," be something unique to SFS.\nShould not be a RGW error code, filesystem error, SQLite error, etc."]}),"\n",(0,s.jsx)(r.h3,{id:"sfs-sal-implementation-layer",children:"SFS: SAL Implementation Layer"}),"\n",(0,s.jsx)(r.p,{children:"Must handle non-critical lower-level errors and return RGW error codes.\nMay catch and rethrow critical exceptions."}),"\n",(0,s.jsxs)(r.p,{children:["Example:\nA failed transaction from SFS SQLite returns false.\nThe SFS SAL implementation uses that to clean up the request and return a ",(0,s.jsx)(r.code,{children:"ERR_INTERNAL_ERROR"}),"."]}),"\n",(0,s.jsx)(r.p,{children:"Important on this layer is, that clients may retry on certain errors before failing a request.\nWe can leverage this where it is easier / cheaper to let the client retry than us."})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>c});var s=n(6540);const t={},i=s.createContext(t);function o(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);