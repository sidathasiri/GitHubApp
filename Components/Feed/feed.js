import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    ListView,
    ActivityIndicator
} 
from 'react-native';

export default class Feed extends Component {

    constructor(props){
        super(props);   

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows([{author: {name:'', date:''}, message: ''}]),
          opacity: 1
        };
    }

    renderRow(rowData){
        return(
            <View style={{flex: 1, padding: 20, flexDirection: 'column', borderBottomColor: '#fff', borderBottomWidth: 10, borderRadius: 10, alignSelf: 'flex-start'}}>
                <Text style={{fontSize: 20,color: '#333', backgroundColor: '#fff'}}>
                    {rowData.message}
                </Text>

                <Text style={{fontSize: 12}}>
                    by {rowData.author.name} on {rowData.author.date}
                </Text>
            </View>
        )
    }

    componentDidMount(){
        this.fetchFeeds();
    }

    fetchFeeds(){
        require('../../Services/AuthService').getAuthInfo((err, authInfo) => {
            var url = 'https://api.github.com/repos/sidathasiri/GitHubApp/commits';
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
                    <Text style={{fontSize:30}}>Commits...</Text>
                    <View><Text>---------------------------------------</Text></View>
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
