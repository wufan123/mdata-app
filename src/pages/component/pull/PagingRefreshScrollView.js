import React from 'react'
import { View } from 'react-native'
import RefreshScrollView from './RefreshScrollView'
import PropTypes from 'prop-types';

export default class PagingRefreshScrollView extends React.Component {

    offset = 0

    onScrollEndDrag(e) {
        var offsetY = e.nativeEvent.contentOffset.y
        var direction = (this.offset > offsetY) ? 'up' : 'down'
        this.offset = offsetY
        if ((offsetY - this.bottomViewY) < 150 && (offsetY > this.bottomViewY)) {
            this.refreshScrollView.scrollTo(this.bottomViewY, 0)
        }
        if (direction == 'up' && offsetY < this.bottomViewY && offsetY > 0) {
            this.refreshScrollView.scrollTo(0, 0)
            this.offset = 0
        }
    }

    bodyViewOnLayout(e) {
        this.bottomViewY = e.nativeEvent.layout.y
        console.log(this.bottomViewY)
    }

    render() {
        return (
            <RefreshScrollView
                ref={(c) => { this.refreshScrollView = c }}
                style={{ flex: 1 }}
                onScrollEndDrag={this.onScrollEndDrag.bind(this)}
                {...this.props}
                >
                {this.props.headView && this.props.headView()}
                <View onLayout={this.bodyViewOnLayout.bind(this)}>
                    {this.props.children}
                </View>
            </RefreshScrollView>
        )
    }
}

PagingRefreshScrollView.propTypes = {
    ...RefreshScrollView.propTypes,
    headView: PropTypes.func
}