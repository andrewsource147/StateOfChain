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
/* harmony import */ var _actions_userActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/userActions */ "./app/actions/userActions.js");


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
          ethereum = new _services_ethereum__WEBPACK_IMPORTED_MODULE_2__["default"]();
          _context.prev = 2;
          _context.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])([ethereum, ethereum.getVoteData], user, isVote);

        case 5:
          dataVote = _context.sent;
          web3Instance = Object(_services_web3__WEBPACK_IMPORTED_MODULE_3__["newWeb3Instance"])();
          _context.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])([web3Instance, web3Instance.getCoinbase]);

        case 9:
          userAddr = _context.sent;
          txObject = {
            from: userAddr.toLowerCase(),
            to: ethereum.getStackAddr().toLowerCase(),
            data: dataVote //send tx

          };
          _context.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])([web3Instance, web3Instance.sendTx], txObject);

        case 13:
          txHash = _context.sent;
          _context.next = 16;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_userActions__WEBPACK_IMPORTED_MODULE_4__["saveTx"])(txHash));

        case 16:
          console.log(txHash);
          _context.next = 22;
          break;

        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](2);
          console.log(_context.t0);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this, [[2, 19]]);
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
//# sourceMappingURL=_app.js.4eff28e0abc5a65b3443.hot-update.js.map