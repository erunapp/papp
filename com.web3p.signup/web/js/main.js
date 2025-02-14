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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZUFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsRUFBRSxnQkFBZ0I7QUFDbEI7QUFDQTtBQUNBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SDZDO0FBQzdCO0FBQ25DO0FBQ08scUJBQXFCLDREQUFXO0FBQ3ZDO0FBQ0E7QUFDQSxjQUFjLHVEQUFHO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFPO0FBQ2Y7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsa0JBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEIvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUyxZQUFZLEtBQUssS0FBSztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLGFBQWE7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxvQkFBb0I7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLGFBQWE7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDO0FBQ0Q7QUFDTztBQUNQLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxXQUFXLEtBQUs7QUFDbEUsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUU7QUFDakUsd0VBQXdFLFdBQVc7QUFDbkYsOENBQThDLFdBQVcsS0FBSztBQUM5RDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsRUFBRTtBQUN2QyxpQkFBaUIsUUFBUSxJQUFJLFdBQVcsTUFBTSxXQUFXLEtBQUssWUFBWSxLQUFLLEVBQUU7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxZQUFZO0FBQzlDO0FBQ0EsWUFBWTtBQUNaO0FBQ0EscUJBQXFCLFlBQVk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDbldBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9odG0vc2lnbnVwLmh0bSIsIndlYnBhY2s6Ly8vLi9zaWdudXAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NvbW1vbnMvY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBgPCFET0NUWVBFIGh0bWw+XHJcbjxodG1sIGxhbmc9XCJrb1wiPlxyXG48aGVhZD5cclxuICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiPlxyXG4gICAgPHN0eWxlPlxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2lnbnVwX2Zvcm0ge1xyXG4gICAgICAgICAgICB3aWR0aDogODR2dztcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA0MzVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA0MXB4IDMwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcblxyXG4gICAgICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIC5pbnB1dF9ib3gge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjREFEQUYyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGOEY4RkI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzYyNmNkNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2MjZDRDY7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzQ5NTRkMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIDwvc3R5bGU+XHJcbjwvaGVhZD5cclxuXHJcbjxib2R5PlxyXG4gICAgPGRpdiBjbGFzcz1cInNpZ251cF9mb3JtXCI+XHJcbiAgICAgICAgPGgzPu2ajCDsm5Ag7ZmVIOyduDwvaDM+XHJcblxyXG4gICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImhvc3RJRFwiPuyVqCDrspQg7J20IOumhDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImhvc3RJRFwiIG5hbWU9XCJob3N0SURcIiByZWFkb25seSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dF9ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjZWxsTm9cIj7tmowg7JuQIOuyiCDtmLg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjZWxsTm9cIiBuYW1lPVwiY2VsbE5vXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICA8YnV0dG9uIGlkPVwic2lnbnVwXCI+U2lnbiBVcDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbjwvYm9keT5cclxuICAgIFxyXG4ke1wiPFwiICsgXCJzY3JpcHRcIn0+XHJcbiAgICB0aGlzLmhvc3QuXFwkaHRtID0gKGZ1bmN0aW9uIChzZWxmKSB7XHJcbiAgICAgICAgbGV0IHNpZ251cCA9IHNlbGYuZ2V0RWxlbWVudEJ5SWQoJ3NpZ251cCcpO1xyXG5cclxuICAgICAgICBzaWdudXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaG9zdCA9IHNlbGYuZ2V0RWxlbWVudEJ5SWQoJ2hvc3RJRCcpLnZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgY2VsbCA9IHNlbGYuZ2V0RWxlbWVudEJ5SWQoJ2NlbGxObycpLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgc2VsZi5ob3N0LnN1Ym1pdChob3N0LCBjZWxsKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc2V0VmFsdWU6IGZ1bmN0aW9uKGlkLCB2YWwpIHtcclxuICAgICAgICAgICAgICAgIGxldCBvYmogPSBzZWxmLmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgICAgICAgICAgICAgIG9iai52YWx1ZSA9IHZhbDtcclxuICAgICAgICAgICAgICAgIG9iai5wbGFjZWhvbGRlciA9IG51bGw7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldFBsYWNlOiBmdW5jdGlvbihpZCwgbXNnKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2JqID0gc2VsZi5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICAgICAgICAgICAgICBvYmoudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgb2JqLnBsYWNlaG9sZGVyID0gbXNnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH0pKHRoaXMpO1xyXG4ke1wiPFwiICsgXCIvc2NyaXB0XCJ9PlxyXG48L2h0bWw+YDtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiaW1wb3J0IHsgQmFzZUVsZW1lbnQsIENoYW5uZWwgfSBmcm9tICcuLi8uLi9jb21tb25zL2NvbnRleHQuanMnO1xyXG5pbXBvcnQgaHRtIGZyb20gJy4vaHRtL3NpZ251cC5odG0nO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ25VcCBleHRlbmRzIEJhc2VFbGVtZW50IHtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoaHRtKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICB0aGlzLiRodG0uc2V0VmFsdWUoXCJob3N0SURcIiwgXCJjb20ud2ViM3AuYWxidW06dW51XCIpO1xyXG4gICAgICAgIHRoaXMuJGh0bS5zZXRQbGFjZShcImNlbGxOb1wiLCBcIu2ajOybkCDrsojtmLjrpbwg7J6F66Cl7ZWY7IS47JqULlwiKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3VibWl0KGhvc3RJRCwgY2VsbE5vKSB7XHJcbiAgICAgICAgQ2hhbm5lbC5zdWJtaXQoXCJTaWduVXBcIiwgMCwgaG9zdElELCBjZWxsTm8pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJGh0bS5zZXRQbGFjZShcImNlbGxOb1wiLCBlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIndkcC1zaWdudXBcIiwgU2lnblVwLCB7ZXh0ZW5kczonc2VjdGlvbid9KTsiLCJpZiAoISh3aW5kb3cgaW5zdGFuY2VvZiBXaW5kb3cpKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VuYWJsZSB0byByZXNvbHZlIHdpbmRvdyBvYmplY3QnKTtcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmhhbmRsZWRyZWplY3Rpb25cIiwgZXZlbnQgPT4ge1xyXG4gICAgY29uc29sZS5lcnJvcihldmVudC5yZWFzb24pO1xyXG59LCBmYWxzZSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBldmVudCA9PiBMaXN0ZW5lci5ub3RpZnkoJ1Jlc2l6ZScsIGV2ZW50KSwgZmFsc2UpO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRhcHBlciB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZGV0ZWN0KHRhcmdldCwgdG91Y2hlcywgdGhyZXNob2xkKSB7XHJcbiAgICAgICAgaWYgKFRhcHBlci4jaXNUYXBwaW5nKSB7XHJcbiAgICAgICAgICAgIGlmICh0b3VjaGVzLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBUYXBwZXIuI3RhcHBlci4jb25EYmxUb3VjaCgpO1xyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgaWYgKHRvdWNoZXMubGVuZ3RoID09IDIpIHtcclxuICAgICAgICAgICAgICAgIFRhcHBlci4jdGFwcGVyLiNvblR3b1RvdWNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgnaXNUYXBwZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgVGFwcGVyLiNpc1RhcHBpbmcgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IFxyXG4gICAgICAgICAgICBUYXBwZXIuI3RhcHBlci4jdG91Y2hTdGFydCh0YXJnZXQsIHRvdWNoZXMsIHRocmVzaG9sZCwgcmVzb2x2ZSlcclxuICAgICAgICApO1xyXG4gICAgfSAgIC8vIChvbmV0b3VjaCwgZGJsdG91Y2gsIGxvbmd0b3VjaCksICh0d290b3VjaCwgdGh1bXAsIHdhbGssIHJ1bilcclxuICAgIHN0YXRpYyAjdGFwcGVyID0gbmV3IFRhcHBlcigpO1xyXG4gICAgc3RhdGljICNpc1RhcHBpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAjVG91Y2hDYW5jZWwgPSB0aGlzLiNvblRvdWNoQ2FuY2VsLmJpbmQodGhpcyk7XHJcbiAgICAjVG91Y2hNb3ZlID0gdGhpcy4jb25Ub3VjaE1vdmUuYmluZCh0aGlzKTtcclxuICAgICNMb25nVG91Y2ggPSB0aGlzLiNvbkxvbmdUb3VjaC5iaW5kKHRoaXMpO1xyXG4gICAgI1RvdWNoRW5kID0gdGhpcy4jb25Ub3VjaEVuZC5iaW5kKHRoaXMpO1xyXG5cclxuICAgICNyZXNvbHZlOyAjdGFyZ2V0OyAjdGhyZXNob2xkOyAjeDA7ICN5MDsgI3RpbWVyO1xyXG5cclxuICAgICN0b3VjaFN0YXJ0KHRhcmdldCwgdG91Y2hlcywgdGhyZXNob2xkLCByZXNvbHZlKSB7XHJcbiAgICAgICAgdGhpcy4jdGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgICAgIHRoaXMuI3RocmVzaG9sZCA9IERhdGUubm93KCkgKyB0aHJlc2hvbGQ7XHJcbiAgICAgICAgdGhpcy4jeDAgPSB0b3VjaGVzWzBdLnBhZ2VYO1xyXG4gICAgICAgIHRoaXMuI3kwID0gdG91Y2hlc1swXS5wYWdlWTtcclxuICAgICAgICB0aGlzLiNyZXNvbHZlID0gcmVzb2x2ZTtcclxuXHJcbiAgICAgICAgdGhpcy4jdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy4jVG91Y2hNb3ZlLCB7cGFzc2l2ZTp0cnVlfSk7XHJcbiAgICAgICAgdGhpcy4jdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLiNUb3VjaEVuZCk7XHJcbiAgICAgICAgdGhpcy4jdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLCB0aGlzLiNUb3VjaENhbmNlbCk7XHJcblxyXG4gICAgICAgIHRoaXMuI3RpbWVyID0gc2V0VGltZW91dCh0aGlzLiNMb25nVG91Y2gsIHRocmVzaG9sZCk7XHJcbiAgICB9XHJcblxyXG4gICAgI2RldGVjdGVkKGFjdGlvbikge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gVGFwcGVyLiNpc1RhcHBpbmcgPSBmYWxzZSwgMjAwKTtcclxuICAgICAgICB0aGlzLiNyZXNvbHZlKGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICNvbkxvbmdUb3VjaCgpIHtcclxuICAgICAgICB0aGlzLiNjbGVhcigpO1xyXG4gICAgICAgIHRoaXMuI2RldGVjdGVkKCdsb25nVG91Y2gnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgI29uRGJsVG91Y2goKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuI3RpbWVyKTtcclxuICAgICAgICB0aGlzLiNkZXRlY3RlZCgnZGJsVG91Y2gnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgI29uVHdvVG91Y2goKSB7XHJcbiAgICAgICAgdGhpcy4jY2xlYXIoKTtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy4jdGltZXIpO1xyXG4gICAgICAgIHRoaXMuI2RldGVjdGVkKCd0d29Ub3VjaCcpO1xyXG4gICAgfVxyXG5cclxuICAgICNvblRvdWNoRW5kKGV2ZW50KSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuI3RpbWVyKTtcclxuICAgICAgICB0aGlzLiNjbGVhcigpO1xyXG5cclxuICAgICAgICB0aGlzLiN0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiNkZXRlY3RlZCgnb25lVG91Y2gnKTtcclxuICAgICAgICB9LCAzMDApO1xyXG4gICAgfVxyXG5cclxuICAgICNvblRvdWNoTW92ZShldmVudCkge1xyXG4gICAgICAgIGxldCB0b3VjaGVzID0gZXZlbnQudGFyZ2V0VG91Y2hlcztcclxuICAgICAgICBsZXQgZHggPSBNYXRoLmFicyh0b3VjaGVzWzBdLnBhZ2VYIC0gdGhpcy4jeDApO1xyXG4gICAgICAgIGxldCBkeSA9IE1hdGguYWJzKHRvdWNoZXNbMF0ucGFnZVkgLSB0aGlzLiN5MCk7XHJcblxyXG4gICAgICAgIGlmIChkeCA+IDkgfHwgZHkgPiA5KSB0aGlzLiNvblRvdWNoQ2FuY2VsKG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgICNvblRvdWNoQ2FuY2VsKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy4jY2xlYXIoKTtcclxuXHJcbiAgICAgICAgaWYgKGV2ZW50ICYmIE1hdGguYWJzKERhdGUubm93KCkgLSB0aGlzLiN0aHJlc2hvbGQpIDwgNTApXHJcbiAgICAgICAgICAgIHRoaXMuI2RldGVjdGVkKCdsb25nVG91Y2gnKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuI2RldGVjdGVkKCdpc1Bhbm5pbmcuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgI2NsZWFyKCkge1xyXG4gICAgICAgIHRoaXMuI3RhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMuI1RvdWNoTW92ZSk7XHJcbiAgICAgICAgdGhpcy4jdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLiNUb3VjaEVuZCk7XHJcbiAgICAgICAgdGhpcy4jdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLCB0aGlzLiNUb3VjaENhbmNlbCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTd2lwZXIge1xyXG4gICAgc3RhdGljIGFzeW5jIGRldGVjdCh0YXJnZXQsIHRvdWNoLCB0aHJlc2hvbGQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gXHJcbiAgICAgICAgICAgIG5ldyBTd2lwZXIodGFyZ2V0LCB0b3VjaCwgdGhyZXNob2xkLCByZXNvbHZlLCByZWplY3QpLiNpbml0KClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgICNUb3VjaENhbmNlbCA9IHRoaXMuI29uVG91Y2hDYW5jZWwuYmluZCh0aGlzKTtcclxuICAgICNUb3VjaE1vdmUgPSB0aGlzLiNvblRvdWNoTW92ZS5iaW5kKHRoaXMpO1xyXG4gICAgI1RvdWNoRW5kID0gdGhpcy4jb25Ub3VjaEVuZC5iaW5kKHRoaXMpO1xyXG4gICAgI3Jlc29sdmU7XHJcbiAgICAjcmVqZWN0O1xyXG4gICAgI3RhcmdldDtcclxuICAgICN0aHJlc2hvbGQ7XHJcbiAgICAjc3RhcnQ7XHJcbiAgICAjeDA7ICAjeDE7XHJcbiAgICAjeTA7ICAjeTE7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGFyZ2V0LCB0b3VjaCwgdGhyZXNob2xkLCByZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICB0aGlzLiN0YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgdGhpcy4jdGhyZXNob2xkID0gdGhyZXNob2xkO1xyXG4gICAgICAgIHRoaXMuI3gwID0gdGhpcy4jeDEgPSB0b3VjaC5wYWdlWDtcclxuICAgICAgICB0aGlzLiN5MCA9IHRoaXMuI3kxID0gdG91Y2gucGFnZVk7XHJcbiAgICAgICAgdGhpcy4jc3RhcnQgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuI3Jlc29sdmUgPSByZXNvbHZlO1xyXG4gICAgICAgIHRoaXMuI3JlamVjdCA9IHJlamVjdDtcclxuICAgIH0gICAvLyBzZXRUaW1lb3V0KHRoaXMuI1RvdWNoQ2FuY2VsLCA1MDAwKTtcclxuXHJcbiAgICAjb25Ub3VjaEVuZCgpIHtcclxuICAgICAgICB0aGlzLiNjbGVhcigpO1xyXG5cclxuICAgICAgICBsZXQgdGhyZXNob2xkID0gdGhpcy4jdGhyZXNob2xkOyAgICAgICAgXHJcbiAgICAgICAgbGV0IGdhcCA9IERhdGUubm93KCkgLSB0aGlzLiNzdGFydDtcclxuICAgICAgICBpZiAoZ2FwIDwgMjAwKSB0aHJlc2hvbGQgLz0gNDtcclxuICAgICAgICBlbHNlIGlmIChnYXAgPCAzMDApIHRocmVzaG9sZCAvPSAzO1xyXG4gICAgICAgIGVsc2UgaWYgKGdhcCA8IDUwMCkgdGhyZXNob2xkIC89IDI7XHJcblxyXG4gICAgICAgIGxldCBvZmYgPSB0aGlzLiN4MSAtIHRoaXMuI3gwO1xyXG4gICAgICAgIGlmIChNYXRoLmFicyhvZmYpID4gTWF0aC5hYnModGhpcy4jeTEgLSB0aGlzLiN5MCkpIHtcclxuICAgICAgICAgICAgaWYgKHRocmVzaG9sZCA8IC1vZmYpXHJcbiAgICAgICAgICAgICAgICB0aGlzLiNyZXNvbHZlKCduZXh0Jyk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgaWYgKHRocmVzaG9sZCA8IG9mZilcclxuICAgICAgICAgICAgICAgIHRoaXMuI3Jlc29sdmUoJ3ByZXYnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy4jcmVqZWN0KCdDYW5jZWxlZC4nKTtcclxuICAgIH1cclxuXHJcbiAgICAjb25Ub3VjaE1vdmUoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLiN4MSA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVg7XHJcbiAgICAgICAgdGhpcy4jeTEgPSBldmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZO1xyXG5cclxuICAgICAgICB0aGlzLiN0YXJnZXQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt0aGlzLiN4MSAtIHRoaXMuI3gwfXB4KWA7XHJcbiAgICAgICAgdGhpcy4jdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcwbXMnO1xyXG4gICAgfVxyXG5cclxuICAgICNvblRvdWNoQ2FuY2VsKCkge1xyXG4gICAgICAgIHRoaXMuI2NsZWFyKCk7XHJcbiAgICAgICAgdGhpcy4jcmVqZWN0KCdDYW5jZWxlZC4nKTtcclxuICAgIH1cclxuXHJcbiAgICAjaW5pdCgpIHtcclxuICAgICAgICB0aGlzLiN0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aGlzLiNUb3VjaE1vdmUsIHtwYXNzaXZlOnRydWV9KTtcclxuICAgICAgICB0aGlzLiN0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMuI1RvdWNoRW5kKTtcclxuICAgICAgICB0aGlzLiN0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoY2FuY2VsXCIsIHRoaXMuI1RvdWNoQ2FuY2VsKTtcclxuICAgIH1cclxuXHJcbiAgICAjY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy4jdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy4jVG91Y2hNb3ZlKTtcclxuICAgICAgICB0aGlzLiN0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMuI1RvdWNoRW5kKTtcclxuICAgICAgICB0aGlzLiN0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoY2FuY2VsXCIsIHRoaXMuI1RvdWNoQ2FuY2VsKTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0ZW5lciA9IChmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGV2ZW50cyA9IHt9OyAvLyBQYWdlUmVxdWVzdCwgUGF0aFJldHVybiwgUGF0aEFwcGVuZFxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbGlzdGVuOiBmdW5jdGlvbihldmVudCwgbGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgbGV0IGxpc3RlbmVycyA9IGV2ZW50c1tldmVudF07XHJcblxyXG4gICAgICAgICAgICBpZiAoIWxpc3RlbmVycykge1xyXG4gICAgICAgICAgICAgICAgZXZlbnRzW2V2ZW50XSA9IFtsaXN0ZW5lcl07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG5vdGlmeTogZnVuY3Rpb24oZXZlbnQsIC4uLmRhdGEpIHtcclxuICAgICAgICAgICAgZXZlbnRzW2V2ZW50XSA/LmZvckVhY2gobGlzdGVuZXIgPT4gbGlzdGVuZXIoLi4uZGF0YSkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbihldmVudCwgbGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgbGV0IGxpc3RlbmVycyA9IGV2ZW50c1tldmVudF0gPz8gW107XHJcblxyXG4gICAgICAgICAgICBsZXQgcG9zID0gbGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xyXG4gICAgICAgICAgICBpZiAocG9zID49IDApIGxpc3RlbmVycy5zcGxpY2UocG9zLCAxKTtcclxuICAgICAgICAgICAgaWYgKGxpc3RlbmVycy5sZW5ndGggPT0gMCkgZGVsZXRlIGV2ZW50c1tldmVudF07XHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvdmlkZXIgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCB0b3BpY3MgPSB7fTsgLy8gU3RvcmVcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1cHBseTogZnVuY3Rpb24odG9waWMsIHByb3ZpZGVyLCBmb3JjZSA9IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGlmICghdG9waWNzW3RvcGljXSB8fCBmb3JjZSlcclxuICAgICAgICAgICAgICAgIHRvcGljc1t0b3BpY10gPSBwcm92aWRlcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlcXVlc3Q6IGZ1bmN0aW9uKHRvcGljLCAuLi5kYXRhKSB7XHJcbiAgICAgICAgICAgIGxldCBwcm92aWRlciA9IHRvcGljc1t0b3BpY107XHJcbiAgICAgICAgICAgIHJldHVybiBwcm92aWRlciA/IHByb3ZpZGVyKC4uLmRhdGEpIDogbnVsbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24odG9waWMsIHByb3ZpZGVyKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm92aWRlciA9PSB0b3BpY3NbdG9waWNdKVxyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRvcGljc1t0b3BpY107XHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG53aW5kb3cuV2ViM1BfQ2hhbm5lbCQgPSB3aW5kb3cuV2ViM1BfQ2hhbm5lbCQgPz8ge1xyXG4gICAgY29ubmVjdDogKCkgPT4ge30sXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhbm5lbCB7XHJcbiAgICBzdGF0aWMgI2hhbmRsZXJzID0ge307XHJcbiAgICBzdGF0aWMgI3BvcnQ7XHJcbiAgICBzdGF0aWMgI3JpZCA9IDA7XHJcblxyXG4gICAgc3RhdGljIHtcclxuICAgICAgICBjb25zdCBDSEFOTkVMID0gXCJXZWIzUF9DaGFubmVsJFwiLCBFVkVOVCA9IFwibWVzc2FnZVwiO1xyXG5cclxuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IG1zZyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChtc2cuZGF0YSAhPSBDSEFOTkVMKSByZXR1cm47XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKEVWRU5ULCBsaXN0ZW5lcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLiNwb3J0ID0gbXNnLnBvcnRzWzBdO1xyXG4gICAgICAgICAgICB0aGlzLiNwb3J0Lm9ubWVzc2FnZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuI3BvcnQuYWRkRXZlbnRMaXN0ZW5lcihFVkVOVCwgQ2hhbm5lbC5vbk1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihFVkVOVCwgbGlzdGVuZXIpO1xyXG4gICAgICAgIHdpbmRvdy5XZWIzUF9DaGFubmVsJC5jb25uZWN0KENIQU5ORUwpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjbGVhbigpIHtcclxuICAgICAgICB0aGlzLiNoYW5kbGVycyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzdXBwbHkodGFzaywgcHJvdmlkZXIpIHtcclxuICAgICAgICBpZiAoaXNOYU4odGFzaykpXHJcbiAgICAgICAgICAgIHRoaXMuI2hhbmRsZXJzW3Rhc2tdID0gcHJvdmlkZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBvbk1lc3NhZ2UobXNnKSB7XHJcbiAgICAgICAgY29uc3QganNvID0gSlNPTi5wYXJzZShtc2cuZGF0YSk7XHJcbiAgICAgICAgY29uc3Qga2V5ID0ganNvLnJpZDtcclxuICAgICAgICBjb25zdCBtYXAgPSB0aGlzLiNoYW5kbGVycztcclxuXHJcbiAgICAgICAgaWYgKE9iamVjdC5oYXNPd24obWFwLCBrZXkpKSBtYXBba2V5XShqc28pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjb21taXQodGFzaywgd2FpdCwgb25SZXNvbHZlLCBvblJlamVjdCwgLi4uYXJncykge1xyXG4gICAgICAgIHRoaXMuc3VibWl0KHRhc2ssIHdhaXQsIGFyZ3MpXHJcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgaWYgKG9uUmVzb2x2ZSAhPSBudWxsKSBvblJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvblJlamVjdCAhPSBudWxsKSBvblJlamVjdChlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAgaWYgKHdhaXQgPT0gMCkgLT4gbm90aWZ5OiByZXR1cm4g7JeG7J2MID0+IGhhbmRsZXJz7JeQ7IScIOygnOqxsCA/Pz/tlbTqsrDsmpQ/Pz9cclxuICAgIHN0YXRpYyBzdWJtaXQodGFzaywgd2FpdCwgLi4uYXJncykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJpZCA9ICsrdGhpcy4jcmlkO1xyXG4gICAgICAgICAgICBjb25zdCB0aW1lciA9IHdhaXQgPiAwID9cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBDaGFubmVsLiNoYW5kbGVyc1tyaWRdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJIVFRQLTQwOFwiLCB7Y2F1c2U6IDQwOH0pKTsgIC8vIFJlcXVlc3QgVGltZW91dFxyXG4gICAgICAgICAgICAgICAgfSwgd2FpdCkgOiAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLiNoYW5kbGVyc1tyaWRdID0ganNvID0+IHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgQ2hhbm5lbC4jaGFuZGxlcnNbanNvLnJpZF07XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChqc28uaGFzT3duKFwicmVzdWx0XCIpKSByZXNvbHZlKGpzby5yZXN1bHQpOyAgIC8vIEludGVybmFsIFNlcnZlciBFcnJvclxyXG4gICAgICAgICAgICAgICAgaWYgKGpzby5oYXNPd24oXCJyZWplY3RcIikpIHJlamVjdChuZXcgRXJyb3IoanNvLnJlamVjdCwge2NhdXNlOiA1MDB9KSk7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiSFRUUC0yMDRcIiwge2NhdXNlOiAyMDR9KSk7ICAvLyBObyBDb250ZW50XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuI3BvcnQucG9zdE1lc3NhZ2UodGhpcy4janNvbihyaWQsIHdhaXQsIHRhc2ssIGFyZ3MpKTtcclxuICAgICAgICAgICAgdGhpcy4jcG9ydC5zdGFydCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyAjanNvbihyaWQsIHdhaXQsIHRhc2ssIGFyZ3MpIHtcclxuICAgICAgICBsZXQgcmVwbHkgPSB3YWl0ID4gMDtcclxuICAgICAgICBsZXQgbGlzdCA9IGFyZ3MubWFwKGEgPT4gYFwiJHthfVwiYCkuam9pbigpO1xyXG4gICAgICAgIHJldHVybiBge1wicmlkXCI6JHtyaWR9LFwicmVwbHlcIjoke3JlcGx5fSxcInRhc2tcIjpcIiR7dGFza31cIixcImFyZ3NcIjpbJHtsaXN0fV19YDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy4jcG9ydC5jbG9zZSgpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihodG1sKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAvLyBmZXRjaChodG1sKVxyXG4gICAgICAgIC8vIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcclxuICAgICAgICAvLyAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5hdHRhY2hTaGFkb3coe21vZGU6XCJvcGVuXCJ9KS5pbm5lckhUTUwgPSBkYXRhO1xyXG4gICAgICAgIC8vICAgICB0aGlzLiNhY3RpdmF0ZVNjcmlwdCh0aGlzLnNoYWRvd1Jvb3QpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIFxyXG5cdFx0dGhpcy5hdHRhY2hTaGFkb3coe21vZGU6XCJvcGVuXCJ9KS5pbm5lckhUTUwgPSBodG1sO1xyXG5cdFx0dGhpcy4jYWN0aXZhdGVTY3JpcHQodGhpcy5zaGFkb3dSb290KTtcclxuICAgIH1cclxuXHJcbiAgICAjYWN0aXZhdGVTY3JpcHQobm9kZSkge1xyXG4gICAgICAgIGlmIChub2RlLnRhZ05hbWUgPT09IFwiVEVNUExBVEVcIikge1xyXG4gICAgICAgICAgICB0aGlzLiNhY3RpdmF0ZVRlbXBsYXRlU2NyaXB0cyhub2RlLmNvbnRlbnQpO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgaWYgKGNoaWxkLnRhZ05hbWUgPT09IFwiU0NSSVBUXCIpIHtcclxuICAgICAgICAgICAgICAgIG5ldyBGdW5jdGlvbihjaGlsZC50ZXh0Q29udGVudCkuY2FsbChub2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHRoaXMuI2FjdGl2YXRlU2NyaXB0KGNoaWxkKTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICAjYWN0aXZhdGVUZW1wbGF0ZVNjcmlwdHMobm9kZSkge1xyXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgaWYgKGNoaWxkLnRhZ05hbWUgPT09IFwiVEVNUExBVEVcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4jYWN0aXZhdGVUZW1wbGF0ZVNjcmlwdHMoY2hpbGQuY29udGVudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICBpZiAoY2hpbGQudGFnTmFtZSA9PT0gXCJTQ1JJUFRcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4jcmVmcmVzaFNjcmlwdChub2RlLCBjaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB0aGlzLiNhY3RpdmF0ZVRlbXBsYXRlU2NyaXB0cyhjaGlsZCk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBcclxuICAgICNyZWZyZXNoU2NyaXB0KG5vZGUsIGNoaWxkKSB7XHJcbiAgICAgICAgbGV0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgIGZvciAobGV0IGF0dHIgb2YgY2hpbGQuYXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKGF0dHIubmFtZSwgYXR0ci52YWx1ZSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNjcmlwdC50ZXh0Q29udGVudCA9IGNoaWxkLnRleHRDb250ZW50O1xyXG4gICAgICAgIG5vZGUucmVwbGFjZUNoaWxkKHNjcmlwdCwgY2hpbGQpO1xyXG4gICAgfTtcclxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zaWdudXAuanMnO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=