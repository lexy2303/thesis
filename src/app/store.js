import { createStore } from 'redux';
import favoritesReducer from '../redux/reducer';

const store = createStore(favoritesReducer);

export default store;
