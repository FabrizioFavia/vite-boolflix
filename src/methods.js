export default {
    name: "methods"
}

export function fixNumber(number) {
    let stars = [];
    let star = "s";

    number = number / 2;
    number = Math.ceil(number);

    for (let i = 0; i < number; i++) {

        stars.push(star);
    }

    console.log(stars)

    return stars.length
}