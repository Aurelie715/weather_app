<script setup>
defineProps(["favoriteCity"]);
</script>

<template>
    <div class="favoritecity-container">
        <div class="favorite-city">
            {{favoriteCity}}
        </div>
        <button type="button">
            supprimer
        </button>
    </div>
</template>

<style scoped lang="scss">
    .favorite-city {}
</style>