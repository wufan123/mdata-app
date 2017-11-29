import { StackNavigator } from 'react-navigation';
import Main from "./pages/main";
import NationwideDetail from "./pages/cinema/nationwideDetail";

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
    }
});
export default RootNavigator;