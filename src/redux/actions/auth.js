import swal from 'sweetalert';
import * as api from '../api';
import { SIGNUP, LOGIN, } from '../constants';
import jwt from "jwt-decode";

export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signup(formData);
        dispatch({ type: SIGNUP, data });
        swal("Signup successful");
        history.push('/verify/email');
        return data;
    } catch (e) {
      swal(e?.response?.data?.msg);
    }
};

export const login = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.login(formData);
        console.log(jwt(data.token));
        dispatch({ type: LOGIN, data });
        // swal("Login successful");
        const role = jwt(data.token);
        if (role === 'admin') {
            history.push('/admin');
          return;
        }
        localStorage.setItem("token", data.token);
        history.push('/admin');
        return data;
    } catch (e) {
        swal(e?.response?.data?.msg);
    }
};

// export const logout = (history) => async (dispatch) => {
//     try {
//         dispatch({ type: LOGOUT });
//         alert("Logout successful");
//         history.push('/');
//     } catch (e) {
//         console.log(e);
//         alert(e?.response?.data?.msg);
//     }
// };