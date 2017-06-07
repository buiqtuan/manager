import { AppRegistry, UIManager } from 'react-native';
import App from './src/android/app';

UIManager.setLayoutAnimationEnabledExperimental(true);
AppRegistry.registerComponent('manager', () => App);
