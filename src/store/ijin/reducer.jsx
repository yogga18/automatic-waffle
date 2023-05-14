import {
  GET_ALL_SURAT_IJIN_REQUEST,
  GET_ALL_SURAT_IJIN_SUCCESS,
  GET_ALL_SURAT_IJIN_FAILURE,
} from './actionTypes';

const initialSate = {
  getAllSuratIjinReducers: {
    isLoading: false,
    data: [],
    error: false,
  },
};

const suratIjinReducers = (state = initialSate, action) => {
  switch (action.type) {
    case GET_ALL_SURAT_IJIN_REQUEST:
      return (state = {
        ...state,
        getAllSuratIjinReducers: {
          ...state.getAllSuratIjinReducers,
          isLoading: true,
          data: [],
          error: false,
        },
      });

    case GET_ALL_SURAT_IJIN_SUCCESS:
      return (state = {
        ...state,
        getAllSuratIjinReducers: {
          ...state.getAllSuratIjinReducers,
          isLoading: false,
          data: action.payload.data ?? [],
          error: false,
        },
      });

    case GET_ALL_SURAT_IJIN_FAILURE:
      return (state = {
        ...state,
        getAllSuratIjinReducers: {
          ...state.getAllSuratIjinReducers,
          isLoading: false,
          data: [],
          error: action.payload.errorMessage,
        },
      });

    default:
      return state;
  }
};

export default suratIjinReducers;
