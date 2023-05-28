import axios from "axios";
import { fixNumber } from "./methods"

export function getData(store) {

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
            const element = {
                image: result.poster_path,
                title: result.title,
                original: result.original_title,
                score: fixNumber(result.vote_average),
                language: result.original_language,
                description: result.overview,
                id: result.id,
                type: "Movies"
            }
            store.dataResponseMovie.push(element)
        });
        console.log(store.dataResponseMovie);
    })
};

export function getDataSeries(store) {

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
            const element = {
                image: result.poster_path,
                title: result.name,
                original: result.original_name,
                score: fixNumber(result.vote_average),
                language: result.original_language,
                description: result.overview,
                id: result.id,
                type: "tvSeries"
            }
            store.dataResponseSeries.push(element)
        });

        console.log("lista serie: ", store.dataResponseSeries);
    })
}
