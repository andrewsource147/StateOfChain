webpackHotUpdate("static/development/pages/ranking.js",{

/***/ "./app/actions/commonActions.js":
/*!**************************************!*\
  !*** ./app/actions/commonActions.js ***!
  \**************************************/
/*! exports provided: checMetamaskInstall, updateMetamaskAccount, throwMetamaskError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checMetamaskInstall", function() { return checMetamaskInstall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMetamaskAccount", function() { return updateMetamaskAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwMetamaskError", function() { return throwMetamaskError; });
function checMetamaskInstall() {
  return {
    type: "COMMON.CHECK_METAMASK_INSTALL"
  };
}
function updateMetamaskAccount(address, vote) {
  return {
    type: "COMMON.UPDATE_METAMASK_ACCOUNT",
    payload: {
      address: address,
      vote: vote
    }
  };
}
function throwMetamaskError(err) {
  return {
    type: "COMMON.THROW_METAMASK_ERROR",
    payload: {
      err: err
    }
  };
}

/***/ })

})
//# sourceMappingURL=ranking.js.26a8383cfa47dc7a0713.hot-update.js.map