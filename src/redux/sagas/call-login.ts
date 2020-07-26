import { put, call, select } from 'redux-saga/effects';

import LoginActions from '../reducers/auth';

export const selectAuthToken = (state: any) => state.auth.accessToken;
export const selectAuthRefresh = (state: any) => state.auth.authRefresh;

export function* callApi(apiCall: any, api: any) {

  const response = yield apiCall;
  if (!isUnauthorized(response)) {
    return response;
  }


  const AuthToken = yield select(selectAuthToken);

  const authRefresh = yield select(selectAuthRefresh);
  const authObj = {
    refreshToken: authRefresh
  };

  const { status } = response;
  if (status === 401) {

    yield call(api.removeAuthToken);

    if (authRefresh) {
      const responseRefresh = yield call(api.refreshToken, authObj);
      const { data, ok } = responseRefresh;
      if (ok) {
        yield call(api.setAuthToken, data.idToken);

        yield put(LoginActions.refreshSuccess(data.idToken));
      } else {
        yield put(LoginActions.logoutRequest());
      }
    }

  } else if (AuthToken) {
    yield call(api.setAuthToken, AuthToken);
  }

  return yield apiCall;
}

function isUnauthorized(resp: any) {
  return resp.status === 403 || resp.status === 401;
}