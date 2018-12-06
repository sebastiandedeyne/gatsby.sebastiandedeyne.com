import "../styles/global.css";
import "../styles/markup.css";

import React from "react";
import Meta from "./Meta";
import { Link } from "gatsby";

export default function Layout({ title, wrap, children }) {
  return (
    <>
      <Meta title={title} />
      <Layout.Wrapper
        tag="nav"
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "0.5rem",
          marginBottom: "4rem",
          fontSize: "0.75rem",
          color: "var(--text-lighter)"
        }}
      >
        <header>
          <Link to="/">Sebastian De Deyne</Link>
        </header>
        <ul style={{ display: "flex" }}>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li style={{ marginLeft: "1rem" }}>
            <a href="https://twitter.com/sebdedeyne">Twitter</a>
          </li>
          <li style={{ marginLeft: "1rem" }}>
            <a href="/rss.xml">RSS</a>
          </li>
        </ul>
      </Layout.Wrapper>
      {wrap ? (
        <Layout.Wrapper tag="main">{children}</Layout.Wrapper>
      ) : (
        <main>{children}</main>
      )}
    </>
  );
}

Layout.Wrapper = function Wrapper({ children, tag = "div", style = null }) {
  const Element = tag;

  return (
    <Element
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "var(--gutter)",
        paddingRight: "var(--gutter)",
        width: "100%",
        maxWidth: "40rem",
        ...style
      }}
    >
      {children}
    </Element>
  );
};
