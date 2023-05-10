import Layout from '../../components/Layouts';
import { useNavigate } from 'react-router';
import Users from '../../components/Users';

const Beranda = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <h1 className='text-center'>Beranda</h1>
      <button
        onClick={() => {
          navigate('/create-user');
        }}
      >
        Create User
      </button>
      <Users />
    </Layout>
  );
};

export default Beranda;
