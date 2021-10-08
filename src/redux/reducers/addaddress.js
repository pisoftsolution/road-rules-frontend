import { ADD_ADDRESS, GET_ADDRESS_BY_ID } from '../constants';

export default (state = { addressData: null }, action) => {
  switch (action.type) {
    case ADD_ADDRESS:
      console.log(action?.data);
      return {
        ...state,
        addressData: action?.data
      };
    case GET_ADDRESS_BY_ID:
      console.log(action?.data);
      return {
        ...state,
        addressData: action?.data
      };
    default:
      return {
        ...state
      };
  }
};
