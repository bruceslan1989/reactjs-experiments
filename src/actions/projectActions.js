export function fetchProjects() {
    return {
        'type': 'FETCH',
        'projects': [{
            title: 'Experts',
            category: 'App'
        }, {
            title: 'Gold & People',
            category: 'App'
        }, {
            title: 'Museums Online',
            category: 'App'
        }]
    };
}

export function createProject(project) {
    return {
        'type': 'CREATE',
        'project': project
    };
}

export function deleteProject(id) {
    return {
        'type': 'DELETE',
        'id': id
    }
}