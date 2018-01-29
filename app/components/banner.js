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
            banners:[],
        })
    }
    componentDidMount(){

    }

    componentWillReceiveProps(nextProps){
        console.log(typeof(nextProps));
        this.setState({
            banners:nextProps.banners
        })
    }

    render() {

        return (
            <Swiper style={styles.imgWrapper}
                    loop={true}
                    index={0}
                    autoplay={true}
                    horizontal={true}
                    removeClippedSubviews={false}
                    dot={<View style={{
                        backgroundColor: 'rgba(0,0,0,.2)',
                        width: 8,
                        height: 8,
                        borderRadius: 4,
                        marginLeft: 3,
                        marginRight: 3
                    }}/>}
                    activeDot={<View style={{
                        backgroundColor: '#12a230',
                        width: 8,
                        height: 8,
                        borderRadius: 4,
                        marginLeft: 3,
                        marginRight: 3
                    }}/>}
            >
                {this.state.banners.map((banner, key) => {
                    return (
                        <Image key={key} resizeMode="cover" source={{uri: banner.ad_code}}
                               style={styles.bannerImg}/>
                    )
                })}
            </Swiper>
        )
    }
}

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
