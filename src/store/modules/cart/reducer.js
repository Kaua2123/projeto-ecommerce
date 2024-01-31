/* eslint-disable default-param-last */
import * as types from '../types';

const initialState = {
  cartItems: [],
  product: {},
  haveProducts: false,
};

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
      const { id } = action.payload;
      const newCartItems = state.cartItems.map((item) => (
        item.id === id ? { ...item, product_quantity: item.product_quantity + 1 } : item
      ));

      return {
        ...state,
        cartItems: newCartItems,
        haveProducts: true,
      };
    }

    case types.DECREASE_PRODUCT_QUANTITY: {
      const { id } = action.payload;
      const newCartItems = state.cartItems.map((item) => (
        item.id === id ? { ...item, product_quantity: item.product_quantity - 1 } : item
      ));

      return {
        ...state,
        cartItems: newCartItems,
        haveProducts: true,
      };
    }

    default: {
      return state;
    }
  }
}
