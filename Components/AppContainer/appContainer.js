import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image
} 
from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

export default class AppContainer extends Component {

    constructor(props){
        super(props);   
        this.state = {
            selectedTab: 'feed'
        }
    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab == 'feed'}
                    title="Feed"
                    onPress={()=>this.setState({selectedTab:'feed'})}
                    renderIcon={() => <Image source={require('../../resources/images/feed.png')} />}
                    renderSelectedIcon={() => <Image source={require('../../resources/images/feed.png')} />}
                >
                    <Text style={styles.welcome}>FEED Tab</Text>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab == 'settings'}
                    title="Settings"
                    onPress={()=>this.setState({selectedTab:'settings'})}
                    renderIcon={() => <Image source={require('../../resources/images/feed.png')} />}
                    renderSelectedIcon={() => <Image source={require('../../resources/images/feed.png')} />}
                >
                    <Text style={styles.welcome}>Settings Tab</Text>
                </TabNavigator.Item>
            </TabNavigator>
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
