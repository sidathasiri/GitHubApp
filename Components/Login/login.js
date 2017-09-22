import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View,Image,TextInput} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Image
        style={styles.logo}
        source={require('../../resources/images/githublogo.png')}
         />

         <Text style={styles.welcomeText}>
         GitHub Mobile App
        </Text>

        <TextInput 
        style={styles.inputBox}
        placeholder='Username'
        />

        <TextInput 
        style={styles.inputBox}
        placeholder='Password'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#a5deff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        width: 150,
        height: 50,
    },

    welcomeText: {
        marginBottom: 15
    },

    inputBox: {
        width: 180,
        height: 20,
        
    }
});


AppRegistry.registerComponent('Login', () => Login);
