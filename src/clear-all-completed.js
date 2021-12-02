import toDoList from './to-do-list.js';

const clearAllCompleted = () => {
  const clearAllButton = document.querySelector('.clear-completed-button');
  clearAllButton.addEventListener('click', () => {
    toDoList.data.filter((item) => item.completed).forEach((item) => {
      item.checkbox.parentNode.remove();
    });
    toDoList.data = toDoList.data.filter((item) => !item.completed);
    toDoList.data.forEach((item, index) => {
      item.index = index;
    });
    localStorage.setItem('toDoList', JSON.stringify(toDoList.data));
  });
};

export default clearAllCompleted;
