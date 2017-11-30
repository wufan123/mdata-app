import React from 'react'
import {Button, Image, StyleSheet, View} from "react-native";

export default class Film extends React.Component {
    static navigationOptions = {
        tabBarLabel: '影片',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../../assets/film.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Go back home"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});