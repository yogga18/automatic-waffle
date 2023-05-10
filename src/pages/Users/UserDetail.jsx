import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layouts';
import { useEffect } from 'react';
import { getUserById } from '../../store/surat/action';

const UserDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { getUserByIdReducer } = useSelector((state) => state.suratReducers);

  useEffect(() => {
    dispatch(getUserById(id));
  }, []);

  console.log('getUserByIdReducer', getUserByIdReducer.data);

  return (
    <Layout>
      {getUserByIdReducer.isLoading ? (
        <p>Loading...</p>
      ) : (
        <p>Name = {getUserByIdReducer.data.name}</p>
      )}
    </Layout>
  );
};

export default UserDetail;
