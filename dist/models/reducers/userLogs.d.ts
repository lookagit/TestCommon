import { Action } from 'redux';
import { ImmutableArray } from 'seamless-immutable';
export interface IUserLogsData {
    sub: string;
    nickname: string;
    name: string;
    picture: string;
    updated_at: string;
    emailFromAuth: string;
    email_verified: boolean;
    numOfOrganizations: number;
}
export interface IUserLogsState {
    userLogs: ImmutableArray<IUserLogsData> | null;
}
export declare const enum UserLogsTypesNames {
    LOAD_LOG = "LOAD_LOG",
    REMOVE_LOG = "REMOVE_LOG"
}
export interface IUserLogsActionTypes {
    [UserLogsTypesNames.LOAD_LOG]: string;
    [UserLogsTypesNames.REMOVE_LOG]: string;
}
export interface SetLogsParamType extends Action<UserLogsTypesNames.LOAD_LOG | UserLogsTypesNames.REMOVE_LOG> {
    data: {
        sub: string;
        nickname: string;
        name: string;
        picture: string;
        updated_at: string;
        emailFromAuth: string;
        email_verified: boolean;
        numOfOrganizations: number;
    };
}
