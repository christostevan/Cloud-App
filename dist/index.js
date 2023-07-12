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
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
app.get('/currentWeather', weatherAlarm_1.currentWeather);
//# sourceMappingURL=index.js.map