const clock = document.getElementsByClassName('clock')[0];

let time = 1;

setInterval(function () {
    clock.innerText = Math.round(time += 1) /100
}, 10)
