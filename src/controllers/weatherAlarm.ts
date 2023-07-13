import { Request, Response } from 'express';
import axios from 'axios';

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

export function processData(data: any) {
    const currentHour = new Date().getUTCHours();
    const hourlyData = data.hourly.time;

    let timeID = null;
    for (let i = 0; i < hourlyData.length; i++) {
        const date = new Date(hourlyData[i]);
        const hour = date.getUTCHours();

        if (hour === currentHour) {
            timeID = i;
            break;
        }
    }

    let processedWeatherData = null;
    if (timeID !== null) {
        processedWeatherData = processWeatherConditions(timeID, data.hourly);
    }
    return data;

};

export function processWeatherConditions(timeID: number, hourlyData: any) {

    const weatherConditions = hourlyData[timeID].conditions;

    return weatherConditions;
}