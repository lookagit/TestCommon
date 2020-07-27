/// <reference types="connected-react-router" />
import { LocationState } from 'history';
export declare function push(routeName: string, params?: LocationState): Generator<import("redux-saga/effects").PutEffect<import("connected-react-router").CallHistoryMethodAction<[string, {}?]>>, void, unknown>;
export declare function goBack(): Generator<import("redux-saga/effects").PutEffect<import("connected-react-router").CallHistoryMethodAction<[]>>, void, unknown>;
export declare function replace(routeName: string, params?: LocationState): Generator<import("redux-saga/effects").PutEffect<import("connected-react-router").CallHistoryMethodAction<[string, {}?]>>, void, unknown>;
