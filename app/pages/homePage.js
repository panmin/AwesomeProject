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
            <Banner banners={this.state.IndexInfo.ad}/>
        );
    }
}