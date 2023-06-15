/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Start the store
// Import the data loader and get the loading started;
// connect the loading event to the store actions



AppRegistry.registerComponent(appName, () => App);
