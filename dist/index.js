"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.utils = exports.authApi = exports.api = void 0;
var api_1 = require("./api");
Object.defineProperty(exports, "api", { enumerable: true, get: function () { return api_1.api; } });
Object.defineProperty(exports, "authApi", { enumerable: true, get: function () { return api_1.authApi; } });
var utils_1 = __importDefault(require("./utils"));
exports.utils = utils_1.default;
//# sourceMappingURL=index.js.map