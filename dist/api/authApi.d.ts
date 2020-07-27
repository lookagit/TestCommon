import { ApiResponse } from 'apisauce';
import { IGetTokens, IErrResponse, IGetTokensData, IAuth0User } from '../models/api';
declare const _default: {
    create: (baseURL: string) => {
        setAuthToken: (userAuth: string) => import("axios").AxiosInstance;
        removeAuthToken: () => import("axios").AxiosInstance;
        getTokens: (data: IGetTokensData) => Promise<ApiResponse<IGetTokens, IErrResponse>>;
        getUser: () => Promise<ApiResponse<IAuth0User, IErrResponse>>;
        refreshToken: (data: any) => Promise<ApiResponse<unknown, unknown>>;
    };
};
export default _default;
