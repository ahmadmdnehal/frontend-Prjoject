const hour = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

function displayTime(){
    let date = new Date(); // ye puri date dega

    // getting hour, min ,sec from date

let hh = date.getHours(); //date se nikalkr hh me sirf hours dega
let mm = date.getMinutes(); // date se nikalkr mm me sirf minutes dega
let ss = date.getSeconds() // date se nikalkr ss me sirf second dega

let hRotation = 30*hh + mm/2; // h hours
let mRotation = 6*mm;   // m min
let srotaion = 6*ss;   // s second

hour.style.transform = `rotate(${hRotation}deg)`;
min.style.transform = `rotate(${mRotation}deg)`;
sec.style.transform = `rotate(${srotaion}deg)`


}

setInterval(displayTime, 1000);