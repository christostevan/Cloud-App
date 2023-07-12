import { Request, Response } from 'express';
import axios from 'axios';

// export const helloWorld = (req: Request, res: Response) => {
//     res.send('A verry much hello World!');
// };

// export const greet = (req: Request, res: Response) => {
//     const name = req.params.name;
//     res.send(`Hello, ${name}!`);
// };

// export const greetByName = (req: Request, res: Response) => {
//     const { firstName, lastName } = req.query;
//     const fullName = `${firstName} ${lastName}`;
//     const greeting = `Hello, ${fullName}!`;
//     res.send(greeting);
// };

export const currentWeather = async (req: Request, res: Response) => {
    try {
        const { longitude, latitude } = req.query;
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=precipitation&timezone=Europe%2FLondon&forecast_days=1`;

        const response = await axios.get(url);
        const data = response.data;

        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the weather data.' });
    }
};
