import * as api from "../api";
import { ADD_INSTRUCTOR, EDIT_INSTRUCTOR, GET_INSTRUCTOR } from "../constants";

export const getInstructor = () => async (dispatch) => {
    try {
        const { data } = await api.getInstructor();
        dispatch({ type: GET_INSTRUCTOR, data });
    } catch (e) {
        alert(e?.response?.data?.msg);
    }
}

export const addInstructor = (formData) => async (dispatch) => {
    try {
        const { data } = await api.addInstructor(formData);
        dispatch({ type: ADD_INSTRUCTOR, data });
    } catch (e) {
        alert(e?.response?.data?.msg);
    }
}

export const editInstructor = (formData, id) => async (dispatch) => {
    try {
        const { data } = await api.editInstructor(formData, id);
        dispatch({ type: EDIT_INSTRUCTOR, data });
    } catch (e) {
        alert(e?.response?.data?.msg);
    }
}
