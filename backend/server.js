require('dotenv').config(); // Load .env variables


const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = 3000;

// Serve frontend
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/compare', async (req, res) => {
  const city = req.query.city;
  const results = [];

  // OpenWeatherMap
  try {
    const owm = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_KEY}&units=metric`);
    const data = await owm.json();
    results.push({
      source: 'OpenWeatherMap',
      temp: data.main.temp,
      description: data.weather[0].description
    });
  } catch (e) {
    results.push({ source: 'OpenWeatherMap', error: e.message });
  }

  // WeatherAPI
  try {
    const wap = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHERAPI_KEY}&q=${city}`);
    const data = await wap.json();
    results.push({
      source: 'WeatherAPI',
      temp: data.current.temp_c,
      description: data.current.condition.text
    });
  } catch (e) {
    results.push({ source: 'WeatherAPI', error: e.message });
  }

  // Weatherstack
  try {
    const ws = await fetch(`http://api.weatherstack.com/current?access_key=${process.env.WEATHERSTACK_KEY}&query=${city}`);
    const data = await ws.json();
    if (data.success === false) throw new Error(data.error.info);
    results.push({
      source: 'Weatherstack',
      temp: data.current.temperature,
      description: data.current.weather_descriptions[0]
    });
  } catch (e) {
    results.push({ source: 'Weatherstack', error: e.message });
  }

  res.json(results);
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
