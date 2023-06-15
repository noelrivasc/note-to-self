/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ContentLoader from './src/content-loader';

ContentLoader.loadAll();

AppRegistry.registerComponent(appName, () => App);
