import React from "react";
import { Link, graphql } from "gatsby";

export default function Post({
  title,
  subtitle,
  date,
  formattedDate,
  slug,
  externalLink,
  children
}) {
  return (
    <article className="post">
      <header className="post-header">
        <h1>
          {externalLink ? (
            <a href={externalLink}>{title}</a>
          ) : (
            <Link to={slug}>{title}</Link>
          )}
        </h1>
        <aside>
          <Link to={slug}>
            <time dateTime={date}>{formattedDate}</time>
            {subtitle && (
              <>
                {" — "}
                <span dangerouslySetInnerHTML={{ __html: subtitle }} />
              </>
            )}
          </Link>
        </aside>
      </header>
      {children}
    </article>
  );
}

export const query = graphql`
  fragment Post on MarkdownRemark {
    fields {
      title
      subtitle
      slug
      summary
      externalLink
      date: date(formatString: "YYYY-MM-DD")
      formattedDate: date(formatString: "MMMM Do YYYY")
    }
  }
`;
