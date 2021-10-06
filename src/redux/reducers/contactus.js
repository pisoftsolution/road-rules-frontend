import { ADD_CONTACT } from '../constants';

export default (state = { contactData: null }, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      console.log(action?.data);
      return {
        ...state,
        contactData: action?.data
      };
    default:
      return {
        ...state
      };
  }
};
