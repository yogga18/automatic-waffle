import Layout from '../../components/Layouts';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { encLocalStrg } from '../../utils/crypto';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../store/users/action';
import { toast } from 'react-toastify';

const Login = () => {
  const dispatch = useDispatch();

  const { getAllUsersReducers } = useSelector((state) => state.usersReducers);

  const [password1, setPassword1] = useState(true);

  const showPassword1 = (e) => {
    e.preventDefault();

    setPassword1(!password1);
  };

  const checkUserIsExist = (values) => {
    const user = getAllUsersReducers.data.find(
      (item) => item.nip === values.nip
    );

    if (user) {
      return user;
    } else {
      return false;
    }
  };

  const handleSubmit = (values) => {
    const userIsExist = checkUserIsExist(values);

    if (userIsExist.nip === values.nip) {
      const encryptedToken = encLocalStrg(values);

      localStorage.setItem('user', encryptedToken);
      window.location.href = '/beranda';
    } else {
      return toast.error('NIP tidak ditemukan');
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      nip: '',
      password: '',
    },
    validationSchema: Yup.object({
      nip: Yup.string().required('Required').max(9, 'Max 9 characters'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  // logging
  console.log('getAllUsersReducers', getAllUsersReducers);

  return (
    <Layout>
      <div className='flex justify-center align-middle items-center py-24'>
        <div className='w-full max-w-xs'>
          <p className='text-center'>Login</p>
          <form
            className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
            onSubmit={formik.handleSubmit}
          >
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                <p className='text-black'>
                  Nip <b className='text-red-500'>*</b>
                </p>
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                name='nip'
                type='text'
                placeholder='Nip'
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

            <div className='my-6'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                <p className='text-black'>
                  Password <b className='text-red-500'>*</b>
                </p>
              </label>
              <div className='flex gap-3'>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  name='password'
                  type={password1 ? 'password' : 'text'}
                  placeholder='*******'
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <button
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline transition duration-600 ease-in-out'
                  onClick={(e) => {
                    showPassword1(e);
                  }}
                >
                  👁️
                </button>
              </div>
              {formik.touched.password && formik.errors.password && (
                <p className='text-red-500 text-xs italic'>
                  {formik.errors.password}
                </p>
              )}
            </div>

            <div className='flex items-center justify-between'>
              <button
                type='submit'
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-600 ease-in-out'
              >
                Login
              </button>
              <a
                className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
                href='/register'
              >
                Register
              </a>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
