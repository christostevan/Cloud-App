"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const weatherAlarm_1 = require("./controllers/weatherAlarm");
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.get('/nextDayWeather', weatherAlarm_1.nextDayWeather);
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
exports.default = server;
//# sourceMappingURL=index.js.map