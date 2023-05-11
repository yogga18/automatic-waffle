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
// getAllUsers
const initialSate = {
  getAllUsersReducers: {
    isLoading: false,
    data: [],
    error: false,
  },
  getUserByIdReducer: {
    isLoading: false,
    data: [],
    error: false,
  },
  deletUserReducer: {
    isLoading: false,
    data: [],
    error: false,
  },
  updateUserReducer: {
    isLoading: false,
    data: [],
    error: false,
  },
  createUserReducer: {
    isLoading: false,
    data: [],
    error: false,
  },
};

const usersReducers = (state = initialSate, action) => {
  switch (action.type) {
    case GET_ALL_USERS_REQUEST:
      return (state = {
        ...state,
        getAllUsersReducers: {
          ...state.getAllUsersReducers,
          isLoading: true,
          data: [],
          error: false,
        },
      });

    case GET_ALL_USERS_SUCCESS:
      return (state = {
        ...state,
        getAllUsersReducers: {
          ...state.getAllUsersReducers,
          isLoading: false,
          data: action.payload.data ?? [],
          error: false,
        },
      });

    case GET_ALL_USERS_FAILURE:
      return (state = {
        ...state,
        getAllUsersReducers: {
          ...state.getAllUsersReducers,
          isLoading: false,
          data: [],
          error: action.payload.errorMessage,
        },
      });

    case GET_USER_BY_ID_REQUEST:
      return (state = {
        ...state,
        getUserByIdReducer: {
          ...state.getUserByIdReducer,
          isLoading: true,
          data: {},
          error: false,
        },
      });

    case GET_USER_BY_ID_SUCCESS:
      return (state = {
        ...state,
        getUserByIdReducer: {
          ...state.getUserByIdReducer,
          isLoading: false,
          data: action.payload.data ?? {},
          error: false,
        },
      });

    case GET_USER_BY_ID_FAILURE:
      return (state = {
        ...state,
        getUserByIdReducer: {
          ...state.getUserByIdReducer,
          isLoading: false,
          data: {},
          error: action.payload.errorMessage,
        },
      });

    case DELET_USER_REQUEST:
      return (state = {
        ...state,
        deletUserReducer: {
          ...state.deletUserReducer,
          isLoading: true,
          data: [],
          error: false,
        },
      });

    case DELET_USER_SUCCESS:
      return (state = {
        ...state,
        deletUserReducer: {
          ...state.deletUserReducer,
          isLoading: false,
          data: action.payload.data ?? [],
          error: false,
        },
      });

    case DELET_USER_FAILURE:
      return (state = {
        ...state,
        deletUserReducer: {
          ...state.deletUserReducer,
          isLoading: false,
          data: [],
          error: action.payload.errorMessage,
        },
      });

    case UPDATE_USER_REQUEST:
      return (state = {
        ...state,
        updateUserReducer: {
          ...state.updateUserReducer,
          isLoading: true,
          data: [],
          error: false,
        },
      });

    case UPDATE_USER_SUCCESS:
      return (state = {
        ...state,
        updateUserReducer: {
          ...state.updateUserReducer,
          isLoading: false,
          data: action.payload.data ?? [],
          error: false,
        },
      });

    case UPDATE_USER_FAILURE:
      return (state = {
        ...state,
        updateUserReducer: {
          ...state.updateUserReducer,
          isLoading: false,
          data: [],
          error: action.payload.errorMessage,
        },
      });

    case CREATE_USER_REQUEST:
      return (state = {
        ...state,
        createUserReducer: {
          ...state.createUserReducer,
          isLoading: true,
          data: [],
          error: false,
        },
      });

    case CREATE_USER_SUCCESS:
      return (state = {
        ...state,
        createUserReducer: {
          ...state.createUserReducer,
          isLoading: false,
          data: action.payload.data ?? [],
          error: false,
        },
      });

    case CREATE_USER_FAILURE:
      return (state = {
        ...state,
        createUserReducer: {
          ...state.createUserReducer,
          isLoading: false,
          data: [],
          error: action.payload.errorMessage,
        },
      });

    default:
      return state;
  }
};

export default usersReducers;
