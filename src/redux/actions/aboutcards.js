import * as api from '../api';
import { GET_ABOUTCARDS } from '../constants';

export const getAboutcards = () => async (dispatch) => {
  try {
    const { data } = await api.getAboutcards();
    dispatch({ type: GET_ABOUTCARDS, data });
  } catch (e) {
    alert(e?.response?.data?.msg);
  }
};
