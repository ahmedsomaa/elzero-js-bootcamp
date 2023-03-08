const header = document.getElementById('msg');
const fontSizeSelector = document.getElementById('font-size');
const fontColorSelector = document.getElementById('font-color');
const fontFamilySelector = document.getElementById('font-family');

if (localStorage['font-family']) {
  const fontFamily = localStorage.getItem('font-family');
  header.style.fontFamily = fontFamily;
  fontFamilySelector.value = fontFamily;
}

if (localStorage['color']) {
  const color = localStorage.getItem('color');
  header.style.color = color;
  fontColorSelector.value = color;
}

if (localStorage['font-size']) {
  const fontSize = localStorage.getItem('font-size');
  header.style.fontSize = fontSize;
  fontSizeSelector.value = fontSize;
}

fontFamilySelector.addEventListener('change', function (e) {
  header.style.fontFamily = e.target.value;
  localStorage.setItem('font-family', e.target.value);
});

fontColorSelector.addEventListener('change', function (e) {
  header.style.color = e.target.value;
  localStorage.setItem('color', e.target.value);
});

fontSizeSelector.addEventListener('change', function (e) {
  header.style.fontSize = e.target.value;
  localStorage.setItem('font-size', e.target.value);
});
