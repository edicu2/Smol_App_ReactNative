import { combineReducers } from 'redux';

import {countReducer} from './count';

const rootReducer = combineReducers({
  cntReducer : countReducer,
});

export default rootReducer;
