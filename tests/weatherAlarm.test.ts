import request from 'supertest';
import app from '../src/index';

describe('testFunction', () => {
  it('should return the correct response', async () => {
    const response = await request(app).get('/testFunction');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ test: 'nope' });
  });
});

import { testFunction } from '../src/controllers/weatherAlarm'; // Import the function to be tested

// Mock the imported function
jest.mock('../src/controllers/weatherAlarm', () => ({
  testFunction: jest.fn(),
}));

describe('weatherAlarm', () => {
  it('should import and call testFunction', () => {
    // Run your test logic here (if needed)
    // For example, you can check if testFunction is called inside a specific function or route
    expect(testFunction).toHaveBeenCalledTimes(1);
  });
});