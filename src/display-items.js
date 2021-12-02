import toDoList from './to-do-list.js';

const displayList = (list = toDoList.data) => {
  const container = document.getElementById('to-do-list');
  const clearCompletedButton = document.querySelector('.clear-completed-button');
  const itemElement = document.querySelector('.item');

  list.forEach((item) => {
    const itemElementCopy = itemElement.cloneNode(true);
    itemElementCopy.style.display = 'flex';
    const textElement = itemElementCopy.children[1];
    textElement.innerText = item.description;
    const checkbox = itemElementCopy.children[0];
    checkbox.checked = item.completed;
    item.checkbox = checkbox;

    container.insertBefore(itemElementCopy, clearCompletedButton);
  });
};

export default displayList;
