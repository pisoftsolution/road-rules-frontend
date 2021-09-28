import * as api from "../api";
import { GET_RIDE } from "../constants";

export const getRide = () => async (dispatch) => {
    try {
        const { data } = await api.getRide();
        dispatch({ type: GET_RIDE, data });
    } catch (e) {
        alert(e?.response?.data?.msg);
    }
}