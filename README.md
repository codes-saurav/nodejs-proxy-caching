AUTHOR : SAURAV RAJ 

Node.js Proxy server : A node.js proxy acts as an intermediary between the client and the weather API . The Client sends the request to the proxy , and the node.js proxy server then forwards this request to the API endpoint . 



Here, I have used OpenWeatherMap API .

STEPS TO USE THE NODE.JS PROXY 
 1. Go to https://openweathermap.org/api and generate your API key .

 2. create your .env file and write 
    API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

    API_KEY_VALUE = "< YOUR API KEY>"

3. To test the API , go to POSTMAN and send a GET request at localhost:3000/weather 


