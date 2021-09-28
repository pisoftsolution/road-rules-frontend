import * as api from "../api";
import { ADD_ADDRESS } from "../constants";

export const addAddress = (formData) => async (dispatch) => {
    try {
        const { data } = await api.addAddress(formData);
        dispatch({ type: ADD_ADDRESS, data });
    } catch (e) {
        alert(e?.response?.data?.msg);
    }
}