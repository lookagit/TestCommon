import { Action } from 'redux';
import { IUserSettings } from '../api';

export interface IUserSettingsState {
  userSettingsData: null | IUserSettings,
  error: object | null,
  fetching: boolean,
  loading: boolean,
}

enum UserSettingsTypesNames {
  USER_SETTINGS_REQUEST = 'USER_SETTINGS_REQUEST',
  USER_SETTINGS_SUCCESS = 'USER_SETTINGS_SUCCESS',
  USER_SETTINGS_FAILURE = 'USER_SETTINGS_FAILURE',
}

export interface IUserSettingsActionTypes {
  [UserSettingsTypesNames.USER_SETTINGS_REQUEST]: string;
  [UserSettingsTypesNames.USER_SETTINGS_SUCCESS]: string;
  [UserSettingsTypesNames.USER_SETTINGS_FAILURE]: string;
}

export interface SetUserSettingsParamType extends Action<
UserSettingsTypesNames.USER_SETTINGS_REQUEST |
UserSettingsTypesNames.USER_SETTINGS_SUCCESS |
UserSettingsTypesNames.USER_SETTINGS_FAILURE
> {
  data: {
    userSettings: IUserSettings,
  },
  userSettings: IUserSettings,
  error: object | null,
}