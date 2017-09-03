import uuid from 'uuid';

const projectReducers = (state = {
    projects: [],
    categories: []
}, action) => {
    switch (action.type) {
        case "FETCH": {
            state = {...state, projects: action.projects};
            break;
        }
        case "CREATE": {
            action.project.id = uuid.v4();
            state = {...state, projects: [...state.projects, action.project]};
            break;
        }
        case "DELETE": {
            let index = state.projects.findIndex(project => project.id === action.id);
            state.projects.splice(index, 1);
            state = {...state, projects: [...state.projects]};
            break;
        }
        default: {
            state = {...state};
            break;
        }
    }
    return state;
};

export default projectReducers;