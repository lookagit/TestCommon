"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.failure = exports.success = exports.request = exports.INITIAL_STATE = exports.UserInfoTypes = void 0;
var reduxsauce_1 = require("reduxsauce");
var seamless_immutable_1 = __importDefault(require("seamless-immutable"));
/* ------------- Types and Action Creators ------------- */
var _b = reduxsauce_1.createActions({
    userInfoRequest: null,
    userInfoSuccess: ['data'],
    userInfoFailure: ['error'],
}), Types = _b.Types, Creators = _b.Creators;
exports.UserInfoTypes = Types;
exports.default = Creators;
exports.INITIAL_STATE = seamless_immutable_1.default({
    userInfoData: null,
    error: null,
    fetching: false,
    loading: false,
});
exports.request = function (state) { return state.merge({
    fetching: true
}); };
exports.success = function (state, _a) {
    var data = _a.data;
    return state.merge({
        fetching: false,
        error: null,
        userInfoData: data
    });
};
exports.failure = function (state, _a) {
    var error = _a.error;
    return state.merge({
        fetching: false,
        error: error,
    });
};
exports.reducer = reduxsauce_1.createReducer(exports.INITIAL_STATE, (_a = {},
    _a[Types.USER_INFO_REQUEST] = exports.request,
    _a[Types.USER_INFO_SUCCESS] = exports.success,
    _a[Types.USER_INFO_FAILURE] = exports.failure,
    _a));
//# sourceMappingURL=userInfo.js.map