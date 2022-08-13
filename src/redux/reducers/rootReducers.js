import { combineReducers } from '@reduxjs/toolkit';
// import reducers
import filmReducers from './list';
import detailReducers from './details';

const appReducers = combineReducers({
  films: filmReducers,
  items: detailReducers,
});

export default appReducers;
