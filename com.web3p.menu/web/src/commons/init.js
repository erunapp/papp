import { Observer, Mediator } from './utils';
import { Store } from '../menu/menu-data';


let top = (this instanceof Window) ? this.top :
          (window instanceof Window) ? window.top :
          (globalThis instanceof Window) ? globalThis.top :
          (self instanceof Window) ? self.top : 0;

if (top == 0)
    throw new Error('unable to locate window object');

top.wdp = top.wdp || (function () {
    const load = (host, page) => {
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

    const store = name => {
        switch (name) {
            case 'Menu': return Store;
        }
        return null;
    };

    return {
        load: load,
        store: store, 
    }
})();

let load = item => top.wdp.load(item.host, item.page);
let store = name => top.wdp.store(name);
Observer.listen('PageRequest', load);
Mediator.provide('Store', store);
