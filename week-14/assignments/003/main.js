// get the counter div
const counter = document.querySelector('div');

// create the timer
const timer = setInterval(function () {
  if (counter.innerHTML === '0') {
    clearInterval(timer);
  } else {
    +counter.innerHTML--;
  }
}, 1000);
