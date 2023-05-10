import { getAllSuratJalan } from '../../store/surat/action';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../Card';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';
import { toast } from 'react-toastify';

const Users = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [flagSearch, setFlagSearch] = useState(true);
  const [userSearch, setUserSearch] = useState([]);

  const dispatch = useDispatch();

  const { suratJalanReducer } = useSelector((state) => state.suratReducers);

  const exportXlsx = () => {
    if (suratJalanReducer.data.length === 0) {
      return toast.warning('Oppss... Data is empty');
    } else {
      const sheet = suratJalanReducer.data.map((item, index) => ({
        No: index + 1,
        Nama: item.name || '-',
        Nip: item.nip || '-',
        Institusi: item.institusi || '-',
        Fakultas: item.fakultas || '-',
        Prodi: item.prodi || '-',
        Email: item.email || '-',
        Alamat: item.address || '-',
      }));

      let wb = XLSX.utils.book_new();
      let ws = XLSX.utils.json_to_sheet(sheet);
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      XLSX.writeFile(wb, 'Data_Dosen.xlsx');
    }
  };

  const handleSearch = () => {
    let users = suratJalanReducer.data.filter((item) => {
      return item.name.toLowerCase().includes(userName.toLowerCase());
    });

    setUserSearch(users);
    setFlagSearch(!flagSearch);
  };

  useEffect(() => {
    dispatch(getAllSuratJalan());
  }, []);

  console.log(suratJalanReducer);

  return (
    <div>
      <div className='flex justify-between px-5 mt-3 my-8'>
        <button
          onClick={() => {
            exportXlsx();
          }}
          disabled={suratJalanReducer.isLoading}
          className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
        >
          Excel
        </button>
        <button
          onClick={() => {
            navigate('/create-user');
          }}
          disabled={suratJalanReducer.isLoading}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Create User
        </button>
      </div>
      <div className='form-search-wrapper'>
        <input
          placeholder='Search User'
          type='text'
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />

        <button
          type='button'
          onClick={() => {
            handleSearch();
          }}
        >
          Search
        </button>
      </div>

      <div className='cards-wrapper'>
        {suratJalanReducer.isLoading ? <p>Loading</p> : null}
        {flagSearch ? (
          <Cards data={suratJalanReducer.data} />
        ) : !flagSearch && userSearch.length === 0 ? (
          <p>Data Tidak Ditemukan</p>
        ) : (
          <Cards data={userSearch} />
        )}
      </div>
    </div>
  );
};

export default Users;
