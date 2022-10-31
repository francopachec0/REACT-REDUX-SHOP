import { combineReducers } from "redux";
import { productReducer } from "./productReducer.js";

export const reducers = combineReducers({
    allProducts: productReducer,
});
