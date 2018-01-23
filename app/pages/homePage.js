import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native'
import Banner from '../components/banner';

import {getHome} from '../actions/homeAction';

export default class homePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            IndexInfo:{}
        }
    }

    componentWillMount(){
        getHome(result=>{
            console.log(result);
        },err=>{
            console.log(err);
        })
    }

    render(){
        return (
            <View>
                {/*<Banner banners={}/>*/}
            </View>
        );
    }
}