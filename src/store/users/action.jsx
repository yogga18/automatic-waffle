import apiInstance from '../../api';

import {
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILURE,
  GET_USER_BY_ID_REQUEST,
  GET_USER_BY_ID_SUCCESS,
  GET_USER_BY_ID_FAILURE,
  DELET_USER_REQUEST,
  DELET_USER_SUCCESS,
  DELET_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
} from './actionTypes';

export const getAllUsers = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_ALL_USERS_REQUEST,
      payload: {
        loading: true,
        data: [],
        errorMesssage: false,
      },
    });

    try {
      const res = await apiInstance.get('/users');

      dispatch({
        type: GET_ALL_USERS_SUCCESS,
        payload: {
          loading: false,
          data: res.data.data,
          errorMessage: false,
        },
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_USERS_FAILURE,
        payload: {
          loading: false,
          data: [],
          errorMessage: error.message,
        },
      });
    }
  };
};

export const getUserById = (id) => {
  return async (dispatch) => {
    dispatch({
      type: GET_USER_BY_ID_REQUEST,
      payload: {
        loading: true,
        data: [],
        errorMesssage: false,
      },
    });

    try {
      const res = await apiInstance.get(`/users/${id}`);

      dispatch({
        type: GET_USER_BY_ID_SUCCESS,
        payload: {
          loading: false,
          data: res.data.data,
          errorMessage: false,
        },
      });
    } catch (error) {
      dispatch({
        type: GET_USER_BY_ID_FAILURE,
        payload: {
          loading: false,
          data: [],
          errorMessage: error.message,
        },
      });
    }
  };
};

export const createUsers = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: CREATE_USER_REQUEST,
      payload: {
        loading: true,
        data: [],
        errorMesssage: false,
      },
    });

    try {
      const res = await apiInstance.post('/users', payload);

      dispatch({
        type: CREATE_USER_SUCCESS,
        payload: {
          loading: false,
          data: res.data.data,
          errorMessage: false,
        },
      });

      return { success: true };
    } catch (error) {
      dispatch({
        type: CREATE_USER_FAILURE,
        payload: {
          loading: false,
          data: [],
          errorMessage: error.message,
        },
      });

      return { success: false };
    }
  };
};

export const updateUser = (id, payload) => {
  return async (dispatch) => {
    dispatch({
      type: UPDATE_USER_REQUEST,
      payload: {
        loading: true,
        data: [],
        errorMesssage: false,
      },
    });

    try {
      const res = await apiInstance.put(`/users/${id}`, payload);

      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: {
          loading: false,
          data: res.data.data,
          errorMessage: false,
        },
      });

      // custom response (flag success)
      return { success: true };
    } catch (error) {
      dispatch({
        type: UPDATE_USER_FAILURE,
        payload: {
          loading: false,
          data: [],
          errorMessage: error.message,
        },
      });

      // custom response (flag failure)
      return { success: false };
    }
  };
};

export const deleteUser = (id) => {
  return async (dispatch) => {
    dispatch({
      type: DELET_USER_REQUEST,
      payload: {
        loading: true,
        data: [],
        errorMesssage: false,
      },
    });

    try {
      const res = await apiInstance.delete(`/users/${id}`);

      dispatch({
        type: DELET_USER_SUCCESS,
        payload: {
          loading: false,
          data: res.data.data,
          errorMessage: false,
        },
      });

      return { success: true };
    } catch (error) {
      dispatch({
        type: DELET_USER_FAILURE,
        payload: {
          loading: false,
          data: [],
          errorMessage: error.message,
        },
      });

      return { success: false };
    }
  };
};
