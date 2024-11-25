/**
 * @format
 */

import {registerRootComponent} from 'expo';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as teaPoteFront} from './app.json';

AppRegistry.registerComponent(teaPoteFront, () => App);

registerRootComponent(App);
