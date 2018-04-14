import { takeLatest, take, race, call, put } from 'redux-saga/effects';

import {addUpsell, changePopupVisibility} from './appActionCreators';
import {APP} from './appActions';

function* buyUpsell(upsell) {
    yield take(APP.BUY_UPSELL);
    const action = yield call(addUpsell, upsell);
    const response = yield put.resolve(action);
    yield put(changePopupVisibility(false));
    return response;
}

function* waitForUserAction(action) {
    yield put(changePopupVisibility(true));
    const { task, cancel } = yield race({
        task: call(buyUpsell, action.payload),
        cancel: take(APP.STOP_BUYING_UPSELL),
    });
    console.log('task', task);
    console.log('cancel', cancel);
}

export default function* appSaga() {
    yield takeLatest(APP.INITIALIZE_UPSELL_ADDING, waitForUserAction);
}