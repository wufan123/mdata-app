import React from 'react'
import {Button, Image, StyleSheet, Text, View} from "react-native";

export  default  class NationwideDetail extends React.Component {
    static navigationOptions = {
        title: '全国',
    }
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={{flex:1}}>
                <Text>
                    全国
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});