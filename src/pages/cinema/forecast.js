import React from 'react'
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Theme from "../../style/index";
import Card from "../component/card";
import {RefreshScrollView} from "../component/pull/index";

export  default  class Forecast extends React.Component {
    static navigationOptions = {
        tabBarLabel: '预测',
    };

    constructor(props){
        super(props);
        console.log(this.props.navigation)    }

    _onClickCard(){
        global.navigation.navigate('ForecastDetail')
    }
    render() {
        return (
            <View style={{flex:1}}>
                <RefreshScrollView
                >
                <Card onPress={() => this._onClickCard("click card")}>
                    <View style={styles.cardItem}>
                        <View style={styles.cardTop}>
                            <Text >
                               预测今日影院票房总计
                            </Text>
                        </View>
                        <View style={styles.cardCenter}>
                            <Text style={[styles.largeTxt, Theme.font24]}>
                                7017.8
                            </Text>
                            <Text style={{marginLeft: 10, marginTop: 10}}>
                                万
                            </Text>
                        </View>
                        <View style={styles.cardBottom}>
                            <Text>系统预测</Text>
                        </View>
                    </View>
                </Card>
                </RefreshScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    linkTxt: {
        color: Theme.colorPrimary
    },
    cardBottom: {
        marginTop: 20,
        marginBottom: 20,
        flexDirection: "row"
    },
    cardItem: {
        alignItems: 'center'
    },
    tag: {
        position: 'absolute',
        left: 10,
        top: 10
    },
    cardTop: {
        marginTop: 10,
        flexDirection: 'row'
    },
    cardCenter: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: "center"
    },
    largeTxt: {
        fontWeight: 'bold'
    }
});