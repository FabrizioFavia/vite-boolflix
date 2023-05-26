<script>
import { store } from "../store";
import { fixNumber } from "../methods"
export default {
    name: "AppSeriesCard",

    data() {
        return {
            store,
            fixNumber,

            flagPath: `flag fi fi-`


        }
    }
}

</script>

<template>
    <div id="cardContainer">
        <div v-for="series in store.dataResponseSeries">
            <div class="card text-white">
                <img v-if="series.poster_path" :src="store.imgPath + series.poster_path" alt="">
                <img v-if="!series.poster_path"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png"
                    alt="">

                <div v-show="series.poster_path" class="movieDescription">
                    <p><span>Titolo: </span>{{ series.name }}</p>
                    <p><span>Titolo originale: </span>{{ series.original_name }}
                    </p>
                    <p><span>Voto: </span>{{ fixNumber(series.vote_average) }}</p>
                    <div class="flagContainer">
                        <span class="me-3">Lingua: {{ series.original_language }}</span>
                        <span class="flag" :class="flagPath + series.original_language"></span>
                        <!-- <img class="flag" :src="flagPath + series.original_language + imgFormat"> -->
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
    position: relative;
}

.flag {
    height: 20px;
    position: absolute;
    left: 60px;
    top: 2px;
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
</style>