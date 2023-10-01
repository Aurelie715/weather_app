<script setup>
import { getWeather } from '../services/weather-api';
import { ref } from 'vue';

const temperature = ref()
getWeather().then((res) => {
    temperature.value = res.data.current.temperature;
    console.log(res);
})
</script>

<template>
    <div class="dailyweather-container">
        <div class="register-btn">
            <button type="button">enregistrer</button>
        </div>
        <h2 class="city">Paris</h2>
        <p class="day">Monday</p>
        <p class="date">25/09/2023</p>
        <div class="icon">
            <i></i>
        </div>
        <p >summary</p>
        <p class="temperature">{{temperature}}°C</p>
    </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/_variables.scss";
.dailyweather-container {
    display: flex;
    flex-direction: column;
    width: 40%;
    color: $color-primary;
    background-color: $color-secondary;
    padding: 30px;
    margin-left: 30px;
    border-radius: 20px;
    .register-btn {
        display: flex;
        justify-content: flex-end;
        button {
            width: 20%;
        }
    }
    .city {
    }
}

</style>