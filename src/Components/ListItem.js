import React, { Component } from "react";
import {
  View,
  Text
} from "react-native";

import PropTypes from 'prop-types';
const styles = {
    shippingText: {
        fontSize: 13,
        color: '#C0C0C0',
    }
}
const ListItem = (props) => {
    console.log(props);
    const { id, title, price, rating } = props;
    return(
        <View style={{
                flex: 1,
                flexDirection: "row",
                marginRight: 35,
                marginLeft: 35
          }}>
            <Text
                style={{
                    marginTop: 10,
                    marginBottom: 15,
                    fontSize: 13
                }}
                key={id}
            >
                {title} - Rating: {rating} - Rs: {price}/-
            </Text>
        </View>
    )
}
ListItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number
  };
  ListItem.defaultProps = {
    reviewCount: 0
  };
export {ListItem};