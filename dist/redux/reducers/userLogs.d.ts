import Immutable, { ImmutableObject } from 'seamless-immutable';
import { IUserLogsState, SetLogsParamType, IUserLogsActionTypes } from '../../models/reducers/userLogs';
declare const Creators: {
    loadLog: (data: object) => SetLogsParamType;
    removeLog: () => SetLogsParamType;
};
export declare const UserLogsTypes: IUserLogsActionTypes;
export default Creators;
export declare const INITIAL_STATE: ImmutableObject<IUserLogsState>;
export declare const loadUserLog: (state: ImmutableObject<IUserLogsState>, { data }: SetLogsParamType) => Immutable.ImmutableObject<IUserLogsState>;
export declare const removeUserLog: (state: ImmutableObject<IUserLogsState>) => Immutable.ImmutableObject<IUserLogsState>;
export declare const reducer: import("redux").Reducer<Immutable.ImmutableObject<IUserLogsState>, SetLogsParamType>;
