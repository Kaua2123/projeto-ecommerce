import * as types from '../types';

export function addToCart(payload) {
  return {
    type: types.ADD_TO_CART,
    payload,
  };
}

export function removeFromCart(payload) {
  return {
    type: types.REMOVE_FROM_CART,
    payload,
  };
}

export function removeAllFromCart(payload) {
  return {
    type: types.REMOVE_ALL_FROM_CART,
    payload,
  };
}

export function increaseProductQuantity(payload) {
  return {
    type: types.INCREASE_PRODUCT_QUANTITY,
    payload,
  };
}

export function decreaseProductQuantity(payload) {
  return {
    type: types.DECREASE_PRODUCT_QUANTITY,
    payload,
  };
}
