<script>
import AppMovieCard from './AppMovieCard.vue';
import AppSeriesCard from './AppSeriesCard.vue';
import { store } from '../store'

export default {
    name: "AppMain",
    components: {
        AppMovieCard,
        AppSeriesCard
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
        <h2 class="text-white mb-3 ms-2" v-if="store.dataResponseMovie.length > 0">Film che contengono"{{
            store.filter.query }}"</h2>
        <div class="movies">
            <AppMovieCard />
        </div>
        <h2 class="text-white mb-3 ms-2 mt-3" v-if="store.dataResponseMovie.length > 0">Serie che contengono"{{
            store.filter.query }}"</h2>
        <div class="movies">
            <AppSeriesCard />
        </div>


    </main>
</template>

<style lang="scss" scoped>
@use "../main.scss" as *;

main {
    width: 100%;
    min-height: 711px;
    background-color: #222;
    padding: 30px;
}

.movies {
    max-height: 400px;
    overflow-y: hidden;
}
</style>