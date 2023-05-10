import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className='flex justify-between px-5 h-12 bg-red-400 pt-2'>
      <div
        className='cursor-pointer text-black hover:text-white transition duration-700 ease-in-out'
        onClick={() => {
          navigate('/');
        }}
      >
        LOGO
      </div>
      <ul className='flex gap-3'>
        <li
          className='cursor-pointer text-black hover:text-white transition duration-700 ease-in-out'
          onClick={() => {
            navigate('/beranda');
          }}
        >
          Beranda
        </li>
        <li className='cursor-pointer text-black hover:text-white transition duration-700 ease-in-out'>
          Beranda
        </li>
        <li className='cursor-pointer text-black hover:text-white transition duration-700 ease-in-out'>
          Beranda
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
