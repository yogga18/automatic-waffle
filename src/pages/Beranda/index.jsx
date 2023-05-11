import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardCount from '../../components/Card/CardCount';
import Layout from '../../components/Layouts';
import { getAllSuratJalan } from '../../store/surat/action';

const Beranda = () => {
  const dispatch = useDispatch();

  const { suratJalanReducer } = useSelector((state) => state.suratReducers);

  const count = suratJalanReducer.data.length || 0;
  const lakiLaki =
    suratJalanReducer.data.filter((item) => item.gender === 'L') || [];

  const lakiLakiCount = lakiLaki.length || 0;

  const perempuan =
    suratJalanReducer.data.filter((item) => item.gender === 'P') || [];

  const perempuanCount = perempuan.length || 0;

  useEffect(() => {
    dispatch(getAllSuratJalan());
  }, []);

  return (
    <Layout>
      <div>
        <div>
          <h1>
            <b>User</b>
          </h1>
          <hr />
        </div>
        <div className='flex gap-3 flex-wrap m-5'>
          <CardCount
            title={'Jumlah Dosen'}
            count={count}
            url={'/users-count'}
          />
          <CardCount title={'Pria'} count={lakiLakiCount} url={'/users-male'} />
          <CardCount
            title={'Wanita'}
            count={perempuanCount}
            url={'/users-female'}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Beranda;
