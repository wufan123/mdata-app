import { StackNavigator } from 'react-navigation';
import Main from "./pages/main";
import NationwideDetail from "./pages/cinema/nationwideDetail";
import Cinema from "./pages/cinema/cinemaIndex";
import DatePickerPage from "./pages/common/datePickerPage";

const RootNavigator = StackNavigator({
    Main:{
        screen:Main,
        navigationOptions: {
            headerTitle: 'Main',
            display:'none'
        }
    },
    NationwideDetail:{
      screen:NationwideDetail,
    },
    Cinema:{
        screen:Cinema
    },
    DatePickerPage:{
      screen:DatePickerPage
    }

});
export default RootNavigator;