import React, { Component } from 'react';
import {
    View,
    Image,
    FlatList,
    StyleSheet,
    Text,
} from 'react-native'
import Toolbar from '../components/Toolbar'
import Banner from '../components/banner';

import {getHome} from '../actions/homeAction';

export default class homePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            IndexInfo:{}
        }
    }

    componentDidMount(){
        getHome(result=>{
            this.setState({
                IndexInfo:result
            })
        },err=>{
            console.log(err);
        })
    }

    render(){
        return (
            <View style={{flex:1,flexDirection:'column'}}>
                <View
                    style={{
                        justifyContent:'center',
                        alignItems:'center',
                    }}
                    >
                <Image key={'centerImage'}
                       style={{
                           height:48,
                           resizeMode:'center',
                       }}
                       source={require('../resources/imgs/logo.png')}/>
                </View>
                <Toolbar leftButton={'angle-left'}
                         centerImage={require('../resources/imgs/logo.png')}
                         rightButton={'bell-o'}
                />
                <FlatList
                          horizontal={true}
                          contentContainerStyle={styles.grid}
                          data={this.state.IndexInfo.classify}
                          keyExtractor={(item,index)=>index}

                          renderItem={(row,key)=> {
                              return (
                                  <View key={key} style={styles.itemLayout}>
                                      <Image style={{width: 26, height: 26}} source={{uri:row.item.image}}/>
                                      <Text>{row.item.name}</Text>
                                  </View>
                              )
                          }}
                />
                <Banner banners={this.state.IndexInfo.ad}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    grid:{
        height:80,
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap:'nowrap',
    },
    itemLayout:{
        alignItems:'center',
        justifyContent:'center',
    }
});