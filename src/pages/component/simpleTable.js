import React from 'react'
import {Button, Image, StyleSheet, Text, View} from "react-native";
import PropTypes from 'prop-types';
import {Cols, Row, Table} from "react-native-table-component";
import Theme from "../../style/index";
export  default  class SimpleTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<View style={styles.table}>
            <View>
                {
                    this.renderHead()
                }
            </View>
            <View>
                {
                    this.renderRows()
                }
            </View>
        </View>)
    }

    renderRows() {
        let data = this.props.tableData
        console.log(this.props.children);
        return data.map((item, i) => {
            return <View style={{height: 40, flex: 1}}>
                <Text>
                    { item.title}
                </Text>
            </View>
        });
    }

    renderHead() {
        let children = this.props.children ? this.props.children : [];
        return children.map((item, i) => {
            return <View style={{flexDirection:'row'}}>
                <Text>
                    {item.label}
                </Text>
            </View>
        })
    }
}

const styles = StyleSheet.create({
    table: {backgroundColor: 'white'},
    tableHead: {
        height: 40,
        flexDirection: 'row'
    }
});