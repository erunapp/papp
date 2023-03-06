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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Album\": () => (/* binding */ Album)\n/* harmony export */ });\n/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context.js */ \"./context.js\");\n/* harmony import */ var _htm_album_htm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htm/album.htm */ \"./htm/album.htm\");\n\r\n\r\n\r\nclass Album extends _context_js__WEBPACK_IMPORTED_MODULE_0__.BaseElement {\r\n    #InitList = this.#initList.bind(this);\r\n    #ShowList = this.#showList.bind(this);\r\n    #ItemSelect = this.#onClickItem.bind(this);\r\n    \r\n    constructor() {\r\n        super(_htm_album_htm__WEBPACK_IMPORTED_MODULE_1__);\r\n    }\r\n\r\n    connectedCallback() {\r\n        _context_js__WEBPACK_IMPORTED_MODULE_0__.Listener.listen('InitList', this.#InitList);\r\n        _context_js__WEBPACK_IMPORTED_MODULE_0__.Listener.listen('ShowList', this.#ShowList);\r\n    }\r\n\r\n    disconnectedCallback() {\r\n        _context_js__WEBPACK_IMPORTED_MODULE_0__.Listener.remove('ShowList', this.#ShowList);\r\n        _context_js__WEBPACK_IMPORTED_MODULE_0__.Listener.remove('InitList', this.#InitList);\r\n    }\r\n    \r\n    #initList() {\r\n        this.$htm.init();\r\n    }\r\n    \r\n    #showList(jso) {\r\n        if (jso.hasOwnProperty(\"list\")) {\r\n            const month = jso.month;\r\n    \r\n            jso.list.forEach(date => {\r\n                let parent = this.$htm.addList(date.day);\r\n\r\n                for (let idx = 0; idx < date.thumbs.length; idx++) {\r\n                    let name = `../res/thumbs/${month}/img/${date.thumbs[idx]}`;\r\n                    let node = this.$htm.addItem(parent, idx, name);\r\n                    node.addEventListener(\"click\", this.#ItemSelect);\r\n                }\r\n            });\r\n        }\r\n    }\r\n\r\n    #onClickItem(event) {\r\n        let name = this.$htm.getName(event.currentTarget);\r\n    }\r\n};\r\n\r\ncustomElements.define(\"wdp-album\", Album, {extends:'section'});\n\n//# sourceURL=webpack:///./album.js?");

/***/ }),

/***/ "./context.js":
/*!********************!*\
  !*** ./context.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BaseElement\": () => (/* binding */ BaseElement),\n/* harmony export */   \"Channel\": () => (/* binding */ Channel),\n/* harmony export */   \"Listener\": () => (/* binding */ Listener),\n/* harmony export */   \"Provider\": () => (/* binding */ Provider)\n/* harmony export */ });\nif (!(window instanceof Window))\r\n    throw new Error('unable to locate window object');\r\n\r\nwindow.addEventListener(\"unhandledrejection\", event => {\r\n    console.error(event.reason);\r\n    event.preventDefault();\r\n}, false);\r\n\r\n//  -------------------------------------------------------------------------------------\r\nwindow._Channel$ = window._Channel$ ?? {\r\n    getChannel: () => {},\r\n};\r\nconst channels = {};\r\n//  -------------------------------------------------------------------------------------\r\n\r\nconst Listener = (function() {\r\n    const topics = {}; // PageRequest, PathReturn, PathAppend\r\n\r\n    return {\r\n        notify: function(topic, ...data) {\r\n            topics[topic] ?.forEach(listener => listener(...data));\r\n        },\r\n        listen: function(topic, listener) {\r\n            let listeners = topics[topic];\r\n\r\n            if (!listeners) {\r\n                topics[topic] = [listener];\r\n            } else {\r\n                listeners.push(listener);\r\n            }\r\n        },\r\n        remove: function(topic, listener) {\r\n            let listeners = topics[topic] ?? [];\r\n\r\n            let pos = listeners.indexOf(listener);\r\n            if (pos >= 0) listeners.splice(pos, 1);\r\n            if (listeners.length == 0) delete topics[topic];\r\n        },\r\n    };\r\n})();\r\n\r\nconst Provider = (function() {\r\n    const topics = {}; // Store\r\n\r\n    return {\r\n        provide: function(topic, provider, force = false) {\r\n            if (!topics[topic] || force)\r\n                topics[topic] = provider;\r\n        },\r\n        request: function(topic, ...data) {\r\n            let provider = topics[topic];\r\n            return provider ? provider(...data) : null;\r\n        },\r\n        remove: function(topic, provider) {\r\n            if (provider == topics[topic])\r\n                delete topics[topic];\r\n        },\r\n    };\r\n})();\r\n\r\nclass Channel {\r\n    static async asOpen(name) {\r\n        const channel =  new Promise((resolve, reject) => {\r\n            let timer = setTimeout(() => {\r\n                window.removeEventListener('message', listener);\r\n                reject(new Error(\"Request Timeout\"));\r\n            }, 3000);\r\n\r\n            const listener = msg => {\r\n                if (msg.data != name) return;\r\n                clearTimeout(timer);\r\n                window.removeEventListener('message', listener);\r\n                resolve(new Channel(name, msg.ports[0]));\r\n            }\r\n            window.addEventListener('message', listener);\r\n            window._Channel$.getChannel(name);\r\n        });\r\n        \r\n        if (!channels.hasOwnProperty(name))\r\n            channels[name] = await channel.catch(reject => Promise.reject(reject));\r\n\r\n        return Promise.resolve(channels[name]);\r\n    };\r\n//  -------------------------------------------------------------------------------------\r\n    #name;\r\n    #port;\r\n    #rid = 0;\r\n\r\n    constructor(name, port) {\r\n        this.#name = name;\r\n        this.#port = port;\r\n        this.#port.onmessage = null;\r\n    }\r\n\r\n    asGet(cmd, ...args) {\r\n        return new Promise((resolve, reject) => {\r\n            const rid = ++this.#rid;\r\n            const port = this.#port;\r\n\r\n            let timer = setTimeout(() => {\r\n                port.removeEventListener(\"message\", listener);\r\n                reject(new Error(\"Request Timeout\"));\r\n            }, 3000);\r\n        \r\n            const listener = function(msg) {\r\n                const json = JSON.parse(msg.data);\r\n                if (rid != json.rid) return;\r\n\r\n                clearTimeout(timer);\r\n                port.removeEventListener(\"message\", listener);\r\n                \r\n                if (json.hasOwnProperty(\"result\")) resolve(json.result);\r\n                if (json.hasOwnProperty(\"reject\")) reject(json.reject);\r\n                reject(new Error(\"Empty Response\"));\r\n            };\r\n            port.addEventListener(\"message\", listener);\r\n            port.postMessage(this.#toJson(rid, cmd, args));\r\n            port.start();\r\n        });\r\n    }\r\n\r\n    #toJson(rid, cmd, args) {\r\n        let list = args.map(a => `\"${a}\"`).join();\r\n        return `{\"rid\":${rid},\"cmd\":\"${cmd}\",\"args\":[${list}]}`;\r\n    }\r\n\r\n    close() {\r\n        this.#port.close();\r\n        delete channels[this.#name];\r\n    }\r\n};\r\n\r\nclass BaseElement extends HTMLElement {\r\n    \r\n    constructor(shadowHTML) {\r\n        super();\r\n        \r\n\t\tthis.attachShadow({mode:\"open\"}).innerHTML = shadowHTML;\r\n\t\tthis.#activateScript(this.shadowRoot);\r\n    }\r\n\r\n    #activateScript(node) {\r\n        if (node.tagName === \"TEMPLATE\") {\r\n            this.#activateTemplateScripts(node.content);\r\n        } else\r\n        for (let child of node.children) {\r\n            if (child.tagName === \"SCRIPT\") {\r\n                new Function(child.textContent).call(node);\r\n            }\r\n            else this.#activateScript(child);\r\n        };\r\n    };\r\n\r\n    #activateTemplateScripts(node) {\r\n        for (let child of node.children) {\r\n            if (child.tagName === \"TEMPLATE\") {\r\n                this.#activateTemplateScripts(child.content);\r\n            } else\r\n            if (child.tagName === \"SCRIPT\") {\r\n                this.#refreshScript(node, child);\r\n            }\r\n            else this.#activateTemplateScripts(child);\r\n        };\r\n    };\r\n    \r\n    #refreshScript(node, child) {\r\n        let script = document.createElement('script');\r\n        for (let attr of child.attributes) {\r\n            script.setAttribute(attr.name, attr.value)\r\n        };\r\n        script.textContent = child.textContent;\r\n        node.replaceChild(script, child);\r\n    };\r\n};\n\n//# sourceURL=webpack:///./context.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Picker\": () => (/* binding */ Picker)\n/* harmony export */ });\n/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context.js */ \"./context.js\");\n/* harmony import */ var _htm_picker_htm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htm/picker.htm */ \"./htm/picker.htm\");\n\r\n\r\n\r\nclass Picker extends _context_js__WEBPACK_IMPORTED_MODULE_0__.BaseElement {\r\n    #menu;\r\n    #menuItems;\r\n    #menuBorder;\r\n    #year;\r\n    #cur;\r\n    #MenuSelect = this.#onClickMenuItem.bind(this);\r\n    #Resize = this.#onResize.bind(this);\r\n    \r\n    constructor() {\r\n        super(_htm_picker_htm__WEBPACK_IMPORTED_MODULE_1__);\r\n\r\n        window.addEventListener(\"resize\", this.#Resize);\r\n    }\r\n\r\n    connectedCallback() {\r\n        const frame = this.shadowRoot.querySelector(\".frame\");\r\n        this.#menu = frame.querySelector(\".menu\");\r\n        this.#menuItems = frame.querySelectorAll(\".menu_item\");\r\n        this.#menuBorder = frame.querySelector(\".menu_border\");\r\n\r\n        this.#year = frame.querySelector(\"#year\");\r\n        this.#cur = new Date().toISOString().substring(0, 7);\r\n        this.#year.value = this.#cur.substring(0, 4);\r\n\r\n        let index = this.#cur.substring(5,7) - 1;\r\n        this.#onClickMenuItem(this.#menuItems[index], index);\r\n\r\n        this.#menuItems.forEach((item, index) => {\r\n            item.addEventListener(\"click\", () => this.#MenuSelect(item, index));\r\n        });\r\n    }\r\n\r\n    disconnectedCallback() {\r\n    }\r\n    \r\n    #updateList(month) {        \r\n        _context_js__WEBPACK_IMPORTED_MODULE_0__.Listener.notify('InitList');\r\n\r\n        _context_js__WEBPACK_IMPORTED_MODULE_0__.Channel.asOpen(\"FileService\").then(channel => {\r\n            const zip = `/thumbs/${month}.zip`;\r\n            channel.asGet(\"extractRes\", zip).then(() => {\r\n                const file = `/thumbs/${month}/list.json`;\r\n                channel.asGet(\"getJsonRes\", file).then(json => {\r\n                    _context_js__WEBPACK_IMPORTED_MODULE_0__.Listener.notify('ShowList', json);\r\n                }).catch(e => console.error(file + ': ' + e.message));\r\n            }).catch(e => console.error(zip + ': ' + e.message));\r\n        }).catch(e => console.error('FileService: ' + e.message));\r\n    }\r\n    \r\n    #onClickMenuItem(item, index) {\r\n        this.#menu.style.removeProperty(\"--timeOut\");\r\n        const activeItem = this.#menu.querySelector(\".active\");\r\n\r\n        if (item == activeItem) {\r\n            if (this.#year.value != this.#cur.substr(0,4)) {\r\n                this.#cur = this.#year.value + this.#cur.substr(5,3);\r\n                this.#updateList(this.#cur);\r\n            }\r\n            return;\r\n        }\r\n        this.#cur = this.#year.value + (index < 9 ? '-0' : '-') + (index + 1);\r\n        this.#updateList(this.#cur);\r\n\r\n        if (activeItem) {\r\n            activeItem.classList.remove(\"active\");\r\n        }\r\n        item.classList.add(\"active\");\r\n        this.#offsetMenuBorder(item);\r\n    }\r\n    \r\n    #offsetMenuBorder(element) {\r\n        const offsetActiveItem = element.getBoundingClientRect();\r\n        const left = Math.floor(offsetActiveItem.left - this.#menu.offsetLeft -\r\n            (this.#menuBorder.offsetWidth - offsetActiveItem.width) / 2) + \"px\";\r\n        this.#menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;\r\n    }\r\n\r\n    #onResize() {\r\n        const activeItem = this.#menu.querySelector(\".active\");\r\n    \r\n        this.#offsetMenuBorder(activeItem);\r\n        this.#menu.style.setProperty(\"--timeOut\", \"none\");\r\n    }\r\n};\r\n\r\ncustomElements.define(\"wdp-picker\", Picker, {extends:'section'});\n\n//# sourceURL=webpack:///./picker.js?");

/***/ }),

/***/ "./htm/album.htm":
/*!***********************!*\
  !*** ./htm/album.htm ***!
  \***********************/
/***/ ((module) => {

eval("module.exports = \"<style>\\r\\n  .list {\\r\\n    position: relative;\\r\\n    display: flex;\\r\\n    flex-flow: row wrap;\\r\\n    justify-content: space-between;\\r\\n    padding: 3px;\\r\\n    background-color: var(--back-color);\\r\\n  }\\r\\n\\r\\n  .date {\\r\\n    position: absolute;\\r\\n    top: 2px;\\r\\n    left: 10px;\\r\\n    opacity: 0.6;\\r\\n    z-index: 2;\\r\\n    font-size: 1.6em;\\r\\n    font-weight: 800;\\r\\n  }\\r\\n\\r\\n  .item {\\r\\n    margin: 2px;\\r\\n    position: relative;\\r\\n    background-color: var(--item-color);\\r\\n  }\\r\\n\\r\\n  .item > img {\\r\\n    width: 114px;     /* 3/2 [114 232 350] : 6/6 [104 220 336] */\\r\\n    height: 114px;\\r\\n  }\\r\\n\\r\\n  .item > svg {\\r\\n    position: absolute;\\r\\n    top: 25px;\\r\\n    left: 25px;\\r\\n    stroke: currentColor;\\r\\n    stroke-width: 3;\\r\\n    stroke-opacity: 0.4;\\r\\n    fill: none;\\r\\n    z-index: 1;\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<div class=\\\"frame\\\">\\r\\n  <div class=\\\"list\\\">\\r\\n    <span class=\\\"date\\\">#</span>\\r\\n  </div>\\r\\n\\r\\n  <div class=\\\"item\\\">\\r\\n      <img src=\\\"#\\\" alt=\\\"#\\\">\\r\\n      <svg width=\\\"64\\\" height=\\\"64\\\"><use href=\\\"#play\\\"/></svg>\\r\\n  </div>\\r\\n</div>\\r\\n\\r\\n<svg style=\\\"display: none\\\">\\r\\n  <symbol id=\\\"play\\\" viewBox=\\\"0 0 24 24\\\">\\r\\n    <path d=\\\"M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z\\\" />\\r\\n  </symbol>\\r\\n</svg>\\r\\n\\r\\n<script>\\r\\n  this.host.$htm = (function (shadow) {\\r\\n    const frame = shadow.querySelector('.frame');\\r\\n    const list = frame.querySelector('.list').cloneNode(true);\\r\\n    const item = frame.querySelector('.item').cloneNode(true);\\r\\n\\r\\n    frame.innerHTML = '';\\r\\n    return {\\r\\n        init: function() {\\r\\n          frame.innerHTML = '';\\r\\n        },\\r\\n        addList: function(day) {\\r\\n            const node = list.cloneNode(true);\\r\\n            node.children[0].innerText = day;\\r\\n            frame.append(node);\\r\\n            return node;\\r\\n        },\\r\\n        addItem: function(list, idx, src) {\\r\\n            const node = item.cloneNode(true);\\r\\n            node.children[0].alt = idx;\\r\\n            node.children[0].src = src;\\r\\n            if (src.substr(src.length-5,1) == \\\"0\\\")\\r\\n              node.children[1].style.display = \\\"none\\\";\\r\\n            list.append(node);\\r\\n            return node;\\r\\n        },\\r\\n        getName: node => node.children[0].src,\\r\\n    };\\r\\n  })(this);\\r\\n</script>\";\n\n//# sourceURL=webpack:///./htm/album.htm?");

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

eval("module.exports = \"<style>\\r\\n  * {\\r\\n    --bgColorMenu: #1d1d27;\\r\\n    --duration: 0.4s;\\r\\n  }\\r\\n\\r\\n  .root {\\r\\n    display: flex;\\r\\n    overflow: hidden;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    background-color: #ffb457;\\r\\n    -webkit-tap-highlight-color: transparent;\\r\\n    transition: background-color var(--duration);\\r\\n  }\\r\\n\\r\\n  input[type=\\\"number\\\"] {\\r\\n    width: 36px;\\r\\n    border: none;\\r\\n    font-size: 0.6em;\\r\\n  }\\r\\n\\r\\n  .menu {\\r\\n    margin: 0;\\r\\n    padding: 0 8px;\\r\\n    display: flex;\\r\\n    width: 100%;\\r\\n    font-size: 1.5em;\\r\\n    position: relative;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    background-color: var(--bgColorMenu);\\r\\n  }\\r\\n\\r\\n  .menu_item {\\r\\n    all: unset;\\r\\n    flex: 1 1 20px;\\r\\n    z-index: 100;\\r\\n    display: flex;\\r\\n    position: relative;\\r\\n    border-radius: 50%;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    padding: 0.25em 0;\\r\\n    transition: transform var(--timeOut, var(--duration));\\r\\n  }\\r\\n\\r\\n  .menu_item::before {\\r\\n    content: \\\"\\\";\\r\\n    z-index: -1;\\r\\n    width: 50px;\\r\\n    height: 50px;\\r\\n    border-radius: 50%;\\r\\n    position: absolute;\\r\\n    transform: scale(0);\\r\\n    transition: background-color var(--duration), transform var(--duration);\\r\\n  }\\r\\n\\r\\n  .menu_item.active::before {\\r\\n    transform: scale(0.6);\\r\\n    background-color: var(--bgColorItem);\\r\\n  }\\r\\n\\r\\n  .icon {\\r\\n    width: 20px;\\r\\n    height: 20px;\\r\\n    fill: #ffffff;\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<div class=\\\"frame\\\">\\r\\n  <input type=\\\"number\\\" id=\\\"year\\\" value=\\\"2023\\\" min=\\\"1950\\\" max=\\\"2050\\\" size=\\\"4\\\" required />\\r\\n  <menu class=\\\"menu\\\">\\r\\n    <button class=\\\"menu_item\\\" style=\\\"--bgColorItem: #e42313\\\">\\r\\n      <svg class=\\\"icon\\\" viewBox=\\\"0 0 200 200\\\">\\r\\n        <polygon points=\\\"72.2,150.9 72.2,134.4 92.7,134.4 92.7,64.6 73.5,64.6 73.5,48.3 111,48.3 111,134.4 134.4,134.4 128.4,150.9\\\" />\\r\\n      </svg>\\r\\n    </button>\\r\\n    <button class=\\\"menu_item\\\" style=\\\"--bgColorItem: #4ab14e\\\">\\r\\n      <svg class=\\\"icon\\\" viewBox=\\\"0 0 200 200\\\">\\r\\n        <path d=\\\"M62.5,62.2c8.9-8.7,22.8-15.5,37-15.5c22.9,0,35.2,14.2,35.2,29.9c0,13.9-6.8,23.4-24.1,39.9l-18.7,17.9v0.2h47.3l-5.8,16.3H66.4V137l26.3-26C111.8,91.9,116,86.3,116,78.2c0-9.2-7.6-14.7-17.3-14.7c-8.7,0-17.9,4.5-24.4,10.8L62.5,62.2z\\\" />\\r\\n      </svg>\\r\\n    </button>\\r\\n    <button class=\\\"menu_item\\\" style=\\\"--bgColorItem: #0072ba\\\">\\r\\n      <svg class=\\\"icon\\\" viewBox=\\\"0 0 200 200\\\">\\r\\n        <path d=\\\"M62.2,138.6L74.6,126c6.8,6.6,15.2,10,23.1,10c11.8,0,20.2-7.6,20.2-16.8c0-11.8-11-16.8-22.3-16.8c-3.2,0-6.6,0.5-9.5,1V90.5l25.7-25.7H68.5V48.3h66.7v12.9l-26.3,26.2v0.3c15.2,2.4,28.1,13.1,28.1,31.2c0,19.4-17.6,33.9-38.6,33.9C81.6,152.8,70.4,147,62.2,138.6\\\" />\\r\\n      </svg>\\r\\n    </button>\\r\\n    <button class=\\\"menu_item\\\" style=\\\"--bgColorItem: #17bcef\\\">\\r\\n      <svg class=\\\"icon\\\" viewBox=\\\"0 0 200 200\\\">\\r\\n        <polygon points=\\\"59.9,128.1 59.9,114.2 86.6,48.3 106.3,48.3 79.8,112.1 79.8,112.3 108.2,112.3 108.2,84.3 126.3,84.3 126.3,112.3 142.5,112.3 136.8,128.1 126.3,128.1 126.3,150.9 108.2,150.9 108.2,128.1\\\" />\\r\\n      </svg>\\r\\n    </button>\\r\\n    <button class=\\\"menu_item\\\" style=\\\"--bgColorItem: #935130\\\">\\r\\n      <svg class=\\\"icon\\\" viewBox=\\\"0 0 200 200\\\">\\r\\n        <path d=\\\"M62.2,138.6L74.6,126c7.1,6.6,15.2,9.7,23.4,9.7c11.8,0,20.7-7.1,20.7-17.8c0-9.2-7.6-16.3-19.4-16.3c-5,0-11.3,1.8-16.3,5.2l-14.7-1.3l2.6-57.2h64.6l-6,16.5h-43l-1.3,23.9h0.2c5.2-2.6,11.8-3.9,17.3-3.9c17.6,0,35.2,11.8,35.2,32.8c0,18.7-15.2,35.2-39.1,35.2C83.2,152.8,70.9,147.5,62.2,138.6\\\" />\\r\\n      </svg>\\r\\n    </button>\\r\\n    <button class=\\\"menu_item\\\" style=\\\"--bgColorItem: #ef7f1f\\\">\\r\\n      <svg class=\\\"icon\\\" viewBox=\\\"0 0 200 200\\\">\\r\\n        <path d=\\\"M81.1,117.1c0,10,7.9,18.9,19.4,18.9c11.3,0,19.1-8.9,19.1-18.9c0-10.5-7.6-19.1-19.1-19.1C88.7,97.9,81.1,106.6,81.1,117.1M61.9,114.2c0-15.2,6.6-28.1,22.6-48.6l14.9-18.9l20.7,1.6L89,85.6h0.3c5-2.6,10.2-3.7,15.5-3.7c16.5,0,33.9,12.6,33.9,34.4c0,20-15.2,36.5-38.6,36.5C76.1,152.8,61.9,133.9,61.9,114.2\\\" />\\r\\n      </svg>\\r\\n    </button>\\r\\n    <button class=\\\"menu_item\\\" style=\\\"--bgColorItem: #953d91\\\">\\r\\n      <svg class=\\\"icon\\\" viewBox=\\\"0 0 200 200\\\">\\r\\n        <polygon points=\\\"68.2,64.8 68.2,48.3 138.3,48.3 138.3,61.9 101.8,150.9 80.9,150.9 117.3,64.8\\\" />\\r\\n      </svg>\\r\\n    </button>\\r\\n    <button class=\\\"menu_item\\\" style=\\\"--bgColorItem: #ffce18\\\">\\r\\n      <svg class=\\\"icon\\\" viewBox=\\\"0 0 200 200\\\">\\r\\n        <path d=\\\"M82.7,76.4c0,7.6,5.8,14.2,17.9,14.2c11.8,0,17.8-6.6,17.8-14.2c0-7.3-6-13.9-17.8-13.9C88.5,62.5,82.7,69,82.7,76.4M80.9,121.8c0,7.9,7.1,15.2,19.9,15.2c12.6,0,19.7-7.3,19.7-15.2c0-7.6-7.1-15-19.7-15C87.9,106.8,80.9,114.2,80.9,121.8M61.7,122.1c0-10.8,7.9-20.2,17.6-23.9v-0.2C69.3,94.2,64,84.5,64,75.3c0-15.2,14.2-28.6,36.8-28.6c22.3,0,36.5,13.4,36.5,28.6c0,9.2-5.2,18.9-14.9,22.6v0.2c9.5,3.7,17.3,13.1,17.3,23.9c0,18.6-15.7,30.7-38.8,30.7C77.4,152.8,61.7,140.7,61.7,122.1\\\" />\\r\\n      </svg>\\r\\n    </button>\\r\\n    <button class=\\\"menu_item\\\" style=\\\"--bgColorItem: #aeaead\\\">\\r\\n      <svg class=\\\"icon\\\" viewBox=\\\"0 0 200 200\\\">\\r\\n        <path d=\\\"M81.9,82.4c0,10.5,7.6,19.1,19.2,19.1c11.5,0,19.1-8.7,19.1-19.1c0-10-7.6-18.9-19.1-18.9C89.8,63.5,81.9,72.4,81.9,82.4M63,83.2c0-20.2,15.2-36.5,38.6-36.5c23.9,0,38.1,18.9,38.1,38.6c0,15.2-6.6,28.1-22.6,48.6l-15,18.9l-20.7-1.8l31.2-37l-0.2-0.2c-5,2.9-10.2,3.9-15.5,3.9C80.3,117.6,63,104.7,63,83.2\\\" />\\r\\n      </svg>\\r\\n    </button>\\r\\n    <button class=\\\"menu_item\\\" style=\\\"--bgColorItem: #bfd22a\\\">\\r\\n      <svg class=\\\"icon\\\" viewBox=\\\"0 0 200 200\\\">\\r\\n        <path d=\\\"M108.7,99.7c0,22.3,6.8,36.2,20.7,36.2c13.9,0,21-13.9,21-36.2c0-22.3-7.1-36.5-21-36.5C115.5,63.2,108.7,77.4,108.7,99.7M89.8,99.7c0-32.8,14.7-53,39.6-53c25.2,0,39.9,20.2,39.9,53c0,32.8-14.7,53-39.9,53C104.5,152.8,89.8,132.6,89.8,99.7M32,64.8l5.8-16.5H69v102.6H50.7V64.8H32z\\\" />\\r\\n      </svg>\\r\\n    </button>\\r\\n    <button class=\\\"menu_item\\\" style=\\\"--bgColorItem: #79c8ca\\\">\\r\\n      <svg class=\\\"icon\\\" viewBox=\\\"0 0 200 200\\\">\\r\\n        <path d=\\\"M101.1,64.8l5.8-16.5h31.2v102.6h-18.6V64.8H101.1z\\\" />\\r\\n        <path d=\\\"M49.1,64.8l6-16.5h31.2v102.6H67.7V64.8H49.1z\\\" />\\r\\n      </svg>\\r\\n    </button>\\r\\n    <button class=\\\"menu_item\\\" style=\\\"--bgColorItem: #adc0e4\\\">\\r\\n      <svg class=\\\"icon\\\" viewBox=\\\"0 0 200 200\\\">\\r\\n        <path d=\\\"M87.9,62.5c8.7-8.9,22.6-15.8,36.8-15.8c22.8,0,35.2,14.2,35.2,29.9c0,13.9-6.8,23.4-24.1,39.9l-18.6,17.9v0.2h47.5l-6,16.3H91.6V137l26.5-26c19.1-18.9,23.1-24.7,23.1-32.8c0-9.2-7.6-14.7-17.3-14.7c-8.7,0-17.6,4.5-24.4,10.8L87.9,62.5z\\\" />\\r\\n        <path d=\\\"M31.8,64.8l5.8-16.5h31.2v102.6H50.4V64.8H31.8z\\\" />\\r\\n      </svg>\\r\\n    </button>\\r\\n  </menu>\\r\\n  <div class=\\\"menu_border\\\"></div>\\r\\n</div>\";\n\n//# sourceURL=webpack:///./htm/picker.htm?");

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