import { createReducer, createActions } from 'reduxsauce';
import Immutable, { ImmutableObject } from 'seamless-immutable';
import { IUserLogsState, SetLogsParamType, IUserLogsActionTypes } from '../../models/reducers/userLogs';
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions<IUserLogsActionTypes, {
  loadLog: (data: object) => SetLogsParamType,
  removeLog: () => SetLogsParamType,
}>({
      loadLog: ['data'],
      removeLog: null,
    });

export const UserLogsTypes = Types;
export default Creators;

export const INITIAL_STATE: ImmutableObject<IUserLogsState> = Immutable({
  userLogs: null,
});

export const loadUserLog = (state: ImmutableObject<IUserLogsState>, { data }: SetLogsParamType) => {
  return state.merge({
    userLogs: data,
  });
};

export const removeUserLog = (state: ImmutableObject<IUserLogsState>) => state.merge({
  userLogs: null,
});

export const reducer = createReducer<ImmutableObject<IUserLogsState>, SetLogsParamType>(INITIAL_STATE, {
  [Types.LOAD_LOG]: loadUserLog,
  [Types.REMOVE_LOG]: removeUserLog,
});