<script setup>
import { watch } from 'vue';
import CurrentWeather from '../components/CurrentWeather.vue';
import FavoriteCity from '../components/FavoriteCity.vue';
import HeaderWeather from '../components/HeaderWeather.vue';
import DetailedWeather from '../components/DetailedWeather.vue';
import { useForecastStore } from '../stores/forecast';
import { storeToRefs } from 'pinia'

const forecastStore = useForecastStore();

const {city, dailyWeather, favoriteCities} = storeToRefs(forecastStore);

const onSave = () => {
    forecastStore.addFavoriteCity(city.value);
};

watch(city, (newCity) => {
    forecastStore.fetchWeather(newCity);
});
</script>

<template>
    <main class="weather-board">
        <div class="left-side">
            <CurrentWeather @saveCity="onSave"/>
        </div>
        <div class="right-side">
            <HeaderWeather/>
            <div class="favorite-city">
                <FavoriteCity 
                    v-for="(favoriteCity, index) in favoriteCities" 
                    :key="index"
                    :city="favoriteCity"
                    />
            </div>
            <div class="days">
                <DetailedWeather 
                    v-for="(dayWeather, index) in dailyWeather" 
                    :date="dayWeather.day" 
                    :icon="dayWeather.icon"
                    :temperature="dayWeather.all_day.temperature" 
                    :index="index" 
                    :key="index" 
                />
            </div>
        </div>
    </main>
</template>
<style lang="scss">
@import "../assets/scss/_variables.scss";

.weather-board {
    display: flex;
    margin: 0 30px 0 0;
}

.left-side {
    width: 30%;
}

.right-side {
    width: 70%;
    display: flex;
    flex-direction: column;
    .favorite-city {
        display: flex;
        flex-wrap: wrap;
    }
}
</style>
