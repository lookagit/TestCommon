import { Action } from 'redux';

export interface IAuthState {
  authToken: null | string,
  authRefresh: null | string,
  accessToken: null | string,
  millisecondsToExpire: null | number,
  error: null | object,
  emailError: null | string,
  fetching: boolean,
  loading: boolean,
  tzIana: string,
  refresh: boolean,
}

export interface IAuthTokens {
  access_token: string,
  expires_in: number,
  id_token: string,
  refresh_token: string
}

export const enum AuthTypesNames {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  LOGIN_LOAD = 'LOGIN_LOAD',
  LOGOUT_REQUEST = 'LOGOUT_REQUEST',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
  LOGIN_LOAD_SUCCESS = 'LOGIN_LOAD_SUCCESS',
  REFRESH_REQUEST = 'REFRESH_REQUEST',
  REFRESH_SUCCESS = 'REFRESH_SUCCESS',
  REFRESH_FAILURE = 'REFRESH_FAILURE',
  LOGIN_FAILURE_FIELD = 'LOGIN_FAILURE_FIELD',
  INIT_STORAGE_REQUEST = 'INIT_STORAGE_REQUEST',
  INIT_STORAGE = 'INIT_STORAGE',
  INIT_STORAGE_FAILURE = 'INIT_STORAGE_FAILURE',
}

export interface IAuthActionTypes {
  [AuthTypesNames.LOGIN_REQUEST]: string;
  [AuthTypesNames.LOGIN_SUCCESS]: string;
  [AuthTypesNames.LOGIN_FAILURE]: string;
  [AuthTypesNames.LOGIN_LOAD]: string;
  [AuthTypesNames.LOGOUT_REQUEST]: string;
  [AuthTypesNames.LOGOUT_SUCCESS]: string;
  [AuthTypesNames.LOGIN_LOAD_SUCCESS]: string;
  [AuthTypesNames.REFRESH_REQUEST]: string;
  [AuthTypesNames.REFRESH_SUCCESS]: string;
  [AuthTypesNames.REFRESH_FAILURE]: string;
  [AuthTypesNames.LOGIN_FAILURE_FIELD]: string;
  [AuthTypesNames.INIT_STORAGE_REQUEST]: string;
  [AuthTypesNames.INIT_STORAGE]: string;
  [AuthTypesNames.INIT_STORAGE_FAILURE]: string;
}

export interface SetAuthParamType extends Action<
AuthTypesNames.LOGIN_REQUEST |
AuthTypesNames.LOGIN_SUCCESS |
AuthTypesNames.LOGIN_FAILURE |
AuthTypesNames.LOGIN_LOAD |
AuthTypesNames.LOGOUT_REQUEST |
AuthTypesNames.LOGOUT_SUCCESS |
AuthTypesNames.LOGIN_LOAD_SUCCESS |
AuthTypesNames.REFRESH_REQUEST |
AuthTypesNames.REFRESH_SUCCESS |
AuthTypesNames.REFRESH_FAILURE |
AuthTypesNames.LOGIN_FAILURE_FIELD |
AuthTypesNames.INIT_STORAGE_REQUEST |
AuthTypesNames.INIT_STORAGE |
AuthTypesNames.INIT_STORAGE_FAILURE 
> {
  data: {
    access_token: string,
    expires_in: number,
    id_token: string,
    refresh_token: string
  },
  error: object,
  authToken: {
    access_token: string,
    expires_in: number,
    id_token: string,
    refresh_token: string
  },
  access_token: string,
  expires_in: number,
  id_token: string,
  refresh_token: string,
  message: string,
  field: string,
}
