import '../commons/page';
import '../commons/breadcrumb';
import './menu-list';
import './menu-flex';
import './menu-card';


let getWindow = function () {
    if (typeof globalThis !== 'undefined') { return globalThis }
    if (typeof window !== 'undefined') { return window }
    if (typeof self !== 'undefined') { return self }
    throw new Error('unable to locate global object');
  };
  
let global = getWindow();

if (typeof global.setTimeout === 'function') {
    global.wdp = global.wdp || {};
}
