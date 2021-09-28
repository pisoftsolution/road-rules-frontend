import * as api from '../api';
import { GETTESTIMONIAL } from '../constants';

export const getTestimonial = () => async (dispatch) => {
  try {
    const { data } = await api.getTestimonial();
    dispatch({ type: GETTESTIMONIAL, data });
  } catch (e) {
    alert(e?.response?.data?.msg);
  }
};
