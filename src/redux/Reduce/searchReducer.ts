import { AnyAction } from 'redux';

const initialState = {
  searchResults: [],
};

const searchReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'SET_SEARCH_RESULTS':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
