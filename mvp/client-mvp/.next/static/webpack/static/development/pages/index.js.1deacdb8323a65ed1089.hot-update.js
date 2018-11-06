webpackHotUpdate("static/development/pages/index.js",{

/***/ "./app/actions/commonActions.js":
/*!**************************************!*\
  !*** ./app/actions/commonActions.js ***!
  \**************************************/
/*! exports provided: checkMetamaskInstall, updateMetamaskAccount, throwMetamaskError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkMetamaskInstall", function() { return checkMetamaskInstall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMetamaskAccount", function() { return updateMetamaskAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwMetamaskError", function() { return throwMetamaskError; });
function checkMetamaskInstall() {
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
//# sourceMappingURL=index.js.1deacdb8323a65ed1089.hot-update.js.map