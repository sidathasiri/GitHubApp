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
import TabNavigator from 'react-native-tab-navigator';
import Feed from '../Feed/feed';

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
                    titleStyle={{fontWeight: 'bold', fontSize: 10}}
                    selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
                    selected={this.state.selectedTab == 'feed'}
                    title="Feed"
                    renderIcon={() => <Image source={require('../../resources/images/feed.png')} />}
                    renderSelectedIcon={() => <Image source={require('../../resources/images/feed.png')} />}
                    onPress={()=>this.setState({selectedTab:'feed'})}
                >
                    <Feed/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab == 'search'}
                    title="Search"
                    onPress={()=>this.setState({selectedTab:'search'})}
                    renderIcon={() => <Image source={require('../../resources/images/feed.png')} />}
                    renderSelectedIcon={() => <Image source={require('../../resources/images/feed.png')} />}
                >
                    <Text style={styles.welcome}>Search Tab</Text>
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
