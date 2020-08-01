import { createReducer, createActions } from 'reduxsauce';
import Immutable, { ImmutableObject, ImmutableArray } from 'seamless-immutable';
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
  console.log("======data=======", data)
  let array = Immutable(state.userLogs);
  let arrayAppened = array.concat(data)
  console.log("___ARRAY+++", arrayAppened)
  // let helperArray: ImmutableArray<IUserLogsState> = [...state.userLogs, data]
  // state.userLogs.
  return state.merge({
    userLogs: arrayAppened,
  });
};

export const removeUserLog = (state: ImmutableObject<IUserLogsState>) => state.merge({
  userLogs: null,
});

export const reducer = createReducer<ImmutableObject<IUserLogsState>, SetLogsParamType>(INITIAL_STATE, {
  [Types.LOAD_LOG]: loadUserLog,
  [Types.REMOVE_LOG]: removeUserLog,
});