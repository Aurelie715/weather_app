import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getWeather } from '../services/weather-api';

export const useForecastStore = defineStore('forecastStore', () => {
  const city = ref();
  const dailyWeather = ref([]);
  const temperature = ref();
  const summary = ref("");
  const icon = ref();
  const searchError = ref();
  const favoriteCities = ref([]);

  const setCity = (newCity) => {
    city.value = newCity;
  };

  const fetchWeather = (newCity) => {
    getWeather(newCity).then((res) => {
      dailyWeather.value = res.data.daily.data;
      temperature.value = res.data.current.temperature;
      summary.value = res.data.current.summary;
      icon.value = res.data.current.icon_num;
      city.value = newCity;
      searchError.value = "";
    }).catch((error) => {
      if (error.response) {
        console.error("This city was not found in our database");
        searchError.value = "This city was not found in our database";
      }
    });
  };

  const addFavoriteCity = (city) => {
    favoriteCities.value.push(city);
  }

  const removeFavoriteCity = (city) => {
    favoriteCities.value.splice(favoriteCities.value.indexOf(city), 1);
    
};

  return { city, setCity, addFavoriteCity, removeFavoriteCity, favoriteCities, dailyWeather, temperature, summary, icon, searchError, fetchWeather };
})
