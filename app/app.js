import React, { Component } from 'react';
import {StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation'
import {
    View,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import Home from './pages/homePage';
import My from './pages/myPage';
import Splash from './pages/splash';

const myTab = TabNavigator(
    {
        Home:{
            screen:Home,
            navigationOptions:{
                tabBarLabel:'首页',
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name="home"
                        size={26}
                        color={tintColor} />
                ),
            }
        },
        My:{
            screen:My,
            navigationOptions:{
                tabBarLabel:'我',
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name="user-o"
                        size={24}
                        color={tintColor}
                    />
                ),
            }
        }
    },
    {
        tabBarPosition:'bottom',
        lazy: true,
        tabBarOptions: {
            showIcon: true,
            activeTintColor:'#c1442e',
            inactiveTintColor:'#eaeaea',
            indicatorStyle: {
                height: 0
            },
            style:{
                backgroundColor:'white',
            },
            labelStyle:{
                marginTop:1,
                marginBottom:1
            },
            iconStyle:{

            }
        },
    }
);
const Navigator = StackNavigator(
    {
        Tab:{
            screen:myTab,
        }
    },
    {
        navigationOptions:{
            header:null
        }
    }
);

class App extends Component {
    render() {

        return (
            <View style={{flex: 1}}>
                <Navigator/>
            </View>
        )
    }
}

export default App;