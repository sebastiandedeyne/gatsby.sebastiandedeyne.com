import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout title="About" wrap>
      <div className="markup" style={{ paddingBottom: "3rem" }}>
        <p>
          I'm a web designer and developer from Ghent, employed at{" "}
          <a href="https://spatie.be">Spatie</a> in Antwerp, Belgium. I build
          websites and applications with JavaScript, PHP, HTML and CSS.
        </p>
        <p>
          I try to <a href="https://twitter.com/sebdedeyne">tweet</a>,{" "}
          <Link to="/">blog</Link>, and do talks every now and then too.
        </p>
        <p>
          I enjoy learning other frameworks, libraries and languages to get a
          bird's eye view of what's happening in other ecosystems. Research and
          experimentation with foreign concepts serve as a great inspiration to
          solve problems in my familiar tech stack.
        </p>
        <p>
          I'm also a big open source proponent. Sharing code and knowledge is
          beneficial to all involved. A selection of open source projects I'm
          particularly happy with:
        </p>
        <h2>Colophon</h2>
        <p>
          This website is powered by <a href="https://laravel.com">Laravel</a>.
          The source code is hosted and publicly available on{" "}
          <a href="https://github.com/sebastiandedeyne/sebastiandedeyne.com">
            GitHub
          </a>
          .
        </p>
      </div>
    </Layout>
  );
}
