




import { reactive } from "vue"

export const store = reactive({
    imgPath: "https://image.tmdb.org/t/p/w500/",
    dataResponse: [],
    filter: {
        language: "it-IT",
        page: 1,
        query: null,
        adult: false
    },
    apiPathTrending: "/trending/movie/week",
    apiKey: "da9cd4e5f1333a50105ba2ee2ef4ecb7",
    apiPathSearch: "/search/movie",
    api: "https://api.themoviedb.org/3"
});