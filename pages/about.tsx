import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';

// import Main from '../layouts/Main';

import markdown from '../content/about.md';
/*
const count = markdown.split(/\s+/)
  .map((s) => s.replace(/\W/g, ''))
  .filter((s) => s.length).length;
*/
// Make all hrefs react router links

// const markdown = await import(`../content/about.md`);

// const LinkRenderer = ({ ...children }) => <Link {...children} />;
const count = 5;
const About = () => (
  <>
    <Head>
    <title>About</title>  
    </Head>
    <article className="post" id="about">
      <header>
        <div className="title">
          <h2><Link href="/about">About Me</Link></h2>
          <p>(in about {count} words)</p>
        </div>
      </header>
      <ReactMarkdown
        source={markdown}
        escapeHtml={false}
      />
    </article>
  </>
);

export default About;
