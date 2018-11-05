webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./app/services/web3/dapp/ModernMetamaskBrowser.js":
/*!*********************************************************!*\
  !*** ./app/services/web3/dapp/ModernMetamaskBrowser.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModernMetamaskBrowser; });
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
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



/***/ })

})
//# sourceMappingURL=_app.js.0584b520a3ff17511ae1.hot-update.js.map