const axios = require('axios');
const weatherAlarm = require('../src/controllers/weatherAlarm');

describe('weatherAlarm', () => {
  it('should return weather report for no extreme weather conditions', async () => {
    // Mock request and response objects
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
              0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0
            ]
          },
        },
      });
  
      // Call the currentWeather function with the mock data
      await weatherAlarm.currentWeather(req, res);
      const currentHourInGMT = new Date().getUTCHours();

      // Assert the response
      const expectedResponse = {
        report: 'null',
        timezone: 'GMT',
        time: `${currentHourInGMT + 2}:00`,
      };

      expect(res.json).toHaveBeenCalledWith(expectedResponse);
      expect(res.status).not.toHaveBeenCalledWith(500);
    });

    it('should return weather report for hail', async () => {
    // Mock request and response objects
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
              0, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 0, 0, 0, 0
            ],
            snowfall: [
              0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0
            ]
          },
        },
      });
  
      // Call the currentWeather function with the mock data
      await weatherAlarm.currentWeather(req, res);
      const currentHourInGMT = new Date().getUTCHours();

      // Assert the response
      const expectedResponse = {
        report: 'Hail',
        timezone: 'GMT',
        time: `${currentHourInGMT + 1}:00`,
      };

      expect(res.json).toHaveBeenCalledWith(expectedResponse);
      expect(res.status).not.toHaveBeenCalledWith(500);
  });

  it('should return weather report for Heavy rain', async () => {
    // Mock request and response objects
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
              20, 20, 20, 20, 20,
              20, 20, 20, 20, 20,
              20, 20, 20, 20, 20,
              28.4, 25.7, 25, 24.3
            ],
            rain: [
              0, 0, 0, 0, 0, 0, 0, 0,
              0, 20, 20, 20, 20, 20, 20, 20,
              20, 20, 20, 20, 0, 0, 0, 0
            ],
            snowfall: [
              0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0
            ]
          },
        },
      });
  
      // Call the currentWeather function with the mock data
      await weatherAlarm.currentWeather(req, res);
      const currentHourInGMT = new Date().getUTCHours();

      // Assert the response
      const expectedResponse = {
        report: 'Heavy rain',
        timezone: 'GMT',
        time: `${currentHourInGMT + 1}:00`,
      };

      expect(res.json).toHaveBeenCalledWith(expectedResponse);
      expect(res.status).not.toHaveBeenCalledWith(500);
  });

  it('should return weather report for Heavy snowfall', async () => {
      // Mock request and response objects
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
        },
      });
  
      // Call the currentWeather function with the mock data
      await weatherAlarm.currentWeather(req, res);
      const currentHourInGMT = new Date().getUTCHours();

      // Assert the response
      const expectedResponse = {
        report: 'Heavy snowfall',
        timezone: 'GMT',
        time: `${currentHourInGMT + 1}:00`,
      };

      expect(res.json).toHaveBeenCalledWith(expectedResponse);
      expect(res.status).not.toHaveBeenCalledWith(500);
  });
});
