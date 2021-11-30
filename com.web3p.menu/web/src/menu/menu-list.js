import shadowHTML from './menu-list.htm';
import { WdpDivElement } from '../WdpDivElement';
import { storeMenu } from '../menu/menu-data';
import { toIconHtml as icon, mediator } from '../utils';

export class MenuList extends WdpDivElement {
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
			case 'hidden': {    // (this.hidden ? this.disconnectedCallback : this.connectedCallback)();  [this <= window]
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
        const uid = event.currentTarget.children[0].textContent;

        if (uid.startsWith('$')) {
            this.#listData(uid);
            mediator.notify('PathAppend', event.currentTarget.children[2].textContent);
        } else {
            storeMenu.navigate(uid);
        }
    }

    #onClickBreadcrumb(count) {
        this.#listData(storeMenu.getPath(count));
    }
}

customElements.define("wdp-menu-list", MenuList, {extends:'div'});
