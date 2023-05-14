import PropTypes from 'prop-types';

const ResponsiveNavLink = ({ href, children, funcLogout }) => {
  const handleLogout = () => {
    funcLogout();
  };

  return (
    <a
      onClick={handleLogout}
      href={href}
      className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'
    >
      {children}
    </a>
  );
};
ResponsiveNavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  funcLogout: PropTypes.func,
};
export default ResponsiveNavLink;
