const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const removebutton = document.getElementById('remove-button');

function addTask() {
  if (inputBox.value === ''){
    alert('Please enter a task');
  }
  
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = '\u00D7';
    li.appendChild(span);
  }
  inputBox.value = '';
  saveData();
}

function handleKeyPress(event) {
  if (event.keyCode === 13) {
    addTask();
  }
}

function removeAll() {
  listContainer.innerHTML = '';
  saveData();
}

inputBox.addEventListener('keypress', handleKeyPress);
listContainer.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    saveData();
  }
  else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem('data', listContainer.innerHTML);
}

function loadData() {
  listContainer.innerHTML = localStorage.getItem('data');
}
loadData();

