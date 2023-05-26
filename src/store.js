




import { reactive } from "vue"
/* import { film } from "./components/AppMovieCard" */

/* export default {
    film
} */

export const store = reactive({
    imgPath: "https://image.tmdb.org/t/p/w500/",
    dataResponseMovie: [],
    dataResponseSeries: [],
    filter: {
        language: "it-IT",
        page: 1,
        query: null,
        adult: false
    },
    apiPathTrending: "/trending/movie/week",
    apiKey: "da9cd4e5f1333a50105ba2ee2ef4ecb7",
    apiPathSearch: "/search/movie",
    apiPathSearchSeries: "/search/tv",
    api: "https://api.themoviedb.org/3"
});