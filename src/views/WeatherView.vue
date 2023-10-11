<script setup>
import { ref } from 'vue';
import DailyWeather from '../components/DailyWeather.vue';
import FavoriteCity from '../components/FavoriteCity.vue';
import HeaderWeather from '../components/HeaderWeather.vue';
import DetailedWeather from '../components/DetailedWeather.vue';
import { getWeather } from '../services/weather-api';

const city = ref("");
const dailyWeather = ref([]);
const favoriteCities = ref([]);
const temperature = ref();
const summary = ref("");
const icon = ref();

const onSearch = (newCity) => {
    getWeather(newCity).then((res) => {
        dailyWeather.value = res.data.daily.data;
        temperature.value = res.data.current.temperature;
        summary.value = res.data.current.summary;
        icon.value = res.data.current.icon_num;
        city.value = newCity;
    }).catch((error) => {
        if (error.response) {
            console.error("cette ville n'existe pas");
        }
    });
};

const onSave = (city) => {
    favoriteCities.value.push(city);
}

const onDelete = (city) => {
    favoriteCities.value.splice(favoriteCities.value.indexOf(city), 1)
}

</script>

<template>
    <main class="weather-board">
        <div class="left-side">
            <DailyWeather :city="city" :icon="icon" :summary="summary" :temperature="temperature" @saveCity="onSave"/>
        </div>
        <div class="right-side">
            <HeaderWeather @search="onSearch" />
            <div class="favorite-city">
                <FavoriteCity 
                    v-for="(favoriteCity, index) in favoriteCities" 
                    :key="index"
                    :favoriteCity="favoriteCity"
                    @click="onSearch" @remove="onDelete"/>
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
    flex-grow: 1;
}

.right-side {
    flex-grow: 3;
    display: flex;
    flex-direction: column;
}
</style>
