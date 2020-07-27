"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apisauce_1 = __importDefault(require("apisauce"));
var create = function (baseURL) {
    var api = apisauce_1.default.create({
        baseURL: baseURL,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            Accept: 'application/json',
            'X-Smart-Client': 'mobile'
        },
        timeout: 300000
    });
    var setAuthToken = function (userAuth) { return api.setHeader('Authorization', 'Bearer ' + userAuth); };
    var setAuthTokenForServer = function (userAuth) { return api.setHeader('Authorization', userAuth); };
    var setOrganizationHeader = function (orgHeader) { return api.setHeader('X-Selected-Organization', orgHeader); };
    var setTimezoneHeader = function (timezoneString) { return api.setHeader('X-Device-Timezone-IANA', timezoneString); };
    var removeAuthToken = function () { return api.deleteHeader('Authorization'); };
    var refreshToken = function (data) { return api.post('user/refresh-token', data); };
    var getOrganization = function () { return api.get('/dash/organization'); };
    var getUserSettings = function () { return api.get('/dash/user_settings'); };
    var checkForUserInfo = function (email) { return api.get("/" + email); };
    var setOnServer = function (baseURL) { return api.setBaseURL("https://" + baseURL); };
    var getNetworksInfo = function (data) { return api.post('/dash/smart_routers', data); };
    return {
        setAuthToken: setAuthToken,
        removeAuthToken: removeAuthToken,
        refreshToken: refreshToken,
        checkForUserInfo: checkForUserInfo,
        setOnServer: setOnServer,
        setTimezoneHeader: setTimezoneHeader,
        setAuthTokenForServer: setAuthTokenForServer,
        getOrganization: getOrganization,
        setOrganizationHeader: setOrganizationHeader,
        getUserSettings: getUserSettings,
        getNetworksInfo: getNetworksInfo
    };
};
// let's return back our create method as the default.
exports.default = {
    create: create
};
//# sourceMappingURL=api.js.map