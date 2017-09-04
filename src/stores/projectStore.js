import { applyMiddleware, createStore } from 'redux';
import projectReducer from '../reducers/projectReducer';

const logger = (store) => (next) => (action) => {
    console.log('Action fired', action);
    next(action);
};

const error = (store) => (next) => (action) => {
    try {
        next(action);
    } catch (e) {
        console.log('Exception', e);
    }
};

const projectStore = createStore(projectReducer, applyMiddleware(logger, error));

projectStore.subscribe(() => {
    console.log("Store changed", projectStore.getState());
});

export default projectStore;