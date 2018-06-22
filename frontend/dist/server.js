/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/mainPage.js":
/*!********************************!*\
  !*** ./src/server/mainPage.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = renderFullPage;
function renderFullPage(html, preloadedState, helmet) {
	return '\n    <!doctype html>\n    <html>\n      <head>\n\t\t<link rel="icon" href="/dist/favicon.ico" type="image/ico" />\n\t\t\n\t\t<!-- Google font -->\n\t\t<link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700" rel="stylesheet">  \n\t  \n\t\t<!-- Bootstrap -->\n\t\t<link type="text/css" rel="stylesheet" href="/dist/assets/styles/bootstrap.min.css"/>\n\t\t\n\t\t<!-- Slick -->\n\t\t<link type="text/css" rel="stylesheet" href="/dist/assets/styles/slick.css"/>\n\t\t<link type="text/css" rel="stylesheet" href="/dist/assets/styles/slick-theme.css"/>\n\t  \n\t\t<!-- nouislider -->\n\t\t<link type="text/css" rel="stylesheet" href="/dist/assets/styles/nouislider.min.css"/>\n\t  \n\t\t<!-- Font Awesome Icon -->\n\t\t<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">\n\t\t\n\t\t<!-- Animate.css stlylesheet -->\n\t\t<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css">\n\t  \n\t\t<!-- Custom stlylesheet -->\n\t\t<link rel="stylesheet" href="/dist/assets/styles/style.css"/>\n\n        ' + (Object.keys(helmet).length ? helmet.title.toString() : '') + '\n        ' + (Object.keys(helmet).length ? helmet.meta.toString() : '') + '\n\t\t' + (Object.keys(helmet).length ? helmet.link.toString() : '') + '\n\t\t\n      </head>\n\t  <body>\n\t\t<div id="root">' + html + '</div>\n\t\t\n        <script>\n\t\t\twindow.__PRELOADED_STATE__ = ' + JSON.stringify(preloadedState).replace(/</g, '\\u003c') + '\n\t\t</script>\n\t\t\n\t\t<script src="/dist/assets/app.bundle.js"></script>\n\t\t\n\t\t<script src="/dist/assets/js/jquery.min.js"></script>\n\t\t<script src="/dist/assets/js/bootstrap.min.js"></script>\n\t\t<script src="/dist/assets/js/nouislider.min.js"></script>\n\t\t\n      </body>\n    </html>\n    ';
}

/***/ }),

/***/ "./src/server/renderRoute.js":
/*!***********************************!*\
  !*** ./src/server/renderRoute.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _redux = __webpack_require__(/*! redux */ "redux");

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(/*! react-dom/server */ "react-dom/server");

var _server2 = _interopRequireDefault(_server);

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _app = __webpack_require__(/*! ../shared/app/app.jsx */ "./src/shared/app/app.jsx");

var _app2 = _interopRequireDefault(_app);

var _combine = __webpack_require__(/*! ../shared/app/redux/reducers/combine */ "./src/shared/app/redux/reducers/combine.js");

var _combine2 = _interopRequireDefault(_combine);

var _thunk = __webpack_require__(/*! ../shared/app/redux/middleware/thunk */ "./src/shared/app/redux/middleware/thunk.js");

var _thunk2 = _interopRequireDefault(_thunk);

var _routes = __webpack_require__(/*! ../shared/routes/routes */ "./src/shared/routes/routes.js");

var _routes2 = _interopRequireDefault(_routes);

var _mainPage = __webpack_require__(/*! ./mainPage */ "./src/server/mainPage.js");

var _mainPage2 = _interopRequireDefault(_mainPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async function renderRoute(req, res) {
	try {
		// create a new redux store on each request
		var store = (0, _redux.createStore)(_combine2.default, {}, (0, _redux.applyMiddleware)(_thunk2.default));
		var foundPath = null;
		// match request url to our React Router paths and grab component

		var _ref = _routes2.default.routes.find(function (_ref2) {
			var path = _ref2.path,
			    exact = _ref2.exact;

			foundPath = (0, _reactRouter.matchPath)(req.url, {
				path: path,
				exact: exact,
				strict: false
			});
			return foundPath;
		}) || {},
		    component = _ref.component;

		// safety check for valid component, if no component we initialize an empty shell


		if (!component) component = {};

		// safety check for fetchData function, if no function we give it an empty promise
		if (!component.fetchData) component.fetchData = function () {
			return new Promise(function (resolve) {
				return resolve();
			});
		};
		// our isomorphic application grabbing async data
		await component.fetchData({ store: store, params: foundPath ? foundPath.params : {} });
		// get store state (js object of entire store)
		var preloadedState = store.getState();
		// context is used by react router, empty by default
		var context = {};
		var html = _server2.default.renderToString(_react2.default.createElement(
			_reactRedux.Provider,
			{ store: store },
			_react2.default.createElement(
				_reactRouter.StaticRouter,
				{ context: context, location: req.url },
				_react2.default.createElement(_app2.default, null)
			)
		));
		// render helmet data aka meta data in <head></head>
		var helmetData = _reactHelmet2.default.renderStatic();
		// check context for url, if url exists then react router has ran into a redirect
		if (context.url)
			// process redirect through express by redirecting
			res.redirect(context.status, 'http://' + req.headers.host + context.url);else if (foundPath && foundPath.path == '/404')
			// if 404 then send our custom 404 page with initial state and meta data, this is needed for status code 404
			res.status(404).send((0, _mainPage2.default)(html, preloadedState, helmetData));else
			// else send down page with initial state and meta data
			res.send((0, _mainPage2.default)(html, preloadedState, helmetData));
	} catch (error) {
		res.status(400).send((0, _mainPage2.default)('', {}, {}));
	}
};

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

var _renderRoute = __webpack_require__(/*! ./renderRoute */ "./src/server/renderRoute.js");

var _renderRoute2 = _interopRequireDefault(_renderRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Configuration ===============================================================
var app = (0, _express2.default)();
app.use('/dist', _express2.default.static('./dist'));

app.get('*', _renderRoute2.default);

var port = process.env.PORT || 9000;

// Launch ======================================================================
// Starts the Express server on port 9000 and logs that it has started
app.listen(port, function () {
	console.log('Express server started at: http://localhost:' + port + '/'); // eslint-disable-line no-console
});

/***/ }),

/***/ "./src/shared/app/app.jsx":
/*!********************************!*\
  !*** ./src/shared/app/app.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _redirectWStatus = __webpack_require__(/*! ./redirect-w-status.jsx */ "./src/shared/app/redirect-w-status.jsx");

var _redirectWStatus2 = _interopRequireDefault(_redirectWStatus);

var _navbar = __webpack_require__(/*! ./navbar.jsx */ "./src/shared/app/navbar.jsx");

var _navbar2 = _interopRequireDefault(_navbar);

var _routes = __webpack_require__(/*! ../routes/routes */ "./src/shared/routes/routes.js");

var _routes2 = _interopRequireDefault(_routes);

var _privateRoute = __webpack_require__(/*! ./private-route.jsx */ "./src/shared/app/private-route.jsx");

var _privateRoute2 = _interopRequireDefault(_privateRoute);

var _api = __webpack_require__(/*! api */ "api");

var _api2 = _interopRequireDefault(_api);

var _logic = __webpack_require__(/*! ../logic */ "./src/shared/logic/index.js");

var _logic2 = _interopRequireDefault(_logic);

var _alert = __webpack_require__(/*! ./redux/actions/alert */ "./src/shared/app/redux/actions/alert.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _redux = __webpack_require__(/*! redux */ "redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (this.props.location !== prevProps.location) {
                this.props.clear(); //Clear alerts
            }
        }
    }, {
        key: 'render',
        value: function render() {

            _api2.default.token = function (token) {
                if (token) {
                    localStorage.setItem('token', token);
                    return;
                }

                return localStorage.getItem('token');
            };

            _logic2.default.user = function (user) {
                if (typeof user !== 'undefined') {
                    if (user === null) localStorage.removeItem('user');else localStorage.setItem('user', JSON.stringify(user));

                    return;
                }
                return JSON.parse(localStorage.getItem('user'));
            };

            var routes = _routes2.default.routes.map(function (_ref, i) {
                var path = _ref.path,
                    component = _ref.component,
                    exact = _ref.exact;
                return _react2.default.createElement(_reactRouterDom.Route, { key: Math.random() + 'ROUTE_', exact: exact, path: path, component: component });
            });
            var privateRoutes = _routes2.default.privateRoutes.map(function (_ref2, i) {
                var path = _ref2.path,
                    component = _ref2.component,
                    exact = _ref2.exact;
                return _react2.default.createElement(_privateRoute2.default, { key: Math.random() + 'PRIVATEROUTE_', exact: exact, path: path, component: component });
            });
            var redirects = _routes2.default.redirects.map(function (_ref3, i) {
                var from = _ref3.from,
                    to = _ref3.to,
                    status = _ref3.status;
                return _react2.default.createElement(_redirectWStatus2.default, { key: Math.random() + 'REDIRECT_', from: from, to: to, status: status });
            });

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_navbar2.default, null),
                _react2.default.createElement(
                    _reactRouterDom.Switch,
                    null,
                    routes,
                    privateRoutes,
                    redirects
                )
            );
        }
    }]);

    return App;
}(_react.Component);

function mapStateToProps(state) {
    var alert = state.alert;

    return {
        alert: alert
    };
}

function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(_alert.alertActions, dispatch);
}

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, { withRef: true })(App));

/***/ }),

/***/ "./src/shared/app/categories.jsx":
/*!***************************************!*\
  !*** ./src/shared/app/categories.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _redux = __webpack_require__(/*! redux */ "redux");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _categories = __webpack_require__(/*! ./redux/actions/categories */ "./src/shared/app/redux/actions/categories.js");

var categoryActions = _interopRequireWildcard(_categories);

var _products = __webpack_require__(/*! ./redux/actions/products */ "./src/shared/app/redux/actions/products.js");

var productsActions = _interopRequireWildcard(_products);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Categories = function (_Component) {
    _inherits(Categories, _Component);

    function Categories() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Categories);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Categories.__proto__ || Object.getPrototypeOf(Categories)).call.apply(_ref, [this].concat(args))), _this), _this.handleCheck = function (e) {
            localStorage.setItem(e.target.id, e.target.checked);
            _this.props.getCategories();
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Categories, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var params = new URLSearchParams(this.props.location.search);
            var categories = params.get('c') ? params.get('c').split(',') : [];

            categories.length && categories.forEach(function (category) {
                return localStorage.setItem(category, true);
            });

            this.props.getCategories();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var categories = this.props.categories;

            return _react2.default.createElement(
                'div',
                { className: 'aside' },
                _react2.default.createElement(
                    'h3',
                    { className: 'aside-title' },
                    'Categories'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'checkbox-filter' },
                    categories.length && categories.map(function (category) {
                        return _react2.default.createElement(
                            'div',
                            { key: category._id, className: 'input-checkbox' },
                            _react2.default.createElement('input', { type: 'checkbox', id: category._id, checked: category.checked, onChange: _this2.handleCheck }),
                            _react2.default.createElement(
                                'label',
                                { htmlFor: category._id },
                                _react2.default.createElement('span', null),
                                category.name
                            )
                        );
                    })
                )
            );
        }
    }], [{
        key: 'fetchData',
        value: function fetchData(_ref2) {
            var store = _ref2.store;

            return store.dispatch(categoriesActions.getCategory());
        }
    }]);

    return Categories;
}(_react.Component);

function mapStateToProps(state) {
    var categories = state.categories,
        query = state.query;

    return { categories: categories, query: query };
}
function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(_extends({}, categoryActions, productsActions), dispatch);
}

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Categories));

/***/ }),

/***/ "./src/shared/app/countdown.jsx":
/*!**************************************!*\
  !*** ./src/shared/app/countdown.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Countdown = function (_Component) {
	_inherits(Countdown, _Component);

	function Countdown() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Countdown);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Countdown.__proto__ || Object.getPrototypeOf(Countdown)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			days: 0,
			hours: 0,
			min: 0,
			sec: 0
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Countdown, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			// update every second
			this.interval = setInterval(function () {
				var date = _this2.calculateCountdown(_this2.props.date);
				date ? _this2.setState(date) : _this2.stop();
			}, 1000);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.stop();
		}
	}, {
		key: 'calculateCountdown',
		value: function calculateCountdown(endDate) {
			var diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

			// clear countdown when date is reached
			if (diff <= 0) return false;

			var timeLeft = {
				years: 0,
				days: 0,
				hours: 0,
				min: 0,
				sec: 0
			};

			// calculate time difference between now and expected date
			if (diff >= 365.25 * 86400) {
				// 365.25 * 24 * 60 * 60
				timeLeft.years = Math.floor(diff / (365.25 * 86400));
				diff -= timeLeft.years * 365.25 * 86400;
			}
			if (diff >= 86400) {
				// 24 * 60 * 60
				timeLeft.days = Math.floor(diff / 86400);
				diff -= timeLeft.days * 86400;
			}
			if (diff >= 3600) {
				// 60 * 60
				timeLeft.hours = Math.floor(diff / 3600);
				diff -= timeLeft.hours * 3600;
			}
			if (diff >= 60) {
				timeLeft.min = Math.floor(diff / 60);
				diff -= timeLeft.min * 60;
			}
			timeLeft.sec = diff;

			return timeLeft;
		}
	}, {
		key: 'stop',
		value: function stop() {
			clearInterval(this.interval);
		}
	}, {
		key: 'addLeadingZeros',
		value: function addLeadingZeros(value) {
			value = String(value);
			while (value.length < 2) {
				value = '0' + value;
			}
			return value;
		}
	}, {
		key: 'render',
		value: function render() {
			var countDown = this.state;
			return countDown.days + countDown.hours + countDown.min + countDown.sec ? _react2.default.createElement(
				'span',
				{ className: 'sale' },
				_react2.default.createElement(
					'span',
					{ className: 'countdown-col' },
					_react2.default.createElement(
						'span',
						{ className: 'countdown-col-element' },
						_react2.default.createElement(
							'strong',
							null,
							this.addLeadingZeros(countDown.days),
							'd '
						),
						_react2.default.createElement(
							'span',
							null,
							' '
						)
					)
				),
				_react2.default.createElement(
					'span',
					{ className: 'countdown-col' },
					_react2.default.createElement(
						'span',
						{ className: 'countdown-col-element' },
						_react2.default.createElement(
							'strong',
							null,
							this.addLeadingZeros(countDown.hours)
						),
						_react2.default.createElement(
							'span',
							null,
							':'
						)
					)
				),
				_react2.default.createElement(
					'span',
					{ className: 'countdown-col' },
					_react2.default.createElement(
						'span',
						{ className: 'countdown-col-element' },
						_react2.default.createElement(
							'strong',
							null,
							this.addLeadingZeros(countDown.min)
						),
						_react2.default.createElement(
							'span',
							null,
							':'
						)
					)
				),
				_react2.default.createElement(
					'span',
					{ className: 'countdown-col' },
					_react2.default.createElement(
						'span',
						{ className: 'countdown-col-element' },
						_react2.default.createElement(
							'strong',
							null,
							this.addLeadingZeros(countDown.sec)
						)
					)
				)
			) : _react2.default.createElement('span', { className: 'sale-hidden' });
		}
	}]);

	return Countdown;
}(_react.Component);

Countdown.propTypes = {
	date: _propTypes2.default.string.isRequired
};

Countdown.defaultProps = {
	date: new Date()
};

exports.default = Countdown;

/***/ }),

/***/ "./src/shared/app/landing.jsx":
/*!************************************!*\
  !*** ./src/shared/app/landing.jsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _redux = __webpack_require__(/*! redux */ "redux");

var _products = __webpack_require__(/*! ./redux/actions/products */ "./src/shared/app/redux/actions/products.js");

var actions = _interopRequireWildcard(_products);

var _socket = __webpack_require__(/*! socket.io-client */ "socket.io-client");

var _socket2 = _interopRequireDefault(_socket);

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

var _productCard = __webpack_require__(/*! ./product-card.jsx */ "./src/shared/app/product-card.jsx");

var _productCard2 = _interopRequireDefault(_productCard);

var _categories = __webpack_require__(/*! ./categories.jsx */ "./src/shared/app/categories.jsx");

var _categories2 = _interopRequireDefault(_categories);

var _slider = __webpack_require__(/*! ./slider.jsx */ "./src/shared/app/slider.jsx");

var _slider2 = _interopRequireDefault(_slider);

var _search = __webpack_require__(/*! ../helpers/search */ "./src/shared/helpers/search.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var socket;

var Landing = function (_Component) {
    _inherits(Landing, _Component);

    function Landing() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Landing);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Landing.__proto__ || Object.getPrototypeOf(Landing)).call.apply(_ref, [this].concat(args))), _this), _this.componentWillUnmount = function () {
            socket.close();
        }, _this.handleSubmit = function () {
            var _this$props = _this.props,
                query = _this$props.query,
                categories = _this$props.categories;


            var url = (0, _search.search)(query, categories);
            _this.props.history.push(url);
        }, _this.handleClear = function () {
            var categories = _this.props.categories;

            categories.forEach(function (category) {
                localStorage.removeItem(category._id);
            });
            localStorage.removeItem('priceMin');
            localStorage.removeItem('priceMax');

            _this.props.history.push('/');
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Landing, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var params = new URLSearchParams(this.props.location.search);
            var query = params.get('q') || '';
            var categories = params.get('c') ? params.get('c').split(',') : [];
            var prices = params.get('p') ? params.get('p').split(',').map(function (price) {
                return Number(price);
            }) : [];

            this.props.getProducts(query, categories, prices);

            //socket = openSocket('http://localhost:5000')
            socket = (0, _socket2.default)('https://mysterious-basin-61944.herokuapp.com/');

            socket.on('newBid', function (productId) {
                //TODO: Check if product is in the list
                _this2.props.getProducts(query, categories, prices);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var products = this.props.products;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactHelmet.Helmet,
                    null,
                    _react2.default.createElement('meta', { charSet: 'utf-8' }),
                    _react2.default.createElement(
                        'title',
                        null,
                        'HotAuctions - Landing'
                    )
                ),
                _react2.default.createElement(
                    'section',
                    { className: 'section' },
                    _react2.default.createElement(
                        'div',
                        { className: 'container' },
                        _react2.default.createElement(
                            'div',
                            { className: 'row' },
                            _react2.default.createElement(
                                'aside',
                                { id: 'aside', className: 'col-md-3' },
                                _react2.default.createElement(_categories2.default, null),
                                _react2.default.createElement(_slider2.default, null),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'filter-buttons' },
                                    _react2.default.createElement(
                                        'button',
                                        { className: 'filter-btn apply', onClick: this.handleSubmit },
                                        'Apply'
                                    ),
                                    _react2.default.createElement(
                                        'button',
                                        { className: 'filter-btn clear', onClick: this.handleClear },
                                        'Clear'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { id: 'store', className: 'col-md-9' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row' },
                                    products.length ? products.map(function (product) {
                                        return _react2.default.createElement(_productCard2.default, { key: product._id, product: product });
                                    }) : _react2.default.createElement(
                                        'span',
                                        null,
                                        'We couldn\'t find any products'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }], [{
        key: 'fetchData',
        value: function fetchData(_ref2) {
            var store = _ref2.store;

            return store.dispatch(actions.getProducts('', [], []));
        }
    }]);

    return Landing;
}(_react.Component);

function mapStateToProps(state) {
    var products = state.products,
        query = state.query,
        categories = state.categories;

    return { products: products, query: query, categories: categories };
}
function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(actions, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Landing);

/***/ }),

/***/ "./src/shared/app/login.jsx":
/*!**********************************!*\
  !*** ./src/shared/app/login.jsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _redux = __webpack_require__(/*! redux */ "redux");

var _user = __webpack_require__(/*! ./redux/actions/user */ "./src/shared/app/redux/actions/user.js");

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_Component) {
    _inherits(Login, _Component);

    function Login(props) {
        _classCallCheck(this, Login);

        // reset login status
        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

        _this.handleChange = function (e) {
            var _e$target = e.target,
                name = _e$target.name,
                value = _e$target.value;

            _this.setState(_defineProperty({}, name, value));
        };

        _this.handleSubmit = function (e) {
            e.preventDefault();

            _this.setState({ submitted: true });
            var _this$state = _this.state,
                username = _this$state.username,
                password = _this$state.password;

            if (username && password) {
                _this.props.login(username, password, _this.props.history);
            }
        };

        _this.props.logout();

        _this.state = {
            username: '',
            password: '',
            submitted: false
        };

        return _this;
    }

    _createClass(Login, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                loggingIn = _props.loggingIn,
                alert = _props.alert;
            var _state = this.state,
                username = _state.username,
                password = _state.password,
                submitted = _state.submitted;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactHelmet.Helmet,
                    null,
                    _react2.default.createElement('meta', { charSet: 'utf-8' }),
                    _react2.default.createElement(
                        'title',
                        null,
                        'login'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'section' },
                    _react2.default.createElement(
                        'div',
                        { className: 'container' },
                        _react2.default.createElement(
                            'div',
                            { className: 'row' },
                            alert && alert.message && _react2.default.createElement(
                                'div',
                                { className: 'alert ' + alert.type },
                                alert.message
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-6 col-md-offset-3' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'section-title' },
                                    _react2.default.createElement(
                                        'h3',
                                        { className: 'title' },
                                        'Login'
                                    )
                                ),
                                _react2.default.createElement(
                                    'form',
                                    { name: 'form', onSubmit: this.handleSubmit },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group' + (submitted && !username ? ' has-error' : '') },
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'username', placeholder: 'Email', value: username, onChange: this.handleChange }),
                                        submitted && !username && _react2.default.createElement(
                                            'div',
                                            { className: 'help-block' },
                                            'Username is required'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group' + (submitted && !password ? ' has-error' : '') },
                                        _react2.default.createElement('input', { type: 'password', className: 'form-control', name: 'password', placeholder: 'Password', value: password, onChange: this.handleChange }),
                                        submitted && !password && _react2.default.createElement(
                                            'div',
                                            { className: 'help-block' },
                                            'Password is required'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group' },
                                        _react2.default.createElement(
                                            'button',
                                            { className: 'primary-btn' },
                                            'Login'
                                        ),
                                        loggingIn && _react2.default.createElement('img', { src: 'data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==' }),
                                        _react2.default.createElement(
                                            _reactRouterDom.Link,
                                            { to: '/register', className: 'btn btn-link' },
                                            'Register'
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Login;
}(_react.Component);

function mapStateToProps(state) {
    var loggingIn = state.user.loggingIn,
        alert = state.alert;

    return { loggingIn: loggingIn, alert: alert };
}
function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(_user.userActions, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Login);

/***/ }),

/***/ "./src/shared/app/navbar.jsx":
/*!***********************************!*\
  !*** ./src/shared/app/navbar.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _redux = __webpack_require__(/*! redux */ "redux");

var _user = __webpack_require__(/*! ./redux/actions/user */ "./src/shared/app/redux/actions/user.js");

var _products = __webpack_require__(/*! ./redux/actions/products */ "./src/shared/app/redux/actions/products.js");

var productsActions = _interopRequireWildcard(_products);

var _query = __webpack_require__(/*! ./redux/actions/query */ "./src/shared/app/redux/actions/query.js");

var queryActions = _interopRequireWildcard(_query);

var _search = __webpack_require__(/*! ../helpers/search */ "./src/shared/helpers/search.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavBar = function (_Component) {
	_inherits(NavBar, _Component);

	function NavBar() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, NavBar);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			query: ''
		}, _this.handleChange = function (e) {
			var _e$target = e.target,
			    name = _e$target.name,
			    value = _e$target.value;

			_this.setState(_defineProperty({}, name, value));
		}, _this.handleSubmit = function (e) {
			e.preventDefault();

			var query = _this.state.query;

			_this.props.setQuery(query);

			var url = (0, _search.search)(query, _this.props.categories);
			_this.props.history.push(url);
		}, _this.handleHomeLink = function (e) {
			e.preventDefault();

			_this.setState({ query: '' });
			_this.props.setQuery('');
			_this.props.history.push('/');
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(NavBar, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var params = new URLSearchParams(this.props.location.search);
			var query = params.get('q') || '';

			this.query !== query && this.setState({ query: query });
			this.props.retrieveUser();
		}
	}, {
		key: 'render',
		value: function render() {
			var user = this.props.user;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'header',
					null,
					_react2.default.createElement(
						'div',
						{ id: 'top-header' },
						_react2.default.createElement(
							'div',
							{ className: 'container' },
							_react2.default.createElement(
								'ul',
								{ className: 'header-links pull-left' },
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										'a',
										{ href: '#' },
										_react2.default.createElement('i', { className: 'fas fa-phone' }),
										' +021-95-51-84'
									)
								),
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										'a',
										{ href: '#' },
										_react2.default.createElement('i', { className: 'far fa-envelope' }),
										' email@email.com'
									)
								)
							),
							_react2.default.createElement(
								'ul',
								{ className: 'header-links pull-right' },
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										_reactRouterDom.Link,
										{ to: '/profile' },
										_react2.default.createElement('i', { className: 'far fa-user' }),
										' ',
										Object.keys(user).length ? 'My Account' : 'Sign in  ',
										' '
									)
								)
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ id: 'header' },
						_react2.default.createElement(
							'div',
							{ className: 'container' },
							_react2.default.createElement(
								'div',
								{ className: 'row' },
								_react2.default.createElement(
									'div',
									{ className: 'col-md-3' },
									_react2.default.createElement(
										'div',
										{ className: 'header-logo' },
										_react2.default.createElement(
											_reactRouterDom.Link,
											{ to: '/', onClick: this.handleHomeLink },
											'HotAuctions'
										)
									)
								),
								_react2.default.createElement(
									'div',
									{ className: 'col-md-6' },
									_react2.default.createElement(
										'div',
										{ className: 'header-search' },
										_react2.default.createElement(
											'form',
											{ onSubmit: this.handleSubmit },
											_react2.default.createElement('input', { className: 'input', placeholder: 'Search here', name: 'query', value: this.state.query, onChange: this.handleChange }),
											_react2.default.createElement(
												'button',
												{ className: 'search-btn' },
												'Search'
											)
										)
									)
								),
								_react2.default.createElement(
									'div',
									{ className: 'col-md-3 clearfix' },
									_react2.default.createElement(
										'div',
										{ className: 'header-ctn' },
										_react2.default.createElement(
											'div',
											null,
											_react2.default.createElement(
												_reactRouterDom.Link,
												{ to: '/user/products' },
												_react2.default.createElement('i', { className: 'fas fa-gavel' }),
												_react2.default.createElement(
													'span',
													null,
													'Your Auctions'
												)
											)
										)
									)
								)
							)
						)
					)
				),
				_react2.default.createElement('nav', { id: 'navigation' })
			);
		}
	}], [{
		key: 'fetchData',
		value: function fetchData() {}
	}]);

	return NavBar;
}(_react.Component);

function mapStateToProps(state) {
	var user = state.user,
	    categories = state.categories,
	    query = state.query;

	return { user: user, categories: categories, query: query };
}
function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)(_extends({}, _user.userActions, productsActions, queryActions), dispatch);
}

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, { withRef: true })(NavBar));

/***/ }),

/***/ "./src/shared/app/private-route.jsx":
/*!******************************************!*\
  !*** ./src/shared/app/private-route.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PrivateRoute = function PrivateRoute(_ref) {
    var Component = _ref.component,
        rest = _objectWithoutProperties(_ref, ['component']);

    return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { render: function render(props) {
            return localStorage.getItem('user') ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: { pathname: '/login', state: { from: props.location } } });
        } }));
};

exports.default = PrivateRoute;

/***/ }),

/***/ "./src/shared/app/product-card.jsx":
/*!*****************************************!*\
  !*** ./src/shared/app/product-card.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _countdown = __webpack_require__(/*! ./countdown.jsx */ "./src/shared/app/countdown.jsx");

var _countdown2 = _interopRequireDefault(_countdown);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductCard = function (_Component) {
    _inherits(ProductCard, _Component);

    function ProductCard() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ProductCard);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProductCard.__proto__ || Object.getPrototypeOf(ProductCard)).call.apply(_ref, [this].concat(args))), _this), _this.onProductClickHandler = function (id) {
            return function (e) {
                e.preventDefault();
                _this.props.history.push('/product/' + id);
            };
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ProductCard, [{
        key: 'renderProductInfo',
        value: function renderProductInfo() {
            var _props = this.props,
                product = _props.product,
                user = _props.user;

            var sd = new Date(product.startDate);
            sd.setDate(sd.getDate() + 7);

            if (product.closed) {
                //Products closed or Products closed and you've won
                return _react2.default.createElement(
                    'div',
                    { className: 'product-label' },
                    _react2.default.createElement(
                        'span',
                        { className: 'sale' },
                        'CLOSED'
                    ),
                    user && user._id === product.winningUser ? _react2.default.createElement(
                        'span',
                        { className: 'new' },
                        'YOU WON'
                    ) : _react2.default.createElement('span', { className: 'new-hidden' })
                );
            } else {

                if (user && user._id === product.currentUser) {
                    return _react2.default.createElement(
                        'div',
                        { className: 'product-label' },
                        _react2.default.createElement(_countdown2.default, { date: product.endDate }),
                        _react2.default.createElement(
                            'span',
                            { className: 'new' },
                            'WINING'
                        )
                    );
                }

                return _react2.default.createElement(
                    'div',
                    { className: 'product-label' },
                    _react2.default.createElement(_countdown2.default, { date: product.endDate }),
                    sd > Date.now() ? _react2.default.createElement(
                        'span',
                        { className: 'new' },
                        'NEW'
                    ) : _react2.default.createElement('span', { className: 'new-hidden' })
                );
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var product = this.props.product;


            return _react2.default.createElement(
                'div',
                { className: 'col-xs-6 col-sm-4 col-md-4 ', key: product._id, onClick: this.onProductClickHandler(product._id) },
                _react2.default.createElement(
                    'div',
                    { className: 'product animated fadeIn' },
                    _react2.default.createElement(
                        'div',
                        { className: 'product-img' },
                        _react2.default.createElement('img', { src: product.images[0], alt: '' }),
                        this.renderProductInfo()
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'product-body' },
                        _react2.default.createElement(
                            'h3',
                            { className: 'product-name' },
                            _react2.default.createElement(
                                'a',
                                { href: '#' },
                                product.title
                            )
                        ),
                        _react2.default.createElement(
                            'h4',
                            { className: 'product-price' },
                            product.currentPrice,
                            '\u20AC'
                        ),
                        _react2.default.createElement('div', { className: 'product-rating' }),
                        _react2.default.createElement(
                            'button',
                            { type: 'button', className: 'primary-btn ' + (product.closed && 'closed') },
                            'Make offer'
                        )
                    )
                )
            );
        }
    }]);

    return ProductCard;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(ProductCard);

/***/ }),

/***/ "./src/shared/app/product.jsx":
/*!************************************!*\
  !*** ./src/shared/app/product.jsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _redux = __webpack_require__(/*! redux */ "redux");

var _product = __webpack_require__(/*! ./redux/actions/product */ "./src/shared/app/redux/actions/product.js");

var actions = _interopRequireWildcard(_product);

var _socket = __webpack_require__(/*! socket.io-client */ "socket.io-client");

var _socket2 = _interopRequireDefault(_socket);

var _reactSlick = __webpack_require__(/*! react-slick */ "react-slick");

var _reactSlick2 = _interopRequireDefault(_reactSlick);

var _countdown = __webpack_require__(/*! ./countdown.jsx */ "./src/shared/app/countdown.jsx");

var _countdown2 = _interopRequireDefault(_countdown);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var socket;

var Product = function (_Component) {
    _inherits(Product, _Component);

    function Product() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Product);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Product.__proto__ || Object.getPrototypeOf(Product)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            bid: 0,
            priceClass: '',
            bidClass: '',
            slickImg: null,
            slickImgs: null,
            nav1: null,
            nav2: null,
            submitted: false
        }, _this.componentDidMount = function () {
            var _this$props = _this.props,
                id = _this$props.match.params.id,
                currentPrice = _this$props.product.currentPrice;

            //socket = openSocket('http://localhost:5000')

            socket = (0, _socket2.default)('https://mysterious-basin-61944.herokuapp.com/');

            socket.on('newBid', function (productId) {
                if (id === productId) {

                    _this.props.getProduct(id).then(function () {
                        _this.setState({ bid: Number(_this.props.product.currentPrice), priceClass: 'flash' }, function () {
                            setTimeout(function () {
                                return _this.setState({ priceClass: '' });
                            }, 1000);
                        });
                    });
                }
            });

            socket.on('error', function (error) {
                console.log('socket error');
            });

            _this.props.getProduct(id);

            if (currentPrice) {
                console.log('didMount', currentPrice);
                _this.setState({
                    bid: currentPrice, //when comes from server
                    nav1: _this.slider1,
                    nav2: _this.slider2
                });
            } else {
                _this.setState({
                    nav1: _this.slider1,
                    nav2: _this.slider2
                });
            }
        }, _this.componentDidUpdate = function (prevProps) {
            var currentPrice = _this.props.product.currentPrice;


            if (currentPrice && prevProps.product.currentPrice !== currentPrice) {
                _this.setState({ bid: currentPrice });
            }
        }, _this.componentWillUnmount = function () {
            socket.close();
        }, _this.handleChange = function (e) {
            var _e$target = e.target,
                name = _e$target.name,
                value = _e$target.value;


            _this.setState(_defineProperty({}, name, Math.round(Number(value))));
        }, _this.handleSubmit = function (e) {
            e.preventDefault();

            //TODO check bid
            var _this$props2 = _this.props,
                product = _this$props2.product,
                user = _this$props2.user;


            if (Object.keys(user).length === 0) {

                _this.props.history.push('/login');
            } else {
                var bid = _this.state.bid;


                if (product._id && user._id && bid && bid > product.currentPrice) {
                    _this.props.addProductBid(product._id, user._id, bid).then(function () {
                        _this.props.getProduct(product._id);
                    });
                } else {
                    //this.setState({ submitted: true })
                    _this.setState({ bidClass: 'flash' }, function () {
                        setTimeout(function () {
                            return _this.setState({ bidClass: '' });
                        }, 1000);
                    });
                    //TODO: Throw Error Something went wrong
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Product, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var product = this.props.product;
            var _state = this.state,
                priceClass = _state.priceClass,
                bidClass = _state.bidClass,
                submitted = _state.submitted;

            var settingsImgs = {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,
                centerMode: true,
                focusOnSelect: true,
                centerPadding: 0,
                vertical: true,
                asNavFor: this.state.nav1,
                ref: function ref(slider) {
                    return _this2.slider2 = slider;
                }
            };
            var settingsImg = {
                infinite: true,
                speed: 300,
                dots: false,
                arrows: true,
                fade: true,
                asNavFor: this.state.nav2,
                ref: function ref(slider) {
                    return _this2.slider1 = slider;
                }
            };

            return _react2.default.createElement(
                'div',
                { className: 'section' },
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        product.images && product.images.length && _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'div',
                                { id: 'product-main-img', className: 'product-preview col-md-5 col-md-push-2' },
                                _react2.default.createElement(
                                    _reactSlick2.default,
                                    settingsImg,
                                    product.images.map(function (image, index) {
                                        return _react2.default.createElement('img', { key: index, src: image, alt: '' });
                                    })
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { id: 'product-imgs', className: 'col-md-2  col-md-pull-5 hidden-xs' },
                                _react2.default.createElement(
                                    _reactSlick2.default,
                                    settingsImgs,
                                    product.images.map(function (image, index) {
                                        return _react2.default.createElement('img', { key: index, src: image, alt: '' });
                                    })
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-5' },
                            _react2.default.createElement(
                                'div',
                                { className: 'product-details' },
                                _react2.default.createElement(
                                    'h2',
                                    { className: 'product-name' },
                                    product.title
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'h3',
                                        { className: 'product-price animated ' + priceClass },
                                        product.currentPrice,
                                        '\u20AC '
                                    ),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'product-available' },
                                        product.closed ? 'Closed' : product.endDate && _react2.default.createElement(_countdown2.default, { date: product.endDate })
                                    )
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    product.description
                                ),
                                !product.closed && _react2.default.createElement(
                                    'div',
                                    { className: 'add-to-cart' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'qty-label' },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'animated ' + bidClass },
                                            'Enter your bid'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'input-number' },
                                            _react2.default.createElement('input', { type: 'number', name: 'bid', value: this.state.bid, onChange: this.handleChange }),
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'qty-up', onClick: function onClick() {
                                                        return _this2.setState({ bid: _this2.state.bid + 10 });
                                                    } },
                                                '+'
                                            ),
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'qty-down', onClick: function onClick() {
                                                        return _this2.state.bid > product.currentPrice && _this2.setState({ bid: _this2.state.bid - 10 });
                                                    } },
                                                '-'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'button',
                                        { onClick: this.handleSubmit, className: 'add-to-cart-btn' },
                                        _react2.default.createElement('i', { className: 'fa fa-shopping-cart' }),
                                        ' Submit bid'
                                    )
                                ),
                                _react2.default.createElement(
                                    'ul',
                                    { className: 'product-links' },
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'Share:'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '#' },
                                            _react2.default.createElement('i', { className: 'fab fa-facebook' })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '#' },
                                            _react2.default.createElement('i', { className: 'fab fa-twitter' })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '#' },
                                            _react2.default.createElement('i', { className: 'fab fa-google-plus' })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '#' },
                                            _react2.default.createElement('i', { className: 'far fa-envelope' })
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }], [{
        key: 'fetchData',
        value: function fetchData(_ref2) {
            var store = _ref2.store,
                id = _ref2.params.id;

            return store.dispatch(actions.getProduct(id));
        }
    }]);

    return Product;
}(_react.Component);

function mapStateToProps(state) {
    var product = state.product,
        user = state.user;

    return { product: product, user: user };
}
function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(actions, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Product);

/***/ }),

/***/ "./src/shared/app/profile.jsx":
/*!************************************!*\
  !*** ./src/shared/app/profile.jsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _redux = __webpack_require__(/*! redux */ "redux");

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _user = __webpack_require__(/*! ./redux/actions/user */ "./src/shared/app/redux/actions/user.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Profile = function (_Component) {
    _inherits(Profile, _Component);

    function Profile() {
        _classCallCheck(this, Profile);

        return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).apply(this, arguments));
    }

    _createClass(Profile, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.retrieveUser();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props$user = this.props.user,
                name = _props$user.name,
                surname = _props$user.surname,
                email = _props$user.email,
                password = _props$user.password;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactHelmet.Helmet,
                    null,
                    _react2.default.createElement('meta', { charSet: 'utf-8' }),
                    _react2.default.createElement(
                        'title',
                        null,
                        'HotAuctions - User Profile'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'section' },
                    _react2.default.createElement(
                        'div',
                        { className: 'container' },
                        _react2.default.createElement(
                            'div',
                            { className: 'row' },
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-6 col-md-offset-3 pt-2' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'section-title' },
                                    _react2.default.createElement(
                                        'h3',
                                        { className: 'title' },
                                        'Profile'
                                    )
                                ),
                                _react2.default.createElement(
                                    'form',
                                    { name: 'form', onSubmit: this.handleSubmit },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group' },
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'name', placeholder: 'Name', value: name, onChange: this.handleChange })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group' },
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'surname', placeholder: 'Surname', value: surname, onChange: this.handleChange })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group' },
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'email', placeholder: 'Email', value: email, onChange: this.handleChange })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group' },
                                        _react2.default.createElement('input', { type: 'password', className: 'form-control', name: 'password', placeholder: 'Password', value: password, onChange: this.handleChange })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group' },
                                        _react2.default.createElement(
                                            'button',
                                            { className: 'primary-btn' },
                                            'Save'
                                        ),
                                        _react2.default.createElement(
                                            _reactRouterDom.Link,
                                            { to: '/login', className: 'btn btn-link' },
                                            'Logout'
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Profile;
}(_react.Component);

function mapStateToProps(state) {
    var user = state.user;

    return {
        user: user
    };
}
function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(_user.userActions, dispatch);
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Profile);

/***/ }),

/***/ "./src/shared/app/redirect-w-status.jsx":
/*!**********************************************!*\
  !*** ./src/shared/app/redirect-w-status.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RedirectWithStatus = function RedirectWithStatus(_ref) {
    var key = _ref.key,
        from = _ref.from,
        to = _ref.to,
        status = _ref.status;
    return _react2.default.createElement(_reactRouterDom.Route, { render: function render(_ref2) {
            var staticContext = _ref2.staticContext;

            // there is no `staticContext` on the client, so
            // we need to guard against that here
            if (staticContext) staticContext.status = status;
            return _react2.default.createElement(_reactRouterDom.Redirect, { key: key, from: from, to: to });
        } });
};
exports.default = RedirectWithStatus;

/***/ }),

/***/ "./src/shared/app/redux/actions/alert.js":
/*!***********************************************!*\
  !*** ./src/shared/app/redux/actions/alert.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.alertActions = undefined;

var _constants = __webpack_require__(/*! ../constants */ "./src/shared/app/redux/constants/index.js");

var alertActions = exports.alertActions = {
    success: success,
    error: error,
    clear: clear
};

function success(message) {
    return { type: _constants.alertConstants.SUCCESS, message: message };
}

function error(message) {
    console.log('error message', message);

    return { type: _constants.alertConstants.ERROR, message: message };
}

function clear() {
    return { type: _constants.alertConstants.CLEAR };
}

/***/ }),

/***/ "./src/shared/app/redux/actions/categories.js":
/*!****************************************************!*\
  !*** ./src/shared/app/redux/actions/categories.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getCategories = getCategories;

var _constants = __webpack_require__(/*! ../constants */ "./src/shared/app/redux/constants/index.js");

var _logic = __webpack_require__(/*! ../../../logic */ "./src/shared/logic/index.js");

var _logic2 = _interopRequireDefault(_logic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getCategories() {
    return async function (dispatch, getState) {
        var _categories = await _logic2.default.listCategories();

        var categories = _categories.map(function (category) {
            category.checked = localStorage.getItem(category._id) === 'true' ? true : false;
            return category;
        });

        dispatch({ type: _constants.Types.UPDATE_CATEGORIES, categories: categories });
    };
}

/***/ }),

/***/ "./src/shared/app/redux/actions/product.js":
/*!*************************************************!*\
  !*** ./src/shared/app/redux/actions/product.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getProduct = getProduct;
exports.addProductBid = addProductBid;

var _constants = __webpack_require__(/*! ../constants */ "./src/shared/app/redux/constants/index.js");

var _logic = __webpack_require__(/*! ../../../logic */ "./src/shared/logic/index.js");

var _logic2 = _interopRequireDefault(_logic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getProduct(id) {
    return async function (dispatch, getState) {
        var data = await _logic2.default.retrieveProduct(id);
        dispatch({ type: _constants.Types.UPDATE_PRODUCT, payload: data });
    };
}

function addProductBid(productId, userId, bid) {
    return async function (dispatch, getState) {
        var data = await _logic2.default.addProductBid(productId, userId, bid);
        dispatch({ type: _constants.Types.ADD_PRODUCT_BID, payload: data });
    };
}

/***/ }),

/***/ "./src/shared/app/redux/actions/products.js":
/*!**************************************************!*\
  !*** ./src/shared/app/redux/actions/products.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getProducts = getProducts;

var _constants = __webpack_require__(/*! ../constants */ "./src/shared/app/redux/constants/index.js");

var _logic = __webpack_require__(/*! ../../../logic */ "./src/shared/logic/index.js");

var _logic2 = _interopRequireDefault(_logic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getProducts(query, categories, prices) {
    return async function (dispatch, getState) {
        var products = await _logic2.default.listProducts(query, categories, prices);
        dispatch({ type: _constants.Types.UPDATE_PRODUCTS, products: products });
    };
}

/***/ }),

/***/ "./src/shared/app/redux/actions/query.js":
/*!***********************************************!*\
  !*** ./src/shared/app/redux/actions/query.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setQuery = setQuery;

var _constants = __webpack_require__(/*! ../constants */ "./src/shared/app/redux/constants/index.js");

function setQuery(query) {
    return async function (dispatch, getState) {
        dispatch({ type: _constants.Types.UPDATE_QUERY, query: query });
    };
}

/***/ }),

/***/ "./src/shared/app/redux/actions/user.js":
/*!**********************************************!*\
  !*** ./src/shared/app/redux/actions/user.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.userActions = undefined;

var _constants = __webpack_require__(/*! ../constants */ "./src/shared/app/redux/constants/index.js");

var _logic = __webpack_require__(/*! ../../../logic */ "./src/shared/logic/index.js");

var _logic2 = _interopRequireDefault(_logic);

var _alert = __webpack_require__(/*! ./alert */ "./src/shared/app/redux/actions/alert.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userActions = exports.userActions = {
    login: login,
    logout: logout,
    retrieveUser: retrieveUser,
    register: register
};

function login(username, password, history) {
    return function (dispatch) {

        _logic2.default.login(username, password).then(function (user) {
            dispatch({ type: _constants.Types.UPDATE_USER, payload: user });
            history.push('/');
        }).catch(function (error) {
            dispatch(_alert.alertActions.error(error.message));
        });
    };
}

function logout() {
    return function (dispatch) {

        _logic2.default.logout().then(function () {
            dispatch({ type: _constants.Types.UPDATE_USER, payload: {} });
        }).catch(function (error) {
            dispatch(_alert.alertActions.error(error));
        });
    };
}

function retrieveUser() {
    return function (dispatch) {

        _logic2.default.retrieveUser().then(function (user) {
            dispatch({ type: _constants.Types.UPDATE_USER, payload: user });
        }).catch(function (error) {
            _logic2.default.logout();
            dispatch(_alert.alertActions.error(error));
        });
    };
}

function register(name, surname, email, password, history) {
    return function (dispatch) {

        _logic2.default.register(name, surname, email, password).then(function () {
            history.push('/login');
            dispatch(_alert.alertActions.success('Registration successful'));
        }).catch(function (error) {
            dispatch(_alert.alertActions.error(error.message));
        });
    };
}

/***/ }),

/***/ "./src/shared/app/redux/actions/userProducts.js":
/*!******************************************************!*\
  !*** ./src/shared/app/redux/actions/userProducts.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUserProducts = getUserProducts;

var _constants = __webpack_require__(/*! ../constants */ "./src/shared/app/redux/constants/index.js");

var _logic = __webpack_require__(/*! ../../../logic */ "./src/shared/logic/index.js");

var _logic2 = _interopRequireDefault(_logic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getUserProducts() {
    return async function (dispatch, getState) {
        var products = await _logic2.default.listUserProducts();
        dispatch({ type: _constants.Types.UPDATE_USER_PRODUCTS, products: products });
    };
}

/***/ }),

/***/ "./src/shared/app/redux/constants/index.js":
/*!*************************************************!*\
  !*** ./src/shared/app/redux/constants/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Types = exports.Types = {
    UPDATE_PRODUCT: 'UPDATE_PRODUCT',
    ADD_PRODUCT_BID: 'ADD_PRODUCT_BID',
    UPDATE_PRODUCTS: 'UPDATE_PRODUCTS',
    UPDATE_USER_PRODUCTS: 'UPDATE_USER_PRODUCTS',
    UPDATE_CATEGORIES: 'UPDATE_CATEGORIES',
    UPDATE_NAME: 'UPDATE_NAME',
    UPDATE_USER: 'UPDATE_USER',
    UPDATE_QUERY: 'UPDATE_QUERY'
};

var alertConstants = exports.alertConstants = {
    SUCCESS: 'ALERT_SUCCESS',
    ERROR: 'ALERT_ERROR',
    CLEAR: 'ALERT_CLEAR'
};

/***/ }),

/***/ "./src/shared/app/redux/middleware/thunk.js":
/*!**************************************************!*\
  !*** ./src/shared/app/redux/middleware/thunk.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var customMiddleware = function customMiddleware(store) {
    return function (next) {
        return function (action) {
            return isFunction(action) ? action(store.dispatch, store.getState) : next(action);
        };
    };
};
var isFunction = function isFunction(action) {
    return typeof action === 'function';
};
exports.default = customMiddleware;

/***/ }),

/***/ "./src/shared/app/redux/reducers/alert.js":
/*!************************************************!*\
  !*** ./src/shared/app/redux/reducers/alert.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = alert;

var _constants = __webpack_require__(/*! ../constants */ "./src/shared/app/redux/constants/index.js");

function alert() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _constants.alertConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case _constants.alertConstants.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case _constants.alertConstants.CLEAR:
      return {};
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/shared/app/redux/reducers/categories.js":
/*!*****************************************************!*\
  !*** ./src/shared/app/redux/reducers/categories.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = products;

var _constants = __webpack_require__(/*! ../constants */ "./src/shared/app/redux/constants/index.js");

var initialState = [];

function products() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case _constants.Types.UPDATE_CATEGORIES:
            return action.categories;
        default:
            return state;
    }
}

/***/ }),

/***/ "./src/shared/app/redux/reducers/combine.js":
/*!**************************************************!*\
  !*** ./src/shared/app/redux/reducers/combine.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(/*! redux */ "redux");

var _products = __webpack_require__(/*! ./products */ "./src/shared/app/redux/reducers/products.js");

var _products2 = _interopRequireDefault(_products);

var _categories = __webpack_require__(/*! ./categories */ "./src/shared/app/redux/reducers/categories.js");

var _categories2 = _interopRequireDefault(_categories);

var _product = __webpack_require__(/*! ./product */ "./src/shared/app/redux/reducers/product.js");

var _product2 = _interopRequireDefault(_product);

var _userProducts = __webpack_require__(/*! ./userProducts */ "./src/shared/app/redux/reducers/userProducts.js");

var _userProducts2 = _interopRequireDefault(_userProducts);

var _user = __webpack_require__(/*! ./user */ "./src/shared/app/redux/reducers/user.js");

var _user2 = _interopRequireDefault(_user);

var _alert = __webpack_require__(/*! ./alert */ "./src/shared/app/redux/reducers/alert.js");

var _alert2 = _interopRequireDefault(_alert);

var _query = __webpack_require__(/*! ./query */ "./src/shared/app/redux/reducers/query.js");

var _query2 = _interopRequireDefault(_query);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)({
    products: _products2.default,
    userProducts: _userProducts2.default,
    categories: _categories2.default,
    product: _product2.default,
    user: _user2.default,
    alert: _alert2.default,
    query: _query2.default
});

exports.default = reducers;

/***/ }),

/***/ "./src/shared/app/redux/reducers/product.js":
/*!**************************************************!*\
  !*** ./src/shared/app/redux/reducers/product.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = product;

var _constants = __webpack_require__(/*! ../constants */ "./src/shared/app/redux/constants/index.js");

var initialState = {};

function product() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case _constants.Types.UPDATE_PRODUCT:
            return action.payload;
        case _constants.Types.ADD_PRODUCT_BID:
            return action.payload;
        default:
            return state;
    }
}

/***/ }),

/***/ "./src/shared/app/redux/reducers/products.js":
/*!***************************************************!*\
  !*** ./src/shared/app/redux/reducers/products.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = products;

var _constants = __webpack_require__(/*! ../constants */ "./src/shared/app/redux/constants/index.js");

var initialState = {
    products: []
};

function products() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case _constants.Types.UPDATE_PRODUCTS:
            return action.products;
        default:
            return state;
    }
}

/***/ }),

/***/ "./src/shared/app/redux/reducers/query.js":
/*!************************************************!*\
  !*** ./src/shared/app/redux/reducers/query.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = query;

var _constants = __webpack_require__(/*! ../constants */ "./src/shared/app/redux/constants/index.js");

var initialState = '';

function query() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case _constants.Types.UPDATE_QUERY:
            return action.query;
        default:
            return state;
    }
}

/***/ }),

/***/ "./src/shared/app/redux/reducers/user.js":
/*!***********************************************!*\
  !*** ./src/shared/app/redux/reducers/user.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = user;

var _constants = __webpack_require__(/*! ../constants */ "./src/shared/app/redux/constants/index.js");

var initialState = {};

function user() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case _constants.Types.UPDATE_USER:
            return action.payload;
        default:
            return state;
    }
}

/***/ }),

/***/ "./src/shared/app/redux/reducers/userProducts.js":
/*!*******************************************************!*\
  !*** ./src/shared/app/redux/reducers/userProducts.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = userProducts;

var _constants = __webpack_require__(/*! ../constants */ "./src/shared/app/redux/constants/index.js");

var initialState = {
    products: []
};

function userProducts() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case _constants.Types.UPDATE_USER_PRODUCTS:
            return action.products;
        default:
            return state;
    }
}

/***/ }),

/***/ "./src/shared/app/register.jsx":
/*!*************************************!*\
  !*** ./src/shared/app/register.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _redux = __webpack_require__(/*! redux */ "redux");

var _user = __webpack_require__(/*! ./redux/actions/user */ "./src/shared/app/redux/actions/user.js");

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Register = function (_Component) {
    _inherits(Register, _Component);

    function Register() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Register);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Register.__proto__ || Object.getPrototypeOf(Register)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            name: '',
            surname: '',
            email: '',
            password: '',
            repeatpassword: '',
            submitted: false
        }, _this.handleChange = function (e) {
            var _e$target = e.target,
                name = _e$target.name,
                value = _e$target.value;

            _this.setState(_defineProperty({}, name, value));
        }, _this.handleSubmit = function (e) {
            e.preventDefault();

            _this.setState({ submitted: true });
            var _this$state = _this.state,
                name = _this$state.name,
                surname = _this$state.surname,
                email = _this$state.email,
                password = _this$state.password,
                repeatpassword = _this$state.repeatpassword;

            if (name && surname && email && password && password === repeatpassword) {
                _this.props.register(name, surname, email, password, _this.props.history);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Register, [{
        key: 'render',
        value: function render() {
            var _state = this.state,
                name = _state.name,
                surname = _state.surname,
                email = _state.email,
                password = _state.password,
                repeatpassword = _state.repeatpassword,
                submitted = _state.submitted,
                alert = _state.alert;

            console.log('alert', alert);
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactHelmet.Helmet,
                    null,
                    _react2.default.createElement('meta', { charSet: 'utf-8' }),
                    _react2.default.createElement(
                        'title',
                        null,
                        'HotAuctions - Register'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'section' },
                    _react2.default.createElement(
                        'div',
                        { className: 'container' },
                        _react2.default.createElement(
                            'div',
                            { className: 'row' },
                            alert && alert.message && _react2.default.createElement(
                                'div',
                                { className: 'alert ' + alert.type },
                                alert.message
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-6 col-md-offset-3 pt-2' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'section-title' },
                                    _react2.default.createElement(
                                        'h3',
                                        { className: 'title' },
                                        'Register'
                                    )
                                ),
                                _react2.default.createElement(
                                    'form',
                                    { name: 'form', onSubmit: this.handleSubmit },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group' + (submitted && !name ? ' has-error' : '') },
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'name', placeholder: 'First Name', value: name, onChange: this.handleChange }),
                                        submitted && !name && _react2.default.createElement(
                                            'div',
                                            { className: 'help-block' },
                                            'Name is required'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group' + (submitted && !surname ? ' has-error' : '') },
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'surname', placeholder: 'Last Name', value: surname, onChange: this.handleChange }),
                                        submitted && !surname && _react2.default.createElement(
                                            'div',
                                            { className: 'help-block' },
                                            'Surname is required'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group' + (submitted && !email ? ' has-error' : '') },
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'email', placeholder: 'Email', value: email, onChange: this.handleChange }),
                                        submitted && !email && _react2.default.createElement(
                                            'div',
                                            { className: 'help-block' },
                                            'Email is required'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group' + (submitted && !password ? ' has-error' : '') },
                                        _react2.default.createElement('input', { type: 'password', className: 'form-control', name: 'password', placeholder: 'Password', value: password, onChange: this.handleChange }),
                                        submitted && !password && _react2.default.createElement(
                                            'div',
                                            { className: 'help-block' },
                                            'Password is required'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group' + (submitted && !repeatpassword || password !== repeatpassword ? ' has-error' : '') },
                                        _react2.default.createElement('input', { type: 'password', className: 'form-control', name: 'repeatpassword', placeholder: 'Repeat Password', value: repeatpassword, onChange: this.handleChange }),
                                        submitted && (!repeatpassword || password !== repeatpassword) && _react2.default.createElement(
                                            'div',
                                            { className: 'help-block' },
                                            'Repeat password is required or does not match'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group' },
                                        _react2.default.createElement(
                                            'button',
                                            { className: 'primary-btn' },
                                            'Register'
                                        ),
                                        _react2.default.createElement(
                                            _reactRouterDom.Link,
                                            { to: '/login', className: 'btn btn-link' },
                                            'login'
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Register;
}(_react.Component);

function mapStateToProps(state) {
    var alert = state.alert;

    return { alert: alert };
}
function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(_user.userActions, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Register);

/***/ }),

/***/ "./src/shared/app/slider.jsx":
/*!***********************************!*\
  !*** ./src/shared/app/slider.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _reactNouislider = __webpack_require__(/*! react-nouislider */ "react-nouislider");

var _reactNouislider2 = _interopRequireDefault(_reactNouislider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slider = function (_Component) {
    _inherits(Slider, _Component);

    function Slider() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Slider);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Slider.__proto__ || Object.getPrototypeOf(Slider)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            range: [0, 3000],
            priceMin: 0,
            priceMax: 3000
        }, _this.handleChange = function (e) {
            var _e$target = e.target,
                name = _e$target.name,
                value = _e$target.value;
            var range = _this.state.range;


            name === 'priceMin' && value > range[1] && (value = range[1]);
            name === 'priceMin' && value < range[0] && (value = range[0]);
            name === 'priceMax' && value > range[1] && (value = range[1]);
            name === 'priceMax' && value < range[0] && (value = range[0]);

            _this.setState(_defineProperty({}, name, Math.round(value)));
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Slider, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var range = this.state.range;


            var params = new URLSearchParams(this.props.location.search);
            var prices = params.get('p') ? params.get('p').split(',').map(function (price) {
                return Number(price);
            }) : [];

            prices[0] > range[0] ? localStorage.setItem('priceMin', prices[0]) : localStorage.removeItem('priceMin');
            prices[1] < range[1] ? localStorage.setItem('priceMax', prices[1]) : localStorage.removeItem('priceMax');

            var priceMin = Number(localStorage.getItem('priceMin'));
            var priceMax = Number(localStorage.getItem('priceMax'));

            priceMin && this.setState({ priceMin: priceMin });
            priceMax && this.setState({ priceMax: priceMax });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var _state = this.state,
                range = _state.range,
                priceMin = _state.priceMin,
                priceMax = _state.priceMax;


            priceMin > range[0] ? localStorage.setItem('priceMin', priceMin) : localStorage.removeItem('priceMin');
            priceMax < range[1] ? localStorage.setItem('priceMax', priceMax) : localStorage.removeItem('priceMax');
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'aside' },
                _react2.default.createElement(
                    'h3',
                    { className: 'aside-title' },
                    'Price'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'price-filter' },
                    _react2.default.createElement(
                        'div',
                        { id: 'price-slider' },
                        _react2.default.createElement(_reactNouislider2.default, { range: { min: this.state.range[0], max: this.state.range[1] }, start: [this.state.priceMin, this.state.priceMax], connect: true,
                            onChange: function onChange(values) {
                                _this2.setState({ priceMin: Math.round(values[0]), priceMax: Math.round(values[1]) });
                            } })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'input-number price-min' },
                        _react2.default.createElement('input', { id: 'price-min', type: 'number', name: 'priceMin', value: this.state.priceMin, onChange: this.handleChange }),
                        _react2.default.createElement(
                            'span',
                            { className: 'qty-up', onClick: function onClick() {
                                    return _this2.state.priceMin < _this2.state.range[1] && _this2.setState({ priceMin: _this2.state.priceMin + 10 });
                                } },
                            '+'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'qty-down', onClick: function onClick() {
                                    return _this2.state.priceMin > _this2.state.range[0] && _this2.setState({ priceMin: _this2.state.priceMin - 10 });
                                } },
                            '-'
                        )
                    ),
                    _react2.default.createElement('span', null),
                    _react2.default.createElement(
                        'div',
                        { className: 'input-number price-max' },
                        _react2.default.createElement('input', { id: 'price-max', type: 'number', name: 'priceMax', value: this.state.priceMax, onChange: this.handleChange }),
                        _react2.default.createElement(
                            'span',
                            { className: 'qty-up', onClick: function onClick() {
                                    return _this2.state.priceMax < _this2.state.range[1] && _this2.setState({ priceMax: _this2.state.priceMax + 10 });
                                } },
                            '+'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'qty-down', onClick: function onClick() {
                                    return _this2.state.priceMax > _this2.state.range[0] && _this2.setState({ priceMax: _this2.state.priceMax - 10 });
                                } },
                            '-'
                        )
                    )
                )
            );
        }
    }]);

    return Slider;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Slider);

/***/ }),

/***/ "./src/shared/app/user-products.jsx":
/*!******************************************!*\
  !*** ./src/shared/app/user-products.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _redux = __webpack_require__(/*! redux */ "redux");

var _userProducts = __webpack_require__(/*! ./redux/actions/userProducts */ "./src/shared/app/redux/actions/userProducts.js");

var actions = _interopRequireWildcard(_userProducts);

var _socket = __webpack_require__(/*! socket.io-client */ "socket.io-client");

var _socket2 = _interopRequireDefault(_socket);

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

var _productCard = __webpack_require__(/*! ./product-card.jsx */ "./src/shared/app/product-card.jsx");

var _productCard2 = _interopRequireDefault(_productCard);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var socket;

var UserProducts = function (_Component) {
    _inherits(UserProducts, _Component);

    function UserProducts() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, UserProducts);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UserProducts.__proto__ || Object.getPrototypeOf(UserProducts)).call.apply(_ref, [this].concat(args))), _this), _this.componentWillUnmount = function () {
            socket.close();
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(UserProducts, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.props.getUserProducts();

            //socket = openSocket('http://localhost:5000')
            socket = (0, _socket2.default)('https://mysterious-basin-61944.herokuapp.com/');

            socket.on('newBid', function (productId) {
                //TODO: Check if product is in the list
                _this2.props.getUserProducts();
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                userProducts = _props.userProducts,
                user = _props.user;


            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactHelmet.Helmet,
                    null,
                    _react2.default.createElement('meta', { charSet: 'utf-8' }),
                    _react2.default.createElement(
                        'title',
                        null,
                        'HotAuctions - Your Auctions'
                    )
                ),
                _react2.default.createElement(
                    'section',
                    { className: 'section' },
                    _react2.default.createElement(
                        'div',
                        { className: 'container' },
                        _react2.default.createElement(
                            'div',
                            { id: 'store', className: 'col-md-12' },
                            _react2.default.createElement(
                                'div',
                                { className: 'row' },
                                userProducts.length ? userProducts.map(function (product) {
                                    return _react2.default.createElement(_productCard2.default, { key: product._id, product: product, user: user });
                                }) : _react2.default.createElement(
                                    'span',
                                    null,
                                    'no results'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return UserProducts;
}(_react.Component);

function mapStateToProps(state) {
    var userProducts = state.userProducts,
        user = state.user;

    return { userProducts: userProducts, user: user };
}
function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(actions, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, { withRef: true })(UserProducts);

/***/ }),

/***/ "./src/shared/helpers/buildUrl.js":
/*!****************************************!*\
  !*** ./src/shared/helpers/buildUrl.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (url, parameters) {
  var qs = "";
  for (var key in parameters) {
    var value = parameters[key];
    qs += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
  }
  if (qs.length > 0) {
    qs = qs.substring(0, qs.length - 1); //chop off last "&"
    url = url + "?" + qs;
  }
  return url;
};

/***/ }),

/***/ "./src/shared/helpers/search.js":
/*!**************************************!*\
  !*** ./src/shared/helpers/search.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.search = search;

var _buildUrl = __webpack_require__(/*! ./buildUrl */ "./src/shared/helpers/buildUrl.js");

var _buildUrl2 = _interopRequireDefault(_buildUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function search(query, categories) {

	var cat = categories.filter(function (category) {
		return category.checked;
	}).map(function (category) {
		return category._id;
	});
	var priceMin = Number(localStorage.getItem('priceMin'));
	var priceMax = Number(localStorage.getItem('priceMax'));

	var range = [];

	if (priceMin || priceMax) {
		range[0] = priceMin || 0;
		range[1] = priceMax || 0;
	}

	var parameters = {};

	if (query.length) parameters.q = query;
	if (cat.length) parameters.c = cat.join();
	if (range.length) parameters.p = range.join();

	var url = (0, _buildUrl2.default)('/', parameters);

	return url;
}

/***/ }),

/***/ "./src/shared/logic/index.js":
/*!***********************************!*\
  !*** ./src/shared/logic/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var auctionApi = __webpack_require__(/*! api */ "api");

//auctionApi.url = 'http://localhost:5000/api'
auctionApi.url = 'https://mysterious-basin-61944.herokuapp.com/api';

var logic = {

    /**
     * Saves the logged user's info. Must be overrided in App.
     * @param {Object<User>} user - User object like { email: 'email02@email.com', password: '123', name: 'Chas', surname: 'Keaveny', role: 'customer' }
     */
    user: function user(_user) {
        if (_user) {
            this._user = _user;

            return;
        }

        return this._user;
    },


    /**
     * Retrieve a list of products with the search and filter criteria.
     * @param {string} query - Search criteria string
     * @param {Array<string>} categories - Array of category id to filter
     * @param {Array<string>} prices - Range of prices to filter [min, max]
     */
    listProducts: function listProducts(query, categories, prices) {
        return auctionApi.listProducts(query, categories, prices);
    },


    /**
     * Retrieve the user's bid list. Use the user stored in this logic.
     *  @returns {Promise<[Product]>} - Array of product objects
     */
    listUserProducts: function listUserProducts() {
        var user = this.user();

        if (user === null) {
            return auctionApi.retrieveUser();
        }

        return auctionApi.listUserProducts(user._id);
    },


    /**
     * Retrieve a product with a given id
     * @param {string} productId - id of product to retrive
     * @returns {Promise<Product>} - Product object
     */
    retrieveProduct: function retrieveProduct(productId) {
        return auctionApi.retrieveProduct(productId);
    },


    /**
     * Save a bid for a given product
     * @param {string} productId - id of bidding product 
     * @param {string} userId - id of bidding user. Must be logged
     * @param {number} price - the bid price
     * @returns {Promise<string>} - Bid id string
     */
    addProductBid: function addProductBid(productId, userId, price) {
        return auctionApi.addProductBid(productId, userId, price);
    },


    /**
     * Retrieve a list of product categories available. It is used to filter the products.
     * @returns {Promise<[Category]>} - Array of categories
     */
    listCategories: function listCategories() {
        return auctionApi.listCategories();
    },


    /**
     * Authenticate the user and log in saving the user info in this logic.
     * @param {string} username - The username to log in. Email of the user.
     * @param {string} password - User's password.
     *  @returns {Object<User>}} - User object.
     */
    login: function login(username, password) {
        var _this = this;

        return auctionApi.authenticateUser(username, password).then(function (user) {
            // login successful if there's a jwt token in the response
            if (user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                _this.user(user);
                //localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        }).catch(function (error) {
            _this.logout();
            return Promise.reject(error);
        });
    },


    /**
     * Set user info saved in this logic to null
     * @returns {Objec<User>}
     */
    logout: function logout() {
        var _this2 = this;

        return Promise.resolve().then(function () {
            _this2.user(null);
        });
    },


    /**
     * Retrieves the user info.
     * @returns {Object<User>} - User's object
     */
    retrieveUser: function retrieveUser() {
        var user = this.user();

        if (user === null) {
            return auctionApi.retrieveUser();
        }

        return auctionApi.retrieveUser(user._id);
    },


    /**
     * Register a user with the data provided.
     * @param {string} name 
     * @param {string} surname 
     * @param {string} email 
     * @param {string} password 
     * @returns {Promise<boolean>}
     */
    register: function register(name, surname, email, password) {
        return auctionApi.registerUser(name, surname, email, password).then(function () {
            return true;
        }).catch(function (error) {
            return Promise.reject(error);
        });
    }
};

module.exports = logic;

/***/ }),

/***/ "./src/shared/routes/routes.js":
/*!*************************************!*\
  !*** ./src/shared/routes/routes.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _profile = __webpack_require__(/*! ../app/profile.jsx */ "./src/shared/app/profile.jsx");

var _profile2 = _interopRequireDefault(_profile);

var _landing = __webpack_require__(/*! ../app/landing.jsx */ "./src/shared/app/landing.jsx");

var _landing2 = _interopRequireDefault(_landing);

var _userProducts = __webpack_require__(/*! ../app/user-products.jsx */ "./src/shared/app/user-products.jsx");

var _userProducts2 = _interopRequireDefault(_userProducts);

var _product = __webpack_require__(/*! ../app/product.jsx */ "./src/shared/app/product.jsx");

var _product2 = _interopRequireDefault(_product);

var _login = __webpack_require__(/*! ../app/login.jsx */ "./src/shared/app/login.jsx");

var _login2 = _interopRequireDefault(_login);

var _register = __webpack_require__(/*! ../app/register.jsx */ "./src/shared/app/register.jsx");

var _register2 = _interopRequireDefault(_register);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    routes: [{
        path: '/',
        component: _landing2.default,
        exact: true
    }, {
        path: '/product/:id',
        component: _product2.default,
        exact: true
    }, {
        path: '/login',
        component: _login2.default,
        exact: true
    }, {
        path: '/register',
        component: _register2.default,
        exact: true
    }],
    privateRoutes: [{
        path: '/profile',
        component: _profile2.default,
        exact: true
    }, {
        path: '/user/products',
        component: _userProducts2.default,
        exact: true
    }],
    redirects: [{
        from: '/people',
        to: '/profile',
        status: 301
    }]
};

/***/ }),

/***/ "api":
/*!**********************!*\
  !*** external "api" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("api");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-nouislider":
/*!***********************************!*\
  !*** external "react-nouislider" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-nouislider");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map