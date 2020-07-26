import { ApiResponse } from 'apisauce';
import { AxiosInstance } from 'axios';

type MetaResponse = {
  method: string,
  label: string,
  url: string
}

export interface IUserExists {
  app_server: string;
  auth_client_id: string;
  auth_client_id_web: string;
  auth_connection: string;
  auth_domain: string;
  dash_user_email: string;
  user: string;
  _id: string;
}

export interface IPlans {
  datacap: number;
  dc_alert_admin: boolean;
  dc_alert_subscriber: boolean;
  description: string;
  downstream: number;
  id: string;
  isp_ref: string;
  name: string;
  upstream: number;
}

export interface ISiCategories {
  active: boolean;
  id: number;
  name: string;
}

export interface ILabels {
  color: string;
  label: string;
}

export interface ICustomTask {
  start_time: string;
  stop_time: string;
  type: string;
  week_day: string;
}

export interface IRecurrence {
  end_on_all_done: boolean
  every_unit: string
  every_x: number
}

export interface IDefaultTaskSchedule {
  has_recurrence: boolean;
  custom_sched: Array<ICustomTask>;
  recurrence: IRecurrence;
  schedule_type: string;
}

export interface IMapSettings {
  green_priority: number;
  is_clustering_enabled: boolean;
  map_type: number;
  orange_priority: number;
  red_priority: number;
  saved_latitude: number;
  saved_longitude: number;
  saved_span_latitude: number;
  saved_span_longitude: number;
  yellow_priority: number;
}

interface IBaseTableOrder {
  visible_modules: Array<string>
}

export interface INetworkDetailsOrder extends IBaseTableOrder { }

export interface INetworksTableOrder extends IBaseTableOrder { }

export interface IPlansTableOrder extends IBaseTableOrder { }

export interface ISubscribersTableOrder extends IBaseTableOrder { }

export interface ISort {
  order: string;
  id: string;
}

interface IBaseTableSettings {
  sort: ISort
}

export interface INetworksTableSettings extends IBaseTableSettings { };

export interface ISubscribersTableSettings extends IBaseTableSettings { };

export interface IPlansTableSettings extends IBaseTableSettings { };

export interface IUserSettings {
  map_settings: IMapSettings;
  network_details_order: INetworkDetailsOrder;
  network_details_usage_stats_period: string;
  network_details_utilization_period: string;
  networks_mode: number;
  networks_table_order: INetworksTableOrder;
  networks_table_settings: INetworksTableSettings;
  pinnedNetworks: Array<string>;
  plans_table_order: IPlansTableOrder;
  plans_table_settings: IPlansTableSettings;
  tags: Array<string>;
  subscribers_table_order: ISubscribersTableOrder;
  subscribers_table_settings: ISubscribersTableSettings
}

export interface IOrganizations {
  _id: string;
  ctime: number;
  datacap: number;
  dc_alert_email: string;
  description: string;
  downstream: number;
  email: string;
  enable_calibration: boolean;
  enable_maintenance_hours: string;
  enable_shaping: boolean;
  enable_user_calibration: boolean;
  isp_ref: string;
  logo_ref: string;
  mtime: number;
  name: string;
  owner_id: string;
  smart_routers_count: number;
  smart_users_count: number;
  static_user: string;
  trouble_url: string;
  tz_iana: string;
  upstream: number;
  weekly_email: string;
  si_categories: Array<ISiCategories>;
  plans: Array<IPlans>;
  labels: Array<ILabels>;
  auto_tags_lib: Object;
  default_task_schedule: IDefaultTaskSchedule
}

export interface ILastCalibration {
  dn: string;
  receive: number;
  time: Date;
  transmit: number;
  type: string;
  unshapped: boolean
  up: string;
  use_for_isp_speeds: boolean;
  usedRx: number;
  usedTx: number;
  used_dn: string;
  used_up: string;
}

export interface INetworkStats {
  lastPingSuccess: number;
  last_calib: ILastCalibration;
}

export interface INetworkAppSettings {
  isp_plan: string;
}

export interface INetworks {
  ack: null | any;
  app_settings: INetworkAppSettings;
  network_stats: INetworkStats;
  crm_ref: string;
  device_ip: string;
  health: number;
  isp_downstream: number;
  isp_plan_name: string;
  isp_upstream: number;
  last_seen: Date
  mode: string;
  network_name: string;
  publicIP: string;
  rosVersion: string;
  serial: string;
  smart_router_id: string;
  smart_user_name: string;
  status: string;
  _id: string;
}

export interface IErrResponse {
  data: null
  error: number
  message: string
  meta: MetaResponse
}

export interface IGetTokens {
  access_token: string;
  expires_in: number;
  id_token: string;
  refresh_token: string;
  scope: string;
  token_type: string;
}
export interface IAuthUserOrg {
  org_id: string;
  role_id: string;
}

export interface IAuth0User {
  email: string;
  email_verified: boolean
  'https://smart.server/claims/organizations': Array<IAuthUserOrg>
  'https://smart.server/claims/owner_id': string;
  'https://smart.server/claims/superuser': boolean;
  name: string;
  nickname: string;
  picture: string;
  sub: string
  updated_at: Date
}

export interface IApi {
  setAuthToken: (userAuth: string) => AxiosInstance
  setAuthTokenForServer: (userAuth: string) => AxiosInstance
  setOrganizationHeader: (orgHeader: string) => AxiosInstance
  setTimezoneHeader: (timezoneString: string) => AxiosInstance
  removeAuthToken: () => AxiosInstance
  refreshToken: (data: any) => Promise<ApiResponse<any, any>>
  getOrganization: () => Promise<ApiResponse<IOrganizations, IErrResponse>>
  getUserSettings: () => Promise<ApiResponse<IUserSettings, IErrResponse>>
  setOnServer: (baseURL: string) => AxiosInstance
  checkForUserInfo: (email: string) => Promise<ApiResponse<IUserExists, IErrResponse>>
  getNetworksInfo: (data: any) => any
}

export interface IGetTokensData {
  username: string;
  audience: string;
  scope: string;
  password: string;
  grant_type: string;
  realm: string;
  client_id: string;
}

export interface IAuthApi {
  setAuthToken: (userAuth: string) => AxiosInstance
  removeAuthToken: () => AxiosInstance
  getTokens: (data: IGetTokensData) => Promise<ApiResponse<IGetTokens, IErrResponse>>
  getUser: () => Promise<ApiResponse<IAuth0User, IErrResponse>>
  refreshToken: (data: any) => Promise<ApiResponse<any, any>>
}