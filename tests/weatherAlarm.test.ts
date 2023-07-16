// //import { processWeatherConditions } from '../src/controllers/hourPrediction/weatherUtils';

// // Mock the imported function
// // jest.mock('../src/controllers/weatherAlarm', () => ({
// //   testFunction: jest.fn(),
// // }));
import { processWeatherConditions } from '../src/controllers/hourPrediction/weatherUtils';

describe('weatherAlarm', () => {
  it('should return weather report for heavy snowfall', () => {
    const mockData = {
      snowfall: {
        0: 0, 1: 0, 2: 0, 3: 0, 4: 0,
        5: 0, 6: 0, 7: 0, 8: 0, 9: 0,
        10: 0, 11: 0, 12: 0, 13: 0, 14: 0,
        15: 0, 16: 0, 17: 0, 18: 0, 19: 0,
        20: 0, 21: 0, 22: 0, 23: 0
      },
      rain: {
        0: 0, 1: 0, 2: 0, 3: 0, 4: 0,
        5: 0, 6: 0, 7: 0, 8: 0, 9: 0,
        10: 0, 11: 0, 12: 0, 13: 0, 14: 0,
        15: 0, 16: 0, 17: 0, 18: 0, 19: 0,
        20: 0, 21: 0, 22: 0.2, 23: 0.1
      },
      temperature_2m: {
        0: 16.6, 1: 16.2, 2: 16.5, 3: 16, 4: 15.8,
        5: 16.1, 6: 16.9, 7: 17.7, 8: 18.7, 9: 19.3,
        10: 19.8, 11: 20.3, 12: 19.8, 13: 20.3, 14: 21.5,
        15: 21.7, 16: 21.7, 17: 20.9, 18: 19.9, 19: 18.7,
        20: 18.1, 21: 17.6, 22: 16.5, 23: 15.8
      },
    };


    const ID = 2; // Assuming we want to test for the second hour (ID = 2)
    const result = processWeatherConditions(ID, mockData);
    // const result = processWeatherConditions(ID, mockData);

    expect(result).toEqual({
      report: 'Heavy snowfall',
      timezone: 'GMT',
      time: '1:00',
    });
  });
});
