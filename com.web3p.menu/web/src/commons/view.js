
export class View extends HTMLElement {
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
}

customElements.define("wdp-view", View, {extends:'main'});
