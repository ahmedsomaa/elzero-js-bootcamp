const btn = document.querySelector('.close-button');
const alertDiv = document.querySelector('.alert');

const timer = setTimeout(function () {
  alertDiv.style.display = 'block';
}, 5000);

btn.onclick = function () {
  alertDiv.style.display = 'none';
};
