import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import promiseMiddleware from 'redux-promise-middleware';

import reducers from './store/reducers';
import sagas from './store/sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(promiseMiddleware(), sagaMiddleware)
    ),
);

sagaMiddleware.run(sagas);
