// MenuData Provider
import { Observer, Mediator } from '../utils/utils.js';

export const Store = (function() {
    const store = Mediator.request('Store', 'Menu');

    let current = "$";

    return {
        select: function(key) {
            let path = key ?? current;
            let data = store[path];

            if (!!data) {
                current = path;
                return data;
            } else {
                return [];
            }
        },
        getPath: function(len) {
            if (len > 0 && len < current.length) {
                return current.substring(0, len);
            }
            return current;
        },
        navigate: function(uid) {
            Observer.notify('PageRequest', store[current][uid-1]);
        },
        current: () => current,
    };
})();