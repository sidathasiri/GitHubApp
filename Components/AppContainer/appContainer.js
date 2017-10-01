import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image,
    Icon
} 
from 'react-native';
import {StackNavigator} from 'react-navigation';
import Feed from '../Feed/feed';
import CommitDetails from '../CommitDetails/commitDetails';
import {Tabs} from '../../Components/Tabs/tabs';



export default class AppContainer extends Component {

    constructor(props){
        super(props);   
        this.state = {
            selectedTab: 'feed'
        }
    }

    render() {
        return (
            <Tabs/>
        );
  }

  

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center'
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
  });


AppRegistry.registerComponent('AppContainer', () => AppContainer);
