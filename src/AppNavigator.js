import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import { reduxifyNavigator, createReactNavigationReduxMiddleware, createNavigationReducer } from "react-navigation-redux-helpers";
import { connect } from "react-redux";
import React from "react";
import {View, Text} from 'react-native';

import ProductList from './Components/ProductList';
import ProductSearch from './Components/ProductSearch';


const ProductListTab = createStackNavigator(
  {
    List: {
      screen: ProductList
    }
  },
  {
    initialRouteName: "List",
    navigationOptions: {
      title: "Product List",
      headerStyle: {
        backgroundColor: "#3b945e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center"
      }
    }
  }
);

const SearchProductTab = createStackNavigator(
  {
    Search: {
      screen: ProductSearch
    }
  },
  {
    initialRouteName: "Search",
    navigationOptions: {
      title: "Search",
      headerStyle: {
        backgroundColor: "#3b945e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center"
      }
    }
  }
);

export const AppNavigator = createBottomTabNavigator(
  {
    List: ProductListTab,
    Search: SearchProductTab
  },
  {
    tabBarOptions: {
      activeTintColor: "#3b945e",
      inactiveTintColor: "gray"
    }
  }
);

export const middleware = createReactNavigationReduxMiddleware(
    "app",
    state => state.navState
);

const ReduxAppNavigator  = reduxifyNavigator(AppNavigator, "app");

class App extends React.Component {
  render() {
    return (
      <ReduxAppNavigator 
        dispatch = {this.props.dispatch}
        state= {this.props.navState}
      />
    );
  }
}

const mapStateToProps = state => ({
  navState: state.navState
});

const AppWithNavigationState = connect(mapStateToProps)(App);

export default AppWithNavigationState;
