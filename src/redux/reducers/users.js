import { GET_USERS } from '../constants';

export default (state = { usersData: null }, action) => {
  switch (action.type) {
    case GET_USERS:
      console.log(action?.data);
      return {
        ...state,
        usersData: action?.data
      };
    default:
      return {
        ...state
      };
  }
};
