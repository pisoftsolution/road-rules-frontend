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
// import addressReducer from './addaddress'
// import hometestimonial from './hometestimonial';

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
    // addressReducer,
});

export default rootReducer;














// import { combineReducers } from 'redux';

// import authReducer from './auth';
// import verifyReducer from './verify';
// import hometestimonial from './hometestimonial';
// import aboutcards from './aboutcards';
// import about from './about';
// import choose from './choose';

// const rootReducer = combineReducers({
//   authReducer,
//   verifyReducer,
//   hometestimonial,
//   aboutcards,
//   about,
//   choose
// });

// export default rootReducer;
