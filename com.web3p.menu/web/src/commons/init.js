import { Observer, Mediator } from '../utils/utils.js';
import { Store } from '../data/menu-data.js';


let top = (this instanceof Window) ? this.top :
          (window instanceof Window) ? window.top :
          (globalThis instanceof Window) ? globalThis.top :
          (self instanceof Window) ? self.top : 0;

if (top == 0)
    throw new Error('unable to locate window object');

top.wcp = top.wcp || (function () {
    const loadPage = (host, page) => {
        if (host.startsWith('https')) {
            let map = {};
    
            page.split('&').forEach(param => {
                let pair = param.split('=');
                map[pair[0]] = pair[1];
            });
            let url = `${host}/${map['pid']}/web/${map['html']}.html`;
            top.open(url, '_top');
        }
    };

    const getStore = name => {
        switch (name) {
            case 'Menu': return Store;
        }
        return null;
    };

    return {
        loadPage: loadPage,
        getStore: getStore, 
    }
})();

let loadPage = item => top.wcp.loadPage(item.host, item.page);
let getStore = name => top.wcp.getStore(name);
Observer.listen('PageRequest', loadPage);
Mediator.provide('Store', getStore);
