import { combineReducers } from 'redux';

import authReducer from "./auth"
import verifyReducer from "./verify"
import aboutReducer from "./about"
import aboutcardsReducer from "./aboutcards"
import testimonialReducer from "./testimonial"
import chooseReducer from "./choose"
import userReducer from "./users"
import instructorReducer from "./instructor"
import slotReducer from "./slot"

const rootReducer = combineReducers({
    authReducer,
    verifyReducer,
    aboutReducer,
    aboutcardsReducer,
    testimonialReducer,
    chooseReducer,
    userReducer,
    instructorReducer,
    slotReducer,
});

export default rootReducer;