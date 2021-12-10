/**
 * @jest-environment jsdom
 */

import addElementToListHandler from '../add-item.js';
import updateItems from '../status-updates.js';
import toDoList from '../to-do-list.js';

jest.mock('../status-updates.js');

describe('addition an removal of list elements', () => {
  document.body.innerHTML = `
  <ul id="to-do-list">
    <li class="title">
      <h2 title="To do list">To do list</h2>
      <i class="fas fa-sync-alt fa-xs"></i>
    </li>
    <li class="input">
      <input type="text" placeholder="Add to your list...">
      <span class="return-symbol">⏎</span>
    </li>
    <li class="item">
      <input type="checkbox">
      <p class="description">Double-tap to edit</p>
      <input class="edit-description" type="text" placeholder="Edit description">
      <i class="fas fa-ellipsis-v fa-sm"></i>
      <i class="far fa-trash-alt fa-sm"></i>
    </li>
    <li class="clear-completed-button">
      <span>Clear all completed</span>
    </li>
  </ul>
  `;
  const firstItemDescription = 'hello';
  addElementToListHandler();
  const inputField = document.querySelector('.input input');
  test('add the first element', () => {
    inputField.value = firstItemDescription;
    inputField.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }));
    expect(updateItems).toHaveBeenCalledTimes(1);
    expect(toDoList.data.length).toBe(1);
    expect(document.querySelectorAll('li').length).toBe(5);
  });
  test('adding the second element', () => {
    inputField.value = 'bye';
    inputField.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }));
    expect(updateItems).toHaveBeenCalledTimes(2);
    expect(toDoList.data.length).toBe(2);
    const arr = JSON.parse(localStorage.getItem('toDoList'));
    expect(arr[1].description).toBe('bye');
    expect(document.querySelectorAll('li').length).toBe(6);
  });
  test('removing of the second element', () => {
    const itemsDots = document.querySelectorAll('.fa-ellipsis-v');
    const lastItemDots = itemsDots[itemsDots.length - 1];
    const lastItemTrash = lastItemDots.nextElementSibling;
    lastItemDots.click();
    lastItemTrash.click();
    expect(toDoList.data.length).toBe(1);
    const arr = JSON.parse(localStorage.getItem('toDoList'));
    expect(arr[0].description).toBe(firstItemDescription);
    expect(document.querySelectorAll('li').length).toBe(5);
  });
});