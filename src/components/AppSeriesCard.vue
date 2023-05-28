<script>
import { store } from "../store";
import { fixNumber } from "../methods";
import { flagCode } from "../methods";


export default {
    name: "AppSeriesCard",
    props: [`coverPlaceholder`],

    data() {
        return {
            store,
            fixNumber,
            flagPath: `flag fi fi-`,
            flagCode



        }
    }
}

</script>

<template>
    <div id="cardContainer">
        <div v-for="series in store.dataResponseSeries">
            <div class="card text-white">
                <img v-if="series.poster_path" :src="store.imgPath + series.poster_path" alt="">
                <img v-if="!series.poster_path" :src="coverPlaceholder" alt="">

                <div v-show="series.poster_path" class="movieDescription">
                    <p><span>Titolo: </span>{{ series.name }}</p>
                    <p><span v-if="series.original_name.length < 20">Titolo originale: </span>{{ series.original_name }}
                    </p>
                    <template>{{ fixNumber(series.vote_average) }}</template>
                    <span>Voto: </span>
                    <div class="d-flex">
                        <template v-for="n in 5">
                            <i :class="n <= fixNumber(series.vote_average) ? `yellow` : ` `"
                                class="star fa-solid fa-star"></i>
                        </template>
                    </div>
                    <div class="flagContainer mt-2">
                        <span class="me-2">Lingua:</span>
                        <span v-if="!flagCode(series.original_language)" class="me-3">{{ series.original_language
                        }}</span>
                        <span class="flag" :class="flagPath + flagCode(series.original_language)"></span>
                    </div>
                    <p><span>Overview: </span>{{ series.overview.slice(0, 20) }}...</p>
                </div>

            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
@use "../main.scss" as *;

#cardContainer {
    display: flex;
    align-items: center;



    .movieDescription {
        padding: 20px;
        position: absolute;
        top: 0;
        z-index: 0;


        span {
            font-weight: 700;
            margin-bottom: 10px;
        }
    }
}

.flagContainer {
    display: flex;
}

.flag {
    height: 20px;
}

.card {
    width: 200px;
    margin: 10px;
    height: 300px;
    background-color: #222;
    border-radius: 10px;
    position: relative;
    border: 0.5px solid rgb(195, 194, 194);


    &:hover {
        background-color: rgb(15, 14, 14);
    }
}

img {
    height: 100%;
    max-width: 250px;
    object-fit: contain;
    object-position: center;
    border-radius: 10px;
    z-index: 1;

    &:hover {
        opacity: 5%;
    }
}

.star {
    display: inline-block;
}

.yellow {
    color: yellow;
}

.black {
    color: black;
}
</style>