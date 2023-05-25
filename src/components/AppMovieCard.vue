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
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
@use "../main.scss" as *;


#cardContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.card {
    max-width: 270px;
    margin: 30px;
    height: 400px;
    border: 1px solid rgb(125, 60, 60);
    background-color: #222;
    border-radius: 10px;
}

img {
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
}
</style>