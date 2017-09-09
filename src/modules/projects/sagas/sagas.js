import { put, takeEvery, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as actions from '../actions/actions';
import * as constants from '../constants/constants';

export function* fetchProjects() {
    yield delay(1000);
    yield put(actions.actionFetchProjects());
}

export function* watchFetchProjects() {
    yield takeEvery(constants.SAGA_FETCH_PROJECTS, fetchProjects);
}

export default function* rootSaga() {
    yield all([
        watchFetchProjects()
    ]);
}