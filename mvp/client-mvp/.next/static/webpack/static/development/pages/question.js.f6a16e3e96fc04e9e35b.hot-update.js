webpackHotUpdate("static/development/pages/question.js",{

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

/***/ })

})
//# sourceMappingURL=question.js.f6a16e3e96fc04e9e35b.hot-update.js.map