import React from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

import links from '../data/posts';

const Blog = () => (
  <article className="post" id="blog">
    <Helmet title="Blog" />
    <header>
      <div className="title">
        <h2><Link to="/blog">Blog</Link></h2>
        <p>Mostly bad ideas. Updated infrequently, if at all.</p>
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
  </article>
);

export default Blog;
