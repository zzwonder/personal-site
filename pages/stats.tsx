import Link from 'next/link';
import Head from 'next/head';

import Layout from '../components/layout';

import Personal from '../components/Stats/Personal';
import Site from '../components/Stats/Site';

const Stats = () => (
  <Layout>
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
  </Layout>
);

export default Stats;
