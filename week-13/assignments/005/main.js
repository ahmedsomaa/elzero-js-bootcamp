document.onclick = function (event) {
  event.target.nodeName !== 'BODY' && console.log(`This Is ${event.target.nodeName}`);
};
