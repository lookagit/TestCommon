/// <reference types="connected-react-router" />
import { IApi } from '../../models/api';
import { OrganizationTypesNames } from '../../models/reducers/organizations';
interface ISelectOrganizationParams {
    type: typeof OrganizationTypesNames;
    organizationId: string;
}
export declare function selectOrganization(api: IApi, { organizationId }: ISelectOrganizationParams): Generator<import("redux-saga/effects").PutEffect<import("../../models/reducers/organizations").SetOrganizationParamType> | import("redux-saga/effects").PutEffect<import("connected-react-router").CallHistoryMethodAction<[string, {}?]>> | import("redux-saga/effects").PutEffect<import("../../models/reducers/networks").NetworksParamTypes>, void, unknown>;
export {};
