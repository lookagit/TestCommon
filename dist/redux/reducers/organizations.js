"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.setOrganizationSuccess = exports.failure = exports.success = exports.request = exports.INITIAL_STATE = exports.OrganizationsTypes = void 0;
var reduxsauce_1 = require("reduxsauce");
var seamless_immutable_1 = __importDefault(require("seamless-immutable"));
var _b = reduxsauce_1.createActions({
    organizationsRequest: null,
    organizationsSuccess: ['organizations'],
    organizationsFailure: ['error'],
    setOrganizationsRequest: ['organizationId'],
    setOrganizationsSuccess: ['organizationId'],
    setOrganizationsFailure: ['error']
}), Types = _b.Types, Creators = _b.Creators;
exports.OrganizationsTypes = Types;
exports.default = Creators;
exports.INITIAL_STATE = seamless_immutable_1.default({
    organizationsArray: null,
    fetching: false,
    error: null,
    selectedOrganizationId: null,
});
exports.request = function (state) { return state.merge({ fetching: true }); };
exports.success = function (state, data) {
    var organizations = data.organizations;
    return state.merge({
        fetching: false,
        error: null,
        organizationsArray: organizations,
    });
};
exports.failure = function (state, _a) {
    var error = _a.error;
    return state.merge({
        fetching: false,
        error: error,
        organizationsArray: null
    });
};
exports.setOrganizationSuccess = function (state, _a) {
    var organizationId = _a.organizationId;
    return state.merge({
        selectedOrganizationId: organizationId,
        fetching: false,
        error: null,
    });
};
exports.reducer = reduxsauce_1.createReducer(exports.INITIAL_STATE, (_a = {},
    _a[Types.ORGANIZATIONS_REQUEST] = exports.request,
    _a[Types.ORGANIZATIONS_SUCCESS] = exports.success,
    _a[Types.ORGANIZATIONS_FAILURE] = exports.failure,
    _a[Types.SET_ORGANIZATIONS_REQUEST] = exports.request,
    _a[Types.SET_ORGANIZATIONS_SUCCESS] = exports.setOrganizationSuccess,
    _a[Types.SET_ORGANIZATIONS_FAILURE] = exports.failure,
    _a));
//# sourceMappingURL=organizations.js.map