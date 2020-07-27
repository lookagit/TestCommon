"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.navigateAndResetStack = exports.replace = exports.goBack = exports.push = exports.setNavigator = void 0;
var react_navigation_1 = require("react-navigation");
var config = null;
function setNavigator(nav) {
    if (nav) {
        config.navigator = nav;
    }
}
exports.setNavigator = setNavigator;
function push(routeName, params) {
    if (config.navigator && routeName) {
        var action = react_navigation_1.NavigationActions.navigate({ routeName: routeName, params: params });
        config.navigator.dispatch(action);
    }
}
exports.push = push;
function goBack() {
    if (config.navigator) {
        var action = react_navigation_1.NavigationActions.back({});
        config.navigator.dispatch(action);
    }
}
exports.goBack = goBack;
function replace(routeName, params) {
    if (config.navigator) {
        var action = react_navigation_1.StackActions.replace({ routeName: routeName, params: params });
        config.navigator.dispatch(action);
    }
}
exports.replace = replace;
function navigateAndResetStack(routeName, params) {
    if (config.navigator && routeName) {
        var action = react_navigation_1.NavigationActions.navigate({ routeName: routeName, params: params });
        config.navigator.dispatch(react_navigation_1.StackActions.reset({
            index: 0,
            actions: [action]
        }));
    }
}
exports.navigateAndResetStack = navigateAndResetStack;
//# sourceMappingURL=NavigationService.native.js.map