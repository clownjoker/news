import 'react-native-gesture-handler';

import {AppRegistry,I18nManager} from 'react-native';
import App from './src/App';
I18nManager.allowRTL=false;
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
