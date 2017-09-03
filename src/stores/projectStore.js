import { createStore } from 'redux';
import projectReducer from '../reducers/projectReducer';

const projectStore = createStore(projectReducer);

projectStore.subscribe(() => {
    console.log("Store changed", projectStore.getState());
});

export default projectStore;