function updateTime() {
    const utcTimeElement = document.getElementById('utc-time');
    const currentDayElement = document.getElementById('current-day');

    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' });

    utcTimeElement.textContent = utcTime;
    currentDayElement.textContent = currentDay;
}

// Update the time every second
setInterval(updateTime, 1000);
updateTime();
