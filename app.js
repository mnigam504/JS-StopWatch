// Get DOM elements
let timer = document.getElementById('timer');
let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let resetBtn = document.getElementById('resetBtn');
let lapBtn = document.getElementById('lapBtn');
let laps = document.getElementById('laps');
let themeDropdownItems = document.querySelectorAll('[data-theme]');

// Variables for time, interval, and laps
let time = 0;
let interval;
let lapCounter = 0;

// Event listeners for buttons and theme dropdown
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', addLap);
themeDropdownItems.forEach(item => item.addEventListener('click', changeTheme));

// Function to start the timer
function startTimer() {
  if (!interval) {
    interval = setInterval(() => {
      time++;
      timer.textContent = formatTime(time);
    }, 1000);
  }
}

// Function to stop the timer
function stopTimer() {
  clearInterval(interval);
  interval = null;
}

// Function to reset the timer and laps
function resetTimer() {
    stopTimer();
    time = 0;
    lapCounter = 0;
    timer.textContent = formatTime(time);
    laps.innerHTML = '';
  }
  
  // Function to add a lap
  function addLap() {
    if (interval) {
      lapCounter++;
      let lapTime = formatTime(time);
      let lapItem = document.createElement('li');
      lapItem.className = 'list-group-item';
      lapItem.textContent = `Lap ${lapCounter}: ${lapTime}`;
      laps.appendChild(lapItem);
    }
  }
  
  // Function to change the theme
  function changeTheme(event) {
    let selectedTheme = event.target.dataset.theme;
    document.body.className = selectedTheme;
  }
  
  // Function to format time as hh:mm:ss
  function formatTime(time) {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;
  
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }
  
  // Function to pad a number with leading zeros
  function pad(number) {
    return number.toString().padStart(2, '0');
  }
  