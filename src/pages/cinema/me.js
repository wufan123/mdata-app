import React from 'react'
import {Button, Image, StyleSheet, Text, View} from "react-native";

export  default  class Me extends React.Component {
    static navigationOptions = {
        tabBarLabel: '我的',
    };

    render() {
        return (
            <View>
                <Text>
                    全国
                </Text>
            </View>
        );
    }
}