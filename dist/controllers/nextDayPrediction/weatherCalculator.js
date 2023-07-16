"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scanSoilFrost = exports.scanTemperature = exports.processNextDayWeather = void 0;
function processNextDayWeather(data) {
    let result;
    let temperatureResult;
    let soilFrostResult;
    console.log(data);
    if (data !== null) {
        temperatureResult = scanTemperature(data.temperature_2m);
        soilFrostResult = scanSoilFrost(data.soil_temperature_54cm);
    }
    if (temperatureResult !== null) {
        result = {
            result: true,
            type: 'Temperature'
        };
    }
    else if (soilFrostResult !== null) {
        result = {
            result: true,
            type: 'Soil frost'
        };
    }
    else {
        result = {
            result: false,
        };
    }
    return result;
}
exports.processNextDayWeather = processNextDayWeather;
;
function scanTemperature(data) {
    let result = null;
    for (const item in data) {
        if (data.hasOwnProperty(item)) {
            const temperature = data[item];
            if (temperature > 25) {
                result = temperature;
                break;
            }
        }
    }
    return result;
}
exports.scanTemperature = scanTemperature;
;
function scanSoilFrost(data) {
    let result = null;
    for (const item in data) {
        if (data.hasOwnProperty(item)) {
            const temperature = data[item];
            if (temperature < 18) {
                result = temperature;
                break;
            }
        }
    }
    return result;
}
exports.scanSoilFrost = scanSoilFrost;
;
//# sourceMappingURL=weatherCalculator.js.map