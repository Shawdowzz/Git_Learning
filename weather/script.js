const apiKey = 'your_api_key';
const city = 'Mysuru';


const weatherDescription = document.getElementById('weather-description');
const temperature = document.getElementById('temperature');
const foodSuggestion = document.getElementById('food-suggestion');

async function getWeatherData() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        weatherDescription.textContent = data.weather[0].description;
        temperature.textContent = `Temperature: ${data.main.temp}°C`;
        
        // Food suggestion based on weather conditions
        if (data.weather[0].main === 'Clear') {
            foodSuggestion.textContent = 'Enjoy a picnic with fresh fruits and sandwiches!';
        } else if (data.weather[0].main === 'Clouds' || data.weather[0].main === 'Rain') {
            foodSuggestion.textContent = 'Warm soup and a cup of coffee would be great!';
        } else {
            foodSuggestion.textContent = 'Why not try a barbecue today?';
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

getWeatherData();
