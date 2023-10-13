<script setup>
import { getDayName } from '../services/date-helper';
import { useForecastStore } from '../stores/forecast';
import { storeToRefs } from 'pinia'

const forecastStore = useForecastStore();

const { city, temperature, summary, icon } = storeToRefs(forecastStore);
const date = new Date();
const emit = defineEmits(["saveCity"]);

const day = getDayName(date);

const saveCity = () => {
    emit("saveCity", city);
};
</script>

<template>
    <div class="dailyweather-container" v-if="city">
        <div class="register-btn">
            <button type="button" @click="saveCity">Add to favorite cities</button>
        </div>
        <div class="daily-weather">
            <h2 class="city">{{ city }}</h2>
            <p class="day">{{ day }}</p>
            <p class="date">{{ date.toLocaleDateString("us") }}</p>
            <div class="icon">
                <img v-if="icon" :src="`icons/${icon}.png`" alt="">
            </div>
            <p>{{ summary }}</p>
            <p class="temperature">{{ temperature }}°C</p>
        </div>
    </div>
    <div v-else>Enter a city to access the weather forecast</div>
</template>

<style scoped lang="scss">
.dailyweather-container {
    display: flex;
    flex-direction: column;
    color: $color-primary;
    background-color: $color-secondary;
    padding: 30px;
    margin-right: 50px;
    height: 100vh;

    .daily-weather {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        justify-content: center;
    }

    .register-btn {
        display: flex;
        justify-content: flex-end;

        button {
            background-color: $color-primary;
            padding: 10px 15px;
            border: none;
            border-radius: 5px;
            color: $color-secondary;
            box-shadow: 0px 5px 5px $shadow;
            cursor: pointer;
        }
    }
}
</style>