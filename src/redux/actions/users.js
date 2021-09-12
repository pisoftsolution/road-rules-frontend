import * as api from '../api';
import { GET_USERS } from '../constants';

export const getUsers = () => async (dispatch)=>{
    try {
        const { data } = await api.getUsers();
        dispatch({type: GET_USERS, data});
        return data;
    } catch (e){
        alert(e?.response?.data?.msg);
      }
}