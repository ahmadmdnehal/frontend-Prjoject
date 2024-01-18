// const date = new Date();
// console.log(date);

const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');


const updateCountDown = (deadline) => {
    const currenTime = new Date();
    const timeDifference=  deadline-currenTime;//millisecond
    

    // calculate dates, hours, mins, seconds

    let calSecs = Math.floor(timeDifference/1000) % 60;
    let calMins = Math.floor(timeDifference/1000/60) %60;
    let calHours = Math.floor(timeDifference/1000/60/60)%24;
    let calDays = Math.floor(timeDifference/1000/60/60/24);
    // console.log(calDays);

    // special function
    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time;
    }


    days.textContent = formatTime(calDays);
    hours.textContent = formatTime(calHours);
    mins.textContent = formatTime(calMins);
    secs.textContent = formatTime(calSecs);


}
const countDown = (targetDate) =>{
setInterval(() => updateCountDown(targetDate),1000);
}



const targetDate = new Date("september 5 2023 16:35");
countDown(targetDate);

