import React, { Component } from 'react';
import {
    View,
    Image,
    StatusBar,
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
                <Banner banners={this.state.IndexInfo.ad}/>
            </View>
        );
    }
}