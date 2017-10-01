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

// export const FeedStack = TabNavStackNavigatorigator({
//     Feed: {
//         screen: Feed,
//     },

//     CommitDetails: {
//         screen: CommitDetails,
//     }
// });

export const Tabs = TabNavigator({
    Feed: {
      screen: Feed,
      navigationOptions: {
        tabBarLabel: 'Feed',
        
      }
      
    },
    CommitDetails: {
      screen: CommitDetails,
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
      indicatorStyle: {backgroundColor: 'lightgrey'}
    },
    tabBarPosition: 'bottom',
  });
