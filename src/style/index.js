import React, { Component } from 'react';
import {
    View,
} from 'react-native';
function vSeparatorWithHeight(h) {
    return (
        <View style={{height: h}} />
    );
}

function hSeparatorWithWidth(w) {
    return (
        <View style={{width: w}} />
    );
}

function fontWithSize(size) {
    return {
        fontSize: size,
    };
}

export default Theme = {
    backgroundColor: '#FFFFFF',
    colorPrimary: '#4883ff',
    colorSub:'#ff9600',
    fontColorDisable:'#ccc',
    fontColorBlack: '#3f3f3f',
    fontColorWhite: '#fff',
    fontColorGray: '#808080',
    borderColor: '#e8e8e8',
    pageBackground: '#f6f6f6',
    orangeColor:'#fc9d40',
    pagePadding: 15,
    borderRadius: 2,
    itemMargin: 10,
    flex: {
        flex: 1,
    },
    fontBlack: {
        color: '#3f3f3f'
    },
    fontGray: {
        color: '#808080',
        backgroundColor: 'transparent'
    },
    fontOrange: {
        color: '#fc9d40'
    },
    fontWhite: {
        color: '#ffffff',
        backgroundColor: 'transparent'
    },
    fontColorPrimary: {
        color: '#dc3c38',
        backgroundColor: 'transparent'
    },
    font10: {
        fontSize: 10
    },
    font12: {
        fontSize: 12
    },
    font13: {
        fontSize: 13
    },
    font14: {
        fontSize: 14
    },
    font15: {
        fontSize: 15
    },
    font16: {
        fontSize: 16
    },
    font18: {
        fontSize: 18
    },
    font20: {
        fontSize: 20
    },
    font22: {
        fontSize: 22
    },
    font24: {
        fontSize: 24
    },
    pl10: {
        paddingLeft: 10
    },
    ml10: {
        marginLeft: 10
    },
    mt10: {
        marginTop: 10
    },
    mb10: {
        marginBottom: 10
    },
    mt15: {
        marginTop: 15
    },
    mt5: {
        marginTop: 5
    },
    itemInterval: {
        marginTop: 10
    },
    textLineThrough: {
        textDecorationLine: 'line-through'
    },
    buttonOrange: {
        backgroundColor: '#fc9d40',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    whiteBlockWithPadding: {
        backgroundColor: '#ffffff',
        paddingLeft: 15,
        paddingRight: 15
    },
    row: {
        flexDirection: 'row'
    },
    bottomBorder: {
        borderBottomWidth: 1,
        borderColor: '#e8e8e8'
    },
    alignItemsCenter:{
        alignItems:'center'
    },
    justifyContentCenter:{
        justifyContent:'center'
    },
    textAlignCenter:{
        textAlignCenter:'center'
    },
    lineSeperator: {
        height: 1,
        backgroundColor: 'rgb(244,244,244)'
    },
    vSeparatorWithHeight: vSeparatorWithHeight,
    hSeparatorWithWidth: hSeparatorWithWidth,
    fontWithSize,
};