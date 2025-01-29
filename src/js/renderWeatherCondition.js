const renderWeatherCondition = (city) => {
  console.log("from weather");

  const weatherConditionList = document.querySelector(".weather-card__list");
  const weatherCardLogo = document.querySelector(".weather-card__image");
  const iconContainer = document.createElement("div");
  const icon = document.createElement("img");
  const weatherCard = document.querySelector(".weather-card");

  weatherConditionList.innerHTML = "";
  weatherCardLogo.style.display = "none";
  weatherCard.style.display = "block";

  const createListItem = (title, content) => {
    const item = document.createElement("li");
    const itemTitle = document.createElement("h3");
    const itemContent = document.createElement("p");

    item.append(itemTitle, itemContent);

    itemTitle.textContent = title;
    itemContent.textContent = content;

    item.classList.add("weather-card__list-item");
    itemTitle.classList.add("country-card__item-title");

    return item;
  };

  const cityName = createListItem("City name:", city.location.name);
  const country = createListItem("Country:", city.location.country);
  const [extractedDate, extractedTime] = city.location.localtime.split(" ");
  const localTime = createListItem("Local time:", extractedTime);
  const localDate = createListItem("Local date:", extractedDate);
  const weatherCondition = createListItem(
    "Weather condition:",
    city.current.condition.text
  );
  const temperature = createListItem(
    "Current temperature:",
    city.current.temp_c
  );
  const feelsLike = createListItem("Feels like:", city.current.feelslike_c);
  const humidity = createListItem("Humidity:", city.current.humidity);
  const windSpeed = createListItem("Wind speed (KPH):", city.current.wind_kph);
  icon.src = city.current.condition.icon;

  // APPENDING ELEMENTS
  weatherConditionList.append(
    iconContainer,
    cityName,
    country,
    localTime,
    localDate,
    weatherCondition,
    temperature,
    feelsLike,
    humidity,
    windSpeed
  );
  iconContainer.append(icon);

  //ADDING CLASSES
  iconContainer.classList.add("weather-card__flag-container");

  console.log();
};

export default renderWeatherCondition;
