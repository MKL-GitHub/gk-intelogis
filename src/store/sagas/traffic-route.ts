import { call, put } from 'redux-saga/effects';

import { loadTrafficRoute } from '@store/actions';

function* handleLoad() {
  yield put(loadTrafficRoute.pending);

  try {
    yield put(loadTrafficRoute.fulfilled);
  } catch (error) {
    yield put(loadTrafficRoute.rejected);
  }

}

export function* trafficRouteSaga() {
  yield call(handleLoad);
};