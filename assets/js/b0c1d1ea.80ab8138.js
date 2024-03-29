"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7966],{4540:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=n(4848),r=n(8453);const i={},a="Release Steps for the s3gw project",c={id:"0016-release-steps",title:"Release Steps for the s3gw project",description:"Context and Problem Statement",source:"@site/../s3gw/docs/decisions/0016-release-steps.md",sourceDirName:".",slug:"/0016-release-steps",permalink:"/decisions/0016-release-steps",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{},sidebar:"decisions",previous:{title:"Release Methodology for the s3gw project",permalink:"/decisions/0015-release-methodology"},next:{title:"Testing a release",permalink:"/decisions/0017-release-testing"}},o={},l=[{value:"Context and Problem Statement",id:"context-and-problem-statement",level:2},{value:"Note Before",id:"note-before",level:2},{value:"[Note on the <code>s3gw-charts</code> repository]",id:"s3gw-charts-note",level:3},{value:"Step-by-Step Release Process",id:"step-by-step-release-process",level:2},{value:"[Manual Process]",id:"manual-process",level:2},{value:"[Release Announcement]",id:"announcement",level:2},{value:"via Slack",id:"via-slack",level:3},{value:"via Email",id:"via-email",level:3},{value:"[Sanity Checks]",id:"sanity-checks",level:3}];function h(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",input:"input",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",sup:"sup",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"release-steps-for-the-s3gw-project",children:"Release Steps for the s3gw project"}),"\n",(0,t.jsx)(s.h2,{id:"context-and-problem-statement",children:"Context and Problem Statement"}),"\n",(0,t.jsxs)(s.p,{children:["Releasing is an essential process for the ",(0,t.jsx)(s.code,{children:"s3gw"})," project. Given the project is\ncomposed by various sub-projects, that need to be prepared, tested, and\neventually released, the Release Process is not trivial."]}),"\n",(0,t.jsxs)(s.p,{children:["This document defines and agrees on the steps required to release the ",(0,t.jsx)(s.code,{children:"s3gw"}),"\nproject, and results from splitting the ",(0,t.jsx)(s.a,{href:"/decisions/0007-release-process",children:"Release Process ADR"})," in\nthree documents: ",(0,t.jsx)(s.a,{href:"/decisions/0015-release-methodology",children:"Release Methodology"}),", Release Steps (this\ndocument), and ",(0,t.jsx)(s.a,{href:"/decisions/0017-release-testing",children:"Release Testing"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["This document supersedes the ",(0,t.jsx)(s.a,{href:"/decisions/0007-release-process",children:"Release Process ADR"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"note-before",children:"Note Before"}),"\n",(0,t.jsxs)(s.p,{children:["It is important to be familiar with the various concepts defined in the\n",(0,t.jsx)(s.a,{href:"/decisions/0015-release-methodology",children:"Release Methodology ADR"}),", and the release validation process\ndescribed in ",(0,t.jsx)(s.a,{href:"/decisions/0017-release-testing",children:"Release Testing"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"There are five repositories involved in the release process:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/aquarist-labs/s3gw/",children:(0,t.jsx)(s.code,{children:"s3gw"})}),": Where most of our tooling and infrastructure scripts live."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/aquarist-labs/s3gw-ui/",children:(0,t.jsx)(s.code,{children:"s3gw-ui"})}),": The User Interface for ",(0,t.jsx)(s.code,{children:"s3gw"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/aquarist-labs/s3gw-charts/",children:(0,t.jsx)(s.code,{children:"s3gw-charts"})}),": Containing the Helm Chart to deploy ",(0,t.jsx)(s.code,{children:"s3gw"})," in a\nKubernetes context."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/aquarist-labs/ceph/",children:(0,t.jsx)(s.code,{children:"ceph"})}),": Where the core backend of ",(0,t.jsx)(s.code,{children:"s3gw"})," lives."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/aquarist-labs/s3gw-cosi-driver",children:(0,t.jsx)(s.code,{children:"cosi-driver"})}),": The COSI driver for Kubernetes."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Of these, we refer to ",(0,t.jsx)(s.code,{children:"s3gw"})," as the project's repository, and the remaining four\nto be sub-projects of the ",(0,t.jsx)(s.code,{children:"s3gw"})," project."]}),"\n",(0,t.jsxs)(s.h3,{id:"s3gw-charts-note",children:["[Note on the ",(0,t.jsx)(s.code,{children:"s3gw-charts"})," repository]"]}),"\n",(0,t.jsxs)(s.p,{children:["The Helm Chart requires the containers to be available for download from Quay\nbefore it can be published. Therefore, we can't trigger the ",(0,t.jsx)(s.code,{children:"s3gw-charts"}),"\nrepository release workflow before the various containers have been built."]}),"\n",(0,t.jsxs)(s.p,{children:["In turn, the containers are only built during the ",(0,t.jsx)(s.code,{children:"s3gw"})," repository's release\nworkflow."]}),"\n",(0,t.jsxs)(s.p,{children:["However, to ensure the consistency of the release branch (and its various\nrelease versions), we must guarantee that the ",(0,t.jsx)(s.code,{children:"charts"})," submodule in the ",(0,t.jsx)(s.code,{children:"s3gw"}),"\nrepository is pointing to a commit representing the Helm Chart at the specific\nversion we are releasing."]}),"\n",(0,t.jsxs)(s.p,{children:["This becomes a bit of a ",(0,t.jsx)(s.em,{children:"chicken and egg"})," problem: we need to have a commit in\nthe ",(0,t.jsx)(s.code,{children:"s3gw-charts"})," repository we can point to from the ",(0,t.jsx)(s.code,{children:"s3gw"})," repository, so we\ncan build the containers, but we also need the containers first before we can\ntrigger the release workflow in ",(0,t.jsx)(s.code,{children:"s3gw-charts"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["This is overcome by having the release workflow being triggered ",(0,t.jsx)(s.em,{children:"on push"})," to\nbranches following a specific format in the ",(0,t.jsx)(s.code,{children:"s3gw-charts"})," repository, but using\na different branch to perform all required actions until then."]}),"\n",(0,t.jsxs)(s.p,{children:["Thanks to ",(0,t.jsx)(s.code,{children:"git"}),"'s nature, as long as the commit is ",(0,t.jsx)(s.em,{children:"somewhere"})," in the\nrepository, regardless of branch, it is a valid commit we can point to from the\n",(0,t.jsx)(s.code,{children:"s3gw"})," repository's ",(0,t.jsx)(s.code,{children:"charts"})," submodule."]}),"\n",(0,t.jsxs)(s.p,{children:["Therefore, we will be using branches in the format ",(0,t.jsx)(s.code,{children:"s3gw-vX.Y"})," for preparatory\nrelease actions, and a branch in the format ",(0,t.jsx)(s.code,{children:"vX.Y"})," when it is time to trigger\nthe chart's release workflow. Keep this in mind while following the release\nprocess steps."]}),"\n",(0,t.jsx)(s.h2,{id:"step-by-step-release-process",children:"Step-by-Step Release Process"}),"\n",(0,t.jsxs)(s.p,{children:["This section describes the release process, step by step. For a condensed\nversion of the release process, command by command, see the later section\n",(0,t.jsx)(s.a,{href:"#manual-process",children:"Manual Process"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["For example purposes, we assume we are releasing version ",(0,t.jsx)(s.code,{children:"0.99.0"}),"."]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["For each sub-project repository, and for the ",(0,t.jsx)(s.code,{children:"s3gw"})," repository, branch off\n",(0,t.jsx)(s.code,{children:"main"})," to a new release branch. This can be achieved via the GitHub web\nUI",(0,t.jsx)(s.sup,{children:(0,t.jsx)(s.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),", or by pushing the new branch to the repository via the CLI",(0,t.jsx)(s.sup,{children:(0,t.jsx)(s.a,{href:"#user-content-fn-2",id:"user-content-fnref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})}),".\nRelease branch names follow the ",(0,t.jsx)(s.code,{children:"s3gw-vX.Y"})," convention; i.e., ",(0,t.jsx)(s.code,{children:"s3gw-v0.99"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Ensure all sub-project repositories are checked out at the ",(0,t.jsx)(s.code,{children:"s3gw-v0.99"}),"\nbranch. Assuming ",(0,t.jsx)(s.code,{children:"upstream"})," as the source remote, and that the branching was\nperformed through the GitHub web UI (i.e., not manually through the CLI),\nchecking out looks like the following:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"git checkout upstream/s3gw-v0.99 -b s3gw-v0.99\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["In the ",(0,t.jsx)(s.code,{children:"s3gw-charts"})," repository, on branch ",(0,t.jsx)(s.code,{children:"s3gw-v0.99"}),", update the Chart\nversion to ",(0,t.jsx)(s.code,{children:"0.99.0"}),". The Chart file can be found in\n",(0,t.jsx)(s.code,{children:"charts/s3gw/Chart.yaml"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Stage and commit the updated Chart."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:'git add charts/s3gw/Chart.yaml\ngit commit --signoff --gpg-sign -m "Release v0.99.0"\n'})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["For each sub-project, tag the release branch as a release candidate",(0,t.jsx)(s.sup,{children:(0,t.jsx)(s.a,{href:"#user-content-fn-3",id:"user-content-fnref-3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})}),". Keep\nin mind that when tagging, creating a signed and annotated tag",(0,t.jsx)(s.sup,{children:(0,t.jsx)(s.a,{href:"#user-content-fn-4",id:"user-content-fnref-4","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"4"})})," is crucial."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:'git tag --annotate --sign -m "Release Candidate 1 for v0.99.0" s3gw-v0.99.0-rc1\n'})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["For each sub-project, push the ",(0,t.jsx)(s.code,{children:"s3gw-v0.99"})," branch, as well as the newly\ncreated tag."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"git push upstream s3gw-v0.99\ngit push upstream --tags s3gw-v0.99.0-rc1\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["In the ",(0,t.jsx)(s.code,{children:"s3gw"})," repository's newly created release branch, update the various\nsub-projects' state to reflect the now existing tags. This can be achieved in\nby checking out the appropriate tag on each individual sub-project's\nsubmodule directory. A commit will be necessary to persist the\nchanges. The following shows a trimmed example of what to do."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"# in the root of the s3gw repo, branch s3gw-v0.99\ncd ceph/\ngit remote update\ngit checkout origin/s3gw-v0.99.0-rc1\ncd ..\ngit add ceph/\n\n# repeat for the several other sub-projects\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Write the release notes for ",(0,t.jsx)(s.code,{children:"v0.99.0"})," into\n",(0,t.jsx)(s.code,{children:"docs/release-notes/s3gw-v.99.0.md"})," and update the ",(0,t.jsx)(s.code,{children:"latest"})," symlink in\n",(0,t.jsx)(s.code,{children:"docs/release-notes"})," to point to the newly created file."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Commit the changes required for the release candidate."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:'git commit --signoff --gpg-sign -m "Release Candidate 1 for v0.99.0"\n'})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Tag the ",(0,t.jsx)(s.code,{children:"s3gw"})," repository with the appropriate release candidate tag.\nIt is important, that this tag contains only the ",(0,t.jsx)(s.code,{children:"vX.Y.Z"})," version."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:'git tag --annotate --sign -m "Release Candidate 1 for v0.99.0" v0.99.0-rc1\n'})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Push the release branch and tag. This will trigger the release pipeline,\ncreating the various release artifacts and a draft release."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"git push upstream s3gw-v0.99\ngit push upstream --tags v0.99.0-rc1\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Once the containers have been created and pushed to Quay, it's time to start\nvalidating the release candidate. Please refer to the\n",(0,t.jsx)(s.a,{href:"/decisions/0017-release-testing",children:"Release Testing ADR"})," before continuing."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["If any patches needed to be backported at some point since the last release\ncandidate, please go back to ",(0,t.jsx)(s.code,{children:"step 5."})," and increase the release candidate\nversion by ",(0,t.jsx)(s.code,{children:"1"})," (i.e., ",(0,t.jsx)(s.code,{children:"-rc2"}),", ",(0,t.jsx)(s.code,{children:"-rc3"}),", etc.). Even if a particular sub-project\nrepository has not been changed, it is still crucial to tag it with the new\nrelease candidate version, for consistency across repositories."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Assuming everything goes well, we can now go through ",(0,t.jsx)(s.code,{children:"step 5."})," but, instead\nof tagging for a release candidate version, we will be tagging for the\nrelease version."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:'git tag --annotate --sign -m "Release v0.99.0" v0.99.0\ngit push upstream --tags v0.99.0\n'})}),"\n",(0,t.jsx)(s.p,{children:"By pushing the branch with the release tag, we will trigger the release\nworkflow that will build the various release artifacts and publish the\ncontainers on Quay."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Once the final release containers have been built, it is time to deal with\nthe ",(0,t.jsx)(s.code,{children:"s3gw-charts"})," repository and trigger the Helm Chart release (if you are\nunfamiliar with the problematic, please refer to the\n",(0,t.jsx)(s.a,{href:"#s3gw-charts-note",children:"this section"}),"). To do this, we simply push the contents\nof our ",(0,t.jsx)(s.code,{children:"s3gw-v0.99"})," branch to ",(0,t.jsx)(s.code,{children:"v0.99"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"git push upstream s3gw-v0.99:v0.99\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["As soon as the Helm Chart has been published on ",(0,t.jsx)(s.a,{href:"https://artifacthub.io/packages/helm/s3gw/s3gw",children:"ArtifactHub"}),",\nwe are ready to finalize the release."]}),"\n",(0,t.jsxs)(s.p,{children:["During the release workflow triggered in ",(0,t.jsx)(s.code,{children:"step 14."}),", a draft release was\ncreated for ",(0,t.jsx)(s.code,{children:"v0.99.0"}),". This can be found in the ",(0,t.jsx)(s.a,{href:"https://github.com/aquarist-labs/s3gw/releases",children:"releases page"})," in\nthe ",(0,t.jsx)(s.code,{children:"s3gw"})," GitHub repository web page."]}),"\n",(0,t.jsxs)(s.p,{children:["This release draft was built using the release notes file in the\n",(0,t.jsx)(s.code,{children:"s3gw-v0.99"})," branch, and will be pre-populated. Editing may be required to\nmake it presentable."]}),"\n",(0,t.jsx)(s.p,{children:"It can now be published."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Check if there are release drafts for previous Release Candidates. If so,\nremove them."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"It is now time to shout about the latest release from the rooftops. A\nrelease announcement should be sent to the various communication channels\nbeing used by the project."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["rancher-users Slack channel ",(0,t.jsx)(s.code,{children:"#s3gw"})]}),"\n",(0,t.jsxs)(s.li,{children:["SUSE Slack channel ",(0,t.jsx)(s.code,{children:"#discuss-s3gw"})]}),"\n",(0,t.jsxs)(s.li,{children:["project mailing list at ",(0,t.jsx)(s.code,{children:"s3gw@suse.com"})]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["The format for the release announcement can be found in the\n",(0,t.jsx)(s.a,{href:"#announcement",children:"Release Announcement"})," section."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Finally, we need to synchronize the ",(0,t.jsx)(s.code,{children:"main"})," branches of the ",(0,t.jsx)(s.code,{children:"s3gw"})," and the\n",(0,t.jsx)(s.code,{children:"s3gw-charts"})," repositories with their respective ",(0,t.jsx)(s.code,{children:"s3gw-v0.99"})," branches, so\nthe individual ",(0,t.jsx)(s.code,{children:"main"})," branches are up-to-date. This means cherry-picking the\nindividual release and release candidate commits into ",(0,t.jsx)(s.code,{children:"main"}),". You will need\nto check for the individual commits SHA1s yourself; you may ask for help\nfrom the team if you are unsure what to do. A good rule of thumb is to\ncherry-pick those commits that would make the ",(0,t.jsx)(s.code,{children:"main"})," branches represent the\nlatest release. For instance, in the ",(0,t.jsx)(s.code,{children:"s3gw"})," repository, this will likely\ninvolve the commits updating the submodules and the one adding the release\nnotes for ",(0,t.jsx)(s.code,{children:"v0.99.0"}),"; on the ",(0,t.jsx)(s.code,{children:"s3gw-charts"})," repository, it will mean the\ncommit updating the chart version to ",(0,t.jsx)(s.code,{children:"0.99.0"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"manual-process",children:"[Manual Process]"}),"\n",(0,t.jsxs)(s.p,{children:["Assuming we are releasing version ",(0,t.jsx)(s.code,{children:"0.99.0"}),", for every repository, first we need\nto branch off ",(0,t.jsx)(s.code,{children:"main"})," to a new branch ",(0,t.jsx)(s.code,{children:"s3gw-v0.99.0"}),". We can do this via the\nGitHub web UI or via the CLI. This document describes doing it via the CLI."]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Branch off ",(0,t.jsx)(s.code,{children:"main"})," into ",(0,t.jsx)(s.code,{children:"s3gw-v0.99.0"})]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"cd /aquarist-labs/s3gw-ceph.git\ngit remote update upstream\ngit checkout upstream/main -b s3gw-v0.99.0\n\ncd /aquarist-labs/s3gw-ui.git\ngit remote update upstream\ngit checkout upstream/main -b s3gw-v0.99.0\n\ncd /aquarist-labs/s3gw-cosi-driver.git\ngit remote update upstream\ngit checkout upstream/s3gw -b s3gw-v0.99.0\n\ncd /aquarist-labs/s3gw-charts.git\ngit remote update upstream\ngit checkout upstream/main -b s3gw-v0.99.0\n\ncd /aquarist-labs/s3gw.git\ngit remote update upstream\ngit checkout upstream/main -b s3gw-v0.99.0\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Update the Helm Chart version in\n",(0,t.jsx)(s.code,{children:"/aquarist-labs/s3gw-charts.git/charts/s3gw/Chart.yaml"})," to ",(0,t.jsx)(s.code,{children:"0.99.0"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Stage and commit the updated Chart"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:'cd /aquarist-labs/s3gw-charts.git\ngit add charts/s3gw/Chart.yaml\ngit commit --signoff --gpg-sign -m "Release v0.99.0"\n'})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"For each sub-project, tag the release branch as a release candidate, and push\nto upstream"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:'cd /aquarist-labs/s3gw-ceph.git\ngit tag --annotate --sign -m "Release Candidate 1 for v0.99.0" s3gw-v0.99.0-rc1\ngit push upstream s3gw-v0.99\ngit push upstream --tags s3gw-v0.99.0-rc1\n\ncd /aquarist-labs/s3gw-ui.git\ngit tag --annotate --sign -m "Release Candidate 1 for v0.99.0" s3gw-v0.99.0-rc1\ngit push upstream s3gw-v0.99\ngit push upstream --tags s3gw-v0.99.0-rc1\n\ncd /aquarist-labs/s3gw-cosi-driver.git\ngit tag --annotate --sign -m "Release Candidate 1 for v0.99.0" s3gw-v0.99.0-rc1\ngit push upstream s3gw-v0.99\ngit push upstream --tags s3gw-v0.99.0-rc1\n\ncd /aquarist-labs/s3gw-charts.git\ngit tag --annotate --sign -m "Release Candidate 1 for v0.99.0" s3gw-v0.99.0-rc1\ngit push upstream s3gw-v0.99\ngit push upstream --tags s3gw-v0.99.0-rc1\n'})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["In the ",(0,t.jsx)(s.code,{children:"s3gw"})," repository, update the submodules in the ",(0,t.jsx)(s.code,{children:"s3gw-v0.99"})," branch to\nmatch the tags that were created."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"cd /aquarist-labs/s3gw.git\n\ncd ceph/\ngit remote update origin\ngit checkout s3gw-v0.99.0-rc1\ncd ..\ngit add ceph/\n\ncd ui/\ngit remote update origin\ngit checkout s3gw-v0.99.0-rc1\ncd ..\ngit add ui/\n\ncd cosi-driver/\ngit remote update origin\ngit checkout s3gw-v0.99.0-rc1\ncd ..\ngit add cosi-driver/\n\ncd charts/\ngit remote update origin\ngit checkout s3gw-v0.99.0-rc1\ncd ..\ngit add charts/\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Write the release notes for ",(0,t.jsx)(s.code,{children:"v0.99.0"})," (e.g., ",(0,t.jsx)(s.code,{children:"/tmp/s3gw-v0.99.0.md"}),")"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"cd /aquarist-labs/s3gw.git/docs/release-notes\ncp /tmp/s3gw-v0.99.0.md s3gw-v0.99.0.md\nln -fs s3gw-v0.99.0.md latest\ngit add s3gw-v0.99.0.md\ngit add latest\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Commit changes required for the release candidate, and tag the commit. Note\nthat the tag format for the ",(0,t.jsx)(s.code,{children:"s3gw"})," repository is in the ",(0,t.jsx)(s.code,{children:"vX.Y.Z"})," format\ninstead of ",(0,t.jsx)(s.code,{children:"s3gw-vX.Y.Z"})," as for the remaining repositories"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:'cd /aquarist-labs/s3gw.git\ngit commit --signoff --gpg-sign -m "Release Candidate 1 for v0.99.0"\ngit tag --annotate --sign -m "Release Candidate 1 for v0.99.0" v0.99.0-rc1\n'})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Push the release branch and the tag"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"cd /aquarist-labs/s3gw.git\ngit push upstream s3gw-v0.99.0\ngit push upstream --tags v0.99.0-rc1\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Once the release workflow finishes, and the containers are available in\n",(0,t.jsx)(s.a,{href:"https://quay.io/organization/s3gw",children:"s3gw's Quay"}),", we can start testing the release candidate. Please\nrefer to the ",(0,t.jsx)(s.a,{href:"/decisions/0017-release-testing",children:"Release Testing ADR"})," for more information"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["If there is a need for further release candidates, go back to ",(0,t.jsx)(s.code,{children:"step 4."}),", and\nproceed as needed. Otherwise, we can trigger the final release build"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:'cd /aquarist-labs/s3gw.git\ngit tag --annotate --sign -m "Release v0.99.0" v0.99.0\ngit push upstream --tags v0.99.0\n'})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Once the final release containers have been built, we can then trigger the\nrelease workflow for the charts repository"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"cd /aquarist-labs/s3gw-charts.git\ngit push upstream s3gw-v0.99:v0.99\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["As soon as the Helm Chart has been published on ",(0,t.jsx)(s.a,{href:"https://artifacthub.io/packages/helm/s3gw/s3gw",children:"Artifact Hub"}),",\nwe can finalize the release. The next step is to publish the release draft\nthat was generated, which can be found in the ",(0,t.jsx)(s.a,{href:"https://github.com/aquarist-labs/s3gw/releases",children:"releases page"}),".\nThere may be drafts for the release candidates as well - delete them"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Announce the release on the various communication channels. Please refer to\nthe ",(0,t.jsx)(s.a,{href:"#announcement",children:"Release Announcement"})," section for more information."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Finally, we just synchronize the ",(0,t.jsx)(s.code,{children:"main"})," branches of the ",(0,t.jsx)(s.code,{children:"s3gw"})," and the\n",(0,t.jsx)(s.code,{children:"s3gw-charts"})," repositories with their respective ",(0,t.jsx)(s.code,{children:"s3gw-v0.99"})," branches, so\nthe individual ",(0,t.jsx)(s.code,{children:"main"})," branches are up-to-date. This means cherry-picking the\nindividual release and release candidate commits into ",(0,t.jsx)(s.code,{children:"main"}),". You will need\nto check for the individual commits SHA1s yourself; you may ask for help\nfrom the team if you are unsure what to do"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"cd /aquarist-labs/s3gw.git\ngit checkout upstream/main -b merge_v0.99_into_main\ngit cherry-pick -x --no-signoff <SHA1> [<SHA1>...]\ngit push upstream merge_v0.99_into_main\n\ncd /aquarist-labs/s3gw-charts.git\ngit checkout upstream/main -b merge_v0.99_into_main\ngit cherry-pick -x --no-signoff <SHA1> [<SHA1>...]\ngit push upstream merge_v0.99_into_main\n"})}),"\n",(0,t.jsxs)(s.p,{children:["And then open a Pull Request on each branch, from their respective\n",(0,t.jsx)(s.code,{children:"merge_v0.99_into_main"})," branches to ",(0,t.jsx)(s.code,{children:"main"}),", and ask for a review."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"announcement",children:"[Release Announcement]"}),"\n",(0,t.jsx)(s.h3,{id:"via-slack",children:"via Slack"}),"\n",(0,t.jsx)(s.p,{children:"Announce the release of the s3gw in the following Slack channels:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"SUSE workspace: #discuss-s3gw"}),"\n",(0,t.jsx)(s.li,{children:"Rancher Users workspace: #s3gw"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"  It's my pleasure to announce the release of :s3gw: S3 Gateway v0.99.0 :tada:\n\n  This release once again includes a couple of exciting changes, most notably:\n\n  - Refactoring of amazing things :male-mechanic:\n  - Various UI fixes and improvements :star2:\n  - Various chart improvements :helm-intensifies:\n  - More awesomeness :awesome:\n\n  Breaking Changes:\n\n  - The on-disk format of the metadata store has changed. Volumes previously\n    used with an older version of s3gw are not guaranteed to work with this\n    and following versions.\n\n  Get the container images from:\n\n  - quay.io/s3gw/s3gw:v0.99.0\n  - quay.io/s3gw/s3gw-ui:v0.99.0\n    or just use the :helm: chart\n"})}),"\n",(0,t.jsx)(s.h3,{id:"via-email",children:"via Email"}),"\n",(0,t.jsx)(s.p,{children:"Announce the release via our s3gw mailing list by sending an email to the list:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"To: s3gw@suse.com\n\nSubject: Release v0.99.0\n\n  It's my pleasure to announce the release of S3 Gateway v0.99.0\n\n  This release once again includes a couple of exciting changes, most notably:\n\n  - Refactoring of the amazing things\n  - Various UI fixes and improvements\n  - Various chart improvements\n  - More awesomeness\n\n  Breaking Changes:\n\n  - The on-disk format of the metadata store has changed. Volumes previously\n    used with an older version of s3gw are not guaranteed to work with this\n    and following versions.\n\n  Sources for the release are available here[1]\n  Get the container images from:\n\n  - quay.io/s3gw/s3gw:v0.99.0\n  - quay.io/s3gw/s3gw-ui:v0.99.0\n\n  or just use the helm chart[2]\n\n  [1] https://github.com/aquarist-labs/s3gw/releases/tag/v0.99.0\n  [2] https://artifacthub.io/packages/helm/s3gw/s3gw\n"})}),"\n",(0,t.jsx)(s.h3,{id:"sanity-checks",children:"[Sanity Checks]"}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ",(0,t.jsx)(s.code,{children:"s3gw"})," container has been published on Quay for ",(0,t.jsx)(s.code,{children:"vX.Y.Z"}),"."]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ",(0,t.jsx)(s.code,{children:"s3gw-ui"})," container has been published on Quay for ",(0,t.jsx)(s.code,{children:"vX.Y.Z"}),"."]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","both containers are appropriately tagged with ",(0,t.jsx)(s.code,{children:"vX.Y.Z"})," on Quay."]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","both containers are tagged with ",(0,t.jsx)(s.code,{children:"latest"})," on Quay."]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ",(0,t.jsx)(s.code,{children:"latest"})," version containers are the same as the ",(0,t.jsx)(s.code,{children:"vX.Y.Z"})," containers on\nQuay."]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Helm Chart has been properly updated for ",(0,t.jsx)(s.code,{children:"vX.Y.Z"}),"."]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Helm Chart for ",(0,t.jsx)(s.code,{children:"vX.Y.Z"})," is visible on ",(0,t.jsx)(s.a,{href:"https://artifacthub.io/packages/helm/s3gw/s3gw",children:"ArtifactHub"}),". This can take\nabout 20 minutes."]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","The release notes are in place, both on the ",(0,t.jsx)(s.code,{children:"s3gw"})," repository's ",(0,t.jsx)(s.code,{children:"main"}),"\nbranch and on the ",(0,t.jsx)(s.code,{children:"s3gw-vX.Y"})," branch."]}),"\n"]}),"\n",(0,t.jsxs)(s.section,{"data-footnotes":!0,className:"footnotes",children:[(0,t.jsx)(s.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{id:"user-content-fn-1",children:["\n",(0,t.jsxs)(s.p,{children:["For example, for a ",(0,t.jsx)(s.code,{children:"v0.99.0"})," release, for the ",(0,t.jsx)(s.code,{children:"s3gw"}),"\nrepository, go to the ",(0,t.jsx)(s.a,{href:"https://github.com/aquarist-labs/s3gw/branches",children:"Branches Page"})," and click the ",(0,t.jsx)(s.code,{children:"New branch"}),"\nbutton. ",(0,t.jsx)(s.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{id:"user-content-fn-2",children:["\n",(0,t.jsxs)(s.p,{children:["For example, for a ",(0,t.jsx)(s.code,{children:"v0.99.0"})," release, ",(0,t.jsx)(s.code,{children:"git branch --copy main s3gw-v0.99"})," ",(0,t.jsx)(s.a,{href:"#user-content-fnref-2","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{id:"user-content-fn-3",children:["\n",(0,t.jsxs)(s.p,{children:["Please refer to ",(0,t.jsx)(s.a,{href:"https://git-scm.com/book/en/v2/Git-Basics-Tagging",children:"Git's Documentation"})," for more information on\nTagging. ",(0,t.jsx)(s.a,{href:"#user-content-fnref-3","data-footnote-backref":"","aria-label":"Back to reference 3",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{id:"user-content-fn-4",children:["\n",(0,t.jsxs)(s.p,{children:["Annotated tags keep information about creation time, author, a message,\nare checksummed, and can be signed, being full fledged git objects. For a\nrelease it is important to keep this information. A lightweight tag, on the\nother hand, is often used for temporary purposes. ",(0,t.jsx)(s.a,{href:"#user-content-fnref-4","data-footnote-backref":"","aria-label":"Back to reference 4",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>c});var t=n(6540);const r={},i=t.createContext(r);function a(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);