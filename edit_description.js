/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!*********************************!*\
  !*** ./src/edit-description.js ***!
  \*********************************/
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

      const edit = () => {
        item.description = editDescriptionInput.value;
        localStorage.setItem('toDoList', JSON.stringify(_to_do_list_js__WEBPACK_IMPORTED_MODULE_0__["default"].data));
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
        _to_do_list_js__WEBPACK_IMPORTED_MODULE_0__["default"].data = _to_do_list_js__WEBPACK_IMPORTED_MODULE_0__["default"].data.filter((itemEl) => itemEl !== item);
        _to_do_list_js__WEBPACK_IMPORTED_MODULE_0__["default"].data.forEach((item, index) => {
          item.index = index;
        });
        localStorage.setItem('toDoList', JSON.stringify(_to_do_list_js__WEBPACK_IMPORTED_MODULE_0__["default"].data));
      });
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editDescription);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdF9kZXNjcmlwdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLGlFQUFlLEVBQUUsZ0JBQWdCLEVBQUM7Ozs7Ozs7VUNGbEM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ051Qzs7QUFFdkMsZ0NBQWdDLDJEQUFhO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0RBQXdELDJEQUFhO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxLQUFLO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7O0FBRUE7QUFDQTtBQUNBLFFBQVEsMkRBQWEsR0FBRyxrRUFBb0I7QUFDNUMsUUFBUSxtRUFBcUI7QUFDN0I7QUFDQSxTQUFTO0FBQ1Qsd0RBQXdELDJEQUFhO0FBQ3JFLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBLGlFQUFlLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG8tZG8tbGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9lZGl0LWRlc2NyaXB0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRvRG9MaXN0ID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IHsgZGF0YTogdG9Eb0xpc3QgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHRvRG9MaXN0IGZyb20gJy4vdG8tZG8tbGlzdC5qcyc7XG5cbmNvbnN0IGVkaXREZXNjcmlwdGlvbiA9IChsaXN0ID0gdG9Eb0xpc3QuZGF0YSkgPT4ge1xuICBsaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb0xpc3QnLCBKU09OLnN0cmluZ2lmeSh0b0RvTGlzdCkpO1xuICAgIGNvbnN0IGJ1dHRvbjNEb3RzID0gaXRlbS5jaGVja2JveC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5mYS1lbGxpcHNpcy12Jyk7XG4gICAgY29uc3QgYnV0dG9uVHJhc2ggPSBpdGVtLmNoZWNrYm94LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmZhLXRyYXNoLWFsdCcpO1xuICAgIGNvbnN0IHRleHRFbGVtZW50ID0gaXRlbS5jaGVja2JveC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ3AnKTtcbiAgICBjb25zdCBlZGl0RGVzY3JpcHRpb25JbnB1dCA9IGl0ZW0uY2hlY2tib3gucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuZWRpdC1kZXNjcmlwdGlvbicpO1xuICAgIGJ1dHRvbjNEb3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgYnV0dG9uVHJhc2guc3R5bGUuZGlzcGxheSA9ICdpbml0aWFsJztcbiAgICAgIGJ1dHRvbjNEb3RzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBlZGl0RGVzY3JpcHRpb25JbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ2luaXRpYWwnO1xuICAgICAgdGV4dEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGVkaXREZXNjcmlwdGlvbklucHV0LnZhbHVlID0gdGV4dEVsZW1lbnQuaW5uZXJUZXh0O1xuXG4gICAgICBjb25zdCBlZGl0ID0gKCkgPT4ge1xuICAgICAgICBpdGVtLmRlc2NyaXB0aW9uID0gZWRpdERlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KHRvRG9MaXN0LmRhdGEpKTtcbiAgICAgICAgdGV4dEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdpbml0aWFsJztcbiAgICAgICAgdGV4dEVsZW1lbnQuaW5uZXJUZXh0ID0gZWRpdERlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG4gICAgICAgIGJ1dHRvblRyYXNoLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGJ1dHRvbjNEb3RzLnN0eWxlLmRpc3BsYXkgPSAnaW5pdGlhbCc7XG4gICAgICAgIGVkaXREZXNjcmlwdGlvbklucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9O1xuICAgICAgZWRpdERlc2NyaXB0aW9uSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoeyBrZXkgfSkgPT4ge1xuICAgICAgICBpZiAoa2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgZWRpdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgZWRpdERlc2NyaXB0aW9uSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBlZGl0KTtcblxuICAgICAgYnV0dG9uVHJhc2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGl0ZW0uY2hlY2tib3gucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgICAgICAgdG9Eb0xpc3QuZGF0YSA9IHRvRG9MaXN0LmRhdGEuZmlsdGVyKChpdGVtRWwpID0+IGl0ZW1FbCAhPT0gaXRlbSk7XG4gICAgICAgIHRvRG9MaXN0LmRhdGEuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpdGVtLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIH0pO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb0xpc3QnLCBKU09OLnN0cmluZ2lmeSh0b0RvTGlzdC5kYXRhKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlZGl0RGVzY3JpcHRpb247XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=