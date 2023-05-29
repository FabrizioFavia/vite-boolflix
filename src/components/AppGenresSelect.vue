<script>
import { store } from "../store";
import { getMovieGenres, getTvGenres, getData, getDataSeries } from "../API"

export default {
    name: "AppGenresSelect",
    data() {
        return {
            store,
            getMovieGenres,
            getTvGenres,
            getData,
            getDataSeries
        }
    },
    mounted() {
        this.getMovieGenres(this.store),
            this.getTvGenres(this.store)
    },
    methods: {
        resetFilter() {
            this.store.filter.movieGenre = "";
            this.store.filter.tvGenre = "";
            this.store.filter.query = "";
        }
    }
}

</script>

<template>
    <div class="offcanvas bg-dark offcanvas-end text-white" tabindex="-1" id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Seleziona il genere</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div class="input-group flex-nowrap mb-3">
                <input type="text" class="form-control" placeholder="Titolo Film/Serie" aria-label="Title"
                    aria-describedby="addon-wrapping" v-model="store.filter.query">
            </div>
            <div class="selectMovie mb-3">
                <select v-model="store.filter.movieGenre" class="form-select" aria-label="Default select example">
                    <option value="" selected>Seleziona genere film</option>
                    <template v-for="genre in store.movieGenres">
                        <option :value="genre.id">{{ genre.name }}</option>
                    </template>
                </select>
            </div>
            <div class="selectSeries mb-3">
                <select v-model="store.filter.tvGenre" class="form-select" aria-label="Default select example">
                    <option value="" selected>Seleziona genere Tv</option>
                    <template v-for="genre in store.tvGenres">
                        <option :value="genre.id">{{ genre.name }}</option>
                    </template>
                </select>
            </div>
            <div class="buttons d-flex mt-5 justify-content-end">
                <button @click="resetFilter()" type="button" class="btn btn-dark border-light me-3">Reset</button>
                <button data-bs-dismiss="offcanvas" aria-label="Close" @click="getData(store), getDataSeries(store)"
                    type="button" class="btn btn-dark border-light">Applica Filtri</button>

            </div>
        </div>
    </div>
</template>
