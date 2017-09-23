import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View,Image,TextInput,TouchableHighlight} from 'react-native';

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
        secureTextEntry={true}
        />

        <TouchableHighlight style={styles.btn}>
            <Text style={styles.btnText}>Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d5e5f2',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },

    logo: {
        width: 150,
        height: 50,
    },

    welcomeText: {
        marginBottom: 15
    },

    inputBox: {
        width: 200,
        height: 40,
        borderWidth: 1,
        borderColor: '#48bbec',
        marginTop: 13,
        padding: 8,        
    },

    btn: {
        backgroundColor: '#268ce0',
        marginTop: 10,
        padding: 10,
        width: 200,
        justifyContent: 'center'
    },

    btnText: {
        color: '#deedf9',
        alignSelf: 'center'

    }
});


AppRegistry.registerComponent('Login', () => Login);
