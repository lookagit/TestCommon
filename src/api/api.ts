import apisauce, { ApiResponse } from 'apisauce';
import { IErrResponse, IOrganizations, IUserSettings, IUserExists } from '../models/api';

const create = (baseURL: string ) => {

  const api = apisauce.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Accept: 'application/json',
      'X-Smart-Client': 'mobile'
    },
    timeout: 300000
  });

  const setAuthToken = (userAuth: string) => api.setHeader('Authorization', 'Bearer ' + userAuth);
  const setAuthTokenForServer = (userAuth: string) => api.setHeader('Authorization', userAuth);
  const setOrganizationHeader = (orgHeader: string) => api.setHeader('X-Selected-Organization', orgHeader);
  const setTimezoneHeader = (timezoneString: string) => api.setHeader('X-Device-Timezone-IANA', timezoneString);
  const removeAuthToken = () => api.deleteHeader('Authorization');
  const refreshToken = (data: any) => api.post('user/refresh-token', data);
  const getOrganization = (): Promise<ApiResponse<IOrganizations, IErrResponse>> => api.get<IOrganizations, IErrResponse>('/dash/organization');
  const getUserSettings = (): Promise<ApiResponse<IUserSettings, IErrResponse>> => api.get<IUserSettings, IErrResponse>('/dash/user_settings');
  const checkForUserInfo = (email: string): Promise<ApiResponse<IUserExists, IErrResponse>> => api.get<IUserExists, IErrResponse>(`/${email}`);
  const setOnServer = (baseURL: string) => api.setBaseURL(`https://${baseURL}`);
  const getNetworksInfo = (data: any) => api.post('/dash/smart_routers', data);
  return {
    setAuthToken,
    removeAuthToken,
    refreshToken,
    checkForUserInfo,
    setOnServer,
    setTimezoneHeader,
    setAuthTokenForServer,
    getOrganization,
    setOrganizationHeader,
    getUserSettings,
    getNetworksInfo
  };
};

// let's return back our create method as the default.
export default {
  create
};