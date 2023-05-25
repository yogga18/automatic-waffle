import Layout from '../../components/Layouts';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../store/users/action';
import { useNavigate } from 'react-router';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { getAllUsersReducers } = useSelector((state) => state.usersReducers);

  const [password1, setPassword1] = useState(true);
  const [password2, setPassword2] = useState(true);

  const showPassword1 = (e, val) => {
    e.preventDefault();
    if (val === 1) {
      setPassword1(!password1);
    } else {
      setPassword2(!password2);
    }
  };

  const checkUserIsExist = (values) => {
    const user = getAllUsersReducers.data.find(
      (item) => item.nip === values.nip
    );

    console.log(user);

    if (user) {
      return user;
    } else {
      return false;
    }
  };

  const handleSubmit = (values) => {
    const userIsExist = checkUserIsExist(values);

    if (userIsExist.nip === values.nip) {
      return toast.success('NIP yang anda masukkan sudah terdaftar');
    } else {
      navigate('/login');
    }
  };

  const formik = useFormik({
    initialValues: {
      nip: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      nip: Yup.string().required('Required').max(9, 'Max 9 characters'),
      password: Yup.string()
        .required('Password is Required')
        .min(8, 'Min 8 characters')
        .matches(
          /[a-z]/g,
          'Password must contain at least 1 lowercase letter ❗'
        )
        .matches(
          /[A-Z]/g,
          'Password must contain at least 1 uppercase letter ❗'
        )
        .matches(/[0-9]/g, 'Password must contain at least 1 digit ❗')
        .matches(
          /[!@#$%^&*(),.?":{}|<>]/g,
          'Password must contain at least 1 special character ❗'
        )
        .matches(/^\S*$/, 'Password cannot contain spaces ❗'),
      confirmPassword: Yup.string()
        .required('Required')
        .oneOf(
          [Yup.ref('password')],
          'The password you entered is not the same ❗'
        ),
    }),
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

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
                    showPassword1(e, 1);
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

            <div className='my-6'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                <p className='text-black'>
                  Confirm Password <b className='text-red-500'>*</b>
                </p>
              </label>
              <div className='flex gap-3'>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  name='confirmPassword'
                  type={password2 ? 'password' : 'text'}
                  placeholder='*******'
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <button
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline transition duration-600 ease-in-out'
                  onClick={(e) => {
                    showPassword1(e, 2);
                  }}
                >
                  👁️
                </button>
              </div>
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <p className='text-red-500 text-xs italic'>
                    {formik.errors.confirmPassword}
                  </p>
                )}
            </div>

            <div className='flex items-center justify-between'>
              <button
                type='submit'
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-600 ease-in-out'
              >
                Register
              </button>
              <a
                className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
                href='/login'
              >
                Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
