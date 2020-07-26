import { Action } from 'redux';
import { ImmutableArray } from 'seamless-immutable';
import { IOrganizations } from '../api';

export interface IOrganizationState {
  organizationsArray: ImmutableArray<IOrganizations> | null,
  fetching: boolean,
  error: null | object,
  selectedOrganizationId: null | string
}

export const enum OrganizationTypesNames {
  ORGANIZATIONS_REQUEST = 'ORGANIZATIONS_REQUEST',
  ORGANIZATIONS_SUCCESS = 'ORGANIZATIONS_SUCCESS',
  ORGANIZATIONS_FAILURE = 'ORGANIZATIONS_FAILURE',
  SET_ORGANIZATIONS_REQUEST = 'SET_ORGANIZATIONS_REQUEST',
  SET_ORGANIZATIONS_SUCCESS = 'SET_ORGANIZATIONS_SUCCESS',
  SET_ORGANIZATIONS_FAILURE = 'SET_ORGANIZATIONS_FAILURE',
}

export interface IOrganizationActionTypes {
  [OrganizationTypesNames.ORGANIZATIONS_REQUEST]: string;
  [OrganizationTypesNames.ORGANIZATIONS_SUCCESS]: string;
  [OrganizationTypesNames.ORGANIZATIONS_FAILURE]: string;
  [OrganizationTypesNames.SET_ORGANIZATIONS_REQUEST]: string;
  [OrganizationTypesNames.SET_ORGANIZATIONS_SUCCESS]: string;
  [OrganizationTypesNames.SET_ORGANIZATIONS_FAILURE]: string
}

export interface SetOrganizationParamType extends Action<
OrganizationTypesNames.ORGANIZATIONS_REQUEST |
OrganizationTypesNames.ORGANIZATIONS_SUCCESS |
OrganizationTypesNames.ORGANIZATIONS_FAILURE |
OrganizationTypesNames.SET_ORGANIZATIONS_REQUEST |
OrganizationTypesNames.SET_ORGANIZATIONS_SUCCESS |
OrganizationTypesNames.SET_ORGANIZATIONS_FAILURE
> {
  data: [IOrganizations],
  organizations: [IOrganizations],
  error: object | null,
  organizationId: string,
}
