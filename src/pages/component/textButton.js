import React from 'react'
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Theme from "../../style/index";
import PropTypes from 'prop-types';

export  default  class TextButton extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.75}>
                <Text style={[styles.linkTxt,this.props.style]}>
                    {this.props.children}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    linkTxt: {
        color: Theme.colorPrimary
    }
});

TextButton.propTypes ={
    ...View.propTypes,
    onPress: PropTypes.func
}