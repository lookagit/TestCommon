import { OrganizationTypesNames } from '../reducers/organizations';
export interface ISelectOrganizationParams {
    type: typeof OrganizationTypesNames;
    organizationId: string;
}
