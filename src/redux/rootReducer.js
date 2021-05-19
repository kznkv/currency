
import { combineReducers } from "redux"
import { defaultValue } from "./defaultValue"


export const rootReducer = combineReducers({
    defaultValue: defaultValue
})