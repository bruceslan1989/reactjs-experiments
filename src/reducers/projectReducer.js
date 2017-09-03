import uuid from 'uuid';

const projectReducers = (state = { projects: [], categories: [] }, action) => {
    switch (action.type) {
        case "CREATE": {
            state = {...state};
            action.payload.id = uuid.v4();
            state.projects.push(action.payload);
            break;
        }
        case "DELETE": {
            state = {...state};
            let index = state.projects.findIndex(project => project.id === action.payload);
            state.projects.splice(index, 1);
            break;
        }
        default: {
            break;
        }
    }
    return state;
};

export default projectReducers;