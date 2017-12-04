import React from 'react'
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import RefreshScrollView from "../component/pull/RefreshScrollView";
import Card from "../component/card";
import Theme from "../../style/index";
import TextButton from "../component/textButton";

export  default  class Me extends React.Component {
    static navigationOptions = {
        tabBarLabel: '我的',
    };

    _onClickCard() {
        global.navigation.navigate('CinemaDetail')
    }

    _openDataPicker() {
        console.log('-------','datePicker')
        global.navigation.navigate('DatePickerPage',{pickerMode:'period'})
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <RefreshScrollView
                >
                    <Card onPress={() => this._onClickCard("click card")}>
                        <View style={styles.cardItem}>
                            <View style={styles.tag}>
                                <Text>
                                    影院总计
                                </Text>
                            </View>
                            <View style={styles.cardTop}>
                                <Text >
                                    昨日票房
                                </Text>
                                <TextButton onPress={this._openDataPicker}>
                                    2017年11月7日▾
                                </TextButton>
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
                                <Text>观影人次 18699</Text>
                                <Text style={{marginLeft: 20}}>平均票价 35.88</Text>
                            </View>
                        </View>
                    </Card>
                </RefreshScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
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