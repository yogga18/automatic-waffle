import moment from 'moment';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Layout from '../../components/Layouts';
import { getAllSuratIjin } from '../../store/ijin/action';
import * as XLSX from 'xlsx';

const SuratIjin = () => {
  const dispatch = useDispatch();

  const { getAllSuratIjinReducers } = useSelector(
    (state) => state.suratIjinReducers
  );

  const momentIndonesia = (data) => {
    return moment(data).format('ll');
  };

  const exportXlsx = () => {
    if (getAllSuratIjinReducers.data.length === 0) {
      return toast.warning('Oppss... Data is empty');
    } else {
      const sheet = getAllSuratIjinReducers.data.map((item, index) => ({
        No: index + 1,
        Nip: item.nip || '-',
        Institusi: item.name || '-',
        Nama: item.judul || '-',
        Fakultas: item.category || '-',
        Prodi: item.keterangan || '-',
        Start: momentIndonesia(item.start) || '-',
        End: momentIndonesia(item.end) || '-',
      }));

      let wb = XLSX.utils.book_new();
      let ws = XLSX.utils.json_to_sheet(sheet);
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      XLSX.writeFile(wb, 'Data_Surat_Jalan.xlsx');
    }
  };

  useEffect(() => {
    dispatch(getAllSuratIjin());
  }, []);

  // logging
  console.log('getAllSuratIjinReducers', getAllSuratIjinReducers);

  return (
    <Layout>
      <div className='py-24'>
        <div className='m-8'>
          <button
            onClick={() => {
              exportXlsx();
            }}
            className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded hover:text-white transition duration-700 ease-in-out'
            title='Exprot to Excel'
          >
            Excel
          </button>
        </div>
        <div className='mx-5'>
          {getAllSuratIjinReducers.isLoading ? (
            <p className='text-center'>Loading...</p>
          ) : getAllSuratIjinReducers.data.length === 0 ? (
            <p className='text-center'>Data Kosong</p>
          ) : (
            <table className='table-auto w-full'>
              <thead>
                <tr>
                  <th className='border px-4 py-2'>No</th>
                  <th className='border px-4 py-2'>Judul</th>
                  <th className='border px-4 py-2'>Nip</th>
                  <th className='border px-4 py-2'>Nama</th>
                  <th className='border px-4 py-2'>Perihal</th>
                  <th className='border px-4 py-2'>Keterangan</th>
                  <th className='border px-4 py-2'>Start</th>
                  <th className='border px-4 py-2'>End</th>
                  <th className='border px-4 py-2'>Action</th>
                </tr>
              </thead>
              <tbody>
                {getAllSuratIjinReducers.data.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className='border px-4 py-2'>{index + 1}</td>
                      <td className='border px-4 py-2'>{item.judul}</td>
                      <td className='border px-4 py-2'>{item.nip}</td>
                      <td className='border px-4 py-2'>{item.name}</td>
                      <td className='border px-4 py-2'>
                        {item.category === '1' ? 'Surat Jalan' : 'Ijin Cuti'}
                      </td>
                      <td className='border px-4 py-2'>{item.keterangan}</td>
                      <td className='border px-4 py-2'>
                        {momentIndonesia(item.start)}
                      </td>
                      <td className='border px-4 py-2'>
                        {momentIndonesia(item.end)}
                      </td>
                      <td className='border px-4 py-2'>
                        <div className='flex flex-col items-center gap-3'>
                          <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded hover:text-white transition duration-700 ease-in-out'>
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
                          <button className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded hover:text-white transition duration-700 ease-in-out'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
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
                          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded hover:text-white transition duration-700 ease-in-out'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              className='w-6 h-6'
                            >
                              <path
                                strokeLinecap='round'
                                d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
                              />
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SuratIjin;
