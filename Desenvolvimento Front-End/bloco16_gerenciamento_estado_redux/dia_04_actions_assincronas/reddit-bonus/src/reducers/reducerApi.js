const INITIAL_STATE = {
  returnOfApi: [],
  loading: false,
  error: '',
};

const reducerOfApi = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'BEGIN_SEARCH':
      return {
        ...state,
        loading: true,
      };
    case 'SEARCH_SUCESS':
      return {
        ...state,
        returnOfApi: action.payload.obj,
        loading: false,
      };
    case 'FAIL_REQUEST':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducerOfApi;
