const finale = new Date(2021, 3, 4, 0,0, 0);
const msg_f = "VmVzc2VsIHJldHVybmVkLgo="
const months = ["January", "February", "March", "April"];
const date = new Date();

function current() {
    return months[date.getMonth()] + " " + date.getDate();
}

function remaining() {
    date.setHours(0, 0, 0);
    return Math.round(Math.abs((finale - date) / (24 * 60 * 60 * 1000)));
}

function msg(){
    return window.atob(msg_f);
}
