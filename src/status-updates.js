import { toDoList } from './to-do-list.js';

// eslint-disable-next-line import/prefer-default-export
export const updateItems = () => {
  toDoList.forEach((item) => {
    function onchange() {
      item.completed = this.checked;
      localStorage.setItem('toDoList', JSON.stringify(toDoList));
    }
    item.checkbox.addEventListener('change', onchange);
  });
};
