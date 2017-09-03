import uuid from 'uuid';

const projectReducers = (state = {
    projects: [],
    categories: []
}, action) => {
    switch (action.type) {
        case "CREATE": {
            action.payload.id = uuid.v4();
            state = {...state, projects: [...state.projects, action.payload]};
            break;
        }
        case "DELETE": {
            let index = state.projects.findIndex(project => project.id === action.payload);
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