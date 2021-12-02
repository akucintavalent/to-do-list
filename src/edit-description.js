import toDoList from './to-do-list.js';

const editDescription = (list = toDoList.data) => {
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

      const edit = () => {
        item.description = editDescriptionInput.value;
        localStorage.setItem('toDoList', JSON.stringify(toDoList.data));
        textElement.style.display = 'initial';
        textElement.innerText = editDescriptionInput.value;
        buttonTrash.style.display = 'none';
        button3Dots.style.display = 'initial';
        editDescriptionInput.style.display = 'none';
      };
      editDescriptionInput.addEventListener('keyup', ({ key }) => {
        if (key === 'Enter') {
          edit();
        }
      });

      editDescriptionInput.addEventListener('focusout', edit);

      buttonTrash.addEventListener('click', () => {
        item.checkbox.parentNode.remove();
        toDoList.data = toDoList.data.filter((itemEl) => itemEl !== item);
        toDoList.data.forEach((item, index) => {
          item.index = index;
        });
        localStorage.setItem('toDoList', JSON.stringify(toDoList.data));
      });
    });
  });
};

export default editDescription;
