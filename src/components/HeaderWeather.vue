<script setup>
import { ref } from 'vue';

const emit = defineEmits(["search"]);

const city = ref("");

const submitCity = () => {
    console.log(city, city.value);
    emit("search", city.value);
}

// watch(city, (newCity) => {
    
// });
</script>

<template>
    <header>
        <div>app meteo</div>
        <div>
            <input type="text" placeholder="Rechercher une ville" name="city" class="city" v-model="city" v-on:keyup.enter="submitCity"/>
            
            
            <button type="button" @click="submitCity">Search</button>
        </div>
    </header>
</template>

<style scoped lang="scss">
 header {
    display: flex;
    justify-content: space-between;
 }
</style>