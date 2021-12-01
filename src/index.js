import './style.css';
import { toDoList } from './to-do-list.js';
import { updateItems } from './status-updates.js';

const storedList = JSON.parse(localStorage.getItem('toDoList') || 'null');
if (storedList !== null) {
  toDoList.length = 0;
  toDoList.push(...storedList);
}

const displayList = () => {
  const container = document.getElementById('to-do-list');
  const clearCompletedButton = document.querySelector('.clear-completed-button');
  const itemElement = document.querySelector('.item');

  toDoList.forEach((item) => {
    const itemElementCopy = itemElement.cloneNode(true);
    const textElement = itemElementCopy.children[1];
    textElement.innerText = item.description;
    const checkbox = itemElementCopy.children[0];
    checkbox.checked = item.completed;
    item.checkbox = checkbox;

    container.insertBefore(itemElementCopy, clearCompletedButton);
  });
  itemElement.remove();
};

displayList();
updateItems();
