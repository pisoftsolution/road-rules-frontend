import * as api from "../api";
import { ADD_ABOUTCARDS, EDIT_ABOUTCARDS, GET_ABOUTCARDS } from "../constants";

export const getAboutcards = () => async (dispatch) => {
    try {
        const { data } = await api.getAboutcards();
        dispatch({ type: GET_ABOUTCARDS, data });
    } catch (e) {
        alert(e?.response?.data?.msg);
    }
}

export const addAboutcards = (formData) => async (dispatch) => {
    try {
        const { data } = await api.addAboutcards(formData);
        dispatch({ type: ADD_ABOUTCARDS, data });
    } catch (e) {
        alert(e?.response?.data?.msg);
    }
}

export const editAboutcards = (formData, id) => async (dispatch) => {
    try {
        const { data } = await api.editAboutcards(formData, id);
        dispatch({ type: EDIT_ABOUTCARDS, data });
    } catch (e) {
        alert(e?.response?.data?.msg);
    }
}
