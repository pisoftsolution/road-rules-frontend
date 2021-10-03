import {  ADD_ADDRESS } from "../constants";

export default (state = { addressData: null }, action) => {

    switch (action.type) {
        // case GET_ADDRESS:
        //     console.log(action?.data);
        //     return {
        //         ...state,
        //         addressData: action?.data
        //     }
        // case GET_CLIENT:
        //     console.log(action?.data);
        //     return {
        //         ...state,
        //         addressData: action?.data
        //     }
        case ADD_ADDRESS:
            console.log(action?.data);
            return {
                ...state,
                addressData: action?.data
            }
        default:
            return {
                ...state
            }
    }
};