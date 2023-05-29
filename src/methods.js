import flagIcons from "flag-icons/country.json"

export default {
    name: "methods"
}

export function fixNumber(number) {

    number = number / 2;
    number = Math.round(number);

    return number
}

export function flagCode(language) {
    switch (language) {
        case "en":
            language = "gb"
            break;
        case "ja":
            language = "jp"
            break;
        case "ko":
            language = "kr"
            break;
        default:
            break;
    }

    const result = flagIcons.filter(e => e.code == language);
    return result.length ? language : false;
}