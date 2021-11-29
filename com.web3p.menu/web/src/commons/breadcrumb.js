import shadowHTML from './breadcrumb.htm';
import { WdpElement } from '../WdpElement';
import { mediator } from '../utils';

export class Breadcrumb extends WdpElement {

	#PathAppend = this.#appendPath.bind(this);
	#PathReturn = this.#returnPath.bind(this);

	constructor() {
		super(shadowHTML);
	}

	connectedCallback() {
		this.#appendPath("Path:");
		
		mediator.listen('PathAppend', this.#PathAppend);
	}

	disconnectedCallback() {
		mediator.remove('PathAppend', this.#PathAppend);
	}

	#appendPath(path) {
		this.$htm.append(path).previousElementSibling
			?.addEventListener("click", this.#PathReturn);

	}

	#returnPath(event) {
		event.currentTarget.removeEventListener("click", this.#PathReturn);
		mediator.notify('PathReturn', this.$htm.rollup(event.currentTarget));
	}
}

customElements.define("wdp-breadcrumb", Breadcrumb, {extends:'nav'});