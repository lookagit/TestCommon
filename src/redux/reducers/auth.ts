import { createReducer, createActions } from 'reduxsauce';
import Immutable, { ImmutableObject } from 'seamless-immutable';
import moment from 'moment-timezone';
import { IAuthState, IAuthActionTypes, SetAuthParamType, IAuthTokens } from '../../models/reducers/auth';
import { IGetTokens } from '../../models/api';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions<IAuthActionTypes, {
  loginRequest: (email: string, password: string) => SetAuthParamType,
  loginSuccess: (data: IGetTokens) => SetAuthParamType,
  loginFailure: (error: object) => SetAuthParamType,
  loginFailureField: (message: string, field: string) => SetAuthParamType
  logoutRequest: () => SetAuthParamType,
  logoutSuccess: () => SetAuthParamType,
  loginLoad: () => SetAuthParamType,
  loginLoadSuccess: () => SetAuthParamType,
  refreshRequest: (authRefresh: string) => SetAuthParamType,
  refreshSuccess: (authToken: string) => SetAuthParamType,
  refreshFailure: (error: object) => SetAuthParamType,
  initStorageRequest: (id_token: string, refresh_token: string, access_token: string, expires_in: number) => SetAuthParamType,
  initStorage: (id_token: string, refresh_token: string, access_token: string, expires_in: number) => SetAuthParamType,
  initStorageFailure: (error: object) => SetAuthParamType,
}>({
      loginRequest: ['email', 'password'],
      loginSuccess: ['data'],
      loginFailure: ['error'],
      loginFailureField: ['message', 'field'],
      logoutRequest: null,
      logoutSuccess: null,
      loginLoad: [],
      loginLoadSuccess: [],
      refreshRequest: ['authRefresh'],
      refreshSuccess: ['authToken'],
      refreshFailure: ['error'],
      initStorageRequest: ['id_token', 'refresh_token', 'access_token', 'expires_in'],
      initStorage: ['id_token', 'refresh_token', 'access_token', 'expires_in'],
      initStorageFailure: ['error']
    });

export const LoginTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE: ImmutableObject<IAuthState> = Immutable({
  authToken: null,
  authRefresh: null,
  accessToken: null,
  millisecondsToExpire: null,
  error: null,
  refresh: false,
  emailError: null,
  fetching: false,
  loading: false,
  tzIana: moment.tz.guess(true)
});

/* ------------- Reducers ------------- */

// we're attempting to login
export const request = (state: ImmutableObject<IAuthState>) => state.merge({ fetching: true, error: null });

// we've successfully logged in
export const success = (state: ImmutableObject<IAuthState>, data: SetAuthParamType) => {
  const { data: { access_token, expires_in, id_token, refresh_token } } = data;
  return state.merge({
    fetching: false,
    error: null,
    emailError: null,
    authToken: id_token,
    authRefresh: refresh_token,
    accessToken: access_token,
    millisecondsToExpire: expires_in
  });
};

// we've had a problem logging in
export const failure = (state: ImmutableObject<IAuthState>, { error }: SetAuthParamType) => state.merge({
  fetching: false,
  error,
  emailError: null,
  authToken: null,
  authRefresh: null,
  millisecondsToExpire: null
});

// we've had a problem with some bad field value
export const loginFailureField = (state: ImmutableObject<IAuthState>, { message, field }: SetAuthParamType) => state.merge({
  fetching: false,
  error: null,
  [`${field}Error`]: message,
  authToken: null,
  authRefresh: null,
  millisecondsToExpire: null
});

// we're attempting to load token from startup sagas
export const load = (state: ImmutableObject<IAuthState>) => state.merge({ loading: true, fetching: true });

export const loadSuccess = (state: ImmutableObject<IAuthState>) => state.merge({ loading: false, fetching: false });

// we're attempting to load token from startup sagas
export const refresh = (state: ImmutableObject<IAuthState>) => state.merge({ refresh: true });

export const refreshSuccess = (state: ImmutableObject<IAuthState>, { authToken }: SetAuthParamType) => state.merge({ refresh: false });

export const refreshFailure = (state: ImmutableObject<IAuthState>, { error }: SetAuthParamType) => state.merge({
  error,
  fetching: false,
  refresh: false,
  authToken: null,
  authRefresh: null
});

export const initStorage = (state: ImmutableObject<IAuthState>, data: SetAuthParamType) => {
  const { id_token, refresh_token, access_token, expires_in } = data;
  return state.merge({
    fetching: false,
    error: null,
    emailError: null,
    authToken: id_token,
    authRefresh: refresh_token,
    accessToken: access_token,
    millisecondsToExpire: expires_in
  });
};

export const initStorageRequest = (state: ImmutableObject<IAuthState>) => INITIAL_STATE;

export const initStorageFailure = (state: ImmutableObject<IAuthState>) => INITIAL_STATE;

// we need to logout, meaning clear access tokens and account
export const logoutRequest = (state: ImmutableObject<IAuthState>) => INITIAL_STATE;

// we've logged out
export const logoutSuccess = (state: ImmutableObject<IAuthState>) => INITIAL_STATE;

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer<ImmutableObject<IAuthState>, SetAuthParamType>(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: request,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILURE]: failure,
  [Types.LOGIN_LOAD]: load,
  [Types.LOGIN_LOAD_SUCCESS]: loadSuccess,
  [Types.LOGOUT_REQUEST]: logoutRequest,
  [Types.LOGOUT_SUCCESS]: logoutSuccess,
  [Types.REFRESH_REQUEST]: refresh,
  [Types.REFRESH_SUCCESS]: refreshSuccess,
  [Types.REFRESH_FAILURE]: refreshFailure,
  [Types.LOGIN_FAILURE_FIELD]: loginFailureField,
  [Types.INIT_STORAGE_REQUEST]: initStorageRequest,
  [Types.INIT_STORAGE]: initStorage,
  [Types.INIT_STORAGE_FAILURE]: initStorageFailure
});

/* ------------- Selectors ------------- */