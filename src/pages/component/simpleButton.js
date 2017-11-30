import React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Theme from "../../style/index";
import PropTypes from 'prop-types';

export  default  class SimpleButton extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        let style = this.props.style;
        return (
            <TouchableOpacity style={[styles.btnContainer,style]} activeOpacity={0.75} onPress={this.props.onPress}>
                <Text style={[styles.btnTxt,style?style.color:undefined,style?style.fontSize:undefined]}>
                    {this.props.children}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    btnContainer:{
        backgroundColor:Theme.colorPrimary,
        height:45,
        width:100,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    btnTxt:{
        color:"#fff",
        fontSize:16
    }
});
SimpleButton.propTypes ={
    ...View.propTypes,
    onPress: PropTypes.func,
};