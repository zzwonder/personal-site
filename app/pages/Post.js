import React from 'react';
import { Link } from 'react-router';
import ReactMarkdown from 'react-markdown';
import Helmet from 'react-helmet';
import LinkRenderer from '../components/About/LinkRenderer';

import markdown from '../data/blog/posts.md';

const Post = () => (
  <article className="post" id="about">
    <Helmet title="Post Title" />
    <header>
      <div className="title">
        <h2><Link to="/about">Title</Link></h2>
        <p>summary.</p>
      </div>
    </header>
    <ReactMarkdown
      source={markdown}
      renderers={{
        Link: LinkRenderer,
      }}
    />
  </article>
);

export default Post;
