import React from 'react'
import {Button, Image, StyleSheet, Text, View} from "react-native";
import {RefreshScrollView} from '../component/pull'
import Card from "../component/card";
import Theme from '../../style'
import BgCard from "../component/bgCard";
import PropTypes from 'prop-types';

export  default  class NationWide extends React.Component {
    static navigationOptions = {
        tabBarLabel: '全国',
    };

    constructor(props) {
        super(props)
    }

    _onClickCard(arg) {
        console.log("--------", this.props.navigation)
        global.navigation.navigate('NationwideDetail');
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <RefreshScrollView
                >
                    <CinemaCard colors={['#6098ef', '#5876e9']}>
                        {'昨日票房 2017年11月7日'}
                        {'7017.86'}
                        {'每日0点更新票房'}
                    </CinemaCard>
                    <View style={{flex: 1, alignItems: 'center',marginTop:28}}>
                        <Text style={styles.subTitle}>
                            福州昨日 TOP 3 影院
                        </Text>
                        <View style={{marginTop: 10, height: 3, width: 40, backgroundColor: Theme.colorPrimary}}/>
                    </View>
                    <CinemaCard colors={['#9b81f1', '#9273d1']} leftTag={
                        <Image style={styles.icon} source={require('../../assets/num_one.png')} resizeMode={'contain'}/>
                    }>
                        {'中瑞大地影城'}
                        {'6.86'}
                        {'观影人次 2604'}
                        {'平均票价 2604'}
                    </CinemaCard>
                    <CinemaCard colors={['#f6bb5f', '#e86679']} leftTag={
                        <Image style={styles.icon} source={require('../../assets/num_tow.png')} resizeMode={'contain'}/>
                    }>
                        {'中瑞国际影城'}
                        {'7017.86'}
                        {'观影人次 2604'}
                        {'平均票价 2604'}
                    </CinemaCard>
                    <CinemaCard colors={['#5cd0db', '#52a7ae']} leftTag={
                        <Image style={styles.icon} source={require('../../assets/num_three.png')}
                               resizeMode={'contain'}/>
                    }>
                        {'中瑞红星店'}
                        {'7017.86'}
                        {'观影人次 2604'}
                        {'平均票价 2604'}
                    </CinemaCard>
                    <Card style={{marginBottom: 35}}>
                        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={styles.bottomTxt}>查看全国TOP100影院榜</Text>
                        </View>
                    </Card>
                </RefreshScrollView>
            </View>
        );
    }
}

class CinemaCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let txts = this.props.children ? this.props.children : [];
        return (<BgCard onPress={this.props.onPress} colors={this.props.colors}>
            <View style={styles.cardItem}>
                <View style={styles.tag}>
                    {this.props.leftTag}
                </View>
                <View >
                    <Text style={styles.cardTopTxt}>
                        {txts[0]}
                    </Text>
                </View>
                <View style={styles.cardCenter}>
                    <Text style={styles.largeTxt}>
                        {txts[1]}
                    </Text>
                    <Text style={styles.unitTxt}>
                        万
                    </Text>
                </View>
                <View style={styles.cardBottom}>
                    {this.getBottomTxt()}
                </View>
            </View>
        </BgCard>)
    }

    getBottomTxt() {
        let txts = this.props.children ? this.props.children : [];
        let txtViews = []
        for (let i = 2; i < txts.length; i++) {
            txtViews.push(<Text key={i} style={styles.cardBottomTxt}>
                {txts[i]}
            </Text>)
        }
        return txtViews;
    }
}
CinemaCard.propTypes = {
    onPress: PropTypes.func,
    colors: PropTypes.array
};


const fontStyle = {
    color: Theme.fontColorWhite, fontWeight: 'bold', textAlign: 'center'
}
const styles = StyleSheet.create({
    bottomTxt: {
        color: Theme.colorPrimary,
        fontSize: 15,
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    icon: {
        width: 32,
        height: 32
    },
    cardBottom: {
        marginTop: 20,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center'
    },
    cardItem: {
        alignItems: 'center',
        padding: 20
    },
    tag: {
        position: 'absolute',
        left: 15,
        top: 13
    },
    cardTopTxt: {
        fontSize: 13,
        ...fontStyle
    },
    cardCenter: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: "center"
    },
    largeTxt: {
        fontSize: 30,
        ...fontStyle
    },
    unitTxt: {marginLeft: 10, marginTop: 10, ...fontStyle},
    cardBottomTxt: {
        fontSize: 13,
        flex: 1,
        ...fontStyle
    }

});
