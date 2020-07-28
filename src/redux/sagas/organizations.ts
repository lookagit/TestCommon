import { put, call } from 'redux-saga/effects';
import NavigationService from '../../navigation';
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
  yield call(() => NavigationService.push('/networks'));
}
