import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    ListView,
    ActivityIndicator,
    TouchableHighlight,
    Image
} 
from 'react-native';
import {StackNavigator} from 'react-navigation';
import CommitDetails from '../CommitDetails/commitDetails';



export default class SearchResults extends Component {

    

    constructor(props){
        super(props);  

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows([{owner: {login:'', avatar_url:''}, full_name: '', created_at:''}]),
          opacity: 1,
          search: this.props.navigation.state.params
        };
    }

    rowPress(data){
        console.log(data);
        this.props.navigation.navigate('CommitDetails', data);
    }

    renderRow(rowData){
        return(
            <View style={{flex: 1, padding: 20, paddingTop: 20, alignSelf: 'stretch', paddingBottom: 20, flexDirection: 'column', borderColor: '#D7D7D7', borderBottomWidth: 1, borderTopWidth: 1, }}>
                
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', marginTop: 20, marginBottom: 20}}>
                    <Image style={styles.repoCellIcon} source={{uri: rowData.owner.avatar_url}} />
                    <Text style={{fontSize: 20,color: '#333', alignSelf: 'flex-start'}}>
                        {rowData.full_name}
                    </Text>
                </View>

                <View>
                    <Text>by {rowData.owner.login} on {rowData.created_at}</Text>
                </View>

            </View>
        )
    }

    componentDidMount(){
        this.searchData();
    }

    searchData(){
        var url = "https://api.github.com/search/repositories?q="+encodeURIComponent(this.state.search);
        fetch(url)
        .then((res)=> res.json())
        .then((result)=> {
            this.setState({dataSource: this.state.dataSource.cloneWithRows(result.items)});
            console.log(result.items);
        })
        .finally(()=>this.setState({opacity: 0}));
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

    repoCell: {
        width: 50,
        alignItems: 'center',
    },
    repoCellIcon: {
        width: 50,
        height: 50,
        marginRight: 10
    },
  });


AppRegistry.registerComponent('SearchResults', () => SearchResults);
