import React from 'react'
import {TabNavigator} from "react-navigation";
import Cinema from './cinema/cinemaIndex'
import Film from './film/filmIndex'
import Me from './me/meIndex'
import {Text, View, StyleSheet, Image} from "react-native";
import SimpleTab from './component/simpleTab'

export  default  class Main extends React.Component {

    static navigationOptions = {
        title: 'Home',
        header: null,
    }


    render() {
        return (
            <SimpleTab>
                <Cinema tabLabel={'影院'} tabIcon={require('../assets/cinema.png')}/>
                <Film tabLabel={'影片'} tabIcon={require('../assets/film.png')}/>
                <Me tabLabel={'我的'} tabIcon={require('../assets/me.png')}/>
            </SimpleTab>
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

