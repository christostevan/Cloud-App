"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processData = exports.currentWeather = void 0;
const axios_1 = __importDefault(require("axios"));
const currentWeather = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { longitude, latitude } = req.query;
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,rain,snowfall&forecast_days=1`;
        const response = yield axios_1.default.get(url);
        const data = response.data;
        const processedData = yield processData(data);
        res.json(processedData);
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the weather data.' });
    }
});
exports.currentWeather = currentWeather;
function processData(data) {
    const currentHour = new Date().getUTCHours();
    const hourlyData = data.hourly.time;
    let timeID = null;
    for (let i = 0; i < hourlyData.length; i++) {
        const date = new Date(hourlyData[i]);
        const hour = date.getUTCHours();
        if (hour === currentHour) {
            timeID = i;
            console.log(timeID);
            console.log(hourlyData[timeID]);
            break;
        }
    }
    console.log(currentHour);
    console.log(hourlyData);
    return data;
}
exports.processData = processData;
;
//# sourceMappingURL=weatherAlarm.js.map