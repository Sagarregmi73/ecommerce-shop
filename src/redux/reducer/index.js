import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import cartItemReducer from './cartItemReducer';
export const rootReducer = combineReducers({
    cartReducer,
    cartItemReducer
});