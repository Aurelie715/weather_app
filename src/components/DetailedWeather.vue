<script setup>
import { getDayName } from '../services/date-helper';


const props = defineProps(["date", "icon", "temperature"]);
const dayName = getDayName(new Date(props.date));


</script>

<template>
    <div class="detailed-weather">
        <p>{{dayName}}</p>
        <p>{{date}}</p>
        <div class="icon" v-if="icon">
            <img :src="`icons/${icon}.png`" alt="">
        </div>
        <p>{{temperature}}°C</p>
    </div>
</template>

<style scoped lang="scss">
    .detailed-weather {
        display: flex;
        justify-content: space-between
    }
</style>