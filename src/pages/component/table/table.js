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
        cellWidth: PropTypes.number,
        cellHeight: PropTypes.number,
        tableHead: PropTypes.array,
        tableData: PropTypes.array,
    }

    constructor(props) {
        super(props)
    }

    render() {
        let head = this.props.head ? this.props.head : 'head'
        let tableTitle = this.props.titles || Array(100).fill().map((e, i) => 'title' + i)
        let height = this.props.cellHeight || 28
        let width = this.props.cellWidth || 60
        let tableHead = this.props.tableHead || Array(20).fill().map((e, i) => 'head' + i)
        let tableData = this.props.tableData || Array(tableTitle.length).fill().map((e, i) => Array(tableHead.length).fill().map((e, i) => i))
        let widthArr = Array(tableHead.length).fill().map((e, i) => width)

        return (
            <View style={this.props.style}>
                <ScrollView style={{flex:1}}>
                    <View style={styles.table} >
                        {/* Left Wrapper */}
                        <View style={{ minWidth: 100 }} >
                            <Cell data={head} height={height}  style={[styles.head, { backgroundColor: defaultStyle.grayBackground }]} textStyle={[styles.headText, { textAlign: 'left' }]} />
                            <FlatList
                                style={{flex:1}}
                                bounces={false}
                                data={tableTitle}
                                keyExtractor={(item, index)=>index}
                                renderItem={ ({item, index})=> {
                                    return(
                                        <Cell key={index} data={item} height={height} style={index % 2 && { backgroundColor: defaultStyle.grayBackground }} textStyle={[styles.titleText, { textAlign: 'left' }]} />
                                    )
                                }}
                            />
                        </View>

                        {/* Right scrollview Wrapper */}
                        <ScrollView style={{}} contentContainerStyle={{}} horizontal={true} bounces={false}>
                            {/* If parent element is not table element, you should add the type of borderstyle. */}
                            <View style={{}}>
                                <Row data={tableHead} height={height} style={styles.head} textStyle={styles.headText} widthArr={widthArr} />
                                <FlatList
                                    style={{flex:1}}
                                    bounces={false}
                                    data={tableData}
                                    keyExtractor={(item, index)=>index}
                                    renderItem={({item, index})=>{
                                        return(
                                            <Row key={index} data={item} height={height} style={[styles.list, index % 2 && { backgroundColor: defaultStyle.grayBackground }]} widthArr={widthArr} textStyle={styles.listText} />
                                        )
                                    }}
                                />
                            </View>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    table: {
        flexDirection: 'row',
        flex: 1,
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