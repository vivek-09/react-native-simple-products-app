import productReducer from './Product';
import searchReducer from './Search';
import { combineReducers } from 'redux';
import { AppNavigator } from '../../src/AppNavigator';
import { createNavigationReducer } from "react-navigation-redux-helpers";
  
const navReducer = createNavigationReducer(AppNavigator);

const rootReducer = combineReducers({
    productState: productReducer,
    searchState: searchReducer,
    navState: navReducer
});
export default rootReducer;