<script setup>
import {ref} from 'vue';
import DailyWeather from '../components/DailyWeather.vue';
import FavoriteCity from '../components/FavoriteCity.vue';
import HeaderWeather from '../components/HeaderWeather.vue';
import DetailedWeather from '../components/DetailedWeather.vue';

const city = ref("azerty");

const onSearch = (newCity) => {
    city.value = newCity;
};
</script>
<template>
    <HeaderWeather @search="onSearch"/>
    <main class="weather-board">
        <DailyWeather class="left-side" :city="city"/>
        <div class="right-side">
            <FavoriteCity />
            <DetailedWeather />
            <DetailedWeather />
            <DetailedWeather />
            <DetailedWeather />
            <DetailedWeather />
            <DetailedWeather />
            <DetailedWeather />
        </div>
    </main>
</template>
<style lang="scss">
@import "../assets/scss/_variables.scss";

.weather-board {
    display: flex;
}
</style>
