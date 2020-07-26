import { Action } from 'redux';

export interface IUserInfoState {
  userInfoData: object | null,
  error: object | null,
  fetching: boolean,
  loading: boolean,
}

export const enum UserInfoTypesNames {
  USER_INFO_REQUEST = 'USER_INFO_REQUEST',
  USER_INFO_SUCCESS = 'USER_INFO_SUCCESS',
  USER_INFO_FAILURE = 'USER_INFO_FAILURE',
}

export interface IUserInfoActionTypes {
  [UserInfoTypesNames.USER_INFO_REQUEST]: string;
  [UserInfoTypesNames.USER_INFO_SUCCESS]: string;
  [UserInfoTypesNames.USER_INFO_FAILURE]: string;
}

export interface SetInfoParamType extends Action<
UserInfoTypesNames.USER_INFO_REQUEST |
UserInfoTypesNames.USER_INFO_SUCCESS |
UserInfoTypesNames.USER_INFO_FAILURE
> {
  data: {
    sub: string,
    nickname: string,
    name: string,
    picture: string,
    updated_at: string,
    emailFromAuth: string,
    email_verified: boolean,
  },
  error: object,
}
