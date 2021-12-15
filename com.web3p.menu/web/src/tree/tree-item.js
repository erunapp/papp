import { Observer } from '../utils/utils.js';

export class TreeItem extends HTMLDivElement {
    static get disabledFeatures() {
         return ['shadow'];
    }

    _ShowItem = this.#onBind.bind(this);
    #ClickItem = this.#onClick.bind(this);
    #indent;
    #span;
    #data = {};
    
    constructor() {
        super();

        this.#indent = this.querySelector('.indent');
        this.#span = this.querySelectorAll('span');
        this.style.display = 'none';
    }

    connectedCallback() {
        this.addEventListener('click', this.#ClickItem);
    }

    disconnectedCallback() {
        this.removeEventListener('click', this.#ClickItem);
    }

    #setIcon(data) {
        let icon = this.querySelector('.icon');
        
        if (!data.expanded && icon.classList.contains('expanded')) {
            icon.classList.remove('expanded');
        } else
        if (data.expanded && !icon.classList.contains('expanded')) {
            icon.classList.add('expanded');
        }
    }

    #onBind(pos, data) {
        if (data == null) {
            this.style.display = 'none';
            this.#data = {};
        } else {
            if (this.#data != data) {
                this.#setIcon(data);
                
                this.#indent.style.width = `${data.tabs * 12}px`;
                this.#span[0].innerHTML = data.icon;
                this.#span[1].textContent = data.name;
            }   this.#data = data;
            this.style.display = '';
        }   this.style.top = `${pos}px`;
    }

    #onClick() {
        Observer.notify('ClickTreeItem', this.offsetTop);
        this.#setIcon(this.#data);
    }
};

customElements.define("wdp-tree-item", TreeItem, {extends:'div'});
