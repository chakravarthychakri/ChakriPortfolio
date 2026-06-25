const apiKey = "8c2add5376e592b06b497795636f7a0a";

async function getWeather() {
    const cityInput = document.getElementById("cityInput").value.trim();

    if (!cityInput) {
        alert("Please enter a city name.");
        return;
    }

    const city = cityInput.replace(/\s+/g, " ").toLowerCase();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "City not found. Please check the spelling or try a different city.");
        }

        document.getElementById("city").innerText = data.name + ", " + data.sys.country;
        document.getElementById("temp").innerText = "🌡 Temperature: " + data.main.temp + " °C";
        document.getElementById("humidity").innerText = "💧 Humidity: " + data.main.humidity + "%";
        document.getElementById("wind").innerText = "🌬 Wind Speed: " + data.wind.speed + " m/s";
        document.getElementById("condition").innerText = data.weather[0].description;
        document.getElementById("icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    } catch (error) {
        alert(error.message);
    }
}