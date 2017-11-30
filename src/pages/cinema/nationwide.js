import React from 'react'
import {Button, Image, StyleSheet, Text, View} from "react-native";
import {RefreshScrollView} from '../component/pull'
import Card from "../component/card";
import Theme from '../../style'
export  default  class NationWide extends React.Component {
    static navigationOptions = {
        tabBarLabel: '全国',
    };

    constructor(props) {
        super(props)
    }
    _onClickCard(arg){
        console.log("--------",this.props.navigation)
        global.navigation.navigate('NationwideDetail');
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <RefreshScrollView
                >
                    <Card onPress={()=>this._onClickCard("click card")}>
                        <View style={styles.cardItem}>
                            <View style={styles.tag}>
                                <Text>
                                    全国
                                </Text>
                            </View>
                            <View style={styles.cardTop}>
                                <Text style={{marginLeft: 20}}>
                                    昨日票房 2017年11月7日
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
                                <Text>每日0点更新票房</Text>
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
        marginBottom: 20
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
        marginTop: 10
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
