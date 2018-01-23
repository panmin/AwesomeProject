import React,{Component} from 'react';

import {
    Image,
    TouchableWithoutFeedback,
}from 'react-native';

import Swiper from 'react-native-swiper';
import CommonStyles from '../common/commonStyles'

export default class Banner extends Component{
    constructor(props){
        super(props);
        this.state= {
            banners: [/*{
                ad_id:0,
                gid:0,
                ad_code:'',
                ad_link:'',
                ad_name:'',
                media_type:0,
            }*/]
        }
    }
    render(){
        return (
            <Swiper>
                {this.state.banners.map((banner)=>{
                    return (
                        <TouchableWithoutFeedback
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
                                style={{width:CommonStyles.window.width}}
                                source={{uri:banner.ad_code}}
                            />
                        </TouchableWithoutFeedback>
                    )
                })}
            </Swiper>
        )
    }
}