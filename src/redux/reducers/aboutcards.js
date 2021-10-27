import { ADD_ABOUTCARDS, EDIT_ABOUTCARDS, GET_ABOUTCARDS } from '../constants';

export default (state = { aboutcardsData: null }, action) => {
  switch (action.type) {
    case GET_ABOUTCARDS:
      console.log(action?.data);
      return {
        ...state,
        aboutcardsData: action?.data
      };
    case ADD_ABOUTCARDS:
      console.log(action?.data);
      return {
        ...state,
        aboutcardsData: action?.data
      };
    case EDIT_ABOUTCARDS:
      console.log(action?.data);
      return {
        ...state,
        aboutcardsData: action?.data
      };
    default:
      return {
        ...state
      };
  }
};
