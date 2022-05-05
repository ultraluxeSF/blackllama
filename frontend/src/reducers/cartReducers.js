import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            //check if an item exists
            const existItem = state.cartItems.find(x => x.product === item.product);
            if (existItem) {
                //update properties
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x)
                }
            }
            else {
                //concatinate cartItems with new item
                return { ...state, cartItems: [...state.cartItems, item] }
            }
        case CART_REMOVE_ITEM:
            return {
                ...state, cartItems: state.cartItems.filter(x => x.product !== action.payload)
                //filtering out the product which id is equal to action.payload
            }
        default:
            return state;
    }
}