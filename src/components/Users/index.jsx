import { getAllSuratJalan } from '../../store/surat/action';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../Card';
const Users = () => {
  const dispatch = useDispatch();

  const { suratJalanReducer } = useSelector((state) => state.suratReducers);

  useEffect(() => {
    dispatch(getAllSuratJalan());
  }, []);

  return (
    <div>
      <div className='form-search-wrapper'>
        <p>
          Ini Form Search nanti ini yang fetch data terus data yang di dapat di
          parsing ke component card (Component users di panggil oleh Halaman
          Beranda)
        </p>
      </div>
      <div className='cards-wrapper'>
        <Cards data={suratJalanReducer} />
      </div>
    </div>
  );
};

export default Users;
