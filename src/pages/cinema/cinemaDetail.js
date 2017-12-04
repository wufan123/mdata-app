import React from 'react'
import {Button, Image, StyleSheet, Text, View} from "react-native";
import {RefreshScrollView} from "../component/pull/index";
import Card from "../component/card";
import TextButton from "../component/textButton";
import Echarts from 'native-echarts';
export  default  class CinemaDetail extends React.Component {
    static navigationOptions = {
        title: '影院总计',
    }

    constructor(props) {
        super(props);
    }

    render() {
        const option1 = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'right',
                data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1548, name:'搜索引擎'}
                    ]
                }
            ]
        };
        const option2 = {
            title: {
                text: ''
            },
            tooltip: {},
            legend: {
                data:['票房']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };
        return (
            <View style={{flex: 1}}>
                <RefreshScrollView>
                    <View style={styles.titleBlock}>
                        <Text >影院票房</Text>
                    </View>
                    <Card >
                        <View style={styles.cardItem}>
                            <TextButton>
                                昨日票房 11月7日▾
                            </TextButton>
                            <Echarts option={option1} height={300} />
                        </View>
                    </Card>
                    <View style={styles.titleBlock}>
                        <Text >经营数据</Text>
                    </View>
                    <Card >
                        <View style={styles.cardItem}>
                            <TextButton>
                                昨日票房 11月7日▾
                            </TextButton>
                            <Echarts option={option2} height={300} />
                        </View>
                    </Card>
                </RefreshScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleBlock:{
        alignItems:'center',flex:1,marginTop:20
    },
    cardItem: {
        alignItems: 'center'
    }
});