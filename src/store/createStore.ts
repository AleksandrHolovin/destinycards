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
import rootReducer from './slices/Root.reducer'

export const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['token', 'avatar', 'user', 'order'],
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const createDebugger = require('redux-flipper').default;

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
            }).concat(createDebugger()),
        ],
    });

    const persistor = persistStore(store);

    return { store, persistor };
};

export default createStore;
