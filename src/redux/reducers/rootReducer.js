import { combineReducers } from 'redux';

import authReducer from "./auth"
import verifyReducer from "./verify"
import aboutcardsReducer from "./aboutcards"
import testimonialReducer from "./testimonial"
import chooseReducer from "./choose"
import userReducer from "./users"

const rootReducer = combineReducers({
    authReducer,
    verifyReducer,
    aboutcardsReducer,
    testimonialReducer,
    chooseReducer,
    userReducer,
});

export default rootReducer;