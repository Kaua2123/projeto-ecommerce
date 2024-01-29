/* eslint-disable default-param-last */
import * as types from '../types';

const initialState = {
  cartItems: [],
  product: {},
  allProducts: [],
  haveProducts: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TO_CART: {
      const updatedProduct = action.payload;
      return {
        ...state,
        cartItems: [...state.cartItems, updatedProduct],
        allProducts: [...state.allProducts, updatedProduct],
        product: action.payload,
        haveProducts: true,
      };
    }

    case types.REMOVE_FROM_CART: {
      return {
        ...state,
        cartItems: [...state.cartItems],
        product: {},
        haveProducts: false,
      };
    }

    default: {
      return state;
    }
  }
}
