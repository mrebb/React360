import {AppRegistry} from 'react-360';
import TopPosts from './TopPosts';
import CurrentPost from './CurrentPost';
import ModelView from './ModelView';
import TopView from './TopView'
import * as Store from './Store';
import { API_KEY } from 'react-native-dotenv'

Store.initialize(API_KEY);

AppRegistry.registerComponent('TopPosts', () => TopPosts);
AppRegistry.registerComponent('CurrentPost', () => CurrentPost);
AppRegistry.registerComponent('ModelView', () => ModelView);
AppRegistry.registerComponent('TopView', () => TopView);