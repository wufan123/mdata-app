import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, FlatList } from "react-native";
import PropTypes from 'prop-types';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import * as defaultStyle from './style';

class TableView extends Component {

    static propTypes = {
        ...View.propTypes,
        borderStyle: PropTypes.object,
        head: PropTypes.string,
        titles: PropTypes.array,
        headStyle: PropTypes.object,
        cellWidth: PropTypes.number,
        cellHeight: PropTypes.number,
        tableHead: PropTypes.array,
        tableData: PropTypes.array,
    }

    constructor(props) {
        super(props)
        console.log('constructor......')
    }

    render() {
        console.log('...hello')
        let head = this.props.head ? this.props.head : 'head'
        let tableTitle = this.props.titles || Array(900).fill().map((e, i) => 'title' + i)
        let height = this.props.cellHeight || 28
        let width = this.props.cellWidth || 60
        let tableHead = this.props.tableHead || Array(7).fill().map((e, i) => 'head' + i)
        let tableData = this.props.tableData || Array(tableTitle.length).fill().map((e, i) => Array(tableHead.length).fill().map((e, i) => i))
        let widthArr = Array(tableHead.length).fill().map((e, i) => width)

        return (
            <View style={this.props.style}>
                <ScrollView>
                    <Table style={styles.table} borderStyle={{ borderColor: 'transparent', }}>
                        {/* Left Wrapper */}
                        <TableWrapper style={{ minWidth: 100 }}>
                            <Cell data={head} height={height} style={[styles.head, { backgroundColor: defaultStyle.grayBackground }]} textStyle={[styles.headText, { textAlign: 'left' }]} />
                            {
                                tableTitle.map((title, i) => (
                                    <Cell key={i} data={title} height={height} style={i % 2 && { backgroundColor: defaultStyle.grayBackground }} textStyle={[styles.titleText, { textAlign: 'left' }]} />
                                ))
                            }
                        </TableWrapper>

                        {/* Right scrollview Wrapper */}
                        <ScrollView style={{}} contentContainerStyle={{}} horizontal={true} bounces={false}>
                            {/* If parent element is not table element, you should add the type of borderstyle. */}
                            <TableWrapper style={{}} borderStyle={{ borderColor: 'transparent' }}>
                                <Row data={tableHead} height={height} style={styles.head} textStyle={styles.headText} widthArr={widthArr} />
                                {
                                    tableData.map((data, i) => (
                                        <Row key={i} data={data} height={height} style={[styles.list, i % 2 && { backgroundColor: defaultStyle.grayBackground }]} widthArr={widthArr} textStyle={styles.listText} />
                                    ))
                                }
                            </TableWrapper>
                        </ScrollView>
                    </Table>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    table: {
        flexDirection: 'row'
    },
    head: {
        backgroundColor: defaultStyle.grayBackground
    },
    headText: {
        textAlign: 'right'
    },
    titleText: {

    },
    listText: {
        textAlign: 'right'
    }
})

export default TableView