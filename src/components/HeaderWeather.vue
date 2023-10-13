<script setup>
import { ref } from 'vue';
import { useForecastStore } from '../stores/forecast';
import { storeToRefs } from 'pinia'

const forecastStore = useForecastStore();

const { searchError: error } = storeToRefs(forecastStore);

const city = ref("");

const submitCity = () => {
    if (city.value === '') {
        return;
    }
    forecastStore.setCity(city.value);

    city.value = "";
}
</script>

<template>
    <div class="header-container">
        <header class="search-bar">
            <div>
                <input type="text" placeholder="Enter a city..." name="city" class="city" v-model="city"
                    v-on:keyup.enter="submitCity" />
                <button type="button" @click="submitCity">Search</button>
            </div>
            <p v-if="error">{{ error }}</p>
        </header>
    </div>
</template>

<style scoped lang="scss">
.search-bar {
    display: flex;
    height: 100px;
    align-items: center;
    justify-content: flex-end;

    .city {
        width: 40%;
        height: 40px;
        border: 1px solid $color-secondary;
        border-radius: 5px 0 0 5px;
        background-color: $color-primary;
        padding-inline: 20px;
    }

    button {
        height: 40px;
        background-color: $color-secondary;
        color: $color-primary;
        border: 1px solid $color-secondary;
        border-radius: 0 5px 5px 0;
        cursor: pointer;
    }
}
</style>