import renderWeatherCondition from "./renderWeatherCondition";

const errorMessage = document.querySelector(".weather-form__error-message");
const weatherForm = document.querySelector(".weather-form");
const searchInput = weatherForm.querySelector(".weather-form__search-input");

const fetchWeatherData = async (e) => {
  errorMessage.textContent = "";

  const searchQuery = searchInput.value.trim();
  e.preventDefault();
  if (!searchQuery) {
    errorMessage.textContent = `Enter a valid city Name!`;
    return;
  }
  try {
    const response = await fetch(
      `http://localhost:3001/weather?q=${searchQuery}`
    );
    const data = await response.json();
    console.log(data);

    renderWeatherCondition(data);
    weatherForm.reset();
  } catch (error) {
    errorMessage.textContent = "Error fetching the weather forecast!";
  }
};

weatherForm.addEventListener("submit", fetchWeatherData);
