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
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(updateUserVote),
    _marked3 =
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

function updateUserVote() {
  var users, ethereum, listVotes, i, vote;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function updateUserVote$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          users = action.payload.users;
          ethereum = new _services_ethereum__WEBPACK_IMPORTED_MODULE_2__["default"]();
          listVotes = [];
          i = 0;

        case 4:
          if (!(i < users.length)) {
            _context2.next = 12;
            break;
          }

          _context2.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])([ethereum, ethereum.getVoteUser], users[i].address);

        case 7:
          vote = _context2.sent;
          listVotes.push(vote);

        case 9:
          i++;
          _context2.next = 4;
          break;

        case 12:
          _context2.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_userActions__WEBPACK_IMPORTED_MODULE_4__["saveVotes"])(listVotes));

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

function userWatcher() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userWatcher$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])("USER.VOTE_USER", voteUser);

        case 2:
          _context3.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])("USER.UPDATE_USER_VOTES", updateUserVote);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, this);
}

/***/ })

})
//# sourceMappingURL=_app.js.20572c6a53918d8570c7.hot-update.js.map