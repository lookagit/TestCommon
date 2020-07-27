"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.logoutSuccess = exports.logoutRequest = exports.initStorageFailure = exports.initStorageRequest = exports.initStorage = exports.refreshFailure = exports.refreshSuccess = exports.refresh = exports.loadSuccess = exports.load = exports.loginFailureField = exports.failure = exports.success = exports.request = exports.INITIAL_STATE = exports.LoginTypes = void 0;
var reduxsauce_1 = require("reduxsauce");
var seamless_immutable_1 = __importDefault(require("seamless-immutable"));
var moment_timezone_1 = __importDefault(require("moment-timezone"));
/* ------------- Types and Action Creators ------------- */
var _b = reduxsauce_1.createActions({
    loginRequest: ['email', 'password'],
    loginSuccess: ['data'],
    loginFailure: ['error'],
    loginFailureField: ['message', 'field'],
    logoutRequest: null,
    logoutSuccess: null,
    loginLoad: [],
    loginLoadSuccess: [],
    refreshRequest: ['authRefresh'],
    refreshSuccess: ['authToken'],
    refreshFailure: ['error'],
    initStorageRequest: ['id_token', 'refresh_token', 'access_token', 'expires_in'],
    initStorage: ['id_token', 'refresh_token', 'access_token', 'expires_in'],
    initStorageFailure: ['error']
}), Types = _b.Types, Creators = _b.Creators;
exports.LoginTypes = Types;
exports.default = Creators;
/* ------------- Initial State ------------- */
exports.INITIAL_STATE = seamless_immutable_1.default({
    authToken: null,
    authRefresh: null,
    accessToken: null,
    millisecondsToExpire: null,
    error: null,
    refresh: false,
    emailError: null,
    fetching: false,
    loading: false,
    tzIana: moment_timezone_1.default.tz.guess(true)
});
/* ------------- Reducers ------------- */
// we're attempting to login
exports.request = function (state) { return state.merge({ fetching: true, error: null }); };
// we've successfully logged in
exports.success = function (state, data) {
    var _a = data.data, access_token = _a.access_token, expires_in = _a.expires_in, id_token = _a.id_token, refresh_token = _a.refresh_token;
    return state.merge({
        fetching: false,
        error: null,
        emailError: null,
        authToken: id_token,
        authRefresh: refresh_token,
        accessToken: access_token,
        millisecondsToExpire: expires_in
    });
};
// we've had a problem logging in
exports.failure = function (state, _a) {
    var error = _a.error;
    return state.merge({
        fetching: false,
        error: error,
        emailError: null,
        authToken: null,
        authRefresh: null,
        millisecondsToExpire: null
    });
};
// we've had a problem with some bad field value
exports.loginFailureField = function (state, _a) {
    var _b;
    var message = _a.message, field = _a.field;
    return state.merge((_b = {
            fetching: false,
            error: null
        },
        _b[field + "Error"] = message,
        _b.authToken = null,
        _b.authRefresh = null,
        _b.millisecondsToExpire = null,
        _b));
};
// we're attempting to load token from startup sagas
exports.load = function (state) { return state.merge({ loading: true, fetching: true }); };
exports.loadSuccess = function (state) { return state.merge({ loading: false, fetching: false }); };
// we're attempting to load token from startup sagas
exports.refresh = function (state) { return state.merge({ refresh: true }); };
exports.refreshSuccess = function (state, _a) {
    var authToken = _a.authToken;
    return state.merge({ refresh: false });
};
exports.refreshFailure = function (state, _a) {
    var error = _a.error;
    return state.merge({
        error: error,
        fetching: false,
        refresh: false,
        authToken: null,
        authRefresh: null
    });
};
exports.initStorage = function (state, data) {
    var id_token = data.id_token, refresh_token = data.refresh_token, access_token = data.access_token, expires_in = data.expires_in;
    return state.merge({
        fetching: false,
        error: null,
        emailError: null,
        authToken: id_token,
        authRefresh: refresh_token,
        accessToken: access_token,
        millisecondsToExpire: expires_in
    });
};
exports.initStorageRequest = function (state) { return exports.INITIAL_STATE; };
exports.initStorageFailure = function (state) { return exports.INITIAL_STATE; };
// we need to logout, meaning clear access tokens and account
exports.logoutRequest = function (state) { return exports.INITIAL_STATE; };
// we've logged out
exports.logoutSuccess = function (state) { return exports.INITIAL_STATE; };
/* ------------- Hookup Reducers To Types ------------- */
exports.reducer = reduxsauce_1.createReducer(exports.INITIAL_STATE, (_a = {},
    _a[Types.LOGIN_REQUEST] = exports.request,
    _a[Types.LOGIN_SUCCESS] = exports.success,
    _a[Types.LOGIN_FAILURE] = exports.failure,
    _a[Types.LOGIN_LOAD] = exports.load,
    _a[Types.LOGIN_LOAD_SUCCESS] = exports.loadSuccess,
    _a[Types.LOGOUT_REQUEST] = exports.logoutRequest,
    _a[Types.LOGOUT_SUCCESS] = exports.logoutSuccess,
    _a[Types.REFRESH_REQUEST] = exports.refresh,
    _a[Types.REFRESH_SUCCESS] = exports.refreshSuccess,
    _a[Types.REFRESH_FAILURE] = exports.refreshFailure,
    _a[Types.LOGIN_FAILURE_FIELD] = exports.loginFailureField,
    _a[Types.INIT_STORAGE_REQUEST] = exports.initStorageRequest,
    _a[Types.INIT_STORAGE] = exports.initStorage,
    _a[Types.INIT_STORAGE_FAILURE] = exports.initStorageFailure,
    _a));
/* ------------- Selectors ------------- */ 
//# sourceMappingURL=auth.js.map