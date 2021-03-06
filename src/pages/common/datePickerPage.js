import React from 'react'
import {Image, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
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
        console.log('---------');
        let navParams = this.props.navigation.state.params;
        this.state = {
            mode: navParams.pickerMode ? navParams.pickerMode : 'single',
            markedDates: {firstChoiceDay: '', secondChoiceDay: '','2017-12-04':'start-end'},
            startingDate: '',
            endingDate: ''
        };

    }

   /* _onDayPress(day) {
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
            this.setState({markedDates: mark, startingDate: day.dateString, endingDate: ''});
        }
        else {
            let mark = {};
            let date1 = new Date(markedDates.firstChoiceDay);
            let date2 = new Date(day.dateString);
            let startingDate, endingDate;
            if (date2.getTime() < date1.getTime()) {
                startingDate = day.dateString;
                endingDate = markedDates.firstChoiceDay;
                mark = this.getDifDates(mark, date2, date1);
                mark[day.dateString] = {startingDay: true, ...markStyle};
                mark[markedDates.firstChoiceDay] = {endingDay: true, ...markStyle};
            }
            else if (date2.getTime() > date1.getTime()) {
                startingDate = markedDates.firstChoiceDay;
                endingDate = day.dateString;
                mark = this.getDifDates(mark, date1, date2);
                mark[markedDates.firstChoiceDay] = {startingDay: true, ...markStyle};
                mark[day.dateString] = {endingDay: true, ...markStyle};
            }
            this.setState({markedDates: mark, startingDate: startingDate, endingDate: endingDate});
        }
        console.log(this.state.markedDates)

    }*/

    getDifDates(mark, startTime, endTime) {
        while ((endTime.getTime() - startTime.getTime()) >= 0) {
            let year = startTime.getFullYear();
            let month = (startTime.getMonth() < 9 ? "0" + (startTime.getMonth() + 1).toString() : startTime.getMonth() + 1);
            let day = startTime.getDate().toString().length === 1 ? "0" + startTime.getDate() : startTime.getDate();
            // mark[year + "-" + month + "-" + day] = markStyle;
            mark[year + "-" + month + "-" + day] = {markedStatus:'middle'};
            startTime.setDate(startTime.getDate() + 1);
        }
        return mark;
    }


    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'blue'}}>
                <CalendarList
                    // Callback which gets executed when visible months change in scroll view. Default = undefined
                    // onVisibleMonthsChange={(months) => {
                    // }}
                    // Max amount of months allowed to scroll to the past. Default = 50
                    pastScrollRange={50}
                    // Max amount of months allowed to scroll to the future. Default = 50
                    futureScrollRange={50}
                    // Enable or disable scrolling of calendar list
                    scrollEnabled={true}
                    // Enable or disable vertical scroll indicator. Default = false
                    showScrollIndicator={true}
                    // onDayPress={(day) => {
                    //     this._onDayPress(day)
                    // }}
                    dayComponent={(dayDetail) => {
                        return this.getCustomDayComponent(dayDetail);
                    }}
                    markedDates={this.state.markedDates}
                    markingType={'period'}
                    maxDate={new Date().format("yyyy-MM-dd")}
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
                {this.state.mode === "period" ? (<View style={styles.pickerBottom}>
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
                </View>) : null}

            </View>
        );
    }

    _onConfirmClick() {
        this.props.navigation.goBack();
    }

    _onCustomDayPress(date) {
        let markedDates = this.state.markedDates;
        if (!markedDates.firstChoiceDay) {
            let mark = {};
            mark.firstChoiceDay = date.dateString;
            mark[date.dateString] = {markedStatus: 'start-end'};
            this.setState({markedDates: mark, startingDate: date.dateString, endingDate: ''});
            console.log(mark)
        }
        else {
            let mark = {};
            let date1 = new Date(markedDates.firstChoiceDay);
            let date2 = new Date(date.dateString);
            let startingDate, endingDate;
            if (date2.getTime() < date1.getTime()) {
                startingDate = date.dateString;
                endingDate = markedDates.firstChoiceDay;
                mark = this.getDifDates(mark, date2, date1);
                mark[date.dateString] = {markedStatus: 'start'};
                mark[markedDates.firstChoiceDay] = {markedStatus: 'end'};
            }
            else if (date2.getTime() > date1.getTime()) {
                startingDate = markedDates.firstChoiceDay;
                endingDate = date.dateString;
                mark = this.getDifDates(mark, date1, date2);
                mark[markedDates.firstChoiceDay] = {markedStatus: 'start'};
                mark[date.dateString] = {markedStatus: 'end'};
            }
            this.setState({markedDates: mark, startingDate: startingDate, endingDate: endingDate});
            console.log(mark)
        }


    }

    getDayExtraInfo() {
        return '情人节'
    }

    getDayTxtColor(state) {
        switch (state) {
            case 'disabled':
                return {
                    color: Theme.fontColorDisable
                };
            case 'start':
            case 'end':
            case 'middle':
            case 'start-end':
                return {
                    color: 'white'
                };
            case 'today':
             return{
             color:Theme.colorPrimary
             };
            default:
                return {
                    color: Theme.fontColorBlack
                };
        }

    }

    getCustomDayComponent({state, date}) {

        return (
            <TouchableWithoutFeedback onPress={() => {
                if (!(state === 'disabled')) {
                    this._onCustomDayPress(date)
                }
            }}>
                {
                    this.getDayView(date, state)

                }
            </TouchableWithoutFeedback>
        );
    }

    getMarkedStatus(date) {
        let mDates = this.state.markedDates;
        // console.log("mDates",mDates);
        for (let prop in mDates) {
            if (date.dateString === prop) {
                console.log(mDates[prop].markedStatus);
                return mDates[prop].markedStatus
            }
        }
        return undefined;
    }

    getDayView(date, state) {
        let newSate = this.getMarkedStatus(date);
        if(newSate)
            state =newSate;
        // state ="start-end";
        // console.log(date.dateString,state);
        let markedStyle = {};
        if (state)
        {
            markedStyle ={backgroundColor: Theme.colorPrimary,alignItems: 'center'};
            switch (state) {
                case 'start':
                    markedStyle = {
                        borderTopLeftRadius: 25,
                        borderBottomLeftRadius: 25
                        , ...markedStyle
                    };
                    break;
                case 'middle':
                    break;
                case 'end':
                    markedStyle = {
                        borderTopRightRadius: 25,
                        borderBottomRightRadius: 25,
                        ...markedStyle
                    };
                    break;
                case 'start-end':
                    markedStyle = {
                        borderRadius: 25,
                        ...markedStyle
                    };
                    break;
                default:
                    markedStyle = {backgroundColor: 'white'};
                    break
            }
        }
        return (
            <View style={[styles.dayBlock,markedStyle]}><Text style={this.getDayTxtColor(state)}>{date.day}</Text>
                <Text
                    style={[Theme.font10, this.getDayTxtColor(state)]}>{this.getDayExtraInfo(date)}</Text>
            </View>
            )
       // return (<View style={{flex: 1}}><Text style={{textAlign: 'center', color: state === 'disabled' ? 'gray' : 'black'}}>{date.day}</Text></View>)

    }
}
const styles = StyleSheet.create({
    dayBlock: {
        flex: 1,
        alignItems: 'center'
    },
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