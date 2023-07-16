import { Request, Response } from 'express';
import axios from 'axios';

import { processData } from './hourPrediction/weatherUtils'; // import classes for currentWeather

/**
 * currentWeather - responsible for analysing location and respond with possibility of extreme weather conditions, within current and next hour.
 * @param data in currenWeather format from HTTP-request. Gather longitude, latitude.
 * @returns Weather alarm object
 */
export const currentWeather = async (req: Request, res: Response) => {
    try {
        const { longitude, latitude } = req.query;
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,rain,snowfall&forecast_days=1`;
        const response = await axios.get(url);
        const data = response.data;

        const processedData = await processData(data); //Send gathered data for processing and get weather report.     

        res.json(processedData); 
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the weather data.' });
    }
};
