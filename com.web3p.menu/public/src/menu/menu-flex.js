import shadowHTML from './menu-flex.htm';
import { WdpDivElement } from '../WdpDivElement';
import { storeMenu } from './menu-data';
import { toIconHtml as icon, mediator } from '../utils';

export class MenuFlex extends WdpDivElement {
	static get observedAttributes() {
		return ["hidden"];
	}

    #MenuSelect = this.#onClickMenuItem.bind(this);
    #PathReturn = this.#onClickBreadcrumb.bind(this);
    #current = '';
    
    constructor() {
        super(shadowHTML);
    }

    connectedCallback() {
        if (this.hidden) return;
        
        if (this.#current != storeMenu.current)
            this.#listData();
        mediator.listen('PathReturn', this.#PathReturn);
    }

    disconnectedCallback() {
        mediator.remove('PathReturn', this.#PathReturn);
    }

	attributeChangedCallback(name, oldValue, newValue) {
		switch (name) {
			case 'hidden': {
				if (this.hidden) {
                    this.disconnectedCallback();
				} else {
                    this.connectedCallback();
                }
				break;
			}
		}
	}

    #listData(uid) {
        this.$htm.init();

        storeMenu.select(uid).forEach(data => {
            const item = this.$htm.append(data.uid, icon(data.icon), data.name, data.star, data.user);
            item.addEventListener("click", this.#MenuSelect);
        });
        this.#current == storeMenu.current;
    }

    #onClickMenuItem(event) {
        const all = event.currentTarget.querySelectorAll('span');
        const uid = all[0].textContent;

        if (uid.startsWith('$')) {
            this.#listData(uid);
            mediator.notify('PathAppend', all[4].textContent);
        } else {
            console.log(uid);
        }
    }

    #onClickBreadcrumb(count) {
        this.#listData(storeMenu.getPath(count));
    }
}

customElements.define("wdp-menu-flex", MenuFlex, {extends:'div'});