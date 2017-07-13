import store from './store.js';
export default (obj) => {
  store.dispatch(obj);
};
