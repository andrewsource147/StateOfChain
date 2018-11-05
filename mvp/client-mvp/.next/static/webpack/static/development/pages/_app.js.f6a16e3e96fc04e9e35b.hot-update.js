webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./app/actions/userActions.js":
/*!************************************!*\
  !*** ./app/actions/userActions.js ***!
  \************************************/
/*! exports provided: voteUser, saveTx, updateUserVotes, saveVotes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "voteUser", function() { return voteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveTx", function() { return saveTx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserVotes", function() { return updateUserVotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveVotes", function() { return saveVotes; });
function voteUser(user, isVote) {
  return {
    type: "USER.VOTE_USER",
    payload: {
      user: user,
      isVote: isVote
    }
  };
}
function saveTx(txHash) {
  return {
    type: "USER.SAVE_TX_HASH",
    payload: {
      txHash: txHash
    }
  };
}
function updateUserVotes(users) {
  return {
    type: "USER.UPDATE_USER_VOTES",
    payload: {
      users: users
    }
  };
}
function saveVotes(votes) {
  return {
    type: "USER.SAVE_VOTES",
    payload: {
      votes: votes
    }
  };
}

/***/ }),

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

    case "USER.SAVE_VOTES":
      {
        var votes = action.payload.votes;
        var users = state.users;

        for (var i = 0; i < votes.length; i++) {
          users[i].votes = votes[i];
        }

        return _objectSpread({}, state, {
          users: users
        });
      }

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (userReducer);

/***/ }),

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
          users = actionChannel.payload.users;
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

/***/ }),

/***/ "./app/services/ethereum.js":
/*!**********************************!*\
  !*** ./app/services/ethereum.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EthereumServices; });
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var CONFIG_NETWORK = {
  endPoint: "https://ropsten.infura.io/DtzEYY0Km2BA3YwyJcBG",
  stackAddr: "0xB201Ea420F19a167713AdB5bA63436F7238BFde6",
  kycAddr: "0x5a8e6230662bcdc2cd28a4db50509620ed1a1e5e"
};
var STACKVOTES_ABI = [{
  "constant": true,
  "inputs": [{
    "name": "",
    "type": "address"
  }],
  "name": "userVotes",
  "outputs": [{
    "name": "",
    "type": "uint8"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_user",
    "type": "address"
  }, {
    "name": "_isUpVote",
    "type": "uint256"
  }],
  "name": "votesUser",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_adminAddr",
    "type": "address"
  }],
  "name": "transferAdmin",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "admin",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "name": "_user",
    "type": "address"
  }, {
    "indexed": false,
    "name": "_voter",
    "type": "address"
  }, {
    "indexed": false,
    "name": "_isUpVote",
    "type": "uint256"
  }],
  "name": "VoteUser",
  "type": "event"
}];
var KYC_ABI = [{
  "constant": false,
  "inputs": [{
    "name": "_userName",
    "type": "string"
  }, {
    "name": "_userEmail",
    "type": "string"
  }],
  "name": "addUser",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_userAddr",
    "type": "address"
  }],
  "name": "getUserInfo",
  "outputs": [{
    "name": "",
    "type": "address"
  }, {
    "name": "",
    "type": "string"
  }, {
    "name": "",
    "type": "string"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_adminAddr",
    "type": "address"
  }],
  "name": "transferAdmin",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_userAddr",
    "type": "address"
  }],
  "name": "isUserExisted",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "",
    "type": "address"
  }],
  "name": "stackUserMap",
  "outputs": [{
    "name": "userAddr",
    "type": "address"
  }, {
    "name": "userName",
    "type": "string"
  }, {
    "name": "userEmail",
    "type": "string"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_userAddr",
    "type": "address"
  }],
  "name": "removeUser",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "admin",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "_userAddr",
    "type": "address"
  }, {
    "indexed": false,
    "name": "_userName",
    "type": "string"
  }, {
    "indexed": false,
    "name": "_userEmail",
    "type": "string"
  }],
  "name": "AddUser",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "_userAddr",
    "type": "address"
  }],
  "name": "RemoveUser",
  "type": "event"
}];

var EthereumServices = function EthereumServices() {
  var _this = this;

  _classCallCheck(this, EthereumServices);

  _defineProperty(this, "getStackAddr", function () {
    return CONFIG_NETWORK.stackAddr;
  });

  _defineProperty(this, "getVoteData", function (_user, _isUpVote) {
    var data = _this.stackContract.methods.votesUser(_user, _isUpVote).encodeABI();

    return new Promise(function (resolve, reject) {
      resolve(data);
    });
  });

  _defineProperty(this, "getVoteUser", function (_user) {
    return new Promise(function (resolve, reject) {
      _this.stackContract.methods.userVotes(_user).call().then(function (result) {
        if (result != null) {
          resolve(result);
        }
      }).catch(function (err) {
        reject(err);
      });
    });
  });

  this.rpc = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(new web3__WEBPACK_IMPORTED_MODULE_0___default.a.providers.HttpProvider(CONFIG_NETWORK.endPoint, 3000));
  this.stackContract = new this.rpc.eth.Contract(STACKVOTES_ABI, CONFIG_NETWORK.stackAddr);
  this.kycContract = new this.rpc.eth.Contract(KYC_ABI, CONFIG_NETWORK.kycAddr);
};



/***/ })

})
//# sourceMappingURL=_app.js.f6a16e3e96fc04e9e35b.hot-update.js.map