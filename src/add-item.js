import toDoList from './to-do-list.js';
import displayList from './display-items.js';
import Task from './task.js';
import updateItems from './status-updates.js';

const addElementToListHandler = () => {
  const inputField = document.querySelector('.input input');
  const returnSymbol = document.querySelector('.return-symbol');

  const addElementToList = () => {
    const newTask = new Task(inputField.value);
    displayList([
      newTask,
    ], false);
    updateItems([
      newTask,
    ]);
    toDoList.data.push(newTask);
    localStorage.setItem('toDoList', JSON.stringify(toDoList.data));
  };
  returnSymbol.addEventListener('click', addElementToList);

  inputField.addEventListener('keyup', ({ key }) => {
    if (key === 'Enter') {
      addElementToList();
    }
  });
};

export default addElementToListHandler;
