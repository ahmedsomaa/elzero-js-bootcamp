const divElement = document.body.firstElementChild;
const pElement = document.body.lastElementChild.previousElementSibling;

function makeDiv(cls, title, dataValue, content) {
  let divEl = document.createElement('div');
  divEl.title = title;
  divEl.classList.add(cls);
  divEl.textContent = content;
  divEl.setAttribute('data-value', dataValue);
  return divEl;
}

function makeDOM() {
  // remove paragraph element
  document.body.removeChild(pElement);

  // add start & end divs after and before divElement
  const endDivEl = makeDiv('end', 'End Element', 'End', 'End');
  const startDivEl = makeDiv('start', 'Start Element', 'Start', 'Start');

  divElement.after(endDivEl);
  divElement.before(startDivEl);
}

makeDOM();
