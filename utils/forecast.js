const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/f55e49f454b92380d19ca358344e4fef/${latitude},${longitude}?units=si`;

  request({ url, json: true }, (error, { body }) => {
    const { temperature, precipProbability: chanceOfRain } = body.currently;
    if (error) {
      callback("Unable to connect to location services", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(undefined, {
        temperature,
        chanceOfRain
      });
    }
  });
};

module.exports = forecast;
