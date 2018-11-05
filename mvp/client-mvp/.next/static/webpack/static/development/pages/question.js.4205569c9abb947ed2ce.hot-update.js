webpackHotUpdate("static/development/pages/question.js",{

/***/ "./pages/question.js":
/*!***************************!*\
  !*** ./pages/question.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_components_Layout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/components/Layout.js */ "./app/components/Layout.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _app_actions_questionActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/actions/questionActions */ "./app/actions/questionActions.js");
/* harmony import */ var _app_actions_answerActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/actions/answerActions */ "./app/actions/answerActions.js");
/* harmony import */ var _app_actions_userActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/actions/userActions */ "./app/actions/userActions.js");
var _jsxFileName = "/Users/andrewnguyen/Documents/personal/StateOfChain/mvp/client-mvp/pages/question.js";


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









var Question =
/*#__PURE__*/
function (_Component) {
  _inherits(Question, _Component);

  function Question() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Question);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Question)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getListTxs", function () {
      var listTxs = _this.props.user.txs.map(function (txsHash) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          key: txsHash,
          href: "https://ropsten.etherscan.io/tx/" + txsHash,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, txsHash));
      });

      return listTxs;
    });

    return _this;
  }

  _createClass(Question, [{
    key: "onVoteQuestion",
    value: function onVoteQuestion(questionId, isUpvote, user) {
      this.props.dispatch(Object(_app_actions_questionActions__WEBPACK_IMPORTED_MODULE_4__["voteQuestion"])(questionId, isUpvote)); //submit to blockchain

      if (isUpvote) {
        this.props.dispatch(Object(_app_actions_userActions__WEBPACK_IMPORTED_MODULE_6__["voteUser"])(user, 1));
      } else {
        this.props.dispatch(Object(_app_actions_userActions__WEBPACK_IMPORTED_MODULE_6__["voteUser"])(user, 0));
      }
    }
  }, {
    key: "onVoteAnswer",
    value: function onVoteAnswer(answerId, isUpvote, user) {
      this.props.dispatch(Object(_app_actions_answerActions__WEBPACK_IMPORTED_MODULE_5__["voteAnswer"])(answerId, isUpvote));

      if (isUpvote) {
        this.props.dispatch(Object(_app_actions_userActions__WEBPACK_IMPORTED_MODULE_6__["voteUser"])(user, 1));
      } else {
        this.props.dispatch(Object(_app_actions_userActions__WEBPACK_IMPORTED_MODULE_6__["voteUser"])(user, 0));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var question = this.props.question.questions[this.props.router.query.id];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Layout_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, this.props.user.txs.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Your transactions"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, this.getListTxs())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Question #", this.props.router.query.id, ": ", question.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          marginBottom: 5
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, question.votes, " votes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          marginRight: 10
        },
        onClick: function onClick() {
          return _this2.onVoteQuestion(question.id, true, question.user);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Upvote"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        onClick: function onClick() {
          return _this2.onVoteQuestion(question.id, false, question.user);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Downvote")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, question.content)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Answer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "User:"), this.props.answer.answers.map(function (answer, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            marginBottom: 5,
            marginTop: 10
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, answer.votes, " votes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          style: {
            marginRight: 10
          },
          onClick: function onClick() {
            return _this2.onVoteAnswer(answer.id, true, question.user);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, "Upvote"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          onClick: function onClick() {
            return _this2.onVoteAnswer(answer.id, false, question.user);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, "Downvote")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, answer.content));
      }))));
    }
  }]);

  return Question;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(function (state) {
  return state;
})(Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Question)));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/question")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=question.js.4205569c9abb947ed2ce.hot-update.js.map