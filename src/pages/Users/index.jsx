import { getAllSuratJalan } from '../../store/surat/action';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../../components/Card';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';
import { toast } from 'react-toastify';
import Layout from '../../components/Layouts';

const Users = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [flagSearch, setFlagSearch] = useState(false);
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
    setFlagSearch(true);
  };

  useEffect(() => {
    dispatch(getAllSuratJalan());
  }, []);

  console.log(suratJalanReducer);

  return (
    <Layout>
      <div>
        <div className='flex justify-between px-5 my-16'>
          <button
            onClick={() => {
              exportXlsx();
            }}
            disabled={suratJalanReducer.isLoading}
            className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded hover:text-white transition duration-700 ease-in-out'
            title='Exprot to Excel'
          >
            Excel
          </button>
          <button
            onClick={() => {
              navigate('/create-user');
            }}
            disabled={suratJalanReducer.isLoading}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:text-white transition duration-700 ease-in-out'
            title='Create a New User'
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
                d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
              />
            </svg>
          </button>
        </div>
        <div className='flex justify-end mr-10'>
          <div className='flex flex-row gap-3'>
            <input
              placeholder='Search User'
              type='text'
              value={userName}
              className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none'
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />

            <button
              className='rounded-full text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 hover:text-white transition duration-700 ease-in-out'
              type='button'
              onClick={() => {
                handleSearch();
              }}
              title='Cari Dosen Berdasarkan Nama'
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
                  d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                />
              </svg>
            </button>
          </div>
        </div>

        <div className='flex justify-center align-middle px-5'>
          {suratJalanReducer.isLoading ? <p>Loading</p> : null}
          {!flagSearch && <Cards data={suratJalanReducer.data} />}
          {flagSearch && userSearch.length === 0 && <p>Data Tidak Ditemukan</p>}
          {flagSearch && userSearch.length !== 0 && <Cards data={userSearch} />}
        </div>
      </div>
    </Layout>
  );
};

export default Users;
