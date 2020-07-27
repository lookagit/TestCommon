import Immutable, { ImmutableObject } from 'seamless-immutable';
import { IUserInfoState, SetInfoParamType, IUserInfoActionTypes } from '../../models/reducers/userInfo';
declare const Creators: {
    userInfoRequest: () => SetInfoParamType;
    userInfoSuccess: (data: object) => SetInfoParamType;
    userInfoFailure: (error: string) => SetInfoParamType;
};
export declare const UserInfoTypes: IUserInfoActionTypes;
export default Creators;
export declare const INITIAL_STATE: ImmutableObject<IUserInfoState>;
export declare const request: (state: ImmutableObject<IUserInfoState>) => Immutable.ImmutableObject<IUserInfoState>;
export declare const success: (state: ImmutableObject<IUserInfoState>, { data }: SetInfoParamType) => Immutable.ImmutableObject<IUserInfoState>;
export declare const failure: (state: ImmutableObject<IUserInfoState>, { error }: SetInfoParamType) => Immutable.ImmutableObject<IUserInfoState>;
export declare const reducer: import("redux").Reducer<Immutable.ImmutableObject<IUserInfoState>, SetInfoParamType>;
