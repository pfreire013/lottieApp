import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './screens/Home';
import Welcome from './screens/Welcome';

const Routes = createStackNavigator({
  Welcome: {screen: Welcome},
  Home: {screen: Home},
});

export default createAppContainer(Routes);
