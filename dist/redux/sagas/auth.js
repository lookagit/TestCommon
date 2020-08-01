"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginLoad = exports.logout = exports.refresh = exports.initialAuthFromStoage = exports.login = exports.selectOrganizations = void 0;
var effects_1 = require("redux-saga/effects");
var moment_timezone_1 = __importDefault(require("moment-timezone"));
var call_api_saga_1 = require("./call-api-saga");
var organizations_1 = __importDefault(require("../reducers/organizations"));
var userInfo_1 = __importDefault(require("../reducers/userInfo"));
var userSettings_1 = __importDefault(require("../reducers/userSettings"));
var auth_1 = __importDefault(require("../reducers/auth"));
var navigation_1 = __importDefault(require("../../navigation"));
var __1 = require("../..");
var AUDIENCE = 'https://smart.server/';
var SCOPE = 'openid profile offline_access email app:normal';
var selectAuth = function (state) { return state.auth; };
var selectUserInfo = function (state) { return state.userInfo; };
var selectRouter = function (state) { return state.router; };
exports.selectOrganizations = function (state) { return state.organizations; };
function login(api, auth0Api, _a) {
    var checkUserCall, responseFromCheckUser, userFound, data, _b, auth_connection, app_server, fetchAuthCall, fetchAuth, authData, authPass, id_token, refresh_token, access_token, expires_in, getUserCall, getUserFetch, orgName, userData, profileFetchSuccess, _c, sub, nickname, name, picture, updated_at, emailFromAuth, email_verified, _d, orgs, firstOrgId, timezone, getOrganizationCall, responseGetOrganizations, organizationsData, getOrganizationsSuccess, getUserSettings, _e, getUserSettingsData, getUserSettingsSuccess;
    var email = _a.email, password = _a.password;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                if (!(email === '')) return [3 /*break*/, 2];
                return [4 /*yield*/, effects_1.put(auth_1.default.loginFailureField('Email cannot be empty', 'email'))];
            case 1:
                _f.sent();
                return [2 /*return*/];
            case 2:
                if (!(password === '')) return [3 /*break*/, 4];
                return [4 /*yield*/, effects_1.put(auth_1.default.loginFailure({ error: 'Password cannot be empty' }))];
            case 3:
                _f.sent();
                return [2 /*return*/];
            case 4:
                checkUserCall = effects_1.call(api.checkForUserInfo, email);
                return [4 /*yield*/, effects_1.call(call_api_saga_1.callApi, checkUserCall, api)];
            case 5:
                responseFromCheckUser = _f.sent();
                userFound = responseFromCheckUser.ok, data = responseFromCheckUser.data;
                if (!(userFound && data && data.error !== -112)) return [3 /*break*/, 28];
                _b = data.data, auth_connection = _b.auth_connection, app_server = _b.app_server;
                fetchAuthCall = effects_1.call(auth0Api.getTokens, {
                    username: email,
                    audience: AUDIENCE,
                    scope: SCOPE,
                    password: password,
                    grant_type: 'http://auth0.com/oauth/grant-type/password-realm',
                    realm: auth_connection,
                    client_id: 'KqABZJJuUTKNbQROYcxrIpJecLi1Nk19',
                });
                return [4 /*yield*/, effects_1.call(call_api_saga_1.callApi, fetchAuthCall, auth0Api)];
            case 6:
                fetchAuth = _f.sent();
                authData = fetchAuth.data, authPass = fetchAuth.ok;
                if (!(authPass && authData)) return [3 /*break*/, 25];
                id_token = authData.id_token, refresh_token = authData.refresh_token, access_token = authData.access_token, expires_in = authData.expires_in;
                return [4 /*yield*/, effects_1.call(api.setAuthToken, access_token)];
            case 7:
                _f.sent();
                return [4 /*yield*/, effects_1.call(auth0Api.setAuthToken, access_token)];
            case 8:
                _f.sent();
                getUserCall = effects_1.call(auth0Api.getUser);
                return [4 /*yield*/, effects_1.call(call_api_saga_1.callApi, getUserCall, auth0Api)];
            case 9:
                getUserFetch = _f.sent();
                orgName = 'https://smart.server/claims/organizations';
                userData = getUserFetch.data, profileFetchSuccess = getUserFetch.ok;
                if (!(profileFetchSuccess && userData)) return [3 /*break*/, 24];
                _c = userData, sub = _c.sub, nickname = _c.nickname, name = _c.name, picture = _c.picture, updated_at = _c.updated_at, emailFromAuth = _c.email, email_verified = _c.email_verified, _d = orgName, orgs = _c[_d];
                firstOrgId = orgs[0];
                return [4 /*yield*/, effects_1.put(auth_1.default.loginSuccess(authData))];
            case 10:
                _f.sent();
                return [4 /*yield*/, effects_1.put(userInfo_1.default.userInfoSuccess(userData))];
            case 11:
                _f.sent();
                timezone = moment_timezone_1.default.tz.guess(true);
                api.setOnServer(app_server);
                api.setTimezoneHeader(timezone);
                api.setAuthTokenForServer(access_token);
                api.setOrganizationHeader(firstOrgId.org_id);
                getOrganizationCall = effects_1.call(api.getOrganization);
                return [4 /*yield*/, effects_1.call(call_api_saga_1.callApi, getOrganizationCall, api)];
            case 12:
                responseGetOrganizations = _f.sent();
                organizationsData = responseGetOrganizations.data, getOrganizationsSuccess = responseGetOrganizations.ok;
                getUserSettings = effects_1.call(api.getUserSettings);
                return [4 /*yield*/, effects_1.call(call_api_saga_1.callApi, getUserSettings, api)];
            case 13:
                _e = _f.sent(), getUserSettingsData = _e.data, getUserSettingsSuccess = _e.ok;
                if (!(getUserSettingsSuccess && getUserSettingsData)) return [3 /*break*/, 15];
                return [4 /*yield*/, effects_1.put(userSettings_1.default.userSettingsSuccess(getUserSettingsData.data))];
            case 14:
                _f.sent();
                _f.label = 15;
            case 15:
                if (!(getOrganizationsSuccess && organizationsData)) return [3 /*break*/, 17];
                return [4 /*yield*/, effects_1.put(organizations_1.default.organizationsSuccess(organizationsData.data))];
            case 16:
                _f.sent();
                _f.label = 17;
            case 17:
                if (!(getOrganizationsSuccess && organizationsData && organizationsData.data && organizationsData.data.length > 1)) return [3 /*break*/, 19];
                return [4 /*yield*/, effects_1.call(function () { return navigation_1.default.push('/home', { showModal: true }); })];
            case 18:
                _f.sent();
                _f.label = 19;
            case 19:
                if (!(getOrganizationsSuccess && organizationsData && organizationsData.data && organizationsData.data.length === 1)) return [3 /*break*/, 22];
                return [4 /*yield*/, effects_1.put(organizations_1.default.setOrganizationsSuccess(firstOrgId.org_id))];
            case 20:
                _f.sent();
                return [4 /*yield*/, effects_1.call(function () { return navigation_1.default.push('/home'); })];
            case 21:
                _f.sent();
                _f.label = 22;
            case 22: return [4 /*yield*/, effects_1.put(__1.UserLogsActions.loadLog(__assign(__assign({}, userData), { numOfOrganizations: organizationsData.data.length })))];
            case 23:
                _f.sent();
                _f.label = 24;
            case 24: return [3 /*break*/, 27];
            case 25: return [4 /*yield*/, effects_1.put(auth_1.default.loginFailure({ error: 'Bad credentials' } || { error: 'Network Error' }))];
            case 26:
                _f.sent();
                _f.label = 27;
            case 27: return [3 /*break*/, 30];
            case 28: return [4 /*yield*/, effects_1.put(auth_1.default.loginFailure({ error: 'User not found' } || { error: 'Network Error' }))];
            case 29:
                _f.sent();
                _f.label = 30;
            case 30: return [2 /*return*/];
        }
    });
}
exports.login = login;
function initialAuthFromStoage(_a) {
    var id_token = _a.id_token, refresh_token = _a.refresh_token, access_token = _a.access_token, expires_in = _a.expires_in;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, effects_1.put(auth_1.default.initStorage(id_token, refresh_token, access_token, expires_in))];
            case 1:
                _b.sent();
                return [2 /*return*/];
        }
    });
}
exports.initialAuthFromStoage = initialAuthFromStoage;
function refresh(api, _a) {
    var authObj, apiCall, response;
    var authRefresh = _a.authRefresh;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                authObj = {
                    refreshToken: authRefresh
                };
                apiCall = effects_1.call(api.refreshToken, authObj);
                return [4 /*yield*/, effects_1.call(call_api_saga_1.callApi, apiCall, api)];
            case 1:
                response = _b.sent();
                return [2 /*return*/];
        }
    });
}
exports.refresh = refresh;
// attempts to logout
function logout(api) {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.put(auth_1.default.logoutSuccess())];
            case 1:
                _a.sent();
                return [4 /*yield*/, effects_1.call(function () { return navigation_1.default.replace('/'); })];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.logout = logout;
// loads the login
function loginLoad(api) {
    var auth, router, userInfo, email, checkUserCall, responseFromCheckUser, userFound, data, appServer, organizations;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.select(selectAuth)];
            case 1:
                auth = _a.sent();
                return [4 /*yield*/, effects_1.select(selectRouter)];
            case 2:
                router = _a.sent();
                if (!(auth && auth.accessToken)) return [3 /*break*/, 8];
                return [4 /*yield*/, effects_1.select(selectUserInfo)];
            case 3:
                userInfo = _a.sent();
                if (!(userInfo.userInfoData && userInfo.userInfoData.email_verified)) return [3 /*break*/, 5];
                email = userInfo.userInfoData.email;
                checkUserCall = effects_1.call(api.checkForUserInfo, email);
                return [4 /*yield*/, effects_1.call(call_api_saga_1.callApi, checkUserCall, api)];
            case 4:
                responseFromCheckUser = _a.sent();
                userFound = responseFromCheckUser.ok, data = responseFromCheckUser.data;
                if (userFound && data && data.error !== -112) {
                    appServer = data.data.app_server;
                    api.setOnServer(appServer);
                }
                _a.label = 5;
            case 5: return [4 /*yield*/, effects_1.select(exports.selectOrganizations)];
            case 6:
                organizations = _a.sent();
                if (organizations && organizations.organizationsArray) {
                    api.setOrganizationHeader(organizations.organizationsArray[0]._id);
                }
                api.setTimezoneHeader(auth.tzIana);
                api.setAuthTokenForServer(auth.accessToken);
                if (!(router && router.location && router.location.pathname === '/')) return [3 /*break*/, 8];
                return [4 /*yield*/, effects_1.call(function () { return navigation_1.default.replace('/home'); })];
            case 7:
                _a.sent();
                _a.label = 8;
            case 8:
                if (!(auth && !auth.accessToken)) return [3 /*break*/, 10];
                return [4 /*yield*/, effects_1.call(function () { return navigation_1.default.replace('/'); })];
            case 9:
                _a.sent();
                _a.label = 10;
            case 10: return [4 /*yield*/, effects_1.put(auth_1.default.loginLoadSuccess())];
            case 11:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.loginLoad = loginLoad;
//# sourceMappingURL=auth.js.map