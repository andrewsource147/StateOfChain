webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./app/reducers/userReducer.js":
/*!*************************************!*\
  !*** ./app/reducers/userReducer.js ***!
  \*************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
var initialState = {
  users: [{
    id: 0,
    address: '0x9559034c287a0e73a9a68288bc27eb8189427aa1',
    votes: 10
  }, {
    id: 1,
    address: '0xd1946aeffc2d053b76fab96117b6f2c7bf395e32',
    votes: 12
  }, {
    id: 2,
    address: '0xd1946aeffc2d053b76fab96117b6f2c7bf395e31',
    votes: 9
  }]
};

function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (userReducer);

/***/ })

})
//# sourceMappingURL=_app.js.efc417ea78c314ae5213.hot-update.js.map