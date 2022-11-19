const currentElement = document.querySelector('.current');
const classesListDiv = document.querySelector('.classes-list div');
const addClassElement = document.querySelector('.classes-to-add');
const delClassElement = document.querySelector('.classes-to-remove');

addClassElement.onblur = function (event) {
  const classes = event.target.value.toLowerCase().split(' ');
  currentElement.classList.add(...classes);
  addClassElement.value = '';
  classesListDiv.innerHTML = '';
  showClasses(currentElement, classesListDiv);
};

delClassElement.onblur = function (event) {
  const classes = event.target.value.toLowerCase().split(' ');
  currentElement.classList.remove(...classes);
  delClassElement.value = '';
  classesListDiv.innerHTML = '';
  showClasses(currentElement, classesListDiv);
};

function showClasses(curr, res) {
  if (curr.classList.length === 0) {
    res.innerHTML = 'No Classes To Show';
  } else {
    [...curr.classList].map((c) => {
      let span = document.createElement('span');
      span.textContent = c;
      res.appendChild(span);
    });
  }
}

showClasses(currentElement, classesListDiv);
