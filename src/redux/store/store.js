import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import appReducers from '../reducers/rootReducers';

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, appReducers);
const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);
export { persistor, store };
