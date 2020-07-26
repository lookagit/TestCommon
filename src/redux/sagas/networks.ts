import { call, put, select } from 'redux-saga/effects';
import { IApi } from '../../models/api';
import { callApi } from './call-api-saga';
import NetworkActions from '../reducers/networks';

export const getUserSettings = (state: any) => state.userSettings;

export function* getNetworks(api: IApi) {
  const { userSettingsData } = yield select(getUserSettings);
  const { networks_table_order, networks_table_settings } = userSettingsData;
  const { visible_items } = networks_table_order;
  const { sort: { order, id } } = networks_table_settings;
  console.log("VISIBLE ITEMS ", visible_items);
  const data = {
    attributes: ["network_name", "mode", ...visible_items],
    start:0,
    order: [{ field: id, dir: order }],
    length: 200,
    filter: [],
    search: ""
  };
  const checkNetworksCall = call(api.getNetworksInfo, data);
  const { data: responseFromCheckUser, ok } = yield call(callApi, checkNetworksCall, api);
  
  if (ok) {
    const { data } = responseFromCheckUser;
    console.log("JA SAM ORGANIZATIONS ", data);
    yield put(NetworkActions.networksSuccess(data));
  }
}
