import { combineReducers } from 'redux';

import authReducer from './auth';
import verifyReducer from './verify';
import hometestimonial from './hometestimonial';
import aboutcards from './aboutcards';
import about from './about';
import choose from './choose';
import contactus from './contactus';

const rootReducer = combineReducers({
  authReducer,
  verifyReducer,
  hometestimonial,
  aboutcards,
  about,
  choose,
  contactus
});

export default rootReducer;
