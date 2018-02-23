import React from 'react'
import {Button, Image, StyleSheet, Text, View} from "react-native";
import Theme from "../../style/index";
import {Cols, Row, Table} from "react-native-table-component";
import CommonTable from "../component/simpleTable";
import {RefreshScrollView} from "../component/pull/index";

export  default  class NationwideDetail extends React.Component {
    static navigationOptions = {
        title: '全国',
    }

    constructor(props) {
        super(props);
    }

    render() {
        let tableData = []
        for (let i = 0; i < 20; i++) {
            tableData.push({
                title: '雷神3',
                box: 1598.99,
                schedule: 31.1,
                seat: 15.6
            })
        }
        return (
            <RefreshScrollView>
                <View style={{flex: 1}}>
                    <View style={{
                        flexDirection: 'row',
                        paddingHorizontal: 20,
                        paddingVertical: 18,
                        backgroundColor: 'white'
                    }}>
                        <View style={styles.topItem}>
                            <Image style={styles.topIcon} source={require('../../assets/box_office.png')}/>
                            <View>
                                <Text style={styles.topItemTitle}>
                                    昨日票房
                                </Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={styles.topItemTxt}>
                                        7017.8
                                    </Text>
                                    <Text style={styles.topItemUnit}>
                                        万
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={{width: 1, backgroundColor: Theme.borderColor}}/>
                        <View style={styles.topItem}>
                            <Image style={styles.topIcon} source={require('../../assets/personnel.png')}/>
                            <View>
                                <Text style={styles.topItemTitle}>
                                    昨日人次
                                </Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={styles.topItemTxt}>
                                        7017.8
                                    </Text>
                                    <Text style={styles.topItemUnit}>
                                        万
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.subTitleBox}>
                        <Text style={styles.subTitle}>
                            TOP5 影片
                        </Text>
                    </View>
                    <CommonTable tableData={tableData}>
                        {{label: '影片', prop: 'title'}}
                        {{label: '影片', prop: 'title'}}
                        {{label: '影片', prop: 'title'}}
                        {{label: '影片', prop: 'title'}}
                    </CommonTable>
                </View>
            </RefreshScrollView>
        );
    }
}

const styles = StyleSheet.create({
    topItem: {flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'},
    topIcon: {
        height: 26,
        width: 26,
        margin: 10
    },
    topItemTitle: {
        fontSize: 11
    },
    topItemTxt: {
        fontSize: 28,
        color: Theme.colorSub,
    },
    topItemUnit: {
        fontSize: 13,
        marginTop: 10,
        marginLeft: 6
    },
    subTitleBox: {height: 37, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', marginTop: 15},
    subTitle: {
        fontSize: 15,
        fontWeight: 'bold',
    }
});