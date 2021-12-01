import '../commons/view';

export class Page extends HTMLBodyElement {
    static get disabledFeatures() {
         return ['shadow'];
    }

    #views = [];
    #currentView = 0;
    
    constructor() {
        super();
    }

    connectedCallback() {
        this.#views = this.querySelectorAll("[is='wdp-view']");
        if (this.#views.length > 1) {
            this.#views.forEach(view => view.children[0].hidden = true);
            this.#views[0].children[0].hidden = false;

            const fixed = this.querySelector('button.fixed');
            if (fixed)
                fixed.addEventListener("click", this.#onViewChange.bind(this));
        }
    }

    disconnectedCallback() {
    }

    #onViewChange(event) {
        event.preventDefault();
        
        this.#views[this.#currentView].children[0].hidden = true;
        this.#currentView = (this.#currentView + 1) % this.#views.length;
        this.#views[this.#currentView].children[0].hidden = false;
    }
};

customElements.define("wdp-page", Page, {extends:'body'});
