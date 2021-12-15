import { activateScript as activate } from '../utils/utils.js';

export class BaseElement extends HTMLElement {

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

	_queryShadow(selector) {
		if (selector.startsWith('#'))
			return this.shadowRoot.getElementById(selector.substring(1));
		return this.shadowRoot.querySelector(selector);
	}

	_queryShadowAll(selector) {
		return this.shadowRoot.querySelectorAll(selector);
	}
};