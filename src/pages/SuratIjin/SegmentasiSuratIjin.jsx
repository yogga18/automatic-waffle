import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Layout from '../../components/Layouts';
import * as XLSX from 'xlsx';
import moment from 'moment/moment';

const SegmentasiSuratJalan = () => {
  const location = useLocation();
  const data = location.state || [];

  const momentIndonesia = (data) => {
    return moment(data).format('ll');
  };

  const exportXlsx = () => {
    if (data.length === 0) {
      return toast.warning('Oppss... Data is empty');
    } else {
      const sheet = data.map((item, index) => ({
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

  console.log('data', data);

  return (
    <Layout>
      <div className='pt-20 ml-16'>
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
      <div className='flex justify-center align-middle py-10'>
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
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td className='border px-4 py-2'>{index + 1}</td>
                  <td className='border px-4 py-2'>{item.judul}</td>
                  <td className='border px-4 py-2'>{item.nip}</td>
                  <td className='border px-4 py-2'>{item.name}</td>
                  <td className='border px-4 py-2'>
                    {item.category === '1' ? <p> Surat Jalan</p> : 'Ijin Cuti'}
                  </td>
                  <td className='border px-4 py-2'>{item.keterangan}</td>
                  <td className='border px-4 py-2'>
                    {momentIndonesia(item.start)}
                  </td>
                  <td className='border px-4 py-2'>
                    {momentIndonesia(item.end)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default SegmentasiSuratJalan;
