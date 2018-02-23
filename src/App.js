import './utils'
import { StackNavigator } from 'react-navigation';
import Main from "./pages/main";
import NationwideDetail from "./pages/cinema/nationwideDetail";
import Cinema from "./pages/cinema/cinemaIndex";
import DatePickerPage from "./pages/common/datePickerPage";
import ForecastDetail from "./pages/cinema/forecastDetail";
import CinemaDetail from "./pages/cinema/cinemaDetail";

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
    },
    ForecastDetail:{
        screen:ForecastDetail
    },
    CinemaDetail:{
        screen:CinemaDetail
    }
});
export default RootNavigator;