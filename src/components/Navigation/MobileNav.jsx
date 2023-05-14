import { useState } from 'react';
import ResponsiveNavLink from './ResponsiveNavLink';

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const path = window.location.pathname;

  const handleOpen = () => {
    setOpen(!open);
  };

  const funcLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  return (
    <>
      <button
        className='focus:outline-none'
        onClick={() => {
          handleOpen();
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
          color='white'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25'
          />
        </svg>
      </button>
      <div
        className={`${
          open ? 'block' : 'hidden'
        } absolute top-10 right-5 rounded-md w-56 overflow-hidden bg-white `}
      >
        <ResponsiveNavLink
          href='/beranda'
          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
          activeClassName='bg-gray-100 text-gray-900'
        >
          Dashboard
        </ResponsiveNavLink>
        <ResponsiveNavLink
          href='/users'
          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
          activeClassName='bg-gray-100 text-gray-900'
        >
          Users
        </ResponsiveNavLink>
        <ResponsiveNavLink
          href='/users'
          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
          activeClassName='bg-gray-100 text-gray-900'
        >
          Surat Ijin
        </ResponsiveNavLink>
        <div className='w-full h-px bg-gray-300 my-1' />
        {path === '/' ? (
          <ResponsiveNavLink
            href='/login'
            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
            activeClassName='bg-gray-100 text-gray-900'
          >
            Login
          </ResponsiveNavLink>
        ) : (
          <ResponsiveNavLink
            href='/login'
            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
            activeClassName='bg-gray-100 text-gray-900'
            funcLogout={funcLogout}
          >
            Logout
          </ResponsiveNavLink>
        )}
      </div>
    </>
  );
};

export default MobileNav;
