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

const initialSate = {
  getAllSuratIjinReducers: {
    isLoading: false,
    data: [],
    error: false,
  },
  dropdownSuratIjinReducers: {
    isLoading: false,
    data: [],
    error: false,
  },
  getSuratIjinByIdReducers: {
    isLoading: false,
    data: {},
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

    case GET_DROPDOWN_SURAT_IJIN_REQUEST:
      return (state = {
        ...state,
        dropdownSuratIjinReducers: {
          ...state.dropdownSuratIjinReducers,
          isLoading: true,
          data: [],
          error: false,
        },
      });

    case GET_DROPDOWN_SURAT_IJIN_SUCCESS:
      return (state = {
        ...state,
        dropdownSuratIjinReducers: {
          ...state.dropdownSuratIjinReducers,
          isLoading: false,
          data: action.payload.data ?? [],
          error: false,
        },
      });

    case GET_DROPDOWN_SURAT_IJIN_FAILURE:
      return (state = {
        ...state,
        dropdownSuratIjinReducers: {
          ...state.dropdownSuratIjinReducers,
          isLoading: false,
          data: [],
          error: action.payload.errorMessage,
        },
      });

    case GET_SURAT_IJIN_BY_ID_REQUEST:
      return (state = {
        ...state,
        getSuratIjinByIdReducers: {
          ...state.getSuratIjinByIdReducers,
          isLoading: true,
          data: {},
          error: false,
        },
      });

    case GET_SURAT_IJIN_BY_ID_SUCCESS:
      return (state = {
        ...state,
        getSuratIjinByIdReducers: {
          ...state.getSuratIjinByIdReducers,
          isLoading: false,
          data: action.payload.data ?? {},
          error: false,
        },
      });

    case GET_SURAT_IJIN_BY_ID_FAILURE:
      return (state = {
        ...state,
        getSuratIjinByIdReducers: {
          ...state.getSuratIjinByIdReducers,
          isLoading: false,
          data: {},
          error: action.payload.errorMessage,
        },
      });

    default:
      return state;
  }
};

export default suratIjinReducers;
