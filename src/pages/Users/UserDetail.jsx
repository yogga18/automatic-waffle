import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layouts';
import { useEffect } from 'react';
import { getUserById } from '../../store/users/action';
import avatar from '../../assets/img/avatar.png';

const UserDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { getUserByIdReducer } = useSelector((state) => state.usersReducers);

  useEffect(() => {
    dispatch(getUserById(id));
  }, []);

  return (
    <Layout>
      <div className='container mx-auto'>
        {getUserByIdReducer.isLoading ? (
          <p>Loading...</p>
        ) : (
          // make me a responsive card please
          <div className='flex flex-col md:flex-row justify-center items-center my-24'>
            <div className='w-full md:w-1/3 '>
              <div className=' shadow-lg rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2'>
                <div className='flex justify-center'>
                  <img
                    src={avatar}
                    alt='avatar'
                    className='w-40 h-40 rounded-full'
                  />
                </div>

                <div className='flex flex-col justify-center align-middle items-center my-5'>
                  <p className='text-2xl font-bold'>
                    {getUserByIdReducer.data.name}
                  </p>
                  <p className='text-xl font-bold'>
                    {getUserByIdReducer.data.nip}
                  </p>
                </div>

                <div className='flex justify-between'>
                  <div>
                    <p className='text-xl font-thin'>Institusi</p>
                  </div>
                  <div>
                    <p className='text-xl font-thin'>
                      {getUserByIdReducer.data.institusi}
                    </p>
                  </div>
                </div>
                <hr className='mb-3' />

                <div className='flex justify-between'>
                  <div>
                    <p className='text-xl font-thin'>Fakultas</p>
                  </div>
                  <div>
                    <p className='text-xl font-thin'>
                      {getUserByIdReducer.data.fakultas}
                    </p>
                  </div>
                </div>
                <hr className='mb-3' />

                <div className='flex justify-between'>
                  <div>
                    <p className='text-xl font-thin'>Prodi</p>
                  </div>
                  <div>
                    <p className='text-xl font-thin'>
                      {getUserByIdReducer.data.prodi}
                    </p>
                  </div>
                </div>
                <hr className='mb-3' />

                <div className='flex justify-between'>
                  <div>
                    <p className='text-xl font-thin'>Email</p>
                  </div>
                  <div>
                    <p className='text-xl font-thin'>
                      {getUserByIdReducer.data.email}
                    </p>
                  </div>
                </div>
                <hr className='mb-3' />

                <div className='flex justify-between'>
                  <div>
                    <p className='text-xl font-thin'>Alamat</p>
                  </div>
                  <div>
                    <p className='text-xl font-thin'>
                      {getUserByIdReducer.data.address}
                    </p>
                  </div>
                </div>
                <hr className='mb-3' />

                <div className='flex justify-between'>
                  <div>
                    <p className='text-xl font-thin'>Gender</p>
                  </div>
                  <div>
                    <p className='text-xl font-thin'>
                      {getUserByIdReducer.data.gender === 'L'
                        ? 'Laki - laki'
                        : 'Perempuan'}
                    </p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default UserDetail;
