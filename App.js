import React, {Component, component} from 'react';
import{SafeAreaView,Text,StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import api  from './src/data/src/services/Api';
import Filme from './src/data/Page/Filme';

export default class App extends Component{

    constructor(props){
        super(props);
    this.state ={
        filmes:[]
    }  
  }

    async componentDidMount(){
        const response = await api.get('/filmes');
        this.setState({
            filmes: response.data
        });
    
    }

    render(){
        return(
            <SafeAreaView style={StyleSheet.container}>
                <FlatList
                data = {this.state.filmes}
                keyExtractor={item => item.id}
                renderItem={({item}) => <Filme data={item}/>}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'black'
    }
});