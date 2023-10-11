<script setup>
import { getWeather } from '../services/weather-api';
import { ref, watch } from 'vue';

const props = defineProps(["city"]);
const temperature = ref(0);
const summary = ref("");
const icon = ref();
const date = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const day = days[date.getDay()];

watch(props, ({city}) => {
    getWeather(city).then((res) => {
        temperature.value = res.data.current.temperature;
        summary.value = res.data.current.summary;
        icon.value = res.data.current.icon_num;
        console.log(res);
    });
});

const saveCity = () => {
    emit("saveCity", props.city);
}

</script>

<template>
    <div class="dailyweather-container">
        <div class="register-btn">
            <button type="button" @click="saveCity">save</button>
        </div>
        <h2 class="city">{{ city }}</h2>
        <p class="day">{{ day }}</p>
        <p class="date">{{ date.toLocaleDateString("en") }}</p>
        <div class="icon">
            <img :src="`icons/${icon}.png`" alt="">
        </div>
        <p>{{summary}}</p>
        <p class="temperature">{{ temperature }}°C</p>
    </div>
</template>

<style scoped lang="scss">
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

    .city {}
}
</style>