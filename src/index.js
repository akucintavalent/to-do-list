import './style.css';
import toDoList from './to-do-list.js';
import updateItems from './status-updates.js';
import displayList from './display-items.js';
import addElementToListHandler from './add-item.js';
import editDescription from './edit-description.js';

const storedList = JSON.parse(localStorage.getItem('toDoList') || 'null');
if (storedList !== null) {
  toDoList.data = storedList;
}

displayList();
updateItems();
addElementToListHandler();
editDescription();
