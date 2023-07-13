import { Request, Response } from 'express';
import axios from 'axios';

import { processData } from './hourPrediction/weatherUtils'; // Update the import statement


export const currentWeather = async (req: Request, res: Response) => {
    try {
        const { longitude, latitude } = req.query;
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,rain,snowfall&forecast_days=1`;
        const response = await axios.get(url);
        const data = response.data;

        const processedData = await processData(data);

        res.json(processedData);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the weather data.' });
    }
};