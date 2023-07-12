import express, { Request, Response } from 'express';

import { 
    //helloWorld, 
    //greet, 
    //greetByName
    currentWeather 
} from './controllers/weatherAlarm';

const app = express();

const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 

// app.get('/helloWorld', helloWorld);

// app.get('/greet/:name', greet);


// app.get('/greetByName', greetByName);
app.get('/currentWeather', currentWeather);