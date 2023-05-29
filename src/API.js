import axios from "axios";
import { fixNumber } from "./methods"

export function getData(store) {
    this.store.dataResponseMovie = [];
    if (!store.filter.query) {
        alert("inserisci il titolo di un film o di una serie")
        return
    }
    let params = {
        language: store.filter.language,
        page: store.filter.page > 0 ? store.filter.page : 1,
        query: store.filter.query,
        include_adult: store.filter.adult,
        api_key: store.apiKey,
    };

    axios.get(store.api + store.apiPathSearch, {
        params
    }).then(r => {
        r.data.results.forEach(result => {
            let paramsCast = {
                language: store.filter.language,
                api_key: store.apiKey,
            };
            axios.get(store.api + store.apiPathSearchCastMovie.replace(":id", result.id), {
                params: paramsCast
            }).then(castResponse => {

                let cast = castResponse.data.cast.slice(0, 5).map(e => e.name);
                const element = {
                    image: result.poster_path,
                    title: result.title,
                    original: result.original_title,
                    score: fixNumber(result.vote_average),
                    language: result.original_language,
                    description: result.overview,
                    id: result.id,
                    type: "Movies",
                    cast: cast,
                    genre: result.genre_ids
                };

                if (store.filter.movieGenre) {
                    if (element.genre.includes(store.filter.movieGenre)) {
                        store.dataResponseMovie.push(element);
                    }
                } else {
                    store.dataResponseMovie.push(element);
                }

            });
        });
    })
};

export function getDataSeries(store) {
    this.store.dataResponseSeries = [];
    if (!store.filter.query) {
        alert("inserisci il titolo di un film o di una serie")
        return
    }
    let params = {
        language: store.filter.language,
        page: store.filter.page > 0 ? store.filter.page : 1,
        query: store.filter.query,
        include_adult: store.filter.adult,
        api_key: store.apiKey,


    };
    axios.get(store.api + store.apiPathSearchSeries, {
        params
    }).then(r => {
        r.data.results.forEach(result => {
            let paramsCast = {
                language: store.filter.language,
                api_key: store.apiKey,
            };
            axios.get(store.api + store.apiPathSearchCastMovie.replace(":id", result.id), {
                params: paramsCast
            }).then(castResponse => {

                let cast = castResponse.data.cast.slice(0, 5).map(e => e.name);

                const element = {
                    image: result.poster_path,
                    title: result.name,
                    original: result.original_name,
                    score: fixNumber(result.vote_average),
                    language: result.original_language,
                    description: result.overview,
                    id: result.id,
                    type: "tvSeries",
                    cast,
                    genre: result.genre_ids
                }

                if (store.filter.tvGenre) {
                    if (element.genre.includes(store.filter.tvGenre)) {
                        store.dataResponseSeries.push(element)
                    }
                } else {
                    store.dataResponseSeries.push(element)
                }

            });
        });
    })
}


export function getMovieGenres(store) {
    this.store.movieGenres = []
    let params = {
        language: "it",
        api_key: store.apiKey
    };
    axios.get(store.api + store.apiPathSearchMovieGenres, {
        params
    }).then(r => {
        store.movieGenres = r.data.genres
        console.log("Generi ", store.movieGenres)
    })
}

export function getTvGenres(store) {
    this.store.tvGenres = []
    let params = {
        language: "it",
        api_key: store.apiKey
    };
    axios.get(store.api + store.apiPathSearchTvGenres, {
        params
    }).then(r => {
        store.tvGenres = r.data.genres
        console.log("Generi serie ", store.tvGenres)
    })
}