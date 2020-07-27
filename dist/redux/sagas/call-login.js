"use strict";
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
exports.callApi = exports.selectAuthRefresh = exports.selectAuthToken = void 0;
var effects_1 = require("redux-saga/effects");
var auth_1 = __importDefault(require("../reducers/auth"));
exports.selectAuthToken = function (state) { return state.auth.accessToken; };
exports.selectAuthRefresh = function (state) { return state.auth.authRefresh; };
function callApi(apiCall, api) {
    var response, AuthToken, authRefresh, authObj, status, responseRefresh, data, ok;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, apiCall];
            case 1:
                response = _a.sent();
                if (!isUnauthorized(response)) {
                    return [2 /*return*/, response];
                }
                return [4 /*yield*/, effects_1.select(exports.selectAuthToken)];
            case 2:
                AuthToken = _a.sent();
                return [4 /*yield*/, effects_1.select(exports.selectAuthRefresh)];
            case 3:
                authRefresh = _a.sent();
                authObj = {
                    refreshToken: authRefresh
                };
                status = response.status;
                if (!(status === 401)) return [3 /*break*/, 11];
                return [4 /*yield*/, effects_1.call(api.removeAuthToken)];
            case 4:
                _a.sent();
                if (!authRefresh) return [3 /*break*/, 10];
                return [4 /*yield*/, effects_1.call(api.refreshToken, authObj)];
            case 5:
                responseRefresh = _a.sent();
                data = responseRefresh.data, ok = responseRefresh.ok;
                if (!ok) return [3 /*break*/, 8];
                return [4 /*yield*/, effects_1.call(api.setAuthToken, data.idToken)];
            case 6:
                _a.sent();
                return [4 /*yield*/, effects_1.put(auth_1.default.refreshSuccess(data.idToken))];
            case 7:
                _a.sent();
                return [3 /*break*/, 10];
            case 8: return [4 /*yield*/, effects_1.put(auth_1.default.logoutRequest())];
            case 9:
                _a.sent();
                _a.label = 10;
            case 10: return [3 /*break*/, 13];
            case 11:
                if (!AuthToken) return [3 /*break*/, 13];
                return [4 /*yield*/, effects_1.call(api.setAuthToken, AuthToken)];
            case 12:
                _a.sent();
                _a.label = 13;
            case 13: return [4 /*yield*/, apiCall];
            case 14: return [2 /*return*/, _a.sent()];
        }
    });
}
exports.callApi = callApi;
function isUnauthorized(resp) {
    return resp.status === 403 || resp.status === 401;
}
//# sourceMappingURL=call-login.js.map