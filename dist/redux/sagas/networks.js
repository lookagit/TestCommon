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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNetworks = exports.getUserSettings = void 0;
var effects_1 = require("redux-saga/effects");
var call_api_saga_1 = require("./call-api-saga");
var networks_1 = __importDefault(require("../reducers/networks"));
exports.getUserSettings = function (state) { return state.userSettings; };
function getNetworks(api) {
    var userSettingsData, networks_table_order, networks_table_settings, visible_items, _a, order, id, data, checkNetworksCall, _b, responseFromCheckUser, ok, data_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, effects_1.select(exports.getUserSettings)];
            case 1:
                userSettingsData = (_c.sent()).userSettingsData;
                networks_table_order = userSettingsData.networks_table_order, networks_table_settings = userSettingsData.networks_table_settings;
                visible_items = networks_table_order.visible_items;
                _a = networks_table_settings.sort, order = _a.order, id = _a.id;
                console.log("VISIBLE ITEMS ", visible_items);
                data = {
                    attributes: __spreadArrays(["network_name", "mode"], visible_items),
                    start: 0,
                    order: [{ field: id, dir: order }],
                    length: 200,
                    filter: [],
                    search: ""
                };
                checkNetworksCall = effects_1.call(api.getNetworksInfo, data);
                return [4 /*yield*/, effects_1.call(call_api_saga_1.callApi, checkNetworksCall, api)];
            case 2:
                _b = _c.sent(), responseFromCheckUser = _b.data, ok = _b.ok;
                if (!ok) return [3 /*break*/, 4];
                data_1 = responseFromCheckUser.data;
                console.log("JA SAM ORGANIZATIONS ", data_1);
                return [4 /*yield*/, effects_1.put(networks_1.default.networksSuccess(data_1))];
            case 3:
                _c.sent();
                _c.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}
exports.getNetworks = getNetworks;
//# sourceMappingURL=networks.js.map