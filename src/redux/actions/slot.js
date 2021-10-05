import * as api from '../api';
import { ADD_SLOT, EDIT_SLOT, GET_SLOT, GET_SLOT_BY_ID } from '../constants';

export const getSlot = () => async (dispatch) => {
  try {
    const { data } = await api.getSlot();
    dispatch({ type: GET_SLOT, data });
  } catch (e) {
    console.log(e);
    alert(e?.response?.data?.msg);
  }
};

export const addSlot = (formData) => async (dispatch) => {
  try {
    const { data } = await api.addSlot(formData);
    dispatch({ type: ADD_SLOT, data });
  } catch (e) {
    alert(e?.response?.data?.msg);
  }
};

export const editSlot = (formData, id) => async (dispatch) => {
  try {
    const { data } = await api.editSlot(formData, id);
    dispatch({ type: EDIT_SLOT, data });
  } catch (e) {
    alert(e?.response?.data?.msg);
  }
};

export const getSlotById = ( id) => async (dispatch) => {
  try {
    const { data } = await api.getSlotById( id);
    dispatch({ type: GET_SLOT_BY_ID, data });
  } catch (e) {
    alert(e?.response?.data?.msg);
  }
};
