"use strict";
const weatherAlarm = require('../src/controllers/weatherAlarm');
describe('weatherAlarm', () => {
    it('should return weather report for no extreme weather conditions', () => {
        function testCurrentWeather() {
            const req = {
                query: {
                    longitude: 6.9069,
                    latitude: 52.7792,
                },
            };
            const res = {
                json: jest.fn(),
                status: jest.fn().mockReturnThis(),
            };
            const result = weatherAlarm.currentWeather(req, res);
            const currentHourInGMT = new Date().getUTCHours();
            const expectedResponse = {
                report: 'null',
                timezone: 'GMT',
                time: `${currentHourInGMT - 1}:00`,
            };
            expect(result).toHaveBeenCalledWith(expectedResponse);
            expect(res.status).not.toHaveBeenCalledWith(500);
        }
        testCurrentWeather();
    });
    it('should return weather report for hail', () => {
        function testCurrentWeather() {
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
            const mockWeatherData = {
                generationtime_ms: 1.278996467590332,
                utc_offset_seconds: -14400,
                timezone: 'America/New_York',
                timezone_abbreviation: 'EDT',
                elevation: 51,
                hourly_units: { time: 'iso8601', temperature_2m: '°C', rain: 'mm', snowfall: 'cm' },
                hourly: {
                    time: [
                        '2023-07-17T00:00', '2023-07-17T01:00',
                        '2023-07-17T02:00', '2023-07-17T03:00',
                        '2023-07-17T04:00', '2023-07-17T05:00',
                        '2023-07-17T06:00', '2023-07-17T07:00',
                        '2023-07-17T08:00', '2023-07-17T09:00',
                        '2023-07-17T10:00', '2023-07-17T11:00',
                        '2023-07-17T12:00', '2023-07-17T13:00',
                        '2023-07-17T14:00', '2023-07-17T15:00',
                        '2023-07-17T16:00', '2023-07-17T17:00',
                        '2023-07-17T18:00', '2023-07-17T19:00',
                        '2023-07-17T20:00', '2023-07-17T21:00',
                        '2023-07-17T22:00', '2023-07-17T23:00'
                    ],
                    temperature_2m: [
                        24, 23.8, 23.5, 23.9, 23.7,
                        23.7, 23.2, 24.2, 25, 25.8,
                        26.9, 28.1, 29.9, 31.3, 31.7,
                        32.8, 32.9, 32.5, 31.7, 30.5,
                        28.4, 25.7, 25, 24.3
                    ],
                    rain: [
                        0, 0, 0, 20, 20, 20, 20, 20,
                        20, 20, 20, 20, 20, 20, 20, 20,
                        20, 20, 20, 20, 20, 20, 20, 0
                    ],
                    snowfall: [
                        0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0
                    ]
                },
            };
            weatherAlarm.currentWeather(req, res);
            const currentHourInGMT = new Date().getUTCHours();
            const expectedResponse = {
                report: 'Heavy rain',
                timezone: 'GMT',
                time: `${currentHourInGMT - 1}:00`,
            };
            expect(res.json).toHaveBeenCalledWith(expectedResponse);
            expect(res.status).not.toHaveBeenCalledWith(500);
        }
    });
    it('should return weather report for Heavy rain', () => {
        function testCurrentWeather() {
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
            const mockWeatherData = {
                generationtime_ms: 1.278996467590332,
                utc_offset_seconds: -14400,
                timezone: 'America/New_York',
                timezone_abbreviation: 'EDT',
                elevation: 51,
                hourly_units: { time: 'iso8601', temperature_2m: '°C', rain: 'mm', snowfall: 'cm' },
                hourly: {
                    time: [
                        '2023-07-17T00:00', '2023-07-17T01:00',
                        '2023-07-17T02:00', '2023-07-17T03:00',
                        '2023-07-17T04:00', '2023-07-17T05:00',
                        '2023-07-17T06:00', '2023-07-17T07:00',
                        '2023-07-17T08:00', '2023-07-17T09:00',
                        '2023-07-17T10:00', '2023-07-17T11:00',
                        '2023-07-17T12:00', '2023-07-17T13:00',
                        '2023-07-17T14:00', '2023-07-17T15:00',
                        '2023-07-17T16:00', '2023-07-17T17:00',
                        '2023-07-17T18:00', '2023-07-17T19:00',
                        '2023-07-17T20:00', '2023-07-17T21:00',
                        '2023-07-17T22:00', '2023-07-17T23:00'
                    ],
                    temperature_2m: [
                        24, 23.8, 23.5, 23.9, 23.7,
                        0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0,
                        28.4, 25.7, 25, 24.3
                    ],
                    rain: [
                        0, 0, 0, 20, 20, 20, 20, 20,
                        20, 20, 20, 20, 20, 20, 20, 20,
                        20, 20, 20, 20, 20, 20, 20, 0
                    ],
                    snowfall: [
                        0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0
                    ]
                },
            };
            weatherAlarm.currentWeather(req, res);
            const currentHourInGMT = new Date().getUTCHours();
            const expectedResponse = {
                report: 'Heavy rain',
                timezone: 'GMT',
                time: `${currentHourInGMT - 1}:00`,
            };
            expect(res.json).toHaveBeenCalledWith(expectedResponse);
            expect(res.status).not.toHaveBeenCalledWith(500);
        }
    });
    it('should return weather report for Heavy snowfall', () => {
        function testCurrentWeather() {
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
            const mockWeatherData = {
                generationtime_ms: 1.278996467590332,
                utc_offset_seconds: -14400,
                timezone: 'America/New_York',
                timezone_abbreviation: 'EDT',
                elevation: 51,
                hourly_units: { time: 'iso8601', temperature_2m: '°C', rain: 'mm', snowfall: 'cm' },
                hourly: {
                    time: [
                        '2023-07-17T00:00', '2023-07-17T01:00',
                        '2023-07-17T02:00', '2023-07-17T03:00',
                        '2023-07-17T04:00', '2023-07-17T05:00',
                        '2023-07-17T06:00', '2023-07-17T07:00',
                        '2023-07-17T08:00', '2023-07-17T09:00',
                        '2023-07-17T10:00', '2023-07-17T11:00',
                        '2023-07-17T12:00', '2023-07-17T13:00',
                        '2023-07-17T14:00', '2023-07-17T15:00',
                        '2023-07-17T16:00', '2023-07-17T17:00',
                        '2023-07-17T18:00', '2023-07-17T19:00',
                        '2023-07-17T20:00', '2023-07-17T21:00',
                        '2023-07-17T22:00', '2023-07-17T23:00'
                    ],
                    temperature_2m: [
                        24, 23.8, 23.5, 23.9, 23.7,
                        0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0,
                        28.4, 25.7, 25, 24.3
                    ],
                    rain: [
                        0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0
                    ],
                    snowfall: [
                        0, 0, 0, 0, 0, 60, 60, 60,
                        60, 60, 60, 60, 60, 60, 60, 60,
                        60, 60, 60, 60, 60, 0, 0, 0
                    ]
                },
            };
            weatherAlarm.currentWeather(req, res);
            const currentHourInGMT = new Date().getUTCHours();
            const expectedResponse = {
                report: 'Heavy rain',
                timezone: 'GMT',
                time: `${currentHourInGMT - 1}:00`,
            };
            expect(res.json).toHaveBeenCalledWith(expectedResponse);
            expect(res.status).not.toHaveBeenCalledWith(500);
        }
    });
});
//# sourceMappingURL=weatherAlarm.test.js.map