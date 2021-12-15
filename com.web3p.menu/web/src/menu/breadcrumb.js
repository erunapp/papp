import shadowHTML from '../view/breadcrumb.htm';
import { BaseElement } from '../commons/BaseElement';
import { Observer } from '../utils/utils';

export class Breadcrumb extends BaseElement {

	#PathAppend = this.#appendPath.bind(this);
	#PathReturn = this.#returnPath.bind(this);

	constructor() {
		super(shadowHTML);
	}

	connectedCallback() {
		this.#appendPath("Path:");
		
		Observer.listen('PathAppend', this.#PathAppend);
	}

	disconnectedCallback() {
		Observer.remove('PathAppend', this.#PathAppend);
	}

	#appendPath(path) {
		this.$htm.append(path).previousElementSibling
			?.addEventListener("click", this.#PathReturn);

	}

	#returnPath(event) {
		event.currentTarget.removeEventListener("click", this.#PathReturn);
		Observer.notify('PathReturn', this.$htm.rollup(event.currentTarget));
	}
};

customElements.define("wdp-breadcrumb", Breadcrumb, {extends:'nav'});