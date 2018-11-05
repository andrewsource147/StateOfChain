webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./app/sagas/userSaga.js":
/*!*******************************!*\
  !*** ./app/sagas/userSaga.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userWatcher; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");
/* harmony import */ var _services_ethereum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ethereum */ "./app/services/ethereum.js");
/* harmony import */ var _services_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/web3 */ "./app/services/web3/index.js");


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(voteUser),
    _marked2 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userWatcher);





function voteUser(action) {
  var _action$payload, user, isVote, ethereum, dataVote, web3Instance, userAddr, txObject, txHash;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function voteUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _action$payload = action.payload, user = _action$payload.user, isVote = _action$payload.isVote;
          ethereum = new _services_ethereum__WEBPACK_IMPORTED_MODULE_2__["EthereumServices"]();
          _context.next = 4;
          return call([ethereum, ethereum.getVoteData], user, isVote);

        case 4:
          dataVote = _context.sent;
          web3Instance = Object(_services_web3__WEBPACK_IMPORTED_MODULE_3__["newWeb3Instance"])();
          userAddr = web3Instance.getCoinbase();
          txObject = {
            from: userAddr,
            to: ethereum.getStackAddr //send tx

          };
          _context.next = 10;
          return call([web3Instance, web3.sendTx], txObject);

        case 10:
          txHash = _context.sent;
          console.log(txHash);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

function userWatcher() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userWatcher$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])("USER.VOTE_USER", voteUser);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

/***/ })

})
//# sourceMappingURL=_app.js.e045325a1450788b502f.hot-update.js.map