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

/***/ "./htm/signup.htm":
/*!************************!*\
  !*** ./htm/signup.htm ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = `<style>\r\n    h3 {\r\n        font-size: 20px;\r\n        text-align: center;\r\n    }\r\n\r\n    .signup_form {\r\n        width: 84vw;\r\n        max-width: 435px;\r\n        background: #fff;\r\n        border-radius: 6px;\r\n        padding: 41px 30px;\r\n        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\r\n    }\r\n\r\n    .signup_form form {\r\n        margin-top: 24px;\r\n        margin-bottom: 20px;\r\n    }\r\n\r\n    form .input_box {\r\n        position: relative;\r\n    }\r\n\r\n    form .input_box label {\r\n        display: block;\r\n        font-weight: 500;\r\n        margin-bottom: 8px;\r\n    }\r\n\r\n    form .input_box input {\r\n        width: -webkit-fill-available;\r\n        height: 56px;\r\n        border: 1px solid #DADAF2;\r\n        border-radius: 5px;\r\n        outline: none;\r\n        background: #F8F8FB;\r\n        font-size: 17px;\r\n        padding: 0 20px;\r\n        margin-bottom: 25px;\r\n        transition: 0.2s ease;\r\n    }\r\n\r\n    form .input_box input:focus {\r\n        border-color: #626cd6;\r\n    }\r\n\r\n    .signup_form button {\r\n        width: 100%;\r\n        height: 56px;\r\n        border-radius: 5px;\r\n        border: none;\r\n        outline: none;\r\n        background: #626CD6;\r\n        color: #fff;\r\n        font-size: 18px;\r\n        font-weight: 500;\r\n        text-transform: uppercase;\r\n        cursor: pointer;\r\n        transition: 0.3s ease;\r\n    }\r\n\r\n    .signup_form button:hover {\r\n        background: #4954d0;\r\n    }\r\n</style>\r\n\r\n\r\n<div class=\"signup_form\">\r\n    <h3>회 원 확 인</h3>\r\n\r\n    <form action=\"#\">\r\n        <div class=\"input_box\">\r\n            <label for=\"hostID\">앨 범 이 름</label>\r\n            <input type=\"text\" id=\"hostID\" name=\"hostID\" readonly />\r\n        </div>\r\n\r\n        <div class=\"input_box\">\r\n            <label for=\"cellNo\">회 원 번 호</label>\r\n            <input type=\"text\" id=\"cellNo\" name=\"cellNo\" />\r\n        </div>\r\n    </form>\r\n\r\n    <button id=\"signup\">Sign Up</button>\r\n</div>\r\n\r\n\r\n${\"<\" + \"script\"}>\r\n    this.host.\\$htm = (function (self) {\r\n        let signup = self.getElementById('signup');\r\n  \r\n        signup.addEventListener(\"click\", e => {\r\n            let host = self.getElementById('hostID').value;\r\n            let cell = self.getElementById('cellNo').value;\r\n\r\n            self.host.submit(host, cell);\r\n        });\r\n\r\n        return {\r\n            setValue: function(id, val) {\r\n                let obj = self.getElementById(id);\r\n                obj.value = val;\r\n                obj.placeholder = null;\r\n            },\r\n            setPlace: function(id, msg) {\r\n                let obj = self.getElementById(id);\r\n                obj.value = \"\";\r\n                obj.placeholder = msg;\r\n            }\r\n        };\r\n    })(this);\r\n${\"<\" + \"/script\"}>`;\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./htm/signup.htm?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _signup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.js */ \"./signup.js\");\n\r\n\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./signup.js":
/*!*******************!*\
  !*** ./signup.js ***!
  \*******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SignUp: () => (/* binding */ SignUp)\n/* harmony export */ });\n/* harmony import */ var _commons_context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../commons/context.js */ \"../../commons/context.js\");\n/* harmony import */ var _htm_signup_htm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htm/signup.htm */ \"./htm/signup.htm\");\n\r\n\r\n\r\nclass SignUp extends _commons_context_js__WEBPACK_IMPORTED_MODULE_0__.BaseElement {\r\n    \r\n    constructor() {\r\n        super(_htm_signup_htm__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n    }\r\n\r\n    connectedCallback() {\r\n        this.$htm.setValue(\"hostID\", \"com.web3p.album:unu\");\r\n        this.$htm.setPlace(\"cellNo\", \"회원 번호를 입력하세요.\");\r\n    }\r\n    \r\n    submit(hostID, cellNo) {\r\n        _commons_context_js__WEBPACK_IMPORTED_MODULE_0__.Channel.submit(\"SignUp\", 0, hostID, cellNo)\r\n        .catch(err => {\r\n            this.$htm.setPlace(\"cellNo\", err.message);\r\n        });\r\n    }\r\n}\r\n\r\ncustomElements.define(\"wdp-signup\", SignUp, {extends:'section'});\n\n//# sourceURL=webpack:///./signup.js?");

/***/ }),

/***/ "../../commons/context.js":
/*!********************************!*\
  !*** ../../commons/context.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BaseElement: () => (/* binding */ BaseElement),\n/* harmony export */   Channel: () => (/* binding */ Channel),\n/* harmony export */   Listener: () => (/* binding */ Listener),\n/* harmony export */   Provider: () => (/* binding */ Provider),\n/* harmony export */   Swiper: () => (/* binding */ Swiper),\n/* harmony export */   Tapper: () => (/* binding */ Tapper)\n/* harmony export */ });\nif (!(window instanceof Window)) {\r\n    throw new Error('unable to resolve window object');\r\n}\r\n\r\nwindow.addEventListener(\"unhandledrejection\", event => {\r\n    console.error(event.reason);\r\n}, false);\r\n\r\nwindow.addEventListener(\"resize\", event => Listener.notify('Resize', event), false);\r\n\r\nclass Tapper {\r\n    static async detect(target, touches, threshold) {\r\n        if (Tapper.#isTapping) {\r\n            if (touches.length == 1) {\r\n                Tapper.#tapper.#onDblTouch();\r\n            } else\r\n            if (touches.length == 2) {\r\n                Tapper.#tapper.#onTwoTouch();\r\n            }\r\n            return Promise.resolve('isTapped');\r\n        }\r\n        Tapper.#isTapping = true;\r\n        return new Promise(resolve => \r\n            Tapper.#tapper.#touchStart(target, touches, threshold, resolve)\r\n        );\r\n    }   // (onetouch, dbltouch, longtouch), (twotouch, thump, walk, run)\r\n    static #tapper = new Tapper();\r\n    static #isTapping = false;\r\n\r\n    #TouchCancel = this.#onTouchCancel.bind(this);\r\n    #TouchMove = this.#onTouchMove.bind(this);\r\n    #LongTouch = this.#onLongTouch.bind(this);\r\n    #TouchEnd = this.#onTouchEnd.bind(this);\r\n\r\n    #resolve; #target; #threshold; #x0; #y0; #timer;\r\n\r\n    #touchStart(target, touches, threshold, resolve) {\r\n        this.#target = target;\r\n        this.#threshold = Date.now() + threshold;\r\n        this.#x0 = touches[0].pageX;\r\n        this.#y0 = touches[0].pageY;\r\n        this.#resolve = resolve;\r\n\r\n        this.#target.addEventListener(\"touchmove\", this.#TouchMove, {passive:true});\r\n        this.#target.addEventListener(\"touchend\", this.#TouchEnd);\r\n        this.#target.addEventListener(\"touchcancel\", this.#TouchCancel);\r\n\r\n        this.#timer = setTimeout(this.#LongTouch, threshold);\r\n    }\r\n\r\n    #detected(action) {\r\n        setTimeout(() => Tapper.#isTapping = false, 200);\r\n        this.#resolve(action);\r\n    }\r\n    \r\n    #onLongTouch() {\r\n        this.#clear();\r\n        this.#detected('longTouch');\r\n    }\r\n    \r\n    #onDblTouch() {\r\n        clearTimeout(this.#timer);\r\n        this.#detected('dblTouch');\r\n    }\r\n    \r\n    #onTwoTouch() {\r\n        this.#clear();\r\n        clearTimeout(this.#timer);\r\n        this.#detected('twoTouch');\r\n    }\r\n\r\n    #onTouchEnd(event) {\r\n        clearTimeout(this.#timer);\r\n        this.#clear();\r\n\r\n        this.#timer = setTimeout(() => {\r\n            this.#detected('oneTouch');\r\n        }, 300);\r\n    }\r\n\r\n    #onTouchMove(event) {\r\n        let touches = event.targetTouches;\r\n        let dx = Math.abs(touches[0].pageX - this.#x0);\r\n        let dy = Math.abs(touches[0].pageY - this.#y0);\r\n\r\n        if (dx > 9 || dy > 9) this.#onTouchCancel(null);\r\n    }\r\n\r\n    #onTouchCancel(event) {\r\n        this.#clear();\r\n\r\n        if (event && Math.abs(Date.now() - this.#threshold) < 50)\r\n            this.#detected('longTouch');\r\n        else\r\n            this.#detected('isPanning.');\r\n    }\r\n\r\n    #clear() {\r\n        this.#target.removeEventListener(\"touchmove\", this.#TouchMove);\r\n        this.#target.removeEventListener(\"touchend\", this.#TouchEnd);\r\n        this.#target.removeEventListener(\"touchcancel\", this.#TouchCancel);\r\n    }\r\n}\r\n\r\nclass Swiper {\r\n    static async detect(target, touch, threshold) {\r\n        return new Promise((resolve, reject) => \r\n            new Swiper(target, touch, threshold, resolve, reject).#init()\r\n        );\r\n    }\r\n\r\n    #TouchCancel = this.#onTouchCancel.bind(this);\r\n    #TouchMove = this.#onTouchMove.bind(this);\r\n    #TouchEnd = this.#onTouchEnd.bind(this);\r\n    #resolve;\r\n    #reject;\r\n    #target;\r\n    #threshold;\r\n    #start;\r\n    #x0;  #x1;\r\n    #y0;  #y1;\r\n\r\n    constructor(target, touch, threshold, resolve, reject) {\r\n        this.#target = target;\r\n        this.#threshold = threshold;\r\n        this.#x0 = this.#x1 = touch.pageX;\r\n        this.#y0 = this.#y1 = touch.pageY;\r\n        this.#start = Date.now();\r\n        this.#resolve = resolve;\r\n        this.#reject = reject;\r\n    }   // setTimeout(this.#TouchCancel, 5000);\r\n\r\n    #onTouchEnd() {\r\n        this.#clear();\r\n\r\n        let threshold = this.#threshold;        \r\n        let gap = Date.now() - this.#start;\r\n        if (gap < 200) threshold /= 4;\r\n        else if (gap < 300) threshold /= 3;\r\n        else if (gap < 500) threshold /= 2;\r\n\r\n        let off = this.#x1 - this.#x0;\r\n        if (Math.abs(off) > Math.abs(this.#y1 - this.#y0)) {\r\n            if (threshold < -off)\r\n                this.#resolve('next');\r\n            else\r\n            if (threshold < off)\r\n                this.#resolve('prev');\r\n        }\r\n        this.#reject('Canceled.');\r\n    }\r\n\r\n    #onTouchMove(event) {\r\n        this.#x1 = event.targetTouches[0].pageX;\r\n        this.#y1 = event.targetTouches[0].pageY;\r\n\r\n        this.#target.style.transform = `translateX(${this.#x1 - this.#x0}px)`;\r\n        this.#target.style.transitionDuration = '0ms';\r\n    }\r\n\r\n    #onTouchCancel() {\r\n        this.#clear();\r\n        this.#reject('Canceled.');\r\n    }\r\n\r\n    #init() {\r\n        this.#target.addEventListener(\"touchmove\", this.#TouchMove, {passive:true});\r\n        this.#target.addEventListener(\"touchend\", this.#TouchEnd);\r\n        this.#target.addEventListener(\"touchcancel\", this.#TouchCancel);\r\n    }\r\n\r\n    #clear() {\r\n        this.#target.removeEventListener(\"touchmove\", this.#TouchMove);\r\n        this.#target.removeEventListener(\"touchend\", this.#TouchEnd);\r\n        this.#target.removeEventListener(\"touchcancel\", this.#TouchCancel);\r\n    }\r\n};\r\n\r\nconst Listener = (function() {\r\n    const events = {}; // PageRequest, PathReturn, PathAppend\r\n\r\n    return {\r\n        listen: function(event, listener) {\r\n            let listeners = events[event];\r\n\r\n            if (!listeners) {\r\n                events[event] = [listener];\r\n            } else {\r\n                listeners.push(listener);\r\n            }\r\n        },\r\n        notify: function(event, ...data) {\r\n            events[event] ?.forEach(listener => listener(...data));\r\n        },\r\n        remove: function(event, listener) {\r\n            let listeners = events[event] ?? [];\r\n\r\n            let pos = listeners.indexOf(listener);\r\n            if (pos >= 0) listeners.splice(pos, 1);\r\n            if (listeners.length == 0) delete events[event];\r\n        },\r\n    };\r\n})();\r\n\r\nconst Provider = (function() {\r\n    const topics = {}; // Store\r\n\r\n    return {\r\n        supply: function(topic, provider, force = false) {\r\n            if (!topics[topic] || force)\r\n                topics[topic] = provider;\r\n        },\r\n        request: function(topic, ...data) {\r\n            let provider = topics[topic];\r\n            return provider ? provider(...data) : null;\r\n        },\r\n        remove: function(topic, provider) {\r\n            if (provider == topics[topic])\r\n                delete topics[topic];\r\n        },\r\n    };\r\n})();\r\n\r\nwindow.Web3P_Channel$ = window.Web3P_Channel$ ?? {\r\n    connect: () => {},\r\n};\r\n\r\nclass Channel {\r\n    static #handlers = {};\r\n    static #port;\r\n    static #rid = 0;\r\n\r\n    static {\r\n        const CHANNEL = \"Web3P_Channel$\", EVENT = \"message\";\r\n\r\n        const listener = msg => {\r\n            if (msg.data != CHANNEL) return;\r\n            window.removeEventListener(EVENT, listener);\r\n\r\n            this.#port = msg.ports[0];\r\n            this.#port.onmessage = null;\r\n            this.#port.addEventListener(EVENT, Channel.onMessage);\r\n        }\r\n        window.addEventListener(EVENT, listener);\r\n        window.Web3P_Channel$.connect(CHANNEL);\r\n    }\r\n\r\n    static clean() {\r\n        this.#handlers = {};\r\n    }\r\n\r\n    static supply(task, provider) {\r\n        if (isNaN(task))\r\n            this.#handlers[task] = provider;\r\n    }\r\n    \r\n    static onMessage(msg) {\r\n        const jso = JSON.parse(msg.data);\r\n        const key = jso.rid;\r\n        const map = this.#handlers;\r\n\r\n        if (Object.hasOwn(map, key)) map[key](jso);\r\n    }\r\n\r\n    static commit(task, wait, onResolve, onReject, ...args) {\r\n        this.submit(task, wait, args)\r\n        .then(result => {\r\n            if (onResolve != null) onResolve(result);\r\n        })\r\n        .catch(error => {\r\n            if (onReject != null) onReject(error.message);\r\n        });\r\n    }\r\n\r\n    //  if (wait == 0) -> notify: return 없음 => handlers에서 제거 ???해결요???\r\n    static submit(task, wait, ...args) {\r\n        return new Promise((resolve, reject) => {\r\n            const rid = ++this.#rid;\r\n            const timer = wait > 0 ?\r\n                setTimeout(() => {\r\n                    delete Channel.#handlers[rid];\r\n                    reject(new Error(\"HTTP-408\", {cause: 408}));  // Request Timeout\r\n                }, wait) : 0;\r\n        \r\n            this.#handlers[rid] = jso => {\r\n                clearTimeout(timer);\r\n                delete Channel.#handlers[jso.rid];\r\n                \r\n                if (jso.hasOwn(\"result\")) resolve(jso.result);   // Internal Server Error\r\n                if (jso.hasOwn(\"reject\")) reject(new Error(jso.reject, {cause: 500}));\r\n                reject(new Error(\"HTTP-204\", {cause: 204}));  // No Content\r\n            };\r\n            this.#port.postMessage(this.#json(rid, wait, task, args));\r\n            this.#port.start();\r\n        });\r\n    }\r\n\r\n    static #json(rid, wait, task, args) {\r\n        let reply = wait > 0;\r\n        let list = args.map(a => `\"${a}\"`).join();\r\n        return `{\"rid\":${rid},\"reply\":${reply},\"task\":\"${task}\",\"args\":[${list}]}`;\r\n    }\r\n\r\n    static close() {\r\n        this.#port.close();\r\n    }\r\n};\r\n\r\nclass BaseElement extends HTMLElement {\r\n    \r\n    constructor(html) {\r\n        super();\r\n        \r\n\t\tthis.attachShadow({mode:\"open\"}).innerHTML = html;\r\n\t\tthis.#activateScript(this.shadowRoot);\r\n    }\r\n\r\n    #activateScript(node) {\r\n        if (node.tagName === \"TEMPLATE\") {\r\n            this.#activateTemplateScripts(node.content);\r\n        } else\r\n        for (let child of node.children) {\r\n            if (child.tagName === \"SCRIPT\") {\r\n                new Function(child.textContent).call(node);\r\n            }\r\n            else this.#activateScript(child);\r\n        };\r\n    };\r\n\r\n    #activateTemplateScripts(node) {\r\n        for (let child of node.children) {\r\n            if (child.tagName === \"TEMPLATE\") {\r\n                this.#activateTemplateScripts(child.content);\r\n            } else\r\n            if (child.tagName === \"SCRIPT\") {\r\n                this.#refreshScript(node, child);\r\n            }\r\n            else this.#activateTemplateScripts(child);\r\n        };\r\n    };\r\n    \r\n    #refreshScript(node, child) {\r\n        let script = document.createElement('script');\r\n        for (let attr of child.attributes) {\r\n            script.setAttribute(attr.name, attr.value)\r\n        };\r\n        script.textContent = child.textContent;\r\n        node.replaceChild(script, child);\r\n    };\r\n};\n\n//# sourceURL=webpack:///../../commons/context.js?");

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