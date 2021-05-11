var mytodos = document.getElementsByTagName('li');
for (let i = 0; i < mytodos.length; i++) {
  let span = document.createElement('SPAN');
  let value = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(value);
  mytodos[i].appendChild(span);
}

var deleteTodo = function () {
  deleted = document.getElementsByClassName('close');
  for (let i = 0; i < deleted.length; i++) {
    deleted[i].onclick = function () {
      let parent = this.parentElement;
      parent.style.display = 'none';
    };
  }
};
deleteTodo();

var todosList = document.getElementsByTagName('ul');
todosList[0].addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
});

const object = {};
for (let i = 0; i < mytodos.length; i++) {
  object[i] = mytodos[i].textContent.substring(
    0,
    mytodos[i].textContent.length - 1
  );
}
console.log(object);
localStorage.setItem('todos', JSON.stringify(object));

// var getItems = JSON.parse(localStorage.getItem('todos'));
// console.log(getItems);

function newElement() {
  let newTodo = document.createElement('li');
  var input = document.getElementById('task').value;
  var text = document.createTextNode(input);
  newTodo.appendChild(text);
  if (input === '' || input.match(/^\s+|\s+$/g)) {
    $('.error').toast('show');
  } else {
    $('.success').toast('show');
    document.getElementById('list').appendChild(newTodo);
  }
  document.getElementById('task').value = '';

  let span = document.createElement('SPAN');
  let value = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(value);
  newTodo.appendChild(span);

  deleteTodo();
}
