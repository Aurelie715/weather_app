<script setup>
const props = defineProps(["favoriteCity"]);

const emit = defineEmits(["click", "remove"]);

const onClick = () => {
    emit("click", props.favoriteCity);
};

const onRemove = () => {
    emit("remove", props.favoriteCity);
};
</script>

<template>
    <div class="favoritecity-container">
        <div class="favorite-city" @click="onClick">
            {{favoriteCity}}
        </div>
        <button type="button" @click="onRemove">
            supprimer
        </button>
    </div>
</template>

<style scoped lang="scss">
    .favorite-city {}
</style>