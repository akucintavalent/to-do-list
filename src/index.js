import './style.css';
import toDoList from './to-do-list.js';
import updateItems from './status-updates.js';
import displayList from './display-items.js';
import addElementToListHandler from './add-item.js';
import editDescription from './edit-description.js';
import clearAllCompleted from './clear-all-completed.js';

const storedList = JSON.parse(localStorage.getItem('toDoList') || 'null');
if (storedList !== null) {
  toDoList.data = storedList;
}
const itemElement = document.querySelector('.item');
itemElement.style.display = 'none';

displayList();
updateItems();
addElementToListHandler();
editDescription();
clearAllCompleted();
