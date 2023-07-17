"use strict";
const weatherCalculator = require('../src/controllers/nextDayPrediction/weatherCalculator');
describe('scanTemperature', () => {
    it('should return high temperature weather report for the next day.', () => {
        const input = {
            0: 24, 1: 23.8, 2: 23.5, 3: 23.9, 4: 23.7,
            5: 23.7, 6: 23.2, 7: 24.2, 8: 25, 9: 25.8,
            10: 26.9, 11: 28.1, 12: 29.9, 13: 31.3, 14: 31.7,
            15: 32.8, 16: 32.9, 17: 32.5, 18: 31.7, 19: 30.5,
            20: 28.4, 21: 25.7, 22: 25, 23: 24.3
        };
        const result = weatherCalculator.scanTemperature(input);
        const expectedResponse = true;
        expect(result).toEqual(expectedResponse);
    });
    it('should return low temperature weather report for the next day', () => {
        const input = {
            0: 24, 1: 23.8, 2: 23.5, 3: 23.9, 4: 23.7,
            5: 23.7, 6: 23.2, 7: 24.2, 8: 24, 9: 23.8,
            10: 23.9, 11: 23.1, 12: 22.9, 13: 21.3, 14: 21.7,
            15: 22.8, 16: 22.9, 17: 12.5, 18: 11.7, 19: 10.5,
            20: 22.4, 21: 22.7, 22: 22, 23: 24.3
        };
        const result = weatherCalculator.scanTemperature(input);
        const expectedResponse = false;
        expect(result).toEqual(expectedResponse);
    });
});
describe('scanSoilFrost', () => {
    it('should return high soil temperature report for the next day.', () => {
        const input = {
            0: 24, 1: 23.8, 2: 23.5, 3: 23.9, 4: 23.7,
            5: 23.7, 6: 23.2, 7: 24.2, 8: 25, 9: 25.8,
            10: 26.9, 11: 28.1, 12: 29.9, 13: 31.3, 14: 31.7,
            15: 32.8, 16: 32.9, 17: 32.5, 18: 31.7, 19: 30.5,
            20: 28.4, 21: 25.7, 22: 25, 23: 24.3
        };
        const result = weatherCalculator.scanSoilFrost(input);
        const expectedResponse = false;
        expect(result).toEqual(expectedResponse);
    });
    it('should return high soil temperature  report for the next day', () => {
        const input = {
            0: 24, 1: 23.8, 2: 23.5, 3: 23.9, 4: 23.7,
            5: 23.7, 6: 23.2, 7: 0, 8: 0, 9: -4,
            10: 23.9, 11: 23.1, 12: 22.9, 13: 21.3, 14: 21.7,
            15: 22.8, 16: 22.9, 17: 12.5, 18: 11.7, 19: 10.5,
            20: 22.4, 21: 22.7, 22: 22, 23: 24.3
        };
        const result = weatherCalculator.scanSoilFrost(input);
        const expectedResponse = true;
        expect(result).toEqual(expectedResponse);
    });
});
describe('processNextDayWeather', () => {
    it('should return low temperature weather report for the next day', () => {
        const input = {
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
                12.9, 12.7, 12.8, 12.8, 12.9,
                13.4, 14.6, 16.5, 18.1, 19.3,
                20.2, 20.7, 21.8, 22.2, 22.8,
                22.4, 22.4, 22.1, 20.8, 19.1,
                17.4, 16.4, 15.7, 15
            ]
        };
        const result = weatherCalculator.scanTemperature(input);
        const expectedResponse = false;
        expect(result).toEqual(expectedResponse);
    });
    it('should return high temperature weather report for the next day', () => {
        const input = {
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
                12.9, 12.7, 12.8, 12.8, 12.9,
                13.4, 14.6, 16.5, 18.1, 19.3,
                20.2, 20.7, 21.8, 22.2, 22.8,
                22.4, 22.4, 22.1, 20.8, 19.1,
                17.4, 16.4, 15.7, 15
            ]
        };
        const result = weatherCalculator.scanTemperature(input);
        const expectedResponse = false;
        expect(result).toEqual(expectedResponse);
    });
});
//# sourceMappingURL=weatherCalculator.test.js.map