import React from 'react'
import {Image, StyleSheet, View, Dimensions, SafeAreaView, Platform} from "react-native";
import TabNavigator from "react-navigation/lib-rn/navigators/TabNavigator";
import NationWide from "./nationwide";
import Me from "./me";
import Forecast from "./forecast";
import Theme from "../../style/index";

const CinemaTabNav = TabNavigator({
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
            marginHorizontal: (Dimensions.get('window').width - (3 * 65)) / 2,
            borderTopWidth: 0,
        },
        labelStyle: {
            fontSize: 16, // 文字大小
        },
        tabStyle: {
            width: 65
        },
    },
    contentOptions: {
        itemsContainerForceInset: { top: 'never', horizontal: 'never' },
      },
    backBehavior: 'none',//去除物理返回键事件
});

export  default  class Cinema extends React.Component {
    static navigationOptions = {
        tabBarLabel: '影院',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../../assets/cinema.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.topRight}>
                    <Image
                        source={require('../../assets/search.png')}
                        style={styles.icon}
                    />
                </View>
                <CinemaTabNav navigation={this.props.navigation}/>
            </View>
        )
    }
}
Cinema.router = CinemaTabNav.router;

const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24
    },
    topRight: {
        position: 'absolute',
        right: 25,
        top: 26
    }
});
