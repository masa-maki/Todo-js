import './style.css';

const onClickAdd = () => {
  // Get value from inputText and initialize
  const inputText = document.getElementById('add-text').value;
  document.getElementById('add-text').value = '';
  // alert(inputText);

  const li = document.createElement('li');
  const div = document.createElement('div');
  div.className = 'list-row';
  const p = document.createElement('p');
  // p.className = 'todo-item';
  p.innerText = inputText;
  const completeButton = document.createElement('button');
  completeButton.innerText = 'Finish';
  completeButton.className = 'finish';
  completeButton.addEventListener('click', () => {
    const moveTarget = completeButton.closest('li');
    completeButton.nextElementSibling.remove();
    completeButton.remove();
    const backButton = document.createElement('button');
    backButton.innerText = 'Redo';
    moveTarget.firstElementChild.appendChild(backButton);
    // Move to DONE list
    document.getElementById('complete-list').appendChild(moveTarget);
  });

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'x Delete';
  deleteButton.className = 'delete';
  deleteButton.addEventListener('click', () => {
    const deleteTarget = deleteButton.closest('li');
    document.getElementById('incomplete-list').removeChild(deleteTarget);
  });

  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  document.getElementById('incomplete-list').appendChild(li);
  // console.log(li);
};

document.getElementById('add-button').addEventListener('click', onClickAdd);
