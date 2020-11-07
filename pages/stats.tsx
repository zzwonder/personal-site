import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

//import Main from '../layouts/Main';

import Personal from '../components/Stats/Personal';
import Site from '../components/Stats/Site';

const Stats = () => (
  <>
    <Head>
    <title>Stats</title>  
    </Head>
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2><Link href="/stats">Stats</Link></h2>
        </div>
      </header>
      <Personal />
      <Site />
    </article>
  </>
);

export default Stats;
