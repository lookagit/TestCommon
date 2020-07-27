"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateNetworkHealth = void 0;
function calculateNetworkHealth(health, status) {
    var lightGreen = "#6EE294";
    var orange = "#FF993A";
    var reddish = "#FF3563";
    var butterScotch = "#FFC12F";
    if (status === 'ack') {
        return {
            color: '#f0f0f0',
            health: null
        };
    }
    if (!health) {
        return {
            color: reddish,
            health: 0
        };
    }
    var calculateHealth = health / 20;
    var roundedHealth = Math.round(calculateHealth);
    switch (roundedHealth) {
        case 0:
            return {
                color: reddish,
                health: roundedHealth
            };
        case 1:
            return {
                color: orange,
                health: roundedHealth
            };
        case 2:
        case 3:
            return {
                color: butterScotch,
                health: roundedHealth
            };
        case 4:
        case 5:
            return {
                color: lightGreen,
                health: roundedHealth
            };
        default:
            return {
                color: reddish,
                health: null
            };
    }
}
exports.calculateNetworkHealth = calculateNetworkHealth;
//# sourceMappingURL=networkHealth.js.map