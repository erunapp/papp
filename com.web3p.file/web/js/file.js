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

/***/ "./file-list.js":
/*!**********************!*\
  !*** ./file-list.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FileList\": () => (/* binding */ FileList)\n/* harmony export */ });\n/* harmony import */ var _file_list_htm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-list.htm */ \"./file-list.htm\");\n/* harmony import */ var _commons_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../commons/utils/utils.js */ \"../../commons/utils/utils.js\");\n\r\n\r\n\r\nclass FileList extends HTMLDivElement {\r\n\r\n    #FileSelect = this.#onClickFileItem.bind(this);\r\n    #PathReturn = this.#onClickPathWalk.bind(this);\r\n    #lines = [];\r\n    #Service;\r\n    \r\n    constructor() {\r\n\t\tsuper();\r\n\r\n\t\tthis.attachShadow({\r\n\t\t\tmode: \"open\"\r\n\t\t}).innerHTML = _file_list_htm__WEBPACK_IMPORTED_MODULE_0__;\r\n\t\t(0,_commons_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.activateScript)(this.shadowRoot);\r\n\r\n        _commons_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Mediator.request(\"AsService\",\"FileSystem\")\r\n                .then(service => {\r\n                    this.#Service = service;\r\n                    return service.request(\"getRoot\");\r\n                })\r\n                .then(data => this.#listData(data))\r\n                .catch(err => console.error(err));\r\n    }\r\n\r\n    connectedCallback() {\r\n        _commons_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Observer.listen('PathReturn', this.#PathReturn);\r\n    }\r\n\r\n    disconnectedCallback() {\r\n        _commons_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Observer.remove('PathReturn', this.#PathReturn);\r\n    }\r\n\r\n    #listData(json) {\r\n        this.$htm.init();\r\n        this.#lines = [];\r\n        let uid = 0;\r\n\r\n        json.forEach(data => {\r\n            this.#lines.push(`${data.type};${data.path}`);\r\n            let item = this.$htm.append(uid++, data.type, data.name, data.last, data.size);\r\n            item.addEventListener(\"click\", this.#FileSelect);\r\n        });\r\n    }\r\n\r\n    #onClickFileItem(event) {\r\n        let uid = parseInt(this.$htm.getId(event.currentTarget));\r\n\r\n        if (this.#lines[uid].startsWith(\"1\")) {\r\n            const name = this.$htm.getName(event.currentTarget);\r\n            const path = this.#lines[uid].substring(2);\r\n\r\n            this.#Service.request(\"getList\", path)\r\n                .then(data => {\r\n                    this.#listData(data);\r\n                    _commons_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Observer.notify('PathAppend', path, name);\r\n                })\r\n                .catch(err => console.error(err));\r\n        }\r\n    }\r\n\r\n    #onClickPathWalk(path) {\r\n        (path == \"$\") ? this.#Service.request(\"getRoot\"):\r\n                        this.#Service.request(\"getList\", path)\r\n            .then(data => this.#listData(data))\r\n            .catch(err => console.error(err));\r\n    }\r\n};\r\n\r\ncustomElements.define(\"wdp-file-list\", FileList, {extends:'div'});\r\n\n\n//# sourceURL=webpack:///./file-list.js?");

/***/ }),

/***/ "./file.js":
/*!*****************!*\
  !*** ./file.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _commons_wdp_init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../commons/wdp-init.js */ \"../../commons/wdp-init.js\");\n/* harmony import */ var _commons_path_path_walk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../commons/path/path-walk.js */ \"../../commons/path/path-walk.js\");\n/* harmony import */ var _file_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file-list.js */ \"./file-list.js\");\n\r\n\r\n\r\n\r\n\r\nwindow.wcp = window.wcp ?? (function () {\r\n\r\n    return {\r\n    }\r\n})();\r\n\n\n//# sourceURL=webpack:///./file.js?");

/***/ }),

/***/ "../../commons/path/path-walk.js":
/*!***************************************!*\
  !*** ../../commons/path/path-walk.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PathWalk\": () => (/* binding */ PathWalk)\n/* harmony export */ });\n/* harmony import */ var _path_walk_htm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./path-walk.htm */ \"../../commons/path/path-walk.htm\");\n/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils.js */ \"../../commons/utils/utils.js\");\n\r\n\r\n\r\nclass PathWalk extends HTMLElement {\r\n\r\n\t#PathAppend = this.#appendPath.bind(this);\r\n\t#PathReturn = this.#returnPath.bind(this);\r\n\r\n\tconstructor() {\r\n\t\tsuper();\r\n\r\n\t\tthis.attachShadow({\r\n\t\t\tmode: \"open\"\r\n\t\t}).innerHTML = _path_walk_htm__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\n\t\t(0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.activateScript)(this.shadowRoot);\r\n\t\tthis.#appendPath(\"$\", \"Path:\");\r\n\t}\r\n\r\n\tconnectedCallback() {\r\n\t\t_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Observer.listen('PathAppend', this.#PathAppend);\r\n\t}\r\n\r\n\tdisconnectedCallback() {\r\n\t\t_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Observer.remove('PathAppend', this.#PathAppend);\r\n\t}\r\n\r\n\t#appendPath(id, path) {\r\n\t\tthis.$htm.walk(id, path).previousElementSibling\r\n\t\t\t?.addEventListener(\"click\", this.#PathReturn);\r\n\t}\r\n\r\n\t#returnPath(event) {\r\n\t\tevent.currentTarget.removeEventListener(\"click\", this.#PathReturn);\r\n\t\t_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Observer.notify('PathReturn', this.$htm.back(event.currentTarget));\r\n\t}\r\n};\r\n\r\ncustomElements.define(\"wdp-path-walk\", PathWalk, {extends:'nav'});\n\n//# sourceURL=webpack:///../../commons/path/path-walk.js?");

/***/ }),

/***/ "../../commons/utils/utils.js":
/*!************************************!*\
  !*** ../../commons/utils/utils.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Observer\": () => (/* binding */ Observer),\n/* harmony export */   \"Mediator\": () => (/* binding */ Mediator),\n/* harmony export */   \"Service\": () => (/* binding */ Service),\n/* harmony export */   \"activateScript\": () => (/* binding */ activateScript),\n/* harmony export */   \"toIconHtml\": () => (/* binding */ toIconHtml)\n/* harmony export */ });\nconst Observer = (function() {\r\n    const topics = {}; // PageRequest, PathReturn, PathAppend\r\n\r\n    return {\r\n        notify: function(topic, ...data) {\r\n            topics[topic] ?.forEach(listener => listener(...data));\r\n        },\r\n        listen: function(topic, listener) {\r\n            let listeners = topics[topic];\r\n\r\n            if (!listeners) {\r\n                topics[topic] = [listener];\r\n            } else {\r\n                listeners.push(listener);\r\n            }\r\n        },\r\n        remove: function(topic, listener) {\r\n            let listeners = topics[topic] ?? [];\r\n\r\n            let pos = listeners.indexOf(listener);\r\n            if (pos >= 0)\r\n                listeners.splice(pos, 1);\r\n        },\r\n    };\r\n})();\r\n\r\nconst Mediator = (function() {\r\n    const topics = {}; // Store\r\n\r\n    return {\r\n        provide: function(topic, provider, force = false) {\r\n            if (!topics[topic] || force)\r\n                topics[topic] = provider;\r\n        },\r\n        request: function(topic, ...data) {\r\n            let provider = topics[topic];\r\n            return provider ? provider(...data) : null;\r\n        },\r\n        remove: function(topic, provider) {\r\n            if (provider == topics[topic])\r\n                delete topics[topic];\r\n        },\r\n    };\r\n})();\r\n\r\nconst Service = function(service) {\r\n    let port = null;\r\n    let callback = null;\r\n\r\n    function onConnect(event) {\r\n        if (event.data != service) return;\r\n        Observer.remove(\"message\", onConnect);\r\n\r\n        port = event.ports[0];\r\n        port.addEventListener(\"message\", onReceive);\r\n\r\n        if (callback != null) {\r\n            callback();\r\n            callback = null;\r\n        }\r\n    };\r\n\r\n    function onReceive(event) {\r\n        if (callback != null) {\r\n            callback(event.data);\r\n            callback = null;\r\n        }\r\n    };\r\n\r\n    return {\r\n        connect: function(onConnected) {\r\n            callback = onConnected;\r\n            Observer.listen(\"message\", onConnect);\r\n            port = Mediator.request(\"Service\", \"FileSystem\");\r\n        },\r\n        disconnect: function() {\r\n            port.postMessage(\"disconnect\");\r\n            port.removeEventListener(\"message\", onReceive);\r\n            port = null;\r\n        },\r\n        request: function(onReceived, command, ...args) {\r\n            if (port == null) return;\r\n            callback = onReceived;\r\n\r\n            const msg = `{\"command\":\"${command}\", \"args\":\"${args??''}\"}`;\r\n            port.postMessage(msg);\r\n        }\r\n    };\r\n};\r\n\r\nconst activateScript = function iterator(parent) {\r\n    if (parent.tagName === \"TEMPLATE\") {\r\n        activateTemplateScripts(parent.content);\r\n    } else\r\n    for (let child of parent.children) {\r\n        if (child.tagName === \"SCRIPT\") {\r\n            new Function(child.textContent).call(parent);\r\n        } else iterator(child);\r\n    };\r\n};\r\n\r\nconst activateTemplateScripts = function iterator(parent) {\r\n    for (let child of parent.children) {\r\n        if (child.tagName === \"TEMPLATE\") {\r\n            iterator(child.content);\r\n        } else\r\n        if (child.tagName === \"SCRIPT\") {\r\n            refreshScript(parent, child);\r\n        }\r\n        else iterator(child);\r\n    };\r\n};\r\n\r\nconst refreshScript = function(parent, child) {\r\n    let script = document.createElement('script');\r\n    for (let attr of child.attributes) {\r\n        script.setAttribute(attr.name, attr.value)\r\n    };\r\n    script.textContent = child.textContent;\r\n    parent.replaceChild(script, child);\r\n};\r\n\r\nconst toIconHtml = function(data, size = 16) {\r\n    if (\"string\" === typeof data && data.length > 3) {\r\n        let type = data.substring(0, 3).toUpperCase();\r\n        let icon = data.substring(3);\r\n        switch (type) {\r\n            case \"SVG\": {\r\n                return `<svg width=\"${size}\" height=\"${size}\" viewBox=\"0 0 16 16\">${icon}</svg>`;\r\n            }\r\n        };\r\n    };\r\n    return \"\";\r\n};\n\n//# sourceURL=webpack:///../../commons/utils/utils.js?");

/***/ }),

/***/ "../../commons/wdp-init.js":
/*!*********************************!*\
  !*** ../../commons/wdp-init.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Service\": () => (/* binding */ Service)\n/* harmony export */ });\n/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils.js */ \"../../commons/utils/utils.js\");\n/* harmony import */ var _win_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./win-init.js */ \"../../commons/win-init.js\");\n\r\n\r\n\r\n\r\nwindow.wdp = window.wdp ?? (function () {\r\n\r\n    const loadPage = (host, page) => {\r\n        if (host?.startsWith('http')) {\r\n            let map = {};\r\n    \r\n            page.split('&').forEach(param => {\r\n                let pair = param.split('=');\r\n                map[pair[0]] = pair[1];\r\n            });\r\n            let url = `${host}/${map['pid']}/web/${map['main']}.html`;\r\n            window.open(url, '_top');\r\n        }\r\n    };\r\n\r\n    const getService = (service) => {\r\n        return _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Mediator.request(service);\r\n    }\r\n\r\n    return {\r\n        loadPage: loadPage,\r\n        getService: getService,\r\n    }\r\n})();\r\n\r\nclass Service {\r\n    #CMDS = [\"getRoot\",\"getList\"];\r\n    #REQUEST_TIMEOUT = 2000;\r\n    #port;\r\n\r\n    constructor(port) {\r\n        this.#port = port;\r\n        this.#port.onmessage = null;\r\n    }\r\n\r\n    request(cmd, args) {\r\n        return new Promise((resolve, reject) => {\r\n            if (this.#CMDS.indexOf(cmd) < 0)\r\n                reject(new Error(\"Command NotFound\"));\r\n            if (this.#port.onmessage != null)\r\n                reject(new Error(\"Service Pending\"));\r\n\r\n            let waiter = setTimeout(() => {\r\n                this.#port.onmessage = null;\r\n                reject(new Error(\"Request Timeout\"));\r\n            }, this.#REQUEST_TIMEOUT);\r\n            \r\n            this.#port.onmessage = (msg) => {\r\n                clearTimeout(waiter);\r\n                this.#port.onmessage = null;\r\n                try {\r\n                    const json = JSON.parse(msg.data);\r\n                    \r\n                    if (json.hasOwnProperty(\"result\")) resolve(json.result);\r\n                    if (json.hasOwnProperty(\"reject\")) reject(json.reject);\r\n                } catch (e) {}\r\n                reject(new Error(\"Empty Response\"));\r\n            };\r\n            this.#port.postMessage(`${cmd};${args??''}`);\r\n        });\r\n    }\r\n\r\n    close() {\r\n        this.#port.close();\r\n    }\r\n}\r\n\r\nfunction getService(name) {\r\n    const SERVICES = [\"FileSystem\"];\r\n    let REQUEST_TIMEOUT = 2000;\r\n\r\n    return new Promise((resolve, reject) => {\r\n        if (SERVICES.indexOf(name) < 0)\r\n            reject(new Error(\"Service NotFound\"));\r\n\r\n        let waiter = setTimeout(() => {\r\n            window.removeEventListener('message', listener);\r\n            reject(new Error(\"Request Timeout\"));\r\n        }, REQUEST_TIMEOUT);\r\n\r\n        const listener = function(msg) {\r\n            if (msg.data != name) return;\r\n            window.removeEventListener('message', listener);\r\n            clearTimeout(waiter);\r\n            resolve(new Service(msg.ports[0]));\r\n        }\r\n        window.addEventListener('message', listener);\r\n        window.wdp.getService(name);\r\n    });\r\n}\r\n\r\nconst loadPage = (item) => window.wdp.loadPage(item.host, item.page);\r\n\r\n_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Observer.listen('PageRequest', loadPage);\r\n_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Mediator.provide('AsService', getService);\r\n\n\n//# sourceURL=webpack:///../../commons/wdp-init.js?");

/***/ }),

/***/ "../../commons/win-init.js":
/*!*********************************!*\
  !*** ../../commons/win-init.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var commons_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! commons/utils/utils.js */ \"../../commons/utils/utils.js\");\n\r\n\r\n\r\nif (!(window instanceof Window))\r\n    throw new Error('unable to locate window object');\r\n\r\nwindow.addEventListener('resize', event => {\r\n    commons_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Observer.notify('DocumentResized', event);\r\n});\r\n\n\n//# sourceURL=webpack:///../../commons/win-init.js?");

/***/ }),

/***/ "./file-list.htm":
/*!***********************!*\
  !*** ./file-list.htm ***!
  \***********************/
/***/ ((module) => {

eval("module.exports = \"<style>\\r\\n    .container {\\r\\n      border-collapse: collapse;\\r\\n      border-spacing: 0;\\r\\n      border-style: none;\\r\\n      width: 100%;\\r\\n    }\\r\\n\\r\\n    .item:nth-child(2n+1) {\\r\\n        color: #000;\\r\\n        background-color: #EFE1CE;\\r\\n    }\\r\\n\\r\\n    .item:nth-child(even) {\\r\\n        color: #000;\\r\\n        background-color: #E0B589;\\r\\n    }\\r\\n\\r\\n    .grid {\\r\\n        display: grid;\\r\\n        grid-template-columns: 52px repeat(5, minmax(0,1fr));\\r\\n        grid-gap: 4px;\\r\\n        padding: 4px;\\r\\n    }\\r\\n\\r\\n    .item p {\\r\\n        text-overflow: ellipsis;\\r\\n        white-space: nowrap;\\r\\n        overflow: hidden;\\r\\n        margin: 0;\\r\\n    }\\r\\n\\r\\n    .item p:nth-child(1) {\\r\\n        text-align: center;\\r\\n        grid-column: 1 / 2;\\r\\n        grid-row: 1 / 3;\\r\\n        font-size: 36px;\\r\\n    }\\r\\n\\r\\n    .item p:nth-child(2) {\\r\\n        text-align: left;\\r\\n        grid-column: 2 / 7;\\r\\n        grid-row: 1;\\r\\n    }\\r\\n\\r\\n    .item p:nth-child(3) {\\r\\n        text-align: left;\\r\\n        grid-column: 2 / 6;\\r\\n        grid-row: 2;\\r\\n    }\\r\\n\\r\\n    .item p:nth-child(4) {\\r\\n        text-align: right;\\r\\n        grid-column: 6 / 7;\\r\\n        grid-row: 2;\\r\\n    }\\r\\n</style>\\r\\n\\r\\n\\r\\n<div class=\\\"container\\\">\\r\\n    <div class=\\\"item grid\\\">\\r\\n        <p>${icon}</p>\\r\\n        <p>${name}</p>\\r\\n        <p>${last}</p>\\r\\n        <p>${size}</p>\\r\\n    </div>\\r\\n</div>\\r\\n\\r\\n\\r\\n<script>\\r\\n    this.host.$htm = (function (shadow) {\\r\\n        const container = shadow.querySelector('.container');\\r\\n        const item = container.querySelector('.item').cloneNode(true);\\r\\n        const icons = [\\r\\n            'SVG<path d=\\\"M5.18 4.616a.5.5 0 0 1 .704.064L8 7.219l2.116-2.54a.5.5 0 1 1 .768.641L8.651 8l2.233 2.68a.5.5 0 0 1-.768.64L8 8.781l-2.116 2.54a.5.5 0 0 1-.768-.641L7.349 8 5.116 5.32a.5.5 0 0 1 .064-.704z\\\"/><path d=\\\"M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z\\\"/>',\\r\\n            'SVG<path d=\\\"M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z\\\"/>',\\r\\n            'SVG<path d=\\\"M7.5 5.5a.5.5 0 0 0-1 0v.634l-.549-.317a.5.5 0 1 0-.5.866L6 7l-.549.317a.5.5 0 1 0 .5.866l.549-.317V8.5a.5.5 0 1 0 1 0v-.634l.549.317a.5.5 0 1 0 .5-.866L8 7l.549-.317a.5.5 0 1 0-.5-.866l-.549.317V5.5zm-2 4.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z\\\"/><path d=\\\"M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z\\\"/>',\\r\\n        ];\\r\\n\\r\\n        function toUnit(size, unit = 0) {\\r\\n            if (size < 1000) {\\r\\n                return `${size}${([' ','K','M','G','T'])[unit]}`;\\r\\n            }\\r\\n            else if (unit == 4) return '??? ?';\\r\\n            return toUnit(Math.round(size / 1024), unit + 1);\\r\\n        }\\r\\n\\r\\n        function toIcon(type) {\\r\\n            return `<svg width=\\\"32\\\" height=\\\"32\\\" viewBox=\\\"0 0 16 16\\\">${icons[type]}</svg>`;\\r\\n        }\\r\\n\\r\\n        return {\\r\\n            init: function() {\\r\\n                container.innerHTML = '';\\r\\n            },\\r\\n            append: function(uid, type, name, last = '', size = '') {\\r\\n                if (Number.isInteger(last)) {\\r\\n                    last = new Date(last).toString().substring(0,24);\\r\\n                }\\r\\n                const node = item.cloneNode(true);\\r\\n                node.innerHTML = node.innerHTML\\r\\n                    .replace('${icon}', toIcon(parseInt(type)))\\r\\n                    .replace('${name}', name)\\r\\n                    .replace('${last}', last)\\r\\n                    .replace('${size}', toUnit(size));\\r\\n                node.setAttribute(\\\"data-id\\\", uid);\\r\\n                container.append(node);\\r\\n                return node;\\r\\n            },\\r\\n            getId: node => node.getAttribute(\\\"data-id\\\"),\\r\\n            getName: node => node.children[1].textContent,\\r\\n        };\\r\\n    })(this);\\r\\n</script>\";\n\n//# sourceURL=webpack:///./file-list.htm?");

/***/ }),

/***/ "../../commons/path/path-walk.htm":
/*!****************************************!*\
  !*** ../../commons/path/path-walk.htm ***!
  \****************************************/
/***/ ((module) => {

eval("module.exports = \"<style>\\r\\n    .path span+span:before {\\r\\n        content: \\\"›\\\";\\r\\n    }\\r\\n\\r\\n    .path span {\\r\\n        text-align: center;\\r\\n    }\\r\\n\\r\\n    .button {\\r\\n        border: none;\\r\\n        margin: 0px 2px;\\r\\n        cursor: pointer;\\r\\n        color: #f8f8f8;\\r\\n        background-color: transparent;\\r\\n        transition-duration: 0.4s;\\r\\n    }\\r\\n\\r\\n    .button:hover {\\r\\n        background-color: #010047;\\r\\n        color: white;\\r\\n    }\\r\\n</style>\\r\\n\\r\\n\\r\\n<div class=\\\"container\\\">\\r\\n    <span class=\\\"item\\\">\\r\\n        <button class=\\\"button\\\">${path}</button>\\r\\n    </span>\\r\\n</div>\\r\\n\\r\\n\\r\\n<script>\\r\\n    this.host.$htm = (function(shadow) {\\r\\n        const root = shadow.querySelector('.container');\\r\\n        const item = root.querySelector('.item').cloneNode(true);\\r\\n\\r\\n        root.innerHTML = '';\\r\\n\\r\\n        return {\\r\\n            walk: function(id, path) {\\r\\n                const span = item.cloneNode(true);\\r\\n                span.innerHTML = span.innerHTML\\r\\n                    .replace('${path}', path);\\r\\n                span.setAttribute(\\\"data-id\\\", id);\\r\\n                root.append(span);\\r\\n                return span;\\r\\n            },\\r\\n            back: function(span) {\\r\\n                while (span !== root.lastElementChild) {\\r\\n                    root.lastElementChild.remove();\\r\\n                };\\r\\n                return span.getAttribute(\\\"data-id\\\");\\r\\n            }\\r\\n        };\\r\\n    })(this);\\r\\n</script>\";\n\n//# sourceURL=webpack:///../../commons/path/path-walk.htm?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./file.js");
/******/ 	
/******/ })()
;