import { Request, Response } from 'express';
import axios from 'axios';

import { processNextDayWeather } from './nextDayPrediction/weatherCalculator'; // import classes for nextDayWeather

/**
 * nextDayWeather - responsible for analysing location and respond with possibility of heat conditions, within the next day.
 * @param data in nextDayWeather format from HTTP-request. Gather longitude, latitude.
 * @returns Weather alarm object
 */
export const nextDayWeather = async (req: Request, res: Response) => {
    try {
        const { longitude, latitude } = req.query;

        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 1);
        const tomorrowDate = currentDate.toISOString().slice(0, 10);

        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&start_date=${tomorrowDate}&end_date=${tomorrowDate}`;
        const response = await axios.get(url);
        const data = response.data;

        const processedData = await processNextDayWeather(data.hourly); //Send gathered data for processing and get weather report.     


        res.json(processedData); 
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the weather data.' });
    }
};

