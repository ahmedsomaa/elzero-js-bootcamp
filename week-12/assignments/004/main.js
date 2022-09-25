const div_1 = document.querySelector('.one');
const div_2 = document.querySelector('.two');
const divs = document.getElementsByTagName('div');

let t1 = div_1.getAttribute('title');
let t2 = div_2.getAttribute('title');
let txt1 = div_1.textContent;
let txt2 = div_2.textContent;

div_1.textContent = txt2;
div_1.setAttribute('title', t2);

div_2.textContent = `${txt1} ${divs.length}`;
div_2.setAttribute('title', t1);
