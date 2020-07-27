import Immutable, { ImmutableObject } from 'seamless-immutable';
import { IOrganizationActionTypes, SetOrganizationParamType, IOrganizationState } from '../../models/reducers/organizations';
declare const Creators: {
    organizationsRequest: () => SetOrganizationParamType;
    organizationsSuccess: (data: object) => SetOrganizationParamType;
    organizationsFailure: (error: object) => SetOrganizationParamType;
    setOrganizationsRequest: (organizationId: string) => SetOrganizationParamType;
    setOrganizationsSuccess: (organizationId: string) => SetOrganizationParamType;
    setOrganizationsFailure: (error: object) => SetOrganizationParamType;
};
export declare const OrganizationsTypes: IOrganizationActionTypes;
export default Creators;
export declare const INITIAL_STATE: ImmutableObject<IOrganizationState>;
export declare const request: (state: ImmutableObject<IOrganizationState>) => Immutable.ImmutableObject<IOrganizationState>;
export declare const success: (state: ImmutableObject<IOrganizationState>, data: SetOrganizationParamType) => Immutable.ImmutableObject<IOrganizationState>;
export declare const failure: (state: ImmutableObject<IOrganizationState>, { error }: SetOrganizationParamType) => Immutable.ImmutableObject<IOrganizationState>;
export declare const setOrganizationSuccess: (state: ImmutableObject<IOrganizationState>, { organizationId }: SetOrganizationParamType) => Immutable.ImmutableObject<IOrganizationState>;
export declare const reducer: import("redux").Reducer<Immutable.ImmutableObject<IOrganizationState>, SetOrganizationParamType>;
