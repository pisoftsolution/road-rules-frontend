import { GET_RIDE } from "../constants";

export default (state = { rideData: null }, action) => {

    switch (action.type) {
        case GET_RIDE:
            console.log(action?.data);
            return {
                ...state,
                rideData: action?.data
            }
        default:
            return {
                ...state
            }
    }
};