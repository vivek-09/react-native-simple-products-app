import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  Keyboard 
} from "react-native";

import { ListItem } from './ListItem';
import { connect } from 'react-redux';
import { getSearch }  from '../Actions';

class ProductSearch extends Component {
    constructor(props){
        super(props);
        this.state = { text: '' };
    }
    _renderItem({item}){
        return <ListItem {...item} />
    }
    _keyExtractor(item, index) {
        return `${item.id}`;
    }
    searchProducts = () => {
        if(this.state.text != ''){
            this.props.getSearchProps(this.state.text);
            Keyboard.dismiss();
        }
    }
    render(){    
        const { products } = this.props;
        const { text } = this.state;
        return (
            <View>
                <View>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1 }}
                        value={text}
                        onChangeText={(text)=>{this.setState({text:text})}}
                    />
                    <Button
                        onPress={this.searchProducts.bind(this)}
                        title="Search"
                        color="#606060"
                        />
                    </View>
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
      page: state.searchState.page,
      products: state.searchState.products,
      text: state.searchState.text
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      getSearchProps: ( text ) => dispatch(getSearch( text ))
    };
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductSearch);