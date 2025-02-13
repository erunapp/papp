/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./htm/signup.htm":
/*!************************!*\
  !*** ./htm/signup.htm ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="utf-8">
    <style>
        h3 {
            font-size: 20px;
            text-align: center;
        }

        .signup_form {
            width: 84vw;
            max-width: 435px;
            background: #fff;
            border-radius: 6px;
            padding: 41px 30px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);

            form {
                margin-top: 24px;
                margin-bottom: 20px;

                .input_box {
                    position: relative;

                    label {
                        display: block;
                        font-weight: 500;
                        margin-bottom: 8px;
                    }

                    input {
                        width: -webkit-fill-available;
                        height: 56px;
                        border: 1px solid #DADAF2;
                        border-radius: 5px;
                        outline: none;
                        background: #F8F8FB;
                        font-size: 17px;
                        padding: 0 20px;
                        margin-bottom: 25px;
                        transition: 0.2s ease;

                        &:focus {
                            border-color: #626cd6;
                        }
                    }
                }
            }

            button {
                width: 100%;
                height: 56px;
                border-radius: 5px;
                border: none;
                outline: none;
                background: #626CD6;
                color: #fff;
                font-size: 18px;
                font-weight: 500;
                text-transform: uppercase;
                cursor: pointer;
                transition: 0.3s ease;
            }

            button:hover {
                background: #4954d0;
            }
        }
    </style>
</head>

<body>
    <div class="signup_form">
        <h3>회 원 확 인</h3>

        <form action="#">
            <div class="input_box">
                <label for="hostID">앨 범 이 름</label>
                <input type="text" id="hostID" name="hostID" readonly />
            </div>

            <div class="input_box">
                <label for="cellNo">회 원 번 호</label>
                <input type="text" id="cellNo" name="cellNo" />
            </div>
        </form>

        <button id="signup">Sign Up</button>
    </div>
</body>
    
${"<" + "script"}>
    this.host.\$htm = (function (self) {
        let signup = self.getElementById('signup');

        signup.addEventListener("click", e => {
            let host = self.getElementById('hostID').value;
            let cell = self.getElementById('cellNo').value;

            self.host.submit(host, cell);
        });

        return {
            setValue: function(id, val) {
                let obj = self.getElementById(id);
                obj.value = val;
                obj.placeholder = null;
            },
            setPlace: function(id, msg) {
                let obj = self.getElementById(id);
                obj.value = "";
                obj.placeholder = msg;
            }
        };
    })(this);
${"<" + "/script"}>
</html>`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./signup.js":
/*!*******************!*\
  !*** ./signup.js ***!
  \*******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignUp: () => (/* binding */ SignUp)
/* harmony export */ });
/* harmony import */ var _commons_context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../commons/context.js */ "../../commons/context.js");
/* harmony import */ var _htm_signup_htm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htm/signup.htm */ "./htm/signup.htm");



class SignUp extends _commons_context_js__WEBPACK_IMPORTED_MODULE_0__.BaseElement {
    
    constructor() {
        super(_htm_signup_htm__WEBPACK_IMPORTED_MODULE_1__["default"]);
    }

    connectedCallback() {
        this.$htm.setValue("hostID", "com.web3p.album:unu");
        this.$htm.setPlace("cellNo", "회원 번호를 입력하세요.");
    }
    
    submit(hostID, cellNo) {
        _commons_context_js__WEBPACK_IMPORTED_MODULE_0__.Channel.submit("SignUp", 0, hostID, cellNo)
        .catch(err => {
            this.$htm.setPlace("cellNo", err.message);
        });
    }
}

customElements.define("wdp-signup", SignUp, {extends:'section'});

/***/ }),

/***/ "../../commons/context.js":
/*!********************************!*\
  !*** ../../commons/context.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseElement: () => (/* binding */ BaseElement),
/* harmony export */   Channel: () => (/* binding */ Channel),
/* harmony export */   Listener: () => (/* binding */ Listener),
/* harmony export */   Provider: () => (/* binding */ Provider),
/* harmony export */   Swiper: () => (/* binding */ Swiper),
/* harmony export */   Tapper: () => (/* binding */ Tapper)
/* harmony export */ });
if (!(window instanceof Window)) {
    throw new Error('unable to resolve window object');
}

window.addEventListener("unhandledrejection", event => {
    console.error(event.reason);
}, false);

window.addEventListener("resize", event => Listener.notify('Resize', event), false);

class Tapper {
    static async detect(target, touches, threshold) {
        if (Tapper.#isTapping) {
            if (touches.length == 1) {
                Tapper.#tapper.#onDblTouch();
            } else
            if (touches.length == 2) {
                Tapper.#tapper.#onTwoTouch();
            }
            return Promise.resolve('isTapped');
        }
        Tapper.#isTapping = true;
        return new Promise(resolve => 
            Tapper.#tapper.#touchStart(target, touches, threshold, resolve)
        );
    }   // (onetouch, dbltouch, longtouch), (twotouch, thump, walk, run)
    static #tapper = new Tapper();
    static #isTapping = false;

    #TouchCancel = this.#onTouchCancel.bind(this);
    #TouchMove = this.#onTouchMove.bind(this);
    #LongTouch = this.#onLongTouch.bind(this);
    #TouchEnd = this.#onTouchEnd.bind(this);

    #resolve; #target; #threshold; #x0; #y0; #timer;

    #touchStart(target, touches, threshold, resolve) {
        this.#target = target;
        this.#threshold = Date.now() + threshold;
        this.#x0 = touches[0].pageX;
        this.#y0 = touches[0].pageY;
        this.#resolve = resolve;

        this.#target.addEventListener("touchmove", this.#TouchMove, {passive:true});
        this.#target.addEventListener("touchend", this.#TouchEnd);
        this.#target.addEventListener("touchcancel", this.#TouchCancel);

        this.#timer = setTimeout(this.#LongTouch, threshold);
    }

    #detected(action) {
        setTimeout(() => Tapper.#isTapping = false, 200);
        this.#resolve(action);
    }
    
    #onLongTouch() {
        this.#clear();
        this.#detected('longTouch');
    }
    
    #onDblTouch() {
        clearTimeout(this.#timer);
        this.#detected('dblTouch');
    }
    
    #onTwoTouch() {
        this.#clear();
        clearTimeout(this.#timer);
        this.#detected('twoTouch');
    }

    #onTouchEnd(event) {
        clearTimeout(this.#timer);
        this.#clear();

        this.#timer = setTimeout(() => {
            this.#detected('oneTouch');
        }, 300);
    }

    #onTouchMove(event) {
        let touches = event.targetTouches;
        let dx = Math.abs(touches[0].pageX - this.#x0);
        let dy = Math.abs(touches[0].pageY - this.#y0);

        if (dx > 9 || dy > 9) this.#onTouchCancel(null);
    }

    #onTouchCancel(event) {
        this.#clear();

        if (event && Math.abs(Date.now() - this.#threshold) < 50)
            this.#detected('longTouch');
        else
            this.#detected('isPanning.');
    }

    #clear() {
        this.#target.removeEventListener("touchmove", this.#TouchMove);
        this.#target.removeEventListener("touchend", this.#TouchEnd);
        this.#target.removeEventListener("touchcancel", this.#TouchCancel);
    }
}

class Swiper {
    static async detect(target, touch, threshold) {
        return new Promise((resolve, reject) => 
            new Swiper(target, touch, threshold, resolve, reject).#init()
        );
    }

    #TouchCancel = this.#onTouchCancel.bind(this);
    #TouchMove = this.#onTouchMove.bind(this);
    #TouchEnd = this.#onTouchEnd.bind(this);
    #resolve;
    #reject;
    #target;
    #threshold;
    #start;
    #x0;  #x1;
    #y0;  #y1;

    constructor(target, touch, threshold, resolve, reject) {
        this.#target = target;
        this.#threshold = threshold;
        this.#x0 = this.#x1 = touch.pageX;
        this.#y0 = this.#y1 = touch.pageY;
        this.#start = Date.now();
        this.#resolve = resolve;
        this.#reject = reject;
    }   // setTimeout(this.#TouchCancel, 5000);

    #onTouchEnd() {
        this.#clear();

        let threshold = this.#threshold;        
        let gap = Date.now() - this.#start;
        if (gap < 200) threshold /= 4;
        else if (gap < 300) threshold /= 3;
        else if (gap < 500) threshold /= 2;

        let off = this.#x1 - this.#x0;
        if (Math.abs(off) > Math.abs(this.#y1 - this.#y0)) {
            if (threshold < -off)
                this.#resolve('next');
            else
            if (threshold < off)
                this.#resolve('prev');
        }
        this.#reject('Canceled.');
    }

    #onTouchMove(event) {
        this.#x1 = event.targetTouches[0].pageX;
        this.#y1 = event.targetTouches[0].pageY;

        this.#target.style.transform = `translateX(${this.#x1 - this.#x0}px)`;
        this.#target.style.transitionDuration = '0ms';
    }

    #onTouchCancel() {
        this.#clear();
        this.#reject('Canceled.');
    }

    #init() {
        this.#target.addEventListener("touchmove", this.#TouchMove, {passive:true});
        this.#target.addEventListener("touchend", this.#TouchEnd);
        this.#target.addEventListener("touchcancel", this.#TouchCancel);
    }

    #clear() {
        this.#target.removeEventListener("touchmove", this.#TouchMove);
        this.#target.removeEventListener("touchend", this.#TouchEnd);
        this.#target.removeEventListener("touchcancel", this.#TouchCancel);
    }
};

const Listener = (function() {
    const events = {}; // PageRequest, PathReturn, PathAppend

    return {
        listen: function(event, listener) {
            let listeners = events[event];

            if (!listeners) {
                events[event] = [listener];
            } else {
                listeners.push(listener);
            }
        },
        notify: function(event, ...data) {
            events[event] ?.forEach(listener => listener(...data));
        },
        remove: function(event, listener) {
            let listeners = events[event] ?? [];

            let pos = listeners.indexOf(listener);
            if (pos >= 0) listeners.splice(pos, 1);
            if (listeners.length == 0) delete events[event];
        },
    };
})();

const Provider = (function() {
    const topics = {}; // Store

    return {
        supply: function(topic, provider, force = false) {
            if (!topics[topic] || force)
                topics[topic] = provider;
        },
        request: function(topic, ...data) {
            let provider = topics[topic];
            return provider ? provider(...data) : null;
        },
        remove: function(topic, provider) {
            if (provider == topics[topic])
                delete topics[topic];
        },
    };
})();

window.Web3P_Channel$ = window.Web3P_Channel$ ?? {
    connect: () => {},
};

class Channel {
    static #handlers = {};
    static #port;
    static #rid = 0;

    static {
        const CHANNEL = "Web3P_Channel$", EVENT = "message";

        const listener = msg => {
            if (msg.data != CHANNEL) return;
            window.removeEventListener(EVENT, listener);

            this.#port = msg.ports[0];
            this.#port.onmessage = null;
            this.#port.addEventListener(EVENT, Channel.onMessage);
        }
        window.addEventListener(EVENT, listener);
        window.Web3P_Channel$.connect(CHANNEL);
    }

    static clean() {
        this.#handlers = {};
    }

    static supply(task, provider) {
        if (isNaN(task))
            this.#handlers[task] = provider;
    }
    
    static onMessage(msg) {
        const jso = JSON.parse(msg.data);
        const key = jso.rid;
        const map = this.#handlers;

        if (Object.hasOwn(map, key)) map[key](jso);
    }

    static commit(task, wait, onResolve, onReject, ...args) {
        this.submit(task, wait, args)
        .then(result => {
            if (onResolve != null) onResolve(result);
        })
        .catch(error => {
            if (onReject != null) onReject(error.message);
        });
    }

    //  if (wait == 0) -> notify: return 없음 => handlers에서 제거 ???해결요???
    static submit(task, wait, ...args) {
        return new Promise((resolve, reject) => {
            const rid = ++this.#rid;
            const timer = wait > 0 ?
                setTimeout(() => {
                    delete Channel.#handlers[rid];
                    reject(new Error("HTTP-408", {cause: 408}));  // Request Timeout
                }, wait) : 0;
        
            this.#handlers[rid] = jso => {
                clearTimeout(timer);
                delete Channel.#handlers[jso.rid];
                
                if (jso.hasOwn("result")) resolve(jso.result);   // Internal Server Error
                if (jso.hasOwn("reject")) reject(new Error(jso.reject, {cause: 500}));
                reject(new Error("HTTP-204", {cause: 204}));  // No Content
            };
            this.#port.postMessage(this.#json(rid, wait, task, args));
            this.#port.start();
        });
    }

    static #json(rid, wait, task, args) {
        let reply = wait > 0;
        let list = args.map(a => `"${a}"`).join();
        return `{"rid":${rid},"reply":${reply},"task":"${task}","args":[${list}]}`;
    }

    static close() {
        this.#port.close();
    }
};

class BaseElement extends HTMLElement {
    
    constructor(html) {
        super();
        // fetch(html)
        // .then(response => response.text())
        // .then(data => {
        //     this.attachShadow({mode:"open"}).innerHTML = data;
        //     this.#activateScript(this.shadowRoot);
        // });
        
		this.attachShadow({mode:"open"}).innerHTML = html;
		this.#activateScript(this.shadowRoot);
    }

    #activateScript(node) {
        if (node.tagName === "TEMPLATE") {
            this.#activateTemplateScripts(node.content);
        } else
        for (let child of node.children) {
            if (child.tagName === "SCRIPT") {
                new Function(child.textContent).call(node);
            }
            else this.#activateScript(child);
        };
    };

    #activateTemplateScripts(node) {
        for (let child of node.children) {
            if (child.tagName === "TEMPLATE") {
                this.#activateTemplateScripts(child.content);
            } else
            if (child.tagName === "SCRIPT") {
                this.#refreshScript(node, child);
            }
            else this.#activateTemplateScripts(child);
        };
    };
    
    #refreshScript(node, child) {
        let script = document.createElement('script');
        for (let attr of child.attributes) {
            script.setAttribute(attr.name, attr.value)
        };
        script.textContent = child.textContent;
        node.replaceChild(script, child);
    };
};

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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _signup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.js */ "./signup.js");


})();

/******/ })()
;
//# sourceMappingURL=main.js.map