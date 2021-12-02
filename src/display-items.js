import toDoList from './to-do-list.js';

const displayList = (list = toDoList, removeFirst = true) => {
  const container = document.getElementById('to-do-list');
  const clearCompletedButton = document.querySelector('.clear-completed-button');
  const itemElement = document.querySelector('.item');

  list.forEach((item) => {
    const itemElementCopy = itemElement.cloneNode(true);
    const textElement = itemElementCopy.children[1];
    textElement.innerText = item.description;
    const checkbox = itemElementCopy.children[0];
    checkbox.checked = item.completed;
    item.checkbox = checkbox;

    container.insertBefore(itemElementCopy, clearCompletedButton);
  });
  if (removeFirst) {
    itemElement.remove();
  }
};

export default displayList;
