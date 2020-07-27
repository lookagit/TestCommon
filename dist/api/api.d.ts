import { ApiResponse } from 'apisauce';
import { IErrResponse, IOrganizations, IUserSettings, IUserExists } from '../models/api';
declare const _default: {
    create: (baseURL: string) => {
        setAuthToken: (userAuth: string) => import("axios").AxiosInstance;
        removeAuthToken: () => import("axios").AxiosInstance;
        refreshToken: (data: any) => Promise<ApiResponse<unknown, unknown>>;
        checkForUserInfo: (email: string) => Promise<ApiResponse<IUserExists, IErrResponse>>;
        setOnServer: (baseURL: string) => import("axios").AxiosInstance;
        setTimezoneHeader: (timezoneString: string) => import("axios").AxiosInstance;
        setAuthTokenForServer: (userAuth: string) => import("axios").AxiosInstance;
        getOrganization: () => Promise<ApiResponse<IOrganizations, IErrResponse>>;
        setOrganizationHeader: (orgHeader: string) => import("axios").AxiosInstance;
        getUserSettings: () => Promise<ApiResponse<IUserSettings, IErrResponse>>;
        getNetworksInfo: (data: any) => Promise<ApiResponse<unknown, unknown>>;
    };
};
export default _default;
