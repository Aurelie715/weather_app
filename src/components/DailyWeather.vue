<script setup>
import { getWeather } from '../services/weather-api';
getWeather().then((res) => {
    console.log(res);
})
</script>

<template>
    <div>
        <h2 class="city">Paris</h2>
        <p class="day">Monday</p>
        <p class="date">25/09/2023</p>
        <div class="icon">
            <i></i>
        </div>
        <p class="temperature">20 °C</p>
    </div>
</template>

<style scoped>
</style>