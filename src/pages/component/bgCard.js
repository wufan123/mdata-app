import React from 'react'
import {ImageBackground, StyleSheet, TouchableOpacity, View} from "react-native";
import PropTypes from 'prop-types';
import Card from "./card";
import LinearGradient from "react-native-linear-gradient";
export  default  class BgCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.75}>
                <LinearGradient
                    start={{x: 0, y: 0}} end={{x: 0.5, y: 1.0}}
                    locations={[0.5,1]}
                    colors={this.props.colors}
                    style={[styles.card,this.props.style]}
                    >
                    <ImageBackground style={{flex:1,borderRadius:10}} source={require('../../assets/card_bg.png')} resizeMode={'stretch'}>

                        {this.props.children}
                    </ImageBackground>
                </LinearGradient>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        minHeight: 50,
        marginTop: 15,
        marginHorizontal:15,
        flex: 1,
        borderRadius: 10,
    },

});
BgCard.propTypes= {
    onPress: PropTypes.func,
    colors:PropTypes.array
};