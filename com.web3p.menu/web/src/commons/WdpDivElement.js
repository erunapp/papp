import { activateScript as activate } from './utils';

export class WdpDivElement extends HTMLDivElement {

	constructor(shadowHTML) {
		super();

		this.attachShadow({
			mode: "open"
		});

		if (typeof shadowHTML === 'string' && shadowHTML.length > 0) {
			this.shadowRoot.innerHTML = shadowHTML;
			activate(this.shadowRoot);
		}
	}

	$queryShadow(selector) {
		if (selector.startsWith('#'))
			return this.shadowRoot.getElementById(selector.substring(1));
		return this.shadowRoot.querySelector(selector);
	}

	$queryShadowAll(selector) {
		return this.shadowRoot.querySelectorAll(selector);
	}
};
