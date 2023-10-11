<script setup>
import { ref } from 'vue';

const emit = defineEmits(["search"]);

const city = ref("");

const submitCity = () => {
    console.log(city, city.value);
    emit("search", city.value);
    city.value = "";
}

// watch(city, (newCity) => {
    
// });
</script>

<template>
    <header class="search-bar">
            <input type="text" placeholder="Rechercher une ville" name="city" class="city" v-model="city" v-on:keyup.enter="submitCity"/>
            <button type="button" @click="submitCity">Search</button>
    </header>
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
        }
    }
</style>