import React, { Component } from 'react';
var buffer = require('buffer');
import {AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
} 
from 'react-native';

import Login from '../Login/login';

export default class Settings extends Component {

    constructor(props){
        super(props);   
        this.state = {
            login: true
        }
    }

    logout(){
        var authService = require('../../Services/AuthService');
        authService.clearLoginData((result)=>console.log("rsult:"+result));
        this.setState({login: false});
    }

    onLogin(){
        console.log("You can login!!!!");
        this.setState({isLoggedIn: true});
      }

    render() {
        return(
            <View style = {styles.container}>
                    <TouchableHighlight style={styles.logoutBtn} onPress={this.logout.bind(this)}><Text style={styles.btnText}>Logout</Text></TouchableHighlight>
        
                    <Text style={styles.welcomeText}>
                    Change Login Credintials
                    </Text>
        
                    <TextInput 
                    style={styles.inputBox}
                    placeholder='Username'
                    onChangeText={(text)=>this.setState({username: text})}
                    />
        
                    <TextInput 
                    style={styles.inputBox}
                    placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={(text)=>this.setState({password: text})}
                    />
        
                    <TouchableHighlight style={styles.btn} onPress={this.savePressed.bind(this)}>
                        <Text style={styles.btnText}>Save</Text>
                    </TouchableHighlight>
        
                </View>
                );
        
  }

  savePressed(){
      var loginService = require('../../Services/AuthService');
    
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
    logoutBtn: {
        backgroundColor: '#FC665A',
        marginTop: 10,
        marginBottom: 150,
        padding: 10,
        width: 75,
        justifyContent: 'center'
    },
    btnText: {
        color: '#deedf9',
        alignSelf: 'center'
    },
    error: {
        color: 'red'
    }
});


AppRegistry.registerComponent('Settings', () => Settings);
