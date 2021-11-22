import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import rootReducer from './slices/root.reducer'

export const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['token', 'avatar', 'user', 'order'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const createStore = () => {

    const store = configureStore({
        reducer: persistedReducer,
        middleware: [
            ...getDefaultMiddleware({
                thunk: false,
                serializableCheck: {
                    ignoredActions: [
                        FLUSH,
                        REHYDRATE,
                        PAUSE,
                        PERSIST,
                        PURGE,
                        REGISTER,
                    ],
                },
            }),
        ],
    });

    const persistor = persistStore(store);

    return { store, persistor };
};

export default createStore;
