import { createReducer, createActions } from 'reduxsauce';
import Immutable, { ImmutableObject } from 'seamless-immutable';
import { IUserInfoState, SetInfoParamType, IUserInfoActionTypes } from '../../models/reducers/userInfo';
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions<IUserInfoActionTypes, {
  userInfoRequest: () => SetInfoParamType,
  userInfoSuccess: (data: object) => SetInfoParamType,
  userInfoFailure: (error: string) => SetInfoParamType,
}>({
      userInfoRequest: null,
      userInfoSuccess: ['data'],
      userInfoFailure: ['error'],
    });

export const UserInfoTypes = Types;
export default Creators;

export const INITIAL_STATE: ImmutableObject<IUserInfoState> = Immutable({
  userInfoData: null,
  error: null,
  fetching: false,
  loading: false,
});

export const request = (state: ImmutableObject<IUserInfoState>) => state.merge({
  fetching: true
});

export const success = (state: ImmutableObject<IUserInfoState>, { data }: SetInfoParamType) => {
  return state.merge({
    fetching: false,
    error: null,
    userInfoData: data
  });
};

export const failure = (state: ImmutableObject<IUserInfoState>, { error }: SetInfoParamType) => state.merge({
  fetching: false,
  error,
});

export const reducer = createReducer<ImmutableObject<IUserInfoState>, SetInfoParamType>(INITIAL_STATE, {
  [Types.USER_INFO_REQUEST]: request,
  [Types.USER_INFO_SUCCESS]: success,
  [Types.USER_INFO_FAILURE]: failure,
});