/**
 * Created by guzhenfu on 17/5/9.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    ScrollView,
    Text,
    ActivityIndicator,
    View,
    Dimensions,
    TouchableHighlight,
    StyleSheet,
    NetInfo,
    FlatList,
    RefreshControl,
    Platform,
    Animated,
    Easing,
} from 'react-native';
import ReactNativeHapTic from 'react-native-haptic';

import Pullable from './Pullable';

var theme = require('../../../style');

const LoadingState = 1;    //初始loading页面
const EmptyState = 2;    //空页面
const ErrorState = 3;    //加载数据错误
const ListState = 4;    //正常加载
const MoreState = 5;    //正在加载更多
const NoMoreState = 6;    //没有更多了
const NoMoreErrorState = 7;    //加载更多出错
const NOState = 8;//正常状态

export const STATE_NO_MORE = 0;
export const STATE_LOADING = 1;
export const STATE_NORMAL = 2;

const { width, height } = Dimensions.get('window');
const MINI_PULL_DISTANCE = -110;
const HANGING_DISTANCE = -90;

var haptic = ReactNativeHapTic;

export default class RefreshScrollView extends Pullable {

    static defaultProps = {
        footerViewState: STATE_NORMAL,
        showFooterView: true,
    }

    constructor(props) {
        super(props);
        this.getMetrics = this.getMetrics.bind(this);
        // this.scrollToOffset = this.scrollToOffset.bind(this);
        this.scrollToEnd = this.scrollToEnd.bind(this);
        this.currentState = NoMoreState;
        this.preDistanceFromEnd = height;
        this.state.headerViewState = STATE_NORMAL;
        this.freshState = false;
        this.state.scrollOffsetY = 0;
        this.state.readyToRefresh = false;
        this.state.topIndicatorHeight = -HANGING_DISTANCE;
    }

    onLayout = (e) => {
        if (Platform.OS !== 'ios')
            super.onLayout(e);
        this.height = e.nativeEvent.layout.height;
    }

    getMetrics(args) {
        this.scroll.getMetrics(args);
    }

    // scrollToOffset(...args) {
    //     this.scroll.scrollToOffset(...args);
    // }

    scrollToEnd(args) {
        this.scroll.scrollToEnd(args);
    }

    /**
     * 对外提供API,设置列表数据
     */
    setData(_data) {
        if (_data.length == 0) {
            this.currentState = EmptyState;
        } else {
            this.currentState = ListState;
        }
        this.setState({
            data: _data,
        })
    }

    /**
     * 对外提供API, loadMore 调用
     */
    addData(_data) {
        if (_data.length == 0) {
            this.currentState = NoMoreState;

        } else {
            this.currentState = MoreState;
        }
        this.setState({
            data: this.state.data.concat(_data),
        })
    }

    /**
     * 对外提供API, 加载数据出错
     */
    setError() {
        if (this.state.data == null || this.state.data.length == 0) {
            this.currentState = ErrorState;
        } else {
            this.currentState = NoMoreErrorState;
        };
        this.forceUpdate();
    }

    /**
     * 对外提供API, 出错重新加载数据
     */
    reloadData() {
        this.currentState = LoadingState;
        this.props.onPullRelease(this.resolveHandler);
        this.forceUpdate();
    }

    /**
     * 对外提供API, 加载更多
     */
    resumeMoreDataFromError() {
        this.currentState = MoreState;
        this.props.onEndReached();
    }

    /**
     * 加载loading页面
     * @returns {XML}
     * @private
     */
    _renderLoading() {
        return (
            <View
                style={styles.contain}>
                <ActivityIndicator animating size="large" />
            </View>
        );
    }

    /**
     * 加载 空页面
     */
    _renderEmpty() {
        return (
            <View style={styles.contain}>
                <TouchableHighlight
                    underlayColor="rgba(34, 26, 38, 0.1)"
                    onPress={() => this.reloadData()}>
                    <Text>数据为空, 点击重新加载</Text>
                </TouchableHighlight>
            </View>
        )
    }

    /**
     * 加载 出错页
     */
    _renderError() {
        return (
            <View style={styles.contain}>
                <TouchableHighlight
                    underlayColor="rgba(34, 26, 38, 0.1)"
                    onPress={() => this.reloadData()}>
                    <Text>网络错误, 点击重新加载</Text>
                </TouchableHighlight>
            </View>

        )
    }

    _onEndReached = ({ distanceFromEnd }) => {
        if (this.preDistanceFromEnd == height) {
            this.preDistanceFromEnd = distanceFromEnd;
            return;
        }
        // 判断手势是向上还是向下，向下return掉
        if ((distanceFromEnd - this.preDistanceFromEnd) > 0) {
            this.preDistanceFromEnd = distanceFromEnd;
            return;
        }
        this.preDistanceFromEnd = distanceFromEnd;
        // 距离底部大于this.height/3不刷新
        if (distanceFromEnd > (this.height / 3))
            return;
        if (!this.props.loadMore)
            return;
        if (this.props.footerViewState == STATE_NORMAL)
            this.props.loadMore();
        else {
            return;
        }
    }
    _defaultFooterView = () => {
        if (!this.props.showFooterView)
            return null
        if (this.props.footerViewState == STATE_NO_MORE) {
            return (
                <View style={[theme.alignItemsCenter, theme.justifyContentCenter, { height: 40 }]}>
                    <Text style={[theme.fontGray, theme.font12]}>没有更多了</Text>
                </View>
            )
        }
        if (this.props.footerViewState == STATE_LOADING) {
            return (
                <View
                    style={[styles.contain, { backgroundColor: 'transparent', paddingVertical: 15 }]}
                >
                    <ActivityIndicator animating size="small" />
                </View>
            )
        }
        return null
    }

    renderHeader = () => {
        return (
            <View
                style={[{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', paddingVertical: 20 }]}
            >
                <ActivityIndicator animating size="small" />
            </View>
        );
    }

    onPullRelease = () => {
        if (!this.props.onPullRelease)
            return;
        this.setState({
            headerViewState: STATE_LOADING,
        }, () => {
            this.props.onPullRelease(() => {
                this.setState({
                    headerViewState: STATE_NORMAL
                })
            })
        })
    }

    getMiniPullDistance = () => {
        return (this.getHangingDistance() + 15);
    }

    getHangingDistance = () => {
        return (this.state.topIndicatorHeight + 15);
    }

    iosOnScroll = (e) => {
        // console.log('offset y', e.nativeEvent.contentOffset.y);
        this.state.scrollOffsetY = e.nativeEvent.contentOffset.y
        if (e.nativeEvent.contentOffset.y < -this.getMiniPullDistance()) {
            if (!this.state.readyToRefresh && this.state.headerViewState == STATE_NORMAL) {
                this.setState({
                    readyToRefresh: true,
                });
                Animated.timing(this.state.prArrowDeg, {
                    toValue: 1,
                    duration: 100,
                    easing: Easing.inOut(Easing.quad)
                }).start();
                haptic.generate('impact');
            }
        } else {
            if (this.state.readyToRefresh && this.state.headerViewState == STATE_NORMAL) {
                this.setState({
                    readyToRefresh: false,
                });
                Animated.timing(this.state.prArrowDeg, {
                    toValue: 0,
                    duration: 100,
                    easing: Easing.inOut(Easing.quad)
                }).start();
            }
        }
        var distanceFromEnd = this.scrollContentHeight - this.state.scrollOffsetY - this.height;
        if (distanceFromEnd < this.height / 3) this._onEndReached({ distanceFromEnd })
    }

    handleRelease = (e) => {
        if (this.state.scrollOffsetY < -this.getMiniPullDistance()) {
            if (!this.props.onPullRelease) return
            this.scroll.scrollTo({ x: 0, y: -this.getHangingDistance() });
            if (this.state.headerViewState == STATE_LOADING) return
            this.setState({
                headerViewState: STATE_LOADING
            }, () => {
    
                this.props.onPullRelease(() => {
                    if (this.state.scrollOffsetY <= 0 && this.scroll)
                        this.scroll.scrollTo({ x: 0, y: 0 });
                    this.setState({
                        headerViewState: STATE_NORMAL
                    })
                })
            })
        }
    }

    onContentSizeChange = (width, height) => {
        this.scrollContentHeight = height;
    }

    /**
     * 加载列表数据
     * @returns {XML}
     * @private
     */
    _renderIOSList = () => {
        return (
            <ScrollView ref={(c) => { this.scroll = c; }}
                onScroll={this.iosOnScroll}
                onContentSizeChange={this.onContentSizeChange}
                scrollEnabled={true}
                onResponderRelease={this.handleRelease}
                scrollEventThrottle={10}
            >
                {this.renderCustomIndicator()}
                {this.props.children}
                {this._defaultFooterView()}
            </ScrollView>
        );
    }

    onScroll = (e) => {
        super.onScroll(e);
        this.state.scrollOffsetY = e.nativeEvent.contentOffset.y
        var distanceFromEnd = this.scrollContentHeight - this.state.scrollOffsetY - this.height;
        if (distanceFromEnd < this.height / 3) this._onEndReached({ distanceFromEnd })
    }

    /**
     * 加载列表数据
     * @returns {XML}
     * @private
     */
    _renderList() {
        return (
            <ScrollView ref={(c) => { this.scroll = c; }}
                onScroll={this.onScroll}
                onContentSizeChange={this.onContentSizeChange}
                scrollEnabled={this.state.scrollEnabled}
                scrollEventThrottle={10}
            >
                {this.props.children}
                {this._defaultFooterView()}
            </ScrollView>
        );
    }

    /**
     * 加载更多 UI渲染
     * @returns {XML}
     * @private
     */
    _renderFoot() {
        if (this.currentState === NoMoreState) {
            return this.props.renderNoMore || (
                <View
                    style={styles.footer}>
                    <Text>没有更多了</Text>
                </View>
            );
        } else if (this.currentState === NoMoreErrorState) {
            return this.props.renderMoreError || (
                <TouchableHighlight
                    style={styles.footer}
                    underlayColor="rgba(34, 26, 38, 0.1)"
                    onPress={() => { this.resumeMoreDataFromError() }}>
                    <Text>网络错误, 点击重新加载</Text>
                </TouchableHighlight>
            )
        } else if (this.currentState >= ListState) {
            return this.props.renderMore || (
                <View
                    style={styles.footer}>
                    <Text>正在加载</Text>
                </View>
            );
        } else {
            return null;
        }
    }

    /**
     * 类似 render() 方法,具体在父类里面
     * @returns {*}
     */
    getScrollable = () => {
        if (this.currentState === LoadingState) {
            return this.props.renderLoading || this._renderLoading();
        } else if (this.currentState === EmptyState) {
            return this.props.renderEmpty || this._renderEmpty();
        } else if (this.currentState === ErrorState) {
            return this.props.renderError || this._renderError();
        } else {
            return this._renderList()
        }
    }

    onTopIndicatorLayout = (e) => {
        this.state.topIndicatorHeight = e.nativeEvent.layout.height;
        this.setState({
            topIndicatorHeight: e.nativeEvent.layout.height,
        });
    }

    renderCustomIndicator = () => {
        this.transform = [{
            rotate: this.state.prArrowDeg.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '-180deg']
            })
        }];
        var viewHeight = this.state.scrollOffsetY <= 0 ? this.state.scrollOffsetY : 0;
        var tipText;
        var indicatorImg;
        if (this.state.scrollOffsetY < -this.getMiniPullDistance()) {
            tipText = <Text>释放立即刷新</Text>;
            indicatorImg = (
                <Animated.Image
                    style={[styles.arrow, { transform: this.transform }]}
                    source={{ uri: this.base64Icon }}
                    resizeMode={'contain'}
                />
            );
        }
        else {
            tipText = <Text>下拉可以刷新</Text>;
            indicatorImg = (
                <Animated.Image
                    style={[styles.arrow, { transform: this.transform }]}
                    source={{ uri: this.base64Icon }}
                    resizeMode={'contain'}
                />
            );
        }
        if (this.state.headerViewState == STATE_LOADING) {
            tipText = null;
            indicatorImg = this.renderHeader();
        }
        return (
            <View style={{ position: 'absolute', top: -this.getHangingDistance(), left: 0, right: 0, alignItems: 'center' }}
                onLayout={this.onTopIndicatorLayout}
            >
                {indicatorImg}
                {tipText}
            </View>
        )
    }

    render() {
        if (Platform.OS == 'ios') {
            return (
                <View style={[{ flex: 1, zIndex: -1 }, this.props.style]} onLayout={this.onLayout}>
                    {this._renderIOSList()}
                </View>
            );
        } else {
            return super.render();
        }
    }


}

RefreshScrollView.propTypes = {
    ...View.propTypes,
    onPullRelease: PropTypes.func,
    loadMore: PropTypes.func,
    showFooterView: PropTypes.bool,
    footerViewState: PropTypes.oneOf([STATE_NO_MORE, STATE_LOADING, STATE_NORMAL]),
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    footer: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderColor: "#CED0CE"
    },
    arrow: {
        width: 30,
        height: 30,
        marginVertical: 10,
    }
});