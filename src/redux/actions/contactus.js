import * as api from '../api';
import { ADD_CONTACT } from '../constants';

export const addContact = (formData) => async (dispatch) => {
  try {
    const { data } = await api.addContact(formData);
    dispatch({ type: ADD_CONTACT, data });
  } catch (e) {
    alert(e?.response?.data?.msg);
  }
};
