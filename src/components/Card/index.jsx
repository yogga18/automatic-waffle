import PropTypes from 'prop-types';

const Cards = ({ data }) => {
  console.log('props dari component search user', data);

  return (
    <div>
      <p>
        Component Card siap nerima data dari Form Search Users (cards di panggil
        oleh component users)
      </p>
    </div>
  );
};

Cards.propTypes = {
  data: PropTypes.object.isRequired, // nanti ini di ganti jadi array
};

export default Cards;
