import React from 'react'
import {Button, Image, StyleSheet, Text, View} from "react-native";
import {RefreshScrollView} from "../component/pull/index";
import Theme from "../../style/index";

export  default  class ForecastDetail extends React.Component {
    static navigationOptions = {
        title: '预测今日影院票房',
    }
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={{flex:1}}>
                <View style={styles.topInfo}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{marginTop:10}}>
                            总计
                        </Text>
                        <Text style={[styles.largeTxt]}>
                            9.88
                        </Text>
                        <Text style={{marginTop:10}}>
                            万
                        </Text>
                    </View>
                    <View style={{marginTop:20}}>
                        <Text>
                            中国大地影城（红星店）
                        </Text>
                    </View>
                </View>
                <RefreshScrollView>
                <Text>
                    全国
                </Text>
                </RefreshScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    topInfo:{
        backgroundColor:'white',
        padding:20,
        justifyContent:'center',
        alignItems:'center',
    },
    largeTxt: {
        fontWeight: 'bold',
        fontSize:28
    }
});
