import { createReducer, createActions } from 'reduxsauce';
import Immutable, { ImmutableObject } from 'seamless-immutable';
import { IUserSettingsActionTypes, IUserSettingsState, SetUserSettingsParamType } from '../../models/reducers/userSettings';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions<IUserSettingsActionTypes, {
  userSettingsRequest: () => SetUserSettingsParamType,
  userSettingsSuccess: (data: object) => SetUserSettingsParamType,
  userSettingsFailure: (error: object) => SetUserSettingsParamType,
}>({
      userSettingsRequest: null,
      userSettingsSuccess: ['userSettings'],
      userSettingsFailure: ['error'],
    });

export const UserSettingsTypes = Types;
export default Creators;

export const INITIAL_STATE: ImmutableObject<IUserSettingsState> = Immutable({
  userSettingsData: null,
  error: null,
  fetching: false,
  loading: false,
});

export const request = (state: ImmutableObject<IUserSettingsState>) => state.merge({ fetching: true });

export const success = (state: ImmutableObject<IUserSettingsState>, data: SetUserSettingsParamType) => {
  const { userSettings } = data;
  return state.merge({
    fetching: false,
    error: null,
    userSettingsData: userSettings
  });
};

export const failure = (state: ImmutableObject<IUserSettingsState>, { error }: SetUserSettingsParamType) => state.merge({
  fetching: false,
  error,
});

export const reducer = createReducer<ImmutableObject<IUserSettingsState>, SetUserSettingsParamType>(INITIAL_STATE, {
  [Types.USER_SETTINGS_REQUEST]: request,
  [Types.USER_SETTINGS_SUCCESS]: success,
  [Types.USER_SETTINGS_FAILURE]: failure,
});