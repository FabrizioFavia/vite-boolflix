




import { reactive } from "vue"


export const store = reactive({

    imgPath: "https://image.tmdb.org/t/p/w500/",
    dataResponseMovie: [],
    dataResponseSeries: [],
    movieGenres: [],
    tvGenres: [],
    filter: {
        language: "it-IT",
        page: 1,
        query: null,
        movieGenre: "",
        tvGenre: "",
        adult: false
    },
    apiPathTrending: "/trending/movie/week",
    apiKey: "da9cd4e5f1333a50105ba2ee2ef4ecb7",
    apiPathSearch: "/search/movie",
    apiPathSearchSeries: "/search/tv",
    apiPathSearchCastMovie: "/movie/:id/credits",
    apiPathSearchCastSeries: "/tv/:id/credits",
    apiPathSearchMovieGenres: "/genre/movie/list",
    apiPathSearchTvGenres: "/genre/tv/list",
    api: "https://api.themoviedb.org/3"
});