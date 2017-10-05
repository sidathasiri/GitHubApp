import React, { Component } from 'react';
var buffer = require('buffer');
import {AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Alert
} 
from 'react-native';

import {StackNavigator} from 'react-navigation';
import SearchResults from '../SearchResults/searchResults';

export default class Search extends Component {

    constructor(props){
        super(props);   
        this.state = {
        }
    }

    render() {
        return (
        <View style = {styles.container}>
            <TextInput 
            style={styles.searchBox}
            placeholder='Search'
            onChangeText={(text)=>this.setState({search: text})}
            />

            <TouchableHighlight style={styles.btn} onPress={this.searchPressed.bind(this)}>
                <Text style={styles.btnText}>Search</Text>
            </TouchableHighlight>
        </View>
        );
  }

  searchPressed(){

    this.props.navigation.navigate('SearchResults', this.state.search);
      
  }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d5e5f2',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    logo: {
        width: 150,
        height: 50,
    },
    searchBox: {
        width: 200,
        height: 40,
        borderWidth: 1,
        borderColor: '#48bbec',
        marginTop: 13,
        padding: 8,        
    },
    btn: {
        backgroundColor: '#268ce0',
        marginTop: 10,
        padding: 10,
        width: 200,
        justifyContent: 'center'
    },
    btnText: {
        color: '#deedf9',
        alignSelf: 'center'
    },
});


AppRegistry.registerComponent('Search', () => Search);
