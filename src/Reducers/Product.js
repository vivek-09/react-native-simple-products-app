import  {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE
} from '../ActionType';

const productReducer =  (state = { products: [] }, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: []};
    case GET_PRODUCTS_SUCCESS:
      return { ...state, products: action.products };
    case GET_PRODUCTS_FAILURE:
      return {
        ...state, 
        loading: false,
        error: 'Error while fetching data'
      };
    default:
      return state;
  }
}

export default productReducer;