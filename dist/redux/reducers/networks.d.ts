import Immutable, { ImmutableObject } from 'seamless-immutable';
import { NetworksParamTypes, INetworksActionTypes, INetworksState } from '../../models/reducers/networks';
declare const Creators: {
    networksRequest: () => NetworksParamTypes;
    networksSuccess: (data: object) => NetworksParamTypes;
    networksFailure: (err: object) => NetworksParamTypes;
};
export declare const NetworkTypes: INetworksActionTypes;
export default Creators;
export declare const INITIAL_STATE: ImmutableObject<INetworksState>;
export declare const request: (state: ImmutableObject<INetworksState>) => Immutable.ImmutableObject<INetworksState>;
export declare const success: (state: ImmutableObject<INetworksState>, data: NetworksParamTypes) => Immutable.ImmutableObject<INetworksState>;
export declare const failure: (state: any, { error }: any) => any;
export declare const reducer: import("redux").Reducer<Immutable.ImmutableObject<INetworksState>, NetworksParamTypes>;
