import { all } from 'redux-saga/effects';

import { trafficRouteSaga } from './sagas';

export function* rootSaga() {
  yield all([
    trafficRouteSaga(),
  ]);
}