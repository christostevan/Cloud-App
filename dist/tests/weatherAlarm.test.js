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
const axios = require('axios');
const weatherAlarm = require('../src/controllers/weatherAlarm');
describe('nextDayWeather', () => {
    it('should return weather report for no conditions met', () => __awaiter(void 0, void 0, void 0, function* () {
        const req = {
            query: {
                latitude: 40.710335,
                longitude: -73.99307,
            },
        };
        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis(),
        };
        jest.spyOn(axios, 'get').mockResolvedValue({
            data: {
                generationtime_ms: 1.278996467590332,
                utc_offset_seconds: -14400,
                timezone: 'America/New_York',
                timezone_abbreviation: 'EDT',
                elevation: 51,
                hourly_units: { time: 'iso8601', temperature_2m: '°C', rain: 'mm', snowfall: 'cm' },
                hourly: {
                    time: [
                        '2023-07-18T00:00', '2023-07-18T01:00',
                        '2023-07-18T02:00', '2023-07-18T03:00',
                        '2023-07-18T04:00', '2023-07-18T05:00',
                        '2023-07-18T06:00', '2023-07-18T07:00',
                        '2023-07-18T08:00', '2023-07-18T09:00',
                        '2023-07-18T10:00', '2023-07-18T11:00',
                        '2023-07-18T12:00', '2023-07-18T13:00',
                        '2023-07-18T14:00', '2023-07-18T15:00',
                        '2023-07-18T16:00', '2023-07-18T17:00',
                        '2023-07-18T18:00', '2023-07-18T19:00',
                        '2023-07-18T20:00', '2023-07-18T21:00',
                        '2023-07-18T22:00', '2023-07-18T23:00'
                    ],
                    temperature_2m: [
                        13, 12.7, 12.5, 12.4, 12.5, 13.2,
                        14.6, 16.2, 17.9, 19.4, 20.7, 21.6,
                        22.2, 22.7, 22.4, 22.5, 21.2, 21.5,
                        20.8, 18.4, 16.8, 15.8, 15.2, 14.
                    ]
                },
            },
        });
        yield weatherAlarm.nextDayWeather(req, res);
        const expectedResponse = {
            result: false,
        };
        expect(res.json).toHaveBeenCalledWith(expectedResponse);
        expect(res.status).not.toHaveBeenCalledWith(500);
    }));
    it('should return weather report for heat conditions', () => __awaiter(void 0, void 0, void 0, function* () {
        const req = {
            query: {
                latitude: 40.710335,
                longitude: -73.99307,
            },
        };
        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis(),
        };
        jest.spyOn(axios, 'get').mockResolvedValue({
            data: {
                generationtime_ms: 1.278996467590332,
                utc_offset_seconds: -14400,
                timezone: 'America/New_York',
                timezone_abbreviation: 'EDT',
                elevation: 51,
                hourly_units: { time: 'iso8601', temperature_2m: '°C', rain: 'mm', snowfall: 'cm' },
                hourly: {
                    time: [
                        '2023-07-18T00:00', '2023-07-18T01:00',
                        '2023-07-18T02:00', '2023-07-18T03:00',
                        '2023-07-18T04:00', '2023-07-18T05:00',
                        '2023-07-18T06:00', '2023-07-18T07:00',
                        '2023-07-18T08:00', '2023-07-18T09:00',
                        '2023-07-18T10:00', '2023-07-18T11:00',
                        '2023-07-18T12:00', '2023-07-18T13:00',
                        '2023-07-18T14:00', '2023-07-18T15:00',
                        '2023-07-18T16:00', '2023-07-18T17:00',
                        '2023-07-18T18:00', '2023-07-18T19:00',
                        '2023-07-18T20:00', '2023-07-18T21:00',
                        '2023-07-18T22:00', '2023-07-18T23:00'
                    ],
                    temperature_2m: [
                        13, 12.7, 12.5, 12.4, 12.5, 13.2,
                        14.6, 16.2, 17.9, 19.4, 20.7, 21.6,
                        22.2, 23.7, 24.4, 25.5, 23.2, 21.5,
                        20.8, 18.4, 16.8, 15.8, 15.2, 14.
                    ]
                },
            },
        });
        yield weatherAlarm.nextDayWeather(req, res);
        const expectedResponse = {
            result: true,
            type: "Temperature",
        };
        expect(res.json).toHaveBeenCalledWith(expectedResponse);
        expect(res.status).not.toHaveBeenCalledWith(500);
    }));
});
//# sourceMappingURL=weatherAlarm.test.js.map