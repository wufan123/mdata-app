import React from 'react'
import {TabNavigator} from "react-navigation";
import Cinema from './cinema/cinemaIndex'
import Film from './film/filmIndex'
import Me from './me/meIndex'
import {Text, View, StyleSheet, Image} from "react-native";
import SimpleTab from './component/simpleTab'
import Theme from "../style/index";



let TabNav = TabNavigator({
    CinemaTab: {
        screen: Cinema
    },
    FilmTab: {
        screen: Film
    },
    MeTab: {
        screen: Me
    }

}, {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
        activeTintColor: Theme.colorPrimary,
        inactiveTintColor: Theme.fontColorBlack, // 文字和图片未选中颜色
        showIcon: true,
        style: {
            backgroundColor: '#fff',
        },
        labelStyle: {
            fontSize: 12, // 文字大小
            marginTop:2,
            marginBottom:5
        },
        iconStyle: {height:26,width:26},
    },
    backBehavior: 'none',//去除物理返回键事件
});

export  default  class Main extends React.Component {

    constructor(props){
        super(props);
        global.navigation = this.props.navigation
    }
    static navigationOptions = {
        title: 'Home',
        header: null,
    }

    render() {
        return (
            <TabNav />
        )
    }
}

const styles = StyleSheet.create({
    tabBar: {
        height: 65,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    icon: {
        width: 26,
        height: 26,
    },
    tabItem: {
        flex: 1,
        alignItems: 'center'
    }
});

