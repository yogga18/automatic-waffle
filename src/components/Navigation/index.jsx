import { useNavigate } from 'react-router-dom';
import MobileNav from './MobileNav';

const Navigation = () => {
  const navigate = useNavigate();
  const path = window.location.pathname;

  return (
    <nav className='fixed top-0 w-full flex justify-between px-5 h-12 bg-gradient-to-r from-green-800 to-green-600 pt-2 z-50'>
      <div
        className='cursor-pointer text-white hover:text-gray-400 transition duration-700 ease-in-out'
        onClick={() => {
          navigate('/');
        }}
      >
        SIMPEG
      </div>
      <ul className='hidden md:flex gap-3'>
        <li
          className='cursor-pointer  text-white hover:text-gray-400 transition duration-700 ease-in-out'
          onClick={() => {
            navigate('/beranda');
          }}
        >
          <b>Beranda</b>
        </li>
        <li
          className='cursor-pointer text-white hover:text-gray-400 transition duration-700 ease-in-out'
          onClick={() => {
            navigate('/users');
          }}
        >
          <b>Users</b>
        </li>
        {path === '/' || path === '/login' || path === '/register' ? (
          <li
            className='cursor-pointer text-white hover:text-gray-400 transition duration-700 ease-in-out'
            onClick={() => {
              navigate('/login');
            }}
          >
            <b>Login</b>
          </li>
        ) : (
          <li
            className='cursor-pointer text-white hover:text-gray-400 transition duration-700 ease-in-out'
            onClick={() => {
              localStorage.removeItem('user');
              navigate('/');
            }}
          >
            <b>Logout</b>
          </li>
        )}
      </ul>
      <div className='block md:hidden cursor-pointer'>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navigation;
