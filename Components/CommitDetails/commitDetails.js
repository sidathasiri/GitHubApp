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
        this.state = {
            commitData: this.props.navigation.state.params
        };

        console.log(this.state.commitData);
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <Text style={styles.card}>Author: {this.state.commitData.author.name}</Text>
                <Text style={styles.card}>Email: {this.state.commitData.author.email}</Text>
                <Text style={styles.card}>Date: {this.state.commitData.author.date}</Text>
                <Text style={styles.card}>URL: {this.state.commitData.url}</Text>
            </View>
        );
  }

  

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start'
    },

    card: {
        padding: 30,
        fontSize: 20,
        fontWeight: 'bold'
    }
  });


AppRegistry.registerComponent('Feed', () => Feed);
