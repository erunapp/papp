import shadowHTML from './menu-flex.htm';
import { WdpDivElement } from '../commons/WdpDivElement';
import { toIconHtml as icon, Observer, Mediator } from '../commons/utils';

export class MenuFlex extends WdpDivElement {
	static get observedAttributes() {
		return ["hidden"];
	}

    #Store;
    #MenuSelect = this.#onClickMenuItem.bind(this);
    #PathReturn = this.#onClickBreadcrumb.bind(this);
    #current = '';
    
    constructor() {
        super(shadowHTML);
        this.#Store = Mediator.consume('Store', 'Menu');
    }

    connectedCallback() {
        if (this.hidden) return;
        
        if (this.#current != this.#Store.current)
            this.#listData();
        Observer.listen('PathReturn', this.#PathReturn);
    }

    disconnectedCallback() {
        Observer.remove('PathReturn', this.#PathReturn);
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

        this.#Store.select(uid).forEach(data => {
            let item = this.$htm.append(data.uid, icon(data.icon), data.name, data.star, data.user);
            item.addEventListener("click", this.#MenuSelect);
        });
        this.#current == this.#Store.current;
    }

    #onClickMenuItem(event) {
        let all = event.currentTarget.querySelectorAll('span');
        let uid = all[0].textContent;

        if (uid.startsWith('$')) {
            this.#listData(uid);
            Observer.notify('PathAppend', all[4].textContent);
        } else {
            this.#Store.navigate(uid);
        }
    }

    #onClickBreadcrumb(count) {
        this.#listData(this.#Store.getPath(count));
    }
};

customElements.define("wdp-menu-flex", MenuFlex, {extends:'div'});
