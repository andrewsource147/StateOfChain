webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./app/sagas/index.js":
/*!****************************!*\
  !*** ./app/sagas/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");
/* harmony import */ var _questionSaga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questionSaga */ "./app/sagas/questionSaga.js");
/* harmony import */ var _answerSaga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./answerSaga */ "./app/sagas/answerSaga.js");
/* harmony import */ var _userSaga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userSaga */ "./app/sagas/userSaga.js");
/* harmony import */ var _commonSaga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./commonSaga */ "./app/sagas/commonSaga.js");


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);






function rootSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(_questionSaga__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(_answerSaga__WEBPACK_IMPORTED_MODULE_3__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(_userSaga__WEBPACK_IMPORTED_MODULE_4__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(_commonSaga__WEBPACK_IMPORTED_MODULE_5__["default"])]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

/***/ })

})
//# sourceMappingURL=_app.js.363e8ea8114b3964a5a3.hot-update.js.map