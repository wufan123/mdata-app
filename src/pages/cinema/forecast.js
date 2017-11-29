import React from 'react'
import {Button, Image, StyleSheet, Text, View} from "react-native";

export  default  class Forecast extends React.Component {
    static navigationOptions = {
        tabBarLabel: '预测',
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