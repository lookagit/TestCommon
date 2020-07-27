"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.failure = exports.success = exports.request = exports.INITIAL_STATE = exports.NetworkTypes = void 0;
var reduxsauce_1 = require("reduxsauce");
var seamless_immutable_1 = __importDefault(require("seamless-immutable"));
var _b = reduxsauce_1.createActions({
    networksRequest: null,
    networksSuccess: ['networks'],
    networksFailure: ['error'],
}), Types = _b.Types, Creators = _b.Creators;
exports.NetworkTypes = Types;
exports.default = Creators;
exports.INITIAL_STATE = seamless_immutable_1.default({
    networks: null,
    fetching: false,
    error: null
});
exports.request = function (state) { return state.merge({ fetching: true }); };
exports.success = function (state, data) {
    var networks = data.networks;
    return state.merge({
        fetching: false,
        error: null,
        networks: networks,
    });
};
exports.failure = function (state, _a) {
    var error = _a.error;
    return state.merge({
        fetching: false,
        error: error,
        networks: null
    });
};
exports.reducer = reduxsauce_1.createReducer(exports.INITIAL_STATE, (_a = {},
    _a[Types.NETWORKS_REQUEST] = exports.request,
    _a[Types.NETWORKS_SUCCESS] = exports.success,
    _a[Types.NETWORKS_FAILURE] = exports.failure,
    _a));
//# sourceMappingURL=networks.js.map