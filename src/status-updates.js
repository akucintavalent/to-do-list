import toDoList from './to-do-list.js';

const updateItems = () => {
  toDoList.forEach((item) => {
    function onchange() {
      item.completed = this.checked;
      localStorage.setItem('toDoList', JSON.stringify(toDoList));
    }
    item.checkbox.addEventListener('change', onchange);
  });
};

export default updateItems;
