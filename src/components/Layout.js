import "../styles/global.css";
import "../styles/markup.css";

import React from "react";
import Meta from "./Meta";
import { Link } from "gatsby";

export default function Layout({ title, children }) {
  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "var(--gutter)",
        paddingRight: "var(--gutter)",
        width: "100%",
        maxWidth: "40rem"
      }}
    >
      <Meta title={title} />
      <nav
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
      </nav>
      <main>{children}</main>
    </div>
  );
}
