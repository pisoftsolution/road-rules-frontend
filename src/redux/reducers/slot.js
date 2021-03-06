import { ADD_SLOT, EDIT_SLOT, GET_SLOT, GET_SLOT_BY_ID } from '../constants';

export default (state = { slotData: null }, action) => {
  switch (action.type) {
    case GET_SLOT:
      console.log(action?.data);
      return {
        ...state,
        slotData: action?.data
      };
    case ADD_SLOT:
      console.log(action?.data);
      return {
        ...state,
        slotData: action?.data
      };
    case EDIT_SLOT:
      console.log(action?.data);
      return {
        ...state,
        slotData: action?.data
      };
    case GET_SLOT_BY_ID:
      console.log(action?.data);
      return {
        ...state,
        slotData: action?.data
      };
    default:
      return {
        ...state
      };
  }
};
