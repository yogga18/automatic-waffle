import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserById, createUsers, updateUser } from '../../store/surat/action';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layouts';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const CreateUser = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { getUserByIdReducer } = useSelector((state) => state.suratReducers);

  const handelSubmit = (values) => {
    const payload = {
      name: values.name,
      nip: values.nip,
      institusi: values.institusi,
      fakultas: values.fakultas,
      prodi: values.prodi,
      email: values.email,
      address: values.address,
      gender: values.gender,
    };

    if (id) {
      dispatch(updateUser(id, payload));
      // console.log('payload', payload);
    } else {
      dispatch(createUsers(payload));
      // console.log('payload', payload);
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: getUserByIdReducer.data.id || '',
      name: getUserByIdReducer.data.name || '',
      nip: getUserByIdReducer.data.nip || '',
      institusi: getUserByIdReducer.data.institusi || '',
      fakultas: getUserByIdReducer.data.fakultas || '',
      prodi: getUserByIdReducer.data.prodi || '',
      email: getUserByIdReducer.data.email || '',
      address: getUserByIdReducer.data.address || '',
      gender: getUserByIdReducer.data.gender || '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      nip: Yup.string().required('Required').max(9, 'Max 9 Character'),
      institusi: Yup.string().required('Required'),
      fakultas: Yup.string().required('Required').max(30, 'Max 30 Character'),
      prodi: Yup.string().required('Required'),
      email: Yup.string().required('Required').email('Invalid Email'),
      address: Yup.string().required('Required'),
      gender: Yup.string().required('Required'),
    }),
    onSubmit: handelSubmit,
  });

  useEffect(() => {
    dispatch(getUserById(id));
  }, []);

  console.log('getUserByIdReducer', getUserByIdReducer.data);

  return (
    <Layout>
      <form onSubmit={formik.handleSubmit}>
        <div className='flex justify-center align-middle gap-52'>
          <div className='flex gap-3 flex-col'>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                name='name'
                type='text'
                placeholder='Name'
                className='form-control'
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name && (
                <p className='text-danger'>{formik.errors.name}</p>
              )}
            </div>

            <div className='form-group'>
              <label htmlFor='nip'>NIP</label>
              <input
                name='nip'
                type='text'
                placeholder='NIP'
                className='form-control'
                value={formik.values.nip}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.nip && formik.errors.nip && (
                <p className='text-danger'>{formik.errors.nip}</p>
              )}
            </div>

            <div className='form-group'>
              <label htmlFor='institusi'>Institusi</label>
              <input
                name='institusi'
                type='text'
                placeholder='Institusi'
                className='form-control'
                value={formik.values.institusi}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.institusi && formik.errors.institusi && (
                <p className='text-danger'>{formik.errors.institusi}</p>
              )}
            </div>

            <div className='form-group'>
              <select
                name='gender'
                value={formik.values.gender}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value=''>-- Select Gender --</option>
                <option value='P'>Perempuan</option>
                <option value='L'>Laki-Laki</option>
              </select>
            </div>
          </div>

          <div className='flex gap-3 flex-col'>
            <div className='form-group'>
              <label htmlFor='fakultas'>Fakultas</label>
              <input
                name='fakultas'
                type='text'
                placeholder='Fakultas'
                className='form-control'
                value={formik.values.fakultas}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.fakultas && formik.errors.fakultas && (
                <p className='text-danger'>{formik.errors.fakultas}</p>
              )}
            </div>

            <div className='form-group'>
              <label htmlFor='prodi'>Prodi</label>
              <input
                name='prodi'
                type='text'
                placeholder='Prodi'
                className='form-control'
                value={formik.values.prodi}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.prodi && formik.errors.prodi && (
                <p className='text-danger'>{formik.errors.prodi}</p>
              )}
            </div>

            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                name='email'
                type='email'
                placeholder='Email'
                className='form-control'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <p className='text-danger'>{formik.errors.email}</p>
              )}
            </div>

            <div className='form-group'>
              <label htmlFor='address'>Address</label>
              <textarea
                name='address'
                type='text'
                placeholder='Address'
                className='form-control'
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.address && formik.errors.address && (
                <p className='text-danger'>{formik.errors.address}</p>
              )}
            </div>
          </div>
        </div>

        <button type='submit' size='small' className='bg-blue-500'>
          {id ? 'Update' : 'Create'} User
        </button>
      </form>
    </Layout>
  );
};

export default CreateUser;
