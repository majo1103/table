import { FETCH_DATA, FETCH_DATA_SUCCESS } from "../actions/index";

const initialState = { data: [], isLoading: false };

const table = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return Object.assign({}, state, {
        isLoading: true
      });
    case FETCH_DATA_SUCCESS:
      return Object.assign({}, state, {
        data: action.data,
        isLoading: false,
        pages: -1
      });
    default:
      return state;
  }
};

export default table;
