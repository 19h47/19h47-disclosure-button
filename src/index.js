const toggle = $el => {
	const style = $el.getAttribute('style');

	if (-1 !== style.indexOf('display')) {
		if ('none' === $el.style.display) {
			return $el.style.setProperty('display', 'block');
		}

		if ('block' === $el.style.display) {
			return $el.style.setProperty('display', 'none');
		}
	}

	if (false === JSON.parse($el.getAttribute('aria-hidden'))) {
		$el.setAttribute('aria-hidden', true);
		$el.classList.remove('is-active');

		return $el.style.setProperty('pointer-events', 'none');
	}

	if (true === JSON.parse($el.getAttribute('aria-hidden'))) {
		$el.setAttribute('aria-hidden', false);
		$el.classList.add('is-active');

		return $el.style.setProperty('pointer-events', 'auto');
	}

	return true;
};

/**
 * DisclosureButton
 *
 * @see https://www.w3.org/TR/wai-aria-practices-1.1/#disclosure
 */
class DisclosureButton {
	constructor(el) {
		this.el = el;
		this.events = { click: 'onClick', focus: 'onFocus', blur: 'onBlur' };
	}

	init() {
		// @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls
		const ids = this.el
			.getAttribute('aria-controls')
			.trim()
			.split(' ')
			.map(id => `#${id.trim()}`);

		this.elements = [...document.querySelectorAll(ids.join(','))];

		this.initEvents();
	}

	initEvents() {
		this.el.addEventListener('click', () => this.onClick());
		this.el.addEventListener('focus', () => this.onFocus());
		this.el.addEventListener('blur', () => this.onBlur());
	}

	onClick() {
		this.toggle();
	}

	onFocus() {
		this.el.classList.add('focus');
	}

	onBlur() {
		this.el.classList.remove('focus');
	}

	toggle() {
		if ('true' === this.el.getAttribute('aria-expanded')) {
			this.el.setAttribute('aria-expanded', false);
		} else {
			this.el.setAttribute('aria-expanded', true);
		}

		this.elements.forEach($el => toggle($el));
	}
}

export default DisclosureButton;
