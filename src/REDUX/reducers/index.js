import changeTheNumber from './upDown';

import {combineReducers} from "redux";

const rootReducer = combineReducers({
    changeTheNumber:changeTheNumber
})

export default rootReducer;