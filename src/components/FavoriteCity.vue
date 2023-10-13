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
            remove
        </button>
    </div>
</template>

<style scoped lang="scss">
    .favoritecity-container {
        display: flex;
        flex-direction: column;
        width: 100px;
        margin-right: 30px;
        margin-bottom: 20px;
        .favorite-city {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100px;
            background-color: $color-secondary;
            color: $color-primary;
            border-radius: 20px;
            margin-bottom: 10px;
            box-shadow: 0px 2px 10px $shadow;
            cursor: pointer;
        }
        button {
            color: $color-secondary;
            border: 1px solid $color-secondary;
            background-color: $color-primary;
            border-radius: 5px;
            cursor: pointer;
        }
    }
</style>