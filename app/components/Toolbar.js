/**
 * Created by panmin on 18-1-29.
 * Email: panminzzu@126.com
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Toolbar extends Component {

    render() {
        let Toolbar = [];
        //1.左边返回按钮

        if (this.props.leftButton != undefined) {
            Toolbar.push(
                <TouchableOpacity key={'leftButtonIcon'} activeOpacity={0.6} onPress={this.props.leftIconAction} style={toolBarStyle.left}>
                    <Icon
                        name={this.props.leftButton}
                        size={27}
                        color='black'
                    />
                </TouchableOpacity>
            )
        }
        //2.标题
        if (this.props.title != undefined) {
            Toolbar.push(
                <Text key={'title'} style={[toolBarStyle.title, this.props.titleStyle ? this.props.titleStyle : '']} numberOfLines={1}>
                    {this.props.title}
                </Text>
            )
        }else if(this.props.centerImage != undefined){
            Toolbar.push(
                <View key={'centerImage'} style={toolBarStyle.center} >
                    <Image style={toolBarStyle.centerImage} source={this.props.centerImage}/>
                </View>
            )
        }
        //右边按钮
        if(this.props.rightButton != undefined){
            Toolbar.push(
                <TouchableOpacity key={'rightButton'} activeOpacity={0.6} onPress={this.props.rightIconAction} style={toolBarStyle.right}>
                    <Icon
                        name={this.props.rightButton}
                        size={20}
                        color='gray'
                    />
                </TouchableOpacity>
            )
        }

        return (
            <View style={[toolBarStyle.container,this.props.containerStyle?this.props.containerStyle:'']}>
                {Toolbar}
            </View>
        )
    }
}

const toolBarStyle = StyleSheet.create({
    container: {
        height: 48,
        flexDirection: 'row',
        borderBottomWidth: 0.2,
        borderBottomColor: 'gray',
        backgroundColor: 'white'
    },
    left:{
        marginLeft:15,
        justifyContent:'center',
        alignItems:'center',
    },
    right:{
        marginRight:15,
        justifyContent:'center',
        alignItems:'center',
    },
    center:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:16,
        color:'black'
    },
    centerImage:{
        resizeMode:'center',
        height:48,
    }
});