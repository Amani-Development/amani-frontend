import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from 'store/reducers';
import rootSaga from 'store/sagas';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// Compose Enhancers for Redux DevTools
export const composeEnhancers =
    (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// Create Store with Persisted Reducer
const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
);

// Run Sagas
sagaMiddleware.run(rootSaga);

// Create Persistor
export const persistor = persistStore(store);

export default store;
