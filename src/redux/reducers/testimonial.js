import {
  ADD_TESTIMONIAL,
  EDIT_TESTIMONIAL,
  GET_TESTIMONIAL
} from '../constants';

export default (state = { testimonialData: null }, action) => {
  switch (action.type) {
    case GET_TESTIMONIAL:
      console.log(action?.data);
      return {
        ...state,
        testimonialData: action?.data
      };
    case ADD_TESTIMONIAL:
      console.log(action?.data);
      return {
        ...state,
        testimonialData: action?.data
      };
    case EDIT_TESTIMONIAL:
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
