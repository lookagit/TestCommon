import { put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { IApi } from '../../models/api';
import NetworkActions from '../reducers/networks';
import OrganizationActions from '../reducers/organizations';
import { OrganizationTypesNames } from '../../models/reducers/organizations';

interface ISelectOrganizationParams {
  type: typeof OrganizationTypesNames,
  organizationId: string
}

export function* selectOrganization(api: IApi, { organizationId }: ISelectOrganizationParams) {
  api.setOrganizationHeader(organizationId);
  yield put(OrganizationActions.setOrganizationsSuccess(organizationId));
  yield put(NetworkActions.networksRequest());
  yield put(push('/networks'));
}
