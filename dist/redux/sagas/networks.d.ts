import { IApi } from '../../models/api';
export declare const getUserSettings: (state: any) => any;
export declare function getNetworks(api: IApi): Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").CallEffect<any> | import("redux-saga/effects").PutEffect<import("../../models/reducers/networks").NetworksParamTypes>, void, {
    userSettingsData: any;
} & {
    data: any;
    ok: any;
}>;
