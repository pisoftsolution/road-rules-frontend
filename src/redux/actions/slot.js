import * as api from "../api";
import { ADD_SLOT, EDIT_SLOT, GET_SLOT } from "../constants";

export const getSlot = () => async (dispatch) => {
    try {
        const { data } = await api.getSlot();
        dispatch({ type: GET_SLOT, data });
    } catch (e) {
        alert(e?.response?.data?.msg);
    }
}

export const addSlot = (formData) => async (dispatch) => {
    try {
        const { data } = await api.addSlot(formData);
        dispatch({ type: ADD_SLOT, data });
    } catch (e) {
        alert(e?.response?.data?.msg);
    }
}

export const editSlot = (formData, id) => async (dispatch) => {
    try {
        const { data } = await api.editSlot(formData, id);
        dispatch({ type: EDIT_SLOT, data });
    } catch (e) {
        alert(e?.response?.data?.msg);
    }
}
