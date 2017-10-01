import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
} 
from 'react-native';

export default class Search extends Component {
    constructor(props){
        super(props);  

    }

    render() {
        
        return (
            <View style={styles.container}>
                <Text>Search</Text>
            </View>
        );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start'
    },
  });


AppRegistry.registerComponent('Search', () => Search);
