import React from "react";
import { useDoc } from "@docusaurus/theme-common/internal";
import { DocFrontMatter } from "@docusaurus/plugin-content-docs";
import MDXContent from "@theme-original/MDXContent";
import type MDXContentType from "@theme/MDXContent";
import type { WrapperProps } from "@docusaurus/types";
import Link from "@docusaurus/Link";
import { DateTime } from "luxon";

type Props = WrapperProps<typeof MDXContentType>;
type FrontMatter = DocFrontMatter & { [id: string]: any };

const customFrontMatter = [
  "status",
  "superseded-by",
  "date",
  "updated",
  "deciders",
  "consulted",
  "informed",
];

function getValue(value: string): JSX.Element {
  let v = value;
  if (typeof value === "string" && (v.endsWith(".md") || v.endsWith(".mdx"))) {
    v = v.replace(/\.mdx?/, "");
    return <Link to={v}>{v}</Link>;
  }
  const date = DateTime.fromISO(v);
  if (date.isValid) {
    v = date.toFormat("LLL dd, yyyy");
  }
  return <>{v}</>;
}

function getItem(key: string, value: string): JSX.Element {
  return (
    <div className="row">
      <div className="col col--3">
        <span style={{ fontWeight: "bold" }} className="margin-right--md">
          {key}:
        </span>
      </div>
      <div className="col col--9">
        <span>{getValue(value)}</span>
      </div>
    </div>
  );
}

function getCustomFrontMatter(frontMatter: FrontMatter): JSX.Element {
  const keys = Object.keys(frontMatter);
  return (
    <>
      <div className="container">
        {keys.map((key: string) => {
          if (customFrontMatter.includes(key)) {
            return getItem(key, frontMatter[key]);
          }
        })}
      </div>
    </>
  );
}

function hasCustomFrontMatter(frontMatter: FrontMatter): boolean {
  return (
    Object.keys(frontMatter).find((value: string) =>
      customFrontMatter.includes(value)
    ) !== undefined
  );
}

export default function MDXContentWrapper(props: Props): JSX.Element {
  const doc = useDoc();
  return (
    <>
      {hasCustomFrontMatter(doc.frontMatter) && (
        <div className="card margin-bottom--md">
          <div className="card__body">
            {getCustomFrontMatter(doc.metadata.frontMatter)}
          </div>
        </div>
      )}
      <MDXContent {...props} />
    </>
  );
}
