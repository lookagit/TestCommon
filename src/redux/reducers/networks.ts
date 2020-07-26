import { createReducer, createActions } from 'reduxsauce';
import Immutable, { ImmutableObject } from 'seamless-immutable';
import { NetworksParamTypes, INetworksActionTypes, INetworksState } from '../../models/reducers/networks';
import { INetworks } from '../../models/api';

const { Types, Creators } = createActions<INetworksActionTypes, {
  networksRequest: () => NetworksParamTypes,
  networksSuccess: (data: object) => NetworksParamTypes,
  networksFailure: (err: object) => NetworksParamTypes,
}>({
      networksRequest: null,
      networksSuccess: ['networks'],
      networksFailure: ['error'],
    });

export const NetworkTypes = Types;
export default Creators;

export const INITIAL_STATE: ImmutableObject<INetworksState> = Immutable({
  networks: null,
  fetching: false,
  error: null
});

export const request = (state: ImmutableObject<INetworksState>) => state.merge({ fetching: true });

export const success = (state: ImmutableObject<INetworksState>, data: NetworksParamTypes) => {
  const { networks } = data;
  return state.merge({
    fetching: false,
    error: null,
    networks,
  });
};

export const failure = (state: any, { error }: any) => state.merge({
  fetching: false,
  error,
  networks: null
});

export const reducer = createReducer<ImmutableObject<INetworksState>, NetworksParamTypes>(INITIAL_STATE, {
  [Types.NETWORKS_REQUEST]: request,
  [Types.NETWORKS_SUCCESS]: success,
  [Types.NETWORKS_FAILURE]: failure,
});