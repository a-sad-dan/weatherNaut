async function fetchForecastData(query) {
    // Starting an api Call here
    const API_KEY = "f06fbaa0fe1945cca9771323231811";
    const queryURL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${query}&days=3&aqi=yes&alerts=yes`;

    const response = await fetch(queryURL, { mode: "cors" });
    console.log(response);
    const data = await response.json();
    console.log("data is ", data);
    return data;
}

export default fetchForecastData;