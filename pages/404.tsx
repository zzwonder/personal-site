import Link from 'next/link';
import Head from 'next/head';

const PageNotFound = () => (
  <div className="not-found">
    <Head>
    <title>404</title>  
    </Head>
    <h1>Page Not Found.</h1>
    <p>Return to <Link href="/">index</Link>.</p>
  </div>
);

export default PageNotFound;
