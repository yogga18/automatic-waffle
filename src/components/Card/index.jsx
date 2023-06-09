import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from '../../store/users/action';

const Cards = ({ data, action }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUpdate = (user) => {
    navigate(`/update-user/${user.id}`);
  };

  const handleDelete = (user) => {
    if (window.confirm('Are you sure to delete this user?')) {
      dispatch(deleteUser(user.id)).then((respose) => {
        if (respose.success) {
          window.location.reload();
        }
      });
    }
  };

  return (
    <div className='w-full sm:mx-10 md:mx-40'>
      {data.map((user) => (
        <div
          key={user.id}
          className='bg-white shadow-md hover:bg-slate-200 transition duration-700 ease-in-out my-5 rounded-md py-5'
        >
          <div className='flex justify-end mb-3'>
            <span
              className={`inline-block rounded-md text-gray-600 ${
                user.active === 0
                  ? 'bg-red-300'
                  : user.active === 1
                  ? 'bg-green-300'
                  : 'bg-yellow-300'
              } px-2 py-1 text-xs font-bold mr-3`}
            >
              {user.active === 0
                ? 'Non - Aktif'
                : user.active === 1
                ? 'Aktif'
                : 'Ijin Belajar'}
            </span>
          </div>
          <div
            className='cursor-pointer px-10 flex justify-between items-center align-middle'
            onClick={() => {
              navigate(`/user-detail/${user.id}`);
            }}
            title='Click to see detail'
          >
            <div className='hidden md:block'>
              <p>Nama : {user.name}</p>
              <p>NIP : {user.nip}</p>
              <p>
                Gender : {user.gender === 'L' ? 'Laki - laki' : 'Perempuan'}
              </p>
            </div>
            <div className='hidden md:block'>
              <p>Institusi : {user.institusi}</p>
              <p>Fakultas : {user.fakultas}</p>
              <p>Prodi : {user.prodi}</p>
            </div>
            <div className='blcok md:hidden lg:hidden xl:hidden flex flex-col gap-1 items-center w-full'>
              <p>Nama : {user.name}</p>
              <p>NIP : {user.nip}</p>
              <p>Institusi : {user.institusi}</p>
              <p>Fakultas : {user.fakultas}</p>
              <p>Prodi : {user.prodi}</p>
            </div>
          </div>
          <hr className='border-t border-salt-300 my-3'></hr>
          {action ? (
            <div className='flex justify-end gap-3 align-middle pr-5'>
              <button
                onClick={() => {
                  handleDelete(user);
                }}
                title='Click to delete user'
                className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded hover:text-white transition duration-700 ease-in-out'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                  />
                </svg>
              </button>

              <button
                onClick={() => {
                  handleUpdate(user);
                }}
                title='Click to update user'
                className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded hover:text-white transition duration-700 ease-in-out'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125'
                  />
                </svg>
              </button>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

Cards.propTypes = {
  data: PropTypes.array.isRequired,
  action: PropTypes.bool.isRequired,
};

export default Cards;
