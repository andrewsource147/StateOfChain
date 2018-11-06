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
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  txs: [],
  users: [{
    id: 0,
    address: '0x9559034c287a0e73a9a68288bc27eb8189427aa1',
    votes: 0
  }, {
    id: 1,
    address: '0xd1946aeffc2d053b76fab96117b6f2c7bf395e32',
    votes: 0
  }, {
    id: 2,
    address: '0xd1946aeffc2d053b76fab96117b6f2c7bf395e31',
    votes: 0
  }]
};

function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "USER.SAVE_TX_HASH":
      var txHash = action.payload.txHash;
      var txs = state.txs;
      txs.push(txHash);
      return _objectSpread({}, state, {
        txs: txs
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (userReducer);

/***/ })

})
//# sourceMappingURL=_app.js.b39679a03eca130b6ac2.hot-update.js.map