import { toIconHtml as icon, Observer, Mediator } from '../utils/utils.js';
import './tree-item.js';

export class TreeList extends HTMLDivElement {
    static get disabledFeatures() {
         return ['shadow'];
    }

    #ClickItem = this.#onClick.bind(this);
    #ScrollView = this.#onScroll.bind(this);
    #SyncTreeView = this.#onSync.bind(this);
    #Store;
    #lines = [];
    #items = [];
    #topLine = 0;
    #topItem = 0;
    #onTimer = 0;
    
    constructor() {
        super();

        this.#items.push(this.querySelector('.item'));
        this.#resize();

        this.#Store = Mediator.request('Store', 'Menu');
        this.#expand(-1, '$', 1);
        this.#listData();
    }

    connectedCallback() {
        Observer.listen('SyncTreeView', this.#SyncTreeView);
        Observer.listen('ClickTreeItem', this.#ClickItem);
        Observer.listen('ScrollTreeView', this.#ScrollView);
    }

    disconnectedCallback() {
        Observer.remove('ScrollTreeView', this.#ScrollView);
        Observer.remove('ClickTreeItem', this.#ClickItem);
        Observer.remove('SyncTreeView', this.#SyncTreeView);
    }

    #resize() {
        const rows = Math.ceil(this._viewHeit / this._itemHeit) + 1;

        while (this.#items.length < rows) {
            let item = this.#items[0].cloneNode(true);
            this.#items.push(item);
            this.append(item);
        }
        let i = this.#items.length;
        while ( this.#items.length > rows && i --> 0) {
            if (this.#items[i].style.display == 'none')
                this.#items.splice(i,1)[0].remove();
        }
    }
    
    #expand(line, guid, tabs) {
        let data = this.#Store.select(guid);
        const arr = new Array(data.length);

        for (let i = data.length; i --> 0;) arr[i] = {
            guid: guid,
            uuid: data[i].uid,
            icon: icon(data[i].icon),
            name: data[i].name,
            tabs: tabs,
            expanded: false,
            children: 0
        };
        this.#lines.splice(line + 1, 0, ...arr);
        this.style.height = `${this.#lines.length * this._itemHeit}px`;

        return data.length;
    }

    #collapse(line, length) {
        this.#lines.splice(line + 1, length);
        this.style.height = `${this.#lines.length * this._itemHeit}px`;

        return 0;
    }

    #scroll() {
        setTimeout(() => {
            if (this.#onTimer != 0) this.#scroll();
            if (this.#topItem == this.#topLine) return;

            if (this.#topItem > this.#topLine) {
                let scroll = this.#topItem - this.#topLine;
                if (scroll < this.#items.length) {
                    this.#items.push(...this.#items.splice(0, scroll));
                }
            } else {
                let scroll = this.#topLine - this.#topItem;
                if (scroll < this.#items.length) {
                    this.#items.unshift(...this.#items.splice(-scroll, scroll));
                }
            }   this.#topLine = this.#topItem;
            this.#listData();
        }, 50);
    }

    #listData() {
        const cnt = Math.min(this.#items.length, this.#lines.length - this.#topLine);

        for (let i = 0; i < cnt; i++) {
            let pos = this.#topLine + i;
            this.#items[i]._ShowItem(pos * this._itemHeit, this.#lines[pos]);
        }
        for (let i = cnt; i < this.#items.length; i++) {
            this.#items[i]._ShowItem((this.#topLine + i) * this._itemHeit);
        }
    }
    
    #onClick(pos) {
        const line = Math.round(pos / this._itemHeit);
        const group = this.#lines[line];

        if (this.#lines[line].expanded) {
            group.expanded = false;
            group.children = this.#collapse(line, group.children);
        } else {
            group.expanded = true;
            group.children = this.#expand(line, group.uuid, group.tabs + 1);
        }
        this.#listData();
    }

    #onScroll(scroll) {
        this.#topItem = Math.floor(scroll / this._itemHeit);
        if (this.#onTimer == 0) {
            this.#scroll();
            this.#onTimer = setTimeout(() => { this.#onTimer = 0; }, 100);
        } else {
            window.clearTimeout(this.#onTimer);
            this.#onTimer = setTimeout(() => { this.#onTimer = 0; }, 100);
        }
    }

    #onSync(count) {
    }
};

customElements.define("wdp-tree-list", TreeList, {extends:'div'});
