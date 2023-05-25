<script>
import AppMovieCard from './AppMovieCard.vue';
export default {
    name: "AppMain",
    components: {
        AppMovieCard
    }
}

</script>

<template>
    <main>
        <AppMovieCard />
    </main>
</template>

<style lang="scss" scoped>
@use "../main.scss" as *;

main {
    width: 100%;
    min-height: calc(970px - 75px);
    background-color: #222;
    padding: 30px;
}
</style>