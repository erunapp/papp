/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./album.js":
/*!******************!*\
  !*** ./album.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Album\": () => (/* binding */ Album)\n/* harmony export */ });\n/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context.js */ \"./context.js\");\n/* harmony import */ var _htm_album_htm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htm/album.htm */ \"./htm/album.htm\");\n\r\n\r\n\r\nclass Album extends _context_js__WEBPACK_IMPORTED_MODULE_0__.BaseElement {\r\n    #ShowList = this.#showList.bind(this);\r\n    #ItemSelect = this.#onClickItem.bind(this);\r\n    \r\n    constructor() {\r\n        super(_htm_album_htm__WEBPACK_IMPORTED_MODULE_1__);\r\n    }\r\n\r\n    connectedCallback() {\r\n        _context_js__WEBPACK_IMPORTED_MODULE_0__.Listener.listen('ShowList', this.#ShowList);\r\n    }\r\n\r\n    disconnectedCallback() {\r\n        _context_js__WEBPACK_IMPORTED_MODULE_0__.Listener.remove('ShowList', this.#ShowList);\r\n    }\r\n    \r\n    #showList(jso) {\r\n        const month = jso.month;\r\n        jso.list.forEach(date => {\r\n            let parent = this.$htm.addList(date.day);\r\n\r\n            for (let idx = 0; idx < date.thumbs.length; idx++) {\r\n                let name = `../res/thumbs/${month}/${date.thumbs[idx]}`;\r\n                let node = this.$htm.addItem(parent, idx, name);\r\n                node.addEventListener(\"click\", this.#ItemSelect);\r\n            }\r\n        });\r\n    }\r\n\r\n    #onClickItem(event) {\r\n        let name = this.$htm.getName(event.currentTarget);\r\n    }\r\n};\r\n\r\ncustomElements.define(\"wdp-album\", Album, {extends:'section'});\r\n\r\n/*\r\n{\r\n  \"month\": \"2023-02\",\r\n  \"list\": [\r\n    {\r\n      \"day\": \"01\",\r\n      \"thumbs\": [\r\n        \"2023-02-01-01.jpg.0.jpg\",\r\n        \"2023-02-01-02.jpg.0.jpg\",\r\n        \"2023-02-01-03.mp4.1.jpg\"\r\n      ]\r\n    },\r\n    {\r\n      \"day\": \"03\",\r\n      \"thumbs\": [\r\n        \"2023-02-03-01.jpg.0.jpg\",\r\n        \"2023-02-03-02.jpg.0.jpg\",\r\n        \"2023-02-03-03.3gp.1.jpg\"\r\n      ]\r\n    },\r\n    {\r\n      \"day\": \"05\",\r\n      \"thumbs\": [\r\n        \"2023-02-05-01.jpg.0.jpg\",\r\n        \"2023-02-05-02.jpg.0.jpg\",\r\n        \"2023-02-05-03.mp4.1.jpg\"\r\n      ]\r\n    }\r\n  ]\r\n}\r\n*/\n\n//# sourceURL=webpack:///./album.js?");

/***/ }),

/***/ "./context.js":
/*!********************!*\
  !*** ./context.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BaseElement\": () => (/* binding */ BaseElement),\n/* harmony export */   \"Channel\": () => (/* binding */ Channel),\n/* harmony export */   \"Listener\": () => (/* binding */ Listener),\n/* harmony export */   \"Provider\": () => (/* binding */ Provider)\n/* harmony export */ });\nif (!(window instanceof Window))\r\n    throw new Error('unable to locate window object');\r\n\r\nwindow.addEventListener(\"unhandledrejection\", event => {\r\n    console.error(event.reason);\r\n    event.preventDefault();\r\n}, false);\r\n\r\n//  -------------------------------------------------------------------------------------\r\nwindow._Channel$ = window._Channel$ ?? {\r\n    getChannel: () => {},\r\n};\r\n//  -------------------------------------------------------------------------------------\r\n\r\nconst Listener = (function() {\r\n    const topics = {}; // PageRequest, PathReturn, PathAppend\r\n\r\n    return {\r\n        notify: function(topic, ...data) {\r\n            topics[topic] ?.forEach(listener => listener(...data));\r\n        },\r\n        listen: function(topic, listener) {\r\n            let listeners = topics[topic];\r\n\r\n            if (!listeners) {\r\n                topics[topic] = [listener];\r\n            } else {\r\n                listeners.push(listener);\r\n            }\r\n        },\r\n        remove: function(topic, listener) {\r\n            let listeners = topics[topic] ?? [];\r\n\r\n            let pos = listeners.indexOf(listener);\r\n            if (pos >= 0) listeners.splice(pos, 1);\r\n            if (listeners.length == 0) delete topics[topic];\r\n        },\r\n    };\r\n})();\r\n\r\nconst Provider = (function() {\r\n    const topics = {}; // Store\r\n\r\n    return {\r\n        provide: function(topic, provider, force = false) {\r\n            if (!topics[topic] || force)\r\n                topics[topic] = provider;\r\n        },\r\n        request: function(topic, ...data) {\r\n            let provider = topics[topic];\r\n            return provider ? provider(...data) : null;\r\n        },\r\n        remove: function(topic, provider) {\r\n            if (provider == topics[topic])\r\n                delete topics[topic];\r\n        },\r\n    };\r\n})();\r\n\r\nclass Channel {\r\n    static async asOpen(name) {\r\n        const channel =  new Promise((resolve, reject) => {\r\n            let timer = setTimeout(() => {\r\n                window.removeEventListener('message', listener);\r\n                reject(new Error(\"Request Timeout\"));\r\n            }, 3000);\r\n\r\n            const listener = msg => {\r\n                if (msg.data != name) return;\r\n                clearTimeout(timer);\r\n                window.removeEventListener('message', listener);\r\n                resolve(new Channel(name, msg.ports[0]));\r\n            }\r\n            window.addEventListener('message', listener);\r\n            window._Channel$.getChannel(name);\r\n        });\r\n        \r\n        if (!channels.hasOwnProperty(name))\r\n            channels[name] = await channel.catch(reject => Promise.reject(reject));\r\n\r\n        return Promise.resolve(channels[name]);\r\n    };\r\n//  -------------------------------------------------------------------------------------\r\n    #name;\r\n    #port;\r\n    #rid = 0;\r\n\r\n    constructor(name, port) {\r\n        this.#name = name;\r\n        this.#port = port;\r\n        this.#port.onmessage = null;\r\n    }\r\n\r\n    asGet(cmd, ...args) {\r\n        return new Promise((resolve, reject) => {\r\n            const rid = ++this.#rid;\r\n\r\n            let timer = setTimeout(() => {\r\n                this.#port.removeEventListener(\"message\", listener);\r\n                reject(new Error(\"Request Timeout\"));\r\n            }, 3000);\r\n        \r\n            const listener = function(msg) {\r\n                const json = JSON.parse(msg.data);\r\n                if (rid != json.rid) return;\r\n\r\n                clearTimeout(timer);\r\n                this.#port.removeEventListener(\"message\", listener);\r\n                \r\n                if (json.hasOwnProperty(\"result\")) resolve(json.result);\r\n                if (json.hasOwnProperty(\"reject\")) reject(json.reject);\r\n                reject(new Error(\"Empty Response\"));\r\n            };\r\n            this.#port.addEventListener(\"message\", listener);\r\n            this.#port.postMessage(this.#toJson(rid, cmd, args));\r\n            this.#port.start();\r\n        });\r\n    }\r\n\r\n    #toJson(rid, cmd, args) {\r\n        let list = args.map(a => `\"${a}\"`).join();\r\n        return `{\"rid\":${rid},\"cmd\":\"${cmd}\",\"args\":[${list}]}`;\r\n    }\r\n\r\n    close() {\r\n        this.#port.close();\r\n        delete channels[this.#name];\r\n    }\r\n};\r\n\r\nclass BaseElement extends HTMLElement {\r\n    \r\n    constructor(shadowHTML) {\r\n        super();\r\n        \r\n\t\tthis.attachShadow({mode:\"open\"}).innerHTML = shadowHTML;\r\n\t\tthis.#activateScript(this.shadowRoot);\r\n    }\r\n\r\n    #activateScript(node) {\r\n        if (node.tagName === \"TEMPLATE\") {\r\n            this.#activateTemplateScripts(node.content);\r\n        } else\r\n        for (let child of node.children) {\r\n            if (child.tagName === \"SCRIPT\") {\r\n                new Function(child.textContent).call(node);\r\n            }\r\n            else this.#activateScript(child);\r\n        };\r\n    };\r\n\r\n    #activateTemplateScripts(node) {\r\n        for (let child of node.children) {\r\n            if (child.tagName === \"TEMPLATE\") {\r\n                this.#activateTemplateScripts(child.content);\r\n            } else\r\n            if (child.tagName === \"SCRIPT\") {\r\n                this.#refreshScript(node, child);\r\n            }\r\n            else this.#activateTemplateScripts(child);\r\n        };\r\n    };\r\n    \r\n    #refreshScript(node, child) {\r\n        let script = document.createElement('script');\r\n        for (let attr of child.attributes) {\r\n            script.setAttribute(attr.name, attr.value)\r\n        };\r\n        script.textContent = child.textContent;\r\n        node.replaceChild(script, child);\r\n    };\r\n};\r\n//  -------------------------------------------------------------------------------------\r\nconst channels = {};\r\nChannel.asyncOpen(\"JavaService\").then(() => {}).catch(() => {});\r\n//  -------------------------------------------------------------------------------------\n\n//# sourceURL=webpack:///./context.js?");

/***/ }),

/***/ "./filter.js":
/*!*******************!*\
  !*** ./filter.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Filter\": () => (/* binding */ Filter)\n/* harmony export */ });\n/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context.js */ \"./context.js\");\n/* harmony import */ var _htm_filter_htm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htm/filter.htm */ \"./htm/filter.htm\");\n\r\n\r\n\r\nclass Filter extends _context_js__WEBPACK_IMPORTED_MODULE_0__.BaseElement {\r\n    \r\n    constructor() {\r\n        super(_htm_filter_htm__WEBPACK_IMPORTED_MODULE_1__);\r\n    }\r\n\r\n    connectedCallback() {\r\n    }\r\n\r\n    disconnectedCallback() {\r\n    }\r\n    \r\n    #showList(days) {\r\n        days.forEach(val => {\r\n            let list = this.$htm.addList(val);\r\n        });\r\n    }\r\n};\r\n\r\ncustomElements.define(\"wdp-filter\", Filter, {extends:'section'});\n\n//# sourceURL=webpack:///./filter.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context.js */ \"./context.js\");\n/* harmony import */ var _picker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./picker.js */ \"./picker.js\");\n/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter.js */ \"./filter.js\");\n/* harmony import */ var _album_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./album.js */ \"./album.js\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./picker.js":
/*!*******************!*\
  !*** ./picker.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Picker\": () => (/* binding */ Picker)\n/* harmony export */ });\n/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context.js */ \"./context.js\");\n/* harmony import */ var _htm_picker_htm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htm/picker.htm */ \"./htm/picker.htm\");\n\r\n\r\n\r\nclass Picker extends _context_js__WEBPACK_IMPORTED_MODULE_0__.BaseElement {\r\n    \r\n    constructor() {\r\n        super(_htm_picker_htm__WEBPACK_IMPORTED_MODULE_1__);\r\n    }\r\n\r\n    connectedCallback() {\r\n    }\r\n\r\n    disconnectedCallback() {\r\n    }\r\n    \r\n    updateList(month) {\r\n        _context_js__WEBPACK_IMPORTED_MODULE_0__.Channel.asOpen(\"FileService\").then(channel => {\r\n            const file = `/thumbs/${month}.json`;\r\n            channel.asGet(\"getResFile\", file).then(text => {\r\n                if (text.length > 2)\r\n                    _context_js__WEBPACK_IMPORTED_MODULE_0__.Listener.notify('ShowList', JSON.parse(text));\r\n            });\r\n        }).catch(e => console.error(e.message));\r\n    }\r\n};\r\n\r\ncustomElements.define(\"wdp-picker\", Picker, {extends:'section'});\n\n//# sourceURL=webpack:///./picker.js?");

/***/ }),

/***/ "./htm/album.htm":
/*!***********************!*\
  !*** ./htm/album.htm ***!
  \***********************/
/***/ ((module) => {

eval("module.exports = \"<style>\\r\\n  .list {\\r\\n    display: flex;\\r\\n    flex-flow: row wrap;\\r\\n    justify-content: space-between;\\r\\n    padding: 3px;\\r\\n    background-color: var(--back-color);\\r\\n  }\\r\\n\\r\\n  .item {\\r\\n    flex: 0 0 auto;\\r\\n    margin: 2px;\\r\\n    width: 114px;     /* 3/2 [114 232 350] : 6/6 [104 220 336] */\\r\\n    height: 114px;\\r\\n    background-color: var(--item-color);\\r\\n  }\\r\\n\\r\\n  .date {\\r\\n    position: absolute;\\r\\n    top: 10px;\\r\\n    left: 10px;\\r\\n    opacity: 0.4;\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<div class=\\\"list\\\">\\r\\n  <span class=\\\"date\\\">#</span>\\r\\n</div>\\r\\n\\r\\n<div class=\\\"item\\\">\\r\\n    <img src=\\\"#\\\" alt=\\\"#\\\">\\r\\n</div>\\r\\n\\r\\n<script>\\r\\n  this.host.$htm = (function (root) {\\r\\n      const list = root.querySelector('.list').cloneNode(true);\\r\\n      const item = root.querySelector('.item').cloneNode(true);\\r\\n\\r\\n      return {\\r\\n          init: function() {\\r\\n            root.innerHTML = '';\\r\\n          },\\r\\n          addList: function(day) {\\r\\n              const node = list.cloneNode(true);\\r\\n              node.children[0].innerText = day;\\r\\n              root.append(node);\\r\\n              return node;\\r\\n          },\\r\\n          addItem: function(list, idx, src) {\\r\\n              const node = item.cloneNode(true);\\r\\n              node.children[0].alt = idx;\\r\\n              node.children[0].src = src;\\r\\n              list.append(node);\\r\\n              return node;\\r\\n          },\\r\\n          getName: node => node.children[0].src,\\r\\n      };\\r\\n  })(this);\\r\\n</script>\";\n\n//# sourceURL=webpack:///./htm/album.htm?");

/***/ }),

/***/ "./htm/filter.htm":
/*!************************!*\
  !*** ./htm/filter.htm ***!
  \************************/
/***/ ((module) => {

eval("module.exports = \"<style>\\r\\n    .item {\\r\\n      margin: 2px;\\r\\n      width: 114px;     /* 3/2 [114 232 350] : 6/6 [104 220 336] */\\r\\n      height: 114px;\\r\\n      border-radius: 0.4rem;\\r\\n      background-color: var(--item-color);\\r\\n    }\\r\\n</style>\\r\\n\\r\\n<span class=\\\"item\\\" id=\\\"pic\\\">사진</span>\\r\\n<span class=\\\"item\\\" id=\\\"vid\\\">영상</span>\\r\\n\\r\\n<script>\\r\\n  this.host.$htm = (function (root) {\\r\\n    let pic = root.getElementById('pic');\\r\\n    let vid = root.getElementById('vid');\\r\\n\\r\\n    pic.addEventListener(\\\"click\\\", e => {\\r\\n      \\r\\n    });\\r\\n\\r\\n    vid.addEventListener(\\\"click\\\", e => {\\r\\n\\r\\n    });\\r\\n  })(this);\\r\\n</script>\";\n\n//# sourceURL=webpack:///./htm/filter.htm?");

/***/ }),

/***/ "./htm/picker.htm":
/*!************************!*\
  !*** ./htm/picker.htm ***!
  \************************/
/***/ ((module) => {

eval("module.exports = \"<style>\\r\\n  #date {\\r\\n    border: none;\\r\\n    background-color: var(--body-color);\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<div>\\r\\n  <input type=\\\"month\\\" id=\\\"date\\\" min=\\\"1900-01\\\" size=\\\"7\\\" required>\\r\\n</div>\\r\\n\\r\\n<script>\\r\\n  this.host.$htm = (function (here) {\\r\\n    let cur = new Date().toISOString().substr(0, 7);\\r\\n    let mon = here.getElementById('date');\\r\\n\\r\\n    mon.addEventListener(\\\"change\\\", e => {\\r\\n      if (mon.value == cur) return;\\r\\n      cur = mon.value;\\r\\n      here.host.updateList(cur);\\r\\n    });\\r\\n    mon.value = cur;\\r\\n  })(this);\\r\\n</script>\";\n\n//# sourceURL=webpack:///./htm/picker.htm?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;