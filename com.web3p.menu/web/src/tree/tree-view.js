import { Observer } from '../utils/utils.js';

export class TreeView extends HTMLElement {
    static get disabledFeatures() {
         return ['shadow'];
    }

    #ClickItem = this.#onClick.bind(this);
    #ScrollView = this.#onScroll.bind(this);
    #header;
    #icon;
    #scroll;
    
    constructor() {
        super();

        this.#header = this.querySelector('.header .item');
        this.#icon = this.#header.querySelector('.icon');

        this.#scroll = this.querySelector('.scroll');
        let container = this.#scroll.querySelector('.container');

        container._itemHeit = container.querySelector('.item').offsetHeight;
        container._viewHeit = document.documentElement.clientHeight - 33;

        this.#scroll.style.height = `${container._viewHeit}px`;
    }

    connectedCallback() {
        this.#header.addEventListener('click', this.#ClickItem);
        this.#scroll.addEventListener('scroll', this.#ScrollView);
    }

    disconnectedCallback() {
        this.#scroll.removeEventListener('scroll', this.#ScrollView);
        this.#header.removeEventListener('click', this.#ClickItem);
    }

    #onClick() {
        if (this.#icon.classList.contains('expanded')) {
            this.#icon.classList.remove('expanded');
            this.#scroll.style.display = 'none';
        } else {
            this.#icon.classList.add('expanded');
            this.#scroll.style.display = '';
        }
    }

    #onScroll() {
        Observer.notify('ScrollTreeView', this.#scroll.scrollTop);
    }
};

customElements.define("wdp-tree-view", TreeView, {extends:'main'});
