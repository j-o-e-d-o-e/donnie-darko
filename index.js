finale = new Date("2021-04-04")
const date = new Date();
const monthNames = ["January", "February", "March", "April"];

function current() {
    return monthNames[date.getMonth()] + " " + date.getDate() + " 2021 ";
}

function remaining() {
    const remaining = Math.round(Math.abs((finale - date) / (24 * 60 * 60 * 1000)));
    return "(" + remaining + " DAYS REMAIN)";
}
