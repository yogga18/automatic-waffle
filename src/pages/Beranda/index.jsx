import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardCount from '../../components/Card/CardCount';
import Layout from '../../components/Layouts';
import { getAllUsers } from '../../store/users/action';

const Beranda = () => {
  const dispatch = useDispatch();

  const { getAllUsersReducers } = useSelector((state) => state.usersReducers);

  const count = getAllUsersReducers.data.length || 0;

  const lakiLaki =
    getAllUsersReducers.data.filter((item) => item.gender === 'L') || [];

  const perempuan =
    getAllUsersReducers.data.filter((item) => item.gender === 'P') || [];

  const lakiLakiCount = lakiLaki.length || 0;

  const perempuanCount = perempuan.length || 0;

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <Layout>
      <div className='mt-16'>
        <div className='mb-10'>
          <h1 className='ml-3'>
            <b>Monitoring Users</b>
          </h1>
          <hr />
          <div className='flex gap-3 flex-wrap m-5'>
            <CardCount
              title={'Jumlah Dosen'}
              count={count}
              url={'/users-count'}
              data={getAllUsersReducers.data}
            />
            <CardCount
              title={'Pria'}
              count={lakiLakiCount}
              url={'/users-male'}
              data={lakiLaki}
            />
            <CardCount
              title={'Wanita'}
              count={perempuanCount}
              url={'/users-female'}
              data={perempuan}
            />
          </div>
        </div>

        <div className='mb-10'>
          <h1>
            <b className='ml-3'>Monitoring Surat Izin</b>
          </h1>
          <hr />
        </div>
      </div>
    </Layout>
  );
};

export default Beranda;
