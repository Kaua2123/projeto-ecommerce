import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'projeto-ecommerce',
      storage,
      whitelist: ['cart'],
    },
    reducers,
  );

  return persistedReducers;
};
