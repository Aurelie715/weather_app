<script setup>
import { getDayName } from '../services/date-helper';
import { getWeather } from '../services/weather-api';
import { ref, watch } from 'vue';

const props = defineProps(["city"]);
const temperature = ref(0);
const summary = ref("");
const icon = ref();
const date = new Date();
const emit = defineEmits(["saveCity"]);

const day = getDayName(date);

watch(props, ({ city }) => {
    getWeather(city).then((res) => {
        temperature.value = res.data.current.temperature;
        summary.value = res.data.current.summary;
        icon.value = res.data.current.icon_num;
        console.log(res);
    }).catch((error) => {
        if (error.response) {
            console.error("cette ville n'existe pas");
            return null;
        }
    });
});

const saveCity = () => {
    emit("saveCity", props.city);
}

</script>

<template>
    <div class="dailyweather-container">
        <div class="register-btn">
            <button type="button" @click="saveCity">Add to favorite cities</button>
        </div>
        <div class="daily-weather">
            <h2 class="city">{{ city }}</h2>
            <p class="day">{{ day }}</p>
            <p class="date">{{ date.toLocaleDateString("us") }}</p>
            <div class="icon" v-if="icon">
                <img :src="`icons/${icon}.png`" alt="">
            </div>
            <p>{{ summary }}</p>
            <p class="temperature">{{ temperature }}°C</p>
        </div>
    </div>
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
        align-items: center
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
        }
    }

    .city {}

    .day {}
}
</style>