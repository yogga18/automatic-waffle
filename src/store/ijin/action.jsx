import apiInstance from '../../api';

import {
  GET_ALL_SURAT_IJIN_REQUEST,
  GET_ALL_SURAT_IJIN_SUCCESS,
  GET_ALL_SURAT_IJIN_FAILURE,
  GET_DROPDOWN_SURAT_IJIN_REQUEST,
  GET_DROPDOWN_SURAT_IJIN_SUCCESS,
  GET_DROPDOWN_SURAT_IJIN_FAILURE,
  GET_SURAT_IJIN_BY_ID_REQUEST,
  GET_SURAT_IJIN_BY_ID_SUCCESS,
  GET_SURAT_IJIN_BY_ID_FAILURE,
} from './actionTypes';

export const getAllSuratIjin = () => {
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

export const getDropDownSuratIjin = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_DROPDOWN_SURAT_IJIN_REQUEST,
      payload: {
        loading: true,
        data: [],
        errorMesssage: false,
      },
    });

    try {
      const res = await apiInstance.get('/ijin/dropdown-ijin');

      dispatch({
        type: GET_DROPDOWN_SURAT_IJIN_SUCCESS,
        payload: {
          loading: false,
          data: res.data.data,
          errorMessage: false,
        },
      });
    } catch (error) {
      dispatch({
        type: GET_DROPDOWN_SURAT_IJIN_FAILURE,
        payload: {
          loading: false,
          data: [],
          errorMessage: error.message,
        },
      });
    }
  };
};

export const getSuratIjinById = (id) => {
  return async (dispatch) => {
    dispatch({
      type: GET_SURAT_IJIN_BY_ID_REQUEST,
      payload: {
        loading: true,
        data: {},
        errorMesssage: false,
      },
    });

    try {
      const res = await apiInstance.get(`ijin/${id}`);

      dispatch({
        type: GET_SURAT_IJIN_BY_ID_SUCCESS,
        payload: {
          loading: false,
          data: res.data.data,
          errorMesssage: false,
        },
      });
    } catch (error) {
      dispatch({
        type: GET_SURAT_IJIN_BY_ID_FAILURE,
        payload: {
          loading: false,
          data: {},
          errorMesssage: error.message,
        },
      });
    }
  };
};
