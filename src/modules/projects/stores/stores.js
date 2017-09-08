import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers/reducers';
import rootSaga from '../sagas/sagas';

const saga = createSagaMiddleware();
const store = createStore(
    reducers,
    applyMiddleware(saga)
);

saga.run(rootSaga);

export default store;