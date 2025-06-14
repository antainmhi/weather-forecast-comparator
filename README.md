# Weather Forecast Comparison App

This application allows users to compare real-time weather data from multiple APIs side by side. It helps visualize differences in temperature, wind speed, and conditions for a given city using data from OpenWeatherMap, WeatherAPI, and Weatherstack.

## Technologies Used
*   Frontend: HTML, CSS, JavaScript
*   Backend: Node.js, Express
*   APIs: OpenWeatherMap, WeatherAPI, Weatherstack

## Prerequisites
*   Node.js 14 or higher
*   Internet access to connect to external weather APIs
*   Free API keys from:
    *   [OpenWeatherMap](https://openweathermap.org/)
    *   [WeatherAPI](https://www.weatherapi.com/)
    *   [Weatherstack](https://weatherstack.com/)

## Installation
1.  Clone the repository: `git clone https://github.com/yourusername/weather-forecast-comparison.git`
2.  Navigate to the project directory: `cd weather-forecast-comparison`
3.  Install dependencies: `npm install`
4.  Create a `.env` file in the root directory and add your API keys:

    ```env
    OPENWEATHER_KEY=your_openweathermap_key
    WEATHERAPI_KEY=your_weatherapi_key
    WEATHERSTACK_KEY=your_weatherstack_key
    ```

## Running the Application
1.  Start the backend server: `node backend/server.js`
2.  Open your browser and navigate to `http://localhost:3000`
3.  Enter a city to view weather forecasts from all three providers

## Usage
1.  In the search input, type the name of a city (e.g., "London").
2.  Click "Search" or press Enter.
3.  The app will display weather data from OpenWeatherMap, WeatherAPI, and Weatherstack side by side.
4.  Compare the temperature, weather description, wind speed, and more.

## Contributing
We welcome contributions! If you'd like to improve the UI, add new APIs, or implement features like 5-day forecasts, feel free to fork the repo and submit a pull request.

## License
This project is licensed under the MIT License.
