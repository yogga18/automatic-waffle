import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Cards from '../../components/Card';
import Layout from '../../components/Layouts';
import * as XLSX from 'xlsx';
import { genderCheck, isActiveCheck } from '../../utils';

const SegmentasiUsers = () => {
  const location = useLocation();
  const data = location.state || [];

  const exportXlsx = () => {
    if (data.length === 0) {
      return toast.warning('Oppss... Data is empty');
    } else {
      const sheet = data.map((item, index) => ({
        No: index + 1,
        Nama: item.name || '-',
        Nip: item.nip || '-',
        Institusi: item.institusi || '-',
        Fakultas: item.fakultas || '-',
        Prodi: item.prodi || '-',
        Email: item.email || '-',
        Alamat: item.address || '-',
        Gender: genderCheck(item.gender) || '-',
        Active: isActiveCheck(item.active) || '-',
      }));

      let wb = XLSX.utils.book_new();
      let ws = XLSX.utils.json_to_sheet(sheet);
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      XLSX.writeFile(wb, 'Data_Dosen.xlsx');
    }
  };

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
        <Cards data={data} action={false} />
      </div>
    </Layout>
  );
};

export default SegmentasiUsers;
