import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from '../../store/surat/action';

const Cards = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { deletUserReducer } = useSelector((state) => state.suratReducers);

  const handleUpdate = (user) => {
    navigate(`/update-user/${user.id}`);
  };

  const handleDelete = (user) => {
    dispatch(deleteUser(user.id));
  };

  console.log('deletUserReducer', deletUserReducer);

  return (
    <div>
      {data.map((user) => (
        <div key={user.id} className='bg-red-500 my-5'>
          <div
            style={{
              cursor: 'pointer',
            }}
            onClick={() => {
              navigate(`/user-detail/${user.id}`);
            }}
          >
            <p>{user.name}</p>
            <p>{user.nip}</p>
          </div>
          <div className='pt-5'>
            <button
              onClick={() => {
                handleDelete(user);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                handleUpdate(user);
              }}
            >
              Update
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

Cards.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Cards;
