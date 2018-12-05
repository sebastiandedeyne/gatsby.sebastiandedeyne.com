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
    <article style={{ marginBottom: "6rem" }}>
      <header
        style={{
          lineHeight: "1.2",
          marginBottom: "3rem",
          textAlign: "center"
        }}
      >
        <h1
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            fontFamily: "var(--mono)"
          }}
        >
          {externalLink ? (
            <a href={externalLink}>{title}</a>
          ) : (
            <Link to={slug}>{title}</Link>
          )}
        </h1>
        <aside
          style={{
            marginTop: "0.33rem",
            fontSize: "0.9rem",
            color: "var(--text-light)"
          }}
        >
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
      isSummarized
      externalLink
      date: date(formatString: "YYYY-MM-DD")
      formattedDate: date(formatString: "MMMM Do YYYY")
    }
  }
`;
