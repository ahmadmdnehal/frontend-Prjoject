const time = document.getElementById('time');
const timeformate = document.getElementById('timeformate');

document.addEventListener('DOMContentLoaded', () => {
    setInterval(showTime, 1000);
})

const showTime = () => {
    let date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    // let ml = date.getMilliseconds();


    hr = hr < 10 ? `0${hr}` : hr;
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;
    // console.log("hours " + hr + " mins "+ min +" sec" + sec )
    time.innerHTML = `${hr} : ${min} : ${sec}`;
    timeformate.innerHTML = hr > 12 ? "PM" : "AM"
}