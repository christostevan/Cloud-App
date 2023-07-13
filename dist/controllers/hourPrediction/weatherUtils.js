"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processWeatherConditions = exports.processData = void 0;
function processData(data) {
    const currentHour = new Date().getUTCHours();
    const hourlyData = data.hourly.time;
    let timeID = null;
    for (let i = 0; i < hourlyData.length; i++) {
        const date = new Date(hourlyData[i]);
        const hour = date.getUTCHours();
        if (hour === currentHour) {
            timeID = i;
            break;
        }
    }
    let processedWeatherData = null;
    if (timeID !== null) {
        processedWeatherData = processWeatherConditions(timeID, data.hourly);
        if (processedWeatherData !== null) {
            processedWeatherData = processWeatherConditions(timeID + 1, data.hourly);
        }
    }
    return processedWeatherData;
}
exports.processData = processData;
;
function processWeatherConditions(ID, data) {
    let weatherReport;
    if (data.snowfall[ID] >= 50) {
        weatherReport = {
            report: 'Heavy rain',
            timezone: 'UCT',
            time: `${ID - 1}:00`
        };
    }
    else if (data.rain[ID] >= 10) {
        weatherReport = {
            report: 'Heavy rain',
            timezone: 'UCT',
            time: `${ID - 1}:00`
        };
    }
    else if (data.rain[ID] > 0 && (data.temperature[ID] <= 0)) {
        weatherReport = {
            report: 'Hail',
            timezone: 'UCT',
            time: `${ID - 1}:00`
        };
    }
    else {
        weatherReport = {
            report: 'null',
            timezone: 'UCT',
            time: `${ID - 1}:00`
        };
    }
    return weatherReport;
}
exports.processWeatherConditions = processWeatherConditions;
//# sourceMappingURL=weatherUtils.js.map