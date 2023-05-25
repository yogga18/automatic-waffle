import Layout from '../../components/Layouts';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  getDropDownSuratIjin,
  getSuratIjinById,
} from '../../store/ijin/action';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';

const CreateSurat = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { dropdownSuratIjinReducers, getSuratIjinByIdReducers } = useSelector(
    (state) => state.suratIjinReducers
  );

  const handleSumbitForm = (values) => {
    values.start = `${values.start}T17:00:00.000Z`;
    values.end = `${values.end}T17:00:00.000Z`;

    if (id) {
      const payload = {
        ...values,
        id: id,
      };

      console.log('Update Data', payload);
    } else {
      const payload = {
        ...values,
      };

      console.log('Create new Data', payload);
    }
  };

  const initialValues = {
    judul: getSuratIjinByIdReducers.data.judul || '',
    name: getSuratIjinByIdReducers.data.name || '',
    nip: getSuratIjinByIdReducers.data.nip || '',
    keterangan: getSuratIjinByIdReducers.data.keterangan || '',
    category: getSuratIjinByIdReducers.data.category || '',
    start: getSuratIjinByIdReducers.data.start || '',
    end: getSuratIjinByIdReducers.data.end || '',
  };

  const validationSchema = Yup.object().shape({
    judul: Yup.string().required('Required'),
    name: Yup.string().required('Required'),
    nip: Yup.string().required('Required'),
    keterangan: Yup.string().required('Required'),
    category: Yup.string().required('Required'),
    start: Yup.string().required('Required'),
    end: Yup.string().required('Required'),
  });

  const categorySurat = (dropdownSuratIjinReducers.data || []).map((item) => ({
    value: item.value,
    label: item.label,
  }));

  useEffect(() => {
    dispatch(getSuratIjinById(id));
    dispatch(getDropDownSuratIjin());
  }, []);

  console.log('getSuratIjinByIdReducers', getSuratIjinByIdReducers);

  return (
    <Layout>
      <div className='my-10'>
        <div className='my-16 flex justify-start'>
          <p className='mx-5'>{id ? 'Edit Surat Ijin' : 'Create Surat Ijin'}</p>
        </div>
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            handleSumbitForm(values);
          }}
        >
          {(formik) => (
            <Form onSubmit={formik.handleSubmit}>
              <div className='flex flex-col'>
                <div className='flex flex-col mb-4'>
                  <label htmlFor='judul'>
                    Judul <b className='text-red-500'>*</b>
                  </label>
                  <input
                    type='text'
                    name='judul'
                    id='judul'
                    className='border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400'
                    placeholder='Judul'
                    value={formik.values.judul}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  <ErrorMessage
                    name='judul'
                    component='p'
                    className='text-red-500 text-xs italic'
                  />
                </div>

                <div className='flex flex-col mb-4'>
                  <label htmlFor='name'>
                    Category <b className='text-red-500'>*</b>
                  </label>
                  <Field name='category'>
                    {({ field, form, meta }) => (
                      <Select
                        {...field}
                        isDisabled={dropdownSuratIjinReducers.isLoading}
                        classNamePrefix='select2-selection'
                        options={categorySurat}
                        onChange={(val) =>
                          form.setFieldValue('category', val.value)
                        }
                        value={
                          categorySurat.find(
                            (option) => option.value === parseInt(field.value)
                          ) ?? ''
                        }
                        className={
                          meta.touched && meta.error
                            ? 'border-red-500'
                            : 'border-gray-400'
                        }
                      />
                    )}
                  </Field>

                  <ErrorMessage
                    name='category'
                    component='p'
                    className='text-red-500 text-xs italic'
                  />
                </div>

                <div className='flex flex-col mb-4'>
                  <label htmlFor='name'>
                    Name <b className='text-red-500'>*</b>
                  </label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    className='border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400'
                    placeholder='Name'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  <ErrorMessage
                    name='name'
                    component='p'
                    className='text-red-500 text-xs italic'
                  />
                </div>

                <div className='flex flex-col mb-4'>
                  <label htmlFor='nip'>
                    Nip <b className='text-red-500'>*</b>
                  </label>
                  <input
                    type='text'
                    name='nip'
                    id='nip'
                    className='border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400'
                    placeholder='Nomor Induk Pegawai (NIP)'
                    value={formik.values.nip}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  <ErrorMessage
                    name='nip'
                    component='p'
                    className='text-red-500 text-xs italic'
                  />
                </div>

                <div className='flex justify-center'>
                  <div>
                    <Field name='start'>
                      {({ field, form }) => (
                        <div>
                          <label htmlFor='start'>
                            Start Date <b className='text-red-500'>*</b>
                          </label>
                          <DatePicker
                            id='start'
                            {...field}
                            selected={
                              field.value ? new Date(field.value) : null
                            }
                            onChange={(date) =>
                              form.setFieldValue('start', date.toISOString())
                            }
                            value={
                              field.value
                                ? new Date(field.value)
                                    .toISOString()
                                    .split('T')[0]
                                : ''
                            }
                            dateFormat='yyyy-MM-dd HH:mm:ss'
                          />
                        </div>
                      )}
                    </Field>
                  </div>
                  <div>
                    <Field name='end'>
                      {({ field, form }) => (
                        <div>
                          <label htmlFor='end'>
                            Start Date <b className='text-red-500'>*</b>
                          </label>
                          <DatePicker
                            id='end'
                            {...field}
                            selected={
                              field.value ? new Date(field.value) : null
                            }
                            onChange={(date) =>
                              form.setFieldValue('end', date.toISOString())
                            }
                            value={
                              field.value
                                ? new Date(field.value)
                                    .toISOString()
                                    .split('T')[0]
                                : ''
                            }
                            dateFormat='yyyy-MM-dd HH:mm:ss'
                          />
                        </div>
                      )}
                    </Field>
                  </div>
                </div>

                <div className='flex flex-col mb-4'>
                  <label htmlFor='keterangan'>
                    Keterangan <b className='text-red-500'>*</b>
                  </label>
                  <textarea
                    type='text'
                    name='keterangan'
                    id='keterangan'
                    className='border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400'
                    placeholder='Keterangan Surat'
                    value={formik.values.keterangan}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  <ErrorMessage
                    name='keterangan'
                    component='p'
                    className='text-red-500 text-xs italic'
                  />
                </div>
              </div>
              <div className='flex justify-end mt-10'>
                <button
                  type='submit'
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                >
                  {id ? 'Edit' : 'Create'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Layout>
  );
};

export default CreateSurat;
