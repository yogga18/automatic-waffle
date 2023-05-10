import {
  GET_ALL_SURAT_JALAN_REQUEST,
  GET_ALL_SURAT_JALAN_SUCCESS,
  GET_ALL_SURAT_JALAN_FAILURE,
} from './actionTypes';

const initialSate = {
  suratJalanReducer: {
    isLoading: false,
    data: [],
    error: false,
  },
};

const suratReducers = (state = initialSate, action) => {
  console.log('action', action);
  switch (action.type) {
    case GET_ALL_SURAT_JALAN_REQUEST:
      return (state = {
        ...state,
        suratJalanReducer: {
          ...state.suratJalanReducer,
          isLoading: true,
          data: [],
          error: false,
        },
      });

    case GET_ALL_SURAT_JALAN_SUCCESS:
      return (state = {
        ...state,
        suratJalanReducer: {
          ...state.suratJalanReducer,
          isLoading: false,
          data: action.payload.data ?? [],
          error: false,
        },
      });

    case GET_ALL_SURAT_JALAN_FAILURE:
      return (state = {
        ...state,
        suratJalanReducer: {
          ...state.suratJalanReducer,
          isLoading: false,
          data: [],
          error: action.payload.errorMessage,
        },
      });

    default:
      return state;
  }
};

export default suratReducers;
