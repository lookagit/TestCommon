import {
  push as pushRouter,
  replace as replaceRouter,
  goBack as goBackRouter,
} from 'connected-react-router';
import { LocationState } from 'history';
import { put } from 'redux-saga/effects';

export function* push(routeName: string, params?: LocationState) {
  yield put(pushRouter(routeName, params));
}

export function* goBack() {
  yield put(goBackRouter());
}

export function* replace(routeName: string, params?: LocationState) {
  yield put(replaceRouter(routeName, params));
}
