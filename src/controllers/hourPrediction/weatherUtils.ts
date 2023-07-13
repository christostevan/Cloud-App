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
        if (processedWeatherData !== null) {
            processedWeatherData = processWeatherConditions(timeID + 1, data.hourly);
        }
    }

    return processedWeatherData;
};

export function processWeatherConditions(ID: number, data: any) {
    let weatherReport;

    if (data.snowfall[ID] >= 50) {
        weatherReport = {
            report: 'Heavy rain',
            timezone: 'UCT',
            time: `${ID - 1}:00`
        };
    } else if (data.rain[ID] >= 10) {
        weatherReport = {
            report: 'Heavy rain',
            timezone: 'UCT',
            time: `${ID - 1}:00`
        };
    } else if (data.rain[ID] > 0 && (data.temperature[ID] <= 0)) {
        weatherReport = {
            report: 'Hail',
            timezone: 'UCT',
            time: `${ID - 1}:00`
        };
    } else {
        weatherReport = {
            report: 'null',
            timezone: 'UCT',
            time: `${ID - 1}:00`
        };
    }

    return weatherReport;
}