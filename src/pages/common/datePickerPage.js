import React from 'react'
import {Image, StyleSheet, Text, View} from "react-native";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import Theme from "../../style/index";
import {NavigationActions} from 'react-navigation'
import Button from "../component/simpleButton";

LocaleConfig.locales['fr'] = {
    monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    monthNamesShort: ['1月', '2月 ', '3月', '4月', '5月', '6月', '7月 ', '8月', '9月', '10月', '11月', '12月'],
    dayNames: ['日', '一', '二', '三', '四', '五', '六'],
    dayNamesShort: ['日', '一', '二', '三', '四', '五', '六']
};
LocaleConfig.defaultLocale = 'fr';
let markStyle = {selected: true, color: Theme.colorPrimary, textColor: 'white'};
export  default  class DatePickerPage extends React.Component {

    static navigationOptions = {
        title: '日期选择',
    };

    constructor(props) {
        super(props);
        let navParams = this.props.navigation.state.params;
        this.state = {
            mode: navParams.pickerMode ? navParams.pickerMode : 'single',
            markedDates: {firstChoiceDay: '', secondChoiceDay: ''},
            startingDate: '',
            endingDate: ''
        };

    }

    _onDayPress(day) {
        switch (this.state.mode) {
            case 'period':
                this.selectPeriod(day);
                break;
            case 'single':
            default:
                this.props.navigation.goBack()
                break;
        }
    }

    selectPeriod(day) {
        let markedDates = this.state.markedDates;
        if (!markedDates.firstChoiceDay) {
            let mark = {};
            mark.firstChoiceDay = day.dateString;
            mark[day.dateString] = {startingDay: true, endingDay: true, ...markStyle};
            this.setState({markedDates: mark, startingDate: day.dateString,endingDate:''});
        }
        else {
            let mark = {};
            let date1 = new Date(markedDates.firstChoiceDay);
            let date2 = new Date(day.dateString);
            let startingDate, endingDate;
            if (date2.getTime() < date1.getTime()) {
                startingDate = day.dateString;
                endingDate = markedDates.firstChoiceDay;
                mark = this.dateDif(mark, date2, date1);
                mark[day.dateString] = {startingDay: true, ...markStyle};
                mark[markedDates.firstChoiceDay] = {endingDay: true, ...markStyle};
            }
            else if (date2.getTime() > date1.getTime()) {
                startingDate = markedDates.firstChoiceDay;
                endingDate = day.dateString;
                mark = this.dateDif(mark, date1, date2);
                mark[markedDates.firstChoiceDay] = {startingDay: true, ...markStyle};
                mark[day.dateString] = {endingDay: true, ...markStyle};
            }
            this.setState({markedDates: mark, startingDate: startingDate, endingDate: endingDate});
        }

    }

    dateDif(mark, startTime, endTime) {
        while ((endTime.getTime() - startTime.getTime()) >= 0) {
            let year = startTime.getFullYear();
            let month = (startTime.getMonth().toString().length === 1 ? "0" + startTime.getMonth().toString() : startTime.getMonth()) + 1;
            let day = startTime.getDate().toString().length === 1 ? "0" + startTime.getDate() : startTime.getDate();
            mark[year + "-" + month + "-" + day] = markStyle;
            startTime.setDate(startTime.getDate() + 1);
        }
        return mark;
    }


    render() {
        return (
            <View style={{flex: 1,backgroundColor:'blue'}}>
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
                    markedDates={
                        this.state.markedDates}
                    markingType={'period'}
                    theme={{
                        // backgroundColor: '#4445df',
                        // calendarBackground: 'blue',
                        textSectionTitleColor: Theme.fontColorBlack,
                        // selectedDayBackgroundColor: '#00adf5',
                        selectedDayTextColor: Theme.fontColorBlack,
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
                {this.state.mode==="period"?(<View style={styles.pickerBottom}>
                    <View>
                        <Text>
                            开始时间：{this.state.startingDate}
                        </Text>
                        <Text>
                            结束时间：{this.state.endingDate}
                        </Text>
                    </View>
                    <View style={{flex: 1}}/>
                    <Button style={styles.confirmBtn} onPress={() => {
                        this._onConfirmClick()
                    }}>
                        确定
                    </Button>
                </View>):null}

            </View>
        );
    }

    _onConfirmClick() {
        console.log("-----","click")
        this.props.navigation.goBack();
    }
}

const styles = StyleSheet.create({
    pickerBottom: {
        height: 65,
        backgroundColor: '#fff',
        borderTopColor: Theme.borderColor,
        borderTopWidth: 2,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    confirmBtn: {}
});