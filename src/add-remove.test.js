// const addElementToListHandler = require('./add-item');
import mountDOM from 'jsdom-mount';
import { readFileSync } from 'fs';
import addElementToListHandler from './add-item.js';

const html = readFileSync('src/index.html', 'utf8');

describe('adding', () => {
  test('test1', async () => {
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
});