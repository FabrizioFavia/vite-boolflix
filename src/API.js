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
                    cast: cast
                }
                store.dataResponseMovie.push(element)
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
                }
                store.dataResponseSeries.push(element)
            });
        });
    })
}
