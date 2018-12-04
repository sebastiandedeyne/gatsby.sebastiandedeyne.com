import "../styles/app.css";
import "../styles/code.css";

import React from "react";
import Meta from "./Meta";
import { Link } from "gatsby";

export default function Layout({ title, children }) {
  return (
    <div className="container">
      <Meta title={title} />
      <nav className="nav">
        <header>
          <Link to="/">Sebastian De Deyne</Link>
        </header>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="https://twitter.com/sebdedeyne">Twitter</a>
          </li>
          <li>
            <a href="rss.xml">RSS</a>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
}
