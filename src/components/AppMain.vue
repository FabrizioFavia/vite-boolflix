<script>

import AppCard from './AppCard.vue';
import { store } from '../store';
import AppGenresSelect from "./AppGenresSelect.vue";

export default {
    name: "AppMain",
    components: {
        AppCard,
        AppGenresSelect
    },
    data() {
        return {
            store,
            coverPlaceholder: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png"

        }
    }
}

</script>

<template>
    <main>
        <!-- OFFCANCAS -->
        <AppGenresSelect />

        <!-- OFFCANVAS -->
        <h2 class="text-white mb-3 ms-2" v-if="store.dataResponseMovie.length > 0">Film</h2>
        <div class="movies">
            <AppCard :coverPlaceholder="coverPlaceholder" :cardElements="store.dataResponseMovie" />
        </div>
        <h2 class="text-white mb-3 ms-2 mt-3" v-if="store.dataResponseSeries.length > 0">Serie Tv</h2>
        <div class="movies">
            <AppCard :coverPlaceholder="coverPlaceholder" :cardElements="store.dataResponseSeries" />
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