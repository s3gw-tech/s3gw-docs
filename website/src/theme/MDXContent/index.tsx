import React from "react";
import { useDoc } from "@docusaurus/theme-common/internal";
import { DocFrontMatter } from "@docusaurus/plugin-content-docs";
import MDXContent from "@theme-original/MDXContent";
import type MDXContentType from "@theme/MDXContent";
import type { WrapperProps } from "@docusaurus/types";
import Link from "@docusaurus/Link";

type Props = WrapperProps<typeof MDXContentType>;
type FrontMatter = DocFrontMatter & { [id: string]: any };

const decisionsFrontMatter = [
  "status",
  "superseded-by",
  "date",
  "deciders",
  "consulted",
  "informed",
];

function getDecisionValue(value: string): JSX.Element {
  let v = value;
  if (v.endsWith(".md") || v.endsWith(".mdx")) {
    v = v.replace(/\.mdx?/, "");
    return <Link to={v}>{v}</Link>;
  }
  return <>{v}</>;
}

function getDecisionItem(key: string, value: string): JSX.Element {
  return (
    <div className="row">
      <div className="col col--3">
        <span style={{ fontWeight: "bold" }} className="margin-right--md">
          {key}:
        </span>
      </div>
      <div className="col col--9">
        <span>{getDecisionValue(value)}</span>
      </div>
    </div>
  );
}

function getDecisionFrontMatter(frontMatter: FrontMatter): JSX.Element {
  const keys = Object.keys(frontMatter);
  return (
    <>
      <div className="container">
        {keys.map((key: string) => {
          if (decisionsFrontMatter.includes(key)) {
            return getDecisionItem(key, frontMatter[key]);
          }
        })}
      </div>
    </>
  );
}

function hasDecisionFrontMatter(frontMatter: FrontMatter): boolean {
  return (
    Object.keys(frontMatter).find((value: string) =>
      decisionsFrontMatter.includes(value)
    ) !== undefined
  );
}

export default function MDXContentWrapper(props: Props): JSX.Element {
  const doc = useDoc();
  return (
    <>
      {hasDecisionFrontMatter(doc.frontMatter) && (
        <div className="card margin-bottom--md">
          <div className="card__body">
            {getDecisionFrontMatter(doc.metadata.frontMatter)}
          </div>
        </div>
      )}
      <MDXContent {...props} />
    </>
  );
}
