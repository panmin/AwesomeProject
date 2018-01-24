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
                    showsButtons={true} autoplay={true}
            >
                {this.state.banners.map((banner,key)=> {
                    return(
                        <View style={styles.imgView} key={key}>
                            <Image source={{uri: banner.ad_link}} style={styles.bannerImg}/>
                        </View>
                    )
                })}
                /*<View style={styles.imgView}>
                    <Image source={{uri:"https://www.baidu.com/img/bd_logo1.png"}} style={styles.bannerImg} />
                </View>
                <View style={styles.imgView}>
                    <Image source={{uri:"https://www.baidu.com/img/bd_logo1.png"}} style={styles.bannerImg} />
                </View>
                <View style={styles.imgView}>
                    <Image source={{uri:"https://www.baidu.com/img/bd_logo1.png"}} style={styles.bannerImg} />
                </View>*/
            </Swiper>
            /*<Swiper
                height={200}
                loop={true}
                autoplay={true}
                style={{ flex: 1}}
            >
                {this.state.banners.map((banner,key)=>{
                    return (
                        <TouchableWithoutFeedback
                            key={key}
                            onPress={()=>{
                                switch (banner.media_type){
                                    case 2:{//H5链接
                                        console.log(banner.ad_link);
                                        break;
                                    }
                                    case 3:{//3、商品详情
                                        console.log(banner.gid);
                                        break;
                                    }
                                    case 4:{//4、文章详情
                                        console.log(banner.id);
                                        break;
                                    }
                                }
                            }}
                        >
                            <Image
                                style={{width:CommonStyles.window.width,height:200}}
                                source={{uri:banner.ad_code}}
                            />
                        </TouchableWithoutFeedback>
                    )
                })}
            </Swiper>*/
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
        width: '100%',
        height: 200,
    },
    imgView: {
        flex: 1,
        height: 200,
    },
    bannerImg: {
        width: '100%',
        height: 200,
        flex: 1
    }
});
