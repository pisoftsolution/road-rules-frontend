import * as api from "../api";
import { ADD_CHOOSE, EDIT_CHOOSE, GET_CHOOSE } from "../constants";

export const getChoose = () => async (dispatch) => {
    try {
        const { data } = await api.getChoose();
        dispatch({ type: GET_CHOOSE, data });
    } catch (e) {
        alert(e?.response?.data?.msg);
    }
}

export const addChoose = (formData) => async (dispatch) => {
    try {
        const { data } = await api.addChoose(formData);
        dispatch({ type: ADD_CHOOSE, data });
    } catch (e) {
        alert(e?.response?.data?.msg);
    }
}


export const editChoose = (formData, id) => async (dispatch) => {
    try {
        const { data } = await api.editChoose(formData, id);
        dispatch({ type: EDIT_CHOOSE, data });
    } catch (e) {
        alert(e?.response?.data?.msg);
    }
}
