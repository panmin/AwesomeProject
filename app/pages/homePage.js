import React, { Component } from 'react';
import {
    View,
    Image,
    FlatList,
    StyleSheet,
    Text,
    ScrollView,
    Platform,
    ProgressBarAndroid,
    ProgressViewIOS,
} from 'react-native'

import Toolbar from '../components/Toolbar';
import Banner from '../components/banner';
import CountDownText from '../components/CountDownText';

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
                    <FlatList data={this.state.IndexInfo.group_one}
                              keyExtractor={(item,index)=>index}
                              ItemSeparatorComponent={()=>{
                                  return (<View style={{height:10}}/>)
                              }}
                              renderItem={(row,key)=>{
                                  return (
                                      <View key={key} style={{flexDirection:'row',width:'100%'}}>
                                          <Image style={{flex:1,width:'50%',height:200,resizeMode:'cover'}} source={{uri:row.item.original_img}}/>
                                          <View style={{width:'50%'}}>
                                              <Text style={{textAlign:'center',fontSize:14}}>{row.item.goods_name}</Text>
                                              <CountDownText
                                                  date={row.item.end_time}
                                                  />
                                              <Text>后本期预售结束</Text>
                                              <View style={{flexDirection:'row'}}>
                                                  <Text>已预售</Text>
                                                  <Text style={{color:'red'}}>{row.item.buy_num_now}</Text>
                                                  <Text>件</Text>
                                              </View>
                                              <View style={{flexDirection:'row'}}>
                                                  <Text>{row.item.buy_num_1}件成团</Text>
                                                  <Text style={{flex:1,textAlign:'right',}}>满{row.item.buy_num_3}件</Text>
                                              </View>
                                              {Platform.OS === 'android'?
                                                  <ProgressBarAndroid styleAttr='Horizontal'
                                                                      indeterminate={false}
                                                                      color='black'
                                                                      progress={row.item.buy_num_now/row.item.total}/>:
                                                  <ProgressViewIOS progress={row.item.buy_num_now/row.item.total}/>}
                                              <View style={{flexDirection:'row'}}>
                                                  <Text>￥{row.item.price_1}</Text>
                                                  <Text style={{flex:1,textAlign:'right',}}>￥{row.item.price_3}</Text>
                                              </View>
                                          </View>
                                      </View>
                                  )
                              }}
                    />
                    <View style={{flexDirection:'row'}}>
                        <Text style={{flex:1}}>服物精选</Text>
                        <Image style={{resizeMode:'contain'}} source={require('../resources/imgs/next.png')}/>
                    </View>
                    <FlatList data={this.state.IndexInfo.favourite_goods}
                              horizontal={true}
                              ItemSeparatorComponent={()=>{
                                  return (<View style={{width:10}}/>)
                              }}
                              keyExtractor={(item,index)=>index}
                              renderItem={(row,key)=>{
                                  return (
                                      <View>
                                          <Image style={{width:120,height:140}} source={{uri:row.item.original_img}}/>
                                          <Text style={{maxWidth:120,textAlign:'center',}}>{row.item.goods_name}</Text>
                                      </View>
                                  )
                              }}
                    />
                    <FlatList data={this.state.IndexInfo.group_two}
                              keyExtractor={(item,index)=>index}
                              ItemSeparatorComponent={()=>{
                                  return (<View style={{height:10}}/>)
                              }}
                              renderItem={(row,key)=>{
                                  return (
                                      <View key={key} style={{flexDirection:'row',width:'100%'}}>
                                          <Image style={{flex:1,width:'50%',height:200,resizeMode:'cover'}} source={{uri:row.item.original_img}}/>
                                          <View style={{width:'50%'}}>
                                              <Text style={{textAlign:'center',fontSize:14}}>{row.item.goods_name}</Text>
                                              <CountDownText
                                                  date={row.item.end_time}
                                              />
                                              <Text>后本期预售结束</Text>
                                              <View style={{flexDirection:'row'}}>
                                                  <Text>已预售</Text>
                                                  <Text style={{color:'red'}}>{row.item.buy_num_now}</Text>
                                                  <Text>件</Text>
                                              </View>
                                              <View style={{flexDirection:'row'}}>
                                                  <Text>{row.item.buy_num_1}件成团</Text>
                                                  <Text style={{flex:1,textAlign:'right',}}>满{row.item.buy_num_3}件</Text>
                                              </View>
                                              {Platform.OS === 'android'?
                                                  <ProgressBarAndroid styleAttr='Horizontal'
                                                                      indeterminate={false}
                                                                      color='black'
                                                                      progress={row.item.buy_num_now/row.item.total}/>:
                                                  <ProgressViewIOS progress={row.item.buy_num_now/row.item.total}/>}
                                              <View style={{flexDirection:'row'}}>
                                                  <Text>￥{row.item.price_1}</Text>
                                                  <Text style={{flex:1,textAlign:'right',}}>￥{row.item.price_3}</Text>
                                              </View>
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