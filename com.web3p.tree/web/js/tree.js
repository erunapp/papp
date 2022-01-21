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

/***/ "./tree-item.js":
/*!**********************!*\
  !*** ./tree-item.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TreeItem\": () => (/* binding */ TreeItem)\n/* harmony export */ });\n/* harmony import */ var _commons_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../commons/utils/utils.js */ \"../../commons/utils/utils.js\");\n\r\n\r\nclass TreeItem extends HTMLDivElement {\r\n    static get disabledFeatures() {\r\n         return ['shadow'];\r\n    }\r\n\r\n    _ShowItem = this.#onBind.bind(this);\r\n    #ClickItem = this.#onClick.bind(this);\r\n    #indent;\r\n    #span;\r\n    #data = {};\r\n    \r\n    constructor() {\r\n        super();\r\n\r\n        this.#indent = this.querySelector('.indent');\r\n        this.#span = this.querySelectorAll('span');\r\n        this.style.display = 'none';\r\n    }\r\n\r\n    connectedCallback() {\r\n        this.addEventListener('click', this.#ClickItem);\r\n    }\r\n\r\n    disconnectedCallback() {\r\n        this.removeEventListener('click', this.#ClickItem);\r\n    }\r\n\r\n    #setIcon(expanded) {\r\n        const ico = expanded ? '#opened' : '#closed';\r\n        this.querySelector('use').setAttribute('href', ico);\r\n    }\r\n\r\n    #onBind(pos, data) {\r\n        if (data == null) {\r\n            this.style.display = 'none';\r\n            this.#data = {};\r\n        } else {\r\n            if (this.#data != data) {\r\n                this.#indent.style.width = `${data.tabs * 12}px`;\r\n                this.#span[1].textContent = data.name;\r\n                this.#setIcon(data.expanded);\r\n            }   this.#data = data;\r\n            this.style.display = '';\r\n        }   this.style.top = `${pos}px`;\r\n    }\r\n\r\n    #onClick() {\r\n        _commons_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Observer.notify('ClickTreeItem', parseInt(this.style.top));\r\n        this.#setIcon(this.#data.expanded);\r\n    }\r\n};\r\n\r\ncustomElements.define(\"wdp-tree-item\", TreeItem, {extends:'div'});\r\n\n\n//# sourceURL=webpack:///./tree-item.js?");

/***/ }),

/***/ "./tree-list.js":
/*!**********************!*\
  !*** ./tree-list.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TreeList\": () => (/* binding */ TreeList)\n/* harmony export */ });\n/* harmony import */ var _commons_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../commons/utils/utils.js */ \"../../commons/utils/utils.js\");\n/* harmony import */ var _tree_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree-item.js */ \"./tree-item.js\");\n\r\n\r\n\r\nclass TreeList extends HTMLDivElement {\r\n    static get disabledFeatures() {\r\n         return ['shadow'];\r\n    }\r\n\r\n    #SyncView = this.#onSync.bind(this);\r\n    #ClickItem = this.#onClick.bind(this);\r\n    #Channel;\r\n    #lines = [];\r\n    #items = [];\r\n    #topLine = 0;\r\n    #topItem = 0;\r\n    #isBusy = false;\r\n    #onLast = 0;\r\n    \r\n    constructor() {\r\n        super();\r\n\r\n        this.#items.push(this.querySelector('.item'));\r\n        this.#resize();\r\n\r\n        _commons_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Mediator.request('FrameChannel')\r\n            .then(channel => {\r\n                this.#Channel = channel;\r\n                return this.#expand(-1, '$', 1);\r\n            })\r\n            .then(children => {\r\n                this.#listData();\r\n            });\r\n    }\r\n\r\n    connectedCallback() {\r\n        _commons_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Observer.listen('SyncTreeView', this.#SyncView);\r\n        _commons_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Observer.listen('ClickTreeItem', this.#ClickItem);\r\n    }\r\n\r\n    disconnectedCallback() {\r\n        _commons_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Observer.remove('ClickTreeItem', this.#ClickItem);\r\n        _commons_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Observer.remove('SyncTreeView', this.#SyncView);\r\n    }\r\n\r\n    _resize(newHeit) {\r\n        this._viewHeit = newHeit;\r\n        this.#resize();\r\n        this.#listData();\r\n    }\r\n\r\n    #resize() {\r\n        const rows = Math.ceil(this._viewHeit / this._itemHeit) + 1;\r\n\r\n        if (this.#items.length < rows) {\r\n            let pos = this.#items.indexOf(this.lastElementChild) + 1;\r\n            let cnt = rows - this.#items.length;\r\n            let arr = [];\r\n\r\n            while (arr.length < cnt) {\r\n                arr.push(this.#items[0].cloneNode(true));\r\n            }\r\n            this.append(...arr);\r\n            this.#items.splice(pos, 0, ...arr);\r\n        } else\r\n            while (this.#items.length > rows) {\r\n                this.#items.pop().remove();\r\n            }\r\n    }\r\n    \r\n    async #expand(line, guid, tabs) {\r\n        const data = await this.#Channel.request('FileService', 'select', guid);\r\n        const arr = new Array(data.length);\r\n\r\n        for (let i = data.length; i --> 0;) arr[i] = {\r\n            guid: guid,\r\n            uuid: data[i].path,\r\n            name: data[i].name,\r\n            last: data[i].last,\r\n            size: data[i].size,\r\n            tabs: tabs,\r\n            expanded: false,\r\n            children: 0\r\n        };\r\n        this.#lines.splice(line + 1, 0, ...arr);\r\n        this.style.height = `${this.#lines.length * this._itemHeit}px`;\r\n\r\n        return data.length;\r\n    }\r\n\r\n    #collapse(line, length) {\r\n        this.#lines.splice(line + 1, length);\r\n        this.style.height = `${this.#lines.length * this._itemHeit}px`;\r\n\r\n        return 0;\r\n    }\r\n\r\n    _onScroll(scroll) {\r\n        this.#topItem = Math.floor(scroll / this._itemHeit);\r\n\r\n        if (this.#onLast > 0) clearTimeout(this.#onLast);\r\n        if (this.#isBusy) {\r\n            this.#onLast = setTimeout(() => { this.#scroll(); }, 50);\r\n        } else {\r\n            this.#isBusy = true;\r\n            setTimeout(() => { this.#isBusy = false; }, 50);\r\n            this.#scroll();\r\n        }\r\n    }\r\n\r\n    #scroll() {\r\n        if (this.#topItem == this.#topLine) return;\r\n\r\n        if (this.#topItem > this.#topLine) {\r\n            let scroll = this.#topItem - this.#topLine;\r\n            if (scroll < this.#items.length) {\r\n                this.#items.push(...this.#items.splice(0, scroll));\r\n            }\r\n        } else {\r\n            let scroll = this.#topLine - this.#topItem;\r\n            if (scroll < this.#items.length) {\r\n                this.#items.unshift(...this.#items.splice(-scroll, scroll));\r\n            }\r\n        }   this.#topLine = this.#topItem;\r\n        this.#listData();\r\n    }\r\n\r\n    #listData() {\r\n        const cnt = Math.min(this.#items.length, this.#lines.length - this.#topLine);\r\n\r\n        for (let i = 0; i < cnt; i++) {\r\n            let pos = this.#topLine + i;\r\n            this.#items[i]._ShowItem(pos * this._itemHeit, this.#lines[pos]);\r\n        }\r\n        for (let i = cnt; i < this.#items.length; i++) {\r\n            this.#items[i]._ShowItem((this.#topLine + i) * this._itemHeit);\r\n        }\r\n    }\r\n    \r\n    #onClick(pos) {\r\n        const line = Math.round(pos / this._itemHeit);\r\n        const item = this.#lines[line];\r\n        const uuid = item.uuid;\r\n\r\n        if (this.#lines[line].expanded) {\r\n            item.expanded = false;\r\n            item.children = this.#collapse(line, this.#countChildren(line));\r\n            this.#listData();\r\n        } else {\r\n            item.expanded = true;\r\n            this.#expand(line, uuid, item.tabs + 1).then(children => {\r\n                item.children = children;\r\n                this.#listData();\r\n            });\r\n        }\r\n    }\r\n    \r\n    #countChildren(line) {\r\n        const parent = this.#lines[line];\r\n        const last = line + parent.children;\r\n        let children = parent.children;\r\n\r\n        while (line++ < last) {\r\n            if (this.#lines[line].expanded)\r\n                children += this.#countChildren(line);\r\n        }\r\n        return children;\r\n    }\r\n\r\n    #onSync(count) {\r\n    }\r\n};\r\n\r\ncustomElements.define(\"wdp-tree-list\", TreeList, {extends:'div'});\r\n\n\n//# sourceURL=webpack:///./tree-list.js?");

/***/ }),

/***/ "./tree-view.js":
/*!**********************!*\
  !*** ./tree-view.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TreeView\": () => (/* binding */ TreeView)\n/* harmony export */ });\n/* harmony import */ var _commons_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../commons/utils/utils.js */ \"../../commons/utils/utils.js\");\n\r\n\r\nclass TreeView extends HTMLElement {\r\n    static get disabledFeatures() {\r\n         return ['shadow'];\r\n    }\r\n\r\n    #ClickItem = this.#onClick.bind(this);\r\n    #ScrollView = this.#onScroll.bind(this);\r\n    #ResizeView = this.#onResize.bind(this);\r\n    #root;\r\n    #icon;\r\n    #scroll;\r\n    #detail;\r\n    \r\n    constructor() {\r\n        super();\r\n\r\n        this.#root = this.querySelector('.root .item');\r\n        this.#icon = this.#root.querySelector('.icon');\r\n\r\n        this.#scroll = this.querySelector('.scroll');\r\n        this.#detail = this.#scroll.querySelector('.detail');\r\n\r\n        this.#detail._viewHeit = innerHeight - 33;\r\n        this.#detail._itemHeit = this.#detail.querySelector('.item').offsetHeight;\r\n        this.#scroll.style.height = `${this.#detail._viewHeit}px`;\r\n    }\r\n\r\n    connectedCallback() {\r\n        this.#root.addEventListener('click', this.#ClickItem);\r\n        this.#scroll.addEventListener('scroll', this.#ScrollView);\r\n        _commons_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Observer.listen('DocumentResized', this.#ResizeView);\r\n    }\r\n\r\n    disconnectedCallback() {\r\n        _commons_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Observer.remove('DocumentResized', this.#ResizeView);\r\n        this.#scroll.removeEventListener('scroll', this.#ScrollView);\r\n        this.#root.removeEventListener('click', this.#ClickItem);\r\n    }\r\n\r\n    #onResize() {\r\n        const viewHeit = innerHeight - 33;\r\n        this.#scroll.hidden = true;\r\n        this.#scroll.style.height = `${viewHeit}px`;\r\n        this.#detail._resize(viewHeit);\r\n        this.#scroll.hidden = false;\r\n    }\r\n\r\n    #onClick() {\r\n        if (this.#icon.classList.contains('expanded')) {\r\n            this.#icon.classList.remove('expanded');\r\n            this.#scroll.style.display = 'none';\r\n        } else {\r\n            this.#icon.classList.add('expanded');\r\n            this.#scroll.style.display = '';\r\n        }\r\n    }\r\n\r\n    #onScroll() {\r\n        this.#detail._onScroll(this.#scroll.scrollTop);\r\n    }\r\n};\r\n\r\ncustomElements.define(\"wdp-tree-view\", TreeView, {extends:'main'});\r\n\n\n//# sourceURL=webpack:///./tree-view.js?");

/***/ }),

/***/ "./tree.js":
/*!*****************!*\
  !*** ./tree.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _commons_win_init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../commons/win-init.js */ \"../../commons/win-init.js\");\n/* harmony import */ var _tree_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree-view.js */ \"./tree-view.js\");\n/* harmony import */ var _tree_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tree-list.js */ \"./tree-list.js\");\n\r\n\r\n\r\n\r\n\r\nwindow.wcp = window.wcp ?? (function () {\r\n\r\n    return {\r\n    }\r\n})();\r\n\n\n//# sourceURL=webpack:///./tree.js?");

/***/ }),

/***/ "../../commons/utils/utils.js":
/*!************************************!*\
  !*** ../../commons/utils/utils.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Observer\": () => (/* binding */ Observer),\n/* harmony export */   \"Mediator\": () => (/* binding */ Mediator),\n/* harmony export */   \"activateScript\": () => (/* binding */ activateScript),\n/* harmony export */   \"toIconHtml\": () => (/* binding */ toIconHtml)\n/* harmony export */ });\n\r\nconst Observer = (function() {\r\n    const topics = {}; // PageRequest, PathReturn, PathAppend\r\n\r\n    return {\r\n        notify: function(topic, ...data) {\r\n            topics[topic] ?.forEach(listener => listener(...data));\r\n        },\r\n        listen: function(topic, listener) {\r\n            let listeners = topics[topic];\r\n\r\n            if (!listeners) {\r\n                topics[topic] = [listener];\r\n            } else {\r\n                listeners.push(listener);\r\n            }\r\n        },\r\n        remove: function(topic, listener) {\r\n            let listeners = topics[topic] ?? [];\r\n\r\n            let pos = listeners.indexOf(listener);\r\n            if (pos >= 0) listeners.splice(pos, 1);\r\n            if (listeners.length == 0) delete topics[topic];\r\n        },\r\n    };\r\n})();\r\n\r\nconst Mediator = (function() {\r\n    const topics = {}; // Store\r\n\r\n    return {\r\n        provide: function(topic, provider, force = false) {\r\n            if (!topics[topic] || force)\r\n                topics[topic] = provider;\r\n        },\r\n        request: function(topic, ...data) {\r\n            let provider = topics[topic];\r\n            return provider ? provider(...data) : null;\r\n        },\r\n        remove: function(topic, provider) {\r\n            if (provider == topics[topic])\r\n                delete topics[topic];\r\n        },\r\n    };\r\n})();\r\n\r\nconst activateScript = function iterator(parent) {\r\n    if (parent.tagName === \"TEMPLATE\") {\r\n        activateTemplateScripts(parent.content);\r\n    } else\r\n    for (let child of parent.children) {\r\n        if (child.tagName === \"SCRIPT\") {\r\n            new Function(child.textContent).call(parent);\r\n        } else iterator(child);\r\n    };\r\n};\r\n\r\nconst activateTemplateScripts = function iterator(parent) {\r\n    for (let child of parent.children) {\r\n        if (child.tagName === \"TEMPLATE\") {\r\n            iterator(child.content);\r\n        } else\r\n        if (child.tagName === \"SCRIPT\") {\r\n            refreshScript(parent, child);\r\n        }\r\n        else iterator(child);\r\n    };\r\n};\r\n\r\nconst refreshScript = function(parent, child) {\r\n    let script = document.createElement('script');\r\n    for (let attr of child.attributes) {\r\n        script.setAttribute(attr.name, attr.value)\r\n    };\r\n    script.textContent = child.textContent;\r\n    parent.replaceChild(script, child);\r\n};\r\n\r\nconst toIconHtml = function(data, size = 16) {\r\n    if (\"string\" === typeof data && data.length > 3) {\r\n        let type = data.substring(0, 3).toUpperCase();\r\n        let icon = data.substring(3);\r\n        switch (type) {\r\n            case \"SVG\": {\r\n                return `<svg width=\"${size}\" height=\"${size}\" viewBox=\"0 0 16 16\">${icon}</svg>`;\r\n            }\r\n        };\r\n    };\r\n    return \"\";\r\n};\n\n//# sourceURL=webpack:///../../commons/utils/utils.js?");

/***/ }),

/***/ "../../commons/win-init.js":
/*!*********************************!*\
  !*** ../../commons/win-init.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FrameChannel\": () => (/* binding */ FrameChannel)\n/* harmony export */ });\n/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils.js */ \"../../commons/utils/utils.js\");\n\r\n\r\n\r\nif (!(window instanceof Window))\r\n    throw new Error('unable to locate window object');\r\n\r\nwindow.addEventListener('resize', event => {\r\n    _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Observer.notify('DocumentResized', event);\r\n}, false);\r\nwindow.addEventListener(\"unhandledrejection\", event => {\r\n    console.error(event.reason);\r\n    event.preventDefault();\r\n}, false);\r\n\r\n\r\nlet frameChannel = null;\r\n\r\nclass FrameChannel {\r\n    #ReceiveMessage = this.#onMessage.bind(this);\r\n    #listeners = {};\r\n    #providers = {};\r\n    #port;\r\n    #rid = 0;\r\n\r\n    constructor(port) {\r\n        this.#port = port;\r\n        this.#port.onmessage = this.#ReceiveMessage;\r\n    }\r\n\r\n    #onMessage(event) {\r\n        const msg = JSON.parse(event.data);\r\n        switch (msg.type) {\r\n            case \"notify\": {\r\n                if (Array.isArray(this.#listeners[msg.topic]))\r\n                    this.#listeners[msg.topic].forEach(listener => listener(msg.args));\r\n            }   break;\r\n            case \"request\": {\r\n                let provider = this.#providers[msg.topic];\r\n                if (typeof provider == 'function') provider(msg.rid, msg.args);\r\n            }   break;\r\n        }\r\n    }\r\n\r\n    listen(topic, listener) {\r\n        if (this.#listeners.hasOwnProperty(topic))\r\n            this.#listeners[topic].push(listener);\r\n        else\r\n            this.#listeners[topic] = [listener];\r\n    }\r\n\r\n    provide(topic, provider, force = false) {\r\n        if (!this.#providers[topic] || force)\r\n            this.#providers[topic] = provider;\r\n    }\r\n\r\n    #toMessage(type, topic, ...data) {\r\n        var args = [];\r\n        data.forEach(arg => args.push(arg));\r\n\r\n        var msg = {};\r\n        msg.type = type;\r\n        msg.topic = topic;\r\n        msg.args = args;\r\n        return msg;\r\n    }\r\n\r\n    notify(topic, ...data) {\r\n        const msg = this.#toMessage(\"request\", topic, ...data);\r\n        this.#port.postMessage(JSON.stringify(msg));\r\n    }\r\n\r\n    request(topic, ...data) {\r\n        return new Promise((resolve, reject) => {\r\n            const msg = this.#toMessage(\"request\", topic, ...data);\r\n            const rid = msg.rid = ++this.#rid;\r\n            const port = this.#port;\r\n\r\n            let waiter = setTimeout(() => {\r\n                port.removeEventListener(\"message\", listener);\r\n                reject(new Error(\"Request Timeout\"));\r\n            }, 3000);\r\n            \r\n            const listener = function(event) {\r\n                const json = JSON.parse(event.data);\r\n                if (rid != json.rid) return;\r\n                \r\n                clearTimeout(waiter);\r\n                port.removeEventListener(\"message\", listener);\r\n\r\n                if (json.hasOwnProperty(\"result\")) resolve(json.result);\r\n                if (json.hasOwnProperty(\"reject\")) reject(json.reject);\r\n                reject(new Error(\"Empty Response\"));\r\n            }\r\n            port.addEventListener(\"message\", listener);\r\n            port.postMessage(JSON.stringify(msg));\r\n            port.start();\r\n        });\r\n    }\r\n\r\n    result(rid, result) {\r\n        var msg = {};\r\n        msg.rid = rid;\r\n        msg.result = result;\r\n        this.#port.postMessage(JSON.stringify(msg));\r\n    }\r\n\r\n    reject(rid, error) {\r\n        var msg = {};\r\n        msg.rid = rid;\r\n        msg.reject = error;\r\n        this.#port.postMessage(JSON.stringify(msg));\r\n    }\r\n\r\n    removeListener(topic, listener) {\r\n        if (Array.isArray(this.#listeners[topic])) {\r\n            let pos = this.#listeners[topic].indexOf(listener);\r\n\r\n            if (pos >= 0) {\r\n                this.#listeners[topic].splice(pos, 1);\r\n                if (this.#listeners[topic].length == 0)\r\n                    delete this.#listeners[topic];\r\n            }\r\n        }\r\n    }\r\n\r\n    removeProvider(topic, provider) {\r\n        if (provider == this.#providers[topic])\r\n            delete this.#providers[topic];\r\n    }\r\n};\r\n\r\nfunction getFrameChannel() {\r\n    if (frameChannel != null) return Promise.resolve(frameChannel);\r\n    let REQUEST_TIMEOUT = 5000;\r\n\r\n    return new Promise((resolve, reject) => {\r\n        let waiter = setTimeout(() => {\r\n            window.removeEventListener('message', listener);\r\n            reject(new Error(\"Request Timeout\"));\r\n        }, REQUEST_TIMEOUT);\r\n\r\n        const listener = function(msg) {\r\n            if (msg.data != 'FrameChannel') return;\r\n            clearTimeout(waiter);\r\n            window.removeEventListener('message', listener);\r\n\r\n            frameChannel = new FrameChannel(msg.ports[0]);\r\n            resolve(frameChannel);\r\n        }\r\n        window.addEventListener('message', listener);\r\n        window.wdp.openFrameChannel();\r\n    });\r\n}\r\n\r\n_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Mediator.provide('FrameChannel', getFrameChannel);\r\n\n\n//# sourceURL=webpack:///../../commons/win-init.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./tree.js");
/******/ 	
/******/ })()
;