
// Fetch Weather Data
async function fetchWeather() {
    const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeather API key
    const city = "Antananarivo";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Update Weather Section
        document.querySelector('.weather-list li:nth-child(1) .data').textContent = `${data.main.temp}°C`;
        document.querySelector('.weather-list li:nth-child(2) .data').textContent = data.weather[0].description;
        document.querySelector('.weather-list li:nth-child(3) .data').textContent = `${data.wind.speed} km/h`;
        document.querySelector('.weather-list li:nth-child(4) .data').textContent = `${data.main.feels_like}°C`;

        // Update Icon
        const icon = data.weather[0].icon;
        document.querySelector('#wth-icon img').src = `https://openweathermap.org/img/wn/${icon}.png`;
    } catch (error) {
        console.error("Failed to fetch weather data:", error);
    }
}

// Update Footer with Dynamic Date
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastmodified').textContent = document.lastModified;

// Back to Top Button
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Call Weather API
fetchWeather();
