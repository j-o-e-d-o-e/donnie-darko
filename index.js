finale = new Date("2021-04-04")
const date = new Date();
const months = ["January", "February", "March", "April"];

function current() {
    return months[date.getMonth()] + " " + date.getDate();
}

function remaining() {
    return Math.round(Math.abs((finale - date) / (24 * 60 * 60 * 1000)));
}
