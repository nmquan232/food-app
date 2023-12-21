import {persistCombineReducers} from 'redux-persist'
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {persistStore, persistReducer} from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {appSlice} from "./slice/app.slice";
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist/es/constants";
import {useDispatch, useSelector} from "react-redux";
const configPersist = {
  key: 'root',
  storage: AsyncStorage,
  timeout: 100000
}

const reducers = combineReducers({
  app: appSlice.reducer
})

const persistReducers = persistReducer(configPersist, reducers)

export const store = configureStore({
  reducer: persistReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      immutableCheck: false,
    })
})

export const persistor = persistStore(store)

export const useAppDispatch = () => useDispatch()
export const useAppSelector = useSelector






