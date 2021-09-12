import { ADD_INSTRUCTOR, EDIT_INSTRUCTOR, GET_INSTRUCTOR } from "../constants";

export default (state = { instructorData: null }, action) => {

    switch (action.type) {
        case GET_INSTRUCTOR:
            console.log(action?.data);
            return {
                ...state,
                instructorData: action?.data
            }
        case ADD_INSTRUCTOR:
            console.log(action?.data);
            return {
                ...state,
                instructorData: action?.data
            }
        case EDIT_INSTRUCTOR:
            console.log(action?.data);
            return {
                ...state,
                instructorData: action?.data
            }
        default:
            return {
                ...state
            }
    }
};