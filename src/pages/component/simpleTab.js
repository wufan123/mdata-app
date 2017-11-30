import React from 'react'
import {Button, Image, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import  theme from '../../style'

export  default  class simpleTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectIndex: 0};
    }

    _onChangeSelect(index) {
        console.log('---------', index)
        this.setState({selectIndex: index})
    }

    render() {
        let tabBar = [];
        let childrens = this.props.children;
        let selectIndex = this.state.selectIndex;
        for (let i = 0; i < childrens.length; i++) {
            tabBar.push(
                <TouchableWithoutFeedback  key={i} onPress={() => this._onChangeSelect(i)}>
                    <View style={styles.tabItem} >
                        <Image
                            style={styles.icon}
                            source={childrens[i].props.tabIcon}
                        />
                        <Text style={{color: i === selectIndex ? theme.colorPrimary : theme.fontColorBlack}}>
                            {childrens[i].props.tabLabel}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>)
        }
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1}}>
                    {this.props.children instanceof Array ? this.props.children[this.state.selectIndex] : this.props.children}
                </View>
                <View style={styles.tabBar}>
                    {tabBar}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabBar: {
        height: 65,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        borderTopColor:theme.borderColor,
        borderTopWidth:1

    },
    icon: {
        width: 26,
        height: 26,
    },
    tabItem: {
        flex: 1,
        alignItems: 'center'
    }
});