import React,{Component} from 'react';

import {
    View,
    Image,
    Text,
    TouchableWithoutFeedback,
    StyleSheet
}from 'react-native';

import Swiper from 'react-native-swiper';
import CommonStyles from '../common/commonStyles'


export default class Banner extends Component{
    constructor(props) {
        super(props);
        this.state=({
            banners:[]
        })
    }

    componentWillReceiveProps(nextProps){
        console.log(typeof(nextProps));
        this.setState({
            banners:nextProps.banners
        })
    }

    render(){
        return (
            <Swiper style={styles.imgWrapper}
                    height={200}
                    showsButtons={true}
                    autoplay={true}
                    horizontal={true}
                    loop={true}
                    renderPagination={(index,total,context)=>{
                        return (
                            <View style={{
                                position: 'absolute',
                                bottom: 10,
                                right: 10
                            }}>
                                <Text style={{color: 'grey'}}>
                                    <Text style={{
                                        color: 'white',
                                        fontSize: 20
                                    }}>{index + 1}</Text>/{total}
                                </Text>
                            </View>
                        )
                    }}
            >
                {this.state.banners.map((banner,key)=> {
                    return(
                        <Image key={key} resizeMode="cover" source={{uri: banner.ad_code}} style={styles.bannerImg}/>
                    )
                })}
            </Swiper>
        )
    }
}
/*
render() {
    return(
        <Swiper style={styles.imgWrapper}
                showsButtons={true} autoplay={true}
        >
            <View style={styles.imgView}>
                <Image source={{uri:"https://www.baidu.com/img/bd_logo1.png"}} style={styles.bannerImg} />
            </View>
            <View style={styles.imgView}>
                <Image source={{uri:"https://www.baidu.com/img/bd_logo1.png"}} style={styles.bannerImg} />
            </View>
            <View style={styles.imgView}>
                <Image source={{uri:"https://www.baidu.com/img/bd_logo1.png"}} style={styles.bannerImg} />
            </View>
            <View style={styles.imgView}>
                <Image source={{uri:"https://www.baidu.com/img/bd_logo1.png"}} style={styles.bannerImg} />
            </View>
        </Swiper>
    )
}
}*/

const styles = StyleSheet.create({
    imgWrapper: {
        width: CommonStyles.window.width,
        height: 200,
    },
    bannerImg: {
        width: CommonStyles.window.width,
        height: 200
    }
});
