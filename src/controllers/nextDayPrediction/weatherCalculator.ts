/**
 * processNextDayWeather - 
 * @param data 
 * @returns JSON-format with determined weather conditions.
 */
export function processNextDayWeather(data: any) {
   let result;
   let temperatureResult;

   if(data !== null) {
      temperatureResult = scanTemperature(data.temperature_2m);
   }

   if(temperatureResult !== null){
      result = {
         result: true,
         type: 'Temperature'
      }
   } else {
      result = {
         result: false,
      }
   }

   return result;
};

export function scanTemperature(data: any) {
   let result = null;

   for (const item in data) {
      if (data.hasOwnProperty(item)) {
         const temperature = data[item];
         if(temperature > 25) {
            result = temperature;
         }
      }
   }

   return result;
};