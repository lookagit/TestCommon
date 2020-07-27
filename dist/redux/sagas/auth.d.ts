/// <reference types="connected-react-router" />
import { IApi, IAuthApi, IGetTokens, IAuth0User } from '../../models/api';
import { LoginActionParams, LoginSuccessParams, UserExistResponse, IOrganizationResponse, IUserSettingsResponse } from '../../models/sagas/auth';
import { IAppState } from '../../models/app';
import { IOrganizationState } from '../../models/reducers/organizations';
export declare const selectOrganizations: (state: IAppState) => IOrganizationState;
export declare function login(api: IApi, auth0Api: IAuthApi, { email, password }: LoginActionParams): Generator<import("redux-saga/effects").PutEffect<import("../../models/reducers/auth").SetAuthParamType> | import("redux-saga/effects").CallEffect<any> | import("redux-saga/effects").PutEffect<import("../../models/reducers/userInfo").SetInfoParamType> | import("redux-saga/effects").PutEffect<import("../../models/reducers/userSettings").SetUserSettingsParamType> | import("redux-saga/effects").PutEffect<import("../../models/reducers/organizations").SetOrganizationParamType> | import("redux-saga/effects").PutEffect<import("connected-react-router").CallHistoryMethodAction<[string, {}?]>>, void, (import("apisauce").ApiErrorResponse<UserExistResponse> & import("apisauce").ApiErrorResponse<IGetTokens> & import("apisauce").ApiErrorResponse<IAuth0User> & import("apisauce").ApiErrorResponse<IOrganizationResponse> & import("apisauce").ApiErrorResponse<IUserSettingsResponse>) | (import("apisauce").ApiOkResponse<UserExistResponse> & import("apisauce").ApiOkResponse<IGetTokens> & import("apisauce").ApiOkResponse<IAuth0User> & import("apisauce").ApiOkResponse<IOrganizationResponse> & import("apisauce").ApiOkResponse<IUserSettingsResponse>)>;
export declare function initialAuthFromStoage({ id_token, refresh_token, access_token, expires_in }: LoginSuccessParams): Generator<import("redux-saga/effects").PutEffect<import("../../models/reducers/auth").SetAuthParamType>, void, unknown>;
export declare function refresh(api: any, { authRefresh }: any): Generator<import("redux-saga/effects").CallEffect<any>, void, unknown>;
export declare function logout(api: any): Generator<import("redux-saga/effects").PutEffect<import("../../models/reducers/auth").SetAuthParamType>, void, unknown>;
export declare function loginLoad(api: IApi): Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").PutEffect<import("../../models/reducers/auth").SetAuthParamType> | import("redux-saga/effects").CallEffect<any> | import("redux-saga/effects").PutEffect<import("connected-react-router").CallHistoryMethodAction<[string, {}?]>>, void, any>;