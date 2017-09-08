import { put, takeEvery, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as actions from '../actions/actions';

export function* fetchProjects() {
    yield delay(1000);
    yield put(actions.actionFetchProjects());
}

export function* watchFetchProjects() {
    yield takeEvery(actions.actionSagaFetchProjects, fetchProjects);
}

export default function* rootSaga() {
    yield all([
        watchFetchProjects()
    ]);
}