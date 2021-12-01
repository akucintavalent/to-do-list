import './style.css';

const toDoList = [
  {
    id: 1,
    description: 'Task 1',
    completed: false,
  },
  {
    id: 2,
    description: 'Finish to do list',
    completed: true,
  },
  {
    id: 3,
    description: 'Wash dishes',
    completed: false,
  },
  {
    id: 4,
    description: 'Lorem ipsum adlkshfalkjhLKJHlkjlkjlkJHLKJKLJHKLJhjkl kljh h  hjk hjkl lhjk khj kjlh hjkl hjkl jkl jkl h   jb',
    completed: false,
  },
];

const displayList = () => {
  const container = document.getElementById('to-do-list');
  const clearCompletedButton = document.querySelector('.clear-completed-button');
  const itemElement = document.querySelector('.item');

  toDoList.forEach((item) => {
    const itemElementCopy = itemElement.cloneNode(true);
    itemElementCopy.children[1].innerText = item.description;
    itemElementCopy.children[0].checked = item.completed;
    container.insertBefore(itemElementCopy, clearCompletedButton);
  });
  itemElement.remove();
};

displayList();
