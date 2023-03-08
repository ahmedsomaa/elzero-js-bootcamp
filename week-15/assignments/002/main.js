const age = document.getElementById('age');
const uname = document.getElementById('name');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');

console.log(age);

if (sessionStorage['age']) {
  age.value = sessionStorage.getItem('age');
}

if (sessionStorage['name']) {
  uname.value = sessionStorage.getItem('name');
}

if (sessionStorage['email']) {
  email.value = sessionStorage.getItem('email');
}

if (sessionStorage['mobile']) {
  mobile.value = sessionStorage.getItem('mobile');
}

age.addEventListener('input', function (e) {
  sessionStorage.setItem('age', e.target.value);
});

uname.addEventListener('input', function (e) {
  sessionStorage.setItem('name', e.target.value);
});

email.addEventListener('input', function (e) {
  sessionStorage.setItem('email', e.target.value);
});

mobile.addEventListener('input', function (e) {
  sessionStorage.setItem('mobile', e.target.value);
});
