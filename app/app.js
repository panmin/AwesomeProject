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
                tabBarIcon: ({ focused,tintColor }) => (
                    <Icon
                        name="home"
                        color={tintColor}
                    />
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
                        color={tintColor}
                    />
                ),
            }
        }
    },
    {
        tabBarPosition:'bottom',
        tabBarOptions: {
            activeTintColor:'#c1442e',
            inactiveTintColor:'#eaeaea',
            lazy: true,
            indicatorStyle: {
                height: 0
            }
        }
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