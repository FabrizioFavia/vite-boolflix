import axios from "axios";

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
        store.dataResponseMovie = r.data.results;
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
        store.dataResponseSeries = r.data.results;
        console.log("lista serie: ", store.dataResponseSeries);
    })
}
