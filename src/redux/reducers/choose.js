import { ADD_CHOOSE, EDIT_CHOOSE, GET_CHOOSE } from "../constants";


export default (state = { chooseData: null }, action) => {

    switch (action.type) {
        case GET_CHOOSE:
            console.log(action?.data);
            return {
                ...state,
                chooseData: action?.data
            }
        case ADD_CHOOSE:
            console.log(action?.data);
            return {
                ...state,
                chooseData: action?.data
            }
        case EDIT_CHOOSE:
            console.log(action?.data);
            return {
                ...state,
                chooseData: action?.data
            }
        default:
            return {
                ...state
            }
    }
};