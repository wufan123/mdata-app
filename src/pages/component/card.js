import React from 'react'
import PropTypes from 'prop-types';
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

export  default  class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.75}>
                <View style={[styles.card, this.props.style]}>
                    {this.props.children}
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        minHeight: 50,
        margin: 20,
        backgroundColor: '#fff',
        flex: 1,
        borderRadius: 10,
        padding: 5,
        elevation: 5,
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'gray'
    }
});
Card.propTypes={
    ...View.propTypes,
    onPress: PropTypes.func,
}