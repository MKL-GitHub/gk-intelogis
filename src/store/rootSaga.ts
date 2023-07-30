import { all } from 'redux-saga/effects';

import { trafficRouteSaga } from './traffic-route';

export function* rootSaga() {
  yield all([
    trafficRouteSaga(),
  ]);
}