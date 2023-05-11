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

  return (
    <Layout>
      <div className='w-full h-full mx-auto my-24'>
        <h5 className='text-start mx-5'>
          {id ? 'Update User' : 'Create User'}
        </h5>
        <form
          onSubmit={formik.handleSubmit}
          className='bg-white rounded-lg shadow-lg w-3/4 sm:w-1/2 mx-auto p-4'
        >
          <div className='flex flex-col sm:flex-row justify-evenly gap-3 align-middle items-center'>
            <div className='flex gap-3 flex-col'>
              <div className='form-group flex flex-col'>
                <label htmlFor='name' className='text-white font-bold'>
                  <p className='text-black'>
                    Name <b className='text-red-500'>*</b>
                  </p>
                </label>
                <input
                  name='name'
                  type='text'
                  placeholder='Name'
                  className='form-control py-2 px-3 rounded-lg shadow-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-gray-50'
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className='text-red-500'>{formik.errors.name}</p>
                )}
              </div>

              <div className='form-group flex flex-col'>
                <label htmlFor='nip' className='text-white font-bold'>
                  <p className='text-black'>
                    NIP <b className='text-red-500'>*</b>
                  </p>
                </label>
                <input
                  name='nip'
                  type='text'
                  placeholder='NIP'
                  className='form-control py-2 px-3 rounded-lg shadow-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-gray-50'
                  value={formik.values.nip}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.nip && formik.errors.nip && (
                  <p className='text-red-500'>{formik.errors.nip}</p>
                )}
              </div>

              <div className='form-group flex flex-col'>
                <label htmlFor='institusi' className='text-white font-bold'>
                  <p className='text-black'>
                    Institusi <b className='text-red-500'>*</b>
                  </p>
                </label>
                <input
                  name='institusi'
                  type='text'
                  placeholder='Institusi'
                  className='form-control py-2 px-3 rounded-lg shadow-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-gray-50'
                  value={formik.values.institusi}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.institusi && formik.errors.institusi && (
                  <p className='text-red-500'>{formik.errors.institusi}</p>
                )}
              </div>

              <div className='form-group flex flex-col'>
                <label htmlFor='gender' className='text-white font-bold'>
                  <p className='text-black'>
                    Gender <b className='text-red-500'>*</b>
                  </p>
                </label>
                <select
                  name='gender'
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className='form-control py-2 px-3 rounded-lg shadow-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-gray-50'
                >
                  <option value=''>-- Select Gender --</option>
                  <option value='P'>Perempuan</option>
                  <option value='L'>Laki-Laki</option>
                </select>
              </div>
            </div>

            <div className='flex gap-3 flex-col'>
              <div className='form-group flex flex-col'>
                <label htmlFor='fakultas' className='text-white font-bold'>
                  <p className='text-black'>
                    Fakultas <b className='text-red-500'>*</b>
                  </p>
                </label>
                <input
                  name='fakultas'
                  type='text'
                  placeholder='Fakultas'
                  className='form-control py-2 px-3 rounded-lg shadow-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-gray-50'
                  value={formik.values.fakultas}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.fakultas && formik.errors.fakultas && (
                  <p className='text-red-500'>{formik.errors.fakultas}</p>
                )}
              </div>

              <div className='form-group flex flex-col'>
                <label htmlFor='prodi' className='text-white font-bold'>
                  <p className='text-black'>
                    Prodi <b className='text-red-500'>*</b>
                  </p>
                </label>
                <input
                  name='prodi'
                  type='text'
                  placeholder='Prodi'
                  className='form-control py-2 px-3 rounded-lg shadow-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-gray-50'
                  value={formik.values.prodi}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.prodi && formik.errors.prodi && (
                  <p className='text-red-500'>{formik.errors.prodi}</p>
                )}
              </div>

              <div className='form-group flex flex-col'>
                <label htmlFor='email' className='text-white font-bold'>
                  <p className='text-black'>
                    Email <b className='text-red-500'>*</b>
                  </p>
                </label>
                <input
                  name='email'
                  type='email'
                  placeholder='Email'
                  className='form-control py-2 px-3 rounded-lg shadow-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-gray-50'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className='text-red-500'>{formik.errors.email}</p>
                )}
              </div>

              <div className='form-group flex flex-col'>
                <label htmlFor='Address' className='text-white font-bold'>
                  <p className='text-black'>
                    Address <b className='text-red-500'>*</b>
                  </p>
                </label>
                <textarea
                  name='address'
                  type='text'
                  placeholder='Address'
                  className='form-control py-2 px-3 rounded-lg shadow-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-gray-50'
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.address && formik.errors.address && (
                  <p className='text-red-500'>{formik.errors.address}</p>
                )}
              </div>
            </div>
          </div>
          <div className='flex justify-end mt-3'>
            {id ? (
              <button
                type='submit'
                className='bg-yellow-500 text-white hover:bg-yellow-400 hover:text-black rounded-full py-2 px-3 font-bold transition duration-700 ease-in-out'
              >
                Update
              </button>
            ) : (
              <button
                type='submit'
                className='bg-blue-500 text-white hover:bg-blue-400 hover:text-black rounded-full py-2 px-3 font-bold transition duration-700 ease-in-out'
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default CreateUser;
