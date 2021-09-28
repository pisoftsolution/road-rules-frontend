import * as api from '../api';
import { GET_CHOOSE } from '../constants';

export const getChoose = () => async (dispatch) => {
  try {
    const { data } = await api.getChoose();
    dispatch({ type: GET_CHOOSE, data });
  } catch (e) {
    alert(e?.response?.data?.msg);
  }
};
