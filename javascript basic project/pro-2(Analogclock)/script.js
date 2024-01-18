let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime(){
    let date = new Date();
    
    // getting only hours, mins, secs from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    
    // hours rotation
    let hRotation = 30*hh + mm/2;
    // min rotation
    let mRotation = 6*mm;
    // sec rotation 
    let srotation = 6*ss;

    //hours style rotate
    hr.style.transform = `rotate(${hRotation}deg)`;
    // minutes style rotate
    min.style.transform = `rotate(${mRotation}deg)`;
    // seconds style rotation
    sec.style.transform = `rotate(${srotation}deg)`;
}
setInterval(displayTime, 1000);