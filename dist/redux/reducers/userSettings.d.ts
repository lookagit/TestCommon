import Immutable, { ImmutableObject } from 'seamless-immutable';
import { IUserSettingsActionTypes, IUserSettingsState, SetUserSettingsParamType } from '../../models/reducers/userSettings';
declare const Creators: {
    userSettingsRequest: () => SetUserSettingsParamType;
    userSettingsSuccess: (data: object) => SetUserSettingsParamType;
    userSettingsFailure: (error: object) => SetUserSettingsParamType;
};
export declare const UserInfoTypes: IUserSettingsActionTypes;
export default Creators;
export declare const INITIAL_STATE: ImmutableObject<IUserSettingsState>;
export declare const request: (state: ImmutableObject<IUserSettingsState>) => Immutable.ImmutableObject<IUserSettingsState>;
export declare const success: (state: ImmutableObject<IUserSettingsState>, data: SetUserSettingsParamType) => Immutable.ImmutableObject<IUserSettingsState>;
export declare const failure: (state: ImmutableObject<IUserSettingsState>, { error }: SetUserSettingsParamType) => Immutable.ImmutableObject<IUserSettingsState>;
export declare const reducer: import("redux").Reducer<Immutable.ImmutableObject<IUserSettingsState>, SetUserSettingsParamType>;
