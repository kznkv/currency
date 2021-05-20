
import { combineReducers } from "redux"
import { defaultValue } from "./defaultValue"
import historyReducer from "./historyReducer"


export const rootReducer = combineReducers({
    defaultValue: defaultValue,
    history:historyReducer
})