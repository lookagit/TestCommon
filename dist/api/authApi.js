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
            "Content-Type": "application/json; charset=utf-8",
            Accept: '*/*',
        },
        timeout: 10000
    });
    var setAuthToken = function (userAuth) { return api.setHeader('Authorization', 'Bearer ' + userAuth); };
    var removeAuthToken = function () { return api.deleteHeader('Authorization'); };
    var getTokens = function (data) { return api.post('oauth/token', data); };
    var getUser = function () { return api.get('userinfo'); };
    var refreshToken = function (data) { return api.post('/refresh-token', data); };
    return {
        setAuthToken: setAuthToken,
        removeAuthToken: removeAuthToken,
        getTokens: getTokens,
        getUser: getUser,
        refreshToken: refreshToken
    };
};
// let's return back our create method as the default.
exports.default = {
    create: create
};
//# sourceMappingURL=authApi.js.map