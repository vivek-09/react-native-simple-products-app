import React, { Component } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  FlatList,
  Image
} from "react-native";

import { ListItem } from './ListItem';
import { connect } from 'react-redux';
import { getProducts }  from '../Actions';

class ProductList extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        this.props.getProductsProps();
    }
    _renderItem({item}){
        return <ListItem {...item} />
    }
    _keyExtractor(item, index) {
        return `${item.id}`;
    }
    render(){
        
        const { products, page } = this.props;
        return (
            <View>
                <FlatList
                    data={products}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                /> 
          </View>
        )
    }
}
function mapStateToProps(state) {
    return {
      page: state.productState.page,
      products: state.productState.products
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      getProductsProps: () => dispatch(getProducts())
    };
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductList);