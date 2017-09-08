import * as constants from '../constants/constants';
import uuid from 'uuid';

const reducer = (state = { projects: [], categories: [] }, action) => {
    switch (action.type) {
        case constants.FETCH_PROJECTS: {
            return {...state, projects: [{
                id: uuid.v4(),
                title: 'Metal Gear Solid'
            }, {
                id: uuid.v4(),
                title: 'Metal Gear Solid 2 - Sons of Liberty'
            }, {
                id: uuid.v4(),
                title: 'Metal Gear Solid 3 - Snake Eater'
            }, {
                id: uuid.v4(),
                title: 'Metal Gear Solid 4 - Guns of the Patriots'
            }]};
        }
        case constants.CREATE_PROJECT: {
            action.project.id = uuid.v4();
            return {...state, projects: [...state.projects, action.project]};
        }
        case constants.UPDATE_PROJECT: {
            return {...state};
        }
        case constants.DELETE_PROJECT: {
            let index = state.projects.findIndex(project => project.id === action.id);
            state.projects.splice(index, 1);
            return {...state, projects: [...state.projects]};
        }
        default: {
            return {...state};
        }
    }
};

export default reducer;