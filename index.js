const express = require('express');
const morgan = require("morgan");
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config()
const apicache = require("apicache");

 
// Create Express Server
const app = express();


// Configuration
// const port = process.env.PORT||3000;
// const HOST = "localhost";

const API_BASE_URL = process.env.API_BASE_URL;

//The API_BASE_URL : 
// API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

//You need to create your API key at openWeatherMap - Weather API
const API_KEY_VALUE = process.env.API_KEY_VALUE;

//by default fetches the weather data of London 
const API_SERVICE_URL = `${API_BASE_URL}?q=London&appid=${API_KEY_VALUE}`;



// Logging the requests
app.use(morgan('dev'));

let cache = apicache.middleware

app.use(cache('5 minutes'))

// Proxy endpoints
app.use('/weather', createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
        [`^/weather`]: '',
    },
}));



app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
})



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
