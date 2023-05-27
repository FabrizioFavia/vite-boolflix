<script>
import { store } from "../store";
import { fixNumber } from "../methods"
export default {
    name: "AppMovieCard",

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
        <div v-for="film in store.dataResponseMovie">
            <div class="card text-white">
                <img v-if="film.poster_path" :src="store.imgPath + film.poster_path" alt="">
                <img v-if="!film.poster_path"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png"
                    alt="">

                <div v-show="film.poster_path" class="movieDescription">
                    <p><span>Titolo: </span>{{ film.title }}</p>
                    <p v-if="film.original_title.length < 20"><span>Titolo originale:
                        </span>{{ film.original_title }}
                    </p>
                    <template>{{ fixNumber(film.vote_average) }}</template>
                    <span>Voto: </span>
                    <div class="d-flex">
                        <template v-for="n in 5">
                            <i :class="n <= fixNumber(film.vote_average) ? `yellow` : ` `"
                                class="star fa-solid fa-star"></i>
                        </template>
                    </div>
                    <div class="flagContainer">
                        <span class="me-3">Lingua: {{ film.original_language }}</span>
                        <span class="flag" :class="flagPath + film.original_language"></span>
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