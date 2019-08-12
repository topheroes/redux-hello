import isLoggedIn from './isLoggedIn';
import counter from './counter';
import {createStore, combineReducers} from 'redux';

const rootReducer = combineReducers({counter, isLoggedIn});

export default rootReducer;