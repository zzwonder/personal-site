import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Helmet from 'react-helmet';

import Main from '../../../layouts/Main';

import part1 from './part1.md';

const Post = () => (
  <Main>
    <article className="post" id="post-comments">
      <Helmet title="Comments | Blog" />
      <header>
        <div className="title">
          <h2><Link to="/blog/comments">Some notes on building this website</Link></h2>
          <p>Hello and welcome to my very first blog post.</p>
        </div>
      </header>
      <ReactMarkdown
        source={part1}
      />
    </article>
  </Main>
);

export default Post;
