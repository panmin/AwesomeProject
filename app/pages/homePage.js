import React, { Component } from 'react';
import {
    View,
    Image,
    FlatList,
    StyleSheet,
    Text,
    ScrollView,
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
            <View style={{flex:1,flexDirection:'column',backgroundColor:'white'}}>
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
                <ScrollView style={{flex:1}}>
                    <Banner banners={this.state.IndexInfo.ad}/>
                    <FlatList
                              horizontal={true}
                              contentContainerStyle={styles.grid}
                              data={this.state.IndexInfo.classify}
                              keyExtractor={(item,index)=>index}

                              renderItem={(row,key)=> {
                                  return (
                                      <View key={key} style={styles.itemLayout}>
                                          <Image style={{width: 16, height: 20,resizeMode:'contain'}} source={{uri:row.item.image}}/>
                                          <Text style={{fontSize:8}}>{row.item.name}</Text>
                                      </View>
                                  )
                              }}
                    />
                    <FlatList data={this.state.IndexInfo.article}
                              contentContainerStyle={styles.article}
                              ItemSeparatorComponent={()=>{
                                  return (<View style={{height:10}}/>)
                              }}
                              keyExtractor={(item,index)=>index}
                              renderItem={(row,key)=>{
                                  return (
                                      <View key={key} style={{width:'100%'}}>
                                        <Image style={{width:'100%',height:200,resizeMode:'cover'}} source={{uri:row.item.thumb}}/>
                                      </View>
                                  )
                              }}
                    />
                    <FlatList data={this.state.IndexInfo.favourite_goods}
                              keyExtractor={(item,index)=>index}
                              ItemSeparatorComponent={()=>{
                                  return (<View style={{height:10}}/>)
                              }}
                              renderItem={(row,key)=>{
                                  return (
                                      <View key={key} style={{flexDirection:'row',width:'100%'}}>
                                          <Image style={{flex:1,width:'50%',height:200,resizeMode:'cover'}} source={{uri:row.item.original_img}}/>
                                          <View style={{width:'50%'}}>
                                              <Text style={{textAlign:'center'}}>{row.item.goods_name}</Text>
                                          </View>
                                      </View>
                                  )
                              }}
                    />
                </ScrollView>
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
    },
    article:{

    }
});