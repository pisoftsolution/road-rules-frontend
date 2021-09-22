import { GETTESTIMONIAL } from '../constants';

export default (state = { testimonialData: null }, action) => {
  switch (action.type) {
    case GETTESTIMONIAL:
      console.log(action?.data);
      return {
        ...state,
        testimonialData: action?.data
      };
    default:
      return {
        ...state
      };
  }
};
