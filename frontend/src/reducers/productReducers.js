import { PRODUCTS_DETAILS_FAIL, PRODUCTS_DETAILS_REQUEST, PRODUCTS_DETAILS_SUCCESS, PRODUCTS_LIST_FAIL, PRODUCTS_LIST_REQUEST, PRODUCTS_LIST_SUCCESS } from "../constants/productConstants";

export const productListReducer = (state = { loading: true, product: [] }, action) => {
    switch (action.type) {
        case PRODUCTS_LIST_REQUEST:
            return { loading: true }
        case PRODUCTS_LIST_SUCCESS:
            return { loading: false, product: action.payload }
        case PRODUCTS_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const productDetailsReducer = (state = { loading: true, product: {} }, action) => {
    switch (action.type) {
        case PRODUCTS_DETAILS_REQUEST:
            return { loading: true }
        case PRODUCTS_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }
        case PRODUCTS_DETAILS_FAIL:
            return { loading: true, error: action.payload }
        default:
            return state;
    }
}