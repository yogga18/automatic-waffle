import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const CardCount = ({ title, count, url }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(url);
  };

  return (
    <div>
      <div
        onClick={() => {
          handleNavigate();
        }}
        className='cursor-pointer bg-white p-5 rounded-md h-26 w-36 shadow-lg zinc-600/50
        transition duration-700 ease-in-out hover:bg-gray-400 hover:text-white'
      >
        <p className='font-bold text-xl'>{count}</p>
        <hr />
        <p>{title}</p>
      </div>
    </div>
  );
};

CardCount.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};

export default CardCount;
