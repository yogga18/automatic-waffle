import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserById, createUsers, updateUser } from '../../store/users/action';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../../components/Layouts';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

const CreateUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { getUserByIdReducer } = useSelector((state) => state.usersReducers);

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
      active: values.active,
    };

    if (id) {
      dispatch(updateUser(id, payload))
        .then((response) => {
          if (response.success) {
            toast.success('Success Update User');
            navigate('/users');
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error('Data gagal ditambahkan');
        });
    } else {
      dispatch(createUsers(payload))
        .then((response) => {
          if (response.success) {
            toast.success('Data berhasil ditambahkan');
            navigate('/users');
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error('Data gagal ditambahkan');
        });
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
      active: getUserByIdReducer.data.active || '',
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
      active: Yup.string().required('Required'),
    }),
    onSubmit: handelSubmit,
  });

  useEffect(() => {
    dispatch(getUserById(id));
  }, []);

  return (
    <Layout>
      <div className='flex justify-center align-middle items-center py-24'>
        <div className='w-full max-w-lg'>
          {id ? (
            <p className='text-center my-3 font-bold'>
              Update <b className='text-yellow-400'>User</b>
            </p>
          ) : (
            <p className='text-center my-3 font-bold'>
              Create a <b className='text-blue-400'>New User</b>
            </p>
          )}

          <form
            onSubmit={formik.handleSubmit}
            className='bg-gray-100 shadow-md rounded px-5 pt-5 pb-5 mb-4'
          >
            <div className='flex justify-between gap-3'>
              <div>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2'>
                    <p className='text-black'>
                      Name <b className='text-red-500'>*</b>
                    </p>
                  </label>
                  <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    name='name'
                    type='text'
                    placeholder='Name'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className='text-red-500 text-xs italic'>
                      {formik.errors.name}
                    </p>
                  )}
                </div>

                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2'>
                    <p className='text-black'>
                      NIP <b className='text-red-500'>*</b>
                    </p>
                  </label>
                  <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    name='nip'
                    type='text'
                    placeholder='NIP'
                    value={formik.values.nip}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.nip && formik.errors.nip && (
                    <p className='text-red-500 text-xs italic'>
                      {formik.errors.nip}
                    </p>
                  )}
                </div>

                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2'>
                    <p className='text-black'>
                      Institusi <b className='text-red-500'>*</b>
                    </p>
                  </label>
                  <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    name='institusi'
                    type='text'
                    placeholder='Institusi'
                    value={formik.values.institusi}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.institusi && formik.errors.institusi && (
                    <p className='text-red-500 text-xs italic'>
                      {formik.errors.institusi}
                    </p>
                  )}
                </div>

                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2'>
                    <p className='text-black'>
                      Gender <b className='text-red-500'>*</b>
                    </p>
                  </label>
                  <select
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    name='gender'
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value='' disabled>
                      -- Select Gender --
                    </option>
                    <option value='P'>Perempuan</option>
                    <option value='L'>Laki-Laki</option>
                  </select>
                  {formik.touched.gender && formik.errors.gender && (
                    <p className='text-red-500 text-xs italic'>
                      {formik.errors.gender}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2'>
                    <p className='text-black'>
                      Fakultas <b className='text-red-500'>*</b>
                    </p>
                  </label>
                  <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    name='fakultas'
                    type='text'
                    placeholder='Fakultas'
                    value={formik.values.fakultas}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  {formik.touched.fakultas && formik.errors.fakultas && (
                    <p className='text-red-500 text-xs italic'>
                      {formik.errors.fakultas}
                    </p>
                  )}
                </div>

                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2'>
                    <p className='text-black'>
                      Program Studi <b className='text-red-500'>*</b>
                    </p>
                  </label>
                  <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    name='prodi'
                    type='text'
                    placeholder='Prodi'
                    value={formik.values.prodi}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  {formik.touched.prodi && formik.errors.prodi && (
                    <p className='text-red-500 text-xs italic'>
                      {formik.errors.prodi}
                    </p>
                  )}
                </div>

                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2'>
                    <p className='text-black'>
                      Email <b className='text-red-500'>*</b>
                    </p>
                  </label>
                  <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    name='email'
                    type='email'
                    placeholder='Email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  {formik.touched.email && formik.errors.email && (
                    <p className='text-red-500 text-xs italic'>
                      {formik.errors.email}
                    </p>
                  )}
                </div>

                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2'>
                    <p className='text-black'>
                      Active <b className='text-red-500'>*</b>
                    </p>
                  </label>
                  <select
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    name='active'
                    value={formik.values.active}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value='' disabled>
                      -- isActive --
                    </option>
                    <option value={1}>Aktif</option>
                    <option value={0}>Non - Aktif</option>
                    <option value={2}>Ijin Belajar</option>
                  </select>
                  {formik.touched.active && formik.errors.active && (
                    <p className='text-red-500 text-xs italic'>
                      {formik.errors.active}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className='flex'>
              <div className='mb-4 w-full h-full'>
                <label className='block text-gray-700 text-sm font-bold mb-2'>
                  <p className='text-black'>
                    Address <b className='text-red-500'>*</b>
                  </p>
                </label>
                <textarea
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  name='address'
                  type='text'
                  placeholder='Address'
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.touched.address && formik.errors.address && (
                  <p className='text-red-500 text-xs italic'>
                    {formik.errors.address}
                  </p>
                )}
              </div>
            </div>

            <div className='flex justify-end mt-3'>
              {id ? (
                <button
                  type='submit'
                  className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                >
                  Update
                </button>
              ) : (
                <button
                  type='submit'
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CreateUser;
