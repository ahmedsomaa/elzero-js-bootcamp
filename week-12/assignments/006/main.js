let nums;
let text;
let type;

const form = document.forms[0];
const result = document.querySelector('.results');
const typeInput = document.querySelector('[name="type"]');
const textInput = document.querySelector('[name="texts"]');
const numsInput = document.querySelector('[name="elements"]');

numsInput.oninput = (e) => (nums = e.target.value);
textInput.oninput = (e) => (text = e.target.value);
typeInput.oninput = (e) => (type = e.target.value);

form.onsubmit = (e) => {
    e.preventDefault();
    result.innerHTML = '';
    for (let i = 0; i < nums; i++) {
        const el = document.createElement(type);
        el.className = 'box';
        el.textContent = text;
        el.setAttribute('title', text);
        el.setAttribute('id', `id-${i + 1}`);
        result.appendChild(el);
    }
};
