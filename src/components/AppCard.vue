<script>
import { store } from "../store";
import { flagCode } from "../methods";


export default {
    name: "AppCard",
    props: [`coverPlaceholder`,
        'cardElements'
    ],


    data() {
        return {
            store,
            flagPath: `flag fi fi-`,
            flagCode



        }
    }
}

</script>

<template>
    <div id="cardContainer">
        <div v-for="card in cardElements">

            <div class="card text-white">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img v-if="card.image" :src="store.imgPath + card.image" alt="">
                            <img v-if="!card.image" :src="coverPlaceholder" alt="">
                        </div>
                        <div class="flip-card-back">
                            <div class="movieDescription">
                                <p><span>Titolo: </span>{{ card.title }}</p>
                                <p><span v-if="card.original.length < 20">Titolo originale: </span>{{
                                    card.original }}
                                </p>
                                <template>{{ card.score }}</template>
                                <span>Voto: </span>
                                <div class="d-flex">
                                    <template v-for="n in 5">
                                        <i :class="n <= card.score ? `yellow` : ` `" class="star fa-solid fa-star"></i>
                                    </template>
                                </div>
                                <div class="flagContainer mt-2">
                                    <span class="me-2">Lingua:</span>
                                    <span v-if="!flagCode(card.language)" class="me-3">{{
                                        card.language
                                    }}</span>
                                    <span class="flag" :class="flagPath + flagCode(card.language)"></span>
                                </div>
                                <p><span>Overview: </span>{{ card.description.slice(0, 20) }}...</p>
                            </div>
                        </div>
                    </div>
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

}

img {
    height: 100%;
    max-width: 200px;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;

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


