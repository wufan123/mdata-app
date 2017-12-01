import React from 'react'
import { Button, Image, StyleSheet, View, ScrollView, SafeAreaView, Text } from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class Film extends React.Component {
    static navigationOptions = {
        tabBarLabel: '影片',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../assets/film.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };

    ele(value) {
        return (
            <Text style={styles.listText}>hello world</Text>
        )
    }

    render() {
        const tableHead = ['Head2', 'Head3', 'Head4',];
        const tableTitle = ['Title', 'Title2', 'Tilte3', 'Title4', 'Title5'];
        const tableData = [
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3],
        ];
        const widthArr = [50, 50, 50,];
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ paddingHorizontal: 0, flex: 1 }}>
                    <Table style={styles.table} borderStyle={{ borderColor: 'transparent', }}>
                        {/* Left Wrapper */}
                        <TableWrapper style={{ flex: 1 }}>
                            <Cell data="Head" style={styles.head} textStyle={[styles.headText, { textAlign: 'left' }]} />
                            {
                                tableTitle.map((title, i) => (
                                    <Cell key={i} data={title} height={28} style={i % 2 && { backgroundColor: '#DFF5F2' }} textStyle={[styles.titleText, { textAlign: 'left' }]} />
                                ))
                            }
                        </TableWrapper>

                        {/* Right scrollview Wrapper */}
                        <ScrollView style={{}} contentContainerStyle={{flex: 1, justifyContent: 'flex-end'}} horizontal={true} bounces={false}>
                            {/* If parent element is not table element, you should add the type of borderstyle. */}
                            <TableWrapper style={{flex: 1, alignItems: 'flex-end' }} borderStyle={{ borderColor: 'transparent' }}>
                                <Row data={tableHead} style={styles.head} textStyle={styles.headText} widthArr={widthArr} />
                                {
                                    tableData.map((data, i) => (
                                        <Row key={i} data={data} style={[styles.list, i % 2 && { backgroundColor: '#DFF5F2' }]} widthArr={widthArr} textStyle={styles.listText} />
                                    ))
                                }
                            </TableWrapper>
                        </ScrollView>
                    </Table>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
    table: { flexDirection: 'row', justifyContent: 'space-between'},
    head: { backgroundColor: '#333', height: 40 },
    headText: { color: '#fff', textAlign: 'center' },
    titleText: { textAlign: 'center' },
    list: { height: 28, },
    listText: { textAlign: 'center' }
});