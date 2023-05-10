import PropTypes from 'prop-types';
import { Fragment } from 'react';
import Footer from '../Footer';
import Navigation from '../Navigation';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navigation />
      {children}
      <Footer />
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
