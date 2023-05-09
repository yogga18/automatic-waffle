import PropTypes from 'prop-types';
import { Fragment } from 'react';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <h1>Header</h1>
      {children}
      <h1>Footer</h1>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
