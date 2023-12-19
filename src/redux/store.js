import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer} from './contactsSlice';
import {filterReducer } from './filterSlice';
// import { persistStore, persistReducer } from 'redux-persist';
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage' ;

// export const reducer = combineReducers({
//   contacts: contactsReducer,
//     filter: filterReducer,
// })
// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['contacts'],
// }

// const persistedReducer = persistReducer(persistConfig, reducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// })
// export const persistor = persistStore(store);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});


