/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';

import {name as appName} from './app.json';
import MainApp from './screens/MainApp';

AppRegistry.registerComponent(appName, () => MainApp);
