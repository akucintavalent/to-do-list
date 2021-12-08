/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/display-items.js":
/*!******************************!*\
  !*** ./src/display-items.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _to_do_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-do-list.js */ "./src/to-do-list.js");


const displayList = (list = _to_do_list_js__WEBPACK_IMPORTED_MODULE_0__["default"].data) => {
  const container = document.getElementById('to-do-list');
  const clearCompletedButton = document.querySelector('.clear-completed-button');
  const itemElement = document.querySelector('.item');

  list.forEach((item) => {
    const itemElementCopy = itemElement.cloneNode(true);
    itemElementCopy.style.display = 'flex';
    const textElement = itemElementCopy.children[1];
    textElement.innerText = item.description;
    const checkbox = itemElementCopy.children[0];
    checkbox.checked = item.completed;
    item.checkbox = checkbox;

    container.insertBefore(itemElementCopy, clearCompletedButton);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayList);


/***/ }),

/***/ "./src/edit-description.js":
/*!*********************************!*\
  !*** ./src/edit-description.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _to_do_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-do-list.js */ "./src/to-do-list.js");


const editDescription = (list = _to_do_list_js__WEBPACK_IMPORTED_MODULE_0__["default"].data) => {
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
    });
    const edit = () => {
      item.description = editDescriptionInput.value;
      textElement.style.display = 'initial';
      textElement.innerText = editDescriptionInput.value;
      buttonTrash.style.display = 'none';
      button3Dots.style.display = 'initial';
      editDescriptionInput.style.display = 'none';
      localStorage.setItem('toDoList', JSON.stringify(_to_do_list_js__WEBPACK_IMPORTED_MODULE_0__["default"].data));
    };
    editDescriptionInput.addEventListener('keyup', ({ key }) => {
      if (key === 'Enter') {
        edit();
      }
    });

    editDescriptionInput.addEventListener('focusout', edit);

    buttonTrash.addEventListener('click', () => {
      item.checkbox.parentNode.remove();
      _to_do_list_js__WEBPACK_IMPORTED_MODULE_0__["default"].data = _to_do_list_js__WEBPACK_IMPORTED_MODULE_0__["default"].data.filter((itemEl) => itemEl !== item);
      _to_do_list_js__WEBPACK_IMPORTED_MODULE_0__["default"].data.forEach((item, index) => {
        item.index = index;
      });
      localStorage.setItem('toDoList', JSON.stringify(_to_do_list_js__WEBPACK_IMPORTED_MODULE_0__["default"].data));
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editDescription);


/***/ }),

/***/ "./src/status-updates.js":
/*!*******************************!*\
  !*** ./src/status-updates.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _to_do_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-do-list.js */ "./src/to-do-list.js");


const updateItems = (list = _to_do_list_js__WEBPACK_IMPORTED_MODULE_0__["default"].data) => {
  list.forEach((item) => {
    function onchange() {
      item.completed = this.checked;
      localStorage.setItem('toDoList', JSON.stringify(_to_do_list_js__WEBPACK_IMPORTED_MODULE_0__["default"].data));
    }
    item.checkbox.addEventListener('change', onchange);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateItems);


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
function Task(description, index, completed = false) {
  this.description = description;
  this.completed = completed;
  this.index = index;
}


/***/ }),

/***/ "./src/to-do-list.js":
/*!***************************!*\
  !*** ./src/to-do-list.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const toDoList = [];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ data: toDoList });


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/add-item.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _to_do_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-do-list.js */ "./src/to-do-list.js");
/* harmony import */ var _display_items_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-items.js */ "./src/display-items.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _status_updates_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./status-updates.js */ "./src/status-updates.js");
/* harmony import */ var _edit_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-description.js */ "./src/edit-description.js");






const addElementToListHandler = () => {
  const inputField = document.querySelector('.input input');
  const returnSymbol = document.querySelector('.return-symbol');

  const addElementToList = () => {
    const newTask = new _task_js__WEBPACK_IMPORTED_MODULE_2__["default"](inputField.value, _to_do_list_js__WEBPACK_IMPORTED_MODULE_0__["default"].data.length);
    (0,_display_items_js__WEBPACK_IMPORTED_MODULE_1__["default"])([
      newTask,
    ]);
    (0,_status_updates_js__WEBPACK_IMPORTED_MODULE_3__["default"])([
      newTask,
    ]);
    (0,_edit_description_js__WEBPACK_IMPORTED_MODULE_4__["default"])([
      newTask,
    ]);
    _to_do_list_js__WEBPACK_IMPORTED_MODULE_0__["default"].data.push(newTask);
    localStorage.setItem('toDoList', JSON.stringify(_to_do_list_js__WEBPACK_IMPORTED_MODULE_0__["default"].data));
    inputField.value = '';
  };
  returnSymbol.addEventListener('click', addElementToList);

  inputField.addEventListener('keyup', ({ key }) => {
    if (key === 'Enter') {
      addElementToList();
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addElementToListHandler);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkX2l0ZW0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDOztBQUV2Qyw0QkFBNEIsMkRBQWE7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEJZOztBQUV2QyxnQ0FBZ0MsMkRBQWE7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELDJEQUFhO0FBQ25FO0FBQ0Esc0RBQXNELEtBQUs7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0EsTUFBTSwyREFBYSxHQUFHLGtFQUFvQjtBQUMxQyxNQUFNLG1FQUFxQjtBQUMzQjtBQUNBLE9BQU87QUFDUCxzREFBc0QsMkRBQWE7QUFDbkUsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxlQUFlLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q1E7O0FBRXZDLDRCQUE0QiwyREFBYTtBQUN6QztBQUNBO0FBQ0E7QUFDQSxzREFBc0QsMkRBQWE7QUFDbkU7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1paO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0pBOztBQUVBLGlFQUFlLEVBQUUsZ0JBQWdCLEVBQUM7Ozs7Ozs7VUNGbEM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOdUM7QUFDTTtBQUNoQjtBQUNpQjtBQUNNOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsZ0RBQUksbUJBQW1CLGtFQUFvQjtBQUNuRSxJQUFJLDZEQUFXO0FBQ2Y7QUFDQTtBQUNBLElBQUksOERBQVc7QUFDZjtBQUNBO0FBQ0EsSUFBSSxnRUFBZTtBQUNuQjtBQUNBO0FBQ0EsSUFBSSxnRUFBa0I7QUFDdEIsb0RBQW9ELDJEQUFhO0FBQ2pFO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEMsS0FBSztBQUMvQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Rpc3BsYXktaXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9lZGl0LWRlc2NyaXB0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3RhdHVzLXVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG8tZG8tbGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hZGQtaXRlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdG9Eb0xpc3QgZnJvbSAnLi90by1kby1saXN0LmpzJztcblxuY29uc3QgZGlzcGxheUxpc3QgPSAobGlzdCA9IHRvRG9MaXN0LmRhdGEpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvLWRvLWxpc3QnKTtcbiAgY29uc3QgY2xlYXJDb21wbGV0ZWRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xlYXItY29tcGxldGVkLWJ1dHRvbicpO1xuICBjb25zdCBpdGVtRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtJyk7XG5cbiAgbGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgaXRlbUVsZW1lbnRDb3B5ID0gaXRlbUVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgIGl0ZW1FbGVtZW50Q29weS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGNvbnN0IHRleHRFbGVtZW50ID0gaXRlbUVsZW1lbnRDb3B5LmNoaWxkcmVuWzFdO1xuICAgIHRleHRFbGVtZW50LmlubmVyVGV4dCA9IGl0ZW0uZGVzY3JpcHRpb247XG4gICAgY29uc3QgY2hlY2tib3ggPSBpdGVtRWxlbWVudENvcHkuY2hpbGRyZW5bMF07XG4gICAgY2hlY2tib3guY2hlY2tlZCA9IGl0ZW0uY29tcGxldGVkO1xuICAgIGl0ZW0uY2hlY2tib3ggPSBjaGVja2JveDtcblxuICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoaXRlbUVsZW1lbnRDb3B5LCBjbGVhckNvbXBsZXRlZEJ1dHRvbik7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUxpc3Q7XG4iLCJpbXBvcnQgdG9Eb0xpc3QgZnJvbSAnLi90by1kby1saXN0LmpzJztcblxuY29uc3QgZWRpdERlc2NyaXB0aW9uID0gKGxpc3QgPSB0b0RvTGlzdC5kYXRhKSA9PiB7XG4gIGxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KHRvRG9MaXN0KSk7XG4gICAgY29uc3QgYnV0dG9uM0RvdHMgPSBpdGVtLmNoZWNrYm94LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmZhLWVsbGlwc2lzLXYnKTtcbiAgICBjb25zdCBidXR0b25UcmFzaCA9IGl0ZW0uY2hlY2tib3gucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuZmEtdHJhc2gtYWx0Jyk7XG4gICAgY29uc3QgdGV4dEVsZW1lbnQgPSBpdGVtLmNoZWNrYm94LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcigncCcpO1xuICAgIGNvbnN0IGVkaXREZXNjcmlwdGlvbklucHV0ID0gaXRlbS5jaGVja2JveC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWRlc2NyaXB0aW9uJyk7XG4gICAgYnV0dG9uM0RvdHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBidXR0b25UcmFzaC5zdHlsZS5kaXNwbGF5ID0gJ2luaXRpYWwnO1xuICAgICAgYnV0dG9uM0RvdHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGVkaXREZXNjcmlwdGlvbklucHV0LnN0eWxlLmRpc3BsYXkgPSAnaW5pdGlhbCc7XG4gICAgICB0ZXh0RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgZWRpdERlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSB0ZXh0RWxlbWVudC5pbm5lclRleHQ7XG4gICAgfSk7XG4gICAgY29uc3QgZWRpdCA9ICgpID0+IHtcbiAgICAgIGl0ZW0uZGVzY3JpcHRpb24gPSBlZGl0RGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcbiAgICAgIHRleHRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnaW5pdGlhbCc7XG4gICAgICB0ZXh0RWxlbWVudC5pbm5lclRleHQgPSBlZGl0RGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcbiAgICAgIGJ1dHRvblRyYXNoLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBidXR0b24zRG90cy5zdHlsZS5kaXNwbGF5ID0gJ2luaXRpYWwnO1xuICAgICAgZWRpdERlc2NyaXB0aW9uSW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KHRvRG9MaXN0LmRhdGEpKTtcbiAgICB9O1xuICAgIGVkaXREZXNjcmlwdGlvbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKHsga2V5IH0pID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgZWRpdCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZWRpdERlc2NyaXB0aW9uSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBlZGl0KTtcblxuICAgIGJ1dHRvblRyYXNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaXRlbS5jaGVja2JveC5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgICAgdG9Eb0xpc3QuZGF0YSA9IHRvRG9MaXN0LmRhdGEuZmlsdGVyKChpdGVtRWwpID0+IGl0ZW1FbCAhPT0gaXRlbSk7XG4gICAgICB0b0RvTGlzdC5kYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGl0ZW0uaW5kZXggPSBpbmRleDtcbiAgICAgIH0pO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9MaXN0JywgSlNPTi5zdHJpbmdpZnkodG9Eb0xpc3QuZGF0YSkpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVkaXREZXNjcmlwdGlvbjtcbiIsImltcG9ydCB0b0RvTGlzdCBmcm9tICcuL3RvLWRvLWxpc3QuanMnO1xuXG5jb25zdCB1cGRhdGVJdGVtcyA9IChsaXN0ID0gdG9Eb0xpc3QuZGF0YSkgPT4ge1xuICBsaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBmdW5jdGlvbiBvbmNoYW5nZSgpIHtcbiAgICAgIGl0ZW0uY29tcGxldGVkID0gdGhpcy5jaGVja2VkO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9MaXN0JywgSlNPTi5zdHJpbmdpZnkodG9Eb0xpc3QuZGF0YSkpO1xuICAgIH1cbiAgICBpdGVtLmNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIG9uY2hhbmdlKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVJdGVtcztcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhc2soZGVzY3JpcHRpb24sIGluZGV4LCBjb21wbGV0ZWQgPSBmYWxzZSkge1xuICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICB0aGlzLmluZGV4ID0gaW5kZXg7XG59XG4iLCJjb25zdCB0b0RvTGlzdCA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCB7IGRhdGE6IHRvRG9MaXN0IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0b0RvTGlzdCBmcm9tICcuL3RvLWRvLWxpc3QuanMnO1xuaW1wb3J0IGRpc3BsYXlMaXN0IGZyb20gJy4vZGlzcGxheS1pdGVtcy5qcyc7XG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2suanMnO1xuaW1wb3J0IHVwZGF0ZUl0ZW1zIGZyb20gJy4vc3RhdHVzLXVwZGF0ZXMuanMnO1xuaW1wb3J0IGVkaXREZXNjcmlwdGlvbiBmcm9tICcuL2VkaXQtZGVzY3JpcHRpb24uanMnO1xuXG5jb25zdCBhZGRFbGVtZW50VG9MaXN0SGFuZGxlciA9ICgpID0+IHtcbiAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dCBpbnB1dCcpO1xuICBjb25zdCByZXR1cm5TeW1ib2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmV0dXJuLXN5bWJvbCcpO1xuXG4gIGNvbnN0IGFkZEVsZW1lbnRUb0xpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKGlucHV0RmllbGQudmFsdWUsIHRvRG9MaXN0LmRhdGEubGVuZ3RoKTtcbiAgICBkaXNwbGF5TGlzdChbXG4gICAgICBuZXdUYXNrLFxuICAgIF0pO1xuICAgIHVwZGF0ZUl0ZW1zKFtcbiAgICAgIG5ld1Rhc2ssXG4gICAgXSk7XG4gICAgZWRpdERlc2NyaXB0aW9uKFtcbiAgICAgIG5ld1Rhc2ssXG4gICAgXSk7XG4gICAgdG9Eb0xpc3QuZGF0YS5wdXNoKG5ld1Rhc2spO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KHRvRG9MaXN0LmRhdGEpKTtcbiAgICBpbnB1dEZpZWxkLnZhbHVlID0gJyc7XG4gIH07XG4gIHJldHVyblN5bWJvbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZEVsZW1lbnRUb0xpc3QpO1xuXG4gIGlucHV0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoeyBrZXkgfSkgPT4ge1xuICAgIGlmIChrZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGFkZEVsZW1lbnRUb0xpc3QoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkRWxlbWVudFRvTGlzdEhhbmRsZXI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=