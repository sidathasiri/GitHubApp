import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
} 
from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';

import Feed from '../../Components/Feed/feed';
import CommitDetails from '../../Components/CommitDetails/commitDetails';
import Search from '../../Components/Search/search';

export const FeedStack = StackNavigator({
    Feed: {
        screen: Feed,
        navigationOptions: {
            title: 'Feed',
        }
    },

    CommitDetails: {
        screen: CommitDetails,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.message.slice(0,1).toUpperCase()}${navigation.state.params.message.slice(1)}`
        }) 
    }
}, {
    headerMode: 'screen', 
    cardStyle: {backgroundColor: 'white'},
    
});

export const Tabs = TabNavigator({
    Feed: {
      screen: FeedStack,
      navigationOptions: {
        tabBarLabel: 'Feed',
      }
      
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarLabel: 'Search',
      }
    },
  }, {
    tabBarOptions: {
      showIcon: false,
      style: {backgroundColor: '#55B1E9', height: 60, padding:0, margin:0},
      showLabel: true,
      tabStyle: {margin: 0, padding: 0, height: 60},
      indicatorStyle: {}
    },
    tabBarPosition: 'bottom',
  });
