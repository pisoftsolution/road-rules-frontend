import * as api from '../api';
import { ADD_ADDRESS, GET_ADDRESS_BY_ID } from '../constants';

export const addAddress = (formData) => async (dispatch) => {
  try {
    const { data } = await api.addAddress(formData);
    dispatch({ type: ADD_ADDRESS, data });
  } catch (e) {
    alert(e?.response?.data?.msg);
  }
};

export const getAddressById = (id) => async (dispatch) => {
  try {
    const { data } = await api.getAddressById(id);
    dispatch({ type: GET_ADDRESS_BY_ID, data });
  } catch (e) {
    alert(e?.response?.data?.msg);
  }
};
