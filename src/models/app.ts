import { History } from 'history';
import { IAuthState } from './reducers/auth';
import { IOrganizationState } from './reducers/organizations';
import { IUserInfoState } from './reducers/userInfo';
import { IUserSettingsState } from './reducers/userSettings';

export interface IAppState {
  auth: IAuthState,
  networks: any,
  organizations: IOrganizationState,
  router: History,
  userInfo: IUserInfoState,
  userSettings: IUserSettingsState,
}
