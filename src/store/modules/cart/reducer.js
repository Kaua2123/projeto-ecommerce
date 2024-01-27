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

    default: {
      return state;
    }
  }
}
