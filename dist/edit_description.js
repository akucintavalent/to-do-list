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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdF9kZXNjcmlwdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLGlFQUFlLEVBQUUsZ0JBQWdCLEVBQUM7Ozs7Ozs7VUNGbEM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ051Qzs7QUFFdkMsZ0NBQWdDLDJEQUFhO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCwyREFBYTtBQUNuRTtBQUNBLHNEQUFzRCxLQUFLO0FBQzNEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBLE1BQU0sMkRBQWEsR0FBRyxrRUFBb0I7QUFDMUMsTUFBTSxtRUFBcUI7QUFDM0I7QUFDQSxPQUFPO0FBQ1Asc0RBQXNELDJEQUFhO0FBQ25FLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90by1kby1saXN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2VkaXQtZGVzY3JpcHRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdG9Eb0xpc3QgPSBbXTtcblxuZXhwb3J0IGRlZmF1bHQgeyBkYXRhOiB0b0RvTGlzdCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdG9Eb0xpc3QgZnJvbSAnLi90by1kby1saXN0LmpzJztcblxuY29uc3QgZWRpdERlc2NyaXB0aW9uID0gKGxpc3QgPSB0b0RvTGlzdC5kYXRhKSA9PiB7XG4gIGxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KHRvRG9MaXN0KSk7XG4gICAgY29uc3QgYnV0dG9uM0RvdHMgPSBpdGVtLmNoZWNrYm94LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmZhLWVsbGlwc2lzLXYnKTtcbiAgICBjb25zdCBidXR0b25UcmFzaCA9IGl0ZW0uY2hlY2tib3gucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuZmEtdHJhc2gtYWx0Jyk7XG4gICAgY29uc3QgdGV4dEVsZW1lbnQgPSBpdGVtLmNoZWNrYm94LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcigncCcpO1xuICAgIGNvbnN0IGVkaXREZXNjcmlwdGlvbklucHV0ID0gaXRlbS5jaGVja2JveC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWRlc2NyaXB0aW9uJyk7XG4gICAgYnV0dG9uM0RvdHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBidXR0b25UcmFzaC5zdHlsZS5kaXNwbGF5ID0gJ2luaXRpYWwnO1xuICAgICAgYnV0dG9uM0RvdHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGVkaXREZXNjcmlwdGlvbklucHV0LnN0eWxlLmRpc3BsYXkgPSAnaW5pdGlhbCc7XG4gICAgICB0ZXh0RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgZWRpdERlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSB0ZXh0RWxlbWVudC5pbm5lclRleHQ7XG4gICAgfSk7XG4gICAgY29uc3QgZWRpdCA9ICgpID0+IHtcbiAgICAgIGl0ZW0uZGVzY3JpcHRpb24gPSBlZGl0RGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcbiAgICAgIHRleHRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnaW5pdGlhbCc7XG4gICAgICB0ZXh0RWxlbWVudC5pbm5lclRleHQgPSBlZGl0RGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcbiAgICAgIGJ1dHRvblRyYXNoLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBidXR0b24zRG90cy5zdHlsZS5kaXNwbGF5ID0gJ2luaXRpYWwnO1xuICAgICAgZWRpdERlc2NyaXB0aW9uSW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KHRvRG9MaXN0LmRhdGEpKTtcbiAgICB9O1xuICAgIGVkaXREZXNjcmlwdGlvbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKHsga2V5IH0pID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgZWRpdCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZWRpdERlc2NyaXB0aW9uSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBlZGl0KTtcblxuICAgIGJ1dHRvblRyYXNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaXRlbS5jaGVja2JveC5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgICAgdG9Eb0xpc3QuZGF0YSA9IHRvRG9MaXN0LmRhdGEuZmlsdGVyKChpdGVtRWwpID0+IGl0ZW1FbCAhPT0gaXRlbSk7XG4gICAgICB0b0RvTGlzdC5kYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGl0ZW0uaW5kZXggPSBpbmRleDtcbiAgICAgIH0pO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9MaXN0JywgSlNPTi5zdHJpbmdpZnkodG9Eb0xpc3QuZGF0YSkpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVkaXREZXNjcmlwdGlvbjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==