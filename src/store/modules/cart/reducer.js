/* eslint-disable default-param-last */
import * as types from '../types';

const initialState = {
  cartItems: [],
  product: {},
  haveProducts: false,
  productQuantity: 0,
};

function incrementProductQuantity(quantity) {
  quantity += 1;
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TO_CART: {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        product: action.payload,
        haveProducts: true,
      };
    }

    case types.REMOVE_FROM_CART: {
      const selectedProduct = action.payload.index;
      const newCartItems = [...state.cartItems];
      newCartItems.splice(selectedProduct, 1);
      return {
        ...state,
        cartItems: newCartItems,
        haveProducts: newCartItems.length > 0,
      };
    }

    case types.INCREASE_PRODUCT_QUANTITY: {
      return {
        ...state,
        cartItems: [...state.cartItems],
        productQuantity: incrementProductQuantity(action.payload),
        haveProducts: true,
      };
    }

    default: {
      return state;
    }
  }
}
