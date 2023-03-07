// get the counter div
const counter = document.querySelector('div');

// create the timer
const timer = setInterval(function () {
  if (counter.innerHTML === '0') {
    window.location.href = 'https://elzero.org'
  } else {
    +counter.innerHTML--;
  }
}, 1000);
