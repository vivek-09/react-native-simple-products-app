import { takeLatest, put } from "redux-saga/effects";
import { GET_PRODUCTS, GET_SEARCH_PRODUCTS } from '../ActionType';
import {
  getProductsSuccess,
  getProductsFailure
} from '../Actions/Product';
import {
  getSearchSuccess,
  getSearchFailure
} from '../Actions/Search';

const limit = 40;

function* getProducts( ) {
  try {
    const response = yield fetch(`http://172.16.100.106:4000/products?_page=1&_limit=${limit}&_sort=price&_order=DESC`);
    const products = yield response.json();
    yield put(getProductsSuccess(products));
  } catch (err) {
    yield put(getProductsFailure(err));
  }
}
function* getSearch( action ) {
  try {
    const response = yield fetch(`http://172.16.100.106:4000/products?title_like=^${action.text}&_sort=rating&_order=ASC`);
    const products = yield response.json();
    yield put(getSearchSuccess(products));
  } catch (err) {
    yield put(getSearchFailure(err));
  }
}

export function* watcher() {
  yield [takeLatest(GET_PRODUCTS, getProducts)];
  yield [takeLatest(GET_SEARCH_PRODUCTS, getSearch)];
}