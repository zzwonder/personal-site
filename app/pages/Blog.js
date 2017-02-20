import React from 'react';
import { Link } from 'react-router';
import ReactMarkdown from 'react-markdown';
import Helmet from 'react-helmet';
import LinkRenderer from '../components/About/LinkRenderer';

import links from '../data/blog/posts';
import markdown from '../data/blog/posts.md';

const Blog = (props) => (
  <article className="post" id="blog">
    <Helmet title="Blog" />
    <header>
      <div className="title">
        <h2><Link to="/about">Blog</Link></h2>
        <p>Updated infrequently, if at all.</p>
      </div>
    </header>
    <div className="links">
      {links.sort().map(article => (
        <span key={article.path}>
          <h3><Link to={article.path}>{article.title}</Link></h3>
          <p>{article.summary}</p>
        </span>
      ))}
    </div>
    {props.children}
  </article>
);

export default Blog;
