import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [
        {
        id: 1,
        title: "Franco",
        category: "Frontend Developer",
        },
    ],
};

export function productReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
        return state;
        default:
        return state;
    }
}
