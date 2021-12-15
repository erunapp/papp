
export class MenuView extends HTMLElement {
    static get disabledFeatures() {
         return ['shadow'];
    }
    
    constructor() {
        super();
    }

    connectedCallback() {
    }

    disconnectedCallback() {
    }
};

customElements.define("wdp-menu-view", MenuView, {extends:'main'});
