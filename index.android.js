import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';

import Login from './Components/Login/login';
import AuthService from './Services/AuthService';

export default class githubapp extends Component {

  state = {
    isLoggedIn: false,
    checkingAuth: true
  }

  componentDidMount(){
    AuthService.getAuthInfo((err, result)=>{
      console.log("inside mount:"+result);
      this.setState({
        checkingAuth: false,
        isLoggedIn: result != null
      });

    });
  }

  render() {

    if(this.state.checkingAuth){
      return(
        <View style={styles.container}>
          <ActivityIndicator 
            animating = {true}
            size = "large"

          />
        </View>
      );
    }

    if(this.state.isLoggedIn){
      return (
        <View style={styles.container}>
           <Text style={styles.welcome}>Logged In</Text>
        </View>
      );
    } else{
      return (
        <View style={styles.container}>
           <Login onLogin={this.onLogin.bind(this)} />
        </View>
      );
    }
  }

  getInitialState(){
    return {isLoggedIn: false}
  }

  onLogin(){
    console.log("You can login!!!!");
    this.setState({isLoggedIn: true});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('githubapp', () => githubapp);
