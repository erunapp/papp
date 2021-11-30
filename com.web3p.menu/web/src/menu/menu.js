import '../commons/page';
import '../commons/breadcrumb';
import './menu-list';
import './menu-flex';
import './menu-card';
import { mediator } from '../utils';


let top = (this instanceof Window) ? this.top :
          (window instanceof Window) ? window.top :
          (globalThis instanceof Window) ? globalThis.top :
          (self instanceof Window) ? self.top : 0;

if (top == 0)
  throw new Error('unable to locate window object');

top.wdp = top.wdp || (function () {

    return {
      load: url => top.open(url, '_top'),
    }
  })();

let load = top.wdp.load.bind(top.wdp);
mediator.listen('PageRequest', load);
