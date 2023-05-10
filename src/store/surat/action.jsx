import apiInstance from '../../api';

import {
  GET_ALL_SURAT_JALAN_REQUEST,
  GET_ALL_SURAT_JALAN_SUCCESS,
  GET_ALL_SURAT_JALAN_FAILURE,
} from './actionTypes';

export const getAllSuratJalan = () => {
  return async (dispatch) => {
    // request = store loading
    dispatch({
      type: GET_ALL_SURAT_JALAN_REQUEST,
      payload: {
        loading: true,
        data: [],
        errorMesssage: false,
      },
    });

    try {
      const res = await apiInstance.get('/users');

      dispatch({
        type: GET_ALL_SURAT_JALAN_SUCCESS,
        payload: {
          loading: false,
          data: res.data,
          errorMessage: false,
        },
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_SURAT_JALAN_FAILURE,
        payload: {
          loading: false,
          data: [],
          errorMessage: error.message,
        },
      });
    }
  };
};
