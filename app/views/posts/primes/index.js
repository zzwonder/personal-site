import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Helmet from 'react-helmet';

import Main from '../../../layouts/Main';

import Prime from './Prime';
import part1 from './part1.md';

const Post = () => (
  <Main fullPage>
    <article className="post" id="post">
      <Helmet title="Primes | Blog" />
      <header>
        <div className="title">
          <h2><Link to="/blog/primes">Prime Visualizations</Link></h2>
          <p>Webworker Sacks Spiral, Ulam Spiral</p>
        </div>
      </header>
      <ReactMarkdown
        source={part1}
      />
      <Prime />
    </article>
  </Main>
);

export default Post;
