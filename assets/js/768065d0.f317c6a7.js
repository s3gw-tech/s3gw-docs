"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3155],{690:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=t(4848),r=t(8453);const o={},i="Installing s3gw with Helm charts",a={id:"helm-charts",title:"Installing s3gw with Helm charts",description:"Before you begin, ensure you install Helm. To install, see the documentation",source:"@site/../s3gw/docs/guide/helm-charts.md",sourceDirName:".",slug:"/helm-charts",permalink:"/helm-charts",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Configuring the s3gw",permalink:"/config-s3gw"},next:{title:"Installing K3s for s3gw",permalink:"/s3gw-with-k3s"}},l={},c=[{value:"Configuring values.yaml",id:"configuring-valuesyaml",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"installing-s3gw-with-helm-charts",children:"Installing s3gw with Helm charts"}),"\n",(0,s.jsxs)(n.p,{children:["Before you begin, ensure you install Helm. To install, see the ",(0,s.jsx)(n.a,{href:"https://helm.sh/docs/intro/install/",children:"documentation"}),"\nor run the following:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3\nchmod 700 get_helm.sh\n./get_helm.sh\n"})}),"\n",(0,s.jsx)(n.p,{children:"Clone the s3gw-charts repo and change directory:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://s3gw-tech.github.io/s3gw-charts/\ncd s3gw-charts\n"})}),"\n",(0,s.jsx)(n.h2,{id:"configuring-valuesyaml",children:"Configuring values.yaml"}),"\n",(0,s.jsxs)(n.p,{children:["Helm charts can be customized for your Kubernetes environment. For a\ndefault installation, the only option you are required to update is\nthe domain and then set the options on the command line directly using\n",(0,s.jsx)(n.code,{children:"helm --set key=value"}),"."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," We do recommend at least updating the default access credentials,\nbut it is not necessary for a test installation. See the ",(0,s.jsx)(n.a,{href:"/config-s3gw",children:"Configuration"}),"\ndocument for more details."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Once the domain has been configured, the chart can then be installed from\nwithin the repository directory:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd s3gw-charts\nhelm install $RELEASE_NAME charts/s3gw --namespace $S3GW_NAMESPACE \\\n    --create-namespace -f /path/to/your/custom/values.yaml\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For details on the various s3gw releases and names, see the release section on\n",(0,s.jsx)(n.a,{href:"https://github.com/s3gw-tech/s3gw/releases",children:"GitHub"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(6540);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);