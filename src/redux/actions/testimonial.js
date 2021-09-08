import * as api from "../api";
import { ADD_TESTIMONIAL, EDIT_TESTIMONIAL, GET_TESTIMONIAL } from "../constants";

export const getTestimonial = () => async (dispatch) => {
    try {
        const { data } = await api.getTestimonial();
        dispatch({ type: GET_TESTIMONIAL, data });
    } catch (e) {
        alert(e?.response?.data?.msg);
    }
}

export const addTestimonial = (formData) => async (dispatch) => {
    try {
        const { data } = await api.addTestimonial(formData);
        dispatch({ type: ADD_TESTIMONIAL, data });
    } catch (e) {
        alert(e?.response?.data?.msg);
    }
}


export const editTestimonial = (formData, id) => async (dispatch) => {
    try {
        const { data } = await api.editTestimonial(formData, id);
        dispatch({ type: EDIT_TESTIMONIAL, data });
    } catch (e) {
        alert(e?.response?.data?.msg);
    }
}

