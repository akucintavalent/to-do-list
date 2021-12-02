import toDoList from './to-do-list.js';

const editDescription = (list = toDoList) => {
  list.forEach((item) => {
    // localStorage.setItem('toDoList', JSON.stringify(toDoList));
    const button3Dots = item.checkbox.parentNode.querySelector('.fa-ellipsis-v');
    const buttonTrash = item.checkbox.parentNode.querySelector('.fa-trash-alt');
    const textElement = item.checkbox.parentNode.querySelector('p');
    const editDescriptionInput = item.checkbox.parentNode.querySelector('.edit-description');
    button3Dots.addEventListener('click', () => {
      buttonTrash.style.display = 'initial';
      button3Dots.style.display = 'none';
      editDescriptionInput.style.display = 'initial';
      textElement.style.display = 'none';
      editDescriptionInput.value = textElement.innerText;

      buttonTrash.addEventListener('click', () => {
        item.checkbox.parentNode.remove();
      });
    });
  });
};

export default editDescription;
