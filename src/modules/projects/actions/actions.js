import * as constants from '../constants/constants';

export function actionFetchProjects() {
    return {
        type: constants.FETCH_PROJECTS
    }
}

export function actionSagaFetchProjects() {
    return {
        type: constants.SAGA_FETCH_PROJECTS
    }
}