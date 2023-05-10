import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/Layouts';
import { getAllSuratJalan } from '../../store/surat/action';

const LandingPage = () => {
  const dispatch = useDispatch();
  const { suratJalanReducer } = useSelector((state) => state.suratReducers);

  console.log('suratJalanReducer', suratJalanReducer);

  useEffect(() => {
    dispatch(getAllSuratJalan());
  }, []);

  return (
    <Layout>
      <h1 className='text-3xl font-bold underline'>Landing Page</h1>
    </Layout>
  );
};

export default LandingPage;
