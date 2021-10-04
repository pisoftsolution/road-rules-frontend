import * as api from '../api';
import { GET_ABOUT } from '../constants';

export const getAbout = () => async (dispatch) => {
  try {
    const { data } = await api.getAbout();
    dispatch({ type: GET_ABOUT, data });
  } catch (e) {
    alert(e?.response?.data?.msg);
  }
}; 
