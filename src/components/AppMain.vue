<script>
import AppMovieCard from './AppMovieCard.vue';
import { store } from '../store'

export default {
    name: "AppMain",
    components: {
        AppMovieCard
    },
    data() {
        return {
            store,

        }
    }
}

</script>

<template>
    <main>
        <h2 class="text-white" v-if="store.dataResponse.length > 0">Film che contengono "{{ store.filter.query }}"</h2>
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