import React, { Component } from 'react';
import {AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight,
    Alert,
    ActivityIndicator
} 
from 'react-native';

export default class Login extends Component {

    constructor(props){
        super(props);   
        this.state = {
            opacity: 0
        }
    }

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
            onChangeText={(text)=>this.setState({username: text})}
            />

            <TextInput 
            style={styles.inputBox}
            placeholder='Password'
            secureTextEntry={true}
            onChangeText={(text)=>this.setState({password: text})}
            />

            <TouchableHighlight style={styles.btn} onPress={this.loginPressed.bind(this)}>
                <Text style={styles.btnText}>Login</Text>
            </TouchableHighlight>

            <ActivityIndicator 
            style={{marginTop: 10, opacity: this.state.opacity}}
            animating = {true}
            size = "large"
            />
        </View>
        );
  }

  loginPressed(){
      this.setState({opacity: 1}, ()=>{
        fetch('https://api.github.com/search/repositories?q=react')
        .then((res) => {return res.json()})
        .then(result => {
            console.log(result);
            this.setState({opacity: 0});
          })
      });
      
      
      
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
