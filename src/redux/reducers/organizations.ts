import { createReducer, createActions } from 'reduxsauce';
import Immutable, { ImmutableObject } from 'seamless-immutable';
import { IOrganizationActionTypes, SetOrganizationParamType, IOrganizationState } from '../../models/reducers/organizations';

const { Types, Creators } = createActions<IOrganizationActionTypes, {
  organizationsRequest: () => SetOrganizationParamType,
  organizationsSuccess: (data: object) => SetOrganizationParamType,
  organizationsFailure: (error: object) => SetOrganizationParamType,
  setOrganizationsRequest: (organizationId: string) => SetOrganizationParamType,
  setOrganizationsSuccess: (organizationId: string) => SetOrganizationParamType,
  setOrganizationsFailure: (error: object) => SetOrganizationParamType
}>({
      organizationsRequest: null,
      organizationsSuccess: ['organizations'],
      organizationsFailure: ['error'],
      setOrganizationsRequest: ['organizationId'],
      setOrganizationsSuccess: ['organizationId'],
      setOrganizationsFailure: ['error']
    });

export const OrganizationsTypes = Types;
export default Creators;

export const INITIAL_STATE: ImmutableObject<IOrganizationState> = Immutable({
  organizationsArray: null,
  fetching: false,
  error: null,
  selectedOrganizationId: null,
});

export const request = (state: ImmutableObject<IOrganizationState>) => state.merge({ fetching: true });

export const success = (state: ImmutableObject<IOrganizationState>, data: SetOrganizationParamType) => {
  const { organizations } = data;
  return state.merge({
    fetching: false,
    error: null,
    organizationsArray: organizations,
  });
};

export const failure = (state: ImmutableObject<IOrganizationState>, { error }: SetOrganizationParamType) => state.merge({
  fetching: false,
  error,
  organizationsArray: null
});

export const setOrganizationSuccess = (state: ImmutableObject<IOrganizationState>, { organizationId }: SetOrganizationParamType) => state.merge({
  selectedOrganizationId: organizationId,
  fetching: false,
  error: null,
});

export const reducer = createReducer<ImmutableObject<IOrganizationState>, SetOrganizationParamType>(INITIAL_STATE, {
  [Types.ORGANIZATIONS_REQUEST]: request,
  [Types.ORGANIZATIONS_SUCCESS]: success,
  [Types.ORGANIZATIONS_FAILURE]: failure,
  [Types.SET_ORGANIZATIONS_REQUEST]: request,
  [Types.SET_ORGANIZATIONS_SUCCESS]: setOrganizationSuccess,
  [Types.SET_ORGANIZATIONS_FAILURE]: failure,
});