import React from 'react'
import {Button, Image, StyleSheet, Text, View} from "react-native";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import Theme from "../../style/index";
import { NavigationActions } from 'react-navigation'

LocaleConfig.locales['fr'] = {
    monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    monthNamesShort: ['1月', '2月 ', '3月', '4月', '5月', '6月', '7月 ', '8月', '9月', '10月', '11月', '12月'],
    dayNames: ['一', '二', '三', '四', '五', '六', '日'],
    dayNamesShort: ['一', '二', '三', '四', '五', '六', '日']
};
LocaleConfig.defaultLocale = 'fr';
export  default  class DatePickerPage extends React.Component {

    static navigationOptions = {
        title: '日期选择',
    };
    PICKER_MODE: { SINGLE_DATE: 0, WEEK_DATE: 1, MONTH_DATE: 2 };

    constructor(props) {
        super(props);
        this.state = {mode: 0};
    }

    _onDayPress(day) {
        console.log(day)
        const backAction = NavigationActions.back({
            key: 'Profile'
        })
        global.navigation.dispatch(backAction)
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <CalendarList
                    // Callback which gets executed when visible months change in scroll view. Default = undefined
                    onVisibleMonthsChange={(months) => {
                        console.log('now these months are visible', months);
                    }}
                    // Max amount of months allowed to scroll to the past. Default = 50
                    pastScrollRange={50}
                    // Max amount of months allowed to scroll to the future. Default = 50
                    futureScrollRange={50}
                    // Enable or disable scrolling of calendar list
                    scrollEnabled={true}
                    // Enable or disable vertical scroll indicator. Default = false
                    showScrollIndicator={true}
                    onDayPress={(day) => {
                        this._onDayPress(day)
                    }}
                    theme={{
                        // backgroundColor: '#ffffff',
                        // calendarBackground: '#ffffff',
                        textSectionTitleColor: Theme.fontColorBlack,
                        // selectedDayBackgroundColor: '#00adf5',
                        // selectedDayTextColor: '#ffffff',
                        todayTextColor: Theme.colorPrimary,
                        dayTextColor: Theme.fontColorBlack,
                        // textDisabledColor: '#d9e1e8',
                        // dotColor: '#00adf5',
                        // selectedDotColor: '#ffffff',
                        // arrowColor: 'orange',
                        // monthTextColor: 'blue',
                        // textDayFontFamily: 'monospace',
                        // textMonthFontFamily: 'monospace',
                        // textDayHeaderFontFamily: 'monospace',
                        // textDayFontSize: 16,
                        // textMonthFontSize: 16,
                        // textDayHeaderFontSize: 16
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({});