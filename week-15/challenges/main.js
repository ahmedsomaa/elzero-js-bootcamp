const btn = document.querySelector('.add');
const inp = document.querySelector('.input');
const tsk = document.querySelector('.tasks');

// input field value
let inputValue = '';

// create un-orderd list
const ul = document.createElement('ul');

// check if tasks are in localStorage
if (localStorage.tasks) {
  // retireve tasks from localStorage
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.forEach((task) => ul.appendChild(createListItem(task)));
}

// append ul to tasks div
tsk.appendChild(ul);

// focus on the input field
inp.focus();

// add onChange Event listenter to input
inp.addEventListener('change', function (e) {
  inputValue = e.target.value;
});

// add onClick handler
btn.onclick = function () {
  // create the task
  const task = { id: Date.now(), title: inputValue };

  // add task listItem to ul
  ul.appendChild(createListItem(task));

  // add task to localstorage
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  let items = tasks || [];
  localStorage.setItem('tasks', JSON.stringify([...items, task]));

  // clear current input value
  inp.value = '';
};

// function to create a list item
function createListItem(item) {
  // initialize a list item
  const li = document.createElement('li');

  // create a span for title
  const title = document.createElement('span');
  title.textContent = item.title;

  // create delete button
  const button = document.createElement('button');
  button.textContent = 'Delete';
  button.classList.add('delete');

  // append span & button
  li.appendChild(title);
  li.appendChild(button);

  // handle onClickDelete
  button.addEventListener('click', function () {
    // remove list item from ul
    ul.removeChild(li);

    // remove task from localStorage
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.pop(tasks.findIndex((t) => t.id === item.id));
    localStorage.setItem('tasks', JSON.stringify([...tasks]));
  });

  return li;
}
