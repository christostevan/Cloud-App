const axios = require('axios');
const weatherAlarm = require('../src/controllers/weatherAlarm');

describe('nextDayWeather', () => {
    it('should return weather report for no conditions met', async () => {
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
        jest.spyOn(axios, 'get').mockResolvedValue({ //intervene on URL request to create fixed responce
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
                ],
                soil_temperature_54cm: [
                  17.7, 17.7, 17.6, 17.6,
                  17.5, 17.5, 17.4, 17.3,
                  17.3, 17.3, 17.2, 17.2,
                  17.2, 17.2, 17.2, 17.3,
                  17.3, 17.3, 17.4, 17.4,
                  17.5, 17.5, 17.5, 17.5
                ]
              },
            },
        });

        await weatherAlarm.nextDayWeather(req, res);

        const expectedResponse = {
            result: false,
        };

        expect(res.json).toHaveBeenCalledWith(expectedResponse);
        expect(res.status).not.toHaveBeenCalledWith(500);
    });

    it('should return weather report for heat conditions', async () => {
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
        jest.spyOn(axios, 'get').mockResolvedValue({ //intervene on URL request to create fixed responce
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
                ],
                soil_temperature_54cm: [
                  17.7, 17.7, 17.6, 17.6,
                  17.5, 17.5, 17.4, 17.3,
                  17.3, 17.3, 17.2, 17.2,
                  17.2, 17.2, 17.2, 17.3,
                  17.3, 17.3, 17.4, 17.4,
                  17.5, 17.5, 17.5, 17.5
                ]
              },
            },
        });

        await weatherAlarm.nextDayWeather(req, res);

        const expectedResponse = {
            result: true,
            type: "Temperature",
        };

        expect(res.json).toHaveBeenCalledWith(expectedResponse);
        expect(res.status).not.toHaveBeenCalledWith(500);
    });

    it('should return weather report for soil frost conditions', async () => {
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
      jest.spyOn(axios, 'get').mockResolvedValue({ //intervene on URL request to create fixed responce
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
                2.9, 2.7, 2.8, 2.8, 2.9,
                3.4, 4.6, 6.5, 8.1, 9.3,
                10.2, 10.7, 11.8, 12.2, 12.8,
                12.4, 12.4, 12.1, 10.8, 9.1,
                7.4, 6.4, 5.7, 5
              ],
              soil_temperature_54cm: [
                  2.9, 2.7, 2.8, 2.8, 2.9,
                  3.4, -4.6, -6.5, 8.1, 9.3,
                  0.2, 0.7, 1.8, 2.2, 2.8,
                  2.4, 2.4, 2.1, 0.8, 0.1,
                  -0.4, -0.4, 5.7, 5
              ]
            },
          },
      });

      await weatherAlarm.nextDayWeather(req, res);

      const expectedResponse = {
          result: true,
          type: "Soil frost",
      };

      expect(res.json).toHaveBeenCalledWith(expectedResponse);
      expect(res.status).not.toHaveBeenCalledWith(500);
  });
});