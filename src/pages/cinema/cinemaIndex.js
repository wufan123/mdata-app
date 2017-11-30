import React from 'react'
import {Image, StyleSheet, Text, View, Dimensions} from "react-native";
import NationWide from "./nationwide";
import Forecast from "./forecast";
import Me from "./me";
import {TabNavigator} from "react-navigation";
import  Theme from '../../style'

let TabNav = TabNavigator({
    NationWide: {
        screen: NationWide,
    },
    Me: {
        screen: Me
    },
    Forecast: {
        screen: Forecast,
    }

}, {
    tabBarPosition: 'top',
    animationEnabled: false,
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: Theme.colorPrimary,
        inactiveTintColor: 'gray', // 文字和图片未选中颜色
        indicatorStyle: {
            height: 5, // 如TabBar下面显示有一条线，可以设高度为0后隐藏
            backgroundColor: Theme.colorPrimary,
            width: 20,
            marginHorizontal: 23
        },
        style: {
            backgroundColor: 'transparent', // TabBar 背景色
            justifyContent: 'center',
            // height: 50,
            marginHorizontal: (Dimensions.get('window').width - (3 * 65)) / 2
        },
        labelStyle: {
            fontSize: 16, // 文字大小
        },
        tabStyle: {
            width: 65
        },
    },
    backBehavior: 'none',//去除物理返回键事件
});
export  default  class Cinema extends React.Component {
    static navigationOptions = {
        tabBarLabel: '影院',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../../assets/cinema.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <TabNav/>
                <View style={styles.topRight}>
                    <Image
                        source={require('../../assets/search.png')}
                        style={styles.icon}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24
    },
    topRight: {
        position: 'absolute',
        right: 25,
        top: 15
    }
});
