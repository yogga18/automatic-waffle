import PropTypes from 'prop-types';

const Card = ({ title }) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg p-5 bg-white hover:bg-slate-100 transition duration-500 ease-in-out'>
      <div>
        <div className='font-bold text-xl mb-2'>
          <p>{title}</p>
        </div>
        <div>
          <p className='text-gray-700 text-base'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Card;
