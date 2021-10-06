import * as api from "../api";
import { ADD_ABOUT, EDIT_ABOUT, GET_ABOUT } from "../constants";

export const getAbout = () => async (dispatch) => {
    try {
        const { data } = await api.getAbout();
        dispatch({ type: GET_ABOUT, data });
    } catch (e) {
        alert(e?.response?.data?.msg);
    }
}

export const addAbout = (formData) => async (dispatch) => {
    try {
        const { data } = await api.addAbout(formData);
        dispatch({ type: ADD_ABOUT, data });
    } catch (e) {
        alert(e?.response?.data?.msg);
    }
}

export const editAbout = (formData, id) => async (dispatch) => {
    try {
        const { data } = await api.editAbout(formData, id);
        dispatch({ type: EDIT_ABOUT, data });
    } catch (e) {
        alert(e?.response?.data?.msg);
    }
}
