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
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        margin-bottom: 10px;
        .icon {
            height: 50px;
            width: 50px;
            img {
                max-width : 100%;
                height : auto;
            }
        }
    }
</style>