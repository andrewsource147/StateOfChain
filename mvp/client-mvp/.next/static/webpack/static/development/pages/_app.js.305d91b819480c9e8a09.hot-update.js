webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./app/reducers/commonReducer.js":
/*!***************************************!*\
  !*** ./app/reducers/commonReducer.js ***!
  \***************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  user: {
    error: "",
    address: "",
    vote: 0
  }
};

function commonReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "COMMON.UPDATE_METAMASK_ACCOUNT":
      var _action$payload = action.payload,
          address = _action$payload.address,
          vote = _action$payload.vote;
      var user = {
        error: "",
        address: address,
        vote: vote
      };
      return _objectSpread({}, state, {
        user: user
      });

    case "COMMON.THROW_METAMASK_ERROR":
      {
        var err = action.payload.err;
        var user = state.user;
        user.error = err;
        return _objectSpread({}, state, {
          user: user
        });
      }

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (commonReducer);

/***/ }),

/***/ "./app/reducers/index.js":
/*!*******************************!*\
  !*** ./app/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _questionReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questionReducer */ "./app/reducers/questionReducer.js");
/* harmony import */ var _answerReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./answerReducer */ "./app/reducers/answerReducer.js");
/* harmony import */ var _userReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userReducer */ "./app/reducers/userReducer.js");
/* harmony import */ var _commonReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./commonReducer */ "./app/reducers/commonReducer.js");





var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  question: _questionReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  answer: _answerReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  user: _userReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  common: _commonReducer__WEBPACK_IMPORTED_MODULE_4__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ })

})
//# sourceMappingURL=_app.js.305d91b819480c9e8a09.hot-update.js.map