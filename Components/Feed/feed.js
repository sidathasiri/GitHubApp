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

export default class Feed extends Component {

    

    constructor(props){
        super(props);  

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows([{author: {name:'', date:''}, message: ''}]),
          opacity: 1,
          repo: this.props.navigation.state.params
        };
    }

    rowPress(data){
        console.log(data);
        this.props.navigation.navigate('CommitDetails', data);
    }

    renderRow(rowData){
        return(
            <TouchableHighlight
                onPress={()=> this.rowPress(rowData)}
                underlayColor='#ddd'>
                <View style={{flex: 1, padding: 20, paddingTop: 20, paddingBottom: 20, flexDirection: 'column', borderColor: '#D7D7D7', borderBottomWidth: 1, borderTopWidth: 1, alignSelf: 'stretch'}}>
                    <Text style={{fontSize: 20,color: '#333', }}>
                        {rowData.message.slice(0,1).toUpperCase() + rowData.message.slice(1)}
                    </Text>

                    <Text style={{fontSize: 12}}>
                        by {rowData.author.name} on {rowData.author.date}
                    </Text>
                </View>
            </TouchableHighlight>
        )
    }

    componentDidMount(){
        this.fetchFeeds();
    }

    fetchFeeds(){
        var authService = require('../../Services/AuthService');
        console.log("esssssssssssssssssssssssssss");
        console.log(this.props.navigation.state.params.name);
        authService.getCredintials((err, result)=>{
            this.setState({username: result[0][1], password: result[1][1]});

            authService.getAuthInfo((err, authInfo) => {
                var url = 'https://api.github.com/repos/'+this.state.username+'/'+this.props.navigation.state.params.name+'/commits';
                console.log('inside fetchinggggggg'+authInfo);
                fetch(url, {
                    header: authInfo.header
                })
                .then((res) => res.json())
                .then((result)=> {
                    console.log(result);
                    console.log(result[0].commit.message);
                    var i;
                    let arr=[];
                    for( i=0; i< result.length; i++){
                        console.log(result[i].commit.message);
                        arr.push(result[i].commit);
                    }
                    console.log(arr.length);
                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(arr),
                        opacity: 0
                    });
    
                    console.log(this.state.dataSource);
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


AppRegistry.registerComponent('Feed', () => Feed);
