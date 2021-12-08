// const addElementToListHandler = require('./add-item');
import mountDOM from 'jsdom-mount';
import { readFileSync } from 'fs';
import addElementToListHandler from './add-item.js';

const html = readFileSync('src/index.html', 'utf8');

function generateRandomString() {
  return (Math.random() + 1).toString(36).substring(2);
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

describe('add-remove tasks functionality', () => {
  test('adding and removing a task', () => {
    mountDOM(html);
    addElementToListHandler();
    const input = document.querySelector('.input input');
    input.value = 'hello';
    const addButton = document.querySelector('.return-symbol');
    addButton.click();
    let buttons3Dots = document.querySelectorAll('.fa-ellipsis-v');
    expect(buttons3Dots.length).toBe(2);
    const button3Dots = buttons3Dots[1];
    const pTag = button3Dots.parentNode.querySelector('p');
    expect(pTag.innerText).toBe('hello');
    button3Dots.click();
    const editInput = button3Dots.parentNode.querySelector('.edit-description');
    expect(editInput.value).toBe('hello');
    editInput.focus();
    editInput.value = 'bye';
    editInput.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }));
    expect(pTag.innerText).toBe('bye');
    const trashButton = button3Dots.parentNode.querySelector('.fa-trash-alt');
    trashButton.click();
    buttons3Dots = document.querySelectorAll('.fa-ellipsis-v');
    expect(buttons3Dots.length).toBe(1);
  });
  test('no duplicate task', () => {
    const text = 'Duplicate task';
    mountDOM(html);
    addElementToListHandler();
    const input = document.querySelector('.input input');
    input.value = text;
    const addButton = document.querySelector('.return-symbol');
    addButton.click();
    input.value = text;
    expect(() => addButton.click()).toThrow();
  });
  test('add between 3 and 20 tasks with random text', () => {
    mountDOM(html);
    addElementToListHandler();
    const input = document.querySelector('.input input');
    const addButton = document.querySelector('.return-symbol');
    function addTask(text) {
      input.value = text;
      addButton.click();
    }
    const randomStrings = [];
    const numberOfTasks = getRandomInt(3, 20);
    for (let i = 0; i < numberOfTasks; i += 1) {
      randomStrings.push(generateRandomString());
    }
    randomStrings.forEach((randString) => addTask(randString));
    const taskDescriptionTags = Array.from(document.querySelectorAll('.description'));
    taskDescriptionTags.shift();
    expect(randomStrings).toEqual(taskDescriptionTags.map((pTag) => pTag.innerText));
  });
});
