import React from 'react';
import {Button, Image, StyleSheet, View, ScrollView, SafeAreaView, Text} from "react-native";
import {TableView} from '../component/table';

export default class Film extends React.Component {
    static navigationOptions = {
        tabBarLabel: '影片',
        tabBarIcon: ({tintColor}) => (
            <View>
                <Image
                    source={require('../../assets/film.png')}
                    style={{tintColor: tintColor}}
                    resizeMode={'contain'}
                />
            </View>
        ),
    };

    ele(value) {
        return (
            <Text style={styles.listText}>hello world</Text>
        )
    }

    render() {
        let head = 'date'
        let tableTitle = Array(50).fill().map((e, i) => 'date' + i)
        let height = 44
        let width = 60
        let tableHead = Array(16).fill().map((e, i) => 'head' + i)
        let tableData = Array(tableTitle.length).fill().map((e, i) => Array(tableHead.length).fill().map((e, i) => i))
        return (
            <SafeAreaView style={{flex: 1}}>
                <TableView
                    style={{marginHorizontal: 20, flex: 1}}
                    head={head}
                    titles={tableTitle}
                    cellWidth={width}
                    cellHeight={height}
                    tableHead={tableHead}
                    tableData={tableData}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    }
});