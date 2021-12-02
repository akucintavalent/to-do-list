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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkX2l0ZW0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDOztBQUV2Qyw0QkFBNEIsMkRBQWE7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEJZOztBQUV2Qyw0QkFBNEIsMkRBQWE7QUFDekM7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELDJEQUFhO0FBQ25FO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNaWjtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNKQTs7QUFFQSxpRUFBZSxFQUFFLGdCQUFnQixFQUFDOzs7Ozs7O1VDRmxDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOdUM7QUFDTTtBQUNoQjtBQUNpQjs7QUFFOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLGdEQUFJLG1CQUFtQixrRUFBb0I7QUFDbkUsSUFBSSw2REFBVztBQUNmO0FBQ0E7QUFDQSxJQUFJLDhEQUFXO0FBQ2Y7QUFDQTtBQUNBLElBQUksZ0VBQWtCO0FBQ3RCLG9EQUFvRCwyREFBYTtBQUNqRTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDLEtBQUs7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlFQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5LWl0ZW1zLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3RhdHVzLXVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG8tZG8tbGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hZGQtaXRlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdG9Eb0xpc3QgZnJvbSAnLi90by1kby1saXN0LmpzJztcblxuY29uc3QgZGlzcGxheUxpc3QgPSAobGlzdCA9IHRvRG9MaXN0LmRhdGEpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvLWRvLWxpc3QnKTtcbiAgY29uc3QgY2xlYXJDb21wbGV0ZWRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xlYXItY29tcGxldGVkLWJ1dHRvbicpO1xuICBjb25zdCBpdGVtRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtJyk7XG5cbiAgbGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgaXRlbUVsZW1lbnRDb3B5ID0gaXRlbUVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgIGl0ZW1FbGVtZW50Q29weS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGNvbnN0IHRleHRFbGVtZW50ID0gaXRlbUVsZW1lbnRDb3B5LmNoaWxkcmVuWzFdO1xuICAgIHRleHRFbGVtZW50LmlubmVyVGV4dCA9IGl0ZW0uZGVzY3JpcHRpb247XG4gICAgY29uc3QgY2hlY2tib3ggPSBpdGVtRWxlbWVudENvcHkuY2hpbGRyZW5bMF07XG4gICAgY2hlY2tib3guY2hlY2tlZCA9IGl0ZW0uY29tcGxldGVkO1xuICAgIGl0ZW0uY2hlY2tib3ggPSBjaGVja2JveDtcblxuICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoaXRlbUVsZW1lbnRDb3B5LCBjbGVhckNvbXBsZXRlZEJ1dHRvbik7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUxpc3Q7XG4iLCJpbXBvcnQgdG9Eb0xpc3QgZnJvbSAnLi90by1kby1saXN0LmpzJztcblxuY29uc3QgdXBkYXRlSXRlbXMgPSAobGlzdCA9IHRvRG9MaXN0LmRhdGEpID0+IHtcbiAgbGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgZnVuY3Rpb24gb25jaGFuZ2UoKSB7XG4gICAgICBpdGVtLmNvbXBsZXRlZCA9IHRoaXMuY2hlY2tlZDtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KHRvRG9MaXN0LmRhdGEpKTtcbiAgICB9XG4gICAgaXRlbS5jaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBvbmNoYW5nZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlSXRlbXM7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYXNrKGRlc2NyaXB0aW9uLCBpbmRleCwgY29tcGxldGVkID0gZmFsc2UpIHtcbiAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgdGhpcy5pbmRleCA9IGluZGV4O1xufVxuIiwiY29uc3QgdG9Eb0xpc3QgPSBbXTtcblxuZXhwb3J0IGRlZmF1bHQgeyBkYXRhOiB0b0RvTGlzdCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdG9Eb0xpc3QgZnJvbSAnLi90by1kby1saXN0LmpzJztcbmltcG9ydCBkaXNwbGF5TGlzdCBmcm9tICcuL2Rpc3BsYXktaXRlbXMuanMnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrLmpzJztcbmltcG9ydCB1cGRhdGVJdGVtcyBmcm9tICcuL3N0YXR1cy11cGRhdGVzLmpzJztcblxuY29uc3QgYWRkRWxlbWVudFRvTGlzdEhhbmRsZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQgaW5wdXQnKTtcbiAgY29uc3QgcmV0dXJuU3ltYm9sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJldHVybi1zeW1ib2wnKTtcblxuICBjb25zdCBhZGRFbGVtZW50VG9MaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhpbnB1dEZpZWxkLnZhbHVlLCB0b0RvTGlzdC5kYXRhLmxlbmd0aCk7XG4gICAgZGlzcGxheUxpc3QoW1xuICAgICAgbmV3VGFzayxcbiAgICBdKTtcbiAgICB1cGRhdGVJdGVtcyhbXG4gICAgICBuZXdUYXNrLFxuICAgIF0pO1xuICAgIHRvRG9MaXN0LmRhdGEucHVzaChuZXdUYXNrKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb0xpc3QnLCBKU09OLnN0cmluZ2lmeSh0b0RvTGlzdC5kYXRhKSk7XG4gICAgaW5wdXRGaWVsZC52YWx1ZSA9ICcnO1xuICB9O1xuICByZXR1cm5TeW1ib2wuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRFbGVtZW50VG9MaXN0KTtcblxuICBpbnB1dEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKHsga2V5IH0pID0+IHtcbiAgICBpZiAoa2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBhZGRFbGVtZW50VG9MaXN0KCk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFkZEVsZW1lbnRUb0xpc3RIYW5kbGVyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9