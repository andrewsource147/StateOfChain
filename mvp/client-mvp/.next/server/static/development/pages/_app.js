module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/actions/answerActions.js":
/*!**************************************!*\
  !*** ./app/actions/answerActions.js ***!
  \**************************************/
/*! exports provided: answerActionTypes, setAnswer, updateAnswerVote, voteAnswer, setLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "answerActionTypes", function() { return answerActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAnswer", function() { return setAnswer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAnswerVote", function() { return updateAnswerVote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "voteAnswer", function() { return voteAnswer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoading", function() { return setLoading; });
var answerActionTypes = {
  FETCH_ANSWERS: 'FETCH_ANSWERS',
  SET_ANSWERS: 'SET_ANSWERS',
  VOTE_ANSWER: 'VOTE_ANSWER',
  UPDATE_ANSWER_VOTE: 'UPDATE_ANSWER_VOTE',
  SET_LOADING: 'SET_LOADING'
};
function setAnswer(answers) {
  return {
    type: answerActionTypes.SET_ANSWERS,
    payload: answers
  };
}
function updateAnswerVote(answerId, isUpvote) {
  return {
    type: answerActionTypes.UPDATE_ANSWER_VOTE,
    payload: {
      answerId: answerId,
      isUpvote: isUpvote
    }
  };
}
function voteAnswer(answerId, isUpvote) {
  return {
    type: answerActionTypes.VOTE_ANSWER,
    payload: {
      answerId: answerId,
      isUpvote: isUpvote
    }
  };
}
function setLoading(isLoading) {
  return {
    type: answerActionTypes.SET_LOADING,
    payload: isLoading
  };
}

/***/ }),

/***/ "./app/actions/questionActions.js":
/*!****************************************!*\
  !*** ./app/actions/questionActions.js ***!
  \****************************************/
/*! exports provided: questionActionTypes, setQuestions, updateQuestionVote, voteQuestion, setLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "questionActionTypes", function() { return questionActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setQuestions", function() { return setQuestions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateQuestionVote", function() { return updateQuestionVote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "voteQuestion", function() { return voteQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoading", function() { return setLoading; });
var questionActionTypes = {
  FETCH_QUESTIONS: 'FETCH_QUESTIONS',
  SET_QUESTIONS: 'SET_QUESTIONS',
  VOTE_QUESTION: 'VOTE_QUESTION',
  UPDATE_QUESTION_VOTE: 'UPDATE_QUESTION_VOTE',
  SET_LOADING: 'SET_LOADING'
};
function setQuestions(questions) {
  return {
    type: questionActionTypes.SET_QUESTIONS,
    payload: questions
  };
}
function updateQuestionVote(questionId, isUpvote) {
  return {
    type: questionActionTypes.UPDATE_QUESTION_VOTE,
    payload: {
      questionId: questionId,
      isUpvote: isUpvote
    }
  };
}
function voteQuestion(questionId, isUpvote) {
  return {
    type: questionActionTypes.VOTE_QUESTION,
    payload: {
      questionId: questionId,
      isUpvote: isUpvote
    }
  };
}
function setLoading(isLoading) {
  return {
    type: questionActionTypes.SET_LOADING,
    payload: isLoading
  };
}

/***/ }),

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

/***/ "./app/reducers/answerReducer.js":
/*!***************************************!*\
  !*** ./app/reducers/answerReducer.js ***!
  \***************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return answerReducer; });
/* harmony import */ var _actions_answerActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/answerActions */ "./app/actions/answerActions.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  answers: [{
    id: 1,
    content: 'An answer for a question',
    user: '0x9559034c287a0e73a9a68288bc27eb8189427aa1',
    votes: 1
  }, {
    id: 2,
    content: 'An answer for a question 2',
    user: '0x9559034c287a0e73a9a68288bc27eb81835j7aa1',
    votes: 3
  }],
  isLoading: false
};
function answerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_answerActions__WEBPACK_IMPORTED_MODULE_0__["answerActionTypes"].SET_ANSWERS:
      return _objectSpread({}, state, {
        answers: action.payload
      });

    case _actions_answerActions__WEBPACK_IMPORTED_MODULE_0__["answerActionTypes"].UPDATE_ANSWER_VOTE:
      var _action$payload = action.payload,
          answerId = _action$payload.answerId,
          isUpvote = _action$payload.isUpvote;

      var newState = _objectSpread({}, state);

      newState.answers = newState.answers.map(function (answer) {
        if (answer.id === answerId) {
          var votes = isUpvote ? ++answer.votes : --answer.votes;
          return _objectSpread({}, answer, {
            votes: votes
          });
        }

        return answer;
      });
      return newState;

    case _actions_answerActions__WEBPACK_IMPORTED_MODULE_0__["answerActionTypes"].SET_LOADING:
      return _objectSpread({}, state, {
        isLoading: action.payload
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./app/reducers/index.js":
/*!*******************************!*\
  !*** ./app/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _questionReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questionReducer */ "./app/reducers/questionReducer.js");
/* harmony import */ var _answerReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./answerReducer */ "./app/reducers/answerReducer.js");
/* harmony import */ var _userReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userReducer */ "./app/reducers/userReducer.js");




var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  question: _questionReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  answer: _answerReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  user: _userReducer__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./app/reducers/questionReducer.js":
/*!*****************************************!*\
  !*** ./app/reducers/questionReducer.js ***!
  \*****************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return questionReducer; });
/* harmony import */ var _actions_questionActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/questionActions */ "./app/actions/questionActions.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  questions: [{
    id: 0,
    title: 'Just a question',
    content: 'I dont know how next.js work',
    href: '',
    created: '2018-01-19 03:14:07',
    user: '0x9559034c287a0e73a9a68288bc27eb8189427aa1',
    votes: 10,
    answers: 9
  }, {
    id: 1,
    title: 'What is Next.js',
    content: 'I dont know how next.js work',
    href: '',
    created: '2018-01-20 02:07:18',
    user: '0xd1946aeffc2d053b76fab96117b6f2c7bf395e32',
    votes: 2,
    answers: 1
  }],
  isLoading: false
};
function questionReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_questionActions__WEBPACK_IMPORTED_MODULE_0__["questionActionTypes"].SET_QUESTIONS:
      return _objectSpread({}, state, {
        questions: action.payload
      });

    case _actions_questionActions__WEBPACK_IMPORTED_MODULE_0__["questionActionTypes"].UPDATE_QUESTION_VOTE:
      var _action$payload = action.payload,
          questionId = _action$payload.questionId,
          isUpvote = _action$payload.isUpvote;

      var newState = _objectSpread({}, state);

      newState.questions = newState.questions.map(function (question) {
        if (question.id === questionId) {
          var votes = isUpvote ? ++question.votes : --question.votes;
          return _objectSpread({}, question, {
            votes: votes
          });
        }

        return question;
      });
      return newState;

    case _actions_questionActions__WEBPACK_IMPORTED_MODULE_0__["questionActionTypes"].SET_LOADING:
      return _objectSpread({}, state, {
        isLoading: action.payload
      });

    default:
      return state;
  }
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
    votes: "-"
  }, {
    id: 1,
    address: '0xd1946aeffc2d053b76fab96117b6f2c7bf395e32',
    votes: "-"
  }, {
    id: 2,
    address: '0xd1946aeffc2d053b76fab96117b6f2c7bf395e31',
    votes: "-"
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

/***/ "./app/sagas/answerSaga.js":
/*!*********************************!*\
  !*** ./app/sagas/answerSaga.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return answerWatcher; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_answerActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/answerActions */ "./app/actions/answerActions.js");


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(fetchAnswers),
    _marked2 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(voteAnswer),
    _marked3 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(answerWatcher);




function fetchAnswers() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function fetchAnswers$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

function voteAnswer(action) {
  var _action$payload, answerId, isUpvote;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function voteAnswer$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _action$payload = action.payload, answerId = _action$payload.answerId, isUpvote = _action$payload.isUpvote;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_answerActions__WEBPACK_IMPORTED_MODULE_2__["updateAnswerVote"])(answerId, isUpvote));

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

function answerWatcher() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function answerWatcher$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions_answerActions__WEBPACK_IMPORTED_MODULE_2__["answerActionTypes"].FETCH_ANSWERS, fetchAnswers);

        case 2:
          _context3.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions_answerActions__WEBPACK_IMPORTED_MODULE_2__["answerActionTypes"].VOTE_ANSWER, voteAnswer);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, this);
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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _questionSaga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questionSaga */ "./app/sagas/questionSaga.js");
/* harmony import */ var _answerSaga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./answerSaga */ "./app/sagas/answerSaga.js");
/* harmony import */ var _userSaga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userSaga */ "./app/sagas/userSaga.js");


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

/***/ }),

/***/ "./app/sagas/questionSaga.js":
/*!***********************************!*\
  !*** ./app/sagas/questionSaga.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return questionWatcher; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_questionActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/questionActions */ "./app/actions/questionActions.js");


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(fetchQuestions),
    _marked2 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(voteQuestion),
    _marked3 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(questionWatcher);




function fetchQuestions() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function fetchQuestions$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

function voteQuestion(action) {
  var _action$payload, questionId, isUpvote;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function voteQuestion$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _action$payload = action.payload, questionId = _action$payload.questionId, isUpvote = _action$payload.isUpvote;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_questionActions__WEBPACK_IMPORTED_MODULE_2__["updateQuestionVote"])(questionId, isUpvote));

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

function questionWatcher() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function questionWatcher$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions_questionActions__WEBPACK_IMPORTED_MODULE_2__["questionActionTypes"].FETCH_QUESTIONS, fetchQuestions);

        case 2:
          _context3.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions_questionActions__WEBPACK_IMPORTED_MODULE_2__["questionActionTypes"].VOTE_QUESTION, voteQuestion);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, this);
}

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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
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

function updateUserVote(action) {
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
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "web3");
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



/***/ }),

/***/ "./app/services/web3/dapp/CipherBrowser.js":
/*!*************************************************!*\
  !*** ./app/services/web3/dapp/CipherBrowser.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CipherBrowser; });
/* harmony import */ var _DappBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DappBrowser */ "./app/services/web3/dapp/DappBrowser.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var CipherBrowser =
/*#__PURE__*/
function (_DappBrowser) {
  _inherits(CipherBrowser, _DappBrowser);

  function CipherBrowser() {
    _classCallCheck(this, CipherBrowser);

    return _possibleConstructorReturn(this, _getPrototypeOf(CipherBrowser).apply(this, arguments));
  }

  _createClass(CipherBrowser, [{
    key: "getCoinbase",
    value: function getCoinbase() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.web3.eth.getCoinbase(function (error, result) {
          console.log(error);

          if (error || !result) {
            var error = new Error("Cannot get coinbase");
            reject(error);
          } else {
            resolve(result);
          }
        });
      });
    }
  }]);

  return CipherBrowser;
}(_DappBrowser__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./app/services/web3/dapp/DappBrowser.js":
/*!***********************************************!*\
  !*** ./app/services/web3/dapp/DappBrowser.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DappBrowser; });
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var DappBrowser =
/*#__PURE__*/
function () {
  function DappBrowser() {
    var _this = this;

    _classCallCheck(this, DappBrowser);

    _defineProperty(this, "getWalletType", function () {
      return "dapp";
    });

    _defineProperty(this, "getNetworkId", function () {
      return new Promise(function (resolve, reject) {
        _this.web3.eth.net.getId(function (error, result) {
          if (error || !result) {
            var error = new Error("Cannot get network id");
            reject(error);
          } else {
            resolve(result);
          }
        });
      });
    });

    _defineProperty(this, "sendTx", function (txObj) {
      return new Promise(function (resolve, reject) {
        _this.web3.eth.sendTransaction(txObj, function (err, transactionHash) {
          if (!err) {
            resolve(transactionHash);
          } else {
            console.log(err);
            reject(err.message);
          }
        });
      });
    });

    this.web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(web3__WEBPACK_IMPORTED_MODULE_0___default.a.givenProvider);
  }

  _createClass(DappBrowser, [{
    key: "getCoinbase",
    value: function getCoinbase() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2.web3.eth.getAccounts(function (error, result) {
          if (error || result.length === 0) {
            var error = new Error("Cannot get coinbase");
            reject(error);
          } else {
            resolve(result[0]);
          }
        });
      });
    }
  }, {
    key: "setDefaultAddress",
    value: function setDefaultAddress(address) {
      this.web3.eth.defaultAccount = address;
    }
  }]);

  return DappBrowser;
}();



/***/ }),

/***/ "./app/services/web3/dapp/MetamaskBrowser.js":
/*!***************************************************!*\
  !*** ./app/services/web3/dapp/MetamaskBrowser.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MetamaskBrowser; });
/* harmony import */ var _DappBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DappBrowser */ "./app/services/web3/dapp/DappBrowser.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var MetamaskBrowser =
/*#__PURE__*/
function (_DappBrowser) {
  _inherits(MetamaskBrowser, _DappBrowser);

  function MetamaskBrowser() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MetamaskBrowser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MetamaskBrowser)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getWalletType", function () {
      return "metamask";
    });

    return _this;
  }

  _createClass(MetamaskBrowser, [{
    key: "getCoinbase",
    value: function getCoinbase() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2.web3.eth.getCoinbase(function (error, result) {
          console.log(error);

          if (error || !result) {
            var error = new Error("Cannot get coinbase");
            reject(error);
          } else {
            resolve(result);
          }
        });
      });
    }
  }]);

  return MetamaskBrowser;
}(_DappBrowser__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./app/services/web3/dapp/ModernMetamaskBrowser.js":
/*!*********************************************************!*\
  !*** ./app/services/web3/dapp/ModernMetamaskBrowser.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModernMetamaskBrowser; });
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DappBrowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DappBrowser */ "./app/services/web3/dapp/DappBrowser.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var ModernMetamaskBrowser =
/*#__PURE__*/
function (_DappBrowser) {
  _inherits(ModernMetamaskBrowser, _DappBrowser);

  function ModernMetamaskBrowser() {
    var _this;

    _classCallCheck(this, ModernMetamaskBrowser);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ModernMetamaskBrowser).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getWalletType", function () {
      return "metamask";
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getNetworkId", function () {
      return new Promise(function (resolve, reject) {
        _this.web3.eth.net.getId(function (error, result) {
          if (error || !result) {
            var error = new Error("Cannot get network id");
            reject(error);
          } else {
            resolve(result);
          }
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getCoinbase", function () {
      //var _this = this
      //console.log(_this)
      if (window.ethereum) {
        return new Promise(function (resolve, reject) {
          window.ethereum.enable().then(function () {
            _this.web3.eth.getCoinbase(function (error, result) {
              if (error || !result) {
                var error = new Error("Cannot get coinbase");
                reject(error);
              } else {
                resolve(result);
              }
            });
          }).catch(function (err) {
            console.log(err);
            var error = new Error("Cannot get coinbase");
            reject(error);
          });
        });
      } else {
        return new Promise(function (resolve, reject) {
          _this.web3.eth.getCoinbase(function (error, result) {
            // alert(error)
            // alert(result)
            console.log(error); //   console.log(result)      

            if (error || !result) {
              var error = new Error("Cannot get coinbase");
              reject(error);
            } else {
              resolve(result);
            }
          });
        });
      }
    });

    _this.web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(web3__WEBPACK_IMPORTED_MODULE_0___default.a.givenProvider);
    return _this;
  }

  _createClass(ModernMetamaskBrowser, [{
    key: "setDefaultAddress",
    value: function setDefaultAddress(address) {
      this.web3.eth.defaultAccount = address;
    }
  }]);

  return ModernMetamaskBrowser;
}(_DappBrowser__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./app/services/web3/dapp/TrustBrowser.js":
/*!************************************************!*\
  !*** ./app/services/web3/dapp/TrustBrowser.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TrustBrowser; });
/* harmony import */ var _DappBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DappBrowser */ "./app/services/web3/dapp/DappBrowser.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var TrustBrowser =
/*#__PURE__*/
function (_DappBrowser) {
  _inherits(TrustBrowser, _DappBrowser);

  function TrustBrowser() {
    _classCallCheck(this, TrustBrowser);

    return _possibleConstructorReturn(this, _getPrototypeOf(TrustBrowser).apply(this, arguments));
  }

  _createClass(TrustBrowser, [{
    key: "getCoinbase",
    value: function getCoinbase() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.web3.eth.getCoinbase(function (error, result) {
          console.log(error);

          if (error || !result) {
            var error = new Error("Cannot get coinbase");
            reject(error);
          } else {
            resolve(result);
          }
        });
      });
    }
  }]);

  return TrustBrowser;
}(_DappBrowser__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./app/services/web3/dapp/index.js":
/*!*****************************************!*\
  !*** ./app/services/web3/dapp/index.js ***!
  \*****************************************/
/*! exports provided: DappBrowser, CipherBrowser, MetamaskBrowser, ModernMetamaskBrowser, TrustBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DappBrowser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DappBrowser.js */ "./app/services/web3/dapp/DappBrowser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DappBrowser", function() { return _DappBrowser_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _CipherBrowser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CipherBrowser.js */ "./app/services/web3/dapp/CipherBrowser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CipherBrowser", function() { return _CipherBrowser_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _MetamaskBrowser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MetamaskBrowser.js */ "./app/services/web3/dapp/MetamaskBrowser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetamaskBrowser", function() { return _MetamaskBrowser_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _ModernMetamaskBrowser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ModernMetamaskBrowser.js */ "./app/services/web3/dapp/ModernMetamaskBrowser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModernMetamaskBrowser", function() { return _ModernMetamaskBrowser_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _TrustBrowser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TrustBrowser.js */ "./app/services/web3/dapp/TrustBrowser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TrustBrowser", function() { return _TrustBrowser_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),

/***/ "./app/services/web3/index.js":
/*!************************************!*\
  !*** ./app/services/web3/index.js ***!
  \************************************/
/*! exports provided: newWeb3Instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newWeb3Instance", function() { return newWeb3Instance; });
/* harmony import */ var _dapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dapp */ "./app/services/web3/dapp/index.js");

function newWeb3Instance() {
  var type = getWeb3Type();
  var web3Instance;

  switch (type) {
    case "modern_metamask":
      web3Instance = new _dapp__WEBPACK_IMPORTED_MODULE_0__["ModernMetamaskBrowser"]();
      break;

    case "trust":
      web3Instance = new _dapp__WEBPACK_IMPORTED_MODULE_0__["TrustBrowser"]();
      break;

    case "cipher":
      web3Instance = new _dapp__WEBPACK_IMPORTED_MODULE_0__["CipherBrowser"]();
      break;

    case "metamask":
      web3Instance = new _dapp__WEBPACK_IMPORTED_MODULE_0__["MetamaskBrowser"]();
      break;

    case "dapp":
    case "unknown":
      web3Instance = new _dapp__WEBPACK_IMPORTED_MODULE_0__["DappBrowser"]();
      break;

    case "non_web3":
      web3Instance = false;
      break;

    default:
      web3Instance = false;
      break;
  }

  console.log("web3_type");
  console.log(type);
  return web3Instance;
}

function getWeb3Type() {
  if (window.ethereum) {
    return "modern_metamask";
  }

  if (window.web3) {
    if (window.web3.currentProvider && window.web3.currentProvider.isMetaMask) {
      return "metamask";
    }

    if (window.web3.currentProvider && window.web3.currentProvider.isTrust === true) {
      return "trust";
    }

    if (!!window.__CIPHER__ && window.web3.currentProvider && window.web3.currentProvider.constructor && window.web3.currentProvider.constructor.name === "CipherProvider") {
      return "cipher";
    }

    if (window.web3.isDAppBrowser && window.web3.isDAppBrowser()) {
      return "dapp";
    }

    return "unknown";
  }

  return "non_web3";
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-redux-saga */ "next-redux-saga");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store */ "./store.js");

var _jsxFileName = "/Users/andrewnguyen/Documents/personal/StateOfChain/mvp/client-mvp/pages/_app.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var StackChainApp =
/*#__PURE__*/
function (_App) {
  _inherits(StackChainApp, _App);

  function StackChainApp() {
    _classCallCheck(this, StackChainApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(StackChainApp).apply(this, arguments));
  }

  _createClass(StackChainApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          store = _this$props.store;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
        store: store,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, _extends({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return StackChainApp;
}(next_app__WEBPACK_IMPORTED_MODULE_3___default.a);

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default()(_store__WEBPACK_IMPORTED_MODULE_6__["default"])(next_redux_saga__WEBPACK_IMPORTED_MODULE_5___default()(StackChainApp)));

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/reducers */ "./app/reducers/index.js");
/* harmony import */ var _app_sagas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/sagas */ "./app/sagas/index.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-logger */ "redux-logger");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_4__);





var sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();

function StoreConfiguration(preloadedState) {
  /**
   * Since Next.js does server-side rendering, you are REQUIRED to pass`preloadedState`
   * when creating the store.
   */
  var middlewareArray = [sagaMiddleware, redux_logger__WEBPACK_IMPORTED_MODULE_4___default.a];
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_app_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], preloadedState, redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(void 0, middlewareArray));
  /**
   * next-redux-saga depends on `runSagaTask` and `sagaTask` being attached to the store.
   *
   *   `runSagaTask` is used to rerun the rootSaga on the client when in sync mode (default)
   *   `sagaTask` is used to await the rootSaga task before sending results to the client
   *
   */

  store.runSagaTask = function () {
    store.sagaTask = sagaMiddleware.run(_app_sagas__WEBPACK_IMPORTED_MODULE_3__["default"]);
  }; // run the rootSaga initially


  store.runSagaTask();
  return store;
}

/* harmony default export */ __webpack_exports__["default"] = (StoreConfiguration);

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map