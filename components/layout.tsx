import Head from 'next/head';

import Header from './Template/Header';
import Nav from './Template/Nav';
// import ScrollToTop from './Template/ScrollToTop';
//     <ScrollToTop />

const Layout = ({
  children,
  title = "Michael D'Angelo",
  fullPage = false,
}) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <div id="wrapper">
      <Header />
      <div id="main">
        {children}
      </div>
      {fullPage ? null : <Nav />}
    </div>
  </>
);
/*
Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
};

Layout.defaultProps = {
  children: null,
  fullPage: false,
};
*/
export default Layout;
