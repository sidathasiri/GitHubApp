var buffer = require('buffer');
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    ListView,
    ActivityIndicator,
    TouchableHighlight,Icon
} 
from 'react-native';
import {StackNavigator} from 'react-navigation';
import CommitDetails from '../CommitDetails/commitDetails';

export default class Repos extends Component {

    

    constructor(props){
        super(props);  

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows([{}]),
          opacity: 1
        };
    }

    rowPress(data){
        console.log(data);
        this.props.navigation.navigate('Feed', data);
    }

    renderRow(rowData){
        return(
            <TouchableHighlight
                onPress={()=> this.rowPress(rowData)}
                underlayColor='#ddd'>
                <View style={{flex: 1, padding: 20, paddingTop: 20, paddingBottom: 20, flexDirection: 'column', borderColor: '#D7D7D7', borderBottomWidth: 1, borderTopWidth: 1, alignSelf: 'stretch'}}>
                    <Text style={{fontSize: 20,color: '#333', }}>
                        {rowData.name}
                    </Text>

                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <Text style={{fontSize: 12, marginRight: 15}}>Created On {rowData.created_at}</Text>
                        <Text style={{fontSize: 12}}>Language: {rowData.language}</Text>

                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    componentDidMount(){
        this.fetchFeeds();
    }

    fetchFeeds(){
        var authService = require('../../Services/AuthService');
        authService.getCredintials((err, result)=>{
            this.setState({username: result[0][1], password: result[1][1]});
            console.log("testing:"+this.state.username+"  "+this.state.password);
            authService.getAuthInfo((err, authInfo) => {
                var encorder  = new buffer.Buffer(this.state.username+":"+this.state.password);
                var encordedData = encorder.toString('base64');
                var url = 'https://api.github.com/user/repos';
                fetch(url, {
                    headers: {
                        'Authorization': 'Basic '+ encordedData
                    }
                })
                .then((res) => res.json())
                .then((result)=> {
                    console.log(result);
                    this.setState({dataSource: this.state.dataSource.cloneWithRows(result), opacity: 0});
                })
                
            });
        });

        

        
    }

    render() {
        if(this.state.opacity==1){
            return (
                <ActivityIndicator 
                style={{flex: 1, opacity: this.state.opacity, justifyContent: 'center', alignSelf: 'center'}}
                animating = {true}
                size = "large"
            />
            )
        }
        else
            return (
                <View style={styles.container}>
                    <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    />
                </View>
        );
  }

  

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start'
    },
  });


AppRegistry.registerComponent('Repos', () => Repos);
