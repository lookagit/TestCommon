"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.removeUserLog = exports.loadUserLog = exports.INITIAL_STATE = exports.UserLogsTypes = void 0;
var reduxsauce_1 = require("reduxsauce");
var seamless_immutable_1 = __importDefault(require("seamless-immutable"));
/* ------------- Types and Action Creators ------------- */
var _b = reduxsauce_1.createActions({
    loadLog: ['data'],
    removeLog: null,
}), Types = _b.Types, Creators = _b.Creators;
exports.UserLogsTypes = Types;
exports.default = Creators;
exports.INITIAL_STATE = seamless_immutable_1.default({
    userLogs: null,
});
exports.loadUserLog = function (state, _a) {
    var data = _a.data;
    console.log("======data=======", data);
    if (state.userLogs !== null) {
        // let array = Immutable(state.userLogs);
        // let arrayAppened = array.concat(data)
        // console.log("___ARRAY+++", arrayAppened);
        // return state.merge({
        //   userLogs: arrayAppened,
        // });
        var array = seamless_immutable_1.default(state.userLogs);
        var mutableArray = seamless_immutable_1.default.asMutable(array);
        mutableArray.push(data);
        return state.merge({
            userLogs: mutableArray,
        });
    }
    return state.merge({
        userLogs: [data],
    });
};
exports.removeUserLog = function (state) { return state.merge({
    userLogs: null,
}); };
exports.reducer = reduxsauce_1.createReducer(exports.INITIAL_STATE, (_a = {},
    _a[Types.LOAD_LOG] = exports.loadUserLog,
    _a[Types.REMOVE_LOG] = exports.removeUserLog,
    _a));
//# sourceMappingURL=userLogs.js.map