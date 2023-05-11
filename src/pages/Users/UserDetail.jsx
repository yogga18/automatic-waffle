import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layouts';
import { useEffect } from 'react';
import { getUserById } from '../../store/surat/action';
import avatar from '../../assets/img/avatar.png';

const UserDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { getUserByIdReducer } = useSelector((state) => state.suratReducers);

  useEffect(() => {
    dispatch(getUserById(id));
  }, []);

  console.log('getUserByIdReducer', getUserByIdReducer.data);

  return (
    <Layout>
      <div className='container mx-auto'>
        {getUserByIdReducer.isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className='w-full h-full bg-slate-500 my-16 py-5 px-44'>
            <p>sss</p>
            {/* <div className='bg-white'>
              <div className='flex'>
                <div className='bg-blue-200 w-11/12'>
                  <h1 className='text-start font-bold text-blue-800'>
                    {getUserByIdReducer.data.name}
                  </h1>
                  <h1 className='text-start font-thin text-blue-800'>
                    Program Studi {getUserByIdReducer.data.prodi}
                  </h1>
                </div>
                <div>
                  <img src={avatar} alt='blank_avatar' className='w-32 h-32' />
                </div>
              </div>
              <div className='flex'></div>
            </div> */}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default UserDetail;
