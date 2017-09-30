import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    ListView
} 
from 'react-native';

export default class Feed extends Component {

    constructor(props){
        super(props);   

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows(['A']),
          commits: []
        };
    }

    renderRow(rowData){
        return(<Text style={styles.card}>
                {rowData}
            </Text>)
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
                    arr.push(result[i].commit.message);
                }
                console.log(arr.length);
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(arr)
                });

                console.log(this.state.dataSource);
            })
            
        });
    }

    render() {
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

    card: {
        color: '#333',
        backgroundColor: '#fff', 
        alignSelf: 'center'
    }
  });


AppRegistry.registerComponent('Feed', () => Feed);
