import { createStore } from 'redux';
import reducer from '../redux/reducer.js';
const store = createStore(reducer);

export default store;
