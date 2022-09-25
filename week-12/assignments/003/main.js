const form = document.forms[0];
const input = document.getElementsByName('dollar')[0];
const output = document.getElementsByClassName('result')[0];

form.onsubmit = (e) => e.preventDefault();

input.addEventListener('input', (e) => {
    e.preventDefault();
    output.textContent = `${e.target.value} USD Dollar = ${usdToEgp(e.target.value)} Egyptian Pound`;
});

const usdToEgp = (dollar) => (parseInt(dollar) * 15.6).toFixed(2);
