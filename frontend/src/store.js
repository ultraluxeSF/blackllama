import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducers";
//import data from "./data";
import { productDetailsReducer, productListReducer } from "./reducers/productReducers";


const initialState = {
    cart: {
        //set default cartItems value & convert it to array
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
        paymentDetails: localStorage.getItem('paymentDetails')
            ? JSON.parse(localStorage.getItem('paymentDetails'))
            : {},
    }
};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;