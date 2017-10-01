import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
} 
from 'react-native';
import {StackNavigator} from 'react-navigation';

export default class Feed extends Component {

    static navigationOptions = {
        title: 'Commit',
      };

    constructor(props){
        super(props);  

    }

    render() {
        return (
            <View>
                <Text>Commit Details</Text>
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


AppRegistry.registerComponent('Feed', () => Feed);
