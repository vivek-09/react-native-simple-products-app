import {
    GET_SEARCH_PRODUCTS,
    GET_SEARCH_PRODUCTS_SUCCESS,
    GET_SEARCH_PRODUCTS_FAILURE
  } from '../ActionType';

export function getSearch(text) {
  return {
    type: GET_SEARCH_PRODUCTS,
    text
  };
}
  
export function getSearchSuccess(products) {
  return {
    type: GET_SEARCH_PRODUCTS_SUCCESS,
    products
  };
}

export function getSearchFailure(error) {
  return {
    type: GET_SEARCH_PRODUCTS_FAILURE,
    error
  };
}