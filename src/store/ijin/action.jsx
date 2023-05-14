import apiInstance from '../../api';

import {
  GET_ALL_SURAT_IJIN_REQUEST,
  GET_ALL_SURAT_IJIN_SUCCESS,
  GET_ALL_SURAT_IJIN_FAILURE,
} from './actionTypes';

export const getAllUsers = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_ALL_SURAT_IJIN_REQUEST,
      payload: {
        loading: true,
        data: [],
        errorMesssage: false,
      },
    });

    try {
      const res = await apiInstance.get('/ijin');

      dispatch({
        type: GET_ALL_SURAT_IJIN_SUCCESS,
        payload: {
          loading: false,
          data: res.data.data,
          errorMessage: false,
        },
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_SURAT_IJIN_FAILURE,
        payload: {
          loading: false,
          data: [],
          errorMessage: error.message,
        },
      });
    }
  };
};
