function updateClock() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // Months are zero-indexed
    const day = now.getDate();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    document.getElementById('date').textContent = `${year}-${month}-${day}`;
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
}

function checkPassword() {
    const password = document.getElementById('password').value;
    if (password === 'yashisop') {
        document.getElementById('access').style.display = 'none';
        document.getElementById('content').style.display = 'block';
        document.getElementById('countdown-container').style.display = 'none';
    }
}

function countdownToBirthday() {
    const now = new Date();
    const targetDate = new Date('2024-09-06T00:00:00');
    const timeRemaining = targetDate - now;

    if (timeRemaining <= 0) {
        document.getElementById('countdown-container').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        
        document.getElementById('date').textContent = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;
        document.getElementById('time').textContent = '';
    }
}

function initialize() {
    setInterval(updateClock, 1000);
    setInterval(countdownToBirthday, 1000);
}

document.addEventListener('DOMContentLoaded', initialize);
