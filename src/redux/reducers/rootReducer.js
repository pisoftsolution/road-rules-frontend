import { combineReducers } from 'redux';

import authReducer from './auth';
import verifyReducer from './verify';

const rootReducer = combineReducers({
  authReducer,
  verifyReducer
});

export default rootReducer;
