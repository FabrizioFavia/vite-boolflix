<script>
import { store } from "../store";
import { fixNumber } from "../methods";
import { flagCode } from "../methods";

export default {
    name: "AppMovieCard",
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
        <div v-for="film in store.dataResponseMovie">
            <div class="card text-white">
                <img v-if="film.poster_path" :src="store.imgPath + film.poster_path" alt="">
                <img v-if="!film.poster_path" :src="coverPlaceholder" alt="">
                <div v-show="film.poster_path" class="movieDescription">
                    <p><span>Titolo: </span>{{ film.title }}</p>
                    <p v-if="film.original_title.length < 20 && film.original_title != film.title"><span>Titolo originale:
                        </span>{{ film.original_title }}
                    </p>
                    <!-- CREA IL COMPONENTE STARS -->
                    <template>{{ fixNumber(film.vote_average) }}</template>
                    <span>Voto: </span>
                    <div class="d-flex">
                        <template v-for="n in 5">
                            <i :class="n <= fixNumber(film.vote_average) ? `yellow` : ` `"
                                class="star fa-solid fa-star"></i>
                        </template>
                    </div>

                    <div class="flagContainer mt-2">
                        <span class="me-2">Lingua:</span>
                        <span v-if="!flagCode(film.original_language)" class="me-3"> {{ film.original_language
                        }}</span>
                        <span class="flag" :class="flagPath + flagCode(film.original_language)">
                        </span>
                    </div>
                    <p><span>Overview: </span>{{ film.overview.slice(0, 30) }}...</p>
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
    overflow-y: hidden;




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

.yellow {
    color: yellow;
}

.black {
    color: black;
}
</style>