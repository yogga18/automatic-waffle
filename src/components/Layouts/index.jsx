import PropTypes from 'prop-types';
import Footer from '../Footer';
import Navigation from '../Navigation';

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen overflow-x-hidden'>
      <Navigation />
      <main className='flex-1 h-fit'>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
