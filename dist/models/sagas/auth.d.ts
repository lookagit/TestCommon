import { AuthTypesNames } from '../reducers/auth';
import { IUserExists, IOrganizations, IUserSettings } from '../api';
export declare type LoginActionParams = {
    type: typeof AuthTypesNames;
    email: string;
    password: string;
};
export declare type LoginSuccessParams = {
    type: typeof AuthTypesNames;
    id_token: string;
    refresh_token: string;
    access_token: string;
    expires_in: number;
};
export interface UserExistResponse {
    error: number;
    data: IUserExists;
}
export interface IOrganizationResponse {
    error: number;
    data: [IOrganizations];
}
export interface IUserSettingsResponse {
    error: number;
    data: IUserSettings;
}
