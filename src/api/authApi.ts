import apisauce, { ApiResponse } from 'apisauce';
import { IGetTokens, IErrResponse, IGetTokensData, IAuth0User } from '../models/api';

const create = (baseURL: string) => {

    const api = apisauce.create({
        baseURL,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            Accept: '*/*',
        },
        timeout: 10000
    });

    const setAuthToken = (userAuth: string) => api.setHeader('Authorization', 'Bearer ' + userAuth);
    const removeAuthToken = () => api.deleteHeader('Authorization');
    const getTokens = (data: IGetTokensData): Promise<ApiResponse<IGetTokens, IErrResponse>> => api.post<IGetTokens, IErrResponse>('oauth/token', data);
    const getUser = (): Promise<ApiResponse<IAuth0User, IErrResponse>> => api.get<IAuth0User, IErrResponse>('userinfo');
    const refreshToken = (data: any) => api.post('/refresh-token', data);

    return {
        setAuthToken,
        removeAuthToken,
        getTokens,
        getUser,
        refreshToken
    };
};

// let's return back our create method as the default.
export default {
    create
};