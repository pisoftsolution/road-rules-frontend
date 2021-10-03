import * as api from "../api";
import { ADD_ADDRESS } from "../constants";

// export const getAddress = () => async (dispatch) => {
//     try {
//         const { data } = await api.getAddress();
//         dispatch({ type: GET_ADDRESS, data });
//         // localStorage.setItem("token", data.token);
//     } catch (e) {
//         alert(e?.response?.data?.msg);
//     }
// }

// export const getClient = () => async (dispatch) => {
//     try {
//         const { data } = await api.getClient();
//         dispatch({ type: GET_CLIENT, data });
//         // localStorage.setItem("token", data.token);
//     } catch (e) {
//         alert(e?.response?.data?.msg);
//     }
// }
export const addAddress = (formData) => async (dispatch) => {
    try {
        const { data } = await api.addAddress(formData);
        dispatch({ type: ADD_ADDRESS, data });
    } catch (e) {
        alert(e?.response?.data?.msg);
    }
}