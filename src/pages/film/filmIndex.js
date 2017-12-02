import React from 'react';
import { Button, Image, StyleSheet, View, ScrollView, SafeAreaView, Text } from "react-native";
import {TableView} from '../component/table';

export default class Film extends React.Component {
    static navigationOptions = {
        tabBarLabel: '影片',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../assets/film.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };

    ele(value) {
        return (
            <Text style={styles.listText}>hello world</Text>
        )
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ paddingHorizontal: 0, flex: 1 }}>
                    <TableView
                        style={{marginHorizontal: 20}}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    }
});