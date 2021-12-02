import toDoList from './to-do-list.js';

const updateItems = (list = toDoList.data) => {
  list.forEach((item) => {
    function onchange() {
      item.completed = this.checked;
      localStorage.setItem('toDoList', JSON.stringify(toDoList.data));
    }
    item.checkbox.addEventListener('change', onchange);
  });
};

export default updateItems;
