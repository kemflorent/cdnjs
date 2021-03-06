(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-material"] = factory();
	else
		root["vue-material"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _componentsButtons = __webpack_require__(39);

	var _componentsButtons2 = _interopRequireDefault(_componentsButtons);

	var _componentsCards = __webpack_require__(56);

	var _componentsCards2 = _interopRequireDefault(_componentsCards);

	var _componentsChips = __webpack_require__(85);

	var _componentsChips2 = _interopRequireDefault(_componentsChips);

	var _componentsCommons = __webpack_require__(89);

	var _componentsCommons2 = _interopRequireDefault(_componentsCommons);

	var _componentsCrumb = __webpack_require__(93);

	var _componentsCrumb2 = _interopRequireDefault(_componentsCrumb);

	var _componentsFooter = __webpack_require__(97);

	var _componentsFooter2 = _interopRequireDefault(_componentsFooter);

	var _componentsForms = __webpack_require__(110);

	var _componentsForms2 = _interopRequireDefault(_componentsForms);

	var _componentsLists = __webpack_require__(139);

	var _componentsLists2 = _interopRequireDefault(_componentsLists);

	var _componentsNavbar = __webpack_require__(151);

	var _componentsNavbar2 = _interopRequireDefault(_componentsNavbar);

	var _componentsPreloader = __webpack_require__(160);

	var _componentsPreloader2 = _interopRequireDefault(_componentsPreloader);

	var _componentsSidenav = __webpack_require__(170);

	var _componentsSidenav2 = _interopRequireDefault(_componentsSidenav);

	/*
	import pagination from './components/pagination/';
	*/

	var _directives = __webpack_require__(174);

	var _directives2 = _interopRequireDefault(_directives);

	var _nodeWaves = __webpack_require__(176);

	var _nodeWaves2 = _interopRequireDefault(_nodeWaves);

	exports['default'] = {
	    components: {
	        buttons: _componentsButtons2['default'],
	        cards: _componentsCards2['default'],
	        chips: _componentsChips2['default'],
	        commons: _componentsCommons2['default'],
	        crumb: _componentsCrumb2['default'],
	        footer: _componentsFooter2['default'],
	        forms: _componentsForms2['default'],
	        navbar: _componentsNavbar2['default'],
	        sidenav: _componentsSidenav2['default'],
	        preloader: _componentsPreloader2['default'],
	        lists: _componentsLists2['default']
	    },
	    waves: _nodeWaves2['default'],
	    /*    
	        pagination,
	        */
	    directives: _directives2['default'],
	    _registered: [],
	    regAll: function regAll(Vue) {
	        for (var comName in this.components) {
	            if (this._registered.indexOf(comName) === -1) {
	                this._regComponent(Vue, comName);
	            }
	        }
	        this.regAllDirectives(Vue);
	    },
	    reg: function reg(Vue, names) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = names[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var _name = _step.value;

	                _name = _name.toLowerCase();
	                if (_name in this.components && this._registered.indexOf(_name) === -1) {
	                    this._regComponent(Vue, _name);
	                }
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator['return']) {
	                    _iterator['return']();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }

	        this.regAllDirectives(Vue);
	    },
	    regAllDirectives: function regAllDirectives(Vue) {
	        for (var dirName in this.directives) {
	            if (this._registered.indexOf(dirName) === -1) {
	                this._regDirective(Vue, dirName);
	            }
	        }
	    },
	    getConstructor: function getConstructor(name) {
	        var result = undefined;
	        if (typeof name === "string") {}
	    },
	    //mdXxYy=>md-xx-yy
	    _camel2kebab: function _camel2kebab(str) {
	        var reg = /(?=[A-Z])/g;
	        return str.replace(reg, '-').toLowerCase();
	    },
	    _regComponent: function _regComponent(Vue, name) {
	        var com = this.components[name];
	        for (var item in com) {
	            var regName = this._camel2kebab(item);
	            Vue.component(regName, com[item]);
	        }
	        this._registered.push(name);
	    },
	    _regDirective: function _regDirective(Vue, name) {
	        var obj = this.directives[name];
	        name = this._camel2kebab(name);
	        Vue.directive(name, obj);
	        this._registered.push(name);
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _mdBtnVue = __webpack_require__(40);

	var _mdBtnVue2 = _interopRequireDefault(_mdBtnVue);

	var _mdFabVue = __webpack_require__(47);

	var _mdFabVue2 = _interopRequireDefault(_mdFabVue);

	exports['default'] = {
	    mdBtn: _mdBtnVue2['default'],
	    mdFab: _mdFabVue2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(41)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(46)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/material/vue-material/node_modules/vue-loader/node_modules/vue-hot-reload-api/index.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-btn.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-btn.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-btn.vue"], function () {
	var newOptions = require("-!babel!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-btn.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-btn.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _mixinsCommonMixinJs = __webpack_require__(42);

	exports['default'] = {
	    mixins: [_mixinsCommonMixinJs.hasIcon],
	    props: {
	        large: Boolean,
	        disabled: Boolean,
	        type: String
	    },
	    computed: {
	        btnType: function btnType() {
	            switch (this.type) {
	                case 'floating':
	                    return 'btn-floating';
	                case 'flat':
	                    return 'btn-flat';
	                default:
	                    return 'btn';
	            }
	        },
	        showIcon: function showIcon() {
	            return this.type !== 'flat' && this.iconText;
	        }
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _commonsMdIconVue = __webpack_require__(43);

	var _commonsMdIconVue2 = _interopRequireDefault(_commonsMdIconVue);

	exports["default"] = {
	    hasIcon: {
	        props: {
	            iconText: String,
	            iconPos: String
	        },
	        components: {
	            "md-icon": _commonsMdIconVue2["default"]
	        }
	    },
	    hasImg: {
	        props: {
	            imgSrc: String,
	            imgAlt: String
	        }
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(44)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(45)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/material/vue-material/node_modules/vue-loader/node_modules/vue-hot-reload-api/index.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-icon.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-icon.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-icon.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-icon.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-icon.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 44 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = {
	    props: {
	        text: String,
	        pos: String
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = "<i :class=\"['material-icons',pos]\">{{text}}</i>";

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "<a :class=\"[btnType,disabled?'disabled':'',large?'btn-large':'']\">\n       <slot name=\"icon\">\n            <md-icon   v-if=\"showIcon\"  :text=\"iconText\" :pos=\"iconPos\"></md-icon>\n       </slot> \n        <slot>\n        </slot>\n    </a>";

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(48)
	module.exports = __webpack_require__(52)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(55)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/material/vue-material/node_modules/vue-loader/node_modules/vue-hot-reload-api/index.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-fab.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-fab.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-fab.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-fab.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-fab.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(49);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(51)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./md-fab.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./md-fab.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(50)();
	// imports


	// module
	exports.push([module.id, ".fixed-action-btn.active>ul a {\n    opacity: 1;\n}", ""]);

	// exports


/***/ },
/* 50 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(53)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _utilsWrapChildrenJs = __webpack_require__(54);

	var _utilsWrapChildrenJs2 = _interopRequireDefault(_utilsWrapChildrenJs);

	exports['default'] = {
	    data: function data() {
	        return {
	            showSubs: false,
	            mainBtn: null
	        };
	    },
	    props: {
	        clickOnly: Boolean,
	        horizontal: Boolean
	    },
	    methods: {
	        toggleSubs: function toggleSubs() {
	            this.showSubs = !this.showSubs;
	        },
	        bindEvent: function bindEvent(isClick) {
	            this.showSubs = false;
	            this.unbindEvent();
	            if (isClick) {
	                this.mainBtn.addEventListener('click', this.toggleSubs);
	            } else {
	                this.$els.container.addEventListener('mouseover', this.toggleSubs);
	                this.$els.container.addEventListener('mouseout', this.toggleSubs);
	            }
	        },
	        unbindEvent: function unbindEvent() {
	            this.mainBtn.removeEventListener('click', this.toggleSubs);
	            this.$els.container.removeEventListener('mouseover', this.toggleSubs);
	            this.$els.container.removeEventListener('mouseout', this.toggleSubs);
	        }
	    },
	    watch: {
	        clickOnly: function clickOnly(v) {
	            this.bindEvent(v);
	        }
	    },
	    ready: function ready() {
	        var ul = this.$els.ul;
	        this.mainBtn = ul.children[0];
	        this.$el.insertBefore(this.mainBtn, ul);
	        (0, _utilsWrapChildrenJs2['default'])(ul, "li");

	        this.bindEvent(this.clickOnly);
	    },
	    beforeDestroy: function beforeDestroy() {
	        this.unbindEvent();
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 53 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 54 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports["default"] = function (parent, tag) {
	    var len = parent.children.length;
	    for (var i = 0; i < len; i++) {
	        var wrapper = document.createElement(tag);
	        wrapper.appendChild(parent.children[0]);
	        parent.appendChild(wrapper);
	    }
	};

	module.exports = exports["default"];

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = "<div v-el:container :class=\"{'fixed-action-btn':true,'active':showSubs,'horizontal':horizontal}\">\n    <ul v-el:ul v-show=\"showSubs\">\n        <slot></slot>\n    </ul>\n</div>";

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _mdBasicCardVue = __webpack_require__(57);

	var _mdBasicCardVue2 = _interopRequireDefault(_mdBasicCardVue);

	var _mdCardVue = __webpack_require__(73);

	var _mdCardVue2 = _interopRequireDefault(_mdCardVue);

	var _mdCardActionVue = __webpack_require__(60);

	var _mdCardActionVue2 = _interopRequireDefault(_mdCardActionVue);

	var _mdCardContentVue = __webpack_require__(63);

	var _mdCardContentVue2 = _interopRequireDefault(_mdCardContentVue);

	var _mdCardImgVue = __webpack_require__(66);

	var _mdCardImgVue2 = _interopRequireDefault(_mdCardImgVue);

	var _mdCardRevealVue = __webpack_require__(76);

	var _mdCardRevealVue2 = _interopRequireDefault(_mdCardRevealVue);

	var _mdCardTitleVue = __webpack_require__(69);

	var _mdCardTitleVue2 = _interopRequireDefault(_mdCardTitleVue);

	var _mdImageCardVue = __webpack_require__(79);

	var _mdImageCardVue2 = _interopRequireDefault(_mdImageCardVue);

	var _mdPanelCardVue = __webpack_require__(82);

	var _mdPanelCardVue2 = _interopRequireDefault(_mdPanelCardVue);

	exports['default'] = {
	    mdBasicCard: _mdBasicCardVue2['default'],
	    mdCard: _mdCardVue2['default'],
	    mdCardAction: _mdCardActionVue2['default'],
	    mdCardContent: _mdCardContentVue2['default'],
	    mdCardImg: _mdCardImgVue2['default'],
	    mdCardReveal: _mdCardRevealVue2['default'],
	    mdCardTitle: _mdCardTitleVue2['default'],
	    mdImageCard: _mdImageCardVue2['default'],
	    mdPanelCard: _mdPanelCardVue2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(58)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(72)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/material/vue-material/node_modules/vue-loader/node_modules/vue-hot-reload-api/index.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-basic-card.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-basic-card.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-basic-card.vue"], function () {
	var newOptions = require("-!babel!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-basic-card.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-basic-card.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _mixinsCardMixinJs = __webpack_require__(59);

	exports['default'] = {
	    mixins: [_mixinsCardMixinJs.basic]
	};
	module.exports = exports['default'];

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _cardsMdCardActionVue = __webpack_require__(60);

	var _cardsMdCardActionVue2 = _interopRequireDefault(_cardsMdCardActionVue);

	var _cardsMdCardContentVue = __webpack_require__(63);

	var _cardsMdCardContentVue2 = _interopRequireDefault(_cardsMdCardContentVue);

	var _cardsMdCardImgVue = __webpack_require__(66);

	var _cardsMdCardImgVue2 = _interopRequireDefault(_cardsMdCardImgVue);

	var _cardsMdCardTitleVue = __webpack_require__(69);

	var _cardsMdCardTitleVue2 = _interopRequireDefault(_cardsMdCardTitleVue);

	exports['default'] = {

	    basic: {
	        props: {
	            options: Object,
	            reveal: Boolean
	        },
	        components: {
	            'md-card-action': _cardsMdCardActionVue2['default'],
	            'md-card-content': _cardsMdCardContentVue2['default'],
	            'md-card-title': _cardsMdCardTitleVue2['default'],
	            'md-card-img': _cardsMdCardImgVue2['default']
	        }
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(61)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(62)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/material/vue-material/node_modules/vue-loader/node_modules/vue-hot-reload-api/index.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-card-action.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-card-action.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-card-action.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-card-action.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-card-action.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 61 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = {
	    props: {
	        links: Array
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = "<div class=\"card-action\">\n    <slot>\n        <a v-for=\"link in links\"  :href=\"link.href\">{{link.text}}</a>\n    </slot>\n</div>";

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(64)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(65)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/material/vue-material/node_modules/vue-loader/node_modules/vue-hot-reload-api/index.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-card-content.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-card-content.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-card-content.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-card-content.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-card-content.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 64 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {};
	module.exports = exports["default"];

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = "<div class=\"card-content\">  \n    <slot></slot>\n</div>";

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(67)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(68)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/material/vue-material/node_modules/vue-loader/node_modules/vue-hot-reload-api/index.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-card-img.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-card-img.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-card-img.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-card-img.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-card-img.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _mixinsCommonMixinJs = __webpack_require__(42);

	exports['default'] = {
	    props: {
	        reveal: Boolean,
	        src: String
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = "<div class=\"card-image\">\n    <img :src=\"src\" :class=\"{'activator':reveal}\">\n    <slot></slot>      \n</div>";

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(70)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(71)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/material/vue-material/node_modules/vue-loader/node_modules/vue-hot-reload-api/index.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-card-title.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-card-title.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-card-title.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-card-title.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-card-title.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _mixinsCommonMixinJs = __webpack_require__(42);

	exports['default'] = {
	    mixins: [_mixinsCommonMixinJs.hasIcon],
	    props: {
	        reveal: Boolean
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = "<span :class=\"{'card-title':true,'activator':reveal}\">\n    <slot></slot>\n    <md-icon v-if=\"reveal\" :text=\"\" pos=\"right\"></md-icon>\n</span>";

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = "<div class=\"card\">\n        <md-card-content>\n            <md-card-title :class=\"options.title.class\" :reveal=\"reveal\">\n            {{options.title.text}}       \n            </md-card-title>\n            <p>{{options.content.text}}</p>\n        </md-card-content>\n        <md-card-action v-if=\"! reveal\" :links=\"options.links\" >\n            <slot name=\"links\"></slot>\n        </md-card-action>\n        <slot name=\"reveal\"></slot>    \n    </div>";

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(74)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(75)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/material/vue-material/node_modules/vue-loader/node_modules/vue-hot-reload-api/index.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-card.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-card.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-card.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-card.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-card.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 74 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = {
	    props: {
	        panel: Boolean
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"panel?'card-panel':'card'\">\n        <slot></slot>\n    </div>";

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(77)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(78)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/material/vue-material/node_modules/vue-loader/node_modules/vue-hot-reload-api/index.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-card-reveal.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-card-reveal.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-card-reveal.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-card-reveal.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-card-reveal.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 77 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {};
	module.exports = exports["default"];

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = "<div class=\"card-reveal\">\n  <slot></slot>\n</div>";

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(80)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(81)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/material/vue-material/node_modules/vue-loader/node_modules/vue-hot-reload-api/index.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-image-card.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-image-card.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-image-card.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-image-card.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-image-card.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _mixinsCardMixinJs = __webpack_require__(59);

	exports['default'] = {
	    mixins: [_mixinsCardMixinJs.basic]
	};
	module.exports = exports['default'];

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = "<div class=\"card\">\n    <md-card-img v-if=\"options.imgSrc\" :src=\"options.imgSrc\"  :reveal=\"reveal\">\n        <md-card-title v-if=\"! reveal\" :class=\"options.title.class\">\n            {{options.title.text}}\n        </md-card-title>\n    </md-card-img>\n    <md-card-content  :class=\"options.content.class\">\n        <md-card-title v-if=\"reveal\" :class=\"options.title.class\">\n            {{options.title.text}}\n        </md-card-title>\n        <p>{{options.content.text}}</p>\n    </md-card-content>\n    <md-card-action v-if=\"! reveal\":links=\"options.links\">\n        <slot name=\"links\"></slot>\n    </md-card-action> \n    <slot name=\"reveal\"></slot>\n</div>";

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(83)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(84)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/material/vue-material/node_modules/vue-loader/node_modules/vue-hot-reload-api/index.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-panel-card.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-panel-card.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-panel-card.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-panel-card.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-panel-card.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 83 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = {
	    props: {
	        options: Object
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = "<div class=\"card-panel\">\n    <span :class=\"options.class\">\n        <slot>\n                {{options.text}}\n        </slot>\n    </span>\n</div>";

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _mdChipVue = __webpack_require__(86);

	var _mdChipVue2 = _interopRequireDefault(_mdChipVue);

	exports['default'] = {
	    mdChip: _mdChipVue2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(87)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(88)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/material/vue-material/node_modules/vue-loader/node_modules/vue-hot-reload-api/index.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-chip.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-chip.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-chip.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-chip.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-chip.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _mixinsCommonMixinJs = __webpack_require__(42);

	exports['default'] = {
	    mixins: [_mixinsCommonMixinJs.hasImg],
	    props: {
	        tag: Boolean
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = "<div class=\"chip\">\n        <img v-if=\"imgSrc\" :src=\"imgSrc\" :alt=\"imgAlt\">\n        <slot></slot>\n        <i  v-if=\"tag\" class=\"material-icons\">close</i>\n    </div>";

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _mdBadgeVue = __webpack_require__(90);

	var _mdBadgeVue2 = _interopRequireDefault(_mdBadgeVue);

	var _mdIconVue = __webpack_require__(43);

	var _mdIconVue2 = _interopRequireDefault(_mdIconVue);

	exports['default'] = {
	    mdBadge: _mdBadgeVue2['default'],
	    mdIcon: _mdIconVue2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(91)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(92)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/material/vue-material/node_modules/vue-loader/node_modules/vue-hot-reload-api/index.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-badge.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-badge.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-badge.vue"], function () {
	var newOptions = require("-!babel!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-badge.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-badge.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 91 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = {
	    props: {
	        "new": Boolean
	    }
	};
	module.exports = exports["default"];
	// count:Number

/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports = "<span :class=\"['badge',new?'new':'']\"  >\n        <slot></slot>\n    </span>";

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _mdCrumbVue = __webpack_require__(94);

	var _mdCrumbVue2 = _interopRequireDefault(_mdCrumbVue);

	exports['default'] = {
	    mdCrumb: _mdCrumbVue2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(95)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(96)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/material/vue-material/node_modules/vue-loader/node_modules/vue-hot-reload-api/index.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-crumb.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-crumb.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-crumb.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-crumb.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-crumb.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 95 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = {
	    props: {
	        text: String
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = "<a class=\"breadcrumb\">\n    <slot>\n        {{text}}\n    </slot>\n</a>";

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _mdFooterVue = __webpack_require__(98);

	var _mdFooterVue2 = _interopRequireDefault(_mdFooterVue);

	var _mdFooterContentVue = __webpack_require__(101);

	var _mdFooterContentVue2 = _interopRequireDefault(_mdFooterContentVue);

	var _mdFooterCopyrightVue = __webpack_require__(104);

	var _mdFooterCopyrightVue2 = _interopRequireDefault(_mdFooterCopyrightVue);

	var _mdFooterLinksVue = __webpack_require__(107);

	var _mdFooterLinksVue2 = _interopRequireDefault(_mdFooterLinksVue);

	exports['default'] = {
	    mdFooter: _mdFooterVue2['default'],
	    mdFooterContent: _mdFooterContentVue2['default'],
	    mdFooterCopyright: _mdFooterCopyrightVue2['default'],
	    mdFooterLinks: _mdFooterLinksVue2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(99)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(100)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/material/vue-material/node_modules/vue-loader/node_modules/vue-hot-reload-api/index.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-footer.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-footer.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-footer.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-footer.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-footer.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 99 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {};
	module.exports = exports["default"];

/***/ },
/* 100 */
/***/ function(module, exports) {

	module.exports = "<footer class=\"page-footer\">\n        <div class=\"container\">\n            <div v-el:row class=\"row\">\n                <slot></slot>\n            </div>\n        </div>\n        <slot name=\"copyright\"></slot>\n    </footer>";

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(102)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(103)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/material/vue-material/node_modules/vue-loader/node_modules/vue-hot-reload-api/index.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-footer-content.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-footer-content.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-footer-content.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-footer-content.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-footer-content.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 102 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = {
	    props: {
	        options: Object
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = "<div>\n    <slot name=\"title\">\n        <h5 :class=\"[options.titleClass]\">{{options.title}}</h5>\n    </slot>\n    <slot name=\"text\">\n        <p  :class=\"[options.textClass]\">\n                {{options.text}}\n        </p>\n    </slot>\n    <slot></slot>\n</div>";

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(105)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(106)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/material/vue-material/node_modules/vue-loader/node_modules/vue-hot-reload-api/index.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-footer-copyright.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-footer-copyright.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-footer-copyright.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-footer-copyright.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-footer-copyright.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 105 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = {
	    props: {
	        options: Object
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 106 */
/***/ function(module, exports) {

	module.exports = "<div class=\"footer-copyright\">\n            <div class=\"container\">\n                <slot>\n                    <span :class=\"[textClass]\">{{options.text}}</span>\n                    <a :class=\"[options.link.linkClass,'right']\" :href=\"options.link.href\">{{options.link.text}}\n                    </a>\n                </slot>\n            </div>\n </div>";

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(108)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(109)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/material/vue-material/node_modules/vue-loader/node_modules/vue-hot-reload-api/index.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-footer-links.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-footer-links.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-footer-links.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-footer-links.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-footer-links.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 108 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	     value: true
	});
	exports["default"] = {
	     props: {
	          options: Object
	     }
	};
	module.exports = exports["default"];

/***/ },
/* 109 */
/***/ function(module, exports) {

	module.exports = "<div>\n    <slot name=\"title\">\n      <h5 :class=\"[options.titleClass]\">{{options.title}}</h5>\n    </slot>\n    <slot name=\"links\">\n      <ul>\n          <li v-for=\"link in options.links\">\n              <a :href=\"link.href\"  :class=\"[options.linkClass]\">\n                  {{link.text}}\n              </a>\n          </li>\n      </ul>\n    </slot>\n</div>";

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _mdCheckboxVue = __webpack_require__(111);

	var _mdCheckboxVue2 = _interopRequireDefault(_mdCheckboxVue);

	var _mdFileVue = __webpack_require__(115);

	var _mdFileVue2 = _interopRequireDefault(_mdFileVue);

	var _mdInputVue = __webpack_require__(118);

	var _mdInputVue2 = _interopRequireDefault(_mdInputVue);

	var _mdRadioVue = __webpack_require__(121);

	var _mdRadioVue2 = _interopRequireDefault(_mdRadioVue);

	var _mdRangeVue = __webpack_require__(124);

	var _mdRangeVue2 = _interopRequireDefault(_mdRangeVue);

	var _mdSelectVue = __webpack_require__(127);

	var _mdSelectVue2 = _interopRequireDefault(_mdSelectVue);

	var _mdSubmitVue = __webpack_require__(130);

	var _mdSubmitVue2 = _interopRequireDefault(_mdSubmitVue);

	var _mdSwitchVue = __webpack_require__(133);

	var _mdSwitchVue2 = _interopRequireDefault(_mdSwitchVue);

	var _mdTextareaVue = __webpack_require__(136);

	var _mdTextareaVue2 = _interopRequireDefault(_mdTextareaVue);

	exports['default'] = {
	    mdCheckbox: _mdCheckboxVue2['default'],
	    mdFile: _mdFileVue2['default'],
	    mdInput: _mdInputVue2['default'],
	    mdRadio: _mdRadioVue2['default'],
	    mdRange: _mdRangeVue2['default'],
	    mdSelect: _mdSelectVue2['default'],
	    mdSubmit: _mdSubmitVue2['default'],
	    mdSwitch: _mdSwitchVue2['default'],
	    mdTextarea: _mdTextareaVue2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(112)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(114)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/material/vue-material/node_modules/vue-loader/node_modules/vue-hot-reload-api/index.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-checkbox.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-checkbox.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-checkbox.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-checkbox.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-checkbox.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _mixinsFormMixinJs = __webpack_require__(113);

	exports['default'] = {
	    mixins: [_mixinsFormMixinJs.basicAttr, _mixinsFormMixinJs.status],
	    props: {
	        filled: Boolean
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _commonsIndexJs = __webpack_require__(89);

	var basicAttr = {
	    props: {
	        id: {
	            type: String,
	            'default': ''
	        },
	        name: {
	            type: String,
	            'default': ''
	        },
	        placeholder: {
	            type: String,
	            'default': ''
	        },
	        value: {
	            type: String,
	            'default': ''
	        }
	    }
	};
	var status = {
	    props: {
	        checked: Boolean,
	        disabled: Boolean,
	        required: Boolean
	    }
	};
	var formIcon = {
	    props: {
	        iconText: String,
	        iconPos: {
	            type: String,
	            'default': "prefix"
	        }
	    },
	    components: {
	        'md-icon': _commonsIndexJs.mdIcon
	    }
	};
	var actLabel = {
	    computed: {
	        labelActive: function labelActive() {
	            console.log("msg: " + this.mdValue);
	            return this.mdValue || this.placeholder || this.focus;
	        }
	    }
	};
	exports['default'] = {
	    basicAttr: basicAttr,
	    formIcon: formIcon,
	    status: status,
	    actLabel: actLabel
	};
	module.exports = exports['default'];

/***/ },
/* 114 */
/***/ function(module, exports) {

	module.exports = "<input type=\"checkbox\" :id=\"id\" :class=\"{'filled-in':filled}\" :name=\"name\" :checked=\"checked\" :disabled=\"disabled\" />\n      <label :for=\"id\"><slot></slot></label>";

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(116)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(117)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/material/vue-material/node_modules/vue-loader/node_modules/vue-hot-reload-api/index.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-file.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-file.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-file.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-file.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-file.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _mixinsFormMixinJs = __webpack_require__(113);

	exports["default"] = {
	    mixins: [_mixinsFormMixinJs.basicAttr],
	    porps: {
	        multiple: Boolean,
	        btnText: {
	            type: String,
	            "default": "File"
	        }
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 117 */
/***/ function(module, exports) {

	module.exports = "<div class=\"file-field input-field\">\n    <div class=\"btn\">\n        <span>{{btnText}}</span>\n        <input  type=\"file\" :multiple=\"multiple\">\n    </div>\n    <div class=\"file-path-wrapper\">\n        <input class=\"file-path validate\" type=\"text\">\n    </div>\n</div>";

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(119)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(120)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/material/vue-material/node_modules/vue-loader/node_modules/vue-hot-reload-api/index.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-input.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-input.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-input.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-input.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-input.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _mixinsFormMixinJs = __webpack_require__(113);

	exports["default"] = {
	    mixins: [_mixinsFormMixinJs.basicAttr, _mixinsFormMixinJs.formIcon, _mixinsFormMixinJs.status, _mixinsFormMixinJs.actLabel],
	    data: function data() {
	        return {
	            focus: false
	        };
	    },
	    props: {
	        type: {
	            type: String,
	            "default": "text"
	        },
	        validate: Boolean
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 120 */
/***/ function(module, exports) {

	module.exports = "<div class=\"input-field\">\n        <md-icon v-if=\"iconText\" :class=\"{'active':focus}\" :text=\"iconText\" :pos=\"iconPos\"></md-icon>\n        <input v-model=\"mdValue\" :id=\"id\" v-el:input :name=\"name\" :value=\"value\" :placeholder=\"placeholder\" :type=\"type\" :disabled=\"disabled\" :required=\"required\" @focus=\"focus=true\" @blur=\"focus=false\" lazy>\n        <label :for=\"id\" :class=\"{'active':labelActive}\"><slot></slot></label>\n</div>";

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(122)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(123)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/material/vue-material/node_modules/vue-loader/node_modules/vue-hot-reload-api/index.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-radio.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-radio.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-radio.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-radio.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-radio.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _mixinsFormMixinJs = __webpack_require__(113);

	exports['default'] = {
	    mixins: [_mixinsFormMixinJs.basicAttr, _mixinsFormMixinJs.status],
	    props: {
	        gap: Boolean
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 123 */
/***/ function(module, exports) {

	module.exports = "<input :class=\"{'with-gap':gap}\" v-model=\"mdValue\" :checked=\"checked\" :value=\"value\" :name=\"name\" type=\"radio\" :id=\"id\" :disabled=\"disabled\" />\n    <label :for=\"id\"><slot></slot></label>";

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(125)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(126)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/material/vue-material/node_modules/vue-loader/node_modules/vue-hot-reload-api/index.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-range.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-range.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-range.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-range.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-range.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _mixinsFormMixinJs = __webpack_require__(113);

	exports['default'] = {
	    mixins: [_mixinsFormMixinJs.basicAttr, _mixinsFormMixinJs.status],
	    data: function data() {
	        return {
	            showThumb: false,
	            thumb: {}
	        };
	    },
	    props: {
	        min: {
	            type: Number,
	            'default': 0
	        },
	        max: {
	            type: Number,
	            'default': 0
	        },
	        step: {
	            type: Number,
	            'default': 1
	        },
	        value: Number
	    },
	    methods: {
	        mouseEvent: function mouseEvent() {
	            this.showThumb = !this.showThumb;
	        }
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 126 */
/***/ function(module, exports) {

	module.exports = "<p class=\"range-field\">\n    <input  @mouseup=\"mouseEvent\" @mousedown=\"mouseEvent\" @type=\"range\" :step=\"step\" :value=\"value\" :min=\"min\" :max=\"max\" v-model=\"rangeValue\"/>\n    <span  v-show=\"showThumb\" class=\"thumb\" :style=\"thumbStyle\" style=\"left: 289.344px; height: 0px; width: 0px; top: 10px; margin-left: -6px;\"><span class=\"value\">{{rangeValue}}</span></span>\n</p>";

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(128)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(129)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/material/vue-material/node_modules/vue-loader/node_modules/vue-hot-reload-api/index.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-select.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-select.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-select.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-select.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-select.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _mixinsFormMixinJs = __webpack_require__(113);

	exports["default"] = {
	    mixins: [_mixinsFormMixinJs.basicAttr, _mixinsFormMixinJs.status],
	    props: {
	        defaultValue: {
	            type: String,
	            "default": ""
	        },
	        browserDefault: Boolean,
	        options: Object,
	        title: String
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 129 */
/***/ function(module, exports) {

	module.exports = "<select :id=\"id\" :class=\"{'browser-default':browserDefault}\" :required=\"required\" :disabled=\"disabled\">\n      <option :value=\"defaultValue\" disabled selected>{{title}}</option>\n      <option v-for=\"option in options\" :value=\"option.value\">{{option.text}}</option>\n    </select>\n    <label :for=\"id\">{{label}}</label>";

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(131)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(132)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/material/vue-material/node_modules/vue-loader/node_modules/vue-hot-reload-api/index.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-submit.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-submit.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-submit.vue"], function () {
	var newOptions = require("-!babel!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-submit.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-submit.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _mixinsFormMixinJs = __webpack_require__(113);

	exports["default"] = {
	    mixins: [_mixinsFormMixinJs.basicAttr, _mixinsFormMixinJs.status],
	    props: {
	        btnText: {
	            type: String,
	            "default": "Submit"
	        }
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 132 */
/***/ function(module, exports) {

	module.exports = "<button class=\"btn\" type=\"submit\" :name=\"name\" :disabled=\"disabled\">{{btnText}}\n    <i class=\"material-icons right\">send</i>\n  </button>";

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(134)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(135)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/material/vue-material/node_modules/vue-loader/node_modules/vue-hot-reload-api/index.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-switch.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-switch.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-switch.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-switch.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-switch.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _mixinsFormMixinJs = __webpack_require__(113);

	exports['default'] = {
	    mixins: [_mixinsFormMixinJs.basicAttr, _mixinsFormMixinJs.status],
	    props: {
	        text: {
	            type: Array,
	            'default': function _default() {
	                return ['off', 'on'];
	            }
	        },
	        value: Array
	    },
	    created: function created() {
	        if (this.text.length < 2) {
	            this.text = ['off', 'on'];
	        }
	        if (!this.value) {
	            this.value = [false, true];
	        }
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 135 */
/***/ function(module, exports) {

	module.exports = "<div class=\"switch\">\n    <label>\n        <slot name=\"off\">\n        {{text[0]}}\n        </slot>\n        <input type=\"checkbox\" v-model=\"mdValue\" :false-value=\"value[0]\" :true-value=\"value[1]\" :checked=\"checked\" :disabled=\"disabled\" >\n        <span class=\"lever\"></span> \n        <slot name=\"on\">\n        {{text[1]}}\n        </slot>\n    </label>\n</div>";

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(137)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(138)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/material/vue-material/node_modules/vue-loader/node_modules/vue-hot-reload-api/index.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-textarea.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-textarea.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-textarea.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-textarea.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-textarea.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _mixinsFormMixinJs = __webpack_require__(113);

	exports['default'] = {
	    mixins: [_mixinsFormMixinJs.basicAttr, _mixinsFormMixinJs.formIcon, _mixinsFormMixinJs.status, _mixinsFormMixinJs.actLabel],
	    data: function data() {
	        return {
	            focus: false
	        };
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 138 */
/***/ function(module, exports) {

	module.exports = "<div class=\"input-field \">\n    <md-icon v-if=\"iconText\" :class=\"{'active':focus}\" :text=\"iconText\" :pos=\"iconPos\"></md-icon>\n    <textarea class=\"materialize-textarea\" v-model=\"mdValue\" :id=\"id\" v-el:input :name=\"name\" :value=\"value\" :placeholder=\"placeholder\" :disabled=\"disabled\" :required=\"required\" @focus=\"focus=true\" @blur=\"focus=false\" lazy></textarea>\n    <label :for=\"id\" :class=\"{'active':labelActive}\"><slot></slot></label>\n</div>";

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _mdListVue = __webpack_require__(140);

	var _mdListVue2 = _interopRequireDefault(_mdListVue);

	var _mdListAvatarVue = __webpack_require__(143);

	var _mdListAvatarVue2 = _interopRequireDefault(_mdListAvatarVue);

	var _mdListItemVue = __webpack_require__(145);

	var _mdListItemVue2 = _interopRequireDefault(_mdListItemVue);

	var _mdListSecVue = __webpack_require__(148);

	var _mdListSecVue2 = _interopRequireDefault(_mdListSecVue);

	exports['default'] = {
	    mdList: _mdListVue2['default'],
	    mdListAvatar: _mdListAvatarVue2['default'],
	    mdListItem: _mdListItemVue2['default'],
	    mdListSec: _mdListSecVue2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(141)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(142)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/material/vue-material/node_modules/vue-loader/node_modules/vue-hot-reload-api/index.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-list.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-list.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-list.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-list.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-list.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 141 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = {
	    data: function data() {
	        return {
	            withHeader: false,
	            isLinks: false
	        };
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 142 */
/***/ function(module, exports) {

	module.exports = "<div v-if=\"isLinks\" :class=\"{'collection':true,'with-header':withHeader}\">\n    <slot></slot>\n</div>\n<ul v-else  :class=\"{'collection':true,'with-header':withHeader}\">\n<slot></slot>\n</ul>";

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(144)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/material/vue-material/node_modules/vue-loader/node_modules/vue-hot-reload-api/index.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-list-avatar.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-list-avatar.vue"], function () {
	var newOptions = null
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-list-avatar.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 144 */
/***/ function(module, exports) {

	module.exports = "<li class=\"collection-item avatar\">\n    <slot></slot>\n</li>";

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(146)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(147)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/material/vue-material/node_modules/vue-loader/node_modules/vue-hot-reload-api/index.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-list-item.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-list-item.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-list-item.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-list-item.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-list-item.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 146 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = {
	    props: {
	        header: Boolean,
	        href: String
	    },
	    created: function created() {
	        var parent = this.$parent;
	        if (!parent.withHeader && this.header === true) {
	            parent.withHeader = true;
	        }
	        if (!parent.isLinks && this.href) {
	            parent.isLinks = true;
	        }
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 147 */
/***/ function(module, exports) {

	module.exports = "<a v-if=\"href\" :href=\"href\" :class=\"header?'collection-header':'collection-item'\">\n    <slot></slot>\n</a>\n<li v-else  :class=\"header?'collection-header':'collection-item'\">\n    <slot></slot>\n</li>";

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(149)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(150)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/material/vue-material/node_modules/vue-loader/node_modules/vue-hot-reload-api/index.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-list-sec.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-list-sec.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-list-sec.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-list-sec.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-list-sec.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 149 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = {};
	module.exports = exports["default"];

/***/ },
/* 150 */
/***/ function(module, exports) {

	module.exports = "<a class=\"secondary-content\">\n      <slot></slot>\n  </a>";

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _mdNavVue = __webpack_require__(152);

	var _mdNavVue2 = _interopRequireDefault(_mdNavVue);

	var _mdNavWrapperVue = __webpack_require__(156);

	var _mdNavWrapperVue2 = _interopRequireDefault(_mdNavWrapperVue);

	exports['default'] = {
	    mdNav: _mdNavVue2['default'],
	    mdNavWrapper: _mdNavWrapperVue2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(153)
	module.exports = __webpack_require__(155)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(159)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/material/vue-material/node_modules/vue-loader/node_modules/vue-hot-reload-api/index.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-nav.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-nav.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-nav.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-nav.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-nav.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(154);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(51)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./md-nav.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./md-nav.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(50)();
	// imports


	// module
	exports.push([module.id, "ul.side-nav.fixed li a {\n    font-size: 13px;\n    line-height: 44px;\n    height: 44px;\n}", ""]);

	// exports


/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(53)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _utilsWrapChildrenJs = __webpack_require__(54);

	var _utilsWrapChildrenJs2 = _interopRequireDefault(_utilsWrapChildrenJs);

	var _mdNavWrapperVue = __webpack_require__(156);

	var _mdNavWrapperVue2 = _interopRequireDefault(_mdNavWrapperVue);

	exports['default'] = {
	    props: {
	        'class': String,
	        logo: Object,
	        noLink: Boolean,
	        linksPos: String,
	        hide: {
	            type: String
	        }
	    },
	    components: {
	        'md-nav-wrapper': _mdNavWrapperVue2['default']
	    },
	    created: function created() {
	        //check logo
	        //logo.pos can be empty
	        var logo = this.logo;
	        logo.href = logo.href || "";
	    },
	    ready: function ready() {
	        if (!this.noLink) {
	            var ul = this.$els.ul;
	            (0, _utilsWrapChildrenJs2['default'])(ul, "li");
	        }
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(157)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(158)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/material/vue-material/node_modules/vue-loader/node_modules/vue-hot-reload-api/index.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-nav-wrapper.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-nav-wrapper.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-nav-wrapper.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-nav-wrapper.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-nav-wrapper.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 157 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});
	exports["default"] = {};
	module.exports = exports["default"];

/***/ },
/* 158 */
/***/ function(module, exports) {

	module.exports = "<nav>\n    <div class=\"nav-wrapper\">\n        <slot></slot>\n    </div>\n</nav>";

/***/ },
/* 159 */
/***/ function(module, exports) {

	module.exports = "<md-nav-wrapper :class=\"class\">\n    <a :href=\"logo.href\" :class=\"['brand-logo',logo.pos]\">\n        <slot name=\"logo\">\n            {{logo.text}}\n        </slot>\n    </a>\n    <ul v-el:ul v-if=\"!noLink\" :class=\"[linksPos]\">\n        <slot></slot> \n    </ul>        \n</md-nav-wrapper>";

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _mdCircularVue = __webpack_require__(161);

	var _mdCircularVue2 = _interopRequireDefault(_mdCircularVue);

	var _mdCircularItemVue = __webpack_require__(163);

	var _mdCircularItemVue2 = _interopRequireDefault(_mdCircularItemVue);

	var _mdProgressVue = __webpack_require__(167);

	var _mdProgressVue2 = _interopRequireDefault(_mdProgressVue);

	exports['default'] = {
	    mdCircular: _mdCircularVue2['default'],
	    mdCircularItem: _mdCircularItemVue2['default'],
	    mdProgress: _mdProgressVue2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(162)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(166)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/material/vue-material/node_modules/vue-loader/node_modules/vue-hot-reload-api/index.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-circular.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-circular.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-circular.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-circular.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-circular.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(53)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _mdCircularItemVue = __webpack_require__(163);

	var _mdCircularItemVue2 = _interopRequireDefault(_mdCircularItemVue);

	exports['default'] = {
	    props: ['colors'],
	    created: function created() {
	        var colors = this.colors;
	        if (colors == undefined) {
	            this.colors = [""];
	            return;
	        }
	        if (typeof colors === "string") {
	            colors = colors.split(' ');
	        }
	        if (colors.length === 1) {
	            this.colors = ['spinner-' + colors[0] + '-only'];
	        } else {
	            this.colors = colors.map(function (v) {
	                return 'spinner-' + v;
	            });
	        }
	    },
	    components: {
	        'md-circular-item': _mdCircularItemVue2['default']
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(164)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(165)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/material/vue-material/node_modules/vue-loader/node_modules/vue-hot-reload-api/index.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-circular-item.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-circular-item.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-circular-item.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-circular-item.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-circular-item.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 164 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports["default"] = {
		props: {
			color: String
		}
	};
	module.exports = exports["default"];

/***/ },
/* 165 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"['spinner-layer',color]\">\n      <div class=\"circle-clipper left\">\n        <div class=\"circle\"></div>\n      </div>\n      <div class=\"gap-patch\">\n        <div class=\"circle\"></div>\n      </div>\n      <div class=\"circle-clipper right\">\n        <div class=\"circle\"></div>\n      </div>\n   </div>";

/***/ },
/* 166 */
/***/ function(module, exports) {

	module.exports = "<div class=\"preloader-wrapper active\">\n        <md-circular-item v-for=\"color in colors\" :color=\"color\"></md-circular-item>\n  </div>";

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(168)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(169)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/material/vue-material/node_modules/vue-loader/node_modules/vue-hot-reload-api/index.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-progress.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-progress.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-progress.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-progress.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-progress.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 168 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = {
	    props: {
	        barColor: String,
	        percent: Number
	    },
	    computed: {
	        widthValue: function widthValue() {
	            if (this.percent >= 0) {
	                return this.percent < 100 ? this.percent + "%" : "100%";
	            } else {
	                return "";
	            }
	        }
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 169 */
/***/ function(module, exports) {

	module.exports = "<div class=\"progress\">\n      <div :class=\"[widthValue?'determinate':'indeterminate',barColor]\" :style=\"{width:widthValue}\"></div>\n  </div>";

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _mdSidenavVue = __webpack_require__(171);

	var _mdSidenavVue2 = _interopRequireDefault(_mdSidenavVue);

	exports["default"] = {
	    mdSidenav: _mdSidenavVue2["default"]
	};
	module.exports = exports["default"];

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(172)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(173)
	if (false) {
	(function () {
	var hotAPI = require("/home/elviskang/Desktop/material/vue-material/node_modules/vue-loader/node_modules/vue-hot-reload-api/index.js")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-sidenav.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-sidenav.vue","-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-sidenav.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./md-sidenav.vue")
	var newTemplate = require("-!vue-html!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./md-sidenav.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 172 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = {
	    props: {
	        fixed: Boolean,
	        width: {
	            type: Number,
	            "default": 240
	        }
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 173 */
/***/ function(module, exports) {

	module.exports = "<ul  :class=\"['side-nav',fixed?'fixed':'']\" :style=\"{width:width+'px'}\">\n        <slot></slot>\n    </ul>";

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _mdModelJs = __webpack_require__(175);

	var _mdModelJs2 = _interopRequireDefault(_mdModelJs);

	exports['default'] = {
	    mdModel: _mdModelJs2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 175 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = {
	    twoWay: true,
	    bind: function bind() {
	        this.handler = (function () {
	            // console.log(this.el.__vue__.mdValue);
	            this.set(this.el.__vue__.mdValue);
	        }).bind(this);
	        this.el.addEventListener('change', this.handler);
	    },
	    unbind: function unbind() {
	        this.el.removeEventListener('change', this.handler);
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * Waves v0.7.4
	 * http://fian.my.id/Waves
	 *
	 * Copyright 2014 Alfiana E. Sibuea and other contributors
	 * Released under the MIT license
	 * https://github.com/fians/Waves/blob/master/LICENSE
	 */

	;(function(window, factory) {
	    'use strict';

	    // AMD. Register as an anonymous module.  Wrap in function so we have access
	    // to root via `this`.
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	            return factory.apply(window);
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }

	    // Node. Does not work with strict CommonJS, but only CommonJS-like
	    // environments that support module.exports, like Node.
	    else if (typeof exports === 'object') {
	        module.exports = factory.call(window);
	    }

	    // Browser globals.
	    else {
	        window.Waves = factory.call(window);
	    }
	})(typeof global === 'object' ? global : this, function() {
	    'use strict';

	    var Waves            = Waves || {};
	    var $$               = document.querySelectorAll.bind(document);
	    var toString         = Object.prototype.toString;
	    var isTouchAvailable = 'ontouchstart' in window;


	    // Find exact position of element
	    function isWindow(obj) {
	        return obj !== null && obj === obj.window;
	    }

	    function getWindow(elem) {
	        return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
	    }

	    function isObject(value) {
	        var type = typeof value;
	        return type === 'function' || type === 'object' && !!value;
	    }

	    function isDOMNode(obj) {
	        return isObject(obj) && obj.nodeType > 0;
	    }

	    function getWavesElements(nodes) {
	        var stringRepr = toString.call(nodes);

	        if (stringRepr === '[object String]') {
	            return $$(nodes);
	        } else if (isObject(nodes) && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(stringRepr) && nodes.hasOwnProperty('length')) {
	            return nodes;
	        } else if (isDOMNode(nodes)) {
	            return [nodes];
	        }

	        return [];
	    }

	    function offset(elem) {
	        var docElem, win,
	            box = { top: 0, left: 0 },
	            doc = elem && elem.ownerDocument;

	        docElem = doc.documentElement;

	        if (typeof elem.getBoundingClientRect !== typeof undefined) {
	            box = elem.getBoundingClientRect();
	        }
	        win = getWindow(doc);
	        return {
	            top: box.top + win.pageYOffset - docElem.clientTop,
	            left: box.left + win.pageXOffset - docElem.clientLeft
	        };
	    }

	    function convertStyle(styleObj) {
	        var style = '';

	        for (var prop in styleObj) {
	            if (styleObj.hasOwnProperty(prop)) {
	                style += (prop + ':' + styleObj[prop] + ';');
	            }
	        }

	        return style;
	    }

	    var Effect = {

	        // Effect duration
	        duration: 750,

	        // Effect delay (check for scroll before showing effect)
	        delay: 200,

	        show: function(e, element, velocity) {

	            // Disable right click
	            if (e.button === 2) {
	                return false;
	            }

	            element = element || this;

	            // Create ripple
	            var ripple = document.createElement('div');
	            ripple.className = 'waves-ripple waves-rippling';
	            element.appendChild(ripple);

	            // Get click coordinate and element width
	            var pos       = offset(element);
	            var relativeY = 0;
	            var relativeX = 0;
	            // Support for touch devices
	            if('touches' in e && e.touches.length) {
	                relativeY   = (e.touches[0].pageY - pos.top);
	                relativeX   = (e.touches[0].pageX - pos.left);
	            }
	            //Normal case
	            else {
	                relativeY   = (e.pageY - pos.top);
	                relativeX   = (e.pageX - pos.left);
	            }
	            // Support for synthetic events
	            relativeX = relativeX >= 0 ? relativeX : 0;
	            relativeY = relativeY >= 0 ? relativeY : 0;

	            var scale     = 'scale(' + ((element.clientWidth / 100) * 3) + ')';
	            var translate = 'translate(0,0)';

	            if (velocity) {
	                translate = 'translate(' + (velocity.x) + 'px, ' + (velocity.y) + 'px)';
	            }

	            // Attach data to element
	            ripple.setAttribute('data-hold', Date.now());
	            ripple.setAttribute('data-x', relativeX);
	            ripple.setAttribute('data-y', relativeY);
	            ripple.setAttribute('data-scale', scale);
	            ripple.setAttribute('data-translate', translate);

	            // Set ripple position
	            var rippleStyle = {
	                top: relativeY + 'px',
	                left: relativeX + 'px'
	            };

	            ripple.classList.add('waves-notransition');
	            ripple.setAttribute('style', convertStyle(rippleStyle));
	            ripple.classList.remove('waves-notransition');

	            // Scale the ripple
	            rippleStyle['-webkit-transform'] = scale + ' ' + translate;
	            rippleStyle['-moz-transform'] = scale + ' ' + translate;
	            rippleStyle['-ms-transform'] = scale + ' ' + translate;
	            rippleStyle['-o-transform'] = scale + ' ' + translate;
	            rippleStyle.transform = scale + ' ' + translate;
	            rippleStyle.opacity = '1';

	            var duration = e.type === 'mousemove' ? 2500 : Effect.duration;
	            rippleStyle['-webkit-transition-duration'] = duration + 'ms';
	            rippleStyle['-moz-transition-duration']    = duration + 'ms';
	            rippleStyle['-o-transition-duration']      = duration + 'ms';
	            rippleStyle['transition-duration']         = duration + 'ms';

	            ripple.setAttribute('style', convertStyle(rippleStyle));
	        },

	        hide: function(e, element) {
	            element = element || this;

	            var ripples = element.getElementsByClassName('waves-rippling');

	            for (var i = 0, len = ripples.length; i < len; i++) {
	                removeRipple(e, element, ripples[i]);
	            }
	        }
	    };

	    /**
	     * Collection of wrapper for HTML element that only have single tag
	     * like <input> and <img>
	     */
	    var TagWrapper = {

	        // Wrap <input> tag so it can perform the effect
	        input: function(element) {

	            var parent = element.parentNode;

	            // If input already have parent just pass through
	            if (parent.tagName.toLowerCase() === 'i' && parent.classList.contains('waves-effect')) {
	                return;
	            }

	            // Put element class and style to the specified parent
	            var wrapper       = document.createElement('i');
	            wrapper.className = element.className + ' waves-input-wrapper';
	            element.className = 'waves-button-input';

	            // Put element as child
	            parent.replaceChild(wrapper, element);
	            wrapper.appendChild(element);

	            // Apply element color and background color to wrapper
	            var elementStyle    = window.getComputedStyle(element, null);
	            var color           = elementStyle.color;
	            var backgroundColor = elementStyle.backgroundColor;

	            wrapper.setAttribute('style', 'color:' + color + ';background:' + backgroundColor);
	            element.setAttribute('style', 'background-color:rgba(0,0,0,0);');

	        },

	        // Wrap <img> tag so it can perform the effect
	        img: function(element) {

	            var parent = element.parentNode;

	            // If input already have parent just pass through
	            if (parent.tagName.toLowerCase() === 'i' && parent.classList.contains('waves-effect')) {
	                return;
	            }

	            // Put element as child
	            var wrapper  = document.createElement('i');
	            parent.replaceChild(wrapper, element);
	            wrapper.appendChild(element);

	        }
	    };

	    /**
	     * Hide the effect and remove the ripple. Must be
	     * a separate function to pass the JSLint...
	     */
	    function removeRipple(e, el, ripple) {

	        // Check if the ripple still exist
	        if (!ripple) {
	            return;
	        }

	        ripple.classList.remove('waves-rippling');

	        var relativeX = ripple.getAttribute('data-x');
	        var relativeY = ripple.getAttribute('data-y');
	        var scale     = ripple.getAttribute('data-scale');
	        var translate = ripple.getAttribute('data-translate');

	        // Get delay beetween mousedown and mouse leave
	        var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
	        var delay = 350 - diff;

	        if (delay < 0) {
	            delay = 0;
	        }

	        if (e.type === 'mousemove') {
	            delay = 150;
	        }

	        // Fade out ripple after delay
	        var duration = e.type === 'mousemove' ? 2500 : Effect.duration;

	        setTimeout(function() {

	            var style = {
	                top: relativeY + 'px',
	                left: relativeX + 'px',
	                opacity: '0',

	                // Duration
	                '-webkit-transition-duration': duration + 'ms',
	                '-moz-transition-duration': duration + 'ms',
	                '-o-transition-duration': duration + 'ms',
	                'transition-duration': duration + 'ms',
	                '-webkit-transform': scale + ' ' + translate,
	                '-moz-transform': scale + ' ' + translate,
	                '-ms-transform': scale + ' ' + translate,
	                '-o-transform': scale + ' ' + translate,
	                'transform': scale + ' ' + translate
	            };

	            ripple.setAttribute('style', convertStyle(style));

	            setTimeout(function() {
	                try {
	                    el.removeChild(ripple);
	                } catch (e) {
	                    return false;
	                }
	            }, duration);

	        }, delay);
	    }


	    /**
	     * Disable mousedown event for 500ms during and after touch
	     */
	    var TouchHandler = {

	        /* uses an integer rather than bool so there's no issues with
	         * needing to clear timeouts if another touch event occurred
	         * within the 500ms. Cannot mouseup between touchstart and
	         * touchend, nor in the 500ms after touchend. */
	        touches: 0,

	        allowEvent: function(e) {

	            var allow = true;

	            if (/^(mousedown|mousemove)$/.test(e.type) && TouchHandler.touches) {
	                allow = false;
	            }

	            return allow;
	        },
	        registerEvent: function(e) {
	            var eType = e.type;

	            if (eType === 'touchstart') {

	                TouchHandler.touches += 1; // push

	            } else if (/^(touchend|touchcancel)$/.test(eType)) {

	                setTimeout(function() {
	                    if (TouchHandler.touches) {
	                        TouchHandler.touches -= 1; // pop after 500ms
	                    }
	                }, 500);

	            }
	        }
	    };


	    /**
	     * Delegated click handler for .waves-effect element.
	     * returns null when .waves-effect element not in "click tree"
	     */
	    function getWavesEffectElement(e) {

	        if (TouchHandler.allowEvent(e) === false) {
	            return null;
	        }

	        var element = null;
	        var target = e.target || e.srcElement;

	        while (target.parentElement !== null) {
	            if (target.classList.contains('waves-effect') && (!(target instanceof SVGElement))) {
	                element = target;
	                break;
	            }
	            target = target.parentElement;
	        }

	        return element;
	    }

	    /**
	     * Bubble the click and show effect if .waves-effect elem was found
	     */
	    function showEffect(e) {

	        // Disable effect if element has "disabled" property on it
	        // In some cases, the event is not triggered by the current element
	        // if (e.target.getAttribute('disabled') !== null) {
	        //     return;
	        // }

	        var element = getWavesEffectElement(e);

	        if (element !== null) {

	            // Make it sure the element has either disabled property, disabled attribute or 'disabled' class
	            if (element.disabled || element.getAttribute('disabled') || element.classList.contains('disabled')) {
	                return;
	            }

	            TouchHandler.registerEvent(e);

	            if (e.type === 'touchstart' && Effect.delay) {

	                var hidden = false;

	                var timer = setTimeout(function () {
	                    timer = null;
	                    Effect.show(e, element);
	                }, Effect.delay);

	                var hideEffect = function(hideEvent) {

	                    // if touch hasn't moved, and effect not yet started: start effect now
	                    if (timer) {
	                        clearTimeout(timer);
	                        timer = null;
	                        Effect.show(e, element);
	                    }
	                    if (!hidden) {
	                        hidden = true;
	                        Effect.hide(hideEvent, element);
	                    }
	                };

	                var touchMove = function(moveEvent) {
	                    if (timer) {
	                        clearTimeout(timer);
	                        timer = null;
	                    }
	                    hideEffect(moveEvent);
	                };

	                element.addEventListener('touchmove', touchMove, false);
	                element.addEventListener('touchend', hideEffect, false);
	                element.addEventListener('touchcancel', hideEffect, false);

	            } else {

	                Effect.show(e, element);

	                if (isTouchAvailable) {
	                    element.addEventListener('touchend', Effect.hide, false);
	                    element.addEventListener('touchcancel', Effect.hide, false);
	                }

	                element.addEventListener('mouseup', Effect.hide, false);
	                element.addEventListener('mouseleave', Effect.hide, false);
	            }
	        }
	    }

	    Waves.init = function(options) {
	        var body = document.body;

	        options = options || {};

	        if ('duration' in options) {
	            Effect.duration = options.duration;
	        }

	        if ('delay' in options) {
	            Effect.delay = options.delay;
	        }

	        if (isTouchAvailable) {
	            body.addEventListener('touchstart', showEffect, false);
	            body.addEventListener('touchcancel', TouchHandler.registerEvent, false);
	            body.addEventListener('touchend', TouchHandler.registerEvent, false);
	        }

	        body.addEventListener('mousedown', showEffect, false);
	    };


	    /**
	     * Attach Waves to dynamically loaded inputs, or add .waves-effect and other
	     * waves classes to a set of elements. Set drag to true if the ripple mouseover
	     * or skimming effect should be applied to the elements.
	     */
	    Waves.attach = function(elements, classes) {

	        elements = getWavesElements(elements);
	        if (toString.call(classes) === '[object Array]') {
	            classes = classes.join(' ');
	        }

	        classes = classes ? ' ' + classes : '';

	        var element, tagName;

	        for (var i = 0, len = elements.length; i < len; i++) {

	            element = elements[i];
	            tagName = element.tagName.toLowerCase();

	            if (['input', 'img'].indexOf(tagName) !== -1) {
	                TagWrapper[tagName](element);
	                element = element.parentElement;
	            }

	            if (element.className.indexOf('waves-effect') === -1) {
	                element.className += ' waves-effect' + classes;
	            }
	        }
	    };


	    /**
	     * Cause a ripple to appear in an element via code.
	     */
	    Waves.ripple = function(elements, options) {
	        elements = getWavesElements(elements);
	        var elementsLen = elements.length;

	        options          = options || {};
	        options.wait     = options.wait || 0;
	        options.position = options.position || null; // default = centre of element


	        if (elementsLen) {
	            var element, pos, off, centre = {}, i = 0;
	            var mousedown = {
	                type: 'mousedown',
	                button: 1
	            };
	            var hideRipple = function(mouseup, element) {
	                return function() {
	                    Effect.hide(mouseup, element);
	                };
	            };

	            for (; i < elementsLen; i++) {
	                element = elements[i];
	                pos = options.position || {
	                    x: element.clientWidth / 2,
	                    y: element.clientHeight / 2
	                };

	                off      = offset(element);
	                centre.x = off.left + pos.x;
	                centre.y = off.top + pos.y;

	                mousedown.pageX = centre.x;
	                mousedown.pageY = centre.y;

	                Effect.show(mousedown, element);

	                if (options.wait >= 0 && options.wait !== null) {
	                    var mouseup = {
	                        type: 'mouseup',
	                        button: 1
	                    };

	                    setTimeout(hideRipple(mouseup, element), options.wait);
	                }
	            }
	        }
	    };

	    /**
	     * Remove all ripples from an element.
	     */
	    Waves.calm = function(elements) {
	        elements = getWavesElements(elements);
	        var mouseup = {
	            type: 'mouseup',
	            button: 1
	        };

	        for (var i = 0, len = elements.length; i < len; i++) {
	            Effect.hide(mouseup, elements[i]);
	        }
	    };

	    /**
	     * Deprecated API fallback
	     */
	    Waves.displayEffect = function(options) {
	        console.error('Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect');
	        Waves.init(options);
	    };

	    return Waves;
	});

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ])
});
;