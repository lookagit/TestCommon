import { call, put, select } from 'redux-saga/effects';
import moment from 'moment-timezone';
import { ApiResponse } from 'apisauce';
import { callApi } from './call-api-saga';
import OrganizationsActions from '../reducers/organizations';
import UserInfoActions from '../reducers/userInfo';
import UserSettingsActions from '../reducers/userSettings';
import { IApi, IAuthApi, IGetTokens, IAuth0User } from '../../models/api';
import LoginActions from '../reducers/auth';
import { LoginActionParams, LoginSuccessParams, UserExistResponse, IOrganizationResponse, IUserSettingsResponse } from '../../models/sagas/auth';
import { IAuthState } from '../../models/reducers/auth';
import { IAppState } from '../../models/app';
import { IOrganizationState } from '../../models/reducers/organizations';
import { IUserInfoState } from '../../models/reducers/userInfo';
import NavigationService from '../../navigation';
import { UserLogsActions } from '../..';

const AUDIENCE = 'https://smart.server/';
const SCOPE = 'openid profile offline_access email app:normal';

const selectAuth = (state: IAppState) => state.auth;
const selectUserInfo = (state: IAppState) => state.userInfo;
const selectRouter = (state: IAppState) => state.router;
export const selectOrganizations = (state: IAppState) => state.organizations;


export function* login(api: IApi, auth0Api: IAuthApi, { email, password }: LoginActionParams) {
  if (email === '') {
    yield put(LoginActions.loginFailureField('Email cannot be empty', 'email'));
    return;
  }
  if (password === '') {
    yield put(LoginActions.loginFailure({ error: 'Password cannot be empty' }));
    return;
  }
  const checkUserCall = call(api.checkForUserInfo, email);
  const responseFromCheckUser: ApiResponse<UserExistResponse> = yield call(callApi, checkUserCall, api);
  const { ok: userFound, data } = responseFromCheckUser;
  if (userFound && data && data.error !== -112) {
    const { data: { auth_connection, app_server } } = data;
    const fetchAuthCall = call(auth0Api.getTokens, {
      username: email,
      audience: AUDIENCE,
      scope: SCOPE,
      password,
      grant_type: 'http://auth0.com/oauth/grant-type/password-realm',
      realm: auth_connection,
      client_id: 'KqABZJJuUTKNbQROYcxrIpJecLi1Nk19',
    });
    const fetchAuth: ApiResponse<IGetTokens> = yield call(callApi, fetchAuthCall, auth0Api);
    const { data: authData, ok: authPass } = fetchAuth;
    if (authPass && authData) {
      const { id_token, refresh_token, access_token, expires_in } = authData;
      yield call(api.setAuthToken, access_token);
      yield call(auth0Api.setAuthToken, access_token);
      const getUserCall = call(auth0Api.getUser);
      const getUserFetch: ApiResponse<IAuth0User> = yield call(callApi, getUserCall, auth0Api);
      const orgName = 'https://smart.server/claims/organizations';
      const { data: userData, ok: profileFetchSuccess } = getUserFetch;
      if (profileFetchSuccess && userData) {
        const {
          sub,
          nickname,
          name,
          picture,
          updated_at,
          email: emailFromAuth,
          email_verified,
          [orgName]: orgs
        } = userData;
        const [firstOrgId] = orgs;
        yield put(LoginActions.loginSuccess(authData));
        yield put(UserInfoActions.userInfoSuccess(userData));
        const timezone = moment.tz.guess(true);
        api.setOnServer(app_server);
        api.setTimezoneHeader(timezone);
        api.setAuthTokenForServer(access_token);
        api.setOrganizationHeader(firstOrgId.org_id);
        const getOrganizationCall = call(api.getOrganization);
        const responseGetOrganizations: ApiResponse<IOrganizationResponse>= yield call(callApi, getOrganizationCall, api);
        const {
          data: organizationsData,
          ok: getOrganizationsSuccess
        } = responseGetOrganizations;
        const getUserSettings = call(api.getUserSettings);
        const {
          data: getUserSettingsData,
          ok: getUserSettingsSuccess
        }: ApiResponse<IUserSettingsResponse> = yield call(callApi, getUserSettings, api);
        if (getUserSettingsSuccess && getUserSettingsData) {
          yield put(UserSettingsActions.userSettingsSuccess(getUserSettingsData.data));
        }
        if (getOrganizationsSuccess && organizationsData) {
          yield put(OrganizationsActions.organizationsSuccess(organizationsData.data));
        }

        if (getOrganizationsSuccess && organizationsData && organizationsData.data && organizationsData.data.length > 1) {
          yield call(() => NavigationService.push('/home', { showModal: true }));
        }
        if (getOrganizationsSuccess && organizationsData && organizationsData.data && organizationsData.data.length === 1) {
          yield put(OrganizationsActions.setOrganizationsSuccess(firstOrgId.org_id));
          yield call(() => NavigationService.push('/home'));
        }
        yield put(UserLogsActions.loadLog({ ...userData, numOfOrganizations: organizationsData.data.length }));
      }
    } else {
      yield put(LoginActions.loginFailure({ error: 'Bad credentials' } || { error: 'Network Error' }));
    }
  } else {
    yield put(LoginActions.loginFailure({ error: 'User not found' } || { error: 'Network Error' }));
  }
}

export function* initialAuthFromStoage(
  { id_token, refresh_token, access_token, expires_in }: LoginSuccessParams
) {
  yield put(LoginActions.initStorage(id_token, refresh_token, access_token, expires_in));
}

export function* refresh(api: any, { authRefresh }: any){
  // const authRefresh = yield select(selectAuthRefresh)
  const authObj = {
    refreshToken: authRefresh
  };

  // const response = yield call(api.refreshToken, authObj)

  const apiCall = call(api.refreshToken, authObj);
  const response = yield call(callApi, apiCall, api);
}

// attempts to logout
export function* logout(api: any){
  yield put(LoginActions.logoutSuccess());
  yield call(() => NavigationService.replace('/'));
}

// loads the login
export function* loginLoad(api: IApi){
  const auth: IAuthState = yield select(selectAuth);
  const router: any = yield select(selectRouter);
  if (auth && auth.accessToken) {
    const userInfo: IUserInfoState = yield select(selectUserInfo);
    // check user data to be able to set right appServer
    if (userInfo.userInfoData && userInfo.userInfoData.email_verified) {
      const { userInfoData: { email } } = userInfo; 
      const checkUserCall = call(api.checkForUserInfo, email);
      const responseFromCheckUser: ApiResponse<UserExistResponse> = yield call(callApi, checkUserCall, api);
      const { ok: userFound, data } = responseFromCheckUser;
      if (userFound && data && data.error !== -112) {
        const { data: { app_server: appServer } } = data;
        api.setOnServer(appServer);
      }
    }
    const organizations: IOrganizationState = yield select(selectOrganizations);
    if (organizations && organizations.organizationsArray) {
      api.setOrganizationHeader(organizations.organizationsArray[0]._id);
    }
    api.setTimezoneHeader(auth.tzIana);
    api.setAuthTokenForServer(auth.accessToken);
    if (router && router.location && router.location.pathname === '/') {
      yield call(() => NavigationService.replace('/home'));
    }
  }
  if (auth && !auth.accessToken) {
    yield call(() => NavigationService.replace('/'));
  }
  yield put(LoginActions.loginLoadSuccess());

}