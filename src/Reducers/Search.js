import  {
    GET_SEARCH_PRODUCTS,
    GET_SEARCH_PRODUCTS_SUCCESS,
    GET_SEARCH_PRODUCTS_FAILURE
  } from '../ActionType';
    
  const searchReducer =  (state = { products: [], text: '' }, action) => {
    switch (action.type) {
      case GET_SEARCH_PRODUCTS:
        return { ...state, products: [], text: action.text };
      case GET_SEARCH_PRODUCTS_SUCCESS:
        return { ...state, products: action.products };
      case GET_SEARCH_PRODUCTS_FAILURE:
        return {
          ...state, 
          loading: false,
          error: 'Error while fetching data'
        };
      default:
        return state;
    }
  }
  
  export default searchReducer;