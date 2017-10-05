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
import SearchResults from '../SearchResults/searchResults';
import Settings from '../Settings/settings';
import Repos from '../Repos/repos';

export const FeedStack = StackNavigator({
    Repos: {
        screen: Repos,
        navigationOptions: {
            title: 'Repos',
        }
    },

    Feed: {
        screen: Feed,
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.params.name
        }) 
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

export const SearchStack = StackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Search',
        }
    },

    SearchResults: {
        screen: SearchResults,
        navigationOptions: {
            title: 'Search Results',
        }
    },

    
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
      screen: SearchStack,
      navigationOptions: {
        tabBarLabel: 'Search',
      }
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
          tabBarLabel: 'Settings',
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
