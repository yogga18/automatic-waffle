import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  const path = window.location.pathname;

  return (
    <nav className='fixed top-0 w-full flex justify-between px-5 h-12 bg-gradient-to-r from-green-800 to-green-600 pt-2'>
      <div
        className='cursor-pointer text-white hover:text-gray-400 transition duration-700 ease-in-out'
        onClick={() => {
          navigate('/');
        }}
      >
        SIMPEG
      </div>
      <ul className='flex gap-3'>
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
        {path === '/' ? (
          <li
            className='cursor-pointer text-white hover:text-gray-400 transition duration-700 ease-in-out'
            onClick={() => {
              navigate('/users');
            }}
          >
            <b>Login</b>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Navigation;
