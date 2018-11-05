webpackHotUpdate("static/development/pages/question.js",{

/***/ "./app/actions/userActions.js":
/*!************************************!*\
  !*** ./app/actions/userActions.js ***!
  \************************************/
/*! exports provided: voteUser, saveTx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "voteUser", function() { return voteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveTx", function() { return saveTx; });
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

/***/ })

})
//# sourceMappingURL=question.js.8325d40dc0bdd94df342.hot-update.js.map