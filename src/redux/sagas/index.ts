import { takeLatest, all, takeEvery } from 'redux-saga/effects';
import API from '../../api/api';
import auth0API from '../../api/authApi';


import { LoginTypes } from '../reducers/auth';
import { NetworkTypes } from '../reducers/networks';

import {
  login,
  logout,
  loginLoad,
  refresh,
  initialAuthFromStoage
} from './auth';

import { getNetworks } from './networks';

import { IApi, IAuthApi } from '../../models/api';
import { OrganizationsTypes } from '../reducers/organizations';
import { selectOrganization } from './organizations';

const api: IApi = API.create('https://directory.global.smart.network/directory/dash_user_by_email');
const auth0Api: IAuthApi = auth0API.create('https://c-dev.auth0.com');

export default function* root() {
  yield all([
    takeEvery(LoginTypes.LOGIN_LOAD, loginLoad, api),
    takeLatest(LoginTypes.LOGIN_REQUEST, login, api, auth0Api),
    takeLatest(LoginTypes.LOGOUT_REQUEST, logout, api),
    takeLatest(LoginTypes.REFRESH_REQUEST, refresh, api),
    takeLatest(LoginTypes.INIT_STORAGE_REQUEST, initialAuthFromStoage),
    takeLatest(NetworkTypes.NETWORKS_REQUEST, getNetworks, api),
    takeLatest(OrganizationsTypes.SET_ORGANIZATIONS_REQUEST, selectOrganization, api),
  ]);
}