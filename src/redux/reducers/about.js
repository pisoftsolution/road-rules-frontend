import { GET_ABOUT } from '../constants';

export default (state = { aboutData: null }, action) => {
  switch (action.type) {
    case GET_ABOUT:
      console.log(action?.data);
      return {
        ...state,
        aboutData: action?.data
      };
    default:
      return {
        ...state
      };
  }
};
