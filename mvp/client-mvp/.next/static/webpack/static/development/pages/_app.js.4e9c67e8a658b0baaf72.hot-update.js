webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./app/sagas/commonSaga.js":
/*!*********************************!*\
  !*** ./app/sagas/commonSaga.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return commonWatcher; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");
/* harmony import */ var _services_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/web3 */ "./app/services/web3/index.js");
/* harmony import */ var _actions_commonActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/commonActions */ "./app/actions/commonActions.js");
/* harmony import */ var _services_ethereum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/ethereum */ "./app/services/ethereum.js");


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(checMetamaskInstall),
    _marked2 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(commonWatcher);






function checMetamaskInstall(action) {
  var web3Instance, networkId, address, ethereum, vote;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function checMetamaskInstall$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          web3Instance = Object(_services_web3__WEBPACK_IMPORTED_MODULE_2__["newWeb3Instance"])();

          if (!(web3Instance === false)) {
            _context.next = 5;
            break;
          }

          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions_commonActions__WEBPACK_IMPORTED_MODULE_3__["throwMetamaskError"]("Metamask is not installed"));

        case 4:
          return _context.abrupt("return");

        case 5:
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])([web3Instance, web3Instance.getNetworkId]);

        case 7:
          networkId = _context.sent;

          if (!(networkId !== 3)) {
            _context.next = 12;
            break;
          }

          _context.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions_commonActions__WEBPACK_IMPORTED_MODULE_3__["throwMetamaskError"]("Network is not in ropsten network"));

        case 11:
          return _context.abrupt("return");

        case 12:
          _context.prev = 12;
          _context.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])([web3Instance, web3Instance.getCoinbase]);

        case 15:
          address = _context.sent;
          ethereum = new _services_ethereum__WEBPACK_IMPORTED_MODULE_4__["default"](); //check vote

          _context.next = 19;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])([ethereum, ethereum.getVoteUser], address);

        case 19:
          vote = _context.sent;
          console.log({
            address: address,
            vote: vote
          });
          _context.next = 23;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions_commonActions__WEBPACK_IMPORTED_MODULE_3__["updateMetamaskAccount"](address, vote));

        case 23:
          return _context.abrupt("return");

        case 26:
          _context.prev = 26;
          _context.t0 = _context["catch"](12);
          console.log(_context.t0);
          _context.next = 31;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions_commonActions__WEBPACK_IMPORTED_MODULE_3__["throwMetamaskError"]("Cannot get address, You probably do not login Metamask"));

        case 31:
          return _context.abrupt("return");

        case 32:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this, [[12, 26]]);
}

function commonWatcher() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function commonWatcher$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])("COMMON.CHECK_METAMASK_INSTALL", checMetamaskInstall);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

/***/ }),

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
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(_questionSaga__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(_answerSaga__WEBPACK_IMPORTED_MODULE_3__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(_userSaga__WEBPACK_IMPORTED_MODULE_4__["default"])]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

/***/ })

})
//# sourceMappingURL=_app.js.4e9c67e8a658b0baaf72.hot-update.js.map