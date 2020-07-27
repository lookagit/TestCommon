import { Action } from 'redux';
import { ImmutableArray } from 'seamless-immutable';
import { INetworks } from '../api';
export interface INetworksState {
    networks: ImmutableArray<INetworks> | null;
    fetching: boolean;
    error: null | object;
}
export declare const enum NetworksTypesNames {
    NETWORKS_REQUEST = "NETWORKS_REQUEST",
    NETWORKS_SUCCESS = "NETWORKS_SUCCESS",
    NETWORKS_FAILURE = "NETWORKS_FAILURE"
}
export interface INetworksActionTypes {
    [NetworksTypesNames.NETWORKS_REQUEST]: string;
    [NetworksTypesNames.NETWORKS_SUCCESS]: string;
    [NetworksTypesNames.NETWORKS_FAILURE]: string;
}
export interface NetworksParamTypes extends Action<NetworksTypesNames.NETWORKS_REQUEST | NetworksTypesNames.NETWORKS_SUCCESS | NetworksTypesNames.NETWORKS_FAILURE> {
    data: [INetworks];
    networks: [INetworks];
    error: object | null;
}
