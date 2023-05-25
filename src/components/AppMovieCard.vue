<script>
import { store } from "../store";
export default {
    name: "AppMovieCard",
    data() {
        return {
            store,

        }
    }
}

</script>

<template>
    <div id="cardContainer">
        <div v-for="film in store.dataResponse">
            <div class="card text-white">
                <img v-if="film.poster_path" :src="store.imgPath + film.poster_path" alt="">
                <img v-if="!film.poster_path"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png"
                    alt="">
                <div v-show="film.poster_path" class="movieDescription">
                    <p><span>Titolo: </span>{{ film.title }}</p>
                    <p><span>Titolo originale: </span>{{ film.original_title }}</p>
                    <p><span>Voto: </span>{{ film.vote_average }}</p>
                    <p><span>Overview: </span>{{ film.overview.slice(0, 250) }}...</p>
                </div>

            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
@use "../main.scss" as *;


#cardContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

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

.card {
    max-width: 270px;
    margin: 30px;
    height: 400px;
    background-color: #222;
    border-radius: 10px;
    position: relative;
    border: 0.5px solid white;


    &:hover {
        background-color: rgb(15, 14, 14);
    }
}

img {
    height: 100%;
    min-width: 268px;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
    z-index: 1;

    &:hover {
        opacity: 0;
    }
}
</style>