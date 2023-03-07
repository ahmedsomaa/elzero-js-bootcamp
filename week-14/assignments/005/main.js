// get the counter div
const counter = document.querySelector('div');

// create the timer
const timer = setInterval(function () {
  if (counter.innerHTML === '5') {
    window.open('https://elzero.org', '', 'height=400, width=400');
  }

  if (counter.innerHTML === '0') {
    clearInterval(timer);
  }

  +counter.innerHTML--;
}, 1000);
