function updateTime() {
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    // Add leading zeros if needed
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;

    // Set AM or PM
    const period = hour >= 12 ? 'AM' : 'PM';
    document.getElementById('period').textContent = period;

    // Convert hour to 12-hour format
    hour = hour % 24;
    hour = hour ? hour : 24; // 12-hour clock, so 0 becomes 12

    document.getElementById('hour').innerHTML = '<span>' + hour + '</span><span>heure</span>';
    document.getElementById('minute').innerHTML = '<span>' + minute + '</span><span>minutes</span>';
    document.getElementById('second').innerHTML = '<span>' + second + '</span><span>secondes</span>';

    // Bold current day
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = days[now.getDay()];
    const dayElements = document.querySelectorAll('main div:nth-child(1) span');
    dayElements.forEach(element => {
        if (element.textContent === currentDay) {
            element.classList.add('bold');
        } else {
            element.classList.remove('bold');
        }
    });
}

// Update time every second
setInterval(updateTime, 1000);

// Toggle dark mode
const darkModeButton = document.querySelector('.dark');
const body = document.querySelector('body');

darkModeButton.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
});


const hourArrow = document.getElementById('hourArrow');
const minutesArrow = document.getElementById('minutesArrow');
const secondsArrow = document.getElementById('secondsArrow');

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();

    const hoursDegree = (hours % 12) * 30 + minutes * 0.5; // 360 degrees / 12 hours = 30 degrees per hour, plus additional movement based on minutes
    const minutesDegree = minutes * 6 + seconds * 0.1; // 360 degrees / 60 minutes = 6 degrees per minute, plus additional movement based on seconds
    const secondsDegree = (seconds * 6) + (milliseconds / 1000) * 360 / 60; // 360 degrees / 60 seconds = 6 degrees per second, plus additional fraction based on milliseconds

    hourArrow.style.transform = `rotate(${hoursDegree}deg)`;
    minutesArrow.style.transform = `rotate(${minutesDegree}deg)`;
    secondsArrow.style.transform = `rotate(${secondsDegree}deg)`;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initial call to update clock immediately
updateClock();

