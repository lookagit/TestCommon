import { IApi, IAuthApi } from '../../models/api';
export declare const selectAuthToken: (state: any) => any;
export declare const selectAuthRefresh: (state: any) => any;
export declare function callApi(apiCall: any, api: IApi | IAuthApi): Generator<any, any, unknown>;
