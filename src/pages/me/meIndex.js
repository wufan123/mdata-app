import React from 'react'
import { Button, Image, StyleSheet, View, SafeAreaView, ImageBackground, Text } from "react-native";
import Card from '../component/card';
import { RefreshScrollView, PagingRefreshScrollView } from '../component/pull';
export default class Me extends React.Component {
    static navigationOptions = {
        tabBarLabel: '我的',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../assets/me.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        )
    };

    render() {
        return (
            <View style={{ flex: 1, }}>
                <ImageBackground style={{ flex: 1, }} source={{ uri: 'https://h5tq.moji.com/tianqi/assets/images/skin/day_1.jpg' }}>
                    <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                        <PagingRefreshScrollView
                            headView={() => {
                                return (
                                    <Card style={{ height: 250 }} />
                                )
                            }}>
                            <View>
                                <View style={{ alignSelf: 'center' }}>
                                    <Text>我的影院</Text>
                                    <View style={{ alignSelf: 'center', height: 3, width: 44, backgroundColor: '#C2C2C2', marginTop: 3 }} />
                                </View>
                                <View style={{ position: 'absolute', top: 0, right: 20, }}><Text>管理影院</Text></View>
                            </View>
                            {
                                Array(10).fill().map((e, i) => {
                                    return (
                                        <Card key={i} style={{ height: 150 }}>
                                        </Card>
                                    )
                                })
                            }
                        </PagingRefreshScrollView>
                    </SafeAreaView>
                </ImageBackground>
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